CREATE OR REPLACE PACKAGE PKG_PROC_REMUN
IS
    V_MENSAJE_ERROR VARCHAR2(200);
    V_RUTINA_ERROR VARCHAR2(200);
    V_SEC_ERROR NUMBER:=0;
    
    CURSOR CUR_EMP_TRABAJA IS
        SELECT
            E.employee_id,
            COUNT(M.employee_id) TOTAL_EMP,
            E.SALARY SALARIO,
            ROUND(E.SALARY*NVL(E.COMMISSION_PCT, 0)) TOTAL_COMISION,
            L.CITY
        FROM EMPLOYEES E
        LEFT JOIN EMPLOYEES M
        ON E.employee_id = M.MANAGER_ID
        LEFT JOIN DEPARTMENTS D
        ON E.DEPARTMENT_ID = D.DEPARTMENT_ID
        LEFT JOIN LOCATIONS L
        ON L.LOCATION_ID = D.LOCATION_ID
        GROUP BY E.EMPLOYEE_ID, E.SALARY, E.COMMISSION_PCT, L.CITY;
        
        FUNCTION F_OBT_DESCT_SINDICATO(P_SUELDO_BASE NUMBER, P_ID_EMP NUMBER) RETURN NUMBER;
        
        PROCEDURE P_GRABAR_ERROR(P_RUTINA_ERROR VARCHAR2, P_MENSAJE_ERROR VARCHAR2);
END PKG_PROC_REMUN;

CREATE OR REPLACE PACKAGE BODY PKG_PROC_REMUN
IS
    FUNCTION F_OBT_DESCT_SINDICATO(P_SUELDO_BASE NUMBER, P_ID_EMP NUMBER)
    RETURN NUMBER
    IS
        V_DESCT_SINDICATO NUMBER;
    BEGIN
        SELECT
            ROUND(P_SUELDO_BASE*TDS.PORC_DS)
        INTO V_DESCT_SINDICATO
        FROM TRAMO_DESCTO_SINDICATO TDS
        WHERE P_SUELDO_BASE BETWEEN TDS.TRAMO_INF_DS AND TDS.TRAMO_SUP_DS;
        
        RETURN V_DESCT_SINDICATO;
        
    EXCEPTION
        WHEN OTHERS THEN
            V_MENSAJE_ERROR := SQLERRM;
            V_RUTINA_ERROR := 'ERROR EN F_OBT_DESCT_SINDICATO, EMP: '||P_ID_EMP;
            P_GRABAR_ERROR(V_RUTINA_ERROR, V_MENSAJE_ERROR);
            RETURN -1;
    END F_OBT_DESCT_SINDICATO;
    
    PROCEDURE P_GRABAR_ERROR(P_RUTINA_ERROR VARCHAR2, P_MENSAJE_ERROR VARCHAR2)
    IS
    BEGIN
        V_SEC_ERROR := V_SEC_ERROR + 1;
        INSERT INTO ERROR_PROCESO VALUES(V_SEC_ERROR, P_RUTINA_ERROR, P_MENSAJE_ERROR);
    END P_GRABAR_ERROR;
END PKG_PROC_REMUN;

---------------------------------------------

SELECT
    EMPLOYEE_ID,
    SALARY,
    PKG_PROC_REMUN.f_obt_desct_sindicato(SALARY, EMPLOYEE_ID) DESCT_SINDICATO
FROM EMPLOYEES;
------------------------------------------------------

CREATE OR REPLACE PROCEDURE SP_CALC_REMUN (P_VALOR_COLACION NUMBER, P_VALOR_MOVIL NUMBER, P_FECHA_PROCESO VARCHAR2)
IS
V_VALOR_COM_JEFE NUMBER;
V_VALOR_DESCTO_SIN NUMBER;
V_ALCANCE_LIQUIDO NUMBER;
V_VALOR_MOVIL NUMBER;
BEGIN
    EXECUTE IMMEDIATE('TRUNCATE TABLE ERROR_PROCESO');
    EXECUTE IMMEDIATE('TRUNCATE TABLE HABER_CALC_SALARIO');
    
    /* Esta variable se inicializa en cero porque se usará para simular una secuencia
    al insertar los errores en el package. No se usa objeto secuencia porque al eliminarla
    y volver a crearla en este procedimiento, el package se descompila y no se puede ejecutar */
    PKG_PROC_REMUN.V_SEC_ERROR := 0;
    
    FOR REG_EMP_TRABAJA IN PKG_PROC_REMUN.cur_emp_trabaja LOOP
        V_VALOR_COM_JEFE := 0;
        V_VALOR_DESCTO_SIN := 0;
        
        -- Inicio bloque anidado para manejar excepciones de un SELECT
        BEGIN
            IF REG_EMP_TRABAJA.total_emp > 0 THEN -- TIENE EMPLEADOS A CARGO?
                SELECT
                    ROUND(REG_EMP_TRABAJA.salario * (trj.porc_asig_jefe/100))
                INTO V_VALOR_COM_JEFE
                FROM TRAMO_ASIG_JEFE trj
                WHERE REG_EMP_TRABAJA.total_emp BETWEEN trj.tramo_inf_aj AND trj.tramo_sup_aj;
            END IF;
        EXCEPTION
            WHEN OTHERS THEN
                PKG_PROC_REMUN.V_MENSAJE_ERROR := SQLERRM;
                PKG_PROC_REMUN.V_RUTINA_ERROR := 'Error al obtener el % de asignación de el jefe, id: '|| REG_EMP_TRABAJA.employee_id;
                PKG_PROC_REMUN.P_GRABAR_ERROR(PKG_PROC_REMUN.v_rutina_error, PKG_PROC_REMUN.v_mensaje_error);
        END;
        
        V_VALOR_DESCTO_SIN := PKG_PROC_REMUN.F_OBT_DESCT_SINDICATO(REG_EMP_TRABAJA.salario, REG_EMP_TRABAJA.employee_id);
        
        /* Aumenta en 25% el valor de movilización a los empleados que trabajen en Toronto o Londres */
        
        IF REG_EMP_TRABAJA.city IN ('Toronto', 'Londres') THEN
            v_valor_movil := ROUND(p_valor_movil * 1.25);
        ELSE
             v_valor_movil := p_valor_movil;
        END IF;
        
        V_ALCANCE_LIQUIDO := (REG_EMP_TRABAJA.salario + 
                                REG_EMP_TRABAJA.total_comision + 
                                v_valor_com_jefe +
                                p_valor_colacion+v_valor_movil )- v_valor_descto_sin;
                                
        -- Inserta en la tabla HABER_CALC_SALARIO el resultado de cálculos de haberes
        INSERT INTO HABER_CALC_SALARIO VALUES(REG_EMP_TRABAJA.employee_id, 
                                                p_fecha_proceso, 
                                                reg_emp_trabaja.salario, 
                                                reg_emp_trabaja.total_comision, 
                                                v_valor_com_jefe, 
                                                p_valor_colacion, 
                                                v_valor_movil, 
                                                v_valor_descto_sin,      	
                                                v_alcance_liquido); 
        COMMIT;	                 
        
    END LOOP;
END SP_CALC_REMUN;

-- Valor Colación, Valor Móvil, Fecha Proceso
EXEC SP_CALC_REMUN(300,500,TO_CHAR(SYSDATE,'YYYYMM'));
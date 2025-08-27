SET SERVEROUTPUT ON;

DECLARE
    CURSOR CUR_EMP (P_DPTO_ID NUMBER) IS
        SELECT
            employee_id,
            first_name||' '||last_name,
            salary,
            manager_id,
            department_id,
            commission_pct
        FROM EMPLOYEES
        WHERE department_id = P_DPTO_ID;
        
    CURSOR CUR_DPTO IS
        SELECT
            department_id,
            department_name,
            manager_id,
            location_id
        FROM DEPARTMENTS;
        
    TYPE REGISTRO_DEPARTAMENTOS_TYPE IS RECORD
        (ID NUMBER,
        NOMBRE VARCHAR2(50),
        MNGR_ID NUMBER,
        LCTN_ID NUMBER);
        
    TYPE REGISTRO_EMPLEADOS_TYPE IS RECORD
        (ID NUMBER,
        NOMBRE VARCHAR(50),
        SALARIO NUMBER,
        MNGR_ID NUMBER,
        DPTO_ID NUMBER,
        BONO NUMBER);
        
    
    REGISTRO_EMP REGISTRO_EMPLEADOS_TYPE;
    REGISTRO_DPTO REGISTRO_DEPARTAMENTOS_TYPE;
    
    V_NOMBRESUP VARCHAR2(50);
    V_NOMBRESUPDPTO VARCHAR2(50);
    V_NUMEMP NUMBER;
    V_BONO NUMBER;
BEGIN

    OPEN CUR_DPTO;
    LOOP
        FETCH CUR_DPTO INTO REGISTRO_DPTO;
        EXIT WHEN CUR_DPTO%NOTFOUND;
        
        V_NUMEMP := 0;
        
        DBMS_OUTPUT.PUT_LINE('Departamento: '||REGISTRO_DPTO.nombre||' - ID: '|| REGISTRO_DPTO.id);
        
        BEGIN
            SELECT first_name || ' ' || last_name
            INTO V_NOMBRESUPDPTO
            FROM EMPLOYEES
            WHERE employee_id = REGISTRO_DPTO.mngr_id;
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                V_NOMBRESUPDPTO := 'No Tiene';
        END;
        
        DBMS_OUTPUT.PUT_LINE('Supervisor de el departamento: '||V_NOMBRESUPDPTO);
        
        OPEN CUR_EMP(REGISTRO_DPTO.id);
        LOOP
            FETCH CUR_EMP INTO REGISTRO_EMP;
            EXIT WHEN CUR_EMP%NOTFOUND;
            
            V_NUMEMP := V_NUMEMP + 1;
        
            BEGIN
                SELECT first_name || ' ' || last_name
                INTO V_NOMBRESUP
                FROM EMPLOYEES
                WHERE employee_id = REGISTRO_EMP.mngr_id;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN
                    V_NOMBRESUP := 'No Tiene';
            END;
            
            DBMS_OUTPUT.PUT_LINE('  ID: '||REGISTRO_EMP.id);
            DBMS_OUTPUT.PUT_LINE('  Empleado: '||REGISTRO_EMP.nombre);
            DBMS_OUTPUT.PUT_LINE('  Supervisor: '||V_NOMBRESUP);
            DBMS_OUTPUT.PUT_LINE('  Departamento Id: '|| REGISTRO_EMP.DPTO_ID);
            DBMS_OUTPUT.PUT_LINE('  Salario Base: '|| TO_CHAR(REGISTRO_EMP.salario, 'FM$999g999g999'));
            DBMS_OUTPUT.PUT_LINE('  ');
        END LOOP;
        CLOSE CUR_EMP;
        
        IF V_NUMEMP = 0 THEN
            DBMS_OUTPUT.PUT_LINE('  No tiene empleados asociados');
        ELSE
            DBMS_OUTPUT.PUT_LINE('Cantidad de empleados: '||V_NUMEMP);
        END IF;
        DBMS_OUTPUT.PUT_LINE('  ');
    END LOOP;
    CLOSE CUR_DPTO;
END;
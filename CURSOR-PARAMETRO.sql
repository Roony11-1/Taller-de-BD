SET SERVEROUTPUT ON;

DECLARE
    CURSOR CUR_EMPLEADOS (P_DPTO_ID NUMBER, P_MIN_SALARY NUMBER) IS
        SELECT 
            *
        FROM EMPLOYEES
        WHERE DEPARTMENT_ID = P_DPTO_ID AND SALARY >= P_MIN_SALARY;
        
        V_DPTO NUMBER;
        V_MINSALARY NUMBER;
BEGIN
    V_DPTO := 150;
    V_MINSALARY := 2700;
    
    DBMS_OUTPUT.PUT_LINE('MOSTRANDO LOS EMPLEADOS DEL DEPARTAMENTO ID: '||V_DPTO||' CON SALARIO MINIMO: '||V_MINSALARY);
    
    FOR REGISTRO IN CUR_EMPLEADOS (V_DPTO, V_MINSALARY) LOOP
        DBMS_OUTPUT.PUT_LINE('ID     : '||REGISTRO.EMPLOYEE_ID);
        DBMS_OUTPUT.PUT_LINE('NOMBRE : '||REGISTRO.FIRST_NAME||' '||REGISTRO.LAST_NAME);
        DBMS_OUTPUT.PUT_LINE('SUELDO : '||REGISTRO.SALARY);
        DBMS_OUTPUT.PUT_LINE('DPTO   : '||REGISTRO.DEPARTMENT_ID);
        DBMS_OUTPUT.PUT_LINE('-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-');
    END LOOP;
END;

-------------------------------------------------------------------------------------------

DECLARE
    CURSOR CUR_EMPLEADOS (P_MIN_SALARY NUMBER) IS
        SELECT 
            EMPLOYEE_ID,
            FIRST_NAME||' '||LAST_NAME NOMBRE,
            SALARY
        FROM EMPLOYEES
        WHERE SALARY >= P_MIN_SALARY;
        
        V_MINSALARY NUMBER;
        
        V_ID NUMBER;
        V_NOMBRE VARCHAR2(50);
        V_SALARY NUMBER;
BEGIN
    V_MINSALARY := 2500;

    OPEN CUR_EMPLEADOS (V_MINSALARY);
    
    DBMS_OUTPUT.PUT_LINE('Mostrando a los empleados con un salario minimo de: '||V_MINSALARY);
    LOOP
        FETCH CUR_EMPLEADOS
            INTO V_ID, V_NOMBRE, V_SALARY;
        EXIT WHEN CUR_EMPLEADOS%NOTFOUND;
            
        DBMS_OUTPUT.PUT_LINE('ID: '||V_ID||' - NOMBRE: '||V_NOMBRE||' - SALARIO: '||V_SALARY);
    END LOOP;
    
    CLOSE CUR_EMPLEADOS;
END;

---------------------------------------------------------------------------------------------

DECLARE
    V_ISEMPTY BOOLEAN;
BEGIN
    FOR REGISTRO_DEPARTAMENTOS IN
    (SELECT 
        DEPARTMENT_ID,
        DEPARTMENT_NAME
    FROM DEPARTMENTS) 
    LOOP
        DBMS_OUTPUT.PUT_LINE('| -- ID: '||REGISTRO_DEPARTAMENTOS.DEPARTMENT_ID||' - NOMBRE: '||REGISTRO_DEPARTAMENTOS.DEPARTMENT_NAME||' -- |');
        
        V_ISEMPTY := TRUE;
        
        FOR REGISTRO_EMPLEADOS IN
        (SELECT
            *
        FROM EMPLOYEES
        WHERE REGISTRO_DEPARTAMENTOS.DEPARTMENT_ID = DEPARTMENT_ID)
        LOOP
            V_ISEMPTY := FALSE;
            DBMS_OUTPUT.PUT_LINE('Nombre: '||REGISTRO_EMPLEADOS.FIRST_NAME||' - DEPARTAMENTO: '||REGISTRO_EMPLEADOS.DEPARTMENT_ID);
        
        END LOOP;
        
        IF V_ISEMPTY THEN
            DBMS_OUTPUT.PUT_LINE('| -- EL DEPARTAMENTO: '||REGISTRO_DEPARTAMENTOS.DEPARTMENT_ID||' NO TIENE EMPLEADOS -- |');
        END IF;
    END LOOP;
END;

------------------------------------------------

DECLARE
BEGIN
    FOR REGISTRO IN
    (
        SELECT 
            D.DEPARTMENT_ID,
            D.DEPARTMENT_NAME,
            E.EMPLOYEE_ID,
            E.FIRST_NAME || ' ' || E.LAST_NAME NOMBRE,
            E.SALARY
        FROM DEPARTMENTS D
        LEFT JOIN EMPLOYEES E
            ON D.DEPARTMENT_ID = E.DEPARTMENT_ID
        ORDER BY D.DEPARTMENT_ID, E.EMPLOYEE_ID
    )
    LOOP
        IF REGISTRO.EMPLOYEE_ID IS NULL THEN
            DBMS_OUTPUT.PUT_LINE('| -- ID DEPTO: '||REGISTRO.DEPARTMENT_ID||
                                 ' - NOMBRE: '||REGISTRO.DEPARTMENT_NAME||
                                 ' -- | (Sin empleados)');
        ELSE
            DBMS_OUTPUT.PUT_LINE('| -- ID DEPTO: '||REGISTRO.DEPARTMENT_ID||
                                 ' - NOMBRE: '||REGISTRO.DEPARTMENT_NAME||' -- | '||
                                 'Empleado: '||REGISTRO.NOMBRE||
                                 ' - Sueldo: '||REGISTRO.SALARY);
        END IF;
    END LOOP;
END;
SET SERVEROUTPUT ON;

-- CURSORES CON PARAMETROS

DECLARE
    CURSOR CUR_DEPARTAMENTOS IS
        SELECT
            department_id,
            department_name
        FROM DEPARTMENTS;
        
    CURSOR CUR_EMPLEADO(P_DEPARTAMENTO NUMBER) IS
        SELECT
            e.employee_id ID,
            e.first_name||' '||e.last_name NOMBRE,
            e.salary SALARIO,
            d.department_name DEPARTAMENTO,
            l.city CIUDAD
        FROM EMPLOYEES e
        JOIN DEPARTMENTS d
            ON e.department_id = d.department_id
        JOIN LOCATIONS l
            ON l.location_id = d.location_id
        WHERE d.department_id = P_DEPARTAMENTO;
BEGIN
    FOR REGISTRO_DPTO IN CUR_DEPARTAMENTOS LOOP
        DBMS_OUTPUT.PUT_LINE('Departamento: '||REGISTRO_DPTO.department_name);
        FOR REGISTRO_EMP IN CUR_EMPLEADO(REGISTRO_DPTO.department_id) LOOP
            DBMS_OUTPUT.PUT_LINE('- Empleado: '||REGISTRO_EMP.NOMBRE||' -----------');
            DBMS_OUTPUT.PUT_LINE('-- ID: '|| REGISTRO_EMP.ID);
            DBMS_OUTPUT.PUT_LINE('-- SALARIO: '|| REGISTRO_EMP.SALARIO);
            DBMS_OUTPUT.PUT_LINE('-- DEPARTAMENTO: '|| REGISTRO_EMP.DEPARTAMENTO);
            DBMS_OUTPUT.PUT_LINE('-- LOCACIÓN: '|| REGISTRO_EMP.CIUDAD);
            DBMS_OUTPUT.PUT_LINE('');
        END LOOP;
    END LOOP;
END;

--MOSTRAR, SOLO A LOS QUE TRABAJAN EN EL DEPARTAMENTO 30;
/
VARIABLE B_DPTO NUMBER;
DECLARE
    CURSOR CUR_EMPLEADOS (P_DEPARTMENT NUMBER) IS 
        Select
            E.Employee_Id,
            E.First_Name||' '||E.Last_Name NOMBRE,
            E.Salary,
            d.department_id,
            d.department_name,
            l.city
        From Employees E JOIN DEPARTMENTS D
        ON E.DEPARTMENT_ID = d.department_ID
        JOIN LOCATIONS L 
        ON d.location_id=l.location_id
        WHERE e.department_id=P_DEPARTMENT;        

BEGIN 
    :B_DPTO:=30;
    FOR REGISTRO IN CUR_EMPLEADOS(:B_DPTO) LOOP
    
        DBMS_OUTPUT.PUT_LINE('ID     : '||REGISTRO.EMPLOYEE_ID);
        DBMS_OUTPUT.PUT_LINE('NOMBRE : '||REGISTRO.NOMBRE);
        DBMS_OUTPUT.PUT_LINE('SUELDO : '||REGISTRO.SALARY);
        DBMS_OUTPUT.PUT_LINE('DPTO   : '||REGISTRO.DEPARTMENT_ID);
        DBMS_OUTPUT.PUT_LINE('DPTO   : '||REGISTRO.DEPARTMENT_NAME);
        DBMS_OUTPUT.PUT_LINE('CIUDAD : '||REGISTRO.CITY);
        DBMS_OUTPUT.PUT_LINE('-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-');

    END LOOP;
END;

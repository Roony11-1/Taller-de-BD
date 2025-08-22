DECLARE
BEGIN
    FOR REGISTRO_EMPLEADO IN (
        SELECT 
            EMPLOYEE_ID,
            FIRST_NAME||' '||LAST_NAME NOMBRE,
            SALARY
        FROM EMPLOYEES)
    LOOP
        DBMS_OUTPUT.PUT_LINE('ID EXISTENTE: '||REGISTRO_EMPLEADO.employee_id||
                             ' NOMBRE: '|| REGISTRO_EMPLEADO.NOMBRE||
                             ' SUELDO: '||REGISTRO_EMPLEADO.salary);
    END LOOP;
END;
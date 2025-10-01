DROP TABLE EMP_EMAILS;

CREATE TABLE EMP_EMAILS(nombre VARCHAR2(250),
                        email VARCHAR2(250));
                        
CREATE OR REPLACE PROCEDURE SP_GUARDAR_CORREO(P_NOMBRE VARCHAR2, P_EMAIL VARCHAR2)
IS
BEGIN
    INSERT INTO EMP_EMAILS VALUES(P_NOMBRE, P_EMAIL);
END;

CREATE OR REPLACE FUNCTION FN_GENERAR_CORREO(P_NOMBRE VARCHAR2, P_ANTIGUEDAD DATE)
RETURN VARCHAR2
IS
    V_EMAIL VARCHAR2(250);
BEGIN
    V_EMAIL := SUBSTR(P_NOMBRE, 1, 1)||FN_CALCULAR_ANTIGUEDAD(P_ANTIGUEDAD)||'@gmail.com';

    RETURN V_EMAIL;
END FN_GENERAR_CORREO;

DECLARE
    V_EMAIL VARCHAR2(250);
BEGIN
    FOR REG_EMP IN (
    SELECT 
        first_name,
        hire_date
    FROM EMPLOYEES) LOOP
        V_EMAIL := FN_GENERAR_CORREO(REG_EMP.first_name, REG_EMP.hire_date);
        SP_GUARDAR_CORREO(REG_EMP.first_name, V_EMAIL);
    END LOOP;
END;

-- funcion que retorne la cantidad de años que lleva trabajando un empleado

CREATE OR REPLACE FUNCTION FN_CALCULAR_ANTIGUEDAD(P_CONTRATACION DATE)
RETURN NUMBER
IS
    V_ANTIGUEDAD NUMBER;
BEGIN
    V_ANTIGUEDAD := TRUNC((SYSDATE-P_CONTRATACION)/365);
    
    RETURN V_ANTIGUEDAD;
END FN_CALCULAR_ANTIGUEDAD;

DECLARE
BEGIN
    FOR REG_EMP IN (
    SELECT
        first_name,
        hire_date
    FROM EMPLOYEES) LOOP
        DBMS_OUTPUT.PUT_LINE('El empleado: '||REG_EMP.first_name||' ha trabajado '||FN_CALCULAR_ANTIGUEDAD(REG_EMP.hire_date)||' años');
    END LOOP;
END;

-- crear una funcion que retorne el monto de la comision de un trabajador
-- si el trabajador no tiene ese valor debe retornar 0, NO USAR NVL

CREATE OR REPLACE FUNCTION FN_MONTO_COMISION(P_ID NUMBER)
RETURN NUMBER
IS
    V_MONTO NUMBER;
BEGIN
    SELECT
        COMMISSION_PCT
    INTO V_MONTO
    FROM EMPLOYEES
    WHERE P_ID = employee_id;
    
    IF V_MONTO IS NOT NULL THEN
        RETURN V_MONTO;
    ELSE
        RETURN 0;
    END IF;
END FN_MONTO_COMISION;

DECLARE
BEGIN
    FOR REG_EMP IN (
    SELECT
        employee_id
    FROM EMPLOYEES)LOOP
        DBMS_OUTPUT.PUT_LINE('MONTO DE COMISION DE EL EMPLEADO CON ID '||REG_EMP.employee_id||' es '||FN_MONTO_COMISION(REG_EMP.employee_id));
    END LOOP;
END;

-- 

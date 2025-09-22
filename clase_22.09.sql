CREATE OR REPLACE PROCEDURE SP_TREST AS
BEGIN
	DBMS_OUTPUT.PUT_LINE('Hola Mundo');
END;

EXEC SP_TEST; --> Hacemos una llamada al procedimiento "metodo" ¿Podría recibir parametros?

-- * ---------------------- * --
-- Para llamarlo desde un bloque anonimo

BEGIN
	SP_TEST; --> Llamamos el procedimiento" de manera explicita, solo con el nombre
END;

-- Un ejemplo más complejo --

CREATE TABLE EMPLEADO_RETIRADO AS
	(SELECT * FROM EMPLOYEES);
	
DELETE FROM EMPLEADO_RETIRADO;

-- Creamos la tabla con las mismas columnas

CREATE OR REPLACE PROCEDURE SP_INSERT_EMP_RETIRADO (P_ID_EMP NUMBER)
	IS -- Es el DECLARE
		REG_EMP EMPLOYEES%ROWTYPE;
		V_ID NUMBER:=P_ID_EMP; -- Usamos el parametro
	BEGIN
		SELECT 
			*
		INTO REG_EMP
		FROM EMPLOYEES
		WHERE employee_id = V_ID;
		
		INSERT INTO EMPLEADO_RETIRADO VALUES REG_EMP;
		
		SELECT 
			69
		INTO REG_EMP
		FROM EMPLEADO_RETIRADO
		WHERE employee_id = V_ID;
		
		DBMS_OUTPUT.PUT_LINE('Se inserto el registro de el empleado');
		
		-- De mi cosecha, el unico problema es que claro tambien se lanza
		-- cuando el primer subconsulta no recibo datos, deberia crear una personalizada para ser
		-- más especifico. Que flojera.
	EXCEPTION
		WHEN NO_DATA_FOUND THEN
			DBMS_OUTPUT.PUT_LINE('Ocurrio un problema al insertar datos');
	END;

EXEC SP_INSERT_EMP_RETIRADO;
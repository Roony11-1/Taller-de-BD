DROP TABLE ERROR_PROCESO;

CREATE TABLE ERROR_PROCESO(
    sec_error NUMBER(3) NOT NULL,
    rutina_error VARCHAR2(100) NOT NULL,
    mensaje_error VARCHAR2(250) NOT NULL,
    FECHA_SUCESO DATE NOT NULL);
     
DROP TABLE RESUL_PROC_CALC_PROMEDIO;
     
CREATE TABLE RESUL_PROC_CALC_PROMEDIO(
    sec_resul NUMBER,
    id_estudiante NUMBER,
    nombre_estudiante VARCHAR2(250),
    nombre_carrera VARCHAR2(250),
    id_asignatura NUMBER,
    promedio NUMBER,
    situacion VARCHAR2(250));


-- Quiero llenar una tabla de cálculo de promedios digamos TABLA(ALUMNO, FACULTAD, CARRERA, ASIGNATURA, PROMEDIOS (Y NOTAS TALVEZ), SITUACION)
-- EN CASO DE ERROR LLENAR UNA TABLA PROC_ERROR(EN QUE PROCESO DA ERROR, ERROR, Y SU CODIGO)
CREATE OR REPLACE PACKAGE PKG_PROC_CALC_PROMEDIO
IS
    V_MENSAJE_ERROR VARCHAR2(200);
    V_RUTINA_ERROR VARCHAR2(200);
    V_SEC_ERROR NUMBER;
	
	-- ¿Qué debería obtener de aqui para que resulte?
	-- OBTENER AL ALUMNO SU CARRERA, ASIGNATURAS Y SUS NOTAS DE ELLAS
	-- LUEGO GUARDO LAS NOTAS EN UN VARRAY Y LOS METO A LA FUNC F_OBT_PROM_ALUM Y DEJO FILTRADO POR ASIGNATURA
	CURSOR CUR_ALUM_PROC_CALC_PROMEDIO IS
		SELECT
            e.id_estudiante,
            e.pnombre_estudiante || CASE WHEN e.snombre_estudiante IS NOT NULL THEN ' ' || e.snombre_estudiante ELSE '' END
            || ' ' || e.papellido_estudiante ||
            CASE WHEN e.sapellido_estudiante IS NOT NULL THEN ' ' || e.sapellido_estudiante ELSE '' END nombre_completo,
            c.nombre_carrera,
            a.id_asignatura
        FROM ESTUDIANTE e
        LEFT JOIN CARRERA c
            ON e.id_carrera = c.id_carrera
        LEFT JOIN INSCRIPCION i
            ON e.id_estudiante = i.id_estudiante
        LEFT JOIN ASIGNATURA a
            ON i.id_asignatura = a.id_asignatura
        LEFT JOIN EVALUACION ev
            ON ev.id_asignatura = a.id_asignatura
        ORDER BY e.id_estudiante, a.id_asignatura;
			
	FUNCTION F_OBT_PROM_ALUM(P_ID_ESTUDIANTE NUMBER, P_ID_ASIGNATURA NUMBER) RETURN NUMBER;
	FUNCTION F_OBT_SITUACION_ALUMN(P_PROMEDIO NUMBER) RETURN VARCHAR2;
	
	PROCEDURE P_GRABAR_ERROR(P_RUTINA_ERROR VARCHAR2, P_MENSAJE_ERROR VARCHAR2);
    
	PROCEDURE P_GRABAR_CALC_PROM_ALUMNO; -- USARA LOS DATOS INTERNOS DE EL PAKETE
	
END PKG_PROC_CALC_PROMEDIO;

CREATE OR REPLACE PACKAGE BODY PKG_PROC_CALC_PROMEDIO
IS
    ---------------------------
    --    F_OBT_PROM_ALUM   --
    ---------------------------
    
    FUNCTION F_OBT_PROM_ALUM(P_ID_ESTUDIANTE NUMBER, P_ID_ASIGNATURA NUMBER) RETURN NUMBER
    IS
        V_PROMEDIO NUMBER;
        
        EXCEPTION_NOTASPENDIENTE EXCEPTION;
    BEGIN
        SELECT 
            AVG(rev.nota_resul_eval)
        INTO V_PROMEDIO
        FROM ESTUDIANTE e
        LEFT JOIN INSCRIPCION i 
               ON e.id_estudiante = i.id_estudiante
        LEFT JOIN ASIGNATURA a 
               ON i.id_asignatura = a.id_asignatura
        LEFT JOIN EVALUACION ev 
               ON ev.id_asignatura = a.id_asignatura
        LEFT JOIN RESULTADO_EVALUACION rev 
               ON rev.id_evaluacion = ev.id_evaluacion
        WHERE e.id_estudiante = P_ID_ESTUDIANTE
          AND (P_ID_ASIGNATURA IS NULL OR a.id_asignatura = P_ID_ASIGNATURA);
        
        IF V_PROMEDIO IS NULL THEN
            RAISE EXCEPTION_NOTASPENDIENTE;
        END IF;
        
        RETURN ROUND(V_PROMEDIO, 2);
        
    EXCEPTION
        WHEN EXCEPTION_NOTASPENDIENTE THEN
            V_MENSAJE_ERROR:= 'El alumno tiene notas pendientes!';
            V_RUTINA_ERROR:= 'Error en el cálculo de promedio de el estudiante con ID: '||P_ID_ESTUDIANTE;
            P_GRABAR_ERROR(V_RUTINA_ERROR, V_MENSAJE_ERROR);
            RETURN NULL;
    END F_OBT_PROM_ALUM;
    
    ---------------------------
    
    --------------------------------
    --   F_OBT_SITUACION_ALUMN    --
    --------------------------------
    
    FUNCTION F_OBT_SITUACION_ALUMN(P_PROMEDIO NUMBER) RETURN VARCHAR2
    IS
        V_SITUACION VARCHAR2(250);
    BEGIN
        V_SITUACION :=  CASE
                            WHEN P_PROMEDIO >= 4 THEN 'APROBADO'
                            WHEN P_PROMEDIO IS NULL THEN 'SIN NOTAS'
                            ELSE 'REPROBADO'
                        END;
                        
        RETURN V_SITUACION;
    END F_OBT_SITUACION_ALUMN;
    
    --------------------------------
    ----- PROCEDIMIENTOS -----------
    
    PROCEDURE P_GRABAR_ERROR(P_RUTINA_ERROR VARCHAR2, P_MENSAJE_ERROR VARCHAR2)
    IS
    BEGIN
        -- Obtenemos el id para seguir llenando la tabla si ejecutamos denuevo
        SELECT 
            NVL(MAX(sec_error), 0) + 1
        INTO V_SEC_ERROR
        FROM ERROR_PROCESO;
        
        INSERT INTO ERROR_PROCESO VALUES(V_SEC_ERROR, P_RUTINA_ERROR, P_MENSAJE_ERROR, SYSDATE);
    END P_GRABAR_ERROR;
    
    -- GRABAR CALCULOS DE PROMEDIO --
    
    PROCEDURE P_GRABAR_CALC_PROM_ALUMNO
    IS
        V_ID_ACTUAL NUMBER := NULL;
        V_NOMBRE_ESTUDIANTE VARCHAR2(255);
        V_NOMBRE_CARRERA VARCHAR2(255);
        V_ID_ASIG_ACTUAL NUMBER := NULL;
        V_PROMEDIO NUMBER;
        V_SITUACION VARCHAR2(255);
    BEGIN
        FOR REG IN CUR_ALUM_PROC_CALC_PROMEDIO LOOP
            -- HACE EL INGRESO DE LOS DATOS INGRESA EL ID ESTUDIANTE QUE CORRESPOND Y SU ASIGNATURA
            IF ((V_ID_ACTUAL IS NOT NULL) AND (V_ID_ACTUAL != REG.id_estudiante OR V_ID_ASIG_ACTUAL != REG.id_asignatura OR V_ID_ASIG_ACTUAL IS NULL)) THEN
                V_PROMEDIO := F_OBT_PROM_ALUM(V_ID_ACTUAL, V_ID_ASIG_ACTUAL);
                V_SITUACION := F_OBT_SITUACION_ALUMN(V_PROMEDIO);
    
                INSERT INTO RESUL_PROC_CALC_PROMEDIO(
                    id_estudiante, nombre_estudiante,
                    nombre_carrera, id_asignatura,
                    promedio, situacion) 
                VALUES(V_ID_ACTUAL, V_NOMBRE_ESTUDIANTE,
                    V_NOMBRE_CARRERA, V_ID_ASIG_ACTUAL,
                    V_PROMEDIO, V_SITUACION);
            END IF;
            
            -- NO ENTRAMOS AL IF INMEDIATAMENTE POR LO QUE SE DA POR HECHO
            -- QUE SIEMPRE ESTARAN ACTUALZIADOS HASTA QUE INSERTE
            V_ID_ACTUAL := REG.id_estudiante;
            V_ID_ASIG_ACTUAL := REG.id_asignatura;
            V_NOMBRE_ESTUDIANTE := REG.nombre_completo;
            V_NOMBRE_CARRERA := REG.nombre_carrera;
        END LOOP;
        
        IF V_ID_ACTUAL IS NOT NULL THEN
            V_PROMEDIO := F_OBT_PROM_ALUM(V_ID_ACTUAL, V_ID_ASIG_ACTUAL);
            V_SITUACION := F_OBT_SITUACION_ALUMN(V_PROMEDIO);
            
            INSERT INTO RESUL_PROC_CALC_PROMEDIO(
                id_estudiante, nombre_estudiante,
                nombre_carrera, id_asignatura,
                promedio, situacion) 
            VALUES(V_ID_ACTUAL, V_NOMBRE_ESTUDIANTE,
                V_NOMBRE_CARRERA, V_ID_ASIG_ACTUAL,
                V_PROMEDIO, V_SITUACION);
        END IF;
        
        commit;
    END P_GRABAR_CALC_PROM_ALUMNO;
END PKG_PROC_CALC_PROMEDIO;
/

select * from resul_proc_calc_promedio;

EXEC PKG_PROC_CALC_PROMEDIO.P_GRABAR_CALC_PROM_ALUMNO;

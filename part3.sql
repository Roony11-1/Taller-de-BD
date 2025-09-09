-- - Crear un VARRAY que almacene las notas obtenidas por un estudiante en sus evaluaciones

DECLARE
    TYPE VAR_NOTAS_TYPE IS VARRAY(10) OF NUMBER;
    
    VAR_NOTAS VAR_NOTAS_TYPE := VAR_NOTAS_TYPE();
    
    V_IDESTUDIANTE NUMBER := &V_IDESTUDIANTE;
    
    -- DATOS DE EL ESTUDIANTE
    V_NOMBRE VARCHAR2(254);
    
    EXCEPTION_NNOTAS EXCEPTION;
BEGIN
    SELECT 
        e.pnombre_estudiante
        || CASE WHEN e.snombre_estudiante IS NOT NULL THEN ' ' || e.snombre_estudiante ELSE '' END
        || ' ' || e.papellido_estudiante
        || CASE WHEN e.sapellido_estudiante IS NOT NULL THEN ' ' || e.sapellido_estudiante ELSE '' END nombre_completo
    INTO V_NOMBRE
    FROM ESTUDIANTE e
    WHERE e.id_estudiante = V_IDESTUDIANTE;

    FOR REG_ESTUDIANTE_NOTAS IN (
        SELECT 
            e.id_estudiante,
            re.id_resul_eval,
            re.nota_resul_eval
        FROM ESTUDIANTE e
        LEFT JOIN RESULTADO_EVALUACION re
        ON e.id_estudiante = re.id_estudiante
        WHERE e.id_estudiante = V_IDESTUDIANTE) LOOP
        
        IF REG_ESTUDIANTE_NOTAS.nota_resul_eval IS NOT NULL THEN
            VAR_NOTAS.EXTEND;
            VAR_NOTAS(VAR_NOTAS.LAST) := REG_ESTUDIANTE_NOTAS.nota_resul_eval;
        ELSE
            RAISE EXCEPTION_NNOTAS;
        END IF;   
    END LOOP;
    
    DBMS_OUTPUT.PUT_LINE('Notas de: '||V_NOMBRE);
    FOR i IN 1 .. VAR_NOTAS.COUNT LOOP
        DBMS_OUTPUT.PUT_LINE('Nota ' || i || ': ' || VAR_NOTAS(i));
    END LOOP;
    
EXCEPTION
    WHEN EXCEPTION_NNOTAS THEN
        DBMS_OUTPUT.PUT_LINE('[WARN] El estudiante: '||V_NOMBRE||' no posee notas registradas');
        
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('[ERROR] No existe un estudiante con id: '||V_IDESTUDIANTE);
END;

-- Definir un REGISTRO para representar la información completa de un estudiante (RUT, nombre, carrera, promedio)

DECLARE
    V_ID_ESTUDIANTE NUMBER := &V_ID_ESTUDIANTE;
	
	TYPE REGISTRO_ESTUDIANTE_TYPE IS RECORD(
	rut VARCHAR2(50),
	nombre VARCHAR2(254),
	carrera VARCHAR2(555),
	promedio NUMBER);
	
	REGISTRO_ESTUDIANTE REGISTRO_ESTUDIANTE_TYPE;
BEGIN
    SELECT
        e.pnombre_estudiante
        || CASE WHEN e.snombre_estudiante IS NOT NULL THEN ' ' || e.snombre_estudiante ELSE '' END
        || ' ' || e.papellido_estudiante
        || CASE WHEN e.sapellido_estudiante IS NOT NULL THEN ' ' || e.sapellido_estudiante ELSE '' END nombre_estudiante,
        e.run_estudiante||'-'||e.dv_estudiante rut_estudiante,
        (SELECT
            nombre_carrera
        FROM CARRERA c
        WHERE e.id_carrera = c.id_carrera) carrera,
        (SELECT
            ROUND(AVG(re.nota_resul_eval), 1)
        FROM RESULTADO_EVALUACION re
        WHERE e.id_estudiante = re.id_estudiante) promedio
    INTO REGISTRO_ESTUDIANTE.nombre, REGISTRO_ESTUDIANTE.rut, REGISTRO_ESTUDIANTE.carrera, REGISTRO_ESTUDIANTE.promedio
    FROM ESTUDIANTE e
    WHERE e.id_estudiante = V_ID_ESTUDIANTE;
    
    DBMS_OUTPUT.PUT_LINE('Estudiante id: '|| V_ID_ESTUDIANTE);
    DBMS_OUTPUT.PUT_LINE('Nombre: '||REGISTRO_ESTUDIANTE.nombre);
    DBMS_OUTPUT.PUT_LINE('Rut: '||REGISTRO_ESTUDIANTE.rut);
    DBMS_OUTPUT.PUT_LINE('Carrera: '||REGISTRO_ESTUDIANTE.carrera);
    IF REGISTRO_ESTUDIANTE.promedio IS NOT NULL THEN
        DBMS_OUTPUT.PUT_LINE('Promedio: '||REGISTRO_ESTUDIANTE.promedio);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Promedio: [Sin notas]');
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('[ERROR] No existe un estudiante con id: '||V_ID_ESTUDIANTE);
END;

-- Implementar un CURSOR con parámetros que muestre las asignaturas inscritas por un estudiante en un semestre específico.

DECLARE
	-- CURSOR CON 3 PARAMETROS
    CURSOR CUR_ASIGNATURAS(P_ID_ESTUDIANTE NUMBER, P_AÑO NUMBER, P_PERIODO NUMBER) IS
        SELECT 
            i.id_inscripcion,
            (SELECT -- ESTA SUBCONSULTA ES PORQUE ME DIO FLOJERA HACER UN JOIN
                e.pnombre_estudiante
                || CASE WHEN e.snombre_estudiante IS NOT NULL THEN ' ' || e.snombre_estudiante ELSE '' END
                || ' ' || e.papellido_estudiante
                || CASE WHEN e.sapellido_estudiante IS NOT NULL THEN ' ' || e.sapellido_estudiante ELSE '' END
            FROM ESTUDIANTE e
            WHERE e.id_estudiante = P_ID_ESTUDIANTE) nombre_estudiante,
            i.id_estudiante,
            s.año,
            p.nombre_periodo semestre,
            a.nombre_asignatura
        FROM INSCRIPCION i
        JOIN SEMESTRE s 
        ON i.id_semestre = s.id_semestre
        JOIN PERIODO p 
        ON s.id_periodo = p.id_periodo
        JOIN ASIGNATURA a 
        ON a.id_asignatura = i.id_asignatura
        WHERE s.año = P_AÑO AND p.id_periodo = P_PERIODO AND i.id_estudiante = P_ID_ESTUDIANTE
        ORDER BY nombre_estudiante;
    
    V_ID  NUMBER := &V_ID;
    V_AÑO NUMBER := &V_AÑO;
    V_PERIODO NUMBER := &V_PERIODO;
    V_COUNT NUMBER := 0;
    
    V_AÑO_MIN NUMBER;
    V_AÑO_MAX NUMBER;
    
    V_ID_MIN NUMBER;
    V_ID_MAX NUMBER;
    
    V_PERIODO_MIN NUMBER;
    V_PERIODO_MAX NUMBER;
    
    EXCEPTION_NNOTAS EXCEPTION;
    EXCEPTION_OVERFLOW_ID EXCEPTION;
    EXCEPTION_OVERFLOW_AÑO EXCEPTION;
    EXCEPTION_OVERFLOW_PERIODO EXCEPTION;

BEGIN
    -- VALIDACION ID
    SELECT 
        MIN(id_estudiante),
        MAX(id_estudiante)
    INTO V_ID_MIN, V_ID_MAX
    FROM ESTUDIANTE;
    
    IF V_ID NOT BETWEEN V_ID_MIN AND V_ID_MAX THEN
        RAISE EXCEPTION_OVERFLOW_ID;
    END IF;
    
    -- VALIDACICON AÑO
    SELECT 
        MIN(AÑO),
        MAX(AÑO)
    INTO V_AÑO_MIN, V_AÑO_MAX
    FROM SEMESTRE;
    
    IF V_AÑO NOT BETWEEN V_AÑO_MIN AND V_AÑO_MAX THEN
        RAISE EXCEPTION_OVERFLOW_AÑO;
    END IF;
    
    -- VALIDACION PERIODO
    SELECT 
        MIN(id_periodo),
        MAX(id_periodo)
    INTO V_PERIODO_MIN, V_PERIODO_MAX
    FROM PERIODO;
    
    IF V_PERIODO NOT BETWEEN V_PERIODO_MIN AND V_PERIODO_MAX THEN
        RAISE EXCEPTION_OVERFLOW_PERIODO;
    END IF;
    
    -- REGISTRO QUE MUESTRA TODAS LAS INSCRIPCIONES DE UN ESTUDIANTE EN UN SEMESTRE EN ESPECIFICO
    FOR REG IN CUR_ASIGNATURAS(V_ID, V_AÑO, V_PERIODO) LOOP
        DBMS_OUTPUT.PUT_LINE('[PRINT] Estudiante: '||REG.nombre_estudiante||' - id estudiante: '||REG.id_estudiante||' - Año: '||REG.año || ' - Semestre: ' || REG.semestre || ' - Asignatura: ' || REG.nombre_asignatura);
        V_COUNT := V_COUNT + 1;
        
    END LOOP;

	-- ¿ENCONTRO ALGUN DATO?
    IF V_COUNT = 0 THEN
        RAISE EXCEPTION_NNOTAS;
    END IF;
    
EXCEPTION
    WHEN EXCEPTION_NNOTAS THEN
        DBMS_OUTPUT.PUT_LINE('[WARN] No hay inscripciones para el estudiante con id: '||V_ID||' en el año: '||V_AÑO||' en el periodo: '||V_PERIODO);
    WHEN EXCEPTION_OVERFLOW_ID THEN
        DBMS_OUTPUT.PUT_LINE('[ERROR] El rango de id es desde '||V_ID_MIN||' hasta '||V_ID_MAX||' tu ingresaste: '||V_ID);
    WHEN EXCEPTION_OVERFLOW_AÑO THEN
        DBMS_OUTPUT.PUT_LINE('[ERROR] El rango de años es desde '||V_AÑO_MIN||' hasta '||V_AÑO_MAX||' tu ingresaste: '||V_AÑO);
    WHEN EXCEPTION_OVERFLOW_PERIODO THEN
        DBMS_OUTPUT.PUT_LINE('[ERROR] Los periodos son '||V_PERIODO_MIN||' y '||V_PERIODO_MAX||' tu ingresaste: '||V_PERIODO);
	WHEN NO_DATA_FOUND THEN
		DBMS_OUTPUT.PUT_LINE('[ERROR] No se encontraron datos!');
END;

-- Implementar un CURSOR simple que liste todas las inscripciones de un semestre

DECLARE
    V_IDSEMESTRE NUMBER := &V_IDSEMESTRE;
    
    V_SEMESTRE_MIN NUMBER;
    V_SEMESTRE_MAX NUMBER;
    V_COUNT NUMBER := 0;
    
    EXCEPTION_OVERFLOW_IDSEMESTRE EXCEPTION;
    EXCEPTION_NINS EXCEPTION;
BEGIN
    -- VALIDACION ID
    SELECT 
        MIN(id_semestre),
        MAX(id_semestre)
    INTO V_SEMESTRE_MIN, V_SEMESTRE_MAX
    FROM SEMESTRE;
    
    IF V_IDSEMESTRE NOT BETWEEN V_SEMESTRE_MIN AND V_SEMESTRE_MAX OR MOD(V_IDSEMESTRE, 250) != 0 THEN
        RAISE EXCEPTION_OVERFLOW_IDSEMESTRE;
    END IF;

    FOR REG_INS_SEMESTRE IN (
    SELECT
        i.id_inscripcion,
        e.pnombre_estudiante
        || CASE WHEN e.snombre_estudiante IS NOT NULL THEN ' ' || e.snombre_estudiante ELSE '' END
        || ' ' || e.papellido_estudiante
        || CASE WHEN e.sapellido_estudiante IS NOT NULL THEN ' ' || e.sapellido_estudiante ELSE '' END nombre_estudiante,
        e.run_estudiante||'-'||e.dv_estudiante rut_estudiante,
        s.año,
        p.nombre_periodo,
        a.nombre_asignatura
    FROM INSCRIPCION i
    JOIN ESTUDIANTE e
    ON e.id_estudiante = i.id_estudiante
    JOIN SEMESTRE s
    ON s.id_semestre = i.id_semestre
    JOIN PERIODO p
    ON s.id_periodo = p.id_periodo
    JOIN ASIGNATURA a
    ON a.id_asignatura = i.id_asignatura
    WHERE s.id_semestre = V_IDSEMESTRE
    ORDER BY s.año, p.nombre_periodo) LOOP
        DBMS_OUTPUT.PUT_LINE('id inscripcion: '||REG_INS_SEMESTRE.id_inscripcion||' - año: '||REG_INS_SEMESTRE.año||' - periodo: '||REG_INS_SEMESTRE.nombre_periodo||' - estudiante: '||REG_INS_SEMESTRE.nombre_estudiante||' - asignatura: '||REG_INS_SEMESTRE.nombre_asignatura);
        V_COUNT := V_COUNT + 1;
    END LOOP;
    
	-- ¿ENCONTRO ALGUN DATO?
    IF V_COUNT = 0 THEN
        RAISE EXCEPTION_NINS;
    END IF;
    
EXCEPTION
    WHEN EXCEPTION_NINS THEN
        DBMS_OUTPUT.PUT_LINE('[WARN] No hay inscripciones');
    WHEN EXCEPTION_OVERFLOW_IDSEMESTRE THEN
        DBMS_OUTPUT.PUT_LINE('[ERROR] El rango de id es desde '||V_SEMESTRE_MIN||' hasta '||V_SEMESTRE_MAX||' tu ingresaste: '||V_IDSEMESTRE||'. Ademas aumenta de 250 en 250');
	WHEN NO_DATA_FOUND THEN
		DBMS_OUTPUT.PUT_LINE('[ERROR] No se encontraron datos!');
END;

-- Implementar un CURSOR anidado que, para cada docente, muestre las asignaturas y los estudiantes inscritos

SET SERVEROUTPUT ON SIZE UNLIMITED;

-- Implementar un CURSOR anidado que, para cada docente, muestre las asignaturas y los estudiantes inscritos

DECLARE
BEGIN
    FOR REGISTRO_DOCENTE IN (
    SELECT
        d.id_docente,
        d.pnombre_docente
        || CASE WHEN d.snombre_docente IS NOT NULL THEN ' ' || d.snombre_docente ELSE '' END
        || ' ' || d.papellido_docente
        || CASE WHEN d.sapellido_docente IS NOT NULL THEN ' ' || d.sapellido_docente ELSE '' END nombre_docente
    FROM DOCENTE d
    ORDER BY d.id_docente) LOOP
    
        DBMS_OUTPUT.PUT_LINE('Docente: '||REGISTRO_DOCENTE.nombre_docente||' - id Docente: '||REGISTRO_DOCENTE.id_docente);
        
        FOR REGISTRO_ASIGNATURA IN (
        SELECT DISTINCT
            a.id_asignatura,
            a.nombre_asignatura
        FROM INSCRIPCION i
        JOIN ASIGNATURA a ON a.id_asignatura = i.id_asignatura
        WHERE i.id_docente = REGISTRO_DOCENTE.id_docente
        ORDER BY a.id_asignatura) LOOP
            DBMS_OUTPUT.PUT_LINE('  Asignatura: '||REGISTRO_ASIGNATURA.nombre_asignatura);
            
            FOR REGISTRO_INSCRIPCION IN (
            SELECT 
                i.id_inscripcion,
                e.id_estudiante,
                e.pnombre_estudiante
                || CASE WHEN e.snombre_estudiante IS NOT NULL THEN ' ' || e.snombre_estudiante ELSE '' END
                || ' ' || e.papellido_estudiante
                || CASE WHEN e.sapellido_estudiante IS NOT NULL THEN ' ' || e.sapellido_estudiante ELSE '' END nombre_estudiante,
                i.id_semestre
            FROM INSCRIPCION i
            JOIN ESTUDIANTE e ON e.id_estudiante = i.id_estudiante
            WHERE i.id_docente   = REGISTRO_DOCENTE.id_docente AND i.id_asignatura = REGISTRO_ASIGNATURA.id_asignatura) LOOP
                DBMS_OUTPUT.PUT_LINE('    Inscripción: '||REGISTRO_INSCRIPCION.id_inscripcion||' - estudiante: '||REGISTRO_INSCRIPCION.nombre_estudiante||' - id estudiante: '||REGISTRO_INSCRIPCION.id_estudiante||' - id semestre: '||REGISTRO_INSCRIPCION.id_semestre);
            END LOOP;
        END LOOP;
    END LOOP;
END;



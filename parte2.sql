-- Parte 2: Consultas SQL
-- -- Listar todos los estudiantes junto con las asignaturas inscritas utilizando JOIN.
        SELECT
            e.id_estudiante,
            e.pnombre_estudiante
            || CASE WHEN e.snombre_estudiante IS NOT NULL THEN ' ' || e.snombre_estudiante ELSE '' END
            || ' ' || e.papellido_estudiante
            || CASE WHEN e.sapellido_estudiante IS NOT NULL THEN ' ' || e.sapellido_estudiante ELSE '' END
            nombre_completo,
            a.nombre_asignatura
        FROM ESTUDIANTE e
        LEFT JOIN INSCRIPCION i -- MOSTRARIA TODOS
        ON e.id_estudiante = i.id_estudiante
        LEFT JOIN ASIGNATURA a
        ON i.id_asignatura = a.id_asignatura
        ORDER BY nombre_completo;

-- -- Obtener el promedio de notas por estudiante mediante subconsultas.

        SELECT 
            e.id_estudiante,
            e.pnombre_estudiante
            || CASE WHEN e.snombre_estudiante IS NOT NULL THEN ' ' || e.snombre_estudiante ELSE '' END
            || ' ' || e.papellido_estudiante
            || CASE WHEN e.sapellido_estudiante IS NOT NULL THEN ' ' || e.sapellido_estudiante ELSE '' END
            AS nombre_completo,
            NVL(TO_CHAR(
                (SELECT ROUND(AVG(re.nota_resul_eval), 1)
                 FROM RESULTADO_EVALUACION re
                 WHERE re.id_estudiante = e.id_estudiante)
            ), 'NO PRESENTA NOTAS') AS promedio
        FROM ESTUDIANTE e 
        ORDER BY e.id_estudiante;
        
-- -- Listar los docentes y el número de asignaturas que dictan en el semestre actual.

        SELECT
            d.id_docente,
            d.pnombre_docente
            || CASE WHEN d.snombre_docente IS NOT NULL THEN ' ' || d.snombre_docente ELSE '' END
            || ' ' || d.papellido_docente
            || CASE WHEN d.sapellido_docente IS NOT NULL THEN ' ' || d.sapellido_docente ELSE '' END
            nombre_completo,
            COUNT(id_inscripcion) asignaturas_tomadas
        FROM INSCRIPCION i
        RIGHT JOIN DOCENTE d
        ON d.id_docente = i.id_docente
        GROUP BY d.id_docente, d.pnombre_docente, d.snombre_docente, d.papellido_docente, d.sapellido_docente
        ORDER BY d.id_docente;
        
-- -- Mostrar las asignaturas que no tienen inscripciones usando subconsultas.

		SELECT *
		FROM ASIGNATURA a
		WHERE NOT EXISTS(	
			SELECT 666
			FROM INSCRIPCION i
			WHERE i.id_asignatura = a.id_asignatura);

-- -- Generar un ranking de estudiantes por promedio de notas.

        SELECT 
            e.id_estudiante,
            e.pnombre_estudiante
            || CASE WHEN e.snombre_estudiante IS NOT NULL THEN ' ' || e.snombre_estudiante ELSE '' END
            || ' ' || e.papellido_estudiante
            || CASE WHEN e.sapellido_estudiante IS NOT NULL THEN ' ' || e.sapellido_estudiante ELSE '' END
            nombre_completo,
            NVL(TO_CHAR(ROUND(AVG(re.nota_resul_eval), 1)), 'NO PRESENTA NOTAS') PROMEDIO
        FROM RESULTADO_EVALUACION re
        RIGHT JOIN ESTUDIANTE e
        ON e.id_estudiante = re.id_estudiante
        GROUP BY e.id_estudiante, e.pnombre_estudiante, e.snombre_estudiante, e.papellido_estudiante, e.sapellido_estudiante
        ORDER BY PROMEDIO DESC;
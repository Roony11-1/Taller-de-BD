DROP TABLE FACULTAD CASCADE CONSTRAINTS;
DROP TABLE CARRERAS CASCADE CONSTRAINTS;
DROP TABLE ESTUDIANTES CASCADE CONSTRAINTS;
DROP TABLE ESPECIALIDAD CASCADE CONSTRAINTS;
DROP TABLE DOCENTES CASCADE CONSTRAINTS;
DROP TABLE ASIGNATURA CASCADE CONSTRAINTS;
DROP TABLE SEMESTRES CASCADE CONSTRAINTS;
DROP TABLE EVALUACIONES CASCADE CONSTRAINTS;
DROP TABLE RESULTADO_EVALUACIONES CASCADE CONSTRAINTS;
DROP TABLE INSCRIPCIONES CASCADE CONSTRAINTS;

DROP SEQUENCE seq_facultad; 
DROP SEQUENCE seq_carreras;
DROP SEQUENCE seq_estudiantes;
DROP SEQUENCE seq_especialidad;
DROP SEQUENCE seq_docentes;
DROP SEQUENCE seq_asignaturas;
DROP SEQUENCE seq_semestres;
DROP SEQUENCE seq_evaluaciones;
DROP SEQUENCE seq_resuleval;
DROP SEQUENCE seq_inscripciones;

CREATE TABLE FACULTAD
(
    id_facultad NUMBER PRIMARY KEY,
    nombre VARCHAR2(50) NOT NULL
);

CREATE TABLE CARRERAS
(
    id_carrera NUMBER PRIMARY KEY,
    codigo VARCHAR2(50) NOT NULL UNIQUE,
    nombre VARCHAR2(50) NOT NULL,
    id_facultad NUMBER  NOT NULL
);

CREATE TABLE ESTUDIANTES
(
    id_estudiante NUMBER PRIMARY KEY,
    pnombre VARCHAR2(50) NOT NULL,
    snombre VARCHAR2(50),
    papellido VARCHAR2(50) NOT NULL,
    sapellido VARCHAR2(50),
    run NUMBER NOT NULL UNIQUE,
    dv VARCHAR2(1) NOT NULL,
    año_ingreso NUMBER(4) NOT NULL,
    id_carrera NUMBER NOT NULL
);

CREATE TABLE ESPECIALIDAD
(
    id_especialidad NUMBER PRIMARY KEY,
    nombre VARCHAR2(50) NOT NULL,
    id_carrera NUMBER  NOT NULL
);

CREATE TABLE DOCENTES
(
    id_docente NUMBER PRIMARY KEY,
    pnombre VARCHAR2(50) NOT NULL,
    snombre VARCHAR2(50),
    papellido VARCHAR2(50) NOT NULL,
    sapellido VARCHAR2(50),
    run NUMBER NOT NULL,
    dv VARCHAR2(1) NOT NULL,
    id_especialidad NUMBER NOT NULL
);

CREATE TABLE ASIGNATURA
(
    id_asignatura NUMBER PRIMARY KEY,
    codigo VARCHAR2(50) NOT NULL UNIQUE,
    nombre VARCHAR2(50) NOT NULL,
    creditos NUMBER NOT NULL,
    nivel NUMBER NOT NULL,
    id_carrera NUMBER NOT NULL
);

CREATE TABLE SEMESTRES
(
    id_semestre NUMBER PRIMARY KEY,
    año NUMBER(4) NOT NULL,
    periodo VARCHAR2(50) NOT NULL,
    fecha_ini DATE,
    fecha_ter DATE
);

CREATE TABLE EVALUACIONES
(
    id_evaluacion NUMBER PRIMARY KEY,
    id_asignatura NUMBER NOT NULL,
    codigo VARCHAR2(50) NOT NULL,
    tipo VARCHAR2(50) NOT NULL,
    fecha DATE NOT NULL,
    ponderacion NUMBER NOT NULL
);

CREATE TABLE RESULTADO_EVALUACIONES
(
    id_resul_eval NUMBER PRIMARY KEY,
    id_estudiante NUMBER NOT NULL,
    id_evaluacion NUMBER NOT NULL,
    nota NUMBER(2, 1) NOT NULL
);

CREATE TABLE INSCRIPCIONES
(
    id_inscripcion NUMBER PRIMARY KEY,
    id_estudiante NUMBER NOT NULL,
    id_asignatura NUMBER NOT NULL,
    id_docente NUMBER NOT NULL,
    id_semestre NUMBER NOT NULL,
    nota_final NUMBER(2, 1)
);

	-- CARRERASS
		ALTER TABLE CARRERAS
		ADD CONSTRAINT fk_carreras_facultad
		FOREIGN KEY (id_facultad)
		REFERENCES FACULTAD (id_facultad);

	-- ESPECIALIDAD
		ALTER TABLE ESPECIALIDAD
		ADD CONSTRAINT fk_especialidad_carrera
		FOREIGN KEY (id_carrera)
		REFERENCES CARRERAS (id_carrera);

	-- ESTUDIANTES
		ALTER TABLE ESTUDIANTES
		ADD CONSTRAINT fk_estudiantes_carrera
		FOREIGN KEY (id_carrera)
		REFERENCES CARRERAS (id_carrera);

	-- DOCENTES
		ALTER TABLE DOCENTES
		ADD CONSTRAINT fk_docentes_especialidad
		FOREIGN KEY (id_especialidad)
		REFERENCES ESPECIALIDAD (id_especialidad);

	-- ASIGNATURAS
		ALTER TABLE ASIGNATURA
		ADD CONSTRAINT fk_asignatura_carrera
		FOREIGN KEY (id_carrera)
		REFERENCES CARRERAS (id_carrera);

	-- EVALUACIONES
		ALTER TABLE EVALUACIONES
		ADD CONSTRAINT pk_evaluaciones_asignatura
		FOREIGN KEY (id_asignatura)
		REFERENCES ASIGNATURA (id_asignatura);

	-- RESULTADO_EVALUACIONES
		ALTER TABLE RESULTADO_EVALUACIONES
		ADD CONSTRAINT pk_resuleval_estudiantes
		FOREIGN KEY (id_estudiante)
		REFERENCES ESTUDIANTES (id_estudiante);
		
		ALTER TABLE RESULTADO_EVALUACIONES
		ADD CONSTRAINT pk_resuleval_evaluacion
		FOREIGN KEY (id_evaluacion)
		REFERENCES EVALUACIONES (id_evaluacion);

	-- INSCRIPCIONES
		ALTER TABLE INSCRIPCIONES
		ADD CONSTRAINT pk_inscripciones_estudiante
		FOREIGN KEY (id_estudiante)
		REFERENCES ESTUDIANTES (id_estudiante);
		
		ALTER TABLE INSCRIPCIONES
		ADD CONSTRAINT pk_inscripciones_asignatura
		FOREIGN KEY (id_asignatura)
		REFERENCES ASIGNATURA (id_asignatura);
		
		ALTER TABLE INSCRIPCIONES
		ADD CONSTRAINT pk_inscripciones_docente
		FOREIGN KEY (id_docente)
		REFERENCES DOCENTES (id_docente);
		
		ALTER TABLE INSCRIPCIONES
		ADD CONSTRAINT pk_inscripciones_semestre
		FOREIGN KEY (id_semestre)
		REFERENCES SEMESTRES (id_semestre);
        
-- SECUENCIA PARA DATOS
	-- FACULTAD AUMENTO 100
	CREATE SEQUENCE seq_facultad
    MINVALUE 0
	START WITH 100
	INCREMENT BY 100
	NOMAXVALUE
	NOCACHE
	ORDER;
	
	-- CARRERAS AUTOMENTO DE 50
	CREATE SEQUENCE seq_carreras
    MINVALUE 0
	START WITH 50
	INCREMENT BY 50
	NOMAXVALUE
	NOCACHE
	ORDER;
	
	-- ESTUDIANTES AUMENTO DE 1
    CREATE SEQUENCE seq_estudiantes
    MINVALUE 0
	START WITH 1
	INCREMENT BY 1
	NOMAXVALUE
	NOCACHE
	ORDER;
	
	-- ESPECIALIDAD AUMENTO DE 15
	CREATE SEQUENCE seq_especialidad
    MINVALUE 0
	START WITH 15
	INCREMENT BY 15
	NOMAXVALUE
	NOCACHE
	ORDER;
	
	-- DOCENTES AUMENTO DE 2
	CREATE SEQUENCE seq_docentes
    MINVALUE 0
	START WITH 2
	INCREMENT BY 2
	NOMAXVALUE
	NOCACHE
	ORDER;
	
	-- ASIGNATURA AUMENTO DE 30
	CREATE SEQUENCE seq_asignaturas
    MINVALUE 0
	START WITH 30
	INCREMENT BY 30
	NOMAXVALUE
	NOCACHE
	ORDER;
	
	-- SEMESTRES AUMENTO DE 250
	CREATE SEQUENCE seq_semestres
    MINVALUE 0
	START WITH 250
	INCREMENT BY 250
	NOMAXVALUE
	NOCACHE
	ORDER;
	
	-- EVALUACIONES AUMENTO DE 300
	CREATE SEQUENCE seq_evaluaciones
    MINVALUE 0
	START WITH 300
	INCREMENT BY 300
	NOMAXVALUE
	NOCACHE
	ORDER;
	
	-- RESULTADO EVALUACIONES AUMENTO DE 150
	CREATE SEQUENCE seq_resuleval
    MINVALUE 0
	START WITH 150
	INCREMENT BY 150
	NOMAXVALUE
	NOCACHE
	ORDER;
	
	-- INSCRIPCIONES AUMENTO DE 25
	CREATE SEQUENCE seq_inscripciones
    MINVALUE 0
	START WITH 25
	INCREMENT BY 25
	NOMAXVALUE
	NOCACHE
	ORDER;
	
    INSERT INTO FACULTAD VALUES(
        seq_facultad.NEXTVAL,
		'DIAGNOSTICO Y ADMINISTRACIÓN');
		
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'DA-001',
			'DIAGNOSTICO',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'EL REY DE LAS PELAS',
		seq_carreras.CURRVAL);
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'DA-DD01',
				'DIÁLISIS DE DATOS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'DA-AD01',
				'ARMONIA DE DATOS',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'DA-002',
			'ADMINISTRACIÓN',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'MINERO',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'AM-DD01',
				'DIOS DE EMPRESAS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'AM-AD02',
				'LAVADO DE ACTIVOS',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'DA-003',
			'DIAGNOSTICO Y ADMINISTRACIÓN',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'BASE DE DATOS',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'DA-DA01',
				'DIAGNOSTICO DE EMPRESAS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'DA-DA02',
				'EL PORQUE DE EL MERCADO',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'DA-004',
			'AYUDENME',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'LUDOPATA',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'AY-AY01',
				'AUXILIO',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'AY-OO02',
				'HOLA K ASE',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
		
	INSERT INTO FACULTAD VALUES(
        seq_facultad.NEXTVAL,
		'CIENCIAS');
		
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'CS-001',
			'INVESTIGACIÓN',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'LUDOPATA 2',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'CS-II01',
				'INTRODUCCIÓN A LA INVESTIGACIÓN',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'CS-MI02',
				'METODOLOGÍA DE LA INVESTIGACIÓN',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'CS-002',
			'DESARROLLO',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'MAESTRO DE EL DISFRAZ',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'DS-DB01',
				'DESARROLLO BIOMECÁNICO',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'DS-MI02',
				'METILACIÓN INVERSA CUÁNTICA',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'CS-003',
			'BACHILLLERATO EN CIENCIAS',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'LIMPIEZA',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'BC-AA01',
				'AUTODESTRUCCIÓN DE ALQUENOS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'BC-QA02',
				'QUIMICA DE AROMÁTICOS',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'CS-004',
			'WEA',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'MATEMATICA',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'WA-FA01',
				'DESARROLLO FLOJERIL',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'WA-MS02',
				'MENTIRAS Y SECRETOS',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
		
    INSERT INTO FACULTAD VALUES(
        seq_facultad.NEXTVAL,
		'MATEMÁTICAS');
		
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'MT-001',
			'MATEMÁTICAS',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'CACULO',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'MT-AN41',
				'ANÁLISIS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'MT-CC02',
				'CÁLCULO DE CÁLCULO',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'MT-002',
			'ESTADÍSTICA',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'ADMIN',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'ES-MN01',
				'INTRODUCCIÓN A MÉTODOS NÚMERICOS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'ES-EM02',
				'ESTADÍSTICA DE COSAS FUERA DEL MUNDO',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'MT-003',
			'MATEMÁTICAS PERO AHORA ES PERSONAL',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'PERSONAL',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'MT-AC01',
				'ANÁLISIS COMPLEJO',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'MT-VV02',
				'CÁLCULO EN VARIAS VARIABLES',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'MT-004',
			'MATEMÁTICAS PERO AHORA ES PERSONAL DOBLE CASTIGO',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'VERDUGO',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'MT-DP01',
				'ECUACIONES DIFERENCIALES ORDINARIAS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'MT-CA02',
				'CÁLCULO DIFERENCIAL CALCULADO INTEGRALMENTE',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
		
    INSERT INTO FACULTAD VALUES(
        seq_facultad.NEXTVAL,
		'INGENIERÍA');
		
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'IG-001',
			'INGENIERÍA EN MINAS',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'STEVE',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'IM-EZ01',
				'INTRODUCCION A LA INGENIERIA EN MINAS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'IM-EZ02',
				'INTRODUCCION A LA INGENIERIA EN MINAS AVANZADO',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'IG-002',
			'INGENIERÍA EN METALURGÍA',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'HERRERO',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'IE-EZ01',
				'INTRODUCCION A LA INGENIERIA EN MINAS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'IE-EZ02',
				'INTRODUCCION A LA INGENIERIA EN MINAS AVANZADO',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'IG-003',
			'INGENIERÍA EN ATOMOS',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'Oppenheimer',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'IA-EZ01',
				'INTRODUCCION A LA INGENIERIA EN ATOMOS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'IA-EZ02',
				'INTRODUCCION A LA INGENIERIA EN ATOMOS AVANZADO',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'IG-004',
			'INGENIERÍA EN INGENIERÍA',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'INGENIERO',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'II-EZ01',
				'INTRODUCCION A LA INGENIERIA EN INGENIERIA',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'II-EZ02',
				'INGENIERIA EN INGENIERIA AVANZADO',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
		
    INSERT INTO FACULTAD VALUES(
        seq_facultad.NEXTVAL,
		'ROBLOX');
		
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'RB-001',
			'CAJITA FELIZ',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'DIOS',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'CF-EZ01',
				'PURA CARNE',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'CF-EZ02',
				'CON PALTA',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'RB-002',
			'ORACLE',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'REY',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'OR-EZ01',
				'BLOQUE ANONIMO',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'OR-EZ02',
				'BLOQUE ANONIMO ANIDADO',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'RB-003',
			'BURGER KING',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'AUTOR',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'BK-EZ01',
				'YA NO ME QUEDAN IDEAS',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'BK-EZ02',
				'ACA TAMPOCO',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
		INSERT INTO CARRERAS VALUES(
			seq_carreras.NEXTVAL,
			'RB-004',
			'DISCO FACULTAD',
			seq_facultad.CURRVAL); -- FACULTAD
			
	INSERT INTO ESPECIALIDAD VALUES(
		seq_especialidad.NEXTVAL,
		'AUTOMATA',
		seq_carreras.CURRVAL);
			
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'DF-EZ01',
				'TRAGO',
				100, -- CREDITOS
				1, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA
				
			INSERT INTO ASIGNATURA VALUES(
				seq_asignaturas.NEXTVAL,
				'DF-EZ02',
				'ESTAR PARADO EN LA ESQUINA',
				100, -- CREDITOS
				2, -- NIVEL
				seq_carreras.CURRVAL); -- CARRERA



-- ==============================================
-- DATOS ADICIONALES PARA TABLAS VACÍAS
-- ==============================================

-- Insertar SEMESTRES
INSERT INTO SEMESTRES VALUES(seq_semestres.NEXTVAL, 2024, 'PRIMERO', TO_DATE('2024-03-01','YYYY-MM-DD'), TO_DATE('2024-07-15','YYYY-MM-DD'));
INSERT INTO SEMESTRES VALUES(seq_semestres.NEXTVAL, 2024, 'SEGUNDO', TO_DATE('2024-08-01','YYYY-MM-DD'), TO_DATE('2024-12-15','YYYY-MM-DD'));
INSERT INTO SEMESTRES VALUES(seq_semestres.NEXTVAL, 2025, 'PRIMERO', TO_DATE('2025-03-01','YYYY-MM-DD'), TO_DATE('2025-07-15','YYYY-MM-DD'));

-- Insertar ESTUDIANTES
INSERT INTO ESTUDIANTES VALUES(seq_estudiantes.NEXTVAL, 'Juan', 'Pablo', 'Gómez', 'Soto', 12345678, 'K', 2023, 50);
INSERT INTO ESTUDIANTES VALUES(seq_estudiantes.NEXTVAL, 'María', NULL, 'López', 'Martínez', 23456789, '3', 2022, 100);
INSERT INTO ESTUDIANTES VALUES(seq_estudiantes.NEXTVAL, 'Pedro', 'Andrés', 'Ramírez', 'Silva', 34567890, '7', 2024, 150);
INSERT INTO ESTUDIANTES VALUES(seq_estudiantes.NEXTVAL, 'Camila', NULL, 'Fernández', 'Díaz', 45678901, '1', 2023, 200);

-- Insertar DOCENTES
INSERT INTO DOCENTES VALUES(seq_docentes.NEXTVAL, 'Carlos', 'Andrés', 'Reyes', 'Pérez', 11111111, '9', 15);
INSERT INTO DOCENTES VALUES(seq_docentes.NEXTVAL, 'Sofía', NULL, 'Vargas', 'Torres', 22222222, '7', 30);
INSERT INTO DOCENTES VALUES(seq_docentes.NEXTVAL, 'Matías', 'Ignacio', 'Cáceres', 'Mendoza', 33333333, 'K', 45);

-- Insertar EVALUACIONES
INSERT INTO EVALUACIONES VALUES(seq_evaluaciones.NEXTVAL, 30, 'DA-DD01-EX1', 'PRUEBA PARCIAL', TO_DATE('2024-04-15','YYYY-MM-DD'), 30);
INSERT INTO EVALUACIONES VALUES(seq_evaluaciones.NEXTVAL, 60, 'AM-DD01-EX1', 'PRUEBA FINAL', TO_DATE('2024-06-10','YYYY-MM-DD'), 50);
INSERT INTO EVALUACIONES VALUES(seq_evaluaciones.NEXTVAL, 90, 'DA-DA01-EX1', 'CONTROL', TO_DATE('2024-05-20','YYYY-MM-DD'), 20);

-- Insertar RESULTADO_EVALUACIONES
INSERT INTO RESULTADO_EVALUACIONES VALUES(seq_resuleval.NEXTVAL, 1, 300, 5.5);
INSERT INTO RESULTADO_EVALUACIONES VALUES(seq_resuleval.NEXTVAL, 2, 600, 6.2);
INSERT INTO RESULTADO_EVALUACIONES VALUES(seq_resuleval.NEXTVAL, 3, 900, 4.8);

-- Insertar INSCRIPCIONES
INSERT INTO INSCRIPCIONES VALUES(seq_inscripciones.NEXTVAL, 1, 30, 2, 250, 6.0);
INSERT INTO INSCRIPCIONES VALUES(seq_inscripciones.NEXTVAL, 2, 60, 4, 500, 5.5);
INSERT INTO INSCRIPCIONES VALUES(seq_inscripciones.NEXTVAL, 3, 90, 6, 750, 4.2);
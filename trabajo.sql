CREATE TABLE ESTUDIANTES(
	id_estudiante NUMBER,
	pnombre VARCHAR2,
	snombre VARCHAR2,
	papellido VARCHAR2,
	sapellido VARCHAR2
	run NUMBER,
	dv VARCHAR2,
	año_ingreso TIMESTAMP,
	id_carrera NUMBER);
	
CREATE TABLE DOCENTES(
	id_docente NUMBER,
	pnombre VARCHAR2,
	snombre VARCHAR2,
	papellido VARCHAR2,
	sapellido VARCHAR2
	run NUMBER,
	dv VARCHAR2,
	id_especialidad NUMBER);
	
CREATE TABLE CARRERAS(
	id_carrera NUMBER,
	codigo VARCHAR2,
	nombre VARCHAR2,
	id_facultad NUMBER);
	
CREATE TABLE ASIGNATURA(
	id_asignatura NUMBER,
	codigo VARCHAR2,
	nombre VARCHAR2,
	créditos NUMBER,
	nivel NUMBER,
	id_carrera NUMBER);
	
CREATE TABLE SEMESTRES(
	id_semestre NUMBER,
	año TIMESTAMP,
	periodo VARCHAR2,
	fecha_ini TIMESTAMP,
	fecha_ter TIMESTAMP);
	
CREATE TABLE INSCRIPCIONES(
	id_inscripcion NUMBER,
	id_asignatura NUMBER,
	id_docente NUMBER,
	id_semestre NUMBER,
	nota_final NUMBER);
	
CREATE TABLE EVALUACIONES(
	id_evaluacion NUMBER,
	código VARCHAR2,
	tipo VARCHAR2,
	fecha TIMESTAMP,
	puntaje_maximo NUMBER,
	id_asignatura NUMBER);
	
CREATE TABLE RESULTADO_EVALUACIONES(
	id_resul_eval NUMBER,
	id_estudiante NUMBER,
	id_evaluacion NUMBER,
	puntaje_obt NUMBER);
	
CREATE TABLE ESPECIALIDAD(
	id_especialidad NUMBER,
	nombre VARCHAR2);
	
CREATE TABLE FACULTAD(
	id_facultad NUMBER,
	nombre VARCHAR2);
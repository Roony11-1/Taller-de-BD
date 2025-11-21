db = db.getSiblingDB("UniversidadNoTeLaEches");

// Ahora tenemos creada la base de datos
// Crearemos las colecciones

/*const agregarColeccion = (nombreColeccion, datos) => 
{
   try
   {
        db.createCollection(nombreColeccion);

        const res = db[nombreColeccion].insertMany(datos);

        if (res.acknowledged)
            print("-- Se han agregado correctamente los documentos en " + nombreColeccion + "! --\n");
        else
            print("-- No se pudieron agregar los documentos en " + nombreColeccion+" --\n");
    } 
    catch (e) 
    {
        print("| --Error en la colección " + nombreColeccion + ": " + e+" -- |\n");
    }
};*/

db.createCollection("ASIGNATURA");

db.ASIGNATURA.insertMany(asignaturas);

db.createCollection("CARRERA");

db.CARRERA.insertMany(carreras);

db.createCollection("DOCENTE")

db.createCollection("ESPECIALIDAD");

db.ESPECIALIDAD.insertMany(especialidades);

db.createCollection("ESTUDIANTE")

db.ESTUDIANTE.insertMany(estudiantes)

db.createCollection("EVALUACION");

db.EVALUACION.insertMany(evaluaciones);

db.createCollection("PERIODO");

db.PERIODO.insertMany(periodos);

db.createCollection("RESUL_EVAL");

db.RESUL_EVAL.insertMany(resul_eval);

db.createCollection("SEMESTRE");

db.SEMESTRE.insertMany(semestres);

// Datos de la bd
asignaturas = [
	{"_id":30,"codigo_asignatura":"AS-001","nombre_asignatura":"Matem�ticas I","creditos":5,"nivel":4,"id_carrera":2100}
	,{"_id":60,"codigo_asignatura":"AS-002","nombre_asignatura":"Matem�ticas II","creditos":5,"nivel":9,"id_carrera":500}
	,{"_id":90,"codigo_asignatura":"AS-003","nombre_asignatura":"�lgebra Lineal","creditos":10,"nivel":10,"id_carrera":1200}
	,{"_id":120,"codigo_asignatura":"AS-004","nombre_asignatura":"C�lculo Diferencial","creditos":30,"nivel":1,"id_carrera":1150}
	,{"_id":150,"codigo_asignatura":"AS-005","nombre_asignatura":"C�lculo Integral","creditos":30,"nivel":7,"id_carrera":2150}
	,{"_id":180,"codigo_asignatura":"AS-006","nombre_asignatura":"Programaci�n I","creditos":5,"nivel":1,"id_carrera":1850}
	,{"_id":210,"codigo_asignatura":"AS-007","nombre_asignatura":"Programaci�n II","creditos":10,"nivel":8,"id_carrera":1800}
	,{"_id":240,"codigo_asignatura":"AS-008","nombre_asignatura":"Bases de Datos","creditos":30,"nivel":1,"id_carrera":750}
	,{"_id":270,"codigo_asignatura":"AS-009","nombre_asignatura":"Redes de Computadores","creditos":10,"nivel":2,"id_carrera":650}
	,{"_id":300,"codigo_asignatura":"AS-010","nombre_asignatura":"Inteligencia Artificial","creditos":5,"nivel":5,"id_carrera":1200}
	,{"_id":330,"codigo_asignatura":"AS-011","nombre_asignatura":"F�sica General","creditos":30,"nivel":5,"id_carrera":1600}
	,{"_id":360,"codigo_asignatura":"AS-012","nombre_asignatura":"Qu�mica General","creditos":20,"nivel":4,"id_carrera":1750}
	,{"_id":390,"codigo_asignatura":"AS-013","nombre_asignatura":"Biolog�a Celular","creditos":20,"nivel":1,"id_carrera":1750}
	,{"_id":420,"codigo_asignatura":"AS-014","nombre_asignatura":"Historia Universal","creditos":5,"nivel":8,"id_carrera":650}
	,{"_id":450,"codigo_asignatura":"AS-015","nombre_asignatura":"Sociolog�a General","creditos":30,"nivel":5,"id_carrera":1900}
	,{"_id":480,"codigo_asignatura":"AS-016","nombre_asignatura":"Psicolog�a B�sica","creditos":5,"nivel":7,"id_carrera":1800}
	,{"_id":510,"codigo_asignatura":"AS-017","nombre_asignatura":"Derecho Constitucional","creditos":30,"nivel":6,"id_carrera":700}
	,{"_id":540,"codigo_asignatura":"AS-018","nombre_asignatura":"Contabilidad Financiera","creditos":20,"nivel":3,"id_carrera":100}
	,{"_id":570,"codigo_asignatura":"AS-019","nombre_asignatura":"Arquitectura de Computadores","creditos":30,"nivel":10,"id_carrera":600}
	,{"_id":600,"codigo_asignatura":"AS-020","nombre_asignatura":"Electr�nica B�sica","creditos":10,"nivel":8,"id_carrera":150}
	,{"_id":630,"codigo_asignatura":"AS-021","nombre_asignatura":"Asignatura 21","creditos":10,"nivel":4,"id_carrera":1750}
	,{"_id":660,"codigo_asignatura":"AS-022","nombre_asignatura":"Asignatura 22","creditos":30,"nivel":3,"id_carrera":100}
	,{"_id":690,"codigo_asignatura":"AS-023","nombre_asignatura":"Asignatura 23","creditos":30,"nivel":5,"id_carrera":1050}
	,{"_id":720,"codigo_asignatura":"AS-024","nombre_asignatura":"Asignatura 24","creditos":5,"nivel":7,"id_carrera":700}
	,{"_id":750,"codigo_asignatura":"AS-025","nombre_asignatura":"Asignatura 25","creditos":20,"nivel":8,"id_carrera":950}
	,{"_id":780,"codigo_asignatura":"AS-026","nombre_asignatura":"Asignatura 26","creditos":10,"nivel":2,"id_carrera":700}
	,{"_id":810,"codigo_asignatura":"AS-027","nombre_asignatura":"Asignatura 27","creditos":10,"nivel":6,"id_carrera":700}
	,{"_id":840,"codigo_asignatura":"AS-028","nombre_asignatura":"Asignatura 28","creditos":20,"nivel":1,"id_carrera":650}
	,{"_id":870,"codigo_asignatura":"AS-029","nombre_asignatura":"Asignatura 29","creditos":10,"nivel":1,"id_carrera":1900}
	,{"_id":900,"codigo_asignatura":"AS-030","nombre_asignatura":"Asignatura 30","creditos":30,"nivel":1,"id_carrera":450}
	,{"_id":930,"codigo_asignatura":"AS-031","nombre_asignatura":"Asignatura 31","creditos":20,"nivel":4,"id_carrera":2100}
	,{"_id":960,"codigo_asignatura":"AS-032","nombre_asignatura":"Asignatura 32","creditos":10,"nivel":7,"id_carrera":750}
	,{"_id":990,"codigo_asignatura":"AS-033","nombre_asignatura":"Asignatura 33","creditos":20,"nivel":1,"id_carrera":1200}
	,{"_id":1020,"codigo_asignatura":"AS-034","nombre_asignatura":"Asignatura 34","creditos":20,"nivel":10,"id_carrera":1900}
	,{"_id":1050,"codigo_asignatura":"AS-035","nombre_asignatura":"Asignatura 35","creditos":5,"nivel":8,"id_carrera":900}
	,{"_id":1080,"codigo_asignatura":"AS-036","nombre_asignatura":"Asignatura 36","creditos":5,"nivel":2,"id_carrera":1650}
	,{"_id":1110,"codigo_asignatura":"AS-037","nombre_asignatura":"Asignatura 37","creditos":30,"nivel":9,"id_carrera":2100}
	,{"_id":1140,"codigo_asignatura":"AS-038","nombre_asignatura":"Asignatura 38","creditos":30,"nivel":2,"id_carrera":1250}
	,{"_id":1170,"codigo_asignatura":"AS-039","nombre_asignatura":"Asignatura 39","creditos":10,"nivel":8,"id_carrera":600}
	,{"_id":1200,"codigo_asignatura":"AS-040","nombre_asignatura":"Asignatura 40","creditos":10,"nivel":2,"id_carrera":1500}
	,{"_id":1230,"codigo_asignatura":"AS-041","nombre_asignatura":"Asignatura 41","creditos":10,"nivel":10,"id_carrera":300}
	,{"_id":1260,"codigo_asignatura":"AS-042","nombre_asignatura":"Asignatura 42","creditos":20,"nivel":10,"id_carrera":150}
	,{"_id":1290,"codigo_asignatura":"AS-043","nombre_asignatura":"Asignatura 43","creditos":10,"nivel":3,"id_carrera":1200}
	,{"_id":1320,"codigo_asignatura":"AS-044","nombre_asignatura":"Asignatura 44","creditos":5,"nivel":3,"id_carrera":1000}
	,{"_id":1350,"codigo_asignatura":"AS-045","nombre_asignatura":"Asignatura 45","creditos":10,"nivel":5,"id_carrera":1850}
	,{"_id":1380,"codigo_asignatura":"AS-046","nombre_asignatura":"Asignatura 46","creditos":20,"nivel":10,"id_carrera":1500}
	,{"_id":1410,"codigo_asignatura":"AS-047","nombre_asignatura":"Asignatura 47","creditos":10,"nivel":10,"id_carrera":2150}
	,{"_id":1440,"codigo_asignatura":"AS-048","nombre_asignatura":"Asignatura 48","creditos":10,"nivel":6,"id_carrera":1850}
	,{"_id":1470,"codigo_asignatura":"AS-049","nombre_asignatura":"Asignatura 49","creditos":30,"nivel":5,"id_carrera":850}
	,{"_id":1500,"codigo_asignatura":"AS-050","nombre_asignatura":"Asignatura 50","creditos":20,"nivel":1,"id_carrera":1650}
	,{"_id":1530,"codigo_asignatura":"AS-051","nombre_asignatura":"Asignatura 51","creditos":5,"nivel":10,"id_carrera":1300}
	,{"_id":1560,"codigo_asignatura":"AS-052","nombre_asignatura":"Asignatura 52","creditos":30,"nivel":1,"id_carrera":350}
	,{"_id":1590,"codigo_asignatura":"AS-053","nombre_asignatura":"Asignatura 53","creditos":30,"nivel":9,"id_carrera":950}
	,{"_id":1620,"codigo_asignatura":"AS-054","nombre_asignatura":"Asignatura 54","creditos":20,"nivel":5,"id_carrera":250}
	,{"_id":1650,"codigo_asignatura":"AS-055","nombre_asignatura":"Asignatura 55","creditos":20,"nivel":9,"id_carrera":2050}
	,{"_id":1680,"codigo_asignatura":"AS-056","nombre_asignatura":"Asignatura 56","creditos":20,"nivel":3,"id_carrera":2200}
	,{"_id":1710,"codigo_asignatura":"AS-057","nombre_asignatura":"Asignatura 57","creditos":10,"nivel":4,"id_carrera":100}
	,{"_id":1740,"codigo_asignatura":"AS-058","nombre_asignatura":"Asignatura 58","creditos":30,"nivel":6,"id_carrera":950}
	,{"_id":1770,"codigo_asignatura":"AS-059","nombre_asignatura":"Asignatura 59","creditos":5,"nivel":7,"id_carrera":2150}
	,{"_id":1800,"codigo_asignatura":"AS-060","nombre_asignatura":"Asignatura 60","creditos":10,"nivel":2,"id_carrera":1900}
	,{"_id":1830,"codigo_asignatura":"AS-061","nombre_asignatura":"Asignatura 61","creditos":20,"nivel":10,"id_carrera":250}
	,{"_id":1860,"codigo_asignatura":"AS-062","nombre_asignatura":"Asignatura 62","creditos":30,"nivel":3,"id_carrera":150}
	,{"_id":1890,"codigo_asignatura":"AS-063","nombre_asignatura":"Asignatura 63","creditos":10,"nivel":9,"id_carrera":1050}
	,{"_id":1920,"codigo_asignatura":"AS-064","nombre_asignatura":"Asignatura 64","creditos":20,"nivel":9,"id_carrera":400}
	,{"_id":1950,"codigo_asignatura":"AS-065","nombre_asignatura":"Asignatura 65","creditos":5,"nivel":5,"id_carrera":600}
	,{"_id":1980,"codigo_asignatura":"AS-066","nombre_asignatura":"Asignatura 66","creditos":30,"nivel":2,"id_carrera":250}
	,{"_id":2010,"codigo_asignatura":"AS-067","nombre_asignatura":"Asignatura 67","creditos":10,"nivel":1,"id_carrera":2250}
	,{"_id":2040,"codigo_asignatura":"AS-068","nombre_asignatura":"Asignatura 68","creditos":5,"nivel":7,"id_carrera":1400}
	,{"_id":2070,"codigo_asignatura":"AS-069","nombre_asignatura":"Asignatura 69","creditos":10,"nivel":5,"id_carrera":2100}
	,{"_id":2100,"codigo_asignatura":"AS-070","nombre_asignatura":"Asignatura 70","creditos":30,"nivel":1,"id_carrera":1900}
	,{"_id":2130,"codigo_asignatura":"AS-071","nombre_asignatura":"Asignatura 71","creditos":30,"nivel":7,"id_carrera":1050}
	,{"_id":2160,"codigo_asignatura":"AS-072","nombre_asignatura":"Asignatura 72","creditos":20,"nivel":8,"id_carrera":1750}
	,{"_id":2190,"codigo_asignatura":"AS-073","nombre_asignatura":"Asignatura 73","creditos":5,"nivel":7,"id_carrera":1800}
	,{"_id":2220,"codigo_asignatura":"AS-074","nombre_asignatura":"Asignatura 74","creditos":20,"nivel":7,"id_carrera":850}
	,{"_id":2250,"codigo_asignatura":"AS-075","nombre_asignatura":"Asignatura 75","creditos":20,"nivel":6,"id_carrera":1900}
	,{"_id":2280,"codigo_asignatura":"AS-076","nombre_asignatura":"Asignatura 76","creditos":10,"nivel":1,"id_carrera":300}
	,{"_id":2310,"codigo_asignatura":"AS-077","nombre_asignatura":"Asignatura 77","creditos":5,"nivel":8,"id_carrera":1500}
	,{"_id":2340,"codigo_asignatura":"AS-078","nombre_asignatura":"Asignatura 78","creditos":5,"nivel":3,"id_carrera":1350}
	,{"_id":2370,"codigo_asignatura":"AS-079","nombre_asignatura":"Asignatura 79","creditos":30,"nivel":10,"id_carrera":2150}
	,{"_id":2400,"codigo_asignatura":"AS-080","nombre_asignatura":"Asignatura 80","creditos":30,"nivel":1,"id_carrera":2000}
	,{"_id":2430,"codigo_asignatura":"AS-081","nombre_asignatura":"Asignatura 81","creditos":10,"nivel":10,"id_carrera":1950}
	,{"_id":2460,"codigo_asignatura":"AS-082","nombre_asignatura":"Asignatura 82","creditos":5,"nivel":6,"id_carrera":1450}
	,{"_id":2490,"codigo_asignatura":"AS-083","nombre_asignatura":"Asignatura 83","creditos":20,"nivel":6,"id_carrera":1100}
	,{"_id":2520,"codigo_asignatura":"AS-084","nombre_asignatura":"Asignatura 84","creditos":30,"nivel":10,"id_carrera":1850}
	,{"_id":2550,"codigo_asignatura":"AS-085","nombre_asignatura":"Asignatura 85","creditos":10,"nivel":6,"id_carrera":2000}
	,{"_id":2580,"codigo_asignatura":"AS-086","nombre_asignatura":"Asignatura 86","creditos":20,"nivel":3,"id_carrera":1450}
	,{"_id":2610,"codigo_asignatura":"AS-087","nombre_asignatura":"Asignatura 87","creditos":10,"nivel":4,"id_carrera":1600}
	,{"_id":2640,"codigo_asignatura":"AS-088","nombre_asignatura":"Asignatura 88","creditos":5,"nivel":7,"id_carrera":1900}
	,{"_id":2670,"codigo_asignatura":"AS-089","nombre_asignatura":"Asignatura 89","creditos":10,"nivel":5,"id_carrera":1000}
	,{"_id":2700,"codigo_asignatura":"AS-090","nombre_asignatura":"Asignatura 90","creditos":5,"nivel":10,"id_carrera":1600}
	,{"_id":2730,"codigo_asignatura":"AS-091","nombre_asignatura":"Asignatura 91","creditos":10,"nivel":2,"id_carrera":600}
	,{"_id":2760,"codigo_asignatura":"AS-092","nombre_asignatura":"Asignatura 92","creditos":10,"nivel":6,"id_carrera":1450}
	,{"_id":2790,"codigo_asignatura":"AS-093","nombre_asignatura":"Asignatura 93","creditos":5,"nivel":1,"id_carrera":700}
	,{"_id":2820,"codigo_asignatura":"AS-094","nombre_asignatura":"Asignatura 94","creditos":20,"nivel":9,"id_carrera":1200}
	,{"_id":2850,"codigo_asignatura":"AS-095","nombre_asignatura":"Asignatura 95","creditos":20,"nivel":1,"id_carrera":500}
	,{"_id":2880,"codigo_asignatura":"AS-096","nombre_asignatura":"Asignatura 96","creditos":20,"nivel":1,"id_carrera":550}
	,{"_id":2910,"codigo_asignatura":"AS-097","nombre_asignatura":"Asignatura 97","creditos":30,"nivel":5,"id_carrera":1400}
	,{"_id":2940,"codigo_asignatura":"AS-098","nombre_asignatura":"Asignatura 98","creditos":30,"nivel":10,"id_carrera":400}
	,{"_id":2970,"codigo_asignatura":"AS-099","nombre_asignatura":"Asignatura 99","creditos":10,"nivel":6,"id_carrera":350}
	,{"_id":3000,"codigo_asignatura":"AS-100","nombre_asignatura":"Asignatura 100","creditos":5,"nivel":9,"id_carrera":900}
	,{"_id":3030,"codigo_asignatura":"AS-101","nombre_asignatura":"Asignatura 101","creditos":20,"nivel":8,"id_carrera":700}
	,{"_id":3060,"codigo_asignatura":"AS-102","nombre_asignatura":"Asignatura 102","creditos":20,"nivel":8,"id_carrera":400}
	,{"_id":3090,"codigo_asignatura":"AS-103","nombre_asignatura":"Asignatura 103","creditos":5,"nivel":8,"id_carrera":1350}
	,{"_id":3120,"codigo_asignatura":"AS-104","nombre_asignatura":"Asignatura 104","creditos":5,"nivel":7,"id_carrera":450}
	,{"_id":3150,"codigo_asignatura":"AS-105","nombre_asignatura":"Asignatura 105","creditos":30,"nivel":1,"id_carrera":950}
	,{"_id":3180,"codigo_asignatura":"AS-106","nombre_asignatura":"Asignatura 106","creditos":10,"nivel":4,"id_carrera":900}
	,{"_id":3210,"codigo_asignatura":"AS-107","nombre_asignatura":"Asignatura 107","creditos":20,"nivel":5,"id_carrera":1150}
	,{"_id":3240,"codigo_asignatura":"AS-108","nombre_asignatura":"Asignatura 108","creditos":20,"nivel":7,"id_carrera":1350}
	,{"_id":3270,"codigo_asignatura":"AS-109","nombre_asignatura":"Asignatura 109","creditos":5,"nivel":5,"id_carrera":1000}
	,{"_id":3300,"codigo_asignatura":"AS-110","nombre_asignatura":"Asignatura 110","creditos":10,"nivel":3,"id_carrera":850}
	,{"_id":3330,"codigo_asignatura":"AS-111","nombre_asignatura":"Asignatura 111","creditos":30,"nivel":7,"id_carrera":50}
	,{"_id":3360,"codigo_asignatura":"AS-112","nombre_asignatura":"Asignatura 112","creditos":5,"nivel":7,"id_carrera":1400}
	,{"_id":3390,"codigo_asignatura":"AS-113","nombre_asignatura":"Asignatura 113","creditos":10,"nivel":4,"id_carrera":1500}
	,{"_id":3420,"codigo_asignatura":"AS-114","nombre_asignatura":"Asignatura 114","creditos":20,"nivel":6,"id_carrera":1750}
	,{"_id":3450,"codigo_asignatura":"AS-115","nombre_asignatura":"Asignatura 115","creditos":5,"nivel":10,"id_carrera":1400}
	,{"_id":3480,"codigo_asignatura":"AS-116","nombre_asignatura":"Asignatura 116","creditos":10,"nivel":6,"id_carrera":1500}
	,{"_id":3510,"codigo_asignatura":"AS-117","nombre_asignatura":"Asignatura 117","creditos":10,"nivel":2,"id_carrera":1200}
	,{"_id":3540,"codigo_asignatura":"AS-118","nombre_asignatura":"Asignatura 118","creditos":20,"nivel":1,"id_carrera":950}
	,{"_id":3570,"codigo_asignatura":"AS-119","nombre_asignatura":"Asignatura 119","creditos":5,"nivel":5,"id_carrera":1100}
	,{"_id":3600,"codigo_asignatura":"AS-120","nombre_asignatura":"Asignatura 120","creditos":20,"nivel":2,"id_carrera":450}
	,{"_id":3630,"codigo_asignatura":"AS-121","nombre_asignatura":"Asignatura 121","creditos":20,"nivel":8,"id_carrera":300}
	,{"_id":3660,"codigo_asignatura":"AS-122","nombre_asignatura":"Asignatura 122","creditos":10,"nivel":10,"id_carrera":50}
	,{"_id":3690,"codigo_asignatura":"AS-123","nombre_asignatura":"Asignatura 123","creditos":10,"nivel":4,"id_carrera":1750}
	,{"_id":3720,"codigo_asignatura":"AS-124","nombre_asignatura":"Asignatura 124","creditos":5,"nivel":2,"id_carrera":2200}
	,{"_id":3750,"codigo_asignatura":"AS-125","nombre_asignatura":"Asignatura 125","creditos":5,"nivel":6,"id_carrera":1500}
	,{"_id":3780,"codigo_asignatura":"AS-126","nombre_asignatura":"Asignatura 126","creditos":10,"nivel":9,"id_carrera":50}
	,{"_id":3810,"codigo_asignatura":"AS-127","nombre_asignatura":"Asignatura 127","creditos":30,"nivel":1,"id_carrera":700}
	,{"_id":3840,"codigo_asignatura":"AS-128","nombre_asignatura":"Asignatura 128","creditos":10,"nivel":9,"id_carrera":1200}
	,{"_id":3870,"codigo_asignatura":"AS-129","nombre_asignatura":"Asignatura 129","creditos":30,"nivel":4,"id_carrera":1650}
	,{"_id":3900,"codigo_asignatura":"AS-130","nombre_asignatura":"Asignatura 130","creditos":30,"nivel":9,"id_carrera":700}
	,{"_id":3930,"codigo_asignatura":"AS-131","nombre_asignatura":"Asignatura 131","creditos":10,"nivel":6,"id_carrera":2150}
	,{"_id":3960,"codigo_asignatura":"AS-132","nombre_asignatura":"Asignatura 132","creditos":20,"nivel":10,"id_carrera":1900}
	,{"_id":3990,"codigo_asignatura":"AS-133","nombre_asignatura":"Asignatura 133","creditos":20,"nivel":4,"id_carrera":1850}
	,{"_id":4020,"codigo_asignatura":"AS-134","nombre_asignatura":"Asignatura 134","creditos":30,"nivel":5,"id_carrera":550}
	,{"_id":4050,"codigo_asignatura":"AS-135","nombre_asignatura":"Asignatura 135","creditos":10,"nivel":4,"id_carrera":1450}
	,{"_id":4080,"codigo_asignatura":"AS-136","nombre_asignatura":"Asignatura 136","creditos":10,"nivel":4,"id_carrera":1450}
	,{"_id":4110,"codigo_asignatura":"AS-137","nombre_asignatura":"Asignatura 137","creditos":10,"nivel":4,"id_carrera":1450}
	,{"_id":4140,"codigo_asignatura":"AS-138","nombre_asignatura":"Asignatura 138","creditos":10,"nivel":4,"id_carrera":1450}
	,{"_id":4170,"codigo_asignatura":"AS-139","nombre_asignatura":"Quimica elemental 3","creditos":100,"nivel":450,"id_carrera":550}
	,{"_id":4200,"codigo_asignatura":"AS-140","nombre_asignatura":"Astronomia a ciegas","creditos":-1,"nivel":4,"id_carrera":50}
	,{"_id":4230,"codigo_asignatura":"AS-141","nombre_asignatura":"Ecuaciones diferenciales ordinarias","creditos":-10,"nivel":4,"id_carrera":250}
];
// Carreras
carreras = [
	{"_id":50,"codigo_carrera":"CR-001","nombre_carrera":"Ingenier�a Civil Inform�tica","id_facultad":300}
	,{"_id":100,"codigo_carrera":"CR-002","nombre_carrera":"Ingenier�a Comercial","id_facultad":200}
	,{"_id":150,"codigo_carrera":"CR-003","nombre_carrera":"Medicina General","id_facultad":400}
	,{"_id":200,"codigo_carrera":"CR-004","nombre_carrera":"Pedagog�a en Matem�ticas","id_facultad":500}
	,{"_id":250,"codigo_carrera":"CR-005","nombre_carrera":"Arquitectura","id_facultad":700}
	,{"_id":300,"codigo_carrera":"CR-006","nombre_carrera":"Psicolog�a","id_facultad":900}
	,{"_id":350,"codigo_carrera":"CR-007","nombre_carrera":"Enfermer�a","id_facultad":1300}
	,{"_id":400,"codigo_carrera":"CR-008","nombre_carrera":"Ingenier�a Mec�nica","id_facultad":1500}
	,{"_id":450,"codigo_carrera":"CR-009","nombre_carrera":"Derecho","id_facultad":300}
	,{"_id":500,"codigo_carrera":"CR-010","nombre_carrera":"Sociolog�a","id_facultad":1000}
	,{"_id":550,"codigo_carrera":"CR-011","nombre_carrera":"Carrera Profesional 11","id_facultad":700}
	,{"_id":600,"codigo_carrera":"CR-012","nombre_carrera":"Carrera Profesional 12","id_facultad":1300}
	,{"_id":650,"codigo_carrera":"CR-013","nombre_carrera":"Carrera Profesional 13","id_facultad":900}
	,{"_id":700,"codigo_carrera":"CR-014","nombre_carrera":"Carrera Profesional 14","id_facultad":1000}
	,{"_id":750,"codigo_carrera":"CR-015","nombre_carrera":"Carrera Profesional 15","id_facultad":100}
	,{"_id":800,"codigo_carrera":"CR-016","nombre_carrera":"Carrera Profesional 16","id_facultad":300}
	,{"_id":850,"codigo_carrera":"CR-017","nombre_carrera":"Carrera Profesional 17","id_facultad":600}
	,{"_id":900,"codigo_carrera":"CR-018","nombre_carrera":"Carrera Profesional 18","id_facultad":600}
	,{"_id":950,"codigo_carrera":"CR-019","nombre_carrera":"Carrera Profesional 19","id_facultad":100}
	,{"_id":1000,"codigo_carrera":"CR-020","nombre_carrera":"Carrera Profesional 20","id_facultad":300}
	,{"_id":1050,"codigo_carrera":"CR-021","nombre_carrera":"Carrera Profesional 21","id_facultad":200}
	,{"_id":1100,"codigo_carrera":"CR-022","nombre_carrera":"Carrera Profesional 22","id_facultad":700}
	,{"_id":1150,"codigo_carrera":"CR-023","nombre_carrera":"Carrera Profesional 23","id_facultad":1200}
	,{"_id":1200,"codigo_carrera":"CR-024","nombre_carrera":"Carrera Profesional 24","id_facultad":1300}
	,{"_id":1250,"codigo_carrera":"CR-025","nombre_carrera":"Carrera Profesional 25","id_facultad":1300}
	,{"_id":1300,"codigo_carrera":"CR-026","nombre_carrera":"Carrera Profesional 26","id_facultad":800}
	,{"_id":1350,"codigo_carrera":"CR-027","nombre_carrera":"Carrera Profesional 27","id_facultad":400}
	,{"_id":1400,"codigo_carrera":"CR-028","nombre_carrera":"Carrera Profesional 28","id_facultad":1000}
	,{"_id":1450,"codigo_carrera":"CR-029","nombre_carrera":"Carrera Profesional 29","id_facultad":1000}
	,{"_id":1500,"codigo_carrera":"CR-030","nombre_carrera":"Carrera Profesional 30","id_facultad":900}
	,{"_id":1550,"codigo_carrera":"CR-031","nombre_carrera":"Carrera Profesional 31","id_facultad":200}
	,{"_id":1600,"codigo_carrera":"CR-032","nombre_carrera":"Carrera Profesional 32","id_facultad":1000}
	,{"_id":1650,"codigo_carrera":"CR-033","nombre_carrera":"Carrera Profesional 33","id_facultad":900}
	,{"_id":1700,"codigo_carrera":"CR-034","nombre_carrera":"Carrera Profesional 34","id_facultad":1500}
	,{"_id":1750,"codigo_carrera":"CR-035","nombre_carrera":"Carrera Profesional 35","id_facultad":1300}
	,{"_id":1800,"codigo_carrera":"CR-036","nombre_carrera":"Carrera Profesional 36","id_facultad":700}
	,{"_id":1850,"codigo_carrera":"CR-037","nombre_carrera":"Carrera Profesional 37","id_facultad":1400}
	,{"_id":1900,"codigo_carrera":"CR-038","nombre_carrera":"Carrera Profesional 38","id_facultad":1100}
	,{"_id":1950,"codigo_carrera":"CR-039","nombre_carrera":"Carrera Profesional 39","id_facultad":300}
	,{"_id":2000,"codigo_carrera":"CR-040","nombre_carrera":"Carrera Profesional 40","id_facultad":1300}
	,{"_id":2050,"codigo_carrera":"CR-041","nombre_carrera":"Carrera Profesional 41","id_facultad":1000}
	,{"_id":2100,"codigo_carrera":"CR-042","nombre_carrera":"Carrera Profesional 42","id_facultad":1400}
	,{"_id":2150,"codigo_carrera":"CR-043","nombre_carrera":"Carrera Profesional 43","id_facultad":1500}
	,{"_id":2200,"codigo_carrera":"CR-044","nombre_carrera":"Carrera Profesional 44","id_facultad":200}
	,{"_id":2250,"codigo_carrera":"CR-045","nombre_carrera":"Carrera Profesional 45","id_facultad":700}
];
// Docentes
docentes = [
	{"_id":2,"pnombre_docente":"Luis","snombre_docente":"Dominique","papellido_docente":"Riquelme","run_docente":15322228,"dv_docente":"8","id_especialidad":165}
	,{"_id":4,"pnombre_docente":"Jonathan","papellido_docente":"Zapata","sapellido_docente":"Reyes","run_docente":12135196,"dv_docente":"3","id_especialidad":225}
	,{"_id":6,"pnombre_docente":"Nelson","papellido_docente":"Cort�s","run_docente":28903666,"dv_docente":"4","id_especialidad":90}
	,{"_id":8,"pnombre_docente":"Edith","snombre_docente":"Catalina","papellido_docente":"Donoso","run_docente":14334459,"dv_docente":"4","id_especialidad":120}
	,{"_id":10,"pnombre_docente":"Alexis","snombre_docente":"Isidora","papellido_docente":"Andrade","sapellido_docente":"Veloso","run_docente":10685136,"dv_docente":"6","id_especialidad":180}
	,{"_id":12,"pnombre_docente":"Felipe","papellido_docente":"Herrera","sapellido_docente":"Castillo","run_docente":10257483,"dv_docente":"2","id_especialidad":30}
	,{"_id":14,"pnombre_docente":"Gaspar","papellido_docente":"Pacheco","sapellido_docente":"Retamales","run_docente":15263451,"dv_docente":"K","id_especialidad":75}
	,{"_id":16,"pnombre_docente":"Mar�a","papellido_docente":"Alarc�n","run_docente":13159962,"dv_docente":"7","id_especialidad":90}
	,{"_id":18,"pnombre_docente":"M�ximo","papellido_docente":"�lvarez","sapellido_docente":"Olivares","run_docente":12242253,"dv_docente":"5","id_especialidad":75}
	,{"_id":20,"pnombre_docente":"Fresia","snombre_docente":"Sof�a","papellido_docente":"C�rdenas","run_docente":22192197,"dv_docente":"K","id_especialidad":60}
	,{"_id":22,"pnombre_docente":"Ronald","snombre_docente":"Sergio","papellido_docente":"Mora","run_docente":12873005,"dv_docente":"0","id_especialidad":180}
	,{"_id":24,"pnombre_docente":"M�ximo","papellido_docente":"Suazo","sapellido_docente":"Soto","run_docente":19765537,"dv_docente":"1","id_especialidad":225}
	,{"_id":26,"pnombre_docente":"Marisol","papellido_docente":"Romero","run_docente":28951932,"dv_docente":"1","id_especialidad":135}
	,{"_id":28,"pnombre_docente":"Daniela","snombre_docente":"Dami�n","papellido_docente":"Riveros","run_docente":26402195,"dv_docente":"6","id_especialidad":150}
	,{"_id":30,"pnombre_docente":"Mar�a","papellido_docente":"Salinas","sapellido_docente":"Valenzuela","run_docente":19544089,"dv_docente":"1","id_especialidad":105}
	,{"_id":32,"pnombre_docente":"Mauricio","papellido_docente":"Parraguez","sapellido_docente":"Cuevas","run_docente":15273323,"dv_docente":"2","id_especialidad":225}
	,{"_id":34,"pnombre_docente":"Elisa","papellido_docente":"N��ez","sapellido_docente":"Zamorano","run_docente":14893659,"dv_docente":"2","id_especialidad":60}
	,{"_id":36,"pnombre_docente":"Norma","snombre_docente":"Joshua","papellido_docente":"Garay","sapellido_docente":"Olivares","run_docente":23684766,"dv_docente":"8","id_especialidad":105}
	,{"_id":38,"pnombre_docente":"Gloria","papellido_docente":"Osorio","run_docente":16918553,"dv_docente":"1","id_especialidad":90}
	,{"_id":40,"pnombre_docente":"Gloria","papellido_docente":"Gonz�lez","sapellido_docente":"Salamanca","run_docente":11540803,"dv_docente":"2","id_especialidad":60}
	,{"_id":42,"pnombre_docente":"Karla","papellido_docente":"Silva","sapellido_docente":"Casta�eda","run_docente":11717702,"dv_docente":"9","id_especialidad":105}
	,{"_id":44,"pnombre_docente":"Soraya","papellido_docente":"Espinoza","run_docente":26152181,"dv_docente":"0","id_especialidad":135}
	,{"_id":46,"pnombre_docente":"Jos�","snombre_docente":"Leonardo","papellido_docente":"Rojas","run_docente":20891935,"dv_docente":"9","id_especialidad":75}
	,{"_id":48,"pnombre_docente":"Ruth","snombre_docente":"Juan","papellido_docente":"Gamboa","sapellido_docente":"D�az","run_docente":19089621,"dv_docente":"1","id_especialidad":45}
	,{"_id":50,"pnombre_docente":"Nora","snombre_docente":"Catalina","papellido_docente":"Contreras","run_docente":10246795,"dv_docente":"9","id_especialidad":45}
	,{"_id":52,"pnombre_docente":"Ren�","snombre_docente":"Francisco","papellido_docente":"Carrillo","run_docente":25043737,"dv_docente":"3","id_especialidad":135}
	,{"_id":54,"pnombre_docente":"Josefa","snombre_docente":"Carolina","papellido_docente":"Barahona","sapellido_docente":"Mu�oz","run_docente":26109357,"dv_docente":"5","id_especialidad":60}
	,{"_id":56,"pnombre_docente":"Jos�","papellido_docente":"Valencia","run_docente":11827408,"dv_docente":"0","id_especialidad":60}
	,{"_id":58,"pnombre_docente":"Luis","snombre_docente":"Luis","papellido_docente":"Cofr�","sapellido_docente":"Jaque","run_docente":10199638,"dv_docente":"0","id_especialidad":30}
	,{"_id":60,"pnombre_docente":"Valentina","snombre_docente":"Jos�","papellido_docente":"Vergara","sapellido_docente":"Jofr�","run_docente":15113545,"dv_docente":"5","id_especialidad":15}
	,{"_id":62,"pnombre_docente":"Jos�","papellido_docente":"Contreras","sapellido_docente":"Araya","run_docente":12653174,"dv_docente":"4","id_especialidad":225}
	,{"_id":64,"pnombre_docente":"Fernando","snombre_docente":"Ver�nica","papellido_docente":"Acevedo","sapellido_docente":"Ibacache","run_docente":20089119,"dv_docente":"7","id_especialidad":120}
	,{"_id":66,"pnombre_docente":"Abel","papellido_docente":"V�squez","sapellido_docente":"Zurita","run_docente":27227516,"dv_docente":"9","id_especialidad":105}
	,{"_id":68,"pnombre_docente":"Luis","papellido_docente":"Aguilar","run_docente":28772480,"dv_docente":"5","id_especialidad":75}
	,{"_id":70,"pnombre_docente":"Mar�a","papellido_docente":"Roa","sapellido_docente":"Escobar","run_docente":17308650,"dv_docente":"3","id_especialidad":195}
	,{"_id":72,"pnombre_docente":"Mia","snombre_docente":"Iker","papellido_docente":"Lagos","sapellido_docente":"Castillo","run_docente":28527154,"dv_docente":"1","id_especialidad":30}
	,{"_id":74,"pnombre_docente":"Tania","snombre_docente":"P�a","papellido_docente":"Varela","run_docente":26835619,"dv_docente":"3","id_especialidad":75}
	,{"_id":76,"pnombre_docente":"Alejandro","snombre_docente":"Jos�","papellido_docente":"Neira","sapellido_docente":"Gonz�lez","run_docente":28431975,"dv_docente":"9","id_especialidad":210}
	,{"_id":78,"pnombre_docente":"Horacio","snombre_docente":"Eliana","papellido_docente":"Solar","run_docente":15798812,"dv_docente":"3","id_especialidad":15}
	,{"_id":80,"pnombre_docente":"Ana�s","papellido_docente":"Y��ez","run_docente":23366408,"dv_docente":"0","id_especialidad":45}
	,{"_id":82,"pnombre_docente":"Samuel","papellido_docente":"Arenas","sapellido_docente":"Fica","run_docente":14508433,"dv_docente":"2","id_especialidad":225}
	,{"_id":84,"pnombre_docente":"Amparo","snombre_docente":"Mar�a","papellido_docente":"Cordero","sapellido_docente":"V�squez","run_docente":16914713,"dv_docente":"0","id_especialidad":15}
	,{"_id":86,"pnombre_docente":"Agustina","papellido_docente":"Calder�n","run_docente":25106007,"dv_docente":"K","id_especialidad":15}
	,{"_id":88,"pnombre_docente":"Jos�","snombre_docente":"Erna","papellido_docente":"Morales","run_docente":27298765,"dv_docente":"0","id_especialidad":225}
	,{"_id":90,"pnombre_docente":"Filomena","papellido_docente":"Riquelme","run_docente":10634272,"dv_docente":"4","id_especialidad":210}
	,{"_id":92,"pnombre_docente":"Consuelo","papellido_docente":"Gonz�lez","sapellido_docente":"Carrasco","run_docente":14573642,"dv_docente":"3","id_especialidad":165}
	,{"_id":94,"pnombre_docente":"Mario","snombre_docente":"Constanza","papellido_docente":"Miranda","sapellido_docente":"Soto","run_docente":16507992,"dv_docente":"9","id_especialidad":60}
	,{"_id":96,"pnombre_docente":"Colomba","snombre_docente":"Roberto","papellido_docente":"Leal","run_docente":21563131,"dv_docente":"1","id_especialidad":45}
	,{"_id":98,"pnombre_docente":"Crist�bal","snombre_docente":"Fredy","papellido_docente":"Mora","run_docente":12601345,"dv_docente":"3","id_especialidad":75}
	,{"_id":100,"pnombre_docente":"Mar�a","papellido_docente":"Pizarro","sapellido_docente":"Rebolledo","run_docente":21572837,"dv_docente":"8","id_especialidad":210}
	,{"_id":102,"pnombre_docente":"Diego","papellido_docente":"Morales","run_docente":28998368,"dv_docente":"4","id_especialidad":165}
	,{"_id":104,"pnombre_docente":"Ricardo","papellido_docente":"Alarc�n","run_docente":23419827,"dv_docente":"1","id_especialidad":90}
	,{"_id":106,"pnombre_docente":"Cinthya","papellido_docente":"Neira","sapellido_docente":"Ponce","run_docente":11796892,"dv_docente":"7","id_especialidad":75}
	,{"_id":108,"pnombre_docente":"Nora","papellido_docente":"Lara","sapellido_docente":"Flores","run_docente":26071363,"dv_docente":"8","id_especialidad":150}
	,{"_id":110,"pnombre_docente":"Carlos","papellido_docente":"Lazcano","run_docente":21487583,"dv_docente":"2","id_especialidad":120}
	,{"_id":112,"pnombre_docente":"Juan","papellido_docente":"Pacheco","sapellido_docente":"Mardones","run_docente":25985719,"dv_docente":"9","id_especialidad":60}
	,{"_id":114,"pnombre_docente":"Constanza","snombre_docente":"Bel�n","papellido_docente":"Navarro","run_docente":23945980,"dv_docente":"5","id_especialidad":195}
	,{"_id":116,"pnombre_docente":"Fernando","snombre_docente":"Manuel","papellido_docente":"Cornejo","run_docente":21604593,"dv_docente":"3","id_especialidad":105}
	,{"_id":118,"pnombre_docente":"Estefan�a","papellido_docente":"Rosales","sapellido_docente":"Pardo","run_docente":29974910,"dv_docente":"4","id_especialidad":120}
	,{"_id":120,"pnombre_docente":"Paola","papellido_docente":"Escobar","run_docente":18298915,"dv_docente":"5","id_especialidad":150}
	,{"_id":122,"pnombre_docente":"Amalia","snombre_docente":"Luz","papellido_docente":"Garc�a","sapellido_docente":"Sep�lveda","run_docente":24161884,"dv_docente":"1","id_especialidad":210}
	,{"_id":124,"pnombre_docente":"Alejandro","snombre_docente":"Iv�n","papellido_docente":"Su�rez","sapellido_docente":"G�mez","run_docente":21243094,"dv_docente":"9","id_especialidad":75}
	,{"_id":126,"pnombre_docente":"Lilian","snombre_docente":"Juan","papellido_docente":"Rivera","run_docente":22954364,"dv_docente":"6","id_especialidad":120}
	,{"_id":128,"pnombre_docente":"Sara","snombre_docente":"Liam","papellido_docente":"Alarc�n","run_docente":19080612,"dv_docente":"7","id_especialidad":60}
	,{"_id":130,"pnombre_docente":"Carolina","papellido_docente":"Ram�rez","run_docente":21838847,"dv_docente":"K","id_especialidad":45}
	,{"_id":132,"pnombre_docente":"Fernanda","snombre_docente":"Marta","papellido_docente":"Mart�nez","sapellido_docente":"Jofr�","run_docente":15948421,"dv_docente":"0","id_especialidad":195}
	,{"_id":134,"pnombre_docente":"Alexandra","snombre_docente":"Alberto","papellido_docente":"Morales","sapellido_docente":"Mena","run_docente":14229858,"dv_docente":"9","id_especialidad":165}
	,{"_id":136,"pnombre_docente":"Catalina","papellido_docente":"Aros","run_docente":13783758,"dv_docente":"7","id_especialidad":150}
	,{"_id":138,"pnombre_docente":"Karina","snombre_docente":"Aliro","papellido_docente":"Roa","run_docente":15253377,"dv_docente":"2","id_especialidad":165}
	,{"_id":140,"pnombre_docente":"Francisca","snombre_docente":"Pablo","papellido_docente":"Bustamante","run_docente":29193960,"dv_docente":"5","id_especialidad":225}
	,{"_id":142,"pnombre_docente":"Ester","papellido_docente":"Palma","sapellido_docente":"Miranda","run_docente":28456989,"dv_docente":"3","id_especialidad":180}
	,{"_id":144,"pnombre_docente":"Marisol","snombre_docente":"Solange","papellido_docente":"Catal�n","run_docente":23180876,"dv_docente":"3","id_especialidad":120}
	,{"_id":146,"pnombre_docente":"Florencia","papellido_docente":"Past�n","run_docente":20948519,"dv_docente":"8","id_especialidad":225}
	,{"_id":148,"pnombre_docente":"Alison","papellido_docente":"�lvarez","run_docente":12718452,"dv_docente":"1","id_especialidad":195}
	,{"_id":150,"pnombre_docente":"Patricia","snombre_docente":"Yasna","papellido_docente":"Contreras","sapellido_docente":"Vergara","run_docente":15623915,"dv_docente":"4","id_especialidad":15}
	,{"_id":152,"pnombre_docente":"Rosa","snombre_docente":"Nayareth","papellido_docente":"Garc�s","sapellido_docente":"Ram�rez","run_docente":15961756,"dv_docente":"K","id_especialidad":75}
	,{"_id":154,"pnombre_docente":"Emily","snombre_docente":"Ana","papellido_docente":"Morales","run_docente":20690494,"dv_docente":"9","id_especialidad":195}
	,{"_id":156,"pnombre_docente":"Sebasti�n","papellido_docente":"Gonz�lez","run_docente":29485589,"dv_docente":"4","id_especialidad":30}
	,{"_id":158,"pnombre_docente":"Joaqu�n","snombre_docente":"Carola","papellido_docente":"Mart�nez","sapellido_docente":"Neira","run_docente":27212293,"dv_docente":"K","id_especialidad":120}
	,{"_id":160,"pnombre_docente":"Thiare","snombre_docente":"Fabiana","papellido_docente":"Pineda","run_docente":28524534,"dv_docente":"6","id_especialidad":30}
	,{"_id":162,"pnombre_docente":"Ana","papellido_docente":"Espinoza","sapellido_docente":"Ibarra","run_docente":14985950,"dv_docente":"3","id_especialidad":90}
	,{"_id":164,"pnombre_docente":"Isidora","papellido_docente":"Toloza","sapellido_docente":"Gonz�lez","run_docente":19360567,"dv_docente":"7","id_especialidad":90}
	,{"_id":166,"pnombre_docente":"Javier","papellido_docente":"Garc�a","run_docente":27731094,"dv_docente":"2","id_especialidad":135}
	,{"_id":168,"pnombre_docente":"Margarita","papellido_docente":"Vidal","run_docente":19326932,"dv_docente":"6","id_especialidad":30}
	,{"_id":170,"pnombre_docente":"Marcela","snombre_docente":"Jonathan","papellido_docente":"Gonz�lez","run_docente":24326041,"dv_docente":"4","id_especialidad":225}
	,{"_id":172,"pnombre_docente":"Ninoska","papellido_docente":"Ramos","sapellido_docente":"N��ez","run_docente":29346493,"dv_docente":"8","id_especialidad":15}
	,{"_id":174,"pnombre_docente":"Trinidad","papellido_docente":"Ch�vez","run_docente":23402554,"dv_docente":"2","id_especialidad":30}
	,{"_id":176,"pnombre_docente":"Ricardo","papellido_docente":"Hern�ndez","run_docente":24320505,"dv_docente":"1","id_especialidad":90}
	,{"_id":178,"pnombre_docente":"Carolina","snombre_docente":"Marcos","papellido_docente":"Fuentes","sapellido_docente":"Hormaz�bal","run_docente":21699926,"dv_docente":"2","id_especialidad":105}
	,{"_id":180,"pnombre_docente":"Maribel","papellido_docente":"Mansilla","run_docente":27505819,"dv_docente":"5","id_especialidad":45}
	,{"_id":182,"pnombre_docente":"Jessica","papellido_docente":"�valos","sapellido_docente":"L�pez","run_docente":24468107,"dv_docente":"K","id_especialidad":75}
	,{"_id":184,"pnombre_docente":"Leandro","snombre_docente":"Benjam�n","papellido_docente":"Maldonado","sapellido_docente":"Bravo","run_docente":20276362,"dv_docente":"K","id_especialidad":15}
	,{"_id":186,"pnombre_docente":"Lissette","snombre_docente":"Mariluz","papellido_docente":"P�ez","sapellido_docente":"S�nchez","run_docente":28677412,"dv_docente":"0","id_especialidad":150}
	,{"_id":188,"pnombre_docente":"Julio","snombre_docente":"Erika","papellido_docente":"�valos","sapellido_docente":"Astudillo","run_docente":14624994,"dv_docente":"6","id_especialidad":60}
	,{"_id":190,"pnombre_docente":"Patricia","snombre_docente":"Doris","papellido_docente":"Olivares","run_docente":11504829,"dv_docente":"0","id_especialidad":90}
	,{"_id":192,"pnombre_docente":"Bernarda","papellido_docente":"D�az","sapellido_docente":"Ar�nguiz","run_docente":28763463,"dv_docente":"8","id_especialidad":195}
	,{"_id":194,"pnombre_docente":"Roberto","papellido_docente":"Aguilar","sapellido_docente":"Salinas","run_docente":17527534,"dv_docente":"8","id_especialidad":210}
	,{"_id":196,"pnombre_docente":"Francisco","snombre_docente":"Bel�n","papellido_docente":"Herrera","sapellido_docente":"Riquelme","run_docente":25686244,"dv_docente":"9","id_especialidad":15}
	,{"_id":198,"pnombre_docente":"Catalina","snombre_docente":"Antonella","papellido_docente":"Delgado","sapellido_docente":"Leiva","run_docente":25255646,"dv_docente":"6","id_especialidad":105}
	,{"_id":200,"pnombre_docente":"Clara","papellido_docente":"P�rez","run_docente":23190515,"dv_docente":"8","id_especialidad":210}
]
// Especialidad
especialidades = [
	{"_id":15,"nombre_especialidad":"Inteligencia Artificial","id_carrera":900}
	,{"_id":30,"nombre_especialidad":"Redes de Computadores","id_carrera":1350}
	,{"_id":45,"nombre_especialidad":"Electrónica","id_carrera":1250}
	,{"_id":60,"nombre_especialidad":"Fisiología","id_carrera":1650}
	,{"_id":75,"nombre_especialidad":"Pediatría","id_carrera":750}
	,{"_id":90,"nombre_especialidad":"Neurociencia","id_carrera":300}
	,{"_id":105,"nombre_especialidad":"Historia Contemporánea","id_carrera":2150}
	,{"_id":120,"nombre_especialidad":"Biología Molecular","id_carrera":100}
	,{"_id":135,"nombre_especialidad":"Sociología del Trabajo","id_carrera":1850}
	,{"_id":150,"nombre_especialidad":"Didáctica de la Matemática","id_carrera":100}
	,{"_id":165,"nombre_especialidad":"Derecho Penal","id_carrera":850}
	,{"_id":180,"nombre_especialidad":"Derecho Civil","id_carrera":950}
	,{"_id":195,"nombre_especialidad":"Terapia Ocupacional","id_carrera":700}
	,{"_id":210,"nombre_especialidad":"Educación Inclusiva","id_carrera":1800}
	,{"_id":225,"nombre_especialidad":"Robótica","id_carrera":950}
];
// Estudiantes
estudiantes = [
	{"_id":1,"pnombre_estudiante":"Camila","papellido_estudiante":"Aedo","sapellido_estudiante":"Castillo","run_estudiante":18654812,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":1800}
	,{"_id":2,"pnombre_estudiante":"María","snombre_estudiante":"Agustina","papellido_estudiante":"Campos","run_estudiante":28322351,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":1100}
	,{"_id":3,"pnombre_estudiante":"Dayana","papellido_estudiante":"Herrera","sapellido_estudiante":"Padilla","run_estudiante":17959940,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":600}
	,{"_id":4,"pnombre_estudiante":"Clementina","papellido_estudiante":"Villalobos","run_estudiante":28652533,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":1950}
	,{"_id":5,"pnombre_estudiante":"Claudia","snombre_estudiante":"María","papellido_estudiante":"Peña","sapellido_estudiante":"Salas","run_estudiante":19145438,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":2050}
	,{"_id":6,"pnombre_estudiante":"Javiera","snombre_estudiante":"John","papellido_estudiante":"Morales","sapellido_estudiante":"Caro","run_estudiante":24038808,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":2050}
	,{"_id":7,"pnombre_estudiante":"Jaime","papellido_estudiante":"Fernández","sapellido_estudiante":"Gómez","run_estudiante":24412385,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":900}
	,{"_id":8,"pnombre_estudiante":"Agustina","snombre_estudiante":"Emilia","papellido_estudiante":"Valdivia","run_estudiante":12400069,"dv_estudiante":"K","año_ingreso":2021,"id_carrera":2050}
	,{"_id":9,"pnombre_estudiante":"Rodrigo","papellido_estudiante":"Castro","run_estudiante":18180385,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":1300}
	,{"_id":10,"pnombre_estudiante":"Francisco","snombre_estudiante":"María","papellido_estudiante":"Orellana","sapellido_estudiante":"Guerra","run_estudiante":23474584,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":1800}
	,{"_id":11,"pnombre_estudiante":"María","snombre_estudiante":"Nancy","papellido_estudiante":"Manríquez","run_estudiante":28467742,"dv_estudiante":"5","año_ingreso":2021,"id_carrera":900}
	,{"_id":12,"pnombre_estudiante":"Dylan","snombre_estudiante":"Laura","papellido_estudiante":"Luengo","run_estudiante":23306751,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1200}
	,{"_id":13,"pnombre_estudiante":"Richard","snombre_estudiante":"Sebastián","papellido_estudiante":"Flores","run_estudiante":12233790,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1750}
	,{"_id":14,"pnombre_estudiante":"Lorena","papellido_estudiante":"Veloso","run_estudiante":15068109,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":2250}
	,{"_id":15,"pnombre_estudiante":"María","snombre_estudiante":"Martín","papellido_estudiante":"Rojas","run_estudiante":16702681,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":450}
	,{"_id":16,"pnombre_estudiante":"Carmen","snombre_estudiante":"Víctor","papellido_estudiante":"Pacheco","sapellido_estudiante":"Alvarado","run_estudiante":25209159,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":1100}
	,{"_id":17,"pnombre_estudiante":"Manuel","snombre_estudiante":"Héctor","papellido_estudiante":"Rojas","sapellido_estudiante":"Hurtado","run_estudiante":21863034,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":1200}
	,{"_id":18,"pnombre_estudiante":"Jacqueline","snombre_estudiante":"Agustina","papellido_estudiante":"Carrillo","run_estudiante":28847166,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":650}
	,{"_id":19,"pnombre_estudiante":"Viviana","snombre_estudiante":"Lina","papellido_estudiante":"Zapata","run_estudiante":23763830,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":1800}
	,{"_id":20,"pnombre_estudiante":"Joan","papellido_estudiante":"Monsalve","sapellido_estudiante":"Acuña","run_estudiante":20566437,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":1200}
	,{"_id":21,"pnombre_estudiante":"María","snombre_estudiante":"Victoriano","papellido_estudiante":"Henríquez","run_estudiante":21444023,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":50}
	,{"_id":22,"pnombre_estudiante":"Cinthya","snombre_estudiante":"Marco","papellido_estudiante":"Gutiérrez","run_estudiante":27998237,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":100}
	,{"_id":23,"pnombre_estudiante":"María","papellido_estudiante":"Araya","sapellido_estudiante":"Quiroz","run_estudiante":13486582,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":2200}
	,{"_id":24,"pnombre_estudiante":"Josué","snombre_estudiante":"José","papellido_estudiante":"Vera","run_estudiante":21941298,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":500}
	,{"_id":25,"pnombre_estudiante":"Laura","snombre_estudiante":"Juan","papellido_estudiante":"Bustamante","sapellido_estudiante":"Opazo","run_estudiante":25744733,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":2100}
	,{"_id":26,"pnombre_estudiante":"Joaquín","snombre_estudiante":"Clodomiro","papellido_estudiante":"Gómez","sapellido_estudiante":"Arancibia","run_estudiante":15274611,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":1850}
	,{"_id":27,"pnombre_estudiante":"Matías","papellido_estudiante":"Esparza","run_estudiante":29992971,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1400}
	,{"_id":28,"pnombre_estudiante":"Luna","snombre_estudiante":"Juana","papellido_estudiante":"Díaz","sapellido_estudiante":"Cárdenas","run_estudiante":14285494,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":1000}
	,{"_id":29,"pnombre_estudiante":"Rodrigo","papellido_estudiante":"Palma","sapellido_estudiante":"Neira","run_estudiante":13713639,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1700}
	,{"_id":30,"pnombre_estudiante":"Ana","snombre_estudiante":"José","papellido_estudiante":"Rosas","sapellido_estudiante":"Cea","run_estudiante":22414960,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":750}
	,{"_id":31,"pnombre_estudiante":"Julia","snombre_estudiante":"Petronila","papellido_estudiante":"Cortés","run_estudiante":13217356,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":150}
	,{"_id":32,"pnombre_estudiante":"Nelson","snombre_estudiante":"Francisco","papellido_estudiante":"Bórquez","sapellido_estudiante":"Calderón","run_estudiante":14591349,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":600}
	,{"_id":33,"pnombre_estudiante":"Ricardo","papellido_estudiante":"Apablaza","sapellido_estudiante":"Quinteros","run_estudiante":14988609,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":1650}
	,{"_id":34,"pnombre_estudiante":"Gloria","papellido_estudiante":"Inostroza","run_estudiante":10247291,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":2200}
	,{"_id":35,"pnombre_estudiante":"Daniel","snombre_estudiante":"Félix","papellido_estudiante":"Castillo","sapellido_estudiante":"Miranda","run_estudiante":14939306,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":1850}
	,{"_id":36,"pnombre_estudiante":"Andrea","snombre_estudiante":"Jairo","papellido_estudiante":"Cruz","sapellido_estudiante":"González","run_estudiante":16812310,"dv_estudiante":"4","año_ingreso":2022,"id_carrera":500}
	,{"_id":37,"pnombre_estudiante":"Rosa","snombre_estudiante":"Marcelo","papellido_estudiante":"Rodríguez","sapellido_estudiante":"Donoso","run_estudiante":19183957,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":2100}
	,{"_id":38,"pnombre_estudiante":"Marlene","snombre_estudiante":"Francisco","papellido_estudiante":"Cárcamo","sapellido_estudiante":"Garrido","run_estudiante":23864578,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":1800}
	,{"_id":39,"pnombre_estudiante":"Marcela","snombre_estudiante":"Luis","papellido_estudiante":"Díaz","sapellido_estudiante":"Escobar","run_estudiante":27057563,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":1750}
	,{"_id":40,"pnombre_estudiante":"Miguel","snombre_estudiante":"Catalina","papellido_estudiante":"López","run_estudiante":13598243,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":400}
	,{"_id":41,"pnombre_estudiante":"Alejandra","snombre_estudiante":"Catalina","papellido_estudiante":"Fuentes","run_estudiante":10156326,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":400}
	,{"_id":42,"pnombre_estudiante":"Pedro","papellido_estudiante":"Gómez","run_estudiante":22488965,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":550}
	,{"_id":43,"pnombre_estudiante":"María","papellido_estudiante":"Muñoz","sapellido_estudiante":"Ossandón","run_estudiante":26556385,"dv_estudiante":"8","año_ingreso":2024,"id_carrera":150}
	,{"_id":44,"pnombre_estudiante":"Bárbara","snombre_estudiante":"Guido","papellido_estudiante":"Véliz","sapellido_estudiante":"Muñoz","run_estudiante":25312102,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":700}
	,{"_id":45,"pnombre_estudiante":"Fabiola","papellido_estudiante":"Casanova","sapellido_estudiante":"Herrera","run_estudiante":20140797,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":1600}
	,{"_id":46,"pnombre_estudiante":"Marcos","papellido_estudiante":"Ampuero","run_estudiante":21184948,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":1900}
	,{"_id":47,"pnombre_estudiante":"Rachel","papellido_estudiante":"Ruiz","sapellido_estudiante":"Vargas","run_estudiante":18913652,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":900}
	,{"_id":48,"pnombre_estudiante":"María","papellido_estudiante":"Flores","sapellido_estudiante":"Ortiz","run_estudiante":20828472,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":2250}
	,{"_id":49,"pnombre_estudiante":"Valentina","papellido_estudiante":"Martínez","run_estudiante":19554336,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":300}
	,{"_id":50,"pnombre_estudiante":"Francisco","snombre_estudiante":"Javier","papellido_estudiante":"Rivera","run_estudiante":16074215,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":2200}
	,{"_id":51,"pnombre_estudiante":"José","papellido_estudiante":"Reyes","sapellido_estudiante":"Pérez","run_estudiante":16812719,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1750}
	,{"_id":52,"pnombre_estudiante":"Silvana","snombre_estudiante":"Javier","papellido_estudiante":"Muñoz","sapellido_estudiante":"Mamani","run_estudiante":21307514,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":100}
	,{"_id":53,"pnombre_estudiante":"Marisol","snombre_estudiante":"Juan","papellido_estudiante":"Contreras","run_estudiante":28178056,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":1750}
	,{"_id":54,"pnombre_estudiante":"David","papellido_estudiante":"Donoso","run_estudiante":27707228,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":2100}
	,{"_id":55,"pnombre_estudiante":"María","papellido_estudiante":"Godoy","sapellido_estudiante":"Cárcamo","run_estudiante":19623686,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":1950}
	,{"_id":56,"pnombre_estudiante":"Víctor","snombre_estudiante":"José","papellido_estudiante":"Solís","sapellido_estudiante":"Hernández","run_estudiante":23834784,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":2150}
	,{"_id":57,"pnombre_estudiante":"Marianela","snombre_estudiante":"Raquel","papellido_estudiante":"Rodríguez","sapellido_estudiante":"Rojas","run_estudiante":13650347,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":200}
	,{"_id":58,"pnombre_estudiante":"Paola","papellido_estudiante":"Cortés","sapellido_estudiante":"Castro","run_estudiante":23739991,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":650}
	,{"_id":59,"pnombre_estudiante":"Carlos","snombre_estudiante":"Mónica","papellido_estudiante":"Cofré","run_estudiante":28476404,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":1450}
	,{"_id":60,"pnombre_estudiante":"Juan","snombre_estudiante":"Arturo","papellido_estudiante":"Jiménez","run_estudiante":18762340,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":950}
	,{"_id":61,"pnombre_estudiante":"Alan","snombre_estudiante":"Ángela","papellido_estudiante":"Tobar","run_estudiante":10324709,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":900}
	,{"_id":62,"pnombre_estudiante":"Leonardo","papellido_estudiante":"Jiménez","sapellido_estudiante":"Oliva","run_estudiante":16067006,"dv_estudiante":"5","año_ingreso":2021,"id_carrera":150}
	,{"_id":63,"pnombre_estudiante":"Mario","snombre_estudiante":"Rebeca","papellido_estudiante":"Valenzuela","sapellido_estudiante":"Garrido","run_estudiante":24543650,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":1900}
	,{"_id":64,"pnombre_estudiante":"Francisco","papellido_estudiante":"Zapata","sapellido_estudiante":"Azócar","run_estudiante":10173742,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1500}
	,{"_id":65,"pnombre_estudiante":"Alberto","snombre_estudiante":"Edgardo","papellido_estudiante":"Martínez","run_estudiante":23009244,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":50}
	,{"_id":66,"pnombre_estudiante":"Josue","papellido_estudiante":"Pérez","sapellido_estudiante":"Guzmán","run_estudiante":23680667,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":650}
	,{"_id":67,"pnombre_estudiante":"Cristóbal","snombre_estudiante":"Dylan","papellido_estudiante":"Silva","run_estudiante":20740108,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":1950}
	,{"_id":68,"pnombre_estudiante":"Rodrigo","snombre_estudiante":"Esther","papellido_estudiante":"Yáñez","run_estudiante":23808890,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1000}
	,{"_id":69,"pnombre_estudiante":"Pedro","snombre_estudiante":"Liliana","papellido_estudiante":"Vera","run_estudiante":12109404,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":2100}
	,{"_id":70,"pnombre_estudiante":"Mariana","snombre_estudiante":"Roxana","papellido_estudiante":"Donoso","run_estudiante":11682665,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":1350}
	,{"_id":71,"pnombre_estudiante":"Fernando","papellido_estudiante":"Arancibia","sapellido_estudiante":"Contreras","run_estudiante":11240163,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":250}
	,{"_id":72,"pnombre_estudiante":"Paulina","papellido_estudiante":"Morales","sapellido_estudiante":"Galleguillos","run_estudiante":12776611,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":350}
	,{"_id":73,"pnombre_estudiante":"Carlos","papellido_estudiante":"Arancibia","sapellido_estudiante":"Aravena","run_estudiante":21065380,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":1500}
	,{"_id":74,"pnombre_estudiante":"Gustavo","snombre_estudiante":"Génesis","papellido_estudiante":"Neira","sapellido_estudiante":"Tobar","run_estudiante":23300017,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":350}
	,{"_id":75,"pnombre_estudiante":"Carmen","papellido_estudiante":"Herrera","sapellido_estudiante":"Flores","run_estudiante":11573670,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":2250}
	,{"_id":76,"pnombre_estudiante":"Ruth","papellido_estudiante":"Contreras","run_estudiante":10251515,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":2000}
	,{"_id":77,"pnombre_estudiante":"Juan","snombre_estudiante":"Evelyn","papellido_estudiante":"Hernández","sapellido_estudiante":"Álvarez","run_estudiante":23358438,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":950}
	,{"_id":78,"pnombre_estudiante":"Germán","papellido_estudiante":"Araneda","sapellido_estudiante":"Navarro","run_estudiante":18710396,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1550}
	,{"_id":79,"pnombre_estudiante":"Josefina","snombre_estudiante":"María","papellido_estudiante":"Villar","sapellido_estudiante":"Calderón","run_estudiante":12093624,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":2200}
	,{"_id":80,"pnombre_estudiante":"María","snombre_estudiante":"Johan","papellido_estudiante":"Lagos","run_estudiante":28109639,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":1050}
	,{"_id":81,"pnombre_estudiante":"Pedro","papellido_estudiante":"Ibáñez","run_estudiante":21680928,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":800}
	,{"_id":82,"pnombre_estudiante":"José","snombre_estudiante":"Joaquín","papellido_estudiante":"Flores","sapellido_estudiante":"Martínez","run_estudiante":15221350,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":1050}
	,{"_id":83,"pnombre_estudiante":"David","papellido_estudiante":"Orellana","run_estudiante":18683176,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":1200}
	,{"_id":84,"pnombre_estudiante":"Camila","snombre_estudiante":"Sebastián","papellido_estudiante":"Roa","sapellido_estudiante":"Varas","run_estudiante":16916442,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":2000}
	,{"_id":85,"pnombre_estudiante":"Juan","papellido_estudiante":"Carvajal","sapellido_estudiante":"Valenzuela","run_estudiante":26703715,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":2000}
	,{"_id":86,"pnombre_estudiante":"Jeremías","papellido_estudiante":"Sandoval","run_estudiante":28504534,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":100}
	,{"_id":87,"pnombre_estudiante":"Ignacio","papellido_estudiante":"Muñoz","run_estudiante":10806792,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":250}
	,{"_id":88,"pnombre_estudiante":"Iván","snombre_estudiante":"Carolina","papellido_estudiante":"Torres","sapellido_estudiante":"Vidal","run_estudiante":15416494,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":650}
	,{"_id":89,"pnombre_estudiante":"Agustina","snombre_estudiante":"Cristian","papellido_estudiante":"Guerrero","sapellido_estudiante":"Bustos","run_estudiante":20421026,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":500}
	,{"_id":90,"pnombre_estudiante":"Angélica","papellido_estudiante":"Velásquez","sapellido_estudiante":"Cárdenas","run_estudiante":25222468,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":900}
	,{"_id":91,"pnombre_estudiante":"Nicolás","snombre_estudiante":"Patricia","papellido_estudiante":"Salinas","run_estudiante":24198597,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1000}
	,{"_id":92,"pnombre_estudiante":"Alejandro","papellido_estudiante":"Maldonado","run_estudiante":11819562,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":2150}
	,{"_id":93,"pnombre_estudiante":"Marcial","snombre_estudiante":"Thiago","papellido_estudiante":"Cárdenas","run_estudiante":28868545,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1950}
	,{"_id":94,"pnombre_estudiante":"Benjamín","papellido_estudiante":"Rivera","sapellido_estudiante":"Guzmán","run_estudiante":11215358,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":1650}
	,{"_id":95,"pnombre_estudiante":"Martín","papellido_estudiante":"Calderón","sapellido_estudiante":"Villalobos","run_estudiante":22496383,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":2200}
	,{"_id":96,"pnombre_estudiante":"Victoria","snombre_estudiante":"Renata","papellido_estudiante":"Barrera","sapellido_estudiante":"Varas","run_estudiante":27704534,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":1800}
	,{"_id":97,"pnombre_estudiante":"Melissa","papellido_estudiante":"López","run_estudiante":26372937,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1850}
	,{"_id":98,"pnombre_estudiante":"Miriam","snombre_estudiante":"Eugenio","papellido_estudiante":"Paredes","run_estudiante":16347815,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":1150}
	,{"_id":99,"pnombre_estudiante":"Blanca","snombre_estudiante":"Domingo","papellido_estudiante":"Astudillo","sapellido_estudiante":"Muñoz","run_estudiante":22280105,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":450}
	,{"_id":100,"pnombre_estudiante":"Marcela","papellido_estudiante":"Carrasco","sapellido_estudiante":"Muñoz","run_estudiante":24597960,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":1200}
	,{"_id":101,"pnombre_estudiante":"Verónica","papellido_estudiante":"Bravo","run_estudiante":19780136,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":2150}
	,{"_id":102,"pnombre_estudiante":"Ángel","snombre_estudiante":"Carolina","papellido_estudiante":"Arias","sapellido_estudiante":"Valenzuela","run_estudiante":23582443,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1050}
	,{"_id":103,"pnombre_estudiante":"María","snombre_estudiante":"Hermes","papellido_estudiante":"Opazo","sapellido_estudiante":"Jara","run_estudiante":12482937,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":950}
	,{"_id":104,"pnombre_estudiante":"Helen","papellido_estudiante":"Matus","sapellido_estudiante":"Luna","run_estudiante":28246687,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":350}
	,{"_id":105,"pnombre_estudiante":"Mireya","papellido_estudiante":"Muñoz","run_estudiante":23024064,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":1800}
	,{"_id":106,"pnombre_estudiante":"Antonio","papellido_estudiante":"Muñoz","run_estudiante":21389881,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":2250}
	,{"_id":107,"pnombre_estudiante":"Ema","snombre_estudiante":"Nelly","papellido_estudiante":"Casanova","sapellido_estudiante":"Gaete","run_estudiante":26972383,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":550}
	,{"_id":108,"pnombre_estudiante":"Silvia","papellido_estudiante":"Espinoza","sapellido_estudiante":"Ramos","run_estudiante":12403553,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":2050}
	,{"_id":109,"pnombre_estudiante":"Blanca","snombre_estudiante":"Manuel","papellido_estudiante":"Chávez","run_estudiante":14452558,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":2050}
	,{"_id":110,"pnombre_estudiante":"Gustavo","snombre_estudiante":"María","papellido_estudiante":"Pérez","run_estudiante":11481259,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":2050}
	,{"_id":111,"pnombre_estudiante":"Paz","papellido_estudiante":"Quiroz","run_estudiante":17367970,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":1850}
	,{"_id":112,"pnombre_estudiante":"Yolanda","snombre_estudiante":"Javiera","papellido_estudiante":"González","sapellido_estudiante":"López","run_estudiante":20884119,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":850}
	,{"_id":113,"pnombre_estudiante":"Sebastián","papellido_estudiante":"Fernández","sapellido_estudiante":"Vásquez","run_estudiante":29162967,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":1050}
	,{"_id":114,"pnombre_estudiante":"Ángela","snombre_estudiante":"Mario","papellido_estudiante":"Sáez","run_estudiante":25498649,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":2250}
	,{"_id":115,"pnombre_estudiante":"Carlos","snombre_estudiante":"María","papellido_estudiante":"Leal","sapellido_estudiante":"Espinoza","run_estudiante":15005601,"dv_estudiante":"5","año_ingreso":2021,"id_carrera":2150}
	,{"_id":116,"pnombre_estudiante":"Miriam","papellido_estudiante":"Reyes","run_estudiante":10825980,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":950}
	,{"_id":117,"pnombre_estudiante":"Eloísa","papellido_estudiante":"Pacheco","sapellido_estudiante":"Castro","run_estudiante":19357543,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":1750}
	,{"_id":118,"pnombre_estudiante":"Alexandra","snombre_estudiante":"Mariano","papellido_estudiante":"Ortiz","run_estudiante":10072919,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1400}
	,{"_id":119,"pnombre_estudiante":"Hugo","snombre_estudiante":"Alexandra","papellido_estudiante":"Catalán","run_estudiante":12278407,"dv_estudiante":"8","año_ingreso":2024,"id_carrera":1350}
	,{"_id":120,"pnombre_estudiante":"Mauricio","snombre_estudiante":"Leonardo","papellido_estudiante":"Bustos","sapellido_estudiante":"Alvarado","run_estudiante":10629783,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":550}
	,{"_id":121,"pnombre_estudiante":"Bryan","papellido_estudiante":"Pinto","run_estudiante":13148124,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":600}
	,{"_id":122,"pnombre_estudiante":"Herminia","papellido_estudiante":"Domínguez","run_estudiante":25203812,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":650}
	,{"_id":123,"pnombre_estudiante":"Nicole","papellido_estudiante":"Rojas","run_estudiante":22217604,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":850}
	,{"_id":124,"pnombre_estudiante":"Gabriel","papellido_estudiante":"Domínguez","run_estudiante":23900688,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":600}
	,{"_id":125,"pnombre_estudiante":"Carolina","papellido_estudiante":"Carreño","sapellido_estudiante":"Arcos","run_estudiante":15699295,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1050}
	,{"_id":126,"pnombre_estudiante":"Katherine","snombre_estudiante":"Daniela","papellido_estudiante":"Guerra","run_estudiante":23968028,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":450}
	,{"_id":127,"pnombre_estudiante":"Juan","papellido_estudiante":"Ponce","run_estudiante":27009577,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1600}
	,{"_id":128,"pnombre_estudiante":"Vicente","papellido_estudiante":"Rebolledo","run_estudiante":23915349,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1700}
	,{"_id":129,"pnombre_estudiante":"Noelia","papellido_estudiante":"Ramírez","sapellido_estudiante":"Paredes","run_estudiante":18360537,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":1700}
	,{"_id":130,"pnombre_estudiante":"David","snombre_estudiante":"José","papellido_estudiante":"Oyarzún","run_estudiante":28020449,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":1250}
	,{"_id":131,"pnombre_estudiante":"Juan","papellido_estudiante":"Luengo","run_estudiante":27861116,"dv_estudiante":"5","año_ingreso":2021,"id_carrera":1400}
	,{"_id":132,"pnombre_estudiante":"Alba","snombre_estudiante":"Julia","papellido_estudiante":"Celis","sapellido_estudiante":"Parra","run_estudiante":18725287,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":1750}
	,{"_id":133,"pnombre_estudiante":"Luzmira","snombre_estudiante":"Nelson","papellido_estudiante":"Sáez","sapellido_estudiante":"Pérez","run_estudiante":22779996,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":1050}
	,{"_id":134,"pnombre_estudiante":"Haydée","snombre_estudiante":"Javier","papellido_estudiante":"Montecinos","run_estudiante":13438233,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":1850}
	,{"_id":135,"pnombre_estudiante":"Álvaro","snombre_estudiante":"Paola","papellido_estudiante":"Cortés","run_estudiante":26875907,"dv_estudiante":"4","año_ingreso":2020,"id_carrera":1050}
	,{"_id":136,"pnombre_estudiante":"Lorena","papellido_estudiante":"Ramírez","sapellido_estudiante":"Escalona","run_estudiante":24089849,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":500}
	,{"_id":137,"pnombre_estudiante":"Daniel","snombre_estudiante":"Sonia","papellido_estudiante":"Zapata","run_estudiante":25047727,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":550}
	,{"_id":138,"pnombre_estudiante":"Claudia","snombre_estudiante":"María","papellido_estudiante":"Roa","sapellido_estudiante":"Espinoza","run_estudiante":24783534,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":650}
	,{"_id":139,"pnombre_estudiante":"Jonathan","snombre_estudiante":"María","papellido_estudiante":"González","run_estudiante":14887732,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":2250}
	,{"_id":140,"pnombre_estudiante":"Celso","snombre_estudiante":"Ema","papellido_estudiante":"Varela","run_estudiante":26841245,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":250}
	,{"_id":141,"pnombre_estudiante":"Monserrat","papellido_estudiante":"González","sapellido_estudiante":"Mancilla","run_estudiante":22316669,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":400}
	,{"_id":142,"pnombre_estudiante":"Oscar","papellido_estudiante":"Salas","run_estudiante":11981795,"dv_estudiante":"4","año_ingreso":2022,"id_carrera":1100}
	,{"_id":143,"pnombre_estudiante":"Denisse","snombre_estudiante":"José","papellido_estudiante":"Cortés","run_estudiante":10978553,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1100}
	,{"_id":144,"pnombre_estudiante":"Johanna","snombre_estudiante":"Carlos","papellido_estudiante":"Peralta","sapellido_estudiante":"Aguilera","run_estudiante":14876551,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":2100}
	,{"_id":145,"pnombre_estudiante":"Jessica","snombre_estudiante":"Yasna","papellido_estudiante":"Alvear","sapellido_estudiante":"Barros","run_estudiante":26447600,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":1650}
	,{"_id":146,"pnombre_estudiante":"Luis","snombre_estudiante":"Juan","papellido_estudiante":"García","sapellido_estudiante":"Benavides","run_estudiante":11076029,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":50}
	,{"_id":147,"pnombre_estudiante":"Alberto","papellido_estudiante":"Méndez","sapellido_estudiante":"Miranda","run_estudiante":27763220,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1450}
	,{"_id":148,"pnombre_estudiante":"Sergio","papellido_estudiante":"Yáñez","run_estudiante":10115165,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1500}
	,{"_id":149,"pnombre_estudiante":"Belén","papellido_estudiante":"Silva","run_estudiante":29913521,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":1400}
	,{"_id":150,"pnombre_estudiante":"María","papellido_estudiante":"Leiva","run_estudiante":17114065,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1950}
	,{"_id":151,"pnombre_estudiante":"Isidora","papellido_estudiante":"Figueroa","sapellido_estudiante":"Fuentes","run_estudiante":11348887,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":50}
	,{"_id":152,"pnombre_estudiante":"Rodolfo","snombre_estudiante":"Carlos","papellido_estudiante":"Castillo","sapellido_estudiante":"Santander","run_estudiante":22906480,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":1800}
	,{"_id":153,"pnombre_estudiante":"Eva","snombre_estudiante":"Manuel","papellido_estudiante":"Valenzuela","run_estudiante":12924755,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":300}
	,{"_id":154,"pnombre_estudiante":"Mauricio","snombre_estudiante":"Marcos","papellido_estudiante":"Bravo","run_estudiante":28276487,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1600}
	,{"_id":155,"pnombre_estudiante":"Carolina","papellido_estudiante":"Martínez","run_estudiante":21170571,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1050}
	,{"_id":156,"pnombre_estudiante":"Silvana","papellido_estudiante":"Mancilla","run_estudiante":12915854,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":50}
	,{"_id":157,"pnombre_estudiante":"Ángela","papellido_estudiante":"Mancilla","sapellido_estudiante":"Caro","run_estudiante":26794801,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":2100}
	,{"_id":158,"pnombre_estudiante":"Joaquín","papellido_estudiante":"Pérez","run_estudiante":24970261,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":350}
	,{"_id":159,"pnombre_estudiante":"Erik","papellido_estudiante":"Bravo","run_estudiante":29228251,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":100}
	,{"_id":160,"pnombre_estudiante":"Lidia","snombre_estudiante":"Luna","papellido_estudiante":"Muñoz","run_estudiante":23563448,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":1250}
	,{"_id":161,"pnombre_estudiante":"Jessica","papellido_estudiante":"Toro","run_estudiante":13057509,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":1250}
	,{"_id":162,"pnombre_estudiante":"Susana","snombre_estudiante":"Amaru","papellido_estudiante":"Carrasco","run_estudiante":20609600,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":1500}
	,{"_id":163,"pnombre_estudiante":"Nora","papellido_estudiante":"González","run_estudiante":11001809,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":250}
	,{"_id":164,"pnombre_estudiante":"Anderson","papellido_estudiante":"Díaz","run_estudiante":27630371,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":300}
	,{"_id":165,"pnombre_estudiante":"Emilia","snombre_estudiante":"Pedro","papellido_estudiante":"Leal","run_estudiante":17913762,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":2000}
	,{"_id":166,"pnombre_estudiante":"Eugenia","snombre_estudiante":"Rosa","papellido_estudiante":"Ramírez","run_estudiante":10027925,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":2100}
	,{"_id":167,"pnombre_estudiante":"Gabriela","snombre_estudiante":"Luis","papellido_estudiante":"Machuca","sapellido_estudiante":"López","run_estudiante":17707826,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":750}
	,{"_id":168,"pnombre_estudiante":"Carlos","snombre_estudiante":"Luis","papellido_estudiante":"Reyes","run_estudiante":19527888,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":1100}
	,{"_id":169,"pnombre_estudiante":"Néstor","papellido_estudiante":"Jaque","sapellido_estudiante":"Olivares","run_estudiante":24437377,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":650}
	,{"_id":170,"pnombre_estudiante":"Néstor","papellido_estudiante":"Cruz","sapellido_estudiante":"Aguilar","run_estudiante":16304468,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1500}
	,{"_id":171,"pnombre_estudiante":"Nancy","snombre_estudiante":"Yenny","papellido_estudiante":"Díaz","sapellido_estudiante":"Molina","run_estudiante":26345101,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":200}
	,{"_id":172,"pnombre_estudiante":"Jeniffer","snombre_estudiante":"Patricia","papellido_estudiante":"Riveros","sapellido_estudiante":"Ríos","run_estudiante":23937086,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":900}
	,{"_id":173,"pnombre_estudiante":"Yesenia","snombre_estudiante":"Silvia","papellido_estudiante":"Castro","sapellido_estudiante":"Soto","run_estudiante":10223686,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":1650}
	,{"_id":174,"pnombre_estudiante":"Patricia","papellido_estudiante":"Barra","sapellido_estudiante":"Salinas","run_estudiante":29880409,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":500}
	,{"_id":175,"pnombre_estudiante":"Katherine","snombre_estudiante":"Sara","papellido_estudiante":"León","run_estudiante":18113088,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":1950}
	,{"_id":176,"pnombre_estudiante":"Borja","papellido_estudiante":"Gallardo","sapellido_estudiante":"Fuentes","run_estudiante":13216845,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":300}
	,{"_id":177,"pnombre_estudiante":"Lucía","papellido_estudiante":"Luna","sapellido_estudiante":"Flores","run_estudiante":28424402,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":600}
	,{"_id":178,"pnombre_estudiante":"Claudia","snombre_estudiante":"Iris","papellido_estudiante":"Velásquez","sapellido_estudiante":"Calderón","run_estudiante":16211511,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1250}
	,{"_id":179,"pnombre_estudiante":"Carol","snombre_estudiante":"José","papellido_estudiante":"Becerra","run_estudiante":25613679,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":2200}
	,{"_id":180,"pnombre_estudiante":"Gladys","snombre_estudiante":"Segundo","papellido_estudiante":"Llanos","sapellido_estudiante":"Núñez","run_estudiante":19998245,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":1600}
	,{"_id":181,"pnombre_estudiante":"Marcos","papellido_estudiante":"Sepúlveda","sapellido_estudiante":"Correa","run_estudiante":20448896,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":650}
	,{"_id":182,"pnombre_estudiante":"Juana","snombre_estudiante":"Isabel","papellido_estudiante":"Angulo","run_estudiante":19409600,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":700}
	,{"_id":183,"pnombre_estudiante":"Franco","snombre_estudiante":"Isidora","papellido_estudiante":"Pizarro","run_estudiante":23005917,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":200}
	,{"_id":184,"pnombre_estudiante":"Sara","snombre_estudiante":"Irene","papellido_estudiante":"Sandoval","sapellido_estudiante":"San Martín","run_estudiante":23579401,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":150}
	,{"_id":185,"pnombre_estudiante":"Alma","papellido_estudiante":"Ovalle","run_estudiante":27837911,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1650}
	,{"_id":186,"pnombre_estudiante":"Manuel","papellido_estudiante":"Palma","sapellido_estudiante":"Henríquez","run_estudiante":28429077,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":50}
	,{"_id":187,"pnombre_estudiante":"Yolanda","snombre_estudiante":"Fernanda","papellido_estudiante":"Contreras","sapellido_estudiante":"Mella","run_estudiante":16402246,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1950}
	,{"_id":188,"pnombre_estudiante":"María","snombre_estudiante":"Claudia","papellido_estudiante":"Fuentealba","sapellido_estudiante":"Ramos","run_estudiante":20534572,"dv_estudiante":"K","año_ingreso":2021,"id_carrera":750}
	,{"_id":189,"pnombre_estudiante":"Víctor","snombre_estudiante":"Felipe","papellido_estudiante":"Rojas","run_estudiante":19320877,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":950}
	,{"_id":190,"pnombre_estudiante":"Tomás","papellido_estudiante":"Gómez","run_estudiante":26755400,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":1350}
	,{"_id":191,"pnombre_estudiante":"Daniel","papellido_estudiante":"Cabrera","sapellido_estudiante":"Varas","run_estudiante":12185286,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":900}
	,{"_id":192,"pnombre_estudiante":"Maximiliano","papellido_estudiante":"Ríos","run_estudiante":24779503,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":900}
	,{"_id":193,"pnombre_estudiante":"Astrid","snombre_estudiante":"Anahí","papellido_estudiante":"Tapia","run_estudiante":13882805,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":2000}
	,{"_id":194,"pnombre_estudiante":"María","snombre_estudiante":"Sebastián","papellido_estudiante":"Beltrán","run_estudiante":25904634,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":150}
	,{"_id":195,"pnombre_estudiante":"Leonor","papellido_estudiante":"Castillo","sapellido_estudiante":"Núñez","run_estudiante":12374998,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":550}
	,{"_id":196,"pnombre_estudiante":"Pamela","snombre_estudiante":"Martín","papellido_estudiante":"Figueroa","sapellido_estudiante":"Rubilar","run_estudiante":25875180,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":1400}
	,{"_id":197,"pnombre_estudiante":"Jeannette","snombre_estudiante":"José","papellido_estudiante":"González","sapellido_estudiante":"Ávila","run_estudiante":22343685,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":1450}
	,{"_id":198,"pnombre_estudiante":"Andrés","papellido_estudiante":"Verdugo","run_estudiante":11885525,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":1200}
	,{"_id":199,"pnombre_estudiante":"Javiera","papellido_estudiante":"Lagos","sapellido_estudiante":"Alarcón","run_estudiante":25045172,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":2250}
	,{"_id":200,"pnombre_estudiante":"Alexander","papellido_estudiante":"Navarrete","run_estudiante":22818027,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":600}
	,{"_id":201,"pnombre_estudiante":"Roberto","papellido_estudiante":"Muñoz","run_estudiante":23610537,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":1050}
	,{"_id":202,"pnombre_estudiante":"Lucy","papellido_estudiante":"Guerrero","sapellido_estudiante":"Donoso","run_estudiante":16791811,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":300}
	,{"_id":203,"pnombre_estudiante":"Vladimir","papellido_estudiante":"Carrasco","run_estudiante":17214403,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":500}
	,{"_id":204,"pnombre_estudiante":"Claudio","snombre_estudiante":"Francisco","papellido_estudiante":"García","run_estudiante":24572458,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":150}
	,{"_id":205,"pnombre_estudiante":"Pamela","snombre_estudiante":"Ramón","papellido_estudiante":"López","run_estudiante":28823879,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":100}
	,{"_id":206,"pnombre_estudiante":"Lidia","snombre_estudiante":"Rubén","papellido_estudiante":"Quintanilla","sapellido_estudiante":"Maureira","run_estudiante":29758280,"dv_estudiante":"K","año_ingreso":2021,"id_carrera":1800}
	,{"_id":207,"pnombre_estudiante":"Jesus","snombre_estudiante":"Verónica","papellido_estudiante":"Córdova","run_estudiante":20639030,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":650}
	,{"_id":208,"pnombre_estudiante":"Ramón","papellido_estudiante":"Guajardo","run_estudiante":14604523,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":2050}
	,{"_id":209,"pnombre_estudiante":"Matías","papellido_estudiante":"Cabrera","run_estudiante":23791157,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":2100}
	,{"_id":210,"pnombre_estudiante":"Paz","papellido_estudiante":"Matus","sapellido_estudiante":"Morales","run_estudiante":22699274,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":1250}
	,{"_id":211,"pnombre_estudiante":"Enrique","papellido_estudiante":"Ortega","run_estudiante":15554042,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":1800}
	,{"_id":212,"pnombre_estudiante":"Francisco","papellido_estudiante":"Salinas","run_estudiante":21440142,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":1500}
	,{"_id":213,"pnombre_estudiante":"Paulina","papellido_estudiante":"Henríquez","sapellido_estudiante":"Moraga","run_estudiante":26304681,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":850}
	,{"_id":214,"pnombre_estudiante":"Margarita","papellido_estudiante":"Carmona","sapellido_estudiante":"Iturra","run_estudiante":24386618,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":2050}
	,{"_id":215,"pnombre_estudiante":"Guillermo","papellido_estudiante":"Cifuentes","sapellido_estudiante":"Pérez","run_estudiante":17658987,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":1350}
	,{"_id":216,"pnombre_estudiante":"Emily","snombre_estudiante":"José","papellido_estudiante":"Yáñez","sapellido_estudiante":"Garrido","run_estudiante":24966874,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":500}
	,{"_id":217,"pnombre_estudiante":"Leonardo","papellido_estudiante":"Vega","sapellido_estudiante":"Cáceres","run_estudiante":13637795,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":1300}
	,{"_id":218,"pnombre_estudiante":"Pedro","papellido_estudiante":"Retamales","sapellido_estudiante":"Jerez","run_estudiante":18970369,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":500}
	,{"_id":219,"pnombre_estudiante":"Cecilia","snombre_estudiante":"Alejandro","papellido_estudiante":"González","sapellido_estudiante":"Zamorano","run_estudiante":11716076,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":450}
	,{"_id":220,"pnombre_estudiante":"Regina","snombre_estudiante":"Andrés","papellido_estudiante":"Araya","run_estudiante":24446721,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":100}
	,{"_id":221,"pnombre_estudiante":"Marta","papellido_estudiante":"Silva","run_estudiante":14729178,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":900}
	,{"_id":222,"pnombre_estudiante":"Ariel","papellido_estudiante":"Villalobos","run_estudiante":18062950,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":1400}
	,{"_id":223,"pnombre_estudiante":"Leontina","snombre_estudiante":"Jonathan","papellido_estudiante":"Mercado","run_estudiante":19008981,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":750}
	,{"_id":224,"pnombre_estudiante":"Francisca","papellido_estudiante":"Ortega","run_estudiante":29654563,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":1850}
	,{"_id":225,"pnombre_estudiante":"Segundo","papellido_estudiante":"Chávez","run_estudiante":17747369,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":50}
	,{"_id":226,"pnombre_estudiante":"Rayén","snombre_estudiante":"Fanny","papellido_estudiante":"Cabrera","sapellido_estudiante":"Álvarez","run_estudiante":22882762,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":100}
	,{"_id":227,"pnombre_estudiante":"Aldo","snombre_estudiante":"Jorge","papellido_estudiante":"Morales","sapellido_estudiante":"Torres","run_estudiante":16318491,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1750}
	,{"_id":228,"pnombre_estudiante":"Manuel","papellido_estudiante":"López","run_estudiante":11371155,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":1200}
	,{"_id":229,"pnombre_estudiante":"Emilia","snombre_estudiante":"Héctor","papellido_estudiante":"Castillo","run_estudiante":19814945,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":600}
	,{"_id":230,"pnombre_estudiante":"Rosamel","papellido_estudiante":"Castro","run_estudiante":14164208,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1650}
	,{"_id":231,"pnombre_estudiante":"Oliver","papellido_estudiante":"Zenteno","sapellido_estudiante":"Gallardo","run_estudiante":21897702,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1650}
	,{"_id":232,"pnombre_estudiante":"Matilde","snombre_estudiante":"Joaquín","papellido_estudiante":"Barraza","run_estudiante":24003699,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":1900}
	,{"_id":233,"pnombre_estudiante":"Roberto","papellido_estudiante":"Pardo","run_estudiante":20687745,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1050}
	,{"_id":234,"pnombre_estudiante":"Manuel","papellido_estudiante":"Martínez","sapellido_estudiante":"Espinoza","run_estudiante":21563215,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1500}
	,{"_id":235,"pnombre_estudiante":"Marta","snombre_estudiante":"Karol","papellido_estudiante":"Pérez","run_estudiante":20556586,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":1850}
	,{"_id":236,"pnombre_estudiante":"Matías","snombre_estudiante":"Cristian","papellido_estudiante":"Molina","run_estudiante":21818164,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":650}
	,{"_id":237,"pnombre_estudiante":"Pilar","snombre_estudiante":"Juan","papellido_estudiante":"Muñoz","run_estudiante":13321052,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":1000}
	,{"_id":238,"pnombre_estudiante":"Diego","snombre_estudiante":"Felipe","papellido_estudiante":"Cancino","run_estudiante":27606292,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1950}
	,{"_id":239,"pnombre_estudiante":"Nicolás","papellido_estudiante":"Morales","run_estudiante":14234656,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1250}
	,{"_id":240,"pnombre_estudiante":"Cristóbal","snombre_estudiante":"Marlon","papellido_estudiante":"Contreras","sapellido_estudiante":"Naranjo","run_estudiante":17370772,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":150}
	,{"_id":241,"pnombre_estudiante":"Juan","papellido_estudiante":"Durán","run_estudiante":10341831,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":1950}
	,{"_id":242,"pnombre_estudiante":"Pedro","papellido_estudiante":"Carreño","run_estudiante":18558607,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":1600}
	,{"_id":243,"pnombre_estudiante":"María","snombre_estudiante":"Francisco","papellido_estudiante":"Villalobos","run_estudiante":21964196,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1350}
	,{"_id":244,"pnombre_estudiante":"Jean","papellido_estudiante":"Montenegro","sapellido_estudiante":"Ojeda","run_estudiante":26399951,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":2250}
	,{"_id":245,"pnombre_estudiante":"Macarena","snombre_estudiante":"Sandra","papellido_estudiante":"Uribe","sapellido_estudiante":"Aguilera","run_estudiante":25792706,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":100}
	,{"_id":246,"pnombre_estudiante":"Francisco","snombre_estudiante":"Rosa","papellido_estudiante":"Muñoz","sapellido_estudiante":"Salazar","run_estudiante":17267449,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":850}
	,{"_id":247,"pnombre_estudiante":"Marta","snombre_estudiante":"César","papellido_estudiante":"Vergara","run_estudiante":28262224,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":250}
	,{"_id":248,"pnombre_estudiante":"Blanca","papellido_estudiante":"Rojo","sapellido_estudiante":"Riveros","run_estudiante":16986297,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":1500}
	,{"_id":249,"pnombre_estudiante":"Bernabé","papellido_estudiante":"Donoso","run_estudiante":17287529,"dv_estudiante":"4","año_ingreso":2020,"id_carrera":1100}
	,{"_id":250,"pnombre_estudiante":"Alexis","papellido_estudiante":"Fuentealba","sapellido_estudiante":"Garrido","run_estudiante":23967785,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":800}
	,{"_id":251,"pnombre_estudiante":"María","papellido_estudiante":"Martinez","run_estudiante":10947224,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":1600}
	,{"_id":252,"pnombre_estudiante":"David","snombre_estudiante":"Pablo","papellido_estudiante":"Solar","sapellido_estudiante":"Saavedra","run_estudiante":11295895,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":1500}
	,{"_id":253,"pnombre_estudiante":"Camila","papellido_estudiante":"Contreras","sapellido_estudiante":"Retamal","run_estudiante":19469965,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":1400}
	,{"_id":254,"pnombre_estudiante":"Alberto","snombre_estudiante":"Rosa","papellido_estudiante":"Carreño","run_estudiante":13333629,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":850}
	,{"_id":255,"pnombre_estudiante":"Ismael","snombre_estudiante":"Marcelo","papellido_estudiante":"Silva","sapellido_estudiante":"Zavala","run_estudiante":22513523,"dv_estudiante":"K","año_ingreso":2021,"id_carrera":1800}
	,{"_id":256,"pnombre_estudiante":"Simón","snombre_estudiante":"Brandon","papellido_estudiante":"Vargas","sapellido_estudiante":"González","run_estudiante":17808651,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":1550}
	,{"_id":257,"pnombre_estudiante":"Hilda","papellido_estudiante":"Montoya","run_estudiante":19937931,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":900}
	,{"_id":258,"pnombre_estudiante":"Catherine","papellido_estudiante":"González","run_estudiante":29376788,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":1900}
	,{"_id":259,"pnombre_estudiante":"Héctor","papellido_estudiante":"Lara","run_estudiante":26776706,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":700}
	,{"_id":260,"pnombre_estudiante":"Daniel","papellido_estudiante":"Pérez","sapellido_estudiante":"Lobos","run_estudiante":10206356,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":950}
	,{"_id":261,"pnombre_estudiante":"Marta","papellido_estudiante":"Romero","run_estudiante":14034855,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":750}
	,{"_id":262,"pnombre_estudiante":"Sara","papellido_estudiante":"Torres","sapellido_estudiante":"Ponce","run_estudiante":22499152,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":950}
	,{"_id":263,"pnombre_estudiante":"Luis","snombre_estudiante":"Benjamín","papellido_estudiante":"Ríos","run_estudiante":19756196,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":1100}
	,{"_id":264,"pnombre_estudiante":"María","papellido_estudiante":"Godoy","sapellido_estudiante":"Rojas","run_estudiante":19702409,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":550}
	,{"_id":265,"pnombre_estudiante":"Jenny","snombre_estudiante":"Felipe","papellido_estudiante":"Pereira","sapellido_estudiante":"Toledo","run_estudiante":18112631,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":1950}
	,{"_id":266,"pnombre_estudiante":"Humberto","papellido_estudiante":"Muñoz","sapellido_estudiante":"Pino","run_estudiante":15074923,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":100}
	,{"_id":267,"pnombre_estudiante":"Patricia","papellido_estudiante":"Aguilar","sapellido_estudiante":"Guerrero","run_estudiante":27206716,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":1050}
	,{"_id":268,"pnombre_estudiante":"Ariel","snombre_estudiante":"Carlos","papellido_estudiante":"Torres","sapellido_estudiante":"Morales","run_estudiante":18962657,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1100}
	,{"_id":269,"pnombre_estudiante":"Juan","papellido_estudiante":"Hernández","sapellido_estudiante":"Rodríguez","run_estudiante":21623414,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":850}
	,{"_id":270,"pnombre_estudiante":"Bernardita","papellido_estudiante":"Zapata","run_estudiante":28348257,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":500}
	,{"_id":271,"pnombre_estudiante":"Karen","snombre_estudiante":"Maribel","papellido_estudiante":"Cordero","sapellido_estudiante":"Valenzuela","run_estudiante":14825678,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":150}
	,{"_id":272,"pnombre_estudiante":"Santiago","papellido_estudiante":"Fuentes","run_estudiante":26577463,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1450}
	,{"_id":273,"pnombre_estudiante":"Claudia","papellido_estudiante":"Bustos","sapellido_estudiante":"Jiménez","run_estudiante":13731363,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":1950}
	,{"_id":274,"pnombre_estudiante":"Joaquín","snombre_estudiante":"Jorge","papellido_estudiante":"Correa","run_estudiante":24739041,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":1100}
	,{"_id":275,"pnombre_estudiante":"José","snombre_estudiante":"Marcos","papellido_estudiante":"Torres","sapellido_estudiante":"Vidal","run_estudiante":23321253,"dv_estudiante":"4","año_ingreso":2020,"id_carrera":1550}
	,{"_id":276,"pnombre_estudiante":"Luz","snombre_estudiante":"Macarena","papellido_estudiante":"Ayala","run_estudiante":16519153,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":850}
	,{"_id":277,"pnombre_estudiante":"Melissa","papellido_estudiante":"Sánchez","run_estudiante":22650279,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":1000}
	,{"_id":278,"pnombre_estudiante":"Félix","snombre_estudiante":"José","papellido_estudiante":"González","sapellido_estudiante":"Gutiérrez","run_estudiante":21817626,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1500}
	,{"_id":279,"pnombre_estudiante":"Julio","papellido_estudiante":"Águila","run_estudiante":28971314,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":2050}
	,{"_id":280,"pnombre_estudiante":"Sofía","papellido_estudiante":"Zepeda","sapellido_estudiante":"Cerda","run_estudiante":26136072,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":450}
	,{"_id":281,"pnombre_estudiante":"Ana","snombre_estudiante":"Santiago","papellido_estudiante":"Ruz","run_estudiante":29612232,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":1400}
	,{"_id":282,"pnombre_estudiante":"Pedro","papellido_estudiante":"Flores","sapellido_estudiante":"García","run_estudiante":24908367,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1500}
	,{"_id":283,"pnombre_estudiante":"Rosa","snombre_estudiante":"Constanza","papellido_estudiante":"Águila","run_estudiante":21594067,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":2000}
	,{"_id":284,"pnombre_estudiante":"Edison","papellido_estudiante":"Aravena","run_estudiante":24741038,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":250}
	,{"_id":285,"pnombre_estudiante":"Rafaella","snombre_estudiante":"Segundo","papellido_estudiante":"González","run_estudiante":13649711,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":1100}
	,{"_id":286,"pnombre_estudiante":"Eva","snombre_estudiante":"Cristian","papellido_estudiante":"Hernández","sapellido_estudiante":"Verdugo","run_estudiante":18482276,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":1600}
	,{"_id":287,"pnombre_estudiante":"Jorge","snombre_estudiante":"Pablo","papellido_estudiante":"Ramos","sapellido_estudiante":"Rodríguez","run_estudiante":22620938,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":1000}
	,{"_id":288,"pnombre_estudiante":"Guillermo","papellido_estudiante":"Contreras","run_estudiante":12871473,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":300}
	,{"_id":289,"pnombre_estudiante":"Teresa","papellido_estudiante":"Guerra","sapellido_estudiante":"Cortés","run_estudiante":13205087,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":2250}
	,{"_id":290,"pnombre_estudiante":"Belén","snombre_estudiante":"Eduardo","papellido_estudiante":"Hernández","run_estudiante":16998124,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":300}
	,{"_id":291,"pnombre_estudiante":"Teresa","snombre_estudiante":"Claudia","papellido_estudiante":"Ramírez","run_estudiante":24889903,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":450}
	,{"_id":292,"pnombre_estudiante":"René","snombre_estudiante":"Alfonso","papellido_estudiante":"González","sapellido_estudiante":"Saavedra","run_estudiante":14719243,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":1400}
	,{"_id":293,"pnombre_estudiante":"Juan","snombre_estudiante":"Aladino","papellido_estudiante":"Santos","sapellido_estudiante":"Pozo","run_estudiante":27011714,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":500}
	,{"_id":294,"pnombre_estudiante":"Luis","papellido_estudiante":"Fuentes","sapellido_estudiante":"González","run_estudiante":12490403,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":2000}
	,{"_id":295,"pnombre_estudiante":"Samantha","papellido_estudiante":"Vargas","sapellido_estudiante":"Sandoval","run_estudiante":27192285,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":600}
	,{"_id":296,"pnombre_estudiante":"Constanza","snombre_estudiante":"Ramón","papellido_estudiante":"Astorga","sapellido_estudiante":"Garay","run_estudiante":29211612,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":750}
	,{"_id":297,"pnombre_estudiante":"Andrés","snombre_estudiante":"Carmen","papellido_estudiante":"López","sapellido_estudiante":"Soto","run_estudiante":23807923,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1150}
	,{"_id":298,"pnombre_estudiante":"Cristina","snombre_estudiante":"Javiera","papellido_estudiante":"Aravena","sapellido_estudiante":"Quintanilla","run_estudiante":24541700,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":300}
	,{"_id":299,"pnombre_estudiante":"Jennifer","snombre_estudiante":"Fanny","papellido_estudiante":"Mendoza","sapellido_estudiante":"Parra","run_estudiante":12153885,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":500}
	,{"_id":300,"pnombre_estudiante":"Josefina","snombre_estudiante":"Margarita","papellido_estudiante":"Vega","run_estudiante":14772589,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":900}
	,{"_id":301,"pnombre_estudiante":"Soledad","papellido_estudiante":"Saavedra","run_estudiante":13116484,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":1850}
	,{"_id":302,"pnombre_estudiante":"Cristian","papellido_estudiante":"Véliz","sapellido_estudiante":"Bravo","run_estudiante":26939413,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":100}
	,{"_id":303,"pnombre_estudiante":"Camila","snombre_estudiante":"Martín","papellido_estudiante":"Castillo","sapellido_estudiante":"Zepeda","run_estudiante":17215302,"dv_estudiante":"5","año_ingreso":2021,"id_carrera":300}
	,{"_id":304,"pnombre_estudiante":"Jean","papellido_estudiante":"Díaz","run_estudiante":17357122,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":1000}
	,{"_id":305,"pnombre_estudiante":"Sergio","snombre_estudiante":"Mario","papellido_estudiante":"Olmos","run_estudiante":27899401,"dv_estudiante":"K","año_ingreso":2021,"id_carrera":2050}
	,{"_id":306,"pnombre_estudiante":"Raquel","papellido_estudiante":"Reyes","run_estudiante":29435836,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":750}
	,{"_id":307,"pnombre_estudiante":"Héctor","papellido_estudiante":"Rojas","sapellido_estudiante":"Gallardo","run_estudiante":12876968,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":350}
	,{"_id":308,"pnombre_estudiante":"Vicente","papellido_estudiante":"Estrada","run_estudiante":19837404,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":700}
	,{"_id":309,"pnombre_estudiante":"Adriana","papellido_estudiante":"Barra","run_estudiante":11715095,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":100}
	,{"_id":310,"pnombre_estudiante":"Estela","papellido_estudiante":"Galaz","run_estudiante":26618618,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":250}
	,{"_id":311,"pnombre_estudiante":"Celeste","snombre_estudiante":"Matías","papellido_estudiante":"Cabello","sapellido_estudiante":"Alarcón","run_estudiante":23919574,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":750}
	,{"_id":312,"pnombre_estudiante":"Marta","papellido_estudiante":"Montenegro","sapellido_estudiante":"Gómez","run_estudiante":14627304,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":300}
	,{"_id":313,"pnombre_estudiante":"Constanza","snombre_estudiante":"Emilio","papellido_estudiante":"Jiménez","sapellido_estudiante":"Oyarzún","run_estudiante":15914929,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":2150}
	,{"_id":314,"pnombre_estudiante":"Pascuala","papellido_estudiante":"Valderrama","sapellido_estudiante":"Chamorro","run_estudiante":17617742,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":1250}
	,{"_id":315,"pnombre_estudiante":"Rita","snombre_estudiante":"Francisca","papellido_estudiante":"Ortiz","sapellido_estudiante":"Valenzuela","run_estudiante":19197175,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":550}
	,{"_id":316,"pnombre_estudiante":"María","papellido_estudiante":"Jiménez","run_estudiante":23918282,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1200}
	,{"_id":317,"pnombre_estudiante":"Jeannette","snombre_estudiante":"Patricio","papellido_estudiante":"Marín","sapellido_estudiante":"Aravena","run_estudiante":14555364,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":1750}
	,{"_id":318,"pnombre_estudiante":"Nathalie","papellido_estudiante":"Inostroza","run_estudiante":23375695,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":100}
	,{"_id":319,"pnombre_estudiante":"Arturo","papellido_estudiante":"Hernández","sapellido_estudiante":"Villagra","run_estudiante":27748600,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":350}
	,{"_id":320,"pnombre_estudiante":"María","papellido_estudiante":"Oyarzo","run_estudiante":25833728,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":2100}
	,{"_id":321,"pnombre_estudiante":"Victoria","snombre_estudiante":"Nelson","papellido_estudiante":"Cárdenas","sapellido_estudiante":"Rivas","run_estudiante":11180504,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":1750}
	,{"_id":322,"pnombre_estudiante":"Sebastián","papellido_estudiante":"Fierro","run_estudiante":17603121,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":2000}
	,{"_id":323,"pnombre_estudiante":"Sara","snombre_estudiante":"Pedro","papellido_estudiante":"Villalobos","run_estudiante":10424998,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":1050}
	,{"_id":324,"pnombre_estudiante":"Verónica","papellido_estudiante":"Tapia","sapellido_estudiante":"Rojo","run_estudiante":20498869,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":1250}
	,{"_id":325,"pnombre_estudiante":"Paola","snombre_estudiante":"Jorge","papellido_estudiante":"Espinoza","sapellido_estudiante":"González","run_estudiante":13269396,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":500}
	,{"_id":326,"pnombre_estudiante":"Abigail","snombre_estudiante":"Lilian","papellido_estudiante":"Rubio","sapellido_estudiante":"Cáceres","run_estudiante":12587162,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":300}
	,{"_id":327,"pnombre_estudiante":"Matías","papellido_estudiante":"Carreño","run_estudiante":25919317,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":950}
	,{"_id":328,"pnombre_estudiante":"Trinidad","papellido_estudiante":"Céspedes","sapellido_estudiante":"Olivares","run_estudiante":14105892,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":200}
	,{"_id":329,"pnombre_estudiante":"Humberto","papellido_estudiante":"Cea","sapellido_estudiante":"Ruz","run_estudiante":25946023,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":500}
	,{"_id":330,"pnombre_estudiante":"Fernanda","snombre_estudiante":"Claudio","papellido_estudiante":"Garrido","sapellido_estudiante":"Machuca","run_estudiante":12653458,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":1750}
	,{"_id":331,"pnombre_estudiante":"Santiago","snombre_estudiante":"Camila","papellido_estudiante":"Roa","run_estudiante":12551357,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":150}
	,{"_id":332,"pnombre_estudiante":"Roberto","papellido_estudiante":"Marambio","run_estudiante":13336407,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":900}
	,{"_id":333,"pnombre_estudiante":"Amanda","papellido_estudiante":"Vásquez","run_estudiante":24875819,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":550}
	,{"_id":334,"pnombre_estudiante":"Víctor","snombre_estudiante":"Angélica","papellido_estudiante":"Sepúlveda","sapellido_estudiante":"Ortiz","run_estudiante":17379191,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":550}
	,{"_id":335,"pnombre_estudiante":"María","papellido_estudiante":"Torres","run_estudiante":26145606,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":2050}
	,{"_id":336,"pnombre_estudiante":"Guillermo","papellido_estudiante":"Ramírez","run_estudiante":23278822,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":2250}
	,{"_id":337,"pnombre_estudiante":"Francisca","snombre_estudiante":"Matías","papellido_estudiante":"Rojas","sapellido_estudiante":"Garcés","run_estudiante":22440222,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":1300}
	,{"_id":338,"pnombre_estudiante":"Verónica","papellido_estudiante":"Paredes","sapellido_estudiante":"Vera","run_estudiante":24239939,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":700}
	,{"_id":339,"pnombre_estudiante":"Amaro","papellido_estudiante":"Aravena","run_estudiante":17732599,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":450}
	,{"_id":340,"pnombre_estudiante":"Constanza","snombre_estudiante":"Daniel","papellido_estudiante":"González","run_estudiante":20952141,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":550}
	,{"_id":341,"pnombre_estudiante":"Héctor","papellido_estudiante":"Espinosa","sapellido_estudiante":"Garrido","run_estudiante":14174231,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1050}
	,{"_id":342,"pnombre_estudiante":"Valentino","snombre_estudiante":"Ivonne","papellido_estudiante":"Huerta","sapellido_estudiante":"Martínez","run_estudiante":25847867,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":450}
	,{"_id":343,"pnombre_estudiante":"Claudio","snombre_estudiante":"Graciela","papellido_estudiante":"Cerda","run_estudiante":14388875,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":2100}
	,{"_id":344,"pnombre_estudiante":"Raúl","snombre_estudiante":"Julio","papellido_estudiante":"Gajardo","run_estudiante":17516814,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":1550}
	,{"_id":345,"pnombre_estudiante":"Camila","papellido_estudiante":"Gajardo","sapellido_estudiante":"Vargas","run_estudiante":28076466,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":100}
	,{"_id":346,"pnombre_estudiante":"Miriam","papellido_estudiante":"Donoso","run_estudiante":16535793,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":1300}
	,{"_id":347,"pnombre_estudiante":"Gladys","papellido_estudiante":"Rojas","run_estudiante":13562832,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1500}
	,{"_id":348,"pnombre_estudiante":"Karen","papellido_estudiante":"Álvarez","run_estudiante":14156065,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":1750}
	,{"_id":349,"pnombre_estudiante":"Margarita","snombre_estudiante":"Pascal","papellido_estudiante":"Durán","run_estudiante":15918607,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":1850}
	,{"_id":350,"pnombre_estudiante":"Ximena","snombre_estudiante":"Cynthia","papellido_estudiante":"Montecinos","sapellido_estudiante":"Miranda","run_estudiante":25562566,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":550}
	,{"_id":351,"pnombre_estudiante":"Roberto","papellido_estudiante":"Guerrero","run_estudiante":15502461,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":1950}
	,{"_id":352,"pnombre_estudiante":"Romina","papellido_estudiante":"Gaete","sapellido_estudiante":"Vásquez","run_estudiante":22223882,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":1550}
	,{"_id":353,"pnombre_estudiante":"Francisca","snombre_estudiante":"José","papellido_estudiante":"Ramos","sapellido_estudiante":"Muñoz","run_estudiante":18215942,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":1000}
	,{"_id":354,"pnombre_estudiante":"Giovanna","snombre_estudiante":"Daniela","papellido_estudiante":"Leiva","sapellido_estudiante":"Salazar","run_estudiante":27733887,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":1350}
	,{"_id":355,"pnombre_estudiante":"Patricia","papellido_estudiante":"Gutiérrez","run_estudiante":20502598,"dv_estudiante":"4","año_ingreso":2022,"id_carrera":400}
	,{"_id":356,"pnombre_estudiante":"Rolando","papellido_estudiante":"Salazar","run_estudiante":14816073,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":1650}
	,{"_id":357,"pnombre_estudiante":"Paz","papellido_estudiante":"Carrasco","sapellido_estudiante":"Pérez","run_estudiante":27425011,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":900}
	,{"_id":358,"pnombre_estudiante":"Karen","snombre_estudiante":"Francisco","papellido_estudiante":"Torres","sapellido_estudiante":"Toledo","run_estudiante":22424872,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":1400}
	,{"_id":359,"pnombre_estudiante":"Lucas","papellido_estudiante":"Rojas","run_estudiante":21730899,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":2050}
	,{"_id":360,"pnombre_estudiante":"Herminio","snombre_estudiante":"Maximiliano","papellido_estudiante":"González","sapellido_estudiante":"Collao","run_estudiante":20580621,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":2200}
	,{"_id":361,"pnombre_estudiante":"Haydée","snombre_estudiante":"Ángel","papellido_estudiante":"Sáez","run_estudiante":13956087,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":2250}
	,{"_id":362,"pnombre_estudiante":"Nancy","snombre_estudiante":"Camila","papellido_estudiante":"Ortega","sapellido_estudiante":"San Martín","run_estudiante":15605956,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":2050}
	,{"_id":363,"pnombre_estudiante":"Emiliano","papellido_estudiante":"Maldonado","run_estudiante":10706379,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1600}
	,{"_id":364,"pnombre_estudiante":"Karen","papellido_estudiante":"Mendoza","run_estudiante":17210895,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":1000}
	,{"_id":365,"pnombre_estudiante":"Antonia","snombre_estudiante":"Carlos","papellido_estudiante":"Barría","run_estudiante":12089910,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":2250}
	,{"_id":366,"pnombre_estudiante":"Ingrid","papellido_estudiante":"Durán","run_estudiante":20295651,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":1050}
	,{"_id":367,"pnombre_estudiante":"Fabián","snombre_estudiante":"Antonia","papellido_estudiante":"Zamora","run_estudiante":17231988,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":1350}
	,{"_id":368,"pnombre_estudiante":"María","papellido_estudiante":"Vargas","sapellido_estudiante":"Ulloa","run_estudiante":23120306,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":1900}
	,{"_id":369,"pnombre_estudiante":"Francisco","papellido_estudiante":"Vega","run_estudiante":22491649,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":50}
	,{"_id":370,"pnombre_estudiante":"Fabricio","snombre_estudiante":"María","papellido_estudiante":"Torres","run_estudiante":21234904,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1350}
	,{"_id":371,"pnombre_estudiante":"Dominique","papellido_estudiante":"Guerrero","run_estudiante":29776748,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":800}
	,{"_id":372,"pnombre_estudiante":"Jorge","papellido_estudiante":"Saavedra","sapellido_estudiante":"Salgado","run_estudiante":21492823,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":650}
	,{"_id":373,"pnombre_estudiante":"Eva","snombre_estudiante":"Iván","papellido_estudiante":"Mendoza","sapellido_estudiante":"Pérez","run_estudiante":27247430,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":700}
	,{"_id":374,"pnombre_estudiante":"Javier","papellido_estudiante":"Astete","sapellido_estudiante":"Ojeda","run_estudiante":20300224,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":350}
	,{"_id":375,"pnombre_estudiante":"Sergio","papellido_estudiante":"Astorga","run_estudiante":28414891,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1800}
	,{"_id":376,"pnombre_estudiante":"Benjamín","papellido_estudiante":"Aguilera","run_estudiante":21231796,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":300}
	,{"_id":377,"pnombre_estudiante":"Bruno","papellido_estudiante":"Carrasco","run_estudiante":10932430,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1450}
	,{"_id":378,"pnombre_estudiante":"Matías","papellido_estudiante":"Delgado","sapellido_estudiante":"Lagos","run_estudiante":28665736,"dv_estudiante":"4","año_ingreso":2022,"id_carrera":1000}
	,{"_id":379,"pnombre_estudiante":"Oscar","snombre_estudiante":"Andrea","papellido_estudiante":"Durán","sapellido_estudiante":"Contreras","run_estudiante":10578941,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":1300}
	,{"_id":380,"pnombre_estudiante":"Luis","snombre_estudiante":"Ingrid","papellido_estudiante":"Arriagada","run_estudiante":10717167,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":1850}
	,{"_id":381,"pnombre_estudiante":"Vladimir","snombre_estudiante":"Mario","papellido_estudiante":"Riquelme","run_estudiante":18182290,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":2100}
	,{"_id":382,"pnombre_estudiante":"Milton","snombre_estudiante":"Anastasia","papellido_estudiante":"Venegas","sapellido_estudiante":"Maldonado","run_estudiante":12638202,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":750}
	,{"_id":383,"pnombre_estudiante":"Monica","papellido_estudiante":"Acuña","run_estudiante":22467602,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":500}
	,{"_id":384,"pnombre_estudiante":"Catalina","snombre_estudiante":"Karla","papellido_estudiante":"Yáñez","run_estudiante":25024470,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":400}
	,{"_id":385,"pnombre_estudiante":"David","snombre_estudiante":"Juan","papellido_estudiante":"Marín","run_estudiante":28558121,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":750}
	,{"_id":386,"pnombre_estudiante":"Cristóbal","snombre_estudiante":"Julio","papellido_estudiante":"Vidal","sapellido_estudiante":"Baez","run_estudiante":27847617,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":50}
	,{"_id":387,"pnombre_estudiante":"María","papellido_estudiante":"Castillo","sapellido_estudiante":"Gutiérrez","run_estudiante":25901029,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":150}
	,{"_id":388,"pnombre_estudiante":"Héctor","papellido_estudiante":"Morales","run_estudiante":24863076,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":1500}
	,{"_id":389,"pnombre_estudiante":"Paola","snombre_estudiante":"Antonella","papellido_estudiante":"Martínez","sapellido_estudiante":"Martínez","run_estudiante":25207936,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":700}
	,{"_id":390,"pnombre_estudiante":"Scarlett","snombre_estudiante":"Rosa","papellido_estudiante":"Díaz","sapellido_estudiante":"Carvajal","run_estudiante":27543073,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":1600}
	,{"_id":391,"pnombre_estudiante":"Gonzalo","snombre_estudiante":"José","papellido_estudiante":"Silva","run_estudiante":15940119,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":650}
	,{"_id":392,"pnombre_estudiante":"Luis","papellido_estudiante":"Mendoza","run_estudiante":15451723,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":200}
	,{"_id":393,"pnombre_estudiante":"Diego","papellido_estudiante":"Lara","sapellido_estudiante":"Rocha","run_estudiante":24124959,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1100}
	,{"_id":394,"pnombre_estudiante":"Emily","snombre_estudiante":"Gustavo","papellido_estudiante":"Méndez","sapellido_estudiante":"Correa","run_estudiante":19596593,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":50}
	,{"_id":395,"pnombre_estudiante":"Claudio","snombre_estudiante":"Josefa","papellido_estudiante":"Arancibia","sapellido_estudiante":"Badilla","run_estudiante":29411124,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1050}
	,{"_id":396,"pnombre_estudiante":"Facundo","snombre_estudiante":"Jorge","papellido_estudiante":"Soto","run_estudiante":28727213,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":1550}
	,{"_id":397,"pnombre_estudiante":"Agustina","snombre_estudiante":"Luciano","papellido_estudiante":"Riffo","sapellido_estudiante":"Urra","run_estudiante":17327772,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":300}
	,{"_id":398,"pnombre_estudiante":"Felipe","snombre_estudiante":"Sofía","papellido_estudiante":"Montecinos","sapellido_estudiante":"Lagos","run_estudiante":18513336,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":850}
	,{"_id":399,"pnombre_estudiante":"Osvaldo","papellido_estudiante":"Aguilera","run_estudiante":21009855,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":200}
	,{"_id":400,"pnombre_estudiante":"José","snombre_estudiante":"María","papellido_estudiante":"Rodríguez","run_estudiante":24287482,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1650}
	,{"_id":401,"pnombre_estudiante":"Aída","papellido_estudiante":"Merino","run_estudiante":22305287,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":1900}
	,{"_id":402,"pnombre_estudiante":"Génesis","papellido_estudiante":"Vera","sapellido_estudiante":"Valdés","run_estudiante":12899523,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":250}
	,{"_id":403,"pnombre_estudiante":"Cristóbal","snombre_estudiante":"Manuel","papellido_estudiante":"Retamal","sapellido_estudiante":"Cortés","run_estudiante":27999353,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1450}
	,{"_id":404,"pnombre_estudiante":"Hernán","snombre_estudiante":"Debora","papellido_estudiante":"González","run_estudiante":12865630,"dv_estudiante":"4","año_ingreso":2022,"id_carrera":1900}
	,{"_id":405,"pnombre_estudiante":"Miguel","snombre_estudiante":"Juan","papellido_estudiante":"Gómez","run_estudiante":13697979,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":850}
	,{"_id":406,"pnombre_estudiante":"Ximena","papellido_estudiante":"Cruz","run_estudiante":28143523,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":750}
	,{"_id":407,"pnombre_estudiante":"Sebastián","snombre_estudiante":"Jesus","papellido_estudiante":"Vergara","sapellido_estudiante":"Maturana","run_estudiante":15937260,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":1300}
	,{"_id":408,"pnombre_estudiante":"Oscar","snombre_estudiante":"Catalina","papellido_estudiante":"Mamani","run_estudiante":16309131,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":300}
	,{"_id":409,"pnombre_estudiante":"Valentina","snombre_estudiante":"Fernanda","papellido_estudiante":"Contreras","sapellido_estudiante":"Castro","run_estudiante":29137873,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":700}
	,{"_id":410,"pnombre_estudiante":"Julia","papellido_estudiante":"Salas","sapellido_estudiante":"Olivares","run_estudiante":23009417,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":200}
	,{"_id":411,"pnombre_estudiante":"Darling","snombre_estudiante":"Anahis","papellido_estudiante":"Villablanca","run_estudiante":26320176,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":1950}
	,{"_id":412,"pnombre_estudiante":"Carla","snombre_estudiante":"Bárbara","papellido_estudiante":"Rojas","sapellido_estudiante":"Torres","run_estudiante":10401675,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":500}
	,{"_id":413,"pnombre_estudiante":"María","snombre_estudiante":"Nicol","papellido_estudiante":"Villablanca","sapellido_estudiante":"Pozo","run_estudiante":14194064,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1350}
	,{"_id":414,"pnombre_estudiante":"René","papellido_estudiante":"San Martín","run_estudiante":25010962,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":450}
	,{"_id":415,"pnombre_estudiante":"Sebastián","papellido_estudiante":"Catalán","sapellido_estudiante":"Núñez","run_estudiante":29621176,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":700}
	,{"_id":416,"pnombre_estudiante":"Ruperto","papellido_estudiante":"Carvajal","run_estudiante":28491016,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":800}
	,{"_id":417,"pnombre_estudiante":"Soraya","snombre_estudiante":"José","papellido_estudiante":"Chandía","sapellido_estudiante":"Cáceres","run_estudiante":12216820,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":1550}
	,{"_id":418,"pnombre_estudiante":"Ángel","snombre_estudiante":"Valentina","papellido_estudiante":"Leal","run_estudiante":23267043,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":600}
	,{"_id":419,"pnombre_estudiante":"Nicole","papellido_estudiante":"Toro","sapellido_estudiante":"Moraga","run_estudiante":15297791,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1200}
	,{"_id":420,"pnombre_estudiante":"Karina","snombre_estudiante":"Gabriela","papellido_estudiante":"Jara","run_estudiante":25207324,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":1450}
	,{"_id":421,"pnombre_estudiante":"Camila","papellido_estudiante":"Santibáñez","run_estudiante":29189854,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":550}
	,{"_id":422,"pnombre_estudiante":"Paola","papellido_estudiante":"Godoy","sapellido_estudiante":"Ramírez","run_estudiante":17482411,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":2000}
	,{"_id":423,"pnombre_estudiante":"Ignacio","snombre_estudiante":"Ana","papellido_estudiante":"Toloza","sapellido_estudiante":"Silva","run_estudiante":25876895,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":2250}
	,{"_id":424,"pnombre_estudiante":"Roxana","snombre_estudiante":"Matías","papellido_estudiante":"Barrientos","run_estudiante":21614806,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":500}
	,{"_id":425,"pnombre_estudiante":"Sergio","papellido_estudiante":"Santos","run_estudiante":17869468,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":1150}
	,{"_id":426,"pnombre_estudiante":"Franco","papellido_estudiante":"Contreras","run_estudiante":23290508,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":2050}
	,{"_id":427,"pnombre_estudiante":"Monica","papellido_estudiante":"González","sapellido_estudiante":"Vargas","run_estudiante":12918194,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":1250}
	,{"_id":428,"pnombre_estudiante":"Luis","papellido_estudiante":"Aguilera","sapellido_estudiante":"Zúñiga","run_estudiante":21304912,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":1750}
	,{"_id":429,"pnombre_estudiante":"Tomás","papellido_estudiante":"Alarcón","sapellido_estudiante":"Cáceres","run_estudiante":11275902,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":150}
	,{"_id":430,"pnombre_estudiante":"Luis","papellido_estudiante":"Muñoz","sapellido_estudiante":"Matus","run_estudiante":12523907,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":1100}
	,{"_id":431,"pnombre_estudiante":"Carolina","snombre_estudiante":"Felipe","papellido_estudiante":"Moreno","sapellido_estudiante":"Marchant","run_estudiante":26339886,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1600}
	,{"_id":432,"pnombre_estudiante":"Angélica","snombre_estudiante":"Santos","papellido_estudiante":"Riquelme","sapellido_estudiante":"Galdames","run_estudiante":10774188,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":1200}
	,{"_id":433,"pnombre_estudiante":"Humberto","papellido_estudiante":"Campos","sapellido_estudiante":"Soto","run_estudiante":20394540,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":350}
	,{"_id":434,"pnombre_estudiante":"Carlos","papellido_estudiante":"Espinoza","run_estudiante":19108791,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":250}
	,{"_id":435,"pnombre_estudiante":"Ramón","papellido_estudiante":"Valenzuela","sapellido_estudiante":"Henríquez","run_estudiante":19650183,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":800}
	,{"_id":436,"pnombre_estudiante":"Emilia","papellido_estudiante":"González","run_estudiante":18048566,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1700}
	,{"_id":437,"pnombre_estudiante":"Macarena","snombre_estudiante":"Marcela","papellido_estudiante":"Cortés","sapellido_estudiante":"Maldonado","run_estudiante":18000678,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1550}
	,{"_id":438,"pnombre_estudiante":"José","snombre_estudiante":"Consuelo","papellido_estudiante":"Gamboa","sapellido_estudiante":"Rojas","run_estudiante":25572563,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":100}
	,{"_id":439,"pnombre_estudiante":"Allison","snombre_estudiante":"Mario","papellido_estudiante":"Godoy","run_estudiante":16756826,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":900}
	,{"_id":440,"pnombre_estudiante":"Bastián","papellido_estudiante":"Castillo","run_estudiante":13228429,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":1950}
	,{"_id":441,"pnombre_estudiante":"Belén","papellido_estudiante":"Rivera","run_estudiante":11165582,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":1600}
	,{"_id":442,"pnombre_estudiante":"David","snombre_estudiante":"María","papellido_estudiante":"Araya","sapellido_estudiante":"Cerda","run_estudiante":20401126,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":850}
	,{"_id":443,"pnombre_estudiante":"Verónica","papellido_estudiante":"Navarro","sapellido_estudiante":"Oliva","run_estudiante":22659911,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":800}
	,{"_id":444,"pnombre_estudiante":"Sandra","papellido_estudiante":"Acevedo","run_estudiante":11827551,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":550}
	,{"_id":445,"pnombre_estudiante":"Valentina","snombre_estudiante":"Esmeralda","papellido_estudiante":"Rodríguez","run_estudiante":21289110,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":1800}
	,{"_id":446,"pnombre_estudiante":"Mario","papellido_estudiante":"Gómez","sapellido_estudiante":"Morales","run_estudiante":21730917,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":1050}
	,{"_id":447,"pnombre_estudiante":"Maritza","snombre_estudiante":"Ingrid","papellido_estudiante":"Torres","sapellido_estudiante":"Valenzuela","run_estudiante":23533673,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":1200}
	,{"_id":448,"pnombre_estudiante":"Paola","papellido_estudiante":"Correa","sapellido_estudiante":"Cáceres","run_estudiante":28264847,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1500}
	,{"_id":449,"pnombre_estudiante":"Sofía","papellido_estudiante":"Araya","sapellido_estudiante":"Romero","run_estudiante":13898468,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":1500}
	,{"_id":450,"pnombre_estudiante":"Anaís","papellido_estudiante":"Moya","run_estudiante":10692917,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":550}
	,{"_id":451,"pnombre_estudiante":"Juan","papellido_estudiante":"Díaz","run_estudiante":16176515,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":200}
	,{"_id":452,"pnombre_estudiante":"Iván","snombre_estudiante":"Cristóbal","papellido_estudiante":"García","run_estudiante":10839462,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":2000}
	,{"_id":453,"pnombre_estudiante":"Julián","papellido_estudiante":"Rojas","sapellido_estudiante":"Rivera","run_estudiante":28569652,"dv_estudiante":"5","año_ingreso":2021,"id_carrera":1300}
	,{"_id":454,"pnombre_estudiante":"Mario","snombre_estudiante":"Karen","papellido_estudiante":"Venegas","sapellido_estudiante":"Castro","run_estudiante":24227232,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":750}
	,{"_id":455,"pnombre_estudiante":"Eugenio","papellido_estudiante":"Maureira","run_estudiante":25445376,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":1250}
	,{"_id":456,"pnombre_estudiante":"Manuel","snombre_estudiante":"María","papellido_estudiante":"Ortiz","run_estudiante":21699553,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":650}
	,{"_id":457,"pnombre_estudiante":"Daniel","papellido_estudiante":"Hernández","run_estudiante":13103728,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":700}
	,{"_id":458,"pnombre_estudiante":"Leonardo","papellido_estudiante":"Morales","run_estudiante":20291493,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":650}
	,{"_id":459,"pnombre_estudiante":"Blanca","snombre_estudiante":"Miriam","papellido_estudiante":"Ampuero","sapellido_estudiante":"Tapia","run_estudiante":19467361,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":1300}
	,{"_id":460,"pnombre_estudiante":"Patricio","snombre_estudiante":"Javiera","papellido_estudiante":"Lobos","run_estudiante":22479825,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":2100}
	,{"_id":461,"pnombre_estudiante":"Norma","papellido_estudiante":"Ruiz","run_estudiante":20144225,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1000}
	,{"_id":462,"pnombre_estudiante":"Margarita","snombre_estudiante":"Jaime","papellido_estudiante":"Lagos","sapellido_estudiante":"Vidal","run_estudiante":17283692,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":450}
	,{"_id":463,"pnombre_estudiante":"Fabián","snombre_estudiante":"Marianela","papellido_estudiante":"Peña","sapellido_estudiante":"Vera","run_estudiante":12691692,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":2150}
	,{"_id":464,"pnombre_estudiante":"Diego","papellido_estudiante":"López","run_estudiante":18688270,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":300}
	,{"_id":465,"pnombre_estudiante":"Matías","snombre_estudiante":"Eugenio","papellido_estudiante":"Rojas","sapellido_estudiante":"Durán","run_estudiante":12722320,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":1900}
	,{"_id":466,"pnombre_estudiante":"Gladys","papellido_estudiante":"Espinoza","run_estudiante":29468371,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":850}
	,{"_id":467,"pnombre_estudiante":"José","snombre_estudiante":"Juana","papellido_estudiante":"Agurto","sapellido_estudiante":"Castro","run_estudiante":28876792,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":900}
	,{"_id":468,"pnombre_estudiante":"Emilia","papellido_estudiante":"Cisterna","sapellido_estudiante":"Pavez","run_estudiante":14526241,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":300}
	,{"_id":469,"pnombre_estudiante":"Alex","snombre_estudiante":"Nolberto","papellido_estudiante":"Zúñiga","run_estudiante":23209629,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1650}
	,{"_id":470,"pnombre_estudiante":"Santos","papellido_estudiante":"Urra","run_estudiante":27781774,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":950}
	,{"_id":471,"pnombre_estudiante":"Johana","snombre_estudiante":"María","papellido_estudiante":"Morales","sapellido_estudiante":"Almonacid","run_estudiante":15068358,"dv_estudiante":"4","año_ingreso":2020,"id_carrera":1250}
	,{"_id":472,"pnombre_estudiante":"Pedro","snombre_estudiante":"Ángela","papellido_estudiante":"Riveros","run_estudiante":13466591,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":900}
	,{"_id":473,"pnombre_estudiante":"Sabrina","snombre_estudiante":"Diego","papellido_estudiante":"Leiva","run_estudiante":20681842,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":1850}
	,{"_id":474,"pnombre_estudiante":"Denisse","papellido_estudiante":"Donoso","sapellido_estudiante":"Guzmán","run_estudiante":10933137,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":500}
	,{"_id":475,"pnombre_estudiante":"Marcelo","papellido_estudiante":"Leyton","run_estudiante":19520437,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1650}
	,{"_id":476,"pnombre_estudiante":"Nelson","snombre_estudiante":"Alonso","papellido_estudiante":"Retamal","run_estudiante":16041452,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":2050}
	,{"_id":477,"pnombre_estudiante":"Fernando","snombre_estudiante":"Mario","papellido_estudiante":"Fernández","sapellido_estudiante":"Quezada","run_estudiante":18803567,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":2150}
	,{"_id":478,"pnombre_estudiante":"María","papellido_estudiante":"Rodríguez","run_estudiante":24811265,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1900}
	,{"_id":479,"pnombre_estudiante":"Jenny","papellido_estudiante":"Godoy","run_estudiante":18224123,"dv_estudiante":"5","año_ingreso":2021,"id_carrera":1300}
	,{"_id":480,"pnombre_estudiante":"Krishna","papellido_estudiante":"Soto","run_estudiante":10115036,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":2050}
	,{"_id":481,"pnombre_estudiante":"Paulina","papellido_estudiante":"Guerrero","sapellido_estudiante":"Veloso","run_estudiante":28590516,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":1350}
	,{"_id":482,"pnombre_estudiante":"Viviana","snombre_estudiante":"Oriana","papellido_estudiante":"Vega","sapellido_estudiante":"Cortés","run_estudiante":20422185,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":500}
	,{"_id":483,"pnombre_estudiante":"Juanita","papellido_estudiante":"Cuevas","run_estudiante":24908749,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1500}
	,{"_id":484,"pnombre_estudiante":"Joaquín","papellido_estudiante":"Guerrero","sapellido_estudiante":"Troncoso","run_estudiante":12329628,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":2150}
	,{"_id":485,"pnombre_estudiante":"Manuel","snombre_estudiante":"Guillermo","papellido_estudiante":"Hormazábal","run_estudiante":22056699,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":350}
	,{"_id":486,"pnombre_estudiante":"María","snombre_estudiante":"Adelina","papellido_estudiante":"Acuña","run_estudiante":22331005,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":1950}
	,{"_id":487,"pnombre_estudiante":"Matías","snombre_estudiante":"Martín","papellido_estudiante":"Ponce","run_estudiante":23315245,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":1200}
	,{"_id":488,"pnombre_estudiante":"Roberto","papellido_estudiante":"Zúñiga","sapellido_estudiante":"Muñoz","run_estudiante":20866742,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1400}
	,{"_id":489,"pnombre_estudiante":"Victoria","snombre_estudiante":"Elsa","papellido_estudiante":"Miranda","sapellido_estudiante":"Reyes","run_estudiante":16233989,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":1100}
	,{"_id":490,"pnombre_estudiante":"Inés","snombre_estudiante":"Manuel","papellido_estudiante":"Molina","sapellido_estudiante":"Garrido","run_estudiante":14300893,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":1400}
	,{"_id":491,"pnombre_estudiante":"Agustina","snombre_estudiante":"Javier","papellido_estudiante":"Leiva","run_estudiante":22079876,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1600}
	,{"_id":492,"pnombre_estudiante":"Sonia","papellido_estudiante":"Castro","sapellido_estudiante":"Cortés","run_estudiante":16080536,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":850}
	,{"_id":493,"pnombre_estudiante":"Eduardo","papellido_estudiante":"Bello","run_estudiante":18952418,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":800}
	,{"_id":494,"pnombre_estudiante":"Daniel","papellido_estudiante":"Toledo","sapellido_estudiante":"Hermosilla","run_estudiante":29157351,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":1850}
	,{"_id":495,"pnombre_estudiante":"Luis","papellido_estudiante":"Rodríguez","run_estudiante":18134045,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1900}
	,{"_id":496,"pnombre_estudiante":"Thomas","snombre_estudiante":"Olga","papellido_estudiante":"Araya","run_estudiante":12846469,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":700}
	,{"_id":497,"pnombre_estudiante":"Luciana","papellido_estudiante":"Jofré","run_estudiante":24551084,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":1050}
	,{"_id":498,"pnombre_estudiante":"Eliana","snombre_estudiante":"Mauricio","papellido_estudiante":"Peña","run_estudiante":20227435,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":900}
	,{"_id":499,"pnombre_estudiante":"Paul","papellido_estudiante":"Navarrete","run_estudiante":24463175,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":1950}
	,{"_id":500,"pnombre_estudiante":"Ninoska","snombre_estudiante":"Delia","papellido_estudiante":"Lazo","run_estudiante":17632818,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":150}
	,{"_id":501,"pnombre_estudiante":"Sebastián","snombre_estudiante":"Elena","papellido_estudiante":"Vargas","sapellido_estudiante":"Carmona","run_estudiante":20630602,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":1550}
	,{"_id":502,"pnombre_estudiante":"Katherine","snombre_estudiante":"María","papellido_estudiante":"Riquelme","run_estudiante":18931949,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":1350}
	,{"_id":503,"pnombre_estudiante":"Fernando","papellido_estudiante":"Briones","sapellido_estudiante":"Castillo","run_estudiante":22582747,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1100}
	,{"_id":504,"pnombre_estudiante":"Paulina","papellido_estudiante":"Gutiérrez","sapellido_estudiante":"Cifuentes","run_estudiante":25272245,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":850}
	,{"_id":505,"pnombre_estudiante":"Santos","snombre_estudiante":"Brayan","papellido_estudiante":"Méndez","sapellido_estudiante":"Vásquez","run_estudiante":14426527,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1450}
	,{"_id":506,"pnombre_estudiante":"Luis","snombre_estudiante":"Natalia","papellido_estudiante":"Fuentes","sapellido_estudiante":"Ojeda","run_estudiante":15669457,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":1550}
	,{"_id":507,"pnombre_estudiante":"Tomás","snombre_estudiante":"Manuel","papellido_estudiante":"Vargas","run_estudiante":11788987,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":350}
	,{"_id":508,"pnombre_estudiante":"Marcela","snombre_estudiante":"Adolfo","papellido_estudiante":"Aguilera","run_estudiante":10475920,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":1450}
	,{"_id":509,"pnombre_estudiante":"Mónica","papellido_estudiante":"Romero","run_estudiante":22302987,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":1000}
	,{"_id":510,"pnombre_estudiante":"Florinda","papellido_estudiante":"Pincheira","run_estudiante":24637110,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":1400}
	,{"_id":511,"pnombre_estudiante":"Irene","snombre_estudiante":"Norma","papellido_estudiante":"Carvajal","sapellido_estudiante":"Araya","run_estudiante":16084953,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":500}
	,{"_id":512,"pnombre_estudiante":"Iván","snombre_estudiante":"Daniela","papellido_estudiante":"Galleguillos","run_estudiante":26617624,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1200}
	,{"_id":513,"pnombre_estudiante":"María","snombre_estudiante":"David","papellido_estudiante":"Olguín","sapellido_estudiante":"Salas","run_estudiante":25646576,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":1400}
	,{"_id":514,"pnombre_estudiante":"Felipe","snombre_estudiante":"Isabella","papellido_estudiante":"Rubio","sapellido_estudiante":"Muñoz","run_estudiante":15165813,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":700}
	,{"_id":515,"pnombre_estudiante":"Nicol","papellido_estudiante":"Fernández","sapellido_estudiante":"Fernández","run_estudiante":10196212,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":2100}
	,{"_id":516,"pnombre_estudiante":"Javiera","snombre_estudiante":"Roberto","papellido_estudiante":"Fuentes","run_estudiante":28023553,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":1200}
	,{"_id":517,"pnombre_estudiante":"Luis","snombre_estudiante":"Ana","papellido_estudiante":"Díaz","sapellido_estudiante":"Alarcón","run_estudiante":14305325,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":850}
	,{"_id":518,"pnombre_estudiante":"Alan","papellido_estudiante":"Guzmán","sapellido_estudiante":"Figueroa","run_estudiante":14085367,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":950}
	,{"_id":519,"pnombre_estudiante":"Mayra","papellido_estudiante":"Alfaro","run_estudiante":13656682,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":850}
	,{"_id":520,"pnombre_estudiante":"Nicole","snombre_estudiante":"Edgard","papellido_estudiante":"Peña","sapellido_estudiante":"Núñez","run_estudiante":16587245,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1700}
	,{"_id":521,"pnombre_estudiante":"Juan","snombre_estudiante":"Ignacia","papellido_estudiante":"Mamani","sapellido_estudiante":"Vivanco","run_estudiante":21360976,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":350}
	,{"_id":522,"pnombre_estudiante":"Rosa","snombre_estudiante":"Emilia","papellido_estudiante":"Soto","run_estudiante":17840150,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":950}
	,{"_id":523,"pnombre_estudiante":"Pía","papellido_estudiante":"Gutiérrez","run_estudiante":21781362,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":2100}
	,{"_id":524,"pnombre_estudiante":"Eduardo","snombre_estudiante":"Luciana","papellido_estudiante":"Riffo","run_estudiante":13183795,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":50}
	,{"_id":525,"pnombre_estudiante":"Valentina","papellido_estudiante":"Pérez","sapellido_estudiante":"Torres","run_estudiante":17720674,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":1400}
	,{"_id":526,"pnombre_estudiante":"Carlos","papellido_estudiante":"Donoso","sapellido_estudiante":"Valdivia","run_estudiante":20016350,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":450}
	,{"_id":527,"pnombre_estudiante":"Alexander","snombre_estudiante":"Luis","papellido_estudiante":"Cáceres","run_estudiante":13687946,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":400}
	,{"_id":528,"pnombre_estudiante":"Diego","snombre_estudiante":"Aníbal","papellido_estudiante":"Parra","sapellido_estudiante":"Rojo","run_estudiante":10417068,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":600}
	,{"_id":529,"pnombre_estudiante":"Loreto","snombre_estudiante":"Hugo","papellido_estudiante":"Gutiérrez","sapellido_estudiante":"Sáez","run_estudiante":28148518,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":700}
	,{"_id":530,"pnombre_estudiante":"Luis","snombre_estudiante":"Ángel","papellido_estudiante":"Caro","run_estudiante":29286277,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":250}
	,{"_id":531,"pnombre_estudiante":"Viviana","snombre_estudiante":"Martín","papellido_estudiante":"Fuentes","sapellido_estudiante":"Cabrera","run_estudiante":12313524,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":2100}
	,{"_id":532,"pnombre_estudiante":"Mónica","snombre_estudiante":"Danitza","papellido_estudiante":"Faúndez","run_estudiante":17644293,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":450}
	,{"_id":533,"pnombre_estudiante":"Emilia","papellido_estudiante":"Mansilla","sapellido_estudiante":"Fuentes","run_estudiante":11202379,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":900}
	,{"_id":534,"pnombre_estudiante":"Ana","snombre_estudiante":"Enrique","papellido_estudiante":"Díaz","sapellido_estudiante":"López","run_estudiante":15052513,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":100}
	,{"_id":535,"pnombre_estudiante":"Bárbara","snombre_estudiante":"Jorge","papellido_estudiante":"Troncoso","run_estudiante":24771962,"dv_estudiante":"8","año_ingreso":2024,"id_carrera":1750}
	,{"_id":536,"pnombre_estudiante":"Luis","papellido_estudiante":"Oyarzo","sapellido_estudiante":"Barría","run_estudiante":28542367,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":300}
	,{"_id":537,"pnombre_estudiante":"Carlos","snombre_estudiante":"Leonardo","papellido_estudiante":"Vargas","sapellido_estudiante":"Mamani","run_estudiante":27946291,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":150}
	,{"_id":538,"pnombre_estudiante":"Benjamín","papellido_estudiante":"Fernández","run_estudiante":14685867,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1200}
	,{"_id":539,"pnombre_estudiante":"Carlos","snombre_estudiante":"Ricardo","papellido_estudiante":"Monsalve","sapellido_estudiante":"Olmos","run_estudiante":29371089,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":450}
	,{"_id":540,"pnombre_estudiante":"Elsa","papellido_estudiante":"Ahumada","run_estudiante":13235331,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":2250}
	,{"_id":541,"pnombre_estudiante":"Guillermo","snombre_estudiante":"Rodrigo","papellido_estudiante":"Castro","run_estudiante":21502534,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":900}
	,{"_id":542,"pnombre_estudiante":"Orlando","papellido_estudiante":"Ávalos","sapellido_estudiante":"Vallejos","run_estudiante":20056514,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":1600}
	,{"_id":543,"pnombre_estudiante":"Bárbara","papellido_estudiante":"Pinto","run_estudiante":22610574,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":300}
	,{"_id":544,"pnombre_estudiante":"Ricardo","papellido_estudiante":"Ramírez","run_estudiante":16499546,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":300}
	,{"_id":545,"pnombre_estudiante":"Beatriz","snombre_estudiante":"Marcos","papellido_estudiante":"Leiva","sapellido_estudiante":"Gutiérrez","run_estudiante":14762549,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":1250}
	,{"_id":546,"pnombre_estudiante":"Violeta","papellido_estudiante":"Faúndez","run_estudiante":23748282,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":150}
	,{"_id":547,"pnombre_estudiante":"Bernardita","snombre_estudiante":"Micaela","papellido_estudiante":"Paz","sapellido_estudiante":"Durán","run_estudiante":21482825,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":1850}
	,{"_id":548,"pnombre_estudiante":"Sergio","snombre_estudiante":"María","papellido_estudiante":"Sandoval","sapellido_estudiante":"Cáceres","run_estudiante":24570924,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":1000}
	,{"_id":549,"pnombre_estudiante":"William","snombre_estudiante":"Alejandra","papellido_estudiante":"Cortez","run_estudiante":14355881,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":1750}
	,{"_id":550,"pnombre_estudiante":"Jessica","snombre_estudiante":"Samuel","papellido_estudiante":"Gajardo","run_estudiante":11649719,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":200}
	,{"_id":551,"pnombre_estudiante":"Thiare","papellido_estudiante":"Torres","sapellido_estudiante":"Núñez","run_estudiante":14763673,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":450}
	,{"_id":552,"pnombre_estudiante":"Daniel","papellido_estudiante":"Rivas","run_estudiante":15766294,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":2100}
	,{"_id":553,"pnombre_estudiante":"Viviana","papellido_estudiante":"Zárate","run_estudiante":13641081,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":600}
	,{"_id":554,"pnombre_estudiante":"Gino","papellido_estudiante":"Sánchez","run_estudiante":21081436,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":1150}
	,{"_id":555,"pnombre_estudiante":"María","papellido_estudiante":"Rojas","run_estudiante":16270783,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":2150}
	,{"_id":556,"pnombre_estudiante":"Tania","snombre_estudiante":"Luisa","papellido_estudiante":"Contreras","sapellido_estudiante":"López","run_estudiante":20725556,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":950}
	,{"_id":557,"pnombre_estudiante":"Leandro","papellido_estudiante":"Parada","run_estudiante":10411615,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":700}
	,{"_id":558,"pnombre_estudiante":"César","papellido_estudiante":"Riquelme","sapellido_estudiante":"Cárdenas","run_estudiante":27880913,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1950}
	,{"_id":559,"pnombre_estudiante":"Mia","papellido_estudiante":"Garay","sapellido_estudiante":"Vásquez","run_estudiante":19151952,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":1250}
	,{"_id":560,"pnombre_estudiante":"Gael","snombre_estudiante":"Cecilia","papellido_estudiante":"Hernández","sapellido_estudiante":"Valdebenito","run_estudiante":27216249,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":1050}
	,{"_id":561,"pnombre_estudiante":"Estefanía","snombre_estudiante":"Sebastián","papellido_estudiante":"Pérez","run_estudiante":10483962,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":2000}
	,{"_id":562,"pnombre_estudiante":"Matthew","papellido_estudiante":"Allende","sapellido_estudiante":"Gómez","run_estudiante":13077897,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":450}
	,{"_id":563,"pnombre_estudiante":"Miguel","snombre_estudiante":"María","papellido_estudiante":"Barahona","run_estudiante":22743825,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":900}
	,{"_id":564,"pnombre_estudiante":"Constanza","papellido_estudiante":"Ortiz","sapellido_estudiante":"Román","run_estudiante":19495924,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":300}
	,{"_id":565,"pnombre_estudiante":"Manuel","papellido_estudiante":"Orellana","run_estudiante":27952487,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":1950}
	,{"_id":566,"pnombre_estudiante":"Rolando","snombre_estudiante":"Jonathan","papellido_estudiante":"Pérez","sapellido_estudiante":"Estrada","run_estudiante":26258857,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":1900}
	,{"_id":567,"pnombre_estudiante":"Hernán","snombre_estudiante":"Scarlette","papellido_estudiante":"Luna","sapellido_estudiante":"Reyes","run_estudiante":18443622,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":900}
	,{"_id":568,"pnombre_estudiante":"Rodolfo","snombre_estudiante":"Patricia","papellido_estudiante":"Acevedo","run_estudiante":23494466,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":250}
	,{"_id":569,"pnombre_estudiante":"Michelle","papellido_estudiante":"Saldivia","sapellido_estudiante":"Hernández","run_estudiante":29648802,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":300}
	,{"_id":570,"pnombre_estudiante":"Cristóbal","papellido_estudiante":"Farías","run_estudiante":21783960,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":1950}
	,{"_id":571,"pnombre_estudiante":"Juan","snombre_estudiante":"Mateo","papellido_estudiante":"Vásquez","sapellido_estudiante":"Maturana","run_estudiante":21135901,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":100}
	,{"_id":572,"pnombre_estudiante":"Cecilia","snombre_estudiante":"Santiago","papellido_estudiante":"León","sapellido_estudiante":"Duarte","run_estudiante":23809731,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":950}
	,{"_id":573,"pnombre_estudiante":"Eduardo","snombre_estudiante":"Carmen","papellido_estudiante":"Moraga","run_estudiante":24169179,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":750}
	,{"_id":574,"pnombre_estudiante":"Silvana","papellido_estudiante":"Aguilera","run_estudiante":14034182,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":2050}
	,{"_id":575,"pnombre_estudiante":"Miguel","snombre_estudiante":"Emilio","papellido_estudiante":"Rivera","sapellido_estudiante":"Ossandón","run_estudiante":18562728,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":2250}
	,{"_id":576,"pnombre_estudiante":"Lorena","papellido_estudiante":"Muñoz","sapellido_estudiante":"Peña","run_estudiante":15404930,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":2250}
	,{"_id":577,"pnombre_estudiante":"Eduardo","papellido_estudiante":"Bórquez","run_estudiante":14151497,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1550}
	,{"_id":578,"pnombre_estudiante":"Fernando","papellido_estudiante":"Araya","run_estudiante":20735620,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":600}
	,{"_id":579,"pnombre_estudiante":"Abdón","papellido_estudiante":"Ortiz","sapellido_estudiante":"Molina","run_estudiante":20698513,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":2100}
	,{"_id":580,"pnombre_estudiante":"Luis","snombre_estudiante":"Lilian","papellido_estudiante":"Contreras","run_estudiante":13080748,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1750}
	,{"_id":581,"pnombre_estudiante":"Martín","snombre_estudiante":"Edith","papellido_estudiante":"Navarrete","run_estudiante":17081471,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":2000}
	,{"_id":582,"pnombre_estudiante":"Lucas","papellido_estudiante":"Carvajal","sapellido_estudiante":"Álvarez","run_estudiante":20587248,"dv_estudiante":"4","año_ingreso":2022,"id_carrera":2000}
	,{"_id":583,"pnombre_estudiante":"Matías","papellido_estudiante":"Vilches","run_estudiante":26178340,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":350}
	,{"_id":584,"pnombre_estudiante":"Elisabeth","papellido_estudiante":"Torres","run_estudiante":22930829,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":2050}
	,{"_id":585,"pnombre_estudiante":"Carol","papellido_estudiante":"Correa","run_estudiante":19106836,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":350}
	,{"_id":586,"pnombre_estudiante":"Denis","snombre_estudiante":"Luis","papellido_estudiante":"Gaete","run_estudiante":12203864,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":2250}
	,{"_id":587,"pnombre_estudiante":"Juan","papellido_estudiante":"Muñoz","sapellido_estudiante":"Ortiz","run_estudiante":12162133,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":1950}
	,{"_id":588,"pnombre_estudiante":"Alberto","snombre_estudiante":"Miguel","papellido_estudiante":"Cuevas","run_estudiante":17587242,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":900}
	,{"_id":589,"pnombre_estudiante":"Ernesto","papellido_estudiante":"Cárcamo","sapellido_estudiante":"Gallardo","run_estudiante":20787264,"dv_estudiante":"4","año_ingreso":2020,"id_carrera":1000}
	,{"_id":590,"pnombre_estudiante":"Carlos","snombre_estudiante":"Maritza","papellido_estudiante":"Vergara","run_estudiante":14739446,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":750}
	,{"_id":591,"pnombre_estudiante":"Rodrigo","papellido_estudiante":"Fernández","run_estudiante":20382971,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1850}
	,{"_id":592,"pnombre_estudiante":"Christian","snombre_estudiante":"Marcelo","papellido_estudiante":"Oñate","sapellido_estudiante":"Villagrán","run_estudiante":22675066,"dv_estudiante":"2","año_ingreso":2023,"id_carrera":1500}
	,{"_id":593,"pnombre_estudiante":"Brenda","papellido_estudiante":"Mejías","sapellido_estudiante":"Muñoz","run_estudiante":10118249,"dv_estudiante":"4","año_ingreso":2020,"id_carrera":1650}
	,{"_id":594,"pnombre_estudiante":"Juan","snombre_estudiante":"Mauricio","papellido_estudiante":"León","run_estudiante":15638860,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":1600}
	,{"_id":595,"pnombre_estudiante":"María","snombre_estudiante":"Raquel","papellido_estudiante":"Guzmán","sapellido_estudiante":"Sepúlveda","run_estudiante":12498765,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":1450}
	,{"_id":596,"pnombre_estudiante":"Claudia","papellido_estudiante":"Araya","run_estudiante":22333769,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":1600}
	,{"_id":597,"pnombre_estudiante":"Antonella","snombre_estudiante":"Felipe","papellido_estudiante":"Cáceres","run_estudiante":16518227,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":500}
	,{"_id":598,"pnombre_estudiante":"José","papellido_estudiante":"Valencia","sapellido_estudiante":"Pizarro","run_estudiante":18732088,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":1450}
	,{"_id":599,"pnombre_estudiante":"Marisol","papellido_estudiante":"Farías","run_estudiante":20120235,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":250}
	,{"_id":600,"pnombre_estudiante":"Gladys","snombre_estudiante":"Andrea","papellido_estudiante":"Paredes","sapellido_estudiante":"Canales","run_estudiante":17461044,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":2000}
	,{"_id":601,"pnombre_estudiante":"Luis","snombre_estudiante":"María","papellido_estudiante":"Tapia","run_estudiante":16381405,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":2150}
	,{"_id":602,"pnombre_estudiante":"Marianela","snombre_estudiante":"José","papellido_estudiante":"Valdebenito","run_estudiante":18747661,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":750}
	,{"_id":603,"pnombre_estudiante":"Mariela","papellido_estudiante":"Galaz","run_estudiante":15613104,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":1150}
	,{"_id":604,"pnombre_estudiante":"Anahí","snombre_estudiante":"Francisco","papellido_estudiante":"Díaz","sapellido_estudiante":"Carvajal","run_estudiante":13384740,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1550}
	,{"_id":605,"pnombre_estudiante":"Fernando","snombre_estudiante":"Ángel","papellido_estudiante":"Albornoz","run_estudiante":18611469,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":1950}
	,{"_id":606,"pnombre_estudiante":"José","papellido_estudiante":"Pulgar","sapellido_estudiante":"Acuña","run_estudiante":16122029,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":1300}
	,{"_id":607,"pnombre_estudiante":"Fabián","papellido_estudiante":"Acevedo","run_estudiante":24709531,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":1900}
	,{"_id":608,"pnombre_estudiante":"Karina","papellido_estudiante":"Flores","sapellido_estudiante":"Núñez","run_estudiante":21856539,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":1800}
	,{"_id":609,"pnombre_estudiante":"Franco","snombre_estudiante":"Pamela","papellido_estudiante":"Rodríguez","sapellido_estudiante":"Norambuena","run_estudiante":24164784,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":750}
	,{"_id":610,"pnombre_estudiante":"Matías","papellido_estudiante":"Suárez","sapellido_estudiante":"Zúñiga","run_estudiante":16851919,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1600}
	,{"_id":611,"pnombre_estudiante":"María","snombre_estudiante":"Josefina","papellido_estudiante":"Vergara","sapellido_estudiante":"Vega","run_estudiante":25703894,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":1950}
	,{"_id":612,"pnombre_estudiante":"Rubén","snombre_estudiante":"Karen","papellido_estudiante":"Mansilla","sapellido_estudiante":"Montecino","run_estudiante":13581004,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":1550}
	,{"_id":613,"pnombre_estudiante":"Joaquín","snombre_estudiante":"Jesús","papellido_estudiante":"Chávez","run_estudiante":23311274,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1050}
	,{"_id":614,"pnombre_estudiante":"Carolina","papellido_estudiante":"Hermosilla","run_estudiante":25511377,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":2000}
	,{"_id":615,"pnombre_estudiante":"Valentina","snombre_estudiante":"Iván","papellido_estudiante":"Vilches","sapellido_estudiante":"Baeza","run_estudiante":14537394,"dv_estudiante":"8","año_ingreso":2024,"id_carrera":450}
	,{"_id":616,"pnombre_estudiante":"Zoila","papellido_estudiante":"Castillo","run_estudiante":17618257,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":400}
	,{"_id":617,"pnombre_estudiante":"Josefina","snombre_estudiante":"Angélica","papellido_estudiante":"Cortés","sapellido_estudiante":"Soto","run_estudiante":12695373,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1300}
	,{"_id":618,"pnombre_estudiante":"Benjamín","papellido_estudiante":"Alfaro","run_estudiante":26103852,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1750}
	,{"_id":619,"pnombre_estudiante":"Patricia","snombre_estudiante":"Elizabeth","papellido_estudiante":"Valenzuela","run_estudiante":18061001,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1150}
	,{"_id":620,"pnombre_estudiante":"Javier","papellido_estudiante":"Salinas","sapellido_estudiante":"Mondaca","run_estudiante":10843967,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":2050}
	,{"_id":621,"pnombre_estudiante":"Josefa","papellido_estudiante":"Gaete","sapellido_estudiante":"Rodríguez","run_estudiante":13604047,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":1600}
	,{"_id":622,"pnombre_estudiante":"Ronald","snombre_estudiante":"Ashley","papellido_estudiante":"Belmar","sapellido_estudiante":"San Martín","run_estudiante":27685730,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":800}
	,{"_id":623,"pnombre_estudiante":"Paula","snombre_estudiante":"Constanza","papellido_estudiante":"Sepúlveda","run_estudiante":27491145,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":100}
	,{"_id":624,"pnombre_estudiante":"Roberto","papellido_estudiante":"Silva","sapellido_estudiante":"Castro","run_estudiante":25450317,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":150}
	,{"_id":625,"pnombre_estudiante":"Natalia","papellido_estudiante":"Quiroz","sapellido_estudiante":"Valdés","run_estudiante":18555612,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":400}
	,{"_id":626,"pnombre_estudiante":"María","papellido_estudiante":"González","run_estudiante":26092435,"dv_estudiante":"2","año_ingreso":2023,"id_carrera":600}
	,{"_id":627,"pnombre_estudiante":"Agustina","snombre_estudiante":"Joaquín","papellido_estudiante":"Castro","run_estudiante":22427905,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":300}
	,{"_id":628,"pnombre_estudiante":"Cristina","snombre_estudiante":"Jacqueline","papellido_estudiante":"Díaz","sapellido_estudiante":"Muñoz","run_estudiante":18201383,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":1550}
	,{"_id":629,"pnombre_estudiante":"Carolina","snombre_estudiante":"Isabella","papellido_estudiante":"Palma","sapellido_estudiante":"Mercado","run_estudiante":12620414,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":800}
	,{"_id":630,"pnombre_estudiante":"Marlene","papellido_estudiante":"Jara","sapellido_estudiante":"Barriga","run_estudiante":20923715,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1350}
	,{"_id":631,"pnombre_estudiante":"Cynthia","papellido_estudiante":"Silva","sapellido_estudiante":"Céspedes","run_estudiante":29452091,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":2100}
	,{"_id":632,"pnombre_estudiante":"Flor","papellido_estudiante":"Aránguiz","run_estudiante":15444218,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":1050}
	,{"_id":633,"pnombre_estudiante":"Hugo","papellido_estudiante":"Carrasco","run_estudiante":11672498,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":850}
	,{"_id":634,"pnombre_estudiante":"Almendra","papellido_estudiante":"Alarcón","run_estudiante":19641376,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":100}
	,{"_id":635,"pnombre_estudiante":"Pablo","snombre_estudiante":"Claudia","papellido_estudiante":"Altamirano","sapellido_estudiante":"Alvarez","run_estudiante":27237871,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":1900}
	,{"_id":636,"pnombre_estudiante":"Florinda","papellido_estudiante":"Contreras","run_estudiante":13436853,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":200}
	,{"_id":637,"pnombre_estudiante":"Ramón","snombre_estudiante":"Camila","papellido_estudiante":"Rivas","run_estudiante":21678549,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1350}
	,{"_id":638,"pnombre_estudiante":"Miriam","snombre_estudiante":"Santiago","papellido_estudiante":"Valenzuela","sapellido_estudiante":"Gutiérrez","run_estudiante":22324202,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":900}
	,{"_id":639,"pnombre_estudiante":"Catalina","papellido_estudiante":"López","run_estudiante":25705542,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":400}
	,{"_id":640,"pnombre_estudiante":"Sofía","snombre_estudiante":"Heriberto","papellido_estudiante":"Vega","sapellido_estudiante":"Rivera","run_estudiante":25522084,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":350}
	,{"_id":641,"pnombre_estudiante":"Sebastián","snombre_estudiante":"Carolina","papellido_estudiante":"Toloza","run_estudiante":15678550,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":900}
	,{"_id":642,"pnombre_estudiante":"Laura","papellido_estudiante":"Bustamante","run_estudiante":13149041,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":500}
	,{"_id":643,"pnombre_estudiante":"Maribel","snombre_estudiante":"Emilio","papellido_estudiante":"Riveros","sapellido_estudiante":"Mondaca","run_estudiante":27585191,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":700}
	,{"_id":644,"pnombre_estudiante":"Elvira","snombre_estudiante":"Anaís","papellido_estudiante":"Ruiz","run_estudiante":15615379,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":1750}
	,{"_id":645,"pnombre_estudiante":"Danny","papellido_estudiante":"Olguín","run_estudiante":17715379,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":950}
	,{"_id":646,"pnombre_estudiante":"Carlos","snombre_estudiante":"Claudio","papellido_estudiante":"García","sapellido_estudiante":"Sandoval","run_estudiante":28575079,"dv_estudiante":"5","año_ingreso":2021,"id_carrera":2100}
	,{"_id":647,"pnombre_estudiante":"Denise","snombre_estudiante":"María","papellido_estudiante":"Vera","sapellido_estudiante":"López","run_estudiante":12026774,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1450}
	,{"_id":648,"pnombre_estudiante":"Alejandro","snombre_estudiante":"Manuel","papellido_estudiante":"Flores","run_estudiante":29112164,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":1750}
	,{"_id":649,"pnombre_estudiante":"Angelo","snombre_estudiante":"Juan","papellido_estudiante":"Vergara","sapellido_estudiante":"Alfaro","run_estudiante":10265454,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":2250}
	,{"_id":650,"pnombre_estudiante":"Marta","snombre_estudiante":"Domingo","papellido_estudiante":"Cofré","run_estudiante":26963707,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":850}
	,{"_id":651,"pnombre_estudiante":"Martina","papellido_estudiante":"Fuentes","run_estudiante":29469790,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":300}
	,{"_id":652,"pnombre_estudiante":"Mario","snombre_estudiante":"Mercedes","papellido_estudiante":"Torres","sapellido_estudiante":"Robles","run_estudiante":10718863,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":650}
	,{"_id":653,"pnombre_estudiante":"Catalina","snombre_estudiante":"Valeria","papellido_estudiante":"Arriagada","run_estudiante":16639126,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":550}
	,{"_id":654,"pnombre_estudiante":"Isaac","snombre_estudiante":"Paulina","papellido_estudiante":"Campos","run_estudiante":17094170,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":350}
	,{"_id":655,"pnombre_estudiante":"Franco","snombre_estudiante":"Hans","papellido_estudiante":"Quinteros","sapellido_estudiante":"Vásquez","run_estudiante":28330488,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":300}
	,{"_id":656,"pnombre_estudiante":"Luis","snombre_estudiante":"Jairo","papellido_estudiante":"Espinoza","sapellido_estudiante":"Martínez","run_estudiante":15625139,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":2200}
	,{"_id":657,"pnombre_estudiante":"Thiare","papellido_estudiante":"Valdés","sapellido_estudiante":"Navarrete","run_estudiante":29885832,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":2200}
	,{"_id":658,"pnombre_estudiante":"Aldo","papellido_estudiante":"Garay","run_estudiante":29021505,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":2050}
	,{"_id":659,"pnombre_estudiante":"Claudia","papellido_estudiante":"Aguilera","run_estudiante":12240675,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":2100}
	,{"_id":660,"pnombre_estudiante":"María","papellido_estudiante":"Vergara","sapellido_estudiante":"Marín","run_estudiante":29455714,"dv_estudiante":"2","año_ingreso":2023,"id_carrera":1700}
	,{"_id":661,"pnombre_estudiante":"Francisco","snombre_estudiante":"Gabriel","papellido_estudiante":"Rodríguez","run_estudiante":22989302,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":1250}
	,{"_id":662,"pnombre_estudiante":"Luis","snombre_estudiante":"Germán","papellido_estudiante":"Gaete","run_estudiante":26484924,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":250}
	,{"_id":663,"pnombre_estudiante":"Marcia","papellido_estudiante":"Henríquez","run_estudiante":12580544,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1550}
	,{"_id":664,"pnombre_estudiante":"Mia","papellido_estudiante":"Mora","run_estudiante":21044055,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":1700}
	,{"_id":665,"pnombre_estudiante":"Leonor","snombre_estudiante":"Tomás","papellido_estudiante":"Rivas","sapellido_estudiante":"Álvarez","run_estudiante":17065233,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1600}
	,{"_id":666,"pnombre_estudiante":"Rodolfo","snombre_estudiante":"Elizabeth","papellido_estudiante":"Poblete","sapellido_estudiante":"Peña","run_estudiante":26076641,"dv_estudiante":"2","año_ingreso":2023,"id_carrera":1300}
	,{"_id":667,"pnombre_estudiante":"Francisco","snombre_estudiante":"María","papellido_estudiante":"González","run_estudiante":20749364,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":1800}
	,{"_id":668,"pnombre_estudiante":"Geraldine","snombre_estudiante":"Melany","papellido_estudiante":"Villalobos","sapellido_estudiante":"Jorquera","run_estudiante":28675974,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":850}
	,{"_id":669,"pnombre_estudiante":"Martina","snombre_estudiante":"Hernán","papellido_estudiante":"Olmedo","sapellido_estudiante":"Medina","run_estudiante":19427734,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":950}
	,{"_id":670,"pnombre_estudiante":"Marta","papellido_estudiante":"Bravo","run_estudiante":18426372,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":1850}
	,{"_id":671,"pnombre_estudiante":"Moisés","papellido_estudiante":"Mansilla","sapellido_estudiante":"Fuentes","run_estudiante":13114645,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":650}
	,{"_id":672,"pnombre_estudiante":"Martina","snombre_estudiante":"Omar","papellido_estudiante":"Fernández","sapellido_estudiante":"Tapia","run_estudiante":19110542,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":650}
	,{"_id":673,"pnombre_estudiante":"Carlos","snombre_estudiante":"Ronald","papellido_estudiante":"Miranda","sapellido_estudiante":"Torres","run_estudiante":22209040,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":850}
	,{"_id":674,"pnombre_estudiante":"Jorge","papellido_estudiante":"Miranda","sapellido_estudiante":"Mamani","run_estudiante":19021897,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":2250}
	,{"_id":675,"pnombre_estudiante":"Valentina","snombre_estudiante":"Zulema","papellido_estudiante":"Saavedra","sapellido_estudiante":"Ortiz","run_estudiante":20849440,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1200}
	,{"_id":676,"pnombre_estudiante":"Daniela","papellido_estudiante":"Peralta","sapellido_estudiante":"Arévalo","run_estudiante":21286364,"dv_estudiante":"8","año_ingreso":2024,"id_carrera":100}
	,{"_id":677,"pnombre_estudiante":"Cristian","snombre_estudiante":"José","papellido_estudiante":"Iturra","run_estudiante":18844830,"dv_estudiante":"2","año_ingreso":2023,"id_carrera":550}
	,{"_id":678,"pnombre_estudiante":"Marjorie","papellido_estudiante":"Silva","run_estudiante":28560708,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1750}
	,{"_id":679,"pnombre_estudiante":"Almendra","snombre_estudiante":"Elizabeth","papellido_estudiante":"Llanos","run_estudiante":14765838,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":1200}
	,{"_id":680,"pnombre_estudiante":"Ramón","snombre_estudiante":"Pedro","papellido_estudiante":"Martínez","run_estudiante":28696232,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":2000}
	,{"_id":681,"pnombre_estudiante":"Juana","snombre_estudiante":"Maximiliano","papellido_estudiante":"Miranda","run_estudiante":16764762,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":1800}
	,{"_id":682,"pnombre_estudiante":"Antonella","papellido_estudiante":"Riffo","sapellido_estudiante":"Mena","run_estudiante":29945018,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":2200}
	,{"_id":683,"pnombre_estudiante":"Santiago","snombre_estudiante":"Jorge","papellido_estudiante":"Oyarce","run_estudiante":19112624,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":100}
	,{"_id":684,"pnombre_estudiante":"José","papellido_estudiante":"Correa","sapellido_estudiante":"Valenzuela","run_estudiante":29695703,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":550}
	,{"_id":685,"pnombre_estudiante":"Gustavo","snombre_estudiante":"Benjamín","papellido_estudiante":"Sepúlveda","run_estudiante":19088922,"dv_estudiante":"2","año_ingreso":2023,"id_carrera":100}
	,{"_id":686,"pnombre_estudiante":"Matías","snombre_estudiante":"David","papellido_estudiante":"Castro","sapellido_estudiante":"Martínez","run_estudiante":16874565,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":2250}
	,{"_id":687,"pnombre_estudiante":"Sebastián","papellido_estudiante":"Aguilar","run_estudiante":26731957,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":1300}
	,{"_id":688,"pnombre_estudiante":"Miguel","papellido_estudiante":"Gaete","run_estudiante":15298995,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":550}
	,{"_id":689,"pnombre_estudiante":"Diego","snombre_estudiante":"Clara","papellido_estudiante":"Mora","run_estudiante":17973435,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":2000}
	,{"_id":690,"pnombre_estudiante":"Gerardo","papellido_estudiante":"González","sapellido_estudiante":"Moreno","run_estudiante":21040829,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":300}
	,{"_id":691,"pnombre_estudiante":"María","snombre_estudiante":"Pablo","papellido_estudiante":"Contreras","run_estudiante":11558585,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1800}
	,{"_id":692,"pnombre_estudiante":"Esteban","papellido_estudiante":"Soto","run_estudiante":19494946,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":700}
	,{"_id":693,"pnombre_estudiante":"Carlos","papellido_estudiante":"Díaz","run_estudiante":18798625,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":500}
	,{"_id":694,"pnombre_estudiante":"Daisy","snombre_estudiante":"Rafael","papellido_estudiante":"Reyes","run_estudiante":10817997,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":150}
	,{"_id":695,"pnombre_estudiante":"Leonel","papellido_estudiante":"Toledo","run_estudiante":21985600,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1100}
	,{"_id":696,"pnombre_estudiante":"Margarita","snombre_estudiante":"Cecilia","papellido_estudiante":"Contreras","run_estudiante":15169805,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":1250}
	,{"_id":697,"pnombre_estudiante":"Clementina","snombre_estudiante":"Víctor","papellido_estudiante":"Briones","sapellido_estudiante":"Acevedo","run_estudiante":23486332,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":400}
	,{"_id":698,"pnombre_estudiante":"José","snombre_estudiante":"Camila","papellido_estudiante":"Parada","sapellido_estudiante":"Beltrán","run_estudiante":15551712,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":2050}
	,{"_id":699,"pnombre_estudiante":"Ángel","snombre_estudiante":"María","papellido_estudiante":"Muñoz","run_estudiante":17156689,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1650}
	,{"_id":700,"pnombre_estudiante":"Carla","snombre_estudiante":"Felipe","papellido_estudiante":"Aguilera","sapellido_estudiante":"Hernández","run_estudiante":14493909,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":850}
	,{"_id":701,"pnombre_estudiante":"Scarleth","papellido_estudiante":"Jerez","sapellido_estudiante":"Orellana","run_estudiante":16909908,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1950}
	,{"_id":702,"pnombre_estudiante":"Manuel","papellido_estudiante":"Carvajal","sapellido_estudiante":"Cabezas","run_estudiante":29004224,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":900}
	,{"_id":703,"pnombre_estudiante":"Patricia","snombre_estudiante":"Paola","papellido_estudiante":"González","run_estudiante":14034562,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":700}
	,{"_id":704,"pnombre_estudiante":"Gisela","papellido_estudiante":"Acuña","sapellido_estudiante":"Concha","run_estudiante":22839938,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":1800}
	,{"_id":705,"pnombre_estudiante":"Juan","papellido_estudiante":"Barrios","sapellido_estudiante":"Pérez","run_estudiante":26580732,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":1350}
	,{"_id":706,"pnombre_estudiante":"Jorge","snombre_estudiante":"Alicia","papellido_estudiante":"Rodríguez","sapellido_estudiante":"Aguilar","run_estudiante":24087294,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":1350}
	,{"_id":707,"pnombre_estudiante":"Carmela","papellido_estudiante":"Moreno","run_estudiante":26976833,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1950}
	,{"_id":708,"pnombre_estudiante":"Patricia","papellido_estudiante":"González","sapellido_estudiante":"Vargas","run_estudiante":17933594,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":1700}
	,{"_id":709,"pnombre_estudiante":"Katherine","snombre_estudiante":"Maite","papellido_estudiante":"Mondaca","sapellido_estudiante":"Burgos","run_estudiante":10557706,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":300}
	,{"_id":710,"pnombre_estudiante":"Jacqueline","papellido_estudiante":"Lara","run_estudiante":24999391,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":1350}
	,{"_id":711,"pnombre_estudiante":"Leticia","snombre_estudiante":"Felipe","papellido_estudiante":"Astudillo","run_estudiante":29674951,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":450}
	,{"_id":712,"pnombre_estudiante":"Jorge","papellido_estudiante":"Figueroa","sapellido_estudiante":"Carmona","run_estudiante":18423444,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1950}
	,{"_id":713,"pnombre_estudiante":"Carla","papellido_estudiante":"Monsalve","sapellido_estudiante":"Carrasco","run_estudiante":11683177,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":250}
	,{"_id":714,"pnombre_estudiante":"Gladys","papellido_estudiante":"Martínez","sapellido_estudiante":"Sandoval","run_estudiante":18688551,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":2250}
	,{"_id":715,"pnombre_estudiante":"Berta","snombre_estudiante":"Magaly","papellido_estudiante":"Pérez","sapellido_estudiante":"Carrasco","run_estudiante":15779084,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":1750}
	,{"_id":716,"pnombre_estudiante":"María","snombre_estudiante":"Arturo","papellido_estudiante":"Fuentes","sapellido_estudiante":"Pérez","run_estudiante":26629543,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":50}
	,{"_id":717,"pnombre_estudiante":"Constanza","papellido_estudiante":"Pardo","run_estudiante":13381809,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":2200}
	,{"_id":718,"pnombre_estudiante":"Carlos","papellido_estudiante":"Palma","sapellido_estudiante":"Zúñiga","run_estudiante":20638136,"dv_estudiante":"4","año_ingreso":2022,"id_carrera":500}
	,{"_id":719,"pnombre_estudiante":"Fernando","snombre_estudiante":"Luis","papellido_estudiante":"Carvajal","run_estudiante":16626258,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":400}
	,{"_id":720,"pnombre_estudiante":"María","snombre_estudiante":"María","papellido_estudiante":"Domínguez","run_estudiante":20260038,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":950}
	,{"_id":721,"pnombre_estudiante":"Olga","papellido_estudiante":"Corvalán","run_estudiante":25447312,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":250}
	,{"_id":722,"pnombre_estudiante":"Eric","papellido_estudiante":"Vidal","sapellido_estudiante":"Alvarez","run_estudiante":19619457,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1800}
	,{"_id":723,"pnombre_estudiante":"Isidora","snombre_estudiante":"Bárbara","papellido_estudiante":"Flores","run_estudiante":19167827,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":1700}
	,{"_id":724,"pnombre_estudiante":"Macarena","snombre_estudiante":"Natalie","papellido_estudiante":"Ferrada","run_estudiante":16829586,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1800}
	,{"_id":725,"pnombre_estudiante":"Nadia","snombre_estudiante":"Alfredo","papellido_estudiante":"Espinoza","sapellido_estudiante":"Oyarzún","run_estudiante":20736433,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":2150}
	,{"_id":726,"pnombre_estudiante":"Johanna","snombre_estudiante":"Carlos","papellido_estudiante":"Rebolledo","sapellido_estudiante":"Flores","run_estudiante":15957733,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":1250}
	,{"_id":727,"pnombre_estudiante":"Ricardo","papellido_estudiante":"Salinas","sapellido_estudiante":"Gómez","run_estudiante":22191920,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":1200}
	,{"_id":728,"pnombre_estudiante":"Laura","papellido_estudiante":"Uribe","run_estudiante":17128527,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":1250}
	,{"_id":729,"pnombre_estudiante":"Antonio","papellido_estudiante":"Correa","sapellido_estudiante":"Albornoz","run_estudiante":14297374,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":2150}
	,{"_id":730,"pnombre_estudiante":"María","snombre_estudiante":"Ernesto","papellido_estudiante":"Díaz","sapellido_estudiante":"Rodríguez","run_estudiante":24898811,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":1000}
	,{"_id":731,"pnombre_estudiante":"Ingrid","papellido_estudiante":"González","run_estudiante":25037739,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1250}
	,{"_id":732,"pnombre_estudiante":"Carolina","snombre_estudiante":"Harold","papellido_estudiante":"Espinoza","sapellido_estudiante":"Vega","run_estudiante":25478872,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":2200}
	,{"_id":733,"pnombre_estudiante":"Erica","snombre_estudiante":"Ismael","papellido_estudiante":"Valenzuela","run_estudiante":25684874,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":2150}
	,{"_id":734,"pnombre_estudiante":"Florencia","papellido_estudiante":"Estay","run_estudiante":25690360,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1500}
	,{"_id":735,"pnombre_estudiante":"Lucía","papellido_estudiante":"Álvarez","sapellido_estudiante":"Herrera","run_estudiante":27318128,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":900}
	,{"_id":736,"pnombre_estudiante":"Camilo","papellido_estudiante":"Dinamarca","sapellido_estudiante":"Alarcón","run_estudiante":21591180,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":1300}
	,{"_id":737,"pnombre_estudiante":"María","papellido_estudiante":"Soto","run_estudiante":18741446,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":150}
	,{"_id":738,"pnombre_estudiante":"Anaís","snombre_estudiante":"Domingo","papellido_estudiante":"Medina","sapellido_estudiante":"Quijada","run_estudiante":23127953,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":2200}
	,{"_id":739,"pnombre_estudiante":"Jaime","papellido_estudiante":"Lara","sapellido_estudiante":"Huerta","run_estudiante":18661885,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":800}
	,{"_id":740,"pnombre_estudiante":"Rosa","snombre_estudiante":"Efraín","papellido_estudiante":"Tapia","run_estudiante":23744807,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":500}
	,{"_id":741,"pnombre_estudiante":"Constanza","papellido_estudiante":"Gutiérrez","run_estudiante":20623284,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1750}
	,{"_id":742,"pnombre_estudiante":"Luis","papellido_estudiante":"Gamboa","run_estudiante":14159253,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":1700}
	,{"_id":743,"pnombre_estudiante":"Sandra","papellido_estudiante":"Moya","run_estudiante":21115198,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":1850}
	,{"_id":744,"pnombre_estudiante":"Violeta","papellido_estudiante":"Urra","run_estudiante":10015363,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":250}
	,{"_id":745,"pnombre_estudiante":"Estrella","papellido_estudiante":"Vega","run_estudiante":20194939,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":200}
	,{"_id":746,"pnombre_estudiante":"Germán","papellido_estudiante":"Ruiz","sapellido_estudiante":"Muñoz","run_estudiante":11673518,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":100}
	,{"_id":747,"pnombre_estudiante":"Emanuel","papellido_estudiante":"Lucero","sapellido_estudiante":"Oyarzún","run_estudiante":13507845,"dv_estudiante":"2","año_ingreso":2023,"id_carrera":2200}
	,{"_id":748,"pnombre_estudiante":"Giovanna","snombre_estudiante":"Felipe","papellido_estudiante":"Fuentes","run_estudiante":16707807,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":1100}
	,{"_id":749,"pnombre_estudiante":"Beatriz","snombre_estudiante":"Carmen","papellido_estudiante":"Reyes","sapellido_estudiante":"Valdebenito","run_estudiante":25715650,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":200}
	,{"_id":750,"pnombre_estudiante":"María","snombre_estudiante":"Camila","papellido_estudiante":"Torres","sapellido_estudiante":"Sepúlveda","run_estudiante":25211962,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":700}
	,{"_id":751,"pnombre_estudiante":"Petronila","snombre_estudiante":"José","papellido_estudiante":"Lagos","sapellido_estudiante":"Cisternas","run_estudiante":24781807,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1250}
	,{"_id":752,"pnombre_estudiante":"Pedro","papellido_estudiante":"Vilches","run_estudiante":29046624,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1550}
	,{"_id":753,"pnombre_estudiante":"Josefina","snombre_estudiante":"Myriam","papellido_estudiante":"Godoy","sapellido_estudiante":"Arenas","run_estudiante":10548062,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":600}
	,{"_id":754,"pnombre_estudiante":"Camila","snombre_estudiante":"Alexis","papellido_estudiante":"Cancino","sapellido_estudiante":"González","run_estudiante":17530665,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":1450}
	,{"_id":755,"pnombre_estudiante":"Marcela","papellido_estudiante":"Vilches","run_estudiante":10787853,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":1750}
	,{"_id":756,"pnombre_estudiante":"Jorge","snombre_estudiante":"Mario","papellido_estudiante":"Rodríguez","run_estudiante":13545302,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":50}
	,{"_id":757,"pnombre_estudiante":"Francisco","papellido_estudiante":"Cartes","sapellido_estudiante":"Hernández","run_estudiante":23557762,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":650}
	,{"_id":758,"pnombre_estudiante":"Mónica","snombre_estudiante":"Luis","papellido_estudiante":"Albornoz","run_estudiante":23719190,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":350}
	,{"_id":759,"pnombre_estudiante":"Danilo","snombre_estudiante":"Mariela","papellido_estudiante":"Muñoz","run_estudiante":21880991,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":1300}
	,{"_id":760,"pnombre_estudiante":"Claudia","papellido_estudiante":"Moya","run_estudiante":21616712,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1750}
	,{"_id":761,"pnombre_estudiante":"Álvaro","papellido_estudiante":"Urra","sapellido_estudiante":"Astorga","run_estudiante":12310601,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":900}
	,{"_id":762,"pnombre_estudiante":"Carlos","papellido_estudiante":"Díaz","sapellido_estudiante":"Alarcón","run_estudiante":13370625,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":100}
	,{"_id":763,"pnombre_estudiante":"Claudio","snombre_estudiante":"Edgardo","papellido_estudiante":"Pacheco","sapellido_estudiante":"Olguín","run_estudiante":21844629,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":750}
	,{"_id":764,"pnombre_estudiante":"Filomena","papellido_estudiante":"Morales","sapellido_estudiante":"Riquelme","run_estudiante":18249134,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1600}
	,{"_id":765,"pnombre_estudiante":"Leonel","snombre_estudiante":"Juan","papellido_estudiante":"Inzunza","run_estudiante":28517863,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":450}
	,{"_id":766,"pnombre_estudiante":"Fabiana","snombre_estudiante":"María","papellido_estudiante":"Huerta","run_estudiante":22280665,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":2050}
	,{"_id":767,"pnombre_estudiante":"Felipe","papellido_estudiante":"Paredes","run_estudiante":15549779,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":1950}
	,{"_id":768,"pnombre_estudiante":"Benjamín","papellido_estudiante":"Pérez","run_estudiante":16125436,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":1150}
	,{"_id":769,"pnombre_estudiante":"Félix","snombre_estudiante":"Francesca","papellido_estudiante":"Neira","sapellido_estudiante":"Martínez","run_estudiante":22267735,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":50}
	,{"_id":770,"pnombre_estudiante":"Ema","snombre_estudiante":"Sofía","papellido_estudiante":"Godoy","run_estudiante":13974172,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":650}
	,{"_id":771,"pnombre_estudiante":"Carolina","papellido_estudiante":"Inostroza","sapellido_estudiante":"Sepúlveda","run_estudiante":13322262,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":350}
	,{"_id":772,"pnombre_estudiante":"Rebeca","snombre_estudiante":"Diego","papellido_estudiante":"Cortés","sapellido_estudiante":"Pino","run_estudiante":12606937,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":500}
	,{"_id":773,"pnombre_estudiante":"Víctor","snombre_estudiante":"Víctor","papellido_estudiante":"Martínez","sapellido_estudiante":"Jaramillo","run_estudiante":20875631,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":2050}
	,{"_id":774,"pnombre_estudiante":"Pía","snombre_estudiante":"Marco","papellido_estudiante":"Garay","sapellido_estudiante":"Muñoz","run_estudiante":21996847,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1500}
	,{"_id":775,"pnombre_estudiante":"María","papellido_estudiante":"Orellana","sapellido_estudiante":"Villegas","run_estudiante":16547718,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":1800}
	,{"_id":776,"pnombre_estudiante":"Julio","papellido_estudiante":"Molina","run_estudiante":24593946,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1300}
	,{"_id":777,"pnombre_estudiante":"Ronny","snombre_estudiante":"Samuel","papellido_estudiante":"Mora","sapellido_estudiante":"Pereira","run_estudiante":14216604,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":1550}
	,{"_id":778,"pnombre_estudiante":"Myriam","papellido_estudiante":"Reyes","sapellido_estudiante":"Ramírez","run_estudiante":12975558,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":1350}
	,{"_id":779,"pnombre_estudiante":"Daniela","snombre_estudiante":"María","papellido_estudiante":"Berríos","run_estudiante":11373842,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":450}
	,{"_id":780,"pnombre_estudiante":"Felipe","papellido_estudiante":"Ossandón","sapellido_estudiante":"Rivera","run_estudiante":29268874,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":950}
	,{"_id":781,"pnombre_estudiante":"Millaray","papellido_estudiante":"Rojas","run_estudiante":28864624,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1050}
	,{"_id":782,"pnombre_estudiante":"Gabriela","papellido_estudiante":"González","run_estudiante":15754553,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":50}
	,{"_id":783,"pnombre_estudiante":"Patricia","papellido_estudiante":"Guzmán","sapellido_estudiante":"Pérez","run_estudiante":29003457,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":500}
	,{"_id":784,"pnombre_estudiante":"Raúl","papellido_estudiante":"Morales","run_estudiante":20974264,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1150}
	,{"_id":785,"pnombre_estudiante":"Fernando","snombre_estudiante":"Carla","papellido_estudiante":"Barrientos","run_estudiante":13150493,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":900}
	,{"_id":786,"pnombre_estudiante":"Ángela","papellido_estudiante":"Rivera","run_estudiante":28094150,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":2050}
	,{"_id":787,"pnombre_estudiante":"Nicole","snombre_estudiante":"Carlos","papellido_estudiante":"Álvarez","sapellido_estudiante":"Araya","run_estudiante":18356907,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":2200}
	,{"_id":788,"pnombre_estudiante":"Millaray","papellido_estudiante":"Rosales","run_estudiante":22532472,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":1450}
	,{"_id":789,"pnombre_estudiante":"Benito","papellido_estudiante":"Suárez","sapellido_estudiante":"Castro","run_estudiante":16096545,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":1850}
	,{"_id":790,"pnombre_estudiante":"Génesis","snombre_estudiante":"Mónica","papellido_estudiante":"Luengo","run_estudiante":27988556,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":2250}
	,{"_id":791,"pnombre_estudiante":"José","papellido_estudiante":"Soto","sapellido_estudiante":"Mejías","run_estudiante":29351361,"dv_estudiante":"4","año_ingreso":2022,"id_carrera":900}
	,{"_id":792,"pnombre_estudiante":"Julieta","snombre_estudiante":"Patricio","papellido_estudiante":"Herrera","sapellido_estudiante":"Rojas","run_estudiante":11165637,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":650}
	,{"_id":793,"pnombre_estudiante":"Danae","snombre_estudiante":"Matías","papellido_estudiante":"Leiva","sapellido_estudiante":"Calderón","run_estudiante":11091055,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":150}
	,{"_id":794,"pnombre_estudiante":"Paola","papellido_estudiante":"Marambio","run_estudiante":20137475,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":950}
	,{"_id":795,"pnombre_estudiante":"Diego","papellido_estudiante":"Gálvez","sapellido_estudiante":"Alfaro","run_estudiante":16607627,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":600}
	,{"_id":796,"pnombre_estudiante":"Cesar","snombre_estudiante":"Cristofer","papellido_estudiante":"González","sapellido_estudiante":"Gutiérrez","run_estudiante":12611223,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":1750}
	,{"_id":797,"pnombre_estudiante":"Gricelda","snombre_estudiante":"Bastián","papellido_estudiante":"Salinas","sapellido_estudiante":"Barrientos","run_estudiante":22768636,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":550}
	,{"_id":798,"pnombre_estudiante":"Sophia","papellido_estudiante":"Allendes","run_estudiante":20555593,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":1450}
	,{"_id":799,"pnombre_estudiante":"César","snombre_estudiante":"Eliana","papellido_estudiante":"León","run_estudiante":22265621,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":250}
	,{"_id":800,"pnombre_estudiante":"Carlos","papellido_estudiante":"Osorio","run_estudiante":19081595,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":2000}
	,{"_id":801,"pnombre_estudiante":"Eliana","papellido_estudiante":"Durán","sapellido_estudiante":"Maturana","run_estudiante":24466307,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":1800}
	,{"_id":802,"pnombre_estudiante":"Luis","papellido_estudiante":"García","sapellido_estudiante":"Velásquez","run_estudiante":24705550,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":2150}
	,{"_id":803,"pnombre_estudiante":"Javiera","papellido_estudiante":"Hermosilla","sapellido_estudiante":"Araya","run_estudiante":23584412,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":2150}
	,{"_id":804,"pnombre_estudiante":"René","snombre_estudiante":"María","papellido_estudiante":"Meza","sapellido_estudiante":"Flores","run_estudiante":24154898,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":250}
	,{"_id":805,"pnombre_estudiante":"Jenny","snombre_estudiante":"Carlo","papellido_estudiante":"Cornejo","sapellido_estudiante":"Muñoz","run_estudiante":12192068,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":300}
	,{"_id":806,"pnombre_estudiante":"Marcela","snombre_estudiante":"Martín","papellido_estudiante":"Contreras","run_estudiante":15947923,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":450}
	,{"_id":807,"pnombre_estudiante":"José","snombre_estudiante":"Emilia","papellido_estudiante":"Lorca","run_estudiante":17387157,"dv_estudiante":"8","año_ingreso":2024,"id_carrera":2200}
	,{"_id":808,"pnombre_estudiante":"Ximena","papellido_estudiante":"Guerrero","sapellido_estudiante":"Salazar","run_estudiante":10128191,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":2000}
	,{"_id":809,"pnombre_estudiante":"Jesus","papellido_estudiante":"Ferreira","sapellido_estudiante":"Jiménez","run_estudiante":13083192,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":550}
	,{"_id":810,"pnombre_estudiante":"Esteban","papellido_estudiante":"Morales","run_estudiante":28852857,"dv_estudiante":"3","año_ingreso":2020,"id_carrera":350}
	,{"_id":811,"pnombre_estudiante":"Marcela","snombre_estudiante":"Jhonny","papellido_estudiante":"Madrid","run_estudiante":27971451,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":1350}
	,{"_id":812,"pnombre_estudiante":"Ana","snombre_estudiante":"Rolando","papellido_estudiante":"González","sapellido_estudiante":"Troncoso","run_estudiante":28235986,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":1950}
	,{"_id":813,"pnombre_estudiante":"Ignacio","papellido_estudiante":"Lobos","sapellido_estudiante":"Contreras","run_estudiante":16921728,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":1100}
	,{"_id":814,"pnombre_estudiante":"Karina","snombre_estudiante":"Blanca","papellido_estudiante":"Ríos","sapellido_estudiante":"Cuevas","run_estudiante":23953892,"dv_estudiante":"8","año_ingreso":2024,"id_carrera":2050}
	,{"_id":815,"pnombre_estudiante":"María","papellido_estudiante":"Cerda","run_estudiante":25541594,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":1200}
	,{"_id":816,"pnombre_estudiante":"Matías","papellido_estudiante":"Lira","run_estudiante":16600091,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1950}
	,{"_id":817,"pnombre_estudiante":"Federico","papellido_estudiante":"Montenegro","run_estudiante":25600595,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":600}
	,{"_id":818,"pnombre_estudiante":"Augusto","snombre_estudiante":"Néstor","papellido_estudiante":"Barra","run_estudiante":10140858,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":300}
	,{"_id":819,"pnombre_estudiante":"Luz","snombre_estudiante":"Sergio","papellido_estudiante":"González","sapellido_estudiante":"Araya","run_estudiante":17850273,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":1000}
	,{"_id":820,"pnombre_estudiante":"María","papellido_estudiante":"Herrera","run_estudiante":27309778,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":1400}
	,{"_id":821,"pnombre_estudiante":"Lourdes","papellido_estudiante":"Parraguez","run_estudiante":28793524,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":1150}
	,{"_id":822,"pnombre_estudiante":"René","snombre_estudiante":"Víctor","papellido_estudiante":"Moya","sapellido_estudiante":"Vásquez","run_estudiante":29446433,"dv_estudiante":"2","año_ingreso":2021,"id_carrera":800}
	,{"_id":823,"pnombre_estudiante":"Angélica","papellido_estudiante":"Díaz","sapellido_estudiante":"Pino","run_estudiante":28726978,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":1950}
	,{"_id":824,"pnombre_estudiante":"Agustina","papellido_estudiante":"Catalán","sapellido_estudiante":"Jiménez","run_estudiante":12720767,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":550}
	,{"_id":825,"pnombre_estudiante":"María","papellido_estudiante":"Rosas","sapellido_estudiante":"Rojas","run_estudiante":20015019,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":1300}
	,{"_id":826,"pnombre_estudiante":"Cecilia","snombre_estudiante":"Joseph","papellido_estudiante":"Villanueva","sapellido_estudiante":"Rivera","run_estudiante":19078603,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":2250}
	,{"_id":827,"pnombre_estudiante":"María","papellido_estudiante":"Soto","sapellido_estudiante":"Villalobos","run_estudiante":17061163,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":1550}
	,{"_id":828,"pnombre_estudiante":"Alejandra","snombre_estudiante":"Rodrigo","papellido_estudiante":"Cartes","sapellido_estudiante":"Contreras","run_estudiante":21169286,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1950}
	,{"_id":829,"pnombre_estudiante":"Ramón","snombre_estudiante":"Florencia","papellido_estudiante":"Miranda","sapellido_estudiante":"Rivera","run_estudiante":16065001,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":200}
	,{"_id":830,"pnombre_estudiante":"Graciela","papellido_estudiante":"Barraza","sapellido_estudiante":"Pérez","run_estudiante":13309023,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":250}
	,{"_id":831,"pnombre_estudiante":"Cristian","snombre_estudiante":"Solange","papellido_estudiante":"Rodríguez","run_estudiante":16899903,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":100}
	,{"_id":832,"pnombre_estudiante":"Ana","papellido_estudiante":"Carrasco","run_estudiante":18203533,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":550}
	,{"_id":833,"pnombre_estudiante":"María","snombre_estudiante":"Jeanette","papellido_estudiante":"Bustos","sapellido_estudiante":"Morales","run_estudiante":26800204,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":2150}
	,{"_id":834,"pnombre_estudiante":"Rosa","papellido_estudiante":"Medel","sapellido_estudiante":"Cisternas","run_estudiante":27856962,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":900}
	,{"_id":835,"pnombre_estudiante":"Digna","papellido_estudiante":"Villagrán","sapellido_estudiante":"Aravena","run_estudiante":29006306,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":2050}
	,{"_id":836,"pnombre_estudiante":"Jennifer","snombre_estudiante":"Gloria","papellido_estudiante":"Bustos","sapellido_estudiante":"Agurto","run_estudiante":23034439,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":550}
	,{"_id":837,"pnombre_estudiante":"Andrea","snombre_estudiante":"Verónica","papellido_estudiante":"Arancibia","run_estudiante":10503377,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":450}
	,{"_id":838,"pnombre_estudiante":"Joaquín","papellido_estudiante":"Hernández","sapellido_estudiante":"Díaz","run_estudiante":10482088,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1550}
	,{"_id":839,"pnombre_estudiante":"Alejandra","papellido_estudiante":"Ávila","run_estudiante":11582167,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":300}
	,{"_id":840,"pnombre_estudiante":"Maritza","papellido_estudiante":"Oyarce","sapellido_estudiante":"Rojas","run_estudiante":10626578,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":200}
	,{"_id":841,"pnombre_estudiante":"Eleodoro","papellido_estudiante":"Galleguillos","sapellido_estudiante":"Villalobos","run_estudiante":11761476,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":2050}
	,{"_id":842,"pnombre_estudiante":"Iván","papellido_estudiante":"Zúñiga","sapellido_estudiante":"Orellana","run_estudiante":26847533,"dv_estudiante":"K","año_ingreso":2023,"id_carrera":1500}
	,{"_id":843,"pnombre_estudiante":"José","snombre_estudiante":"Felipe","papellido_estudiante":"Alarcón","sapellido_estudiante":"Lobos","run_estudiante":27573145,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":950}
	,{"_id":844,"pnombre_estudiante":"Juan","papellido_estudiante":"Santana","sapellido_estudiante":"Espinoza","run_estudiante":21888172,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":400}
	,{"_id":845,"pnombre_estudiante":"Wilson","papellido_estudiante":"Vergara","run_estudiante":14914785,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":750}
	,{"_id":846,"pnombre_estudiante":"Cristian","snombre_estudiante":"Hortensia","papellido_estudiante":"Espinoza","run_estudiante":13982232,"dv_estudiante":"K","año_ingreso":2021,"id_carrera":550}
	,{"_id":847,"pnombre_estudiante":"Marco","snombre_estudiante":"René","papellido_estudiante":"Vargas","sapellido_estudiante":"Campos","run_estudiante":20474125,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1800}
	,{"_id":848,"pnombre_estudiante":"Jaime","papellido_estudiante":"Peña","sapellido_estudiante":"Vásquez","run_estudiante":12289297,"dv_estudiante":"1","año_ingreso":2024,"id_carrera":600}
	,{"_id":849,"pnombre_estudiante":"Marie","snombre_estudiante":"Gabriela","papellido_estudiante":"Contreras","sapellido_estudiante":"Rodríguez","run_estudiante":28141211,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":1800}
	,{"_id":850,"pnombre_estudiante":"Margarita","snombre_estudiante":"Ariel","papellido_estudiante":"Zamorano","run_estudiante":16687218,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":1300}
	,{"_id":851,"pnombre_estudiante":"Rose","papellido_estudiante":"Andrade","run_estudiante":21403523,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":2050}
	,{"_id":852,"pnombre_estudiante":"Sofía","papellido_estudiante":"Vera","sapellido_estudiante":"Briones","run_estudiante":26071848,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":650}
	,{"_id":853,"pnombre_estudiante":"Mónica","snombre_estudiante":"Elizabeth","papellido_estudiante":"Ramírez","sapellido_estudiante":"Castillo","run_estudiante":13606842,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":1050}
	,{"_id":854,"pnombre_estudiante":"María","snombre_estudiante":"Fernando","papellido_estudiante":"Araya","run_estudiante":29004426,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":50}
	,{"_id":855,"pnombre_estudiante":"Fresia","papellido_estudiante":"Retamales","run_estudiante":11710399,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":600}
	,{"_id":856,"pnombre_estudiante":"Manuel","snombre_estudiante":"Juana","papellido_estudiante":"Rodríguez","run_estudiante":20731362,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":1350}
	,{"_id":857,"pnombre_estudiante":"Mirta","papellido_estudiante":"Rodríguez","sapellido_estudiante":"Bustamante","run_estudiante":22261782,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":1050}
	,{"_id":858,"pnombre_estudiante":"Leonardo","snombre_estudiante":"Loreto","papellido_estudiante":"Miranda","run_estudiante":19552293,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":1300}
	,{"_id":859,"pnombre_estudiante":"Alejandro","papellido_estudiante":"Barría","sapellido_estudiante":"Altamirano","run_estudiante":28934194,"dv_estudiante":"5","año_ingreso":2021,"id_carrera":800}
	,{"_id":860,"pnombre_estudiante":"Michelle","papellido_estudiante":"Martinez","run_estudiante":23402601,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":1550}
	,{"_id":861,"pnombre_estudiante":"Sofía","papellido_estudiante":"Henríquez","sapellido_estudiante":"Leiva","run_estudiante":16290838,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":150}
	,{"_id":862,"pnombre_estudiante":"Priscila","papellido_estudiante":"Mora","sapellido_estudiante":"Cáceres","run_estudiante":25201865,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1150}
	,{"_id":863,"pnombre_estudiante":"Emanuel","snombre_estudiante":"Franco","papellido_estudiante":"Quispe","run_estudiante":22070505,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":200}
	,{"_id":864,"pnombre_estudiante":"Martín","snombre_estudiante":"Jonatan","papellido_estudiante":"Barahona","run_estudiante":27254113,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":2050}
	,{"_id":865,"pnombre_estudiante":"Víctor","snombre_estudiante":"Miguel","papellido_estudiante":"Hidalgo","sapellido_estudiante":"Tapia","run_estudiante":28452761,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":2200}
	,{"_id":866,"pnombre_estudiante":"Laura","snombre_estudiante":"Paloma","papellido_estudiante":"Henríquez","run_estudiante":25219994,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":1850}
	,{"_id":867,"pnombre_estudiante":"Elvis","snombre_estudiante":"Karen","papellido_estudiante":"Moreno","run_estudiante":14842158,"dv_estudiante":"6","año_ingreso":2021,"id_carrera":650}
	,{"_id":868,"pnombre_estudiante":"Enrique","papellido_estudiante":"Seguel","sapellido_estudiante":"Torres","run_estudiante":16387488,"dv_estudiante":"0","año_ingreso":2025,"id_carrera":50}
	,{"_id":869,"pnombre_estudiante":"León","papellido_estudiante":"Delgado","sapellido_estudiante":"Rodríguez","run_estudiante":29904354,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":2100}
	,{"_id":870,"pnombre_estudiante":"Ignacio","papellido_estudiante":"Carreño","sapellido_estudiante":"Becerra","run_estudiante":12543724,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":1250}
	,{"_id":871,"pnombre_estudiante":"Ayelén","snombre_estudiante":"Constanza","papellido_estudiante":"Aracena","sapellido_estudiante":"Valenzuela","run_estudiante":29558469,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":2250}
	,{"_id":872,"pnombre_estudiante":"José","snombre_estudiante":"Máximo","papellido_estudiante":"Pacheco","run_estudiante":13235742,"dv_estudiante":"0","año_ingreso":2021,"id_carrera":1850}
	,{"_id":873,"pnombre_estudiante":"Francisco","snombre_estudiante":"Mónica","papellido_estudiante":"Pozo","sapellido_estudiante":"Baeza","run_estudiante":27802070,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":2200}
	,{"_id":874,"pnombre_estudiante":"José","papellido_estudiante":"Ayala","run_estudiante":11351995,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":1400}
	,{"_id":875,"pnombre_estudiante":"Francisco","papellido_estudiante":"Mansilla","run_estudiante":12452685,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":1950}
	,{"_id":876,"pnombre_estudiante":"Javiera","papellido_estudiante":"Rojas","run_estudiante":17672286,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":150}
	,{"_id":877,"pnombre_estudiante":"Cristian","snombre_estudiante":"Pedro","papellido_estudiante":"Faúndez","sapellido_estudiante":"Ramírez","run_estudiante":20082052,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1000}
	,{"_id":878,"pnombre_estudiante":"Benjamín","snombre_estudiante":"Tamara","papellido_estudiante":"González","sapellido_estudiante":"Choque","run_estudiante":11703938,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":1550}
	,{"_id":879,"pnombre_estudiante":"Álvaro","papellido_estudiante":"Ortega","run_estudiante":18058521,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":50}
	,{"_id":880,"pnombre_estudiante":"Eliana","papellido_estudiante":"Zambrano","sapellido_estudiante":"Figueroa","run_estudiante":14248269,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":1050}
	,{"_id":881,"pnombre_estudiante":"Gladys","snombre_estudiante":"Gabriel","papellido_estudiante":"Cifuentes","sapellido_estudiante":"Rodríguez","run_estudiante":20388471,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":1950}
	,{"_id":882,"pnombre_estudiante":"Patricia","snombre_estudiante":"Anderson","papellido_estudiante":"González","sapellido_estudiante":"Pérez","run_estudiante":16135655,"dv_estudiante":"K","año_ingreso":2025,"id_carrera":900}
	,{"_id":883,"pnombre_estudiante":"Benjamín","snombre_estudiante":"Orlando","papellido_estudiante":"Contreras","sapellido_estudiante":"Valdés","run_estudiante":29273215,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":1150}
	,{"_id":884,"pnombre_estudiante":"Mateo","snombre_estudiante":"Juan","papellido_estudiante":"Soto","sapellido_estudiante":"González","run_estudiante":25686328,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":1350}
	,{"_id":885,"pnombre_estudiante":"Fernando","papellido_estudiante":"Acevedo","run_estudiante":26424147,"dv_estudiante":"5","año_ingreso":2022,"id_carrera":1000}
	,{"_id":886,"pnombre_estudiante":"Mirko","snombre_estudiante":"Bárbara","papellido_estudiante":"Toro","run_estudiante":19980195,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":550}
	,{"_id":887,"pnombre_estudiante":"Berta","papellido_estudiante":"Tapia","run_estudiante":15301547,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":900}
	,{"_id":888,"pnombre_estudiante":"Nicol","papellido_estudiante":"Ulloa","run_estudiante":10939366,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":1450}
	,{"_id":889,"pnombre_estudiante":"Camila","snombre_estudiante":"María","papellido_estudiante":"Morales","run_estudiante":12276365,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":800}
	,{"_id":890,"pnombre_estudiante":"Patricia","snombre_estudiante":"Francisca","papellido_estudiante":"González","sapellido_estudiante":"Bustos","run_estudiante":18157577,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":1100}
	,{"_id":891,"pnombre_estudiante":"Javier","snombre_estudiante":"Susana","papellido_estudiante":"Ruiz","sapellido_estudiante":"Soto","run_estudiante":15058754,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":150}
	,{"_id":892,"pnombre_estudiante":"Mayte","papellido_estudiante":"Aguilera","sapellido_estudiante":"Jorquera","run_estudiante":18960402,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":1700}
	,{"_id":893,"pnombre_estudiante":"Mirna","papellido_estudiante":"Salas","run_estudiante":23699453,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":100}
	,{"_id":894,"pnombre_estudiante":"Luciano","snombre_estudiante":"Emilia","papellido_estudiante":"Cortés","sapellido_estudiante":"Sepúlveda","run_estudiante":12919840,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":1400}
	,{"_id":895,"pnombre_estudiante":"Anahí","snombre_estudiante":"Samuel","papellido_estudiante":"Rubio","sapellido_estudiante":"Vásquez","run_estudiante":17273872,"dv_estudiante":"4","año_ingreso":2020,"id_carrera":1800}
	,{"_id":896,"pnombre_estudiante":"Luisa","snombre_estudiante":"Victoria","papellido_estudiante":"Inostroza","run_estudiante":25739008,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":2150}
	,{"_id":897,"pnombre_estudiante":"Yoselin","papellido_estudiante":"Rebolledo","run_estudiante":25227463,"dv_estudiante":"2","año_ingreso":2022,"id_carrera":1650}
	,{"_id":898,"pnombre_estudiante":"Rosa","papellido_estudiante":"Moncada","sapellido_estudiante":"Maturana","run_estudiante":14060298,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":100}
	,{"_id":899,"pnombre_estudiante":"Luciano","snombre_estudiante":"Domingo","papellido_estudiante":"Ramírez","sapellido_estudiante":"Veloso","run_estudiante":10881307,"dv_estudiante":"5","año_ingreso":2024,"id_carrera":2100}
	,{"_id":900,"pnombre_estudiante":"Marilyn","papellido_estudiante":"Romero","sapellido_estudiante":"Moreno","run_estudiante":21962179,"dv_estudiante":"6","año_ingreso":2025,"id_carrera":1400}
	,{"_id":901,"pnombre_estudiante":"David","snombre_estudiante":"Jorge","papellido_estudiante":"Donoso","sapellido_estudiante":"Becerra","run_estudiante":25806201,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":500}
	,{"_id":902,"pnombre_estudiante":"Matilde","snombre_estudiante":"Sebastián","papellido_estudiante":"León","run_estudiante":22092653,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":400}
	,{"_id":903,"pnombre_estudiante":"Alejandro","papellido_estudiante":"Montes","run_estudiante":29036410,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":1850}
	,{"_id":904,"pnombre_estudiante":"Martín","papellido_estudiante":"Godoy","run_estudiante":22908786,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":700}
	,{"_id":905,"pnombre_estudiante":"Genoveva","snombre_estudiante":"Yohan","papellido_estudiante":"Reyes","sapellido_estudiante":"Henríquez","run_estudiante":13473786,"dv_estudiante":"0","año_ingreso":2022,"id_carrera":250}
	,{"_id":906,"pnombre_estudiante":"Romina","snombre_estudiante":"Loreto","papellido_estudiante":"Jiménez","sapellido_estudiante":"Gaete","run_estudiante":21503053,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":1550}
	,{"_id":907,"pnombre_estudiante":"María","papellido_estudiante":"Bravo","run_estudiante":27480226,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":1050}
	,{"_id":908,"pnombre_estudiante":"Geraldine","papellido_estudiante":"Bravo","run_estudiante":26023684,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":2000}
	,{"_id":909,"pnombre_estudiante":"Virginia","papellido_estudiante":"González","sapellido_estudiante":"Sáez","run_estudiante":16081997,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":450}
	,{"_id":910,"pnombre_estudiante":"Germán","papellido_estudiante":"Mardones","run_estudiante":29591470,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1350}
	,{"_id":911,"pnombre_estudiante":"María","papellido_estudiante":"Aguayo","run_estudiante":29289379,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":450}
	,{"_id":912,"pnombre_estudiante":"Génesis","snombre_estudiante":"Valentina","papellido_estudiante":"Seguel","sapellido_estudiante":"Reyes","run_estudiante":13121253,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":1400}
	,{"_id":913,"pnombre_estudiante":"María","snombre_estudiante":"Walter","papellido_estudiante":"Bastías","sapellido_estudiante":"Cabrera","run_estudiante":18736255,"dv_estudiante":"K","año_ingreso":2020,"id_carrera":1050}
	,{"_id":914,"pnombre_estudiante":"Agustina","papellido_estudiante":"Rojas","sapellido_estudiante":"Miranda","run_estudiante":11078158,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":950}
	,{"_id":915,"pnombre_estudiante":"Karol","snombre_estudiante":"Ana","papellido_estudiante":"Andrade","sapellido_estudiante":"Álvarez","run_estudiante":18917265,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":600}
	,{"_id":916,"pnombre_estudiante":"Matías","papellido_estudiante":"Ponce","sapellido_estudiante":"Bravo","run_estudiante":11657383,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":350}
	,{"_id":917,"pnombre_estudiante":"Carolina","snombre_estudiante":"Rodrigo","papellido_estudiante":"Peña","run_estudiante":20498569,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":350}
	,{"_id":918,"pnombre_estudiante":"Norma","papellido_estudiante":"Albornoz","sapellido_estudiante":"Rebolledo","run_estudiante":11620621,"dv_estudiante":"4","año_ingreso":2024,"id_carrera":1800}
	,{"_id":919,"pnombre_estudiante":"Isabel","snombre_estudiante":"María","papellido_estudiante":"Sánchez","sapellido_estudiante":"Parada","run_estudiante":29468206,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":700}
	,{"_id":920,"pnombre_estudiante":"Eleodoro","papellido_estudiante":"Benítez","sapellido_estudiante":"Riquelme","run_estudiante":12878647,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":2050}
	,{"_id":921,"pnombre_estudiante":"Rodrigo","papellido_estudiante":"Urzúa","sapellido_estudiante":"González","run_estudiante":10259670,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":1550}
	,{"_id":922,"pnombre_estudiante":"Marion","papellido_estudiante":"Cerda","run_estudiante":29988435,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":1900}
	,{"_id":923,"pnombre_estudiante":"Pablo","snombre_estudiante":"Javier","papellido_estudiante":"García","run_estudiante":18915039,"dv_estudiante":"6","año_ingreso":2020,"id_carrera":550}
	,{"_id":924,"pnombre_estudiante":"María","papellido_estudiante":"Cid","run_estudiante":18612747,"dv_estudiante":"8","año_ingreso":2024,"id_carrera":900}
	,{"_id":925,"pnombre_estudiante":"Luis","papellido_estudiante":"Urzúa","run_estudiante":25196959,"dv_estudiante":"5","año_ingreso":2025,"id_carrera":1250}
	,{"_id":926,"pnombre_estudiante":"Claudia","snombre_estudiante":"Vilma","papellido_estudiante":"Sepúlveda","run_estudiante":13063187,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1900}
	,{"_id":927,"pnombre_estudiante":"Tomas","snombre_estudiante":"José","papellido_estudiante":"Gutiérrez","run_estudiante":19473048,"dv_estudiante":"K","año_ingreso":2024,"id_carrera":2100}
	,{"_id":928,"pnombre_estudiante":"Lorenzo","snombre_estudiante":"Gabriel","papellido_estudiante":"Rojas","sapellido_estudiante":"Gómez","run_estudiante":27311924,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1450}
	,{"_id":929,"pnombre_estudiante":"Jaime","snombre_estudiante":"Anselmo","papellido_estudiante":"Bórquez","sapellido_estudiante":"Pavez","run_estudiante":20018412,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":600}
	,{"_id":930,"pnombre_estudiante":"Pascale","papellido_estudiante":"Román","run_estudiante":17040492,"dv_estudiante":"8","año_ingreso":2025,"id_carrera":1300}
	,{"_id":931,"pnombre_estudiante":"Oriana","snombre_estudiante":"Claudio","papellido_estudiante":"Zambrano","sapellido_estudiante":"Rubio","run_estudiante":19159178,"dv_estudiante":"7","año_ingreso":2021,"id_carrera":850}
	,{"_id":932,"pnombre_estudiante":"José","papellido_estudiante":"Pereira","run_estudiante":17321625,"dv_estudiante":"7","año_ingreso":2025,"id_carrera":450}
	,{"_id":933,"pnombre_estudiante":"Erika","snombre_estudiante":"Carolina","papellido_estudiante":"Sánchez","run_estudiante":18728991,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":550}
	,{"_id":934,"pnombre_estudiante":"Salvador","snombre_estudiante":"Marta","papellido_estudiante":"Riffo","sapellido_estudiante":"Aguirre","run_estudiante":18885976,"dv_estudiante":"4","año_ingreso":2020,"id_carrera":2000}
	,{"_id":935,"pnombre_estudiante":"Gael","snombre_estudiante":"Josefa","papellido_estudiante":"Jara","run_estudiante":11805169,"dv_estudiante":"3","año_ingreso":2021,"id_carrera":900}
	,{"_id":936,"pnombre_estudiante":"Andrés","snombre_estudiante":"José","papellido_estudiante":"Sanhueza","sapellido_estudiante":"Ortiz","run_estudiante":13169471,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":1800}
	,{"_id":937,"pnombre_estudiante":"Graciela","papellido_estudiante":"Ávalos","sapellido_estudiante":"Torres","run_estudiante":20781707,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":2050}
	,{"_id":938,"pnombre_estudiante":"María","papellido_estudiante":"Poblete","sapellido_estudiante":"Vivanco","run_estudiante":15793806,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":2150}
	,{"_id":939,"pnombre_estudiante":"Yerko","papellido_estudiante":"Altamirano","sapellido_estudiante":"Villalobos","run_estudiante":23768324,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":2150}
	,{"_id":940,"pnombre_estudiante":"Marcela","snombre_estudiante":"Cristian","papellido_estudiante":"Delgado","run_estudiante":12134048,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":1000}
	,{"_id":941,"pnombre_estudiante":"Junior","snombre_estudiante":"Marcela","papellido_estudiante":"Hernández","sapellido_estudiante":"Inostroza","run_estudiante":29904904,"dv_estudiante":"8","año_ingreso":2022,"id_carrera":1050}
	,{"_id":942,"pnombre_estudiante":"Valentina","papellido_estudiante":"Lara","sapellido_estudiante":"Osorio","run_estudiante":14750922,"dv_estudiante":"9","año_ingreso":2021,"id_carrera":1200}
	,{"_id":943,"pnombre_estudiante":"Orlando","papellido_estudiante":"Castillo","run_estudiante":18085123,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":900}
	,{"_id":944,"pnombre_estudiante":"Mauricio","snombre_estudiante":"Alicia","papellido_estudiante":"Manríquez","run_estudiante":11233610,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":200}
	,{"_id":945,"pnombre_estudiante":"Luis","snombre_estudiante":"Maribel","papellido_estudiante":"Moraga","sapellido_estudiante":"González","run_estudiante":23609224,"dv_estudiante":"1","año_ingreso":2023,"id_carrera":550}
	,{"_id":946,"pnombre_estudiante":"Amanda","papellido_estudiante":"Toledo","run_estudiante":18015073,"dv_estudiante":"9","año_ingreso":2023,"id_carrera":450}
	,{"_id":947,"pnombre_estudiante":"Luis","papellido_estudiante":"Zúñiga","run_estudiante":16303440,"dv_estudiante":"2","año_ingreso":2023,"id_carrera":2000}
	,{"_id":948,"pnombre_estudiante":"Carlos","snombre_estudiante":"Matías","papellido_estudiante":"Rojas","sapellido_estudiante":"Bustos","run_estudiante":18030826,"dv_estudiante":"9","año_ingreso":2025,"id_carrera":2150}
	,{"_id":949,"pnombre_estudiante":"Emilia","papellido_estudiante":"Sánchez","sapellido_estudiante":"Zúñiga","run_estudiante":24927168,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":1650}
	,{"_id":950,"pnombre_estudiante":"Matías","snombre_estudiante":"Bernardino","papellido_estudiante":"Blanco","run_estudiante":13228733,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":900}
	,{"_id":951,"pnombre_estudiante":"Oscar","papellido_estudiante":"Quiroz","sapellido_estudiante":"Rojas","run_estudiante":12697896,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":200}
	,{"_id":952,"pnombre_estudiante":"Martina","snombre_estudiante":"Nelson","papellido_estudiante":"Hernández","sapellido_estudiante":"Ibarra","run_estudiante":21079120,"dv_estudiante":"6","año_ingreso":2023,"id_carrera":200}
	,{"_id":953,"pnombre_estudiante":"Michelle","snombre_estudiante":"Emmanuel","papellido_estudiante":"Ávila","sapellido_estudiante":"González","run_estudiante":26080392,"dv_estudiante":"3","año_ingreso":2024,"id_carrera":1450}
	,{"_id":954,"pnombre_estudiante":"Roxana","papellido_estudiante":"Guerrero","sapellido_estudiante":"Pérez","run_estudiante":29418427,"dv_estudiante":"1","año_ingreso":2022,"id_carrera":600}
	,{"_id":955,"pnombre_estudiante":"Máximo","papellido_estudiante":"Martínez","sapellido_estudiante":"Mellado","run_estudiante":23278538,"dv_estudiante":"9","año_ingreso":2024,"id_carrera":1600}
	,{"_id":956,"pnombre_estudiante":"María","snombre_estudiante":"Carlos","papellido_estudiante":"Avendaño","run_estudiante":12252144,"dv_estudiante":"7","año_ingreso":2020,"id_carrera":600}
	,{"_id":957,"pnombre_estudiante":"Benjamín","snombre_estudiante":"Martha","papellido_estudiante":"Cofré","sapellido_estudiante":"Gómez","run_estudiante":14192173,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":2000}
	,{"_id":958,"pnombre_estudiante":"Cecilia","papellido_estudiante":"Castro","run_estudiante":11435781,"dv_estudiante":"4","año_ingreso":2023,"id_carrera":700}
	,{"_id":959,"pnombre_estudiante":"Luis","papellido_estudiante":"Varela","run_estudiante":11168591,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":100}
	,{"_id":960,"pnombre_estudiante":"José","papellido_estudiante":"Godoy","sapellido_estudiante":"Aravena","run_estudiante":10022862,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1400}
	,{"_id":961,"pnombre_estudiante":"Sergio","papellido_estudiante":"Montoya","run_estudiante":29764822,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":500}
	,{"_id":962,"pnombre_estudiante":"Leonel","snombre_estudiante":"Pamela","papellido_estudiante":"Sepúlveda","sapellido_estudiante":"Cortés","run_estudiante":20396185,"dv_estudiante":"8","año_ingreso":2023,"id_carrera":150}
	,{"_id":963,"pnombre_estudiante":"Celia","papellido_estudiante":"Saavedra","sapellido_estudiante":"Contreras","run_estudiante":15141229,"dv_estudiante":"1","año_ingreso":2021,"id_carrera":700}
	,{"_id":964,"pnombre_estudiante":"José","snombre_estudiante":"Katherine","papellido_estudiante":"Jiménez","sapellido_estudiante":"Rivera","run_estudiante":23985165,"dv_estudiante":"9","año_ingreso":2022,"id_carrera":450}
	,{"_id":965,"pnombre_estudiante":"Gael","snombre_estudiante":"Exequiel","papellido_estudiante":"González","sapellido_estudiante":"Pincheira","run_estudiante":22561931,"dv_estudiante":"5","año_ingreso":2020,"id_carrera":2150}
	,{"_id":966,"pnombre_estudiante":"Ida","papellido_estudiante":"Campos","run_estudiante":20587220,"dv_estudiante":"0","año_ingreso":2020,"id_carrera":250}
	,{"_id":967,"pnombre_estudiante":"Daniel","papellido_estudiante":"Rojas","run_estudiante":10589266,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1150}
	,{"_id":968,"pnombre_estudiante":"Hernán","snombre_estudiante":"Rebeca","papellido_estudiante":"Vera","run_estudiante":23756811,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1650}
	,{"_id":969,"pnombre_estudiante":"Mirko","papellido_estudiante":"Castro","run_estudiante":20856816,"dv_estudiante":"3","año_ingreso":2023,"id_carrera":1250}
	,{"_id":970,"pnombre_estudiante":"Violeta","snombre_estudiante":"Gaspar","papellido_estudiante":"Solís","run_estudiante":25943586,"dv_estudiante":"4","año_ingreso":2020,"id_carrera":650}
	,{"_id":971,"pnombre_estudiante":"Juan","snombre_estudiante":"Héctor","papellido_estudiante":"Medel","sapellido_estudiante":"Vicencio","run_estudiante":25283743,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":200}
	,{"_id":972,"pnombre_estudiante":"Antonella","papellido_estudiante":"Muñoz","run_estudiante":29036748,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1100}
	,{"_id":973,"pnombre_estudiante":"Sebastián","snombre_estudiante":"Miguel","papellido_estudiante":"Espinoza","sapellido_estudiante":"Osorio","run_estudiante":14281850,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":1350}
	,{"_id":974,"pnombre_estudiante":"Iván","snombre_estudiante":"Monserrat","papellido_estudiante":"Garay","run_estudiante":18347961,"dv_estudiante":"1","año_ingreso":2020,"id_carrera":200}
	,{"_id":975,"pnombre_estudiante":"Ingrid","papellido_estudiante":"González","sapellido_estudiante":"Valdebenito","run_estudiante":18739685,"dv_estudiante":"4","año_ingreso":2022,"id_carrera":400}
	,{"_id":976,"pnombre_estudiante":"Verónica","snombre_estudiante":"Manuel","papellido_estudiante":"Collao","sapellido_estudiante":"Osorio","run_estudiante":22945147,"dv_estudiante":"4","año_ingreso":2025,"id_carrera":1300}
	,{"_id":977,"pnombre_estudiante":"Gumercindo","papellido_estudiante":"Pinto","sapellido_estudiante":"Cortés","run_estudiante":20586581,"dv_estudiante":"4","año_ingreso":2021,"id_carrera":1850}
	,{"_id":978,"pnombre_estudiante":"Petronila","snombre_estudiante":"Ricardo","papellido_estudiante":"Silva","run_estudiante":23614430,"dv_estudiante":"1","año_ingreso":2025,"id_carrera":850}
	,{"_id":979,"pnombre_estudiante":"Miguel","snombre_estudiante":"Aníbal","papellido_estudiante":"Mora","sapellido_estudiante":"Hermosilla","run_estudiante":25755972,"dv_estudiante":"8","año_ingreso":2024,"id_carrera":300}
	,{"_id":980,"pnombre_estudiante":"Gabriela","papellido_estudiante":"Carrasco","sapellido_estudiante":"Bustos","run_estudiante":13101973,"dv_estudiante":"3","año_ingreso":2022,"id_carrera":1550}
	,{"_id":981,"pnombre_estudiante":"Cecilia","papellido_estudiante":"Vera","run_estudiante":10960454,"dv_estudiante":"7","año_ingreso":2022,"id_carrera":1650}
	,{"_id":982,"pnombre_estudiante":"Oscar","papellido_estudiante":"Cortez","run_estudiante":16348032,"dv_estudiante":"7","año_ingreso":2024,"id_carrera":250}
	,{"_id":983,"pnombre_estudiante":"Jorge","papellido_estudiante":"Rojas","run_estudiante":25380243,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":2000}
	,{"_id":984,"pnombre_estudiante":"Colomba","snombre_estudiante":"Lesly","papellido_estudiante":"Vergara","run_estudiante":21686402,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":1500}
	,{"_id":985,"pnombre_estudiante":"Gerardo","snombre_estudiante":"Erna","papellido_estudiante":"Jara","run_estudiante":26911332,"dv_estudiante":"7","año_ingreso":2023,"id_carrera":1250}
	,{"_id":986,"pnombre_estudiante":"Natalia","papellido_estudiante":"Cuevas","sapellido_estudiante":"Alvarado","run_estudiante":12057951,"dv_estudiante":"8","año_ingreso":2021,"id_carrera":1600}
	,{"_id":987,"pnombre_estudiante":"María","papellido_estudiante":"Urra","run_estudiante":14276453,"dv_estudiante":"3","año_ingreso":2025,"id_carrera":1100}
	,{"_id":988,"pnombre_estudiante":"Gerardo","snombre_estudiante":"Paulino","papellido_estudiante":"Vidal","run_estudiante":26222685,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":350}
	,{"_id":989,"pnombre_estudiante":"Ximena","papellido_estudiante":"Muñoz","run_estudiante":21989666,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":1150}
	,{"_id":990,"pnombre_estudiante":"Estefanía","snombre_estudiante":"Vicente","papellido_estudiante":"Fuentealba","run_estudiante":23684767,"dv_estudiante":"K","año_ingreso":2022,"id_carrera":1700}
	,{"_id":991,"pnombre_estudiante":"Luciana","snombre_estudiante":"Katherine","papellido_estudiante":"Riquelme","sapellido_estudiante":"Palma","run_estudiante":24696386,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":1950}
	,{"_id":992,"pnombre_estudiante":"Jaime","papellido_estudiante":"Valdés","sapellido_estudiante":"Zepeda","run_estudiante":20426691,"dv_estudiante":"6","año_ingreso":2022,"id_carrera":150}
	,{"_id":993,"pnombre_estudiante":"Rodrigo","snombre_estudiante":"Cristóbal","papellido_estudiante":"Padilla","run_estudiante":29601013,"dv_estudiante":"2","año_ingreso":2025,"id_carrera":800}
	,{"_id":994,"pnombre_estudiante":"Carmen","papellido_estudiante":"Aguirre","sapellido_estudiante":"Bastías","run_estudiante":25611532,"dv_estudiante":"2","año_ingreso":2020,"id_carrera":400}
	,{"_id":995,"pnombre_estudiante":"Julián","papellido_estudiante":"Donoso","run_estudiante":16360346,"dv_estudiante":"8","año_ingreso":2020,"id_carrera":1300}
	,{"_id":996,"pnombre_estudiante":"Aarón","papellido_estudiante":"León","run_estudiante":19575431,"dv_estudiante":"6","año_ingreso":2024,"id_carrera":1000}
	,{"_id":997,"pnombre_estudiante":"Emma","papellido_estudiante":"Parra","run_estudiante":25048877,"dv_estudiante":"5","año_ingreso":2023,"id_carrera":1000}
	,{"_id":998,"pnombre_estudiante":"Gladys","papellido_estudiante":"Torres","run_estudiante":19977287,"dv_estudiante":"0","año_ingreso":2023,"id_carrera":600}
	,{"_id":999,"pnombre_estudiante":"Julio","papellido_estudiante":"Gutiérrez","sapellido_estudiante":"Sánchez","run_estudiante":13285266,"dv_estudiante":"2","año_ingreso":2024,"id_carrera":750}
	,{"_id":1000,"pnombre_estudiante":"María","papellido_estudiante":"Herrera","run_estudiante":17196343,"dv_estudiante":"0","año_ingreso":2024,"id_carrera":1300}
	,{"_id":1001,"pnombre_estudiante":"FABRIZIO","snombre_estudiante":"ENRIQUE","papellido_estudiante":"BRAVO","sapellido_estudiante":"ARENAS","run_estudiante":12345678,"dv_estudiante":"9","año_ingreso":2020,"id_carrera":350}
];
// Evaluaciones
evaluaciones = [
	{"_id":300,"id_asignatura":3180,"codigo_evaluacion":"EV-001","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/06\/24","ponderacion":50}
	,{"_id":600,"id_asignatura":3480,"codigo_evaluacion":"EV-002","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"21\/08\/23","ponderacion":20}
	,{"_id":900,"id_asignatura":2250,"codigo_evaluacion":"EV-003","tipo_evaluacion":"Tarea","fecha_evaluacion":"13\/06\/24","ponderacion":20}
	,{"_id":1200,"id_asignatura":2910,"codigo_evaluacion":"EV-004","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/01\/24","ponderacion":40}
	,{"_id":1500,"id_asignatura":3780,"codigo_evaluacion":"EV-005","tipo_evaluacion":"Tarea","fecha_evaluacion":"03\/03\/23","ponderacion":50}
	,{"_id":1800,"id_asignatura":3000,"codigo_evaluacion":"EV-006","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/04\/23","ponderacion":40}
	,{"_id":2100,"id_asignatura":1440,"codigo_evaluacion":"EV-007","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"15\/07\/23","ponderacion":40}
	,{"_id":2400,"id_asignatura":3240,"codigo_evaluacion":"EV-008","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/03\/25","ponderacion":40}
	,{"_id":2700,"id_asignatura":2400,"codigo_evaluacion":"EV-009","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/01\/25","ponderacion":50}
	,{"_id":3000,"id_asignatura":3390,"codigo_evaluacion":"EV-010","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"15\/09\/24","ponderacion":50}
	,{"_id":3300,"id_asignatura":1140,"codigo_evaluacion":"EV-011","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"16\/06\/25","ponderacion":40}
	,{"_id":3600,"id_asignatura":690,"codigo_evaluacion":"EV-012","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/02\/24","ponderacion":40}
	,{"_id":3900,"id_asignatura":2430,"codigo_evaluacion":"EV-013","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/11\/24","ponderacion":40}
	,{"_id":4200,"id_asignatura":780,"codigo_evaluacion":"EV-014","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/12\/24","ponderacion":50}
	,{"_id":4500,"id_asignatura":3000,"codigo_evaluacion":"EV-015","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/09\/24","ponderacion":50}
	,{"_id":4800,"id_asignatura":1470,"codigo_evaluacion":"EV-016","tipo_evaluacion":"Tarea","fecha_evaluacion":"24\/08\/24","ponderacion":20}
	,{"_id":5100,"id_asignatura":1020,"codigo_evaluacion":"EV-017","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/04\/24","ponderacion":20}
	,{"_id":5400,"id_asignatura":1350,"codigo_evaluacion":"EV-018","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/08\/23","ponderacion":20}
	,{"_id":5700,"id_asignatura":2670,"codigo_evaluacion":"EV-019","tipo_evaluacion":"Tarea","fecha_evaluacion":"13\/04\/23","ponderacion":20}
	,{"_id":6000,"id_asignatura":2460,"codigo_evaluacion":"EV-020","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"15\/05\/23","ponderacion":40}
	,{"_id":6300,"id_asignatura":2970,"codigo_evaluacion":"EV-021","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/05\/25","ponderacion":40}
	,{"_id":6600,"id_asignatura":2850,"codigo_evaluacion":"EV-022","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/03\/24","ponderacion":40}
	,{"_id":6900,"id_asignatura":300,"codigo_evaluacion":"EV-023","tipo_evaluacion":"Tarea","fecha_evaluacion":"12\/12\/23","ponderacion":50}
	,{"_id":7200,"id_asignatura":2280,"codigo_evaluacion":"EV-024","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/07\/25","ponderacion":20}
	,{"_id":7500,"id_asignatura":2250,"codigo_evaluacion":"EV-025","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"21\/06\/24","ponderacion":20}
	,{"_id":7800,"id_asignatura":1140,"codigo_evaluacion":"EV-026","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/05\/23","ponderacion":30}
	,{"_id":8100,"id_asignatura":900,"codigo_evaluacion":"EV-027","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"16\/03\/25","ponderacion":30}
	,{"_id":8400,"id_asignatura":2400,"codigo_evaluacion":"EV-028","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"13\/08\/23","ponderacion":40}
	,{"_id":8700,"id_asignatura":3270,"codigo_evaluacion":"EV-029","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/07\/23","ponderacion":50}
	,{"_id":9000,"id_asignatura":960,"codigo_evaluacion":"EV-030","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/03\/24","ponderacion":40}
	,{"_id":9300,"id_asignatura":1620,"codigo_evaluacion":"EV-031","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/12\/22","ponderacion":30}
	,{"_id":9600,"id_asignatura":1980,"codigo_evaluacion":"EV-032","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/12\/23","ponderacion":40}
	,{"_id":9900,"id_asignatura":2070,"codigo_evaluacion":"EV-033","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"11\/08\/23","ponderacion":30}
	,{"_id":10200,"id_asignatura":810,"codigo_evaluacion":"EV-034","tipo_evaluacion":"Tarea","fecha_evaluacion":"17\/08\/25","ponderacion":30}
	,{"_id":10500,"id_asignatura":720,"codigo_evaluacion":"EV-035","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/05\/25","ponderacion":30}
	,{"_id":10800,"id_asignatura":2100,"codigo_evaluacion":"EV-036","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"13\/07\/24","ponderacion":20}
	,{"_id":11100,"id_asignatura":900,"codigo_evaluacion":"EV-037","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"01\/04\/24","ponderacion":40}
	,{"_id":11400,"id_asignatura":3720,"codigo_evaluacion":"EV-038","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/07\/25","ponderacion":50}
	,{"_id":11700,"id_asignatura":2400,"codigo_evaluacion":"EV-039","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"15\/08\/24","ponderacion":30}
	,{"_id":12000,"id_asignatura":3960,"codigo_evaluacion":"EV-040","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/09\/24","ponderacion":50}
	,{"_id":12300,"id_asignatura":2190,"codigo_evaluacion":"EV-041","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/06\/25","ponderacion":50}
	,{"_id":12600,"id_asignatura":2730,"codigo_evaluacion":"EV-042","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"15\/04\/25","ponderacion":30}
	,{"_id":12900,"id_asignatura":3540,"codigo_evaluacion":"EV-043","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/08\/24","ponderacion":40}
	,{"_id":13200,"id_asignatura":1320,"codigo_evaluacion":"EV-044","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/06\/24","ponderacion":40}
	,{"_id":13500,"id_asignatura":420,"codigo_evaluacion":"EV-045","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"28\/09\/24","ponderacion":20}
	,{"_id":13800,"id_asignatura":3750,"codigo_evaluacion":"EV-046","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/12\/23","ponderacion":30}
	,{"_id":14100,"id_asignatura":2490,"codigo_evaluacion":"EV-047","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"18\/12\/24","ponderacion":40}
	,{"_id":14400,"id_asignatura":2940,"codigo_evaluacion":"EV-048","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/05\/24","ponderacion":50}
	,{"_id":14700,"id_asignatura":2400,"codigo_evaluacion":"EV-049","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"20\/08\/25","ponderacion":50}
	,{"_id":15000,"id_asignatura":3330,"codigo_evaluacion":"EV-050","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/11\/23","ponderacion":50}
	,{"_id":15300,"id_asignatura":270,"codigo_evaluacion":"EV-051","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/01\/25","ponderacion":50}
	,{"_id":15600,"id_asignatura":480,"codigo_evaluacion":"EV-052","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/11\/24","ponderacion":50}
	,{"_id":15900,"id_asignatura":1020,"codigo_evaluacion":"EV-053","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/08\/25","ponderacion":50}
	,{"_id":16200,"id_asignatura":1200,"codigo_evaluacion":"EV-054","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/02\/25","ponderacion":40}
	,{"_id":16500,"id_asignatura":2340,"codigo_evaluacion":"EV-055","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"15\/06\/23","ponderacion":30}
	,{"_id":16800,"id_asignatura":3360,"codigo_evaluacion":"EV-056","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/11\/22","ponderacion":30}
	,{"_id":17100,"id_asignatura":1860,"codigo_evaluacion":"EV-057","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/09\/24","ponderacion":30}
	,{"_id":17400,"id_asignatura":3810,"codigo_evaluacion":"EV-058","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/12\/24","ponderacion":50}
	,{"_id":17700,"id_asignatura":3030,"codigo_evaluacion":"EV-059","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/03\/25","ponderacion":30}
	,{"_id":18000,"id_asignatura":3270,"codigo_evaluacion":"EV-060","tipo_evaluacion":"Tarea","fecha_evaluacion":"16\/09\/22","ponderacion":30}
	,{"_id":18300,"id_asignatura":3690,"codigo_evaluacion":"EV-061","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/04\/25","ponderacion":20}
	,{"_id":18600,"id_asignatura":3990,"codigo_evaluacion":"EV-062","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/07\/25","ponderacion":50}
	,{"_id":18900,"id_asignatura":630,"codigo_evaluacion":"EV-063","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"28\/06\/23","ponderacion":40}
	,{"_id":19200,"id_asignatura":2010,"codigo_evaluacion":"EV-064","tipo_evaluacion":"Tarea","fecha_evaluacion":"20\/05\/24","ponderacion":40}
	,{"_id":19500,"id_asignatura":2400,"codigo_evaluacion":"EV-065","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/03\/25","ponderacion":50}
	,{"_id":19800,"id_asignatura":1470,"codigo_evaluacion":"EV-066","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"05\/07\/24","ponderacion":30}
	,{"_id":20100,"id_asignatura":1320,"codigo_evaluacion":"EV-067","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/08\/25","ponderacion":50}
	,{"_id":20400,"id_asignatura":1590,"codigo_evaluacion":"EV-068","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/07\/25","ponderacion":30}
	,{"_id":20700,"id_asignatura":4020,"codigo_evaluacion":"EV-069","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/06\/24","ponderacion":50}
	,{"_id":21000,"id_asignatura":510,"codigo_evaluacion":"EV-070","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/05\/24","ponderacion":50}
	,{"_id":21300,"id_asignatura":1740,"codigo_evaluacion":"EV-071","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"15\/11\/24","ponderacion":50}
	,{"_id":21600,"id_asignatura":3450,"codigo_evaluacion":"EV-072","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/01\/23","ponderacion":20}
	,{"_id":21900,"id_asignatura":1590,"codigo_evaluacion":"EV-073","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"11\/02\/23","ponderacion":30}
	,{"_id":22200,"id_asignatura":1800,"codigo_evaluacion":"EV-074","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/11\/23","ponderacion":50}
	,{"_id":22500,"id_asignatura":1740,"codigo_evaluacion":"EV-075","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/09\/24","ponderacion":40}
	,{"_id":22800,"id_asignatura":1170,"codigo_evaluacion":"EV-076","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"28\/05\/25","ponderacion":30}
	,{"_id":23100,"id_asignatura":480,"codigo_evaluacion":"EV-077","tipo_evaluacion":"Tarea","fecha_evaluacion":"03\/05\/24","ponderacion":50}
	,{"_id":23400,"id_asignatura":720,"codigo_evaluacion":"EV-078","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"27\/12\/24","ponderacion":40}
	,{"_id":23700,"id_asignatura":1200,"codigo_evaluacion":"EV-079","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"29\/12\/22","ponderacion":30}
	,{"_id":24000,"id_asignatura":3480,"codigo_evaluacion":"EV-080","tipo_evaluacion":"Tarea","fecha_evaluacion":"24\/08\/25","ponderacion":40}
	,{"_id":24300,"id_asignatura":3690,"codigo_evaluacion":"EV-081","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/10\/23","ponderacion":20}
	,{"_id":24600,"id_asignatura":60,"codigo_evaluacion":"EV-082","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/09\/23","ponderacion":20}
	,{"_id":24900,"id_asignatura":2850,"codigo_evaluacion":"EV-083","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/06\/25","ponderacion":30}
	,{"_id":25200,"id_asignatura":630,"codigo_evaluacion":"EV-084","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/01\/23","ponderacion":30}
	,{"_id":25500,"id_asignatura":2250,"codigo_evaluacion":"EV-085","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/05\/24","ponderacion":40}
	,{"_id":25800,"id_asignatura":3180,"codigo_evaluacion":"EV-086","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/06\/25","ponderacion":40}
	,{"_id":26100,"id_asignatura":3870,"codigo_evaluacion":"EV-087","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/06\/24","ponderacion":30}
	,{"_id":26400,"id_asignatura":3300,"codigo_evaluacion":"EV-088","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/03\/24","ponderacion":40}
	,{"_id":26700,"id_asignatura":1320,"codigo_evaluacion":"EV-089","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/04\/25","ponderacion":20}
	,{"_id":27000,"id_asignatura":1230,"codigo_evaluacion":"EV-090","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/01\/24","ponderacion":30}
	,{"_id":27300,"id_asignatura":180,"codigo_evaluacion":"EV-091","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/12\/22","ponderacion":30}
	,{"_id":27600,"id_asignatura":3300,"codigo_evaluacion":"EV-092","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/06\/24","ponderacion":50}
	,{"_id":27900,"id_asignatura":480,"codigo_evaluacion":"EV-093","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/05\/23","ponderacion":20}
	,{"_id":28200,"id_asignatura":1320,"codigo_evaluacion":"EV-094","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/07\/24","ponderacion":50}
	,{"_id":28500,"id_asignatura":90,"codigo_evaluacion":"EV-095","tipo_evaluacion":"Tarea","fecha_evaluacion":"29\/08\/24","ponderacion":50}
	,{"_id":28800,"id_asignatura":1950,"codigo_evaluacion":"EV-096","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"25\/03\/23","ponderacion":40}
	,{"_id":29100,"id_asignatura":210,"codigo_evaluacion":"EV-097","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/08\/24","ponderacion":30}
	,{"_id":29400,"id_asignatura":3690,"codigo_evaluacion":"EV-098","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/08\/25","ponderacion":30}
	,{"_id":29700,"id_asignatura":2580,"codigo_evaluacion":"EV-099","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/01\/24","ponderacion":40}
	,{"_id":30000,"id_asignatura":1200,"codigo_evaluacion":"EV-100","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"25\/03\/23","ponderacion":40}
	,{"_id":30300,"id_asignatura":1740,"codigo_evaluacion":"EV-101","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"21\/11\/24","ponderacion":40}
	,{"_id":30600,"id_asignatura":3180,"codigo_evaluacion":"EV-102","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/09\/24","ponderacion":30}
	,{"_id":30900,"id_asignatura":810,"codigo_evaluacion":"EV-103","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/01\/23","ponderacion":40}
	,{"_id":31200,"id_asignatura":270,"codigo_evaluacion":"EV-104","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"19\/01\/23","ponderacion":30}
	,{"_id":31500,"id_asignatura":2250,"codigo_evaluacion":"EV-105","tipo_evaluacion":"Tarea","fecha_evaluacion":"27\/11\/23","ponderacion":30}
	,{"_id":31800,"id_asignatura":540,"codigo_evaluacion":"EV-106","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/02\/23","ponderacion":40}
	,{"_id":32100,"id_asignatura":1050,"codigo_evaluacion":"EV-107","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"21\/10\/23","ponderacion":30}
	,{"_id":32400,"id_asignatura":570,"codigo_evaluacion":"EV-108","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/01\/25","ponderacion":30}
	,{"_id":32700,"id_asignatura":3990,"codigo_evaluacion":"EV-109","tipo_evaluacion":"Tarea","fecha_evaluacion":"18\/07\/25","ponderacion":20}
	,{"_id":33000,"id_asignatura":240,"codigo_evaluacion":"EV-110","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"12\/09\/24","ponderacion":30}
	,{"_id":33300,"id_asignatura":660,"codigo_evaluacion":"EV-111","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"11\/10\/22","ponderacion":20}
	,{"_id":33600,"id_asignatura":870,"codigo_evaluacion":"EV-112","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/10\/22","ponderacion":40}
	,{"_id":33900,"id_asignatura":3210,"codigo_evaluacion":"EV-113","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/02\/23","ponderacion":30}
	,{"_id":34200,"id_asignatura":3000,"codigo_evaluacion":"EV-114","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/07\/23","ponderacion":50}
	,{"_id":34500,"id_asignatura":3600,"codigo_evaluacion":"EV-115","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/05\/25","ponderacion":20}
	,{"_id":34800,"id_asignatura":2700,"codigo_evaluacion":"EV-116","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"27\/02\/24","ponderacion":40}
	,{"_id":35100,"id_asignatura":420,"codigo_evaluacion":"EV-117","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/08\/23","ponderacion":20}
	,{"_id":35400,"id_asignatura":3600,"codigo_evaluacion":"EV-118","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/10\/23","ponderacion":50}
	,{"_id":35700,"id_asignatura":3300,"codigo_evaluacion":"EV-119","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/09\/23","ponderacion":30}
	,{"_id":36000,"id_asignatura":2010,"codigo_evaluacion":"EV-120","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/11\/24","ponderacion":40}
	,{"_id":36300,"id_asignatura":3690,"codigo_evaluacion":"EV-121","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/10\/24","ponderacion":40}
	,{"_id":36600,"id_asignatura":2100,"codigo_evaluacion":"EV-122","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/12\/22","ponderacion":20}
	,{"_id":36900,"id_asignatura":120,"codigo_evaluacion":"EV-123","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"05\/02\/24","ponderacion":50}
	,{"_id":37200,"id_asignatura":1560,"codigo_evaluacion":"EV-124","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/02\/24","ponderacion":40}
	,{"_id":37500,"id_asignatura":2340,"codigo_evaluacion":"EV-125","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"13\/08\/23","ponderacion":50}
	,{"_id":37800,"id_asignatura":1710,"codigo_evaluacion":"EV-126","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/09\/22","ponderacion":30}
	,{"_id":38100,"id_asignatura":510,"codigo_evaluacion":"EV-127","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/03\/24","ponderacion":40}
	,{"_id":38400,"id_asignatura":1830,"codigo_evaluacion":"EV-128","tipo_evaluacion":"Tarea","fecha_evaluacion":"05\/10\/24","ponderacion":20}
	,{"_id":38700,"id_asignatura":2400,"codigo_evaluacion":"EV-129","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"11\/02\/25","ponderacion":50}
	,{"_id":39000,"id_asignatura":1860,"codigo_evaluacion":"EV-130","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/06\/25","ponderacion":20}
	,{"_id":39300,"id_asignatura":1950,"codigo_evaluacion":"EV-131","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/10\/23","ponderacion":50}
	,{"_id":39600,"id_asignatura":690,"codigo_evaluacion":"EV-132","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/07\/25","ponderacion":50}
	,{"_id":39900,"id_asignatura":3360,"codigo_evaluacion":"EV-133","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/03\/25","ponderacion":50}
	,{"_id":40200,"id_asignatura":720,"codigo_evaluacion":"EV-134","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/07\/23","ponderacion":20}
	,{"_id":40500,"id_asignatura":120,"codigo_evaluacion":"EV-135","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/07\/24","ponderacion":40}
	,{"_id":40800,"id_asignatura":3210,"codigo_evaluacion":"EV-136","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/05\/23","ponderacion":50}
	,{"_id":41100,"id_asignatura":960,"codigo_evaluacion":"EV-137","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/09\/24","ponderacion":20}
	,{"_id":41400,"id_asignatura":1770,"codigo_evaluacion":"EV-138","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/04\/24","ponderacion":40}
	,{"_id":41700,"id_asignatura":1710,"codigo_evaluacion":"EV-139","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/07\/25","ponderacion":30}
	,{"_id":42000,"id_asignatura":3420,"codigo_evaluacion":"EV-140","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"12\/11\/22","ponderacion":50}
	,{"_id":42300,"id_asignatura":1110,"codigo_evaluacion":"EV-141","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/09\/23","ponderacion":40}
	,{"_id":42600,"id_asignatura":2850,"codigo_evaluacion":"EV-142","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/11\/23","ponderacion":20}
	,{"_id":42900,"id_asignatura":780,"codigo_evaluacion":"EV-143","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/08\/25","ponderacion":40}
	,{"_id":43200,"id_asignatura":1950,"codigo_evaluacion":"EV-144","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/10\/24","ponderacion":30}
	,{"_id":43500,"id_asignatura":3810,"codigo_evaluacion":"EV-145","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/11\/23","ponderacion":40}
	,{"_id":43800,"id_asignatura":720,"codigo_evaluacion":"EV-146","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/11\/24","ponderacion":20}
	,{"_id":44100,"id_asignatura":3870,"codigo_evaluacion":"EV-147","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"08\/01\/24","ponderacion":50}
	,{"_id":44400,"id_asignatura":1590,"codigo_evaluacion":"EV-148","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"12\/01\/23","ponderacion":50}
	,{"_id":44700,"id_asignatura":3210,"codigo_evaluacion":"EV-149","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/02\/23","ponderacion":30}
	,{"_id":45000,"id_asignatura":690,"codigo_evaluacion":"EV-150","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/04\/25","ponderacion":20}
	,{"_id":45300,"id_asignatura":1830,"codigo_evaluacion":"EV-151","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/08\/24","ponderacion":30}
	,{"_id":45600,"id_asignatura":2880,"codigo_evaluacion":"EV-152","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/02\/23","ponderacion":30}
	,{"_id":45900,"id_asignatura":1860,"codigo_evaluacion":"EV-153","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/11\/24","ponderacion":40}
	,{"_id":46200,"id_asignatura":780,"codigo_evaluacion":"EV-154","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/06\/24","ponderacion":30}
	,{"_id":46500,"id_asignatura":270,"codigo_evaluacion":"EV-155","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/12\/23","ponderacion":30}
	,{"_id":46800,"id_asignatura":3870,"codigo_evaluacion":"EV-156","tipo_evaluacion":"Tarea","fecha_evaluacion":"17\/08\/24","ponderacion":50}
	,{"_id":47100,"id_asignatura":3600,"codigo_evaluacion":"EV-157","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/03\/23","ponderacion":30}
	,{"_id":47400,"id_asignatura":1350,"codigo_evaluacion":"EV-158","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/03\/24","ponderacion":40}
	,{"_id":47700,"id_asignatura":120,"codigo_evaluacion":"EV-159","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/02\/25","ponderacion":40}
	,{"_id":48000,"id_asignatura":1050,"codigo_evaluacion":"EV-160","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/12\/22","ponderacion":50}
	,{"_id":48300,"id_asignatura":1680,"codigo_evaluacion":"EV-161","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/05\/25","ponderacion":30}
	,{"_id":48600,"id_asignatura":810,"codigo_evaluacion":"EV-162","tipo_evaluacion":"Tarea","fecha_evaluacion":"29\/10\/24","ponderacion":30}
	,{"_id":48900,"id_asignatura":2160,"codigo_evaluacion":"EV-163","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/03\/25","ponderacion":50}
	,{"_id":49200,"id_asignatura":1590,"codigo_evaluacion":"EV-164","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/09\/22","ponderacion":50}
	,{"_id":49500,"id_asignatura":1830,"codigo_evaluacion":"EV-165","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/11\/23","ponderacion":20}
	,{"_id":49800,"id_asignatura":1020,"codigo_evaluacion":"EV-166","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/12\/24","ponderacion":50}
	,{"_id":50100,"id_asignatura":1290,"codigo_evaluacion":"EV-167","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/11\/24","ponderacion":50}
	,{"_id":50400,"id_asignatura":2370,"codigo_evaluacion":"EV-168","tipo_evaluacion":"Tarea","fecha_evaluacion":"01\/01\/23","ponderacion":30}
	,{"_id":50700,"id_asignatura":120,"codigo_evaluacion":"EV-169","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"20\/06\/24","ponderacion":30}
	,{"_id":51000,"id_asignatura":4050,"codigo_evaluacion":"EV-170","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/12\/24","ponderacion":30}
	,{"_id":51300,"id_asignatura":1530,"codigo_evaluacion":"EV-171","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/05\/23","ponderacion":20}
	,{"_id":51600,"id_asignatura":3270,"codigo_evaluacion":"EV-172","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/11\/24","ponderacion":50}
	,{"_id":51900,"id_asignatura":3720,"codigo_evaluacion":"EV-173","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/10\/23","ponderacion":40}
	,{"_id":52200,"id_asignatura":2460,"codigo_evaluacion":"EV-174","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/04\/25","ponderacion":20}
	,{"_id":52500,"id_asignatura":1890,"codigo_evaluacion":"EV-175","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/06\/25","ponderacion":50}
	,{"_id":52800,"id_asignatura":900,"codigo_evaluacion":"EV-176","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/11\/23","ponderacion":40}
	,{"_id":53100,"id_asignatura":2250,"codigo_evaluacion":"EV-177","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"17\/02\/25","ponderacion":30}
	,{"_id":53400,"id_asignatura":2520,"codigo_evaluacion":"EV-178","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/09\/23","ponderacion":40}
	,{"_id":53700,"id_asignatura":2100,"codigo_evaluacion":"EV-179","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/02\/24","ponderacion":30}
	,{"_id":54000,"id_asignatura":1620,"codigo_evaluacion":"EV-180","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"21\/09\/22","ponderacion":40}
	,{"_id":54300,"id_asignatura":450,"codigo_evaluacion":"EV-181","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"15\/10\/22","ponderacion":30}
	,{"_id":54600,"id_asignatura":1530,"codigo_evaluacion":"EV-182","tipo_evaluacion":"Tarea","fecha_evaluacion":"03\/01\/25","ponderacion":40}
	,{"_id":54900,"id_asignatura":2040,"codigo_evaluacion":"EV-183","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"28\/09\/22","ponderacion":40}
	,{"_id":55200,"id_asignatura":2070,"codigo_evaluacion":"EV-184","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/10\/24","ponderacion":30}
	,{"_id":55500,"id_asignatura":1290,"codigo_evaluacion":"EV-185","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/05\/25","ponderacion":30}
	,{"_id":55800,"id_asignatura":2940,"codigo_evaluacion":"EV-186","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/11\/22","ponderacion":50}
	,{"_id":56100,"id_asignatura":1320,"codigo_evaluacion":"EV-187","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/03\/24","ponderacion":40}
	,{"_id":56400,"id_asignatura":780,"codigo_evaluacion":"EV-188","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/03\/25","ponderacion":50}
	,{"_id":56700,"id_asignatura":2040,"codigo_evaluacion":"EV-189","tipo_evaluacion":"Tarea","fecha_evaluacion":"13\/10\/22","ponderacion":20}
	,{"_id":57000,"id_asignatura":1140,"codigo_evaluacion":"EV-190","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/02\/23","ponderacion":20}
	,{"_id":57300,"id_asignatura":3720,"codigo_evaluacion":"EV-191","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/11\/22","ponderacion":20}
	,{"_id":57600,"id_asignatura":420,"codigo_evaluacion":"EV-192","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/04\/23","ponderacion":50}
	,{"_id":57900,"id_asignatura":3360,"codigo_evaluacion":"EV-193","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"15\/08\/23","ponderacion":50}
	,{"_id":58200,"id_asignatura":1290,"codigo_evaluacion":"EV-194","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"28\/09\/23","ponderacion":30}
	,{"_id":58500,"id_asignatura":1170,"codigo_evaluacion":"EV-195","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/03\/23","ponderacion":40}
	,{"_id":58800,"id_asignatura":3480,"codigo_evaluacion":"EV-196","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/04\/24","ponderacion":40}
	,{"_id":59100,"id_asignatura":3030,"codigo_evaluacion":"EV-197","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/04\/25","ponderacion":30}
	,{"_id":59400,"id_asignatura":1380,"codigo_evaluacion":"EV-198","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/10\/23","ponderacion":50}
	,{"_id":59700,"id_asignatura":2010,"codigo_evaluacion":"EV-199","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/03\/23","ponderacion":50}
	,{"_id":60000,"id_asignatura":420,"codigo_evaluacion":"EV-200","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/01\/25","ponderacion":40}
	,{"_id":60300,"id_asignatura":600,"codigo_evaluacion":"EV-201","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/08\/24","ponderacion":20}
	,{"_id":60600,"id_asignatura":1500,"codigo_evaluacion":"EV-202","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"27\/01\/24","ponderacion":50}
	,{"_id":60900,"id_asignatura":1140,"codigo_evaluacion":"EV-203","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/05\/25","ponderacion":20}
	,{"_id":61200,"id_asignatura":90,"codigo_evaluacion":"EV-204","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/10\/24","ponderacion":30}
	,{"_id":61500,"id_asignatura":2940,"codigo_evaluacion":"EV-205","tipo_evaluacion":"Tarea","fecha_evaluacion":"20\/04\/25","ponderacion":20}
	,{"_id":61800,"id_asignatura":660,"codigo_evaluacion":"EV-206","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"22\/03\/24","ponderacion":20}
	,{"_id":62100,"id_asignatura":2250,"codigo_evaluacion":"EV-207","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/01\/25","ponderacion":20}
	,{"_id":62400,"id_asignatura":2880,"codigo_evaluacion":"EV-208","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/05\/24","ponderacion":20}
	,{"_id":62700,"id_asignatura":1860,"codigo_evaluacion":"EV-209","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/02\/24","ponderacion":50}
	,{"_id":63000,"id_asignatura":1050,"codigo_evaluacion":"EV-210","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/11\/22","ponderacion":30}
	,{"_id":63300,"id_asignatura":1020,"codigo_evaluacion":"EV-211","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/09\/24","ponderacion":50}
	,{"_id":63600,"id_asignatura":240,"codigo_evaluacion":"EV-212","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"08\/10\/23","ponderacion":30}
	,{"_id":63900,"id_asignatura":480,"codigo_evaluacion":"EV-213","tipo_evaluacion":"Tarea","fecha_evaluacion":"09\/12\/23","ponderacion":40}
	,{"_id":64200,"id_asignatura":3270,"codigo_evaluacion":"EV-214","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/06\/25","ponderacion":20}
	,{"_id":64500,"id_asignatura":3510,"codigo_evaluacion":"EV-215","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"11\/04\/23","ponderacion":20}
	,{"_id":64800,"id_asignatura":1830,"codigo_evaluacion":"EV-216","tipo_evaluacion":"Tarea","fecha_evaluacion":"19\/08\/25","ponderacion":20}
	,{"_id":65100,"id_asignatura":1830,"codigo_evaluacion":"EV-217","tipo_evaluacion":"Tarea","fecha_evaluacion":"16\/02\/23","ponderacion":20}
	,{"_id":65400,"id_asignatura":330,"codigo_evaluacion":"EV-218","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/05\/24","ponderacion":30}
	,{"_id":65700,"id_asignatura":30,"codigo_evaluacion":"EV-219","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/10\/24","ponderacion":50}
	,{"_id":66000,"id_asignatura":2250,"codigo_evaluacion":"EV-220","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/04\/25","ponderacion":40}
	,{"_id":66300,"id_asignatura":2250,"codigo_evaluacion":"EV-221","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/01\/24","ponderacion":40}
	,{"_id":66600,"id_asignatura":2790,"codigo_evaluacion":"EV-222","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/05\/23","ponderacion":20}
	,{"_id":66900,"id_asignatura":690,"codigo_evaluacion":"EV-223","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/11\/24","ponderacion":50}
	,{"_id":67200,"id_asignatura":1620,"codigo_evaluacion":"EV-224","tipo_evaluacion":"Tarea","fecha_evaluacion":"24\/12\/22","ponderacion":20}
	,{"_id":67500,"id_asignatura":2070,"codigo_evaluacion":"EV-225","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/10\/24","ponderacion":50}
	,{"_id":67800,"id_asignatura":840,"codigo_evaluacion":"EV-226","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"16\/10\/24","ponderacion":40}
	,{"_id":68100,"id_asignatura":480,"codigo_evaluacion":"EV-227","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/12\/22","ponderacion":20}
	,{"_id":68400,"id_asignatura":3030,"codigo_evaluacion":"EV-228","tipo_evaluacion":"Tarea","fecha_evaluacion":"24\/12\/22","ponderacion":20}
	,{"_id":68700,"id_asignatura":1350,"codigo_evaluacion":"EV-229","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/01\/24","ponderacion":40}
	,{"_id":69000,"id_asignatura":3600,"codigo_evaluacion":"EV-230","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/09\/24","ponderacion":20}
	,{"_id":69300,"id_asignatura":3750,"codigo_evaluacion":"EV-231","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/09\/24","ponderacion":50}
	,{"_id":69600,"id_asignatura":2100,"codigo_evaluacion":"EV-232","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/12\/24","ponderacion":40}
	,{"_id":69900,"id_asignatura":210,"codigo_evaluacion":"EV-233","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/06\/23","ponderacion":40}
	,{"_id":70200,"id_asignatura":3750,"codigo_evaluacion":"EV-234","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/12\/23","ponderacion":50}
	,{"_id":70500,"id_asignatura":3210,"codigo_evaluacion":"EV-235","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/03\/25","ponderacion":20}
	,{"_id":70800,"id_asignatura":1230,"codigo_evaluacion":"EV-236","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"10\/11\/24","ponderacion":30}
	,{"_id":71100,"id_asignatura":2880,"codigo_evaluacion":"EV-237","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"28\/06\/24","ponderacion":50}
	,{"_id":71400,"id_asignatura":1140,"codigo_evaluacion":"EV-238","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/06\/24","ponderacion":20}
	,{"_id":71700,"id_asignatura":2190,"codigo_evaluacion":"EV-239","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/10\/24","ponderacion":40}
	,{"_id":72000,"id_asignatura":3330,"codigo_evaluacion":"EV-240","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/07\/24","ponderacion":30}
	,{"_id":72300,"id_asignatura":3000,"codigo_evaluacion":"EV-241","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"20\/10\/23","ponderacion":50}
	,{"_id":72600,"id_asignatura":3810,"codigo_evaluacion":"EV-242","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/10\/24","ponderacion":20}
	,{"_id":72900,"id_asignatura":3600,"codigo_evaluacion":"EV-243","tipo_evaluacion":"Tarea","fecha_evaluacion":"20\/08\/23","ponderacion":40}
	,{"_id":73200,"id_asignatura":270,"codigo_evaluacion":"EV-244","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/04\/24","ponderacion":30}
	,{"_id":73500,"id_asignatura":150,"codigo_evaluacion":"EV-245","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/01\/25","ponderacion":50}
	,{"_id":73800,"id_asignatura":1290,"codigo_evaluacion":"EV-246","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/04\/24","ponderacion":50}
	,{"_id":74100,"id_asignatura":1320,"codigo_evaluacion":"EV-247","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"17\/10\/23","ponderacion":40}
	,{"_id":74400,"id_asignatura":2730,"codigo_evaluacion":"EV-248","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"12\/10\/24","ponderacion":50}
	,{"_id":74700,"id_asignatura":780,"codigo_evaluacion":"EV-249","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"01\/07\/24","ponderacion":20}
	,{"_id":75000,"id_asignatura":2580,"codigo_evaluacion":"EV-250","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/01\/23","ponderacion":20}
	,{"_id":75300,"id_asignatura":690,"codigo_evaluacion":"EV-251","tipo_evaluacion":"Tarea","fecha_evaluacion":"31\/01\/25","ponderacion":40}
	,{"_id":75600,"id_asignatura":1140,"codigo_evaluacion":"EV-252","tipo_evaluacion":"Tarea","fecha_evaluacion":"19\/10\/23","ponderacion":30}
	,{"_id":75900,"id_asignatura":2250,"codigo_evaluacion":"EV-253","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/11\/22","ponderacion":40}
	,{"_id":76200,"id_asignatura":2850,"codigo_evaluacion":"EV-254","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/09\/23","ponderacion":30}
	,{"_id":76500,"id_asignatura":540,"codigo_evaluacion":"EV-255","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/07\/23","ponderacion":50}
	,{"_id":76800,"id_asignatura":1290,"codigo_evaluacion":"EV-256","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/09\/22","ponderacion":30}
	,{"_id":77100,"id_asignatura":210,"codigo_evaluacion":"EV-257","tipo_evaluacion":"Tarea","fecha_evaluacion":"01\/10\/24","ponderacion":20}
	,{"_id":77400,"id_asignatura":900,"codigo_evaluacion":"EV-258","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/10\/24","ponderacion":40}
	,{"_id":77700,"id_asignatura":1140,"codigo_evaluacion":"EV-259","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/12\/24","ponderacion":50}
	,{"_id":78000,"id_asignatura":300,"codigo_evaluacion":"EV-260","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/01\/25","ponderacion":20}
	,{"_id":78300,"id_asignatura":1650,"codigo_evaluacion":"EV-261","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/06\/25","ponderacion":20}
	,{"_id":78600,"id_asignatura":2370,"codigo_evaluacion":"EV-262","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/06\/23","ponderacion":40}
	,{"_id":78900,"id_asignatura":510,"codigo_evaluacion":"EV-263","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/06\/23","ponderacion":20}
	,{"_id":79200,"id_asignatura":2490,"codigo_evaluacion":"EV-264","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/02\/24","ponderacion":20}
	,{"_id":79500,"id_asignatura":930,"codigo_evaluacion":"EV-265","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/12\/24","ponderacion":40}
	,{"_id":79800,"id_asignatura":2010,"codigo_evaluacion":"EV-266","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/01\/23","ponderacion":30}
	,{"_id":80100,"id_asignatura":2460,"codigo_evaluacion":"EV-267","tipo_evaluacion":"Tarea","fecha_evaluacion":"20\/10\/22","ponderacion":30}
	,{"_id":80400,"id_asignatura":3180,"codigo_evaluacion":"EV-268","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/01\/25","ponderacion":30}
	,{"_id":80700,"id_asignatura":510,"codigo_evaluacion":"EV-269","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"26\/12\/23","ponderacion":20}
	,{"_id":81000,"id_asignatura":3240,"codigo_evaluacion":"EV-270","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/12\/24","ponderacion":20}
	,{"_id":81300,"id_asignatura":270,"codigo_evaluacion":"EV-271","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/08\/25","ponderacion":50}
	,{"_id":81600,"id_asignatura":1380,"codigo_evaluacion":"EV-272","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"28\/05\/25","ponderacion":30}
	,{"_id":81900,"id_asignatura":570,"codigo_evaluacion":"EV-273","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/07\/23","ponderacion":30}
	,{"_id":82200,"id_asignatura":1410,"codigo_evaluacion":"EV-274","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/07\/25","ponderacion":20}
	,{"_id":82500,"id_asignatura":1140,"codigo_evaluacion":"EV-275","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"16\/03\/24","ponderacion":20}
	,{"_id":82800,"id_asignatura":2070,"codigo_evaluacion":"EV-276","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/02\/24","ponderacion":50}
	,{"_id":83100,"id_asignatura":1170,"codigo_evaluacion":"EV-277","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"18\/12\/23","ponderacion":30}
	,{"_id":83400,"id_asignatura":3150,"codigo_evaluacion":"EV-278","tipo_evaluacion":"Tarea","fecha_evaluacion":"12\/06\/25","ponderacion":20}
	,{"_id":83700,"id_asignatura":2550,"codigo_evaluacion":"EV-279","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"08\/05\/25","ponderacion":40}
	,{"_id":84000,"id_asignatura":3750,"codigo_evaluacion":"EV-280","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/02\/23","ponderacion":50}
	,{"_id":84300,"id_asignatura":2340,"codigo_evaluacion":"EV-281","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"27\/04\/23","ponderacion":30}
	,{"_id":84600,"id_asignatura":2400,"codigo_evaluacion":"EV-282","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/01\/24","ponderacion":20}
	,{"_id":84900,"id_asignatura":1680,"codigo_evaluacion":"EV-283","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/06\/24","ponderacion":40}
	,{"_id":85200,"id_asignatura":540,"codigo_evaluacion":"EV-284","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"20\/09\/24","ponderacion":30}
	,{"_id":85500,"id_asignatura":1860,"codigo_evaluacion":"EV-285","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/11\/22","ponderacion":50}
	,{"_id":85800,"id_asignatura":2520,"codigo_evaluacion":"EV-286","tipo_evaluacion":"Tarea","fecha_evaluacion":"13\/10\/24","ponderacion":30}
	,{"_id":86100,"id_asignatura":1560,"codigo_evaluacion":"EV-287","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/01\/25","ponderacion":20}
	,{"_id":86400,"id_asignatura":960,"codigo_evaluacion":"EV-288","tipo_evaluacion":"Tarea","fecha_evaluacion":"14\/03\/24","ponderacion":40}
	,{"_id":86700,"id_asignatura":3870,"codigo_evaluacion":"EV-289","tipo_evaluacion":"Tarea","fecha_evaluacion":"20\/10\/24","ponderacion":40}
	,{"_id":87000,"id_asignatura":2790,"codigo_evaluacion":"EV-290","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"18\/02\/25","ponderacion":30}
	,{"_id":87300,"id_asignatura":270,"codigo_evaluacion":"EV-291","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/04\/25","ponderacion":20}
	,{"_id":87600,"id_asignatura":2880,"codigo_evaluacion":"EV-292","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/09\/24","ponderacion":30}
	,{"_id":87900,"id_asignatura":360,"codigo_evaluacion":"EV-293","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/01\/23","ponderacion":20}
	,{"_id":88200,"id_asignatura":3570,"codigo_evaluacion":"EV-294","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/03\/24","ponderacion":40}
	,{"_id":88500,"id_asignatura":2100,"codigo_evaluacion":"EV-295","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"01\/03\/25","ponderacion":30}
	,{"_id":88800,"id_asignatura":1950,"codigo_evaluacion":"EV-296","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/12\/22","ponderacion":50}
	,{"_id":89100,"id_asignatura":1200,"codigo_evaluacion":"EV-297","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"01\/10\/23","ponderacion":40}
	,{"_id":89400,"id_asignatura":3900,"codigo_evaluacion":"EV-298","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/09\/22","ponderacion":30}
	,{"_id":89700,"id_asignatura":540,"codigo_evaluacion":"EV-299","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"01\/02\/24","ponderacion":20}
	,{"_id":90000,"id_asignatura":2490,"codigo_evaluacion":"EV-300","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/03\/23","ponderacion":20}
	,{"_id":90300,"id_asignatura":3000,"codigo_evaluacion":"EV-301","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/11\/24","ponderacion":40}
	,{"_id":90600,"id_asignatura":3630,"codigo_evaluacion":"EV-302","tipo_evaluacion":"Tarea","fecha_evaluacion":"31\/01\/23","ponderacion":40}
	,{"_id":90900,"id_asignatura":2820,"codigo_evaluacion":"EV-303","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/05\/25","ponderacion":40}
	,{"_id":91200,"id_asignatura":840,"codigo_evaluacion":"EV-304","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"11\/01\/24","ponderacion":30}
	,{"_id":91500,"id_asignatura":2970,"codigo_evaluacion":"EV-305","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/06\/25","ponderacion":30}
	,{"_id":91800,"id_asignatura":1050,"codigo_evaluacion":"EV-306","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/01\/23","ponderacion":50}
	,{"_id":92100,"id_asignatura":510,"codigo_evaluacion":"EV-307","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/10\/24","ponderacion":20}
	,{"_id":92400,"id_asignatura":3180,"codigo_evaluacion":"EV-308","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/10\/24","ponderacion":40}
	,{"_id":92700,"id_asignatura":2430,"codigo_evaluacion":"EV-309","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/12\/24","ponderacion":50}
	,{"_id":93000,"id_asignatura":840,"codigo_evaluacion":"EV-310","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/07\/24","ponderacion":40}
	,{"_id":93300,"id_asignatura":1650,"codigo_evaluacion":"EV-311","tipo_evaluacion":"Tarea","fecha_evaluacion":"12\/08\/25","ponderacion":40}
	,{"_id":93600,"id_asignatura":1350,"codigo_evaluacion":"EV-312","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/05\/25","ponderacion":40}
	,{"_id":93900,"id_asignatura":510,"codigo_evaluacion":"EV-313","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"01\/06\/25","ponderacion":30}
	,{"_id":94200,"id_asignatura":480,"codigo_evaluacion":"EV-314","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/09\/22","ponderacion":50}
	,{"_id":94500,"id_asignatura":300,"codigo_evaluacion":"EV-315","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"03\/02\/24","ponderacion":30}
	,{"_id":94800,"id_asignatura":1110,"codigo_evaluacion":"EV-316","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/05\/25","ponderacion":20}
	,{"_id":95100,"id_asignatura":3750,"codigo_evaluacion":"EV-317","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/01\/24","ponderacion":50}
	,{"_id":95400,"id_asignatura":1440,"codigo_evaluacion":"EV-318","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/02\/23","ponderacion":40}
	,{"_id":95700,"id_asignatura":3090,"codigo_evaluacion":"EV-319","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"01\/04\/23","ponderacion":20}
	,{"_id":96000,"id_asignatura":3210,"codigo_evaluacion":"EV-320","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/12\/22","ponderacion":30}
	,{"_id":96300,"id_asignatura":3090,"codigo_evaluacion":"EV-321","tipo_evaluacion":"Tarea","fecha_evaluacion":"19\/06\/25","ponderacion":30}
	,{"_id":96600,"id_asignatura":3780,"codigo_evaluacion":"EV-322","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"10\/06\/23","ponderacion":40}
	,{"_id":96900,"id_asignatura":1200,"codigo_evaluacion":"EV-323","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"06\/11\/23","ponderacion":40}
	,{"_id":97200,"id_asignatura":2820,"codigo_evaluacion":"EV-324","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/02\/25","ponderacion":40}
	,{"_id":97500,"id_asignatura":180,"codigo_evaluacion":"EV-325","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/10\/22","ponderacion":50}
	,{"_id":97800,"id_asignatura":2880,"codigo_evaluacion":"EV-326","tipo_evaluacion":"Tarea","fecha_evaluacion":"03\/01\/23","ponderacion":50}
	,{"_id":98100,"id_asignatura":3990,"codigo_evaluacion":"EV-327","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"16\/11\/22","ponderacion":40}
	,{"_id":98400,"id_asignatura":3600,"codigo_evaluacion":"EV-328","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/12\/24","ponderacion":50}
	,{"_id":98700,"id_asignatura":2850,"codigo_evaluacion":"EV-329","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"12\/02\/25","ponderacion":50}
	,{"_id":99000,"id_asignatura":240,"codigo_evaluacion":"EV-330","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/11\/23","ponderacion":20}
	,{"_id":99300,"id_asignatura":2220,"codigo_evaluacion":"EV-331","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/11\/22","ponderacion":30}
	,{"_id":99600,"id_asignatura":3120,"codigo_evaluacion":"EV-332","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/10\/22","ponderacion":50}
	,{"_id":99900,"id_asignatura":1200,"codigo_evaluacion":"EV-333","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"26\/01\/25","ponderacion":50}
	,{"_id":100200,"id_asignatura":2760,"codigo_evaluacion":"EV-334","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"05\/06\/25","ponderacion":20}
	,{"_id":100500,"id_asignatura":3600,"codigo_evaluacion":"EV-335","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"15\/01\/24","ponderacion":40}
	,{"_id":100800,"id_asignatura":2190,"codigo_evaluacion":"EV-336","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/02\/25","ponderacion":20}
	,{"_id":101100,"id_asignatura":1260,"codigo_evaluacion":"EV-337","tipo_evaluacion":"Tarea","fecha_evaluacion":"12\/12\/22","ponderacion":30}
	,{"_id":101400,"id_asignatura":210,"codigo_evaluacion":"EV-338","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/09\/23","ponderacion":30}
	,{"_id":101700,"id_asignatura":4020,"codigo_evaluacion":"EV-339","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/10\/22","ponderacion":50}
	,{"_id":102000,"id_asignatura":2070,"codigo_evaluacion":"EV-340","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/09\/24","ponderacion":40}
	,{"_id":102300,"id_asignatura":1080,"codigo_evaluacion":"EV-341","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/07\/24","ponderacion":40}
	,{"_id":102600,"id_asignatura":1530,"codigo_evaluacion":"EV-342","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/10\/22","ponderacion":50}
	,{"_id":102900,"id_asignatura":3360,"codigo_evaluacion":"EV-343","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/05\/25","ponderacion":30}
	,{"_id":103200,"id_asignatura":1950,"codigo_evaluacion":"EV-344","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"17\/01\/23","ponderacion":30}
	,{"_id":103500,"id_asignatura":1620,"codigo_evaluacion":"EV-345","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/05\/24","ponderacion":20}
	,{"_id":103800,"id_asignatura":3780,"codigo_evaluacion":"EV-346","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/02\/23","ponderacion":40}
	,{"_id":104100,"id_asignatura":1470,"codigo_evaluacion":"EV-347","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"11\/10\/23","ponderacion":20}
	,{"_id":104400,"id_asignatura":3720,"codigo_evaluacion":"EV-348","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"21\/11\/23","ponderacion":40}
	,{"_id":104700,"id_asignatura":930,"codigo_evaluacion":"EV-349","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/10\/23","ponderacion":50}
	,{"_id":105000,"id_asignatura":990,"codigo_evaluacion":"EV-350","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/04\/25","ponderacion":30}
	,{"_id":105300,"id_asignatura":1620,"codigo_evaluacion":"EV-351","tipo_evaluacion":"Tarea","fecha_evaluacion":"05\/07\/24","ponderacion":20}
	,{"_id":105600,"id_asignatura":1590,"codigo_evaluacion":"EV-352","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/01\/24","ponderacion":50}
	,{"_id":105900,"id_asignatura":60,"codigo_evaluacion":"EV-353","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"24\/06\/23","ponderacion":40}
	,{"_id":106200,"id_asignatura":2190,"codigo_evaluacion":"EV-354","tipo_evaluacion":"Tarea","fecha_evaluacion":"20\/04\/23","ponderacion":40}
	,{"_id":106500,"id_asignatura":2190,"codigo_evaluacion":"EV-355","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"06\/12\/24","ponderacion":30}
	,{"_id":106800,"id_asignatura":1080,"codigo_evaluacion":"EV-356","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/06\/25","ponderacion":50}
	,{"_id":107100,"id_asignatura":870,"codigo_evaluacion":"EV-357","tipo_evaluacion":"Tarea","fecha_evaluacion":"15\/02\/25","ponderacion":40}
	,{"_id":107400,"id_asignatura":2820,"codigo_evaluacion":"EV-358","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"16\/10\/22","ponderacion":50}
	,{"_id":107700,"id_asignatura":990,"codigo_evaluacion":"EV-359","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/08\/25","ponderacion":40}
	,{"_id":108000,"id_asignatura":660,"codigo_evaluacion":"EV-360","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"17\/04\/24","ponderacion":30}
	,{"_id":108300,"id_asignatura":1650,"codigo_evaluacion":"EV-361","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/10\/24","ponderacion":20}
	,{"_id":108600,"id_asignatura":3690,"codigo_evaluacion":"EV-362","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/04\/24","ponderacion":50}
	,{"_id":108900,"id_asignatura":2730,"codigo_evaluacion":"EV-363","tipo_evaluacion":"Tarea","fecha_evaluacion":"29\/06\/24","ponderacion":50}
	,{"_id":109200,"id_asignatura":180,"codigo_evaluacion":"EV-364","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/09\/23","ponderacion":50}
	,{"_id":109500,"id_asignatura":3930,"codigo_evaluacion":"EV-365","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"13\/06\/24","ponderacion":50}
	,{"_id":109800,"id_asignatura":2460,"codigo_evaluacion":"EV-366","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"27\/12\/22","ponderacion":30}
	,{"_id":110100,"id_asignatura":630,"codigo_evaluacion":"EV-367","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/01\/23","ponderacion":40}
	,{"_id":110400,"id_asignatura":450,"codigo_evaluacion":"EV-368","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"20\/05\/23","ponderacion":50}
	,{"_id":110700,"id_asignatura":720,"codigo_evaluacion":"EV-369","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/05\/24","ponderacion":50}
	,{"_id":111000,"id_asignatura":30,"codigo_evaluacion":"EV-370","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"30\/03\/25","ponderacion":50}
	,{"_id":111300,"id_asignatura":1680,"codigo_evaluacion":"EV-371","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/05\/23","ponderacion":50}
	,{"_id":111600,"id_asignatura":450,"codigo_evaluacion":"EV-372","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/07\/25","ponderacion":40}
	,{"_id":111900,"id_asignatura":3090,"codigo_evaluacion":"EV-373","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/12\/24","ponderacion":20}
	,{"_id":112200,"id_asignatura":180,"codigo_evaluacion":"EV-374","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/05\/24","ponderacion":20}
	,{"_id":112500,"id_asignatura":3240,"codigo_evaluacion":"EV-375","tipo_evaluacion":"Tarea","fecha_evaluacion":"31\/05\/23","ponderacion":50}
	,{"_id":112800,"id_asignatura":3990,"codigo_evaluacion":"EV-376","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"12\/08\/24","ponderacion":50}
	,{"_id":113100,"id_asignatura":2640,"codigo_evaluacion":"EV-377","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"24\/05\/25","ponderacion":50}
	,{"_id":113400,"id_asignatura":150,"codigo_evaluacion":"EV-378","tipo_evaluacion":"Tarea","fecha_evaluacion":"15\/05\/24","ponderacion":20}
	,{"_id":113700,"id_asignatura":1110,"codigo_evaluacion":"EV-379","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/12\/24","ponderacion":20}
	,{"_id":114000,"id_asignatura":1440,"codigo_evaluacion":"EV-380","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/05\/25","ponderacion":30}
	,{"_id":114300,"id_asignatura":270,"codigo_evaluacion":"EV-381","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/10\/22","ponderacion":40}
	,{"_id":114600,"id_asignatura":2220,"codigo_evaluacion":"EV-382","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/09\/22","ponderacion":50}
	,{"_id":114900,"id_asignatura":2310,"codigo_evaluacion":"EV-383","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/10\/24","ponderacion":50}
	,{"_id":115200,"id_asignatura":3030,"codigo_evaluacion":"EV-384","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/09\/23","ponderacion":50}
	,{"_id":115500,"id_asignatura":3630,"codigo_evaluacion":"EV-385","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/08\/25","ponderacion":30}
	,{"_id":115800,"id_asignatura":1560,"codigo_evaluacion":"EV-386","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/04\/25","ponderacion":20}
	,{"_id":116100,"id_asignatura":3900,"codigo_evaluacion":"EV-387","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/07\/24","ponderacion":50}
	,{"_id":116400,"id_asignatura":2280,"codigo_evaluacion":"EV-388","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/01\/23","ponderacion":20}
	,{"_id":116700,"id_asignatura":180,"codigo_evaluacion":"EV-389","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/10\/23","ponderacion":30}
	,{"_id":117000,"id_asignatura":2280,"codigo_evaluacion":"EV-390","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"13\/07\/25","ponderacion":30}
	,{"_id":117300,"id_asignatura":3930,"codigo_evaluacion":"EV-391","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/12\/23","ponderacion":30}
	,{"_id":117600,"id_asignatura":2040,"codigo_evaluacion":"EV-392","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/11\/22","ponderacion":40}
	,{"_id":117900,"id_asignatura":3330,"codigo_evaluacion":"EV-393","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"21\/04\/23","ponderacion":30}
	,{"_id":118200,"id_asignatura":120,"codigo_evaluacion":"EV-394","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/09\/24","ponderacion":50}
	,{"_id":118500,"id_asignatura":60,"codigo_evaluacion":"EV-395","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"15\/02\/24","ponderacion":20}
	,{"_id":118800,"id_asignatura":3240,"codigo_evaluacion":"EV-396","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/03\/23","ponderacion":50}
	,{"_id":119100,"id_asignatura":1590,"codigo_evaluacion":"EV-397","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"05\/07\/24","ponderacion":40}
	,{"_id":119400,"id_asignatura":2700,"codigo_evaluacion":"EV-398","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"19\/10\/24","ponderacion":40}
	,{"_id":119700,"id_asignatura":2130,"codigo_evaluacion":"EV-399","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/01\/25","ponderacion":30}
	,{"_id":120000,"id_asignatura":1860,"codigo_evaluacion":"EV-400","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/12\/23","ponderacion":30}
	,{"_id":120300,"id_asignatura":780,"codigo_evaluacion":"EV-401","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/12\/23","ponderacion":20}
	,{"_id":120600,"id_asignatura":2850,"codigo_evaluacion":"EV-402","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"22\/10\/23","ponderacion":40}
	,{"_id":120900,"id_asignatura":3870,"codigo_evaluacion":"EV-403","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/02\/24","ponderacion":50}
	,{"_id":121200,"id_asignatura":2760,"codigo_evaluacion":"EV-404","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/09\/22","ponderacion":30}
	,{"_id":121500,"id_asignatura":960,"codigo_evaluacion":"EV-405","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/01\/25","ponderacion":40}
	,{"_id":121800,"id_asignatura":1080,"codigo_evaluacion":"EV-406","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/08\/23","ponderacion":40}
	,{"_id":122100,"id_asignatura":3240,"codigo_evaluacion":"EV-407","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/04\/24","ponderacion":20}
	,{"_id":122400,"id_asignatura":3540,"codigo_evaluacion":"EV-408","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/10\/22","ponderacion":30}
	,{"_id":122700,"id_asignatura":3960,"codigo_evaluacion":"EV-409","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/11\/23","ponderacion":30}
	,{"_id":123000,"id_asignatura":1740,"codigo_evaluacion":"EV-410","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/03\/25","ponderacion":50}
	,{"_id":123300,"id_asignatura":3180,"codigo_evaluacion":"EV-411","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/12\/24","ponderacion":30}
	,{"_id":123600,"id_asignatura":2400,"codigo_evaluacion":"EV-412","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/09\/23","ponderacion":50}
	,{"_id":123900,"id_asignatura":1410,"codigo_evaluacion":"EV-413","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/05\/25","ponderacion":40}
	,{"_id":124200,"id_asignatura":1110,"codigo_evaluacion":"EV-414","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/01\/24","ponderacion":30}
	,{"_id":124500,"id_asignatura":2490,"codigo_evaluacion":"EV-415","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/10\/24","ponderacion":50}
	,{"_id":124800,"id_asignatura":780,"codigo_evaluacion":"EV-416","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/02\/24","ponderacion":50}
	,{"_id":125100,"id_asignatura":3090,"codigo_evaluacion":"EV-417","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"31\/05\/23","ponderacion":30}
	,{"_id":125400,"id_asignatura":2550,"codigo_evaluacion":"EV-418","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"30\/01\/24","ponderacion":20}
	,{"_id":125700,"id_asignatura":3480,"codigo_evaluacion":"EV-419","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/04\/23","ponderacion":40}
	,{"_id":126000,"id_asignatura":720,"codigo_evaluacion":"EV-420","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/03\/25","ponderacion":40}
	,{"_id":126300,"id_asignatura":750,"codigo_evaluacion":"EV-421","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"26\/03\/24","ponderacion":30}
	,{"_id":126600,"id_asignatura":3690,"codigo_evaluacion":"EV-422","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"17\/12\/23","ponderacion":40}
	,{"_id":126900,"id_asignatura":2820,"codigo_evaluacion":"EV-423","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/10\/23","ponderacion":50}
	,{"_id":127200,"id_asignatura":3240,"codigo_evaluacion":"EV-424","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/04\/24","ponderacion":20}
	,{"_id":127500,"id_asignatura":1230,"codigo_evaluacion":"EV-425","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/09\/23","ponderacion":40}
	,{"_id":127800,"id_asignatura":1650,"codigo_evaluacion":"EV-426","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"20\/07\/23","ponderacion":40}
	,{"_id":128100,"id_asignatura":2940,"codigo_evaluacion":"EV-427","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/03\/25","ponderacion":40}
	,{"_id":128400,"id_asignatura":2040,"codigo_evaluacion":"EV-428","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/11\/24","ponderacion":40}
	,{"_id":128700,"id_asignatura":1110,"codigo_evaluacion":"EV-429","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/09\/22","ponderacion":40}
	,{"_id":129000,"id_asignatura":2490,"codigo_evaluacion":"EV-430","tipo_evaluacion":"Tarea","fecha_evaluacion":"05\/02\/25","ponderacion":50}
	,{"_id":129300,"id_asignatura":2670,"codigo_evaluacion":"EV-431","tipo_evaluacion":"Tarea","fecha_evaluacion":"01\/04\/23","ponderacion":30}
	,{"_id":129600,"id_asignatura":1950,"codigo_evaluacion":"EV-432","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/04\/23","ponderacion":30}
	,{"_id":129900,"id_asignatura":3840,"codigo_evaluacion":"EV-433","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/04\/23","ponderacion":40}
	,{"_id":130200,"id_asignatura":1110,"codigo_evaluacion":"EV-434","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/07\/23","ponderacion":50}
	,{"_id":130500,"id_asignatura":1320,"codigo_evaluacion":"EV-435","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"02\/09\/25","ponderacion":20}
	,{"_id":130800,"id_asignatura":4020,"codigo_evaluacion":"EV-436","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"10\/03\/25","ponderacion":30}
	,{"_id":131100,"id_asignatura":2310,"codigo_evaluacion":"EV-437","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"27\/10\/23","ponderacion":20}
	,{"_id":131400,"id_asignatura":510,"codigo_evaluacion":"EV-438","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/05\/24","ponderacion":20}
	,{"_id":131700,"id_asignatura":210,"codigo_evaluacion":"EV-439","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/06\/23","ponderacion":30}
	,{"_id":132000,"id_asignatura":3510,"codigo_evaluacion":"EV-440","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/11\/22","ponderacion":40}
	,{"_id":132300,"id_asignatura":4020,"codigo_evaluacion":"EV-441","tipo_evaluacion":"Tarea","fecha_evaluacion":"31\/12\/22","ponderacion":30}
	,{"_id":132600,"id_asignatura":3300,"codigo_evaluacion":"EV-442","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"13\/12\/24","ponderacion":40}
	,{"_id":132900,"id_asignatura":360,"codigo_evaluacion":"EV-443","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"12\/09\/22","ponderacion":30}
	,{"_id":133200,"id_asignatura":3300,"codigo_evaluacion":"EV-444","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/12\/22","ponderacion":50}
	,{"_id":133500,"id_asignatura":900,"codigo_evaluacion":"EV-445","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/01\/25","ponderacion":20}
	,{"_id":133800,"id_asignatura":1470,"codigo_evaluacion":"EV-446","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/06\/24","ponderacion":40}
	,{"_id":134100,"id_asignatura":390,"codigo_evaluacion":"EV-447","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/01\/23","ponderacion":50}
	,{"_id":134400,"id_asignatura":2970,"codigo_evaluacion":"EV-448","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/12\/23","ponderacion":50}
	,{"_id":134700,"id_asignatura":3060,"codigo_evaluacion":"EV-449","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"11\/06\/24","ponderacion":40}
	,{"_id":135000,"id_asignatura":3810,"codigo_evaluacion":"EV-450","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/07\/23","ponderacion":30}
	,{"_id":135300,"id_asignatura":240,"codigo_evaluacion":"EV-451","tipo_evaluacion":"Tarea","fecha_evaluacion":"11\/02\/24","ponderacion":50}
	,{"_id":135600,"id_asignatura":840,"codigo_evaluacion":"EV-452","tipo_evaluacion":"Tarea","fecha_evaluacion":"15\/04\/23","ponderacion":40}
	,{"_id":135900,"id_asignatura":3690,"codigo_evaluacion":"EV-453","tipo_evaluacion":"Tarea","fecha_evaluacion":"15\/05\/24","ponderacion":20}
	,{"_id":136200,"id_asignatura":2460,"codigo_evaluacion":"EV-454","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/10\/24","ponderacion":20}
	,{"_id":136500,"id_asignatura":750,"codigo_evaluacion":"EV-455","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/01\/23","ponderacion":30}
	,{"_id":136800,"id_asignatura":2160,"codigo_evaluacion":"EV-456","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/04\/25","ponderacion":40}
	,{"_id":137100,"id_asignatura":3810,"codigo_evaluacion":"EV-457","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"29\/12\/22","ponderacion":30}
	,{"_id":137400,"id_asignatura":3480,"codigo_evaluacion":"EV-458","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"31\/05\/24","ponderacion":50}
	,{"_id":137700,"id_asignatura":360,"codigo_evaluacion":"EV-459","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/10\/23","ponderacion":20}
	,{"_id":138000,"id_asignatura":2430,"codigo_evaluacion":"EV-460","tipo_evaluacion":"Tarea","fecha_evaluacion":"09\/05\/24","ponderacion":50}
	,{"_id":138300,"id_asignatura":1170,"codigo_evaluacion":"EV-461","tipo_evaluacion":"Tarea","fecha_evaluacion":"18\/01\/24","ponderacion":20}
	,{"_id":138600,"id_asignatura":870,"codigo_evaluacion":"EV-462","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"12\/07\/25","ponderacion":40}
	,{"_id":138900,"id_asignatura":1740,"codigo_evaluacion":"EV-463","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"08\/11\/24","ponderacion":50}
	,{"_id":139200,"id_asignatura":2880,"codigo_evaluacion":"EV-464","tipo_evaluacion":"Tarea","fecha_evaluacion":"24\/08\/24","ponderacion":30}
	,{"_id":139500,"id_asignatura":3390,"codigo_evaluacion":"EV-465","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"21\/01\/24","ponderacion":20}
	,{"_id":139800,"id_asignatura":960,"codigo_evaluacion":"EV-466","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/03\/25","ponderacion":30}
	,{"_id":140100,"id_asignatura":480,"codigo_evaluacion":"EV-467","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/06\/24","ponderacion":50}
	,{"_id":140400,"id_asignatura":3060,"codigo_evaluacion":"EV-468","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/11\/23","ponderacion":30}
	,{"_id":140700,"id_asignatura":2010,"codigo_evaluacion":"EV-469","tipo_evaluacion":"Tarea","fecha_evaluacion":"17\/05\/23","ponderacion":20}
	,{"_id":141000,"id_asignatura":2430,"codigo_evaluacion":"EV-470","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/11\/23","ponderacion":40}
	,{"_id":141300,"id_asignatura":3870,"codigo_evaluacion":"EV-471","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/12\/24","ponderacion":40}
	,{"_id":141600,"id_asignatura":840,"codigo_evaluacion":"EV-472","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/05\/24","ponderacion":50}
	,{"_id":141900,"id_asignatura":1050,"codigo_evaluacion":"EV-473","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/06\/24","ponderacion":20}
	,{"_id":142200,"id_asignatura":4020,"codigo_evaluacion":"EV-474","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/05\/25","ponderacion":20}
	,{"_id":142500,"id_asignatura":3030,"codigo_evaluacion":"EV-475","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"22\/11\/22","ponderacion":40}
	,{"_id":142800,"id_asignatura":1020,"codigo_evaluacion":"EV-476","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/11\/22","ponderacion":40}
	,{"_id":143100,"id_asignatura":210,"codigo_evaluacion":"EV-477","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"16\/06\/25","ponderacion":50}
	,{"_id":143400,"id_asignatura":2190,"codigo_evaluacion":"EV-478","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/02\/25","ponderacion":30}
	,{"_id":143700,"id_asignatura":3480,"codigo_evaluacion":"EV-479","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/10\/23","ponderacion":20}
	,{"_id":144000,"id_asignatura":3210,"codigo_evaluacion":"EV-480","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/03\/23","ponderacion":50}
	,{"_id":144300,"id_asignatura":2070,"codigo_evaluacion":"EV-481","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/06\/25","ponderacion":30}
	,{"_id":144600,"id_asignatura":2070,"codigo_evaluacion":"EV-482","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/01\/25","ponderacion":40}
	,{"_id":144900,"id_asignatura":2220,"codigo_evaluacion":"EV-483","tipo_evaluacion":"Tarea","fecha_evaluacion":"12\/08\/25","ponderacion":20}
	,{"_id":145200,"id_asignatura":780,"codigo_evaluacion":"EV-484","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/03\/25","ponderacion":50}
	,{"_id":145500,"id_asignatura":2340,"codigo_evaluacion":"EV-485","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/05\/25","ponderacion":50}
	,{"_id":145800,"id_asignatura":1740,"codigo_evaluacion":"EV-486","tipo_evaluacion":"Tarea","fecha_evaluacion":"15\/09\/22","ponderacion":40}
	,{"_id":146100,"id_asignatura":3990,"codigo_evaluacion":"EV-487","tipo_evaluacion":"Tarea","fecha_evaluacion":"11\/02\/25","ponderacion":40}
	,{"_id":146400,"id_asignatura":2850,"codigo_evaluacion":"EV-488","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/07\/23","ponderacion":30}
	,{"_id":146700,"id_asignatura":2400,"codigo_evaluacion":"EV-489","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/08\/24","ponderacion":50}
	,{"_id":147000,"id_asignatura":2340,"codigo_evaluacion":"EV-490","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/02\/25","ponderacion":40}
	,{"_id":147300,"id_asignatura":1500,"codigo_evaluacion":"EV-491","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"24\/11\/22","ponderacion":20}
	,{"_id":147600,"id_asignatura":1320,"codigo_evaluacion":"EV-492","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"18\/10\/22","ponderacion":30}
	,{"_id":147900,"id_asignatura":3810,"codigo_evaluacion":"EV-493","tipo_evaluacion":"Tarea","fecha_evaluacion":"12\/05\/24","ponderacion":30}
	,{"_id":148200,"id_asignatura":1980,"codigo_evaluacion":"EV-494","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/08\/25","ponderacion":40}
	,{"_id":148500,"id_asignatura":1440,"codigo_evaluacion":"EV-495","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"10\/04\/24","ponderacion":20}
	,{"_id":148800,"id_asignatura":2820,"codigo_evaluacion":"EV-496","tipo_evaluacion":"Tarea","fecha_evaluacion":"16\/06\/24","ponderacion":40}
	,{"_id":149100,"id_asignatura":3480,"codigo_evaluacion":"EV-497","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/01\/23","ponderacion":20}
	,{"_id":149400,"id_asignatura":1980,"codigo_evaluacion":"EV-498","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/02\/25","ponderacion":20}
	,{"_id":149700,"id_asignatura":2010,"codigo_evaluacion":"EV-499","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/01\/23","ponderacion":20}
	,{"_id":150000,"id_asignatura":3060,"codigo_evaluacion":"EV-500","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/05\/23","ponderacion":20}
	,{"_id":150300,"id_asignatura":3390,"codigo_evaluacion":"EV-501","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/08\/23","ponderacion":40}
	,{"_id":150600,"id_asignatura":1470,"codigo_evaluacion":"EV-502","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/05\/24","ponderacion":30}
	,{"_id":150900,"id_asignatura":2820,"codigo_evaluacion":"EV-503","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"01\/04\/25","ponderacion":20}
	,{"_id":151200,"id_asignatura":3120,"codigo_evaluacion":"EV-504","tipo_evaluacion":"Tarea","fecha_evaluacion":"13\/05\/23","ponderacion":50}
	,{"_id":151500,"id_asignatura":3810,"codigo_evaluacion":"EV-505","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/06\/23","ponderacion":50}
	,{"_id":151800,"id_asignatura":3810,"codigo_evaluacion":"EV-506","tipo_evaluacion":"Tarea","fecha_evaluacion":"24\/06\/23","ponderacion":20}
	,{"_id":152100,"id_asignatura":3300,"codigo_evaluacion":"EV-507","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/08\/25","ponderacion":40}
	,{"_id":152400,"id_asignatura":750,"codigo_evaluacion":"EV-508","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/08\/24","ponderacion":40}
	,{"_id":152700,"id_asignatura":1500,"codigo_evaluacion":"EV-509","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/12\/23","ponderacion":20}
	,{"_id":153000,"id_asignatura":4050,"codigo_evaluacion":"EV-510","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/12\/24","ponderacion":40}
	,{"_id":153300,"id_asignatura":1290,"codigo_evaluacion":"EV-511","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/12\/23","ponderacion":30}
	,{"_id":153600,"id_asignatura":1560,"codigo_evaluacion":"EV-512","tipo_evaluacion":"Tarea","fecha_evaluacion":"12\/10\/24","ponderacion":50}
	,{"_id":153900,"id_asignatura":2760,"codigo_evaluacion":"EV-513","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/02\/25","ponderacion":40}
	,{"_id":154200,"id_asignatura":3180,"codigo_evaluacion":"EV-514","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/07\/23","ponderacion":20}
	,{"_id":154500,"id_asignatura":2700,"codigo_evaluacion":"EV-515","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"13\/04\/23","ponderacion":20}
	,{"_id":154800,"id_asignatura":3750,"codigo_evaluacion":"EV-516","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"31\/07\/23","ponderacion":20}
	,{"_id":155100,"id_asignatura":3900,"codigo_evaluacion":"EV-517","tipo_evaluacion":"Tarea","fecha_evaluacion":"17\/12\/23","ponderacion":50}
	,{"_id":155400,"id_asignatura":930,"codigo_evaluacion":"EV-518","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/01\/25","ponderacion":20}
	,{"_id":155700,"id_asignatura":30,"codigo_evaluacion":"EV-519","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/07\/24","ponderacion":40}
	,{"_id":156000,"id_asignatura":3870,"codigo_evaluacion":"EV-520","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"16\/09\/22","ponderacion":50}
	,{"_id":156300,"id_asignatura":2130,"codigo_evaluacion":"EV-521","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/09\/24","ponderacion":20}
	,{"_id":156600,"id_asignatura":2910,"codigo_evaluacion":"EV-522","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/08\/25","ponderacion":20}
	,{"_id":156900,"id_asignatura":690,"codigo_evaluacion":"EV-523","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"21\/02\/24","ponderacion":50}
	,{"_id":157200,"id_asignatura":690,"codigo_evaluacion":"EV-524","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/09\/23","ponderacion":20}
	,{"_id":157500,"id_asignatura":1830,"codigo_evaluacion":"EV-525","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/07\/24","ponderacion":20}
	,{"_id":157800,"id_asignatura":2100,"codigo_evaluacion":"EV-526","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/05\/24","ponderacion":50}
	,{"_id":158100,"id_asignatura":600,"codigo_evaluacion":"EV-527","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/01\/23","ponderacion":40}
	,{"_id":158400,"id_asignatura":1680,"codigo_evaluacion":"EV-528","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"17\/04\/24","ponderacion":20}
	,{"_id":158700,"id_asignatura":3750,"codigo_evaluacion":"EV-529","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"24\/09\/23","ponderacion":40}
	,{"_id":159000,"id_asignatura":1620,"codigo_evaluacion":"EV-530","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/10\/22","ponderacion":30}
	,{"_id":159300,"id_asignatura":2100,"codigo_evaluacion":"EV-531","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/10\/23","ponderacion":20}
	,{"_id":159600,"id_asignatura":480,"codigo_evaluacion":"EV-532","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/12\/23","ponderacion":30}
	,{"_id":159900,"id_asignatura":2550,"codigo_evaluacion":"EV-533","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/10\/24","ponderacion":30}
	,{"_id":160200,"id_asignatura":1920,"codigo_evaluacion":"EV-534","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/11\/23","ponderacion":40}
	,{"_id":160500,"id_asignatura":900,"codigo_evaluacion":"EV-535","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/10\/23","ponderacion":40}
	,{"_id":160800,"id_asignatura":1290,"codigo_evaluacion":"EV-536","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/06\/25","ponderacion":40}
	,{"_id":161100,"id_asignatura":960,"codigo_evaluacion":"EV-537","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/04\/24","ponderacion":50}
	,{"_id":161400,"id_asignatura":2790,"codigo_evaluacion":"EV-538","tipo_evaluacion":"Tarea","fecha_evaluacion":"01\/01\/25","ponderacion":30}
	,{"_id":161700,"id_asignatura":3390,"codigo_evaluacion":"EV-539","tipo_evaluacion":"Tarea","fecha_evaluacion":"30\/10\/24","ponderacion":50}
	,{"_id":162000,"id_asignatura":1680,"codigo_evaluacion":"EV-540","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/12\/22","ponderacion":50}
	,{"_id":162300,"id_asignatura":1590,"codigo_evaluacion":"EV-541","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/01\/23","ponderacion":50}
	,{"_id":162600,"id_asignatura":1080,"codigo_evaluacion":"EV-542","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/08\/23","ponderacion":20}
	,{"_id":162900,"id_asignatura":2100,"codigo_evaluacion":"EV-543","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"27\/08\/24","ponderacion":40}
	,{"_id":163200,"id_asignatura":1050,"codigo_evaluacion":"EV-544","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/10\/22","ponderacion":50}
	,{"_id":163500,"id_asignatura":960,"codigo_evaluacion":"EV-545","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"20\/06\/25","ponderacion":20}
	,{"_id":163800,"id_asignatura":780,"codigo_evaluacion":"EV-546","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/10\/23","ponderacion":30}
	,{"_id":164100,"id_asignatura":1410,"codigo_evaluacion":"EV-547","tipo_evaluacion":"Tarea","fecha_evaluacion":"17\/11\/22","ponderacion":30}
	,{"_id":164400,"id_asignatura":180,"codigo_evaluacion":"EV-548","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/12\/23","ponderacion":50}
	,{"_id":164700,"id_asignatura":1920,"codigo_evaluacion":"EV-549","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"18\/06\/24","ponderacion":30}
	,{"_id":165000,"id_asignatura":1020,"codigo_evaluacion":"EV-550","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"15\/06\/23","ponderacion":30}
	,{"_id":165300,"id_asignatura":3750,"codigo_evaluacion":"EV-551","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/07\/24","ponderacion":50}
	,{"_id":165600,"id_asignatura":2490,"codigo_evaluacion":"EV-552","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/04\/24","ponderacion":30}
	,{"_id":165900,"id_asignatura":2850,"codigo_evaluacion":"EV-553","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/09\/22","ponderacion":40}
	,{"_id":166200,"id_asignatura":2280,"codigo_evaluacion":"EV-554","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"16\/07\/23","ponderacion":30}
	,{"_id":166500,"id_asignatura":3030,"codigo_evaluacion":"EV-555","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/11\/23","ponderacion":20}
	,{"_id":166800,"id_asignatura":1950,"codigo_evaluacion":"EV-556","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"01\/10\/24","ponderacion":20}
	,{"_id":167100,"id_asignatura":3420,"codigo_evaluacion":"EV-557","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/03\/23","ponderacion":20}
	,{"_id":167400,"id_asignatura":3960,"codigo_evaluacion":"EV-558","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/11\/24","ponderacion":50}
	,{"_id":167700,"id_asignatura":2010,"codigo_evaluacion":"EV-559","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/08\/25","ponderacion":40}
	,{"_id":168000,"id_asignatura":1950,"codigo_evaluacion":"EV-560","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/02\/24","ponderacion":40}
	,{"_id":168300,"id_asignatura":1320,"codigo_evaluacion":"EV-561","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/10\/23","ponderacion":30}
	,{"_id":168600,"id_asignatura":2640,"codigo_evaluacion":"EV-562","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/01\/25","ponderacion":50}
	,{"_id":168900,"id_asignatura":3390,"codigo_evaluacion":"EV-563","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"29\/02\/24","ponderacion":40}
	,{"_id":169200,"id_asignatura":1140,"codigo_evaluacion":"EV-564","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/08\/25","ponderacion":40}
	,{"_id":169500,"id_asignatura":1620,"codigo_evaluacion":"EV-565","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"05\/01\/23","ponderacion":40}
	,{"_id":169800,"id_asignatura":420,"codigo_evaluacion":"EV-566","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/01\/25","ponderacion":50}
	,{"_id":170100,"id_asignatura":2220,"codigo_evaluacion":"EV-567","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/08\/24","ponderacion":50}
	,{"_id":170400,"id_asignatura":990,"codigo_evaluacion":"EV-568","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/09\/24","ponderacion":30}
	,{"_id":170700,"id_asignatura":300,"codigo_evaluacion":"EV-569","tipo_evaluacion":"Tarea","fecha_evaluacion":"27\/05\/24","ponderacion":30}
	,{"_id":171000,"id_asignatura":1380,"codigo_evaluacion":"EV-570","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/03\/23","ponderacion":30}
	,{"_id":171300,"id_asignatura":1830,"codigo_evaluacion":"EV-571","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/05\/23","ponderacion":50}
	,{"_id":171600,"id_asignatura":2910,"codigo_evaluacion":"EV-572","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"04\/03\/25","ponderacion":40}
	,{"_id":171900,"id_asignatura":4020,"codigo_evaluacion":"EV-573","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/11\/24","ponderacion":30}
	,{"_id":172200,"id_asignatura":4020,"codigo_evaluacion":"EV-574","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"01\/12\/23","ponderacion":30}
	,{"_id":172500,"id_asignatura":180,"codigo_evaluacion":"EV-575","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"21\/08\/23","ponderacion":30}
	,{"_id":172800,"id_asignatura":2790,"codigo_evaluacion":"EV-576","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"04\/10\/23","ponderacion":30}
	,{"_id":173100,"id_asignatura":2670,"codigo_evaluacion":"EV-577","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/02\/25","ponderacion":20}
	,{"_id":173400,"id_asignatura":660,"codigo_evaluacion":"EV-578","tipo_evaluacion":"Tarea","fecha_evaluacion":"18\/11\/23","ponderacion":30}
	,{"_id":173700,"id_asignatura":1560,"codigo_evaluacion":"EV-579","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"22\/04\/25","ponderacion":30}
	,{"_id":174000,"id_asignatura":900,"codigo_evaluacion":"EV-580","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/02\/24","ponderacion":40}
	,{"_id":174300,"id_asignatura":810,"codigo_evaluacion":"EV-581","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/06\/25","ponderacion":30}
	,{"_id":174600,"id_asignatura":1590,"codigo_evaluacion":"EV-582","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/05\/23","ponderacion":50}
	,{"_id":174900,"id_asignatura":1170,"codigo_evaluacion":"EV-583","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/12\/24","ponderacion":40}
	,{"_id":175200,"id_asignatura":3570,"codigo_evaluacion":"EV-584","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/10\/22","ponderacion":20}
	,{"_id":175500,"id_asignatura":690,"codigo_evaluacion":"EV-585","tipo_evaluacion":"Tarea","fecha_evaluacion":"09\/10\/24","ponderacion":40}
	,{"_id":175800,"id_asignatura":540,"codigo_evaluacion":"EV-586","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/06\/23","ponderacion":20}
	,{"_id":176100,"id_asignatura":1770,"codigo_evaluacion":"EV-587","tipo_evaluacion":"Tarea","fecha_evaluacion":"27\/04\/24","ponderacion":30}
	,{"_id":176400,"id_asignatura":1830,"codigo_evaluacion":"EV-588","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/07\/24","ponderacion":50}
	,{"_id":176700,"id_asignatura":3420,"codigo_evaluacion":"EV-589","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/04\/24","ponderacion":50}
	,{"_id":177000,"id_asignatura":3450,"codigo_evaluacion":"EV-590","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"11\/10\/23","ponderacion":50}
	,{"_id":177300,"id_asignatura":570,"codigo_evaluacion":"EV-591","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/01\/24","ponderacion":50}
	,{"_id":177600,"id_asignatura":3810,"codigo_evaluacion":"EV-592","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/10\/22","ponderacion":50}
	,{"_id":177900,"id_asignatura":3270,"codigo_evaluacion":"EV-593","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/01\/24","ponderacion":40}
	,{"_id":178200,"id_asignatura":2280,"codigo_evaluacion":"EV-594","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/10\/24","ponderacion":30}
	,{"_id":178500,"id_asignatura":3510,"codigo_evaluacion":"EV-595","tipo_evaluacion":"Tarea","fecha_evaluacion":"29\/05\/25","ponderacion":20}
	,{"_id":178800,"id_asignatura":2070,"codigo_evaluacion":"EV-596","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/10\/24","ponderacion":30}
	,{"_id":179100,"id_asignatura":3090,"codigo_evaluacion":"EV-597","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/03\/23","ponderacion":30}
	,{"_id":179400,"id_asignatura":900,"codigo_evaluacion":"EV-598","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/01\/23","ponderacion":30}
	,{"_id":179700,"id_asignatura":3120,"codigo_evaluacion":"EV-599","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/05\/24","ponderacion":50}
	,{"_id":180000,"id_asignatura":3390,"codigo_evaluacion":"EV-600","tipo_evaluacion":"Tarea","fecha_evaluacion":"27\/01\/25","ponderacion":40}
	,{"_id":180300,"id_asignatura":3600,"codigo_evaluacion":"EV-601","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"21\/03\/25","ponderacion":40}
	,{"_id":180600,"id_asignatura":2010,"codigo_evaluacion":"EV-602","tipo_evaluacion":"Tarea","fecha_evaluacion":"13\/02\/23","ponderacion":40}
	,{"_id":180900,"id_asignatura":2250,"codigo_evaluacion":"EV-603","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/02\/24","ponderacion":30}
	,{"_id":181200,"id_asignatura":3330,"codigo_evaluacion":"EV-604","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"28\/10\/24","ponderacion":50}
	,{"_id":181500,"id_asignatura":3060,"codigo_evaluacion":"EV-605","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/01\/24","ponderacion":20}
	,{"_id":181800,"id_asignatura":3810,"codigo_evaluacion":"EV-606","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/10\/24","ponderacion":30}
	,{"_id":182100,"id_asignatura":3840,"codigo_evaluacion":"EV-607","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/08\/24","ponderacion":40}
	,{"_id":182400,"id_asignatura":1980,"codigo_evaluacion":"EV-608","tipo_evaluacion":"Tarea","fecha_evaluacion":"15\/12\/22","ponderacion":40}
	,{"_id":182700,"id_asignatura":1590,"codigo_evaluacion":"EV-609","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/11\/22","ponderacion":20}
	,{"_id":183000,"id_asignatura":3210,"codigo_evaluacion":"EV-610","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"24\/03\/25","ponderacion":50}
	,{"_id":183300,"id_asignatura":2910,"codigo_evaluacion":"EV-611","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/07\/25","ponderacion":20}
	,{"_id":183600,"id_asignatura":3240,"codigo_evaluacion":"EV-612","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"28\/06\/24","ponderacion":30}
	,{"_id":183900,"id_asignatura":2880,"codigo_evaluacion":"EV-613","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/10\/24","ponderacion":30}
	,{"_id":184200,"id_asignatura":2850,"codigo_evaluacion":"EV-614","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/09\/24","ponderacion":30}
	,{"_id":184500,"id_asignatura":3690,"codigo_evaluacion":"EV-615","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/04\/25","ponderacion":50}
	,{"_id":184800,"id_asignatura":1050,"codigo_evaluacion":"EV-616","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"11\/12\/22","ponderacion":30}
	,{"_id":185100,"id_asignatura":1440,"codigo_evaluacion":"EV-617","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/03\/24","ponderacion":50}
	,{"_id":185400,"id_asignatura":2490,"codigo_evaluacion":"EV-618","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/12\/22","ponderacion":40}
	,{"_id":185700,"id_asignatura":1950,"codigo_evaluacion":"EV-619","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"10\/03\/23","ponderacion":20}
	,{"_id":186000,"id_asignatura":1890,"codigo_evaluacion":"EV-620","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/10\/24","ponderacion":40}
	,{"_id":186300,"id_asignatura":2700,"codigo_evaluacion":"EV-621","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"18\/07\/23","ponderacion":20}
	,{"_id":186600,"id_asignatura":690,"codigo_evaluacion":"EV-622","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/11\/23","ponderacion":30}
	,{"_id":186900,"id_asignatura":2280,"codigo_evaluacion":"EV-623","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/12\/22","ponderacion":30}
	,{"_id":187200,"id_asignatura":1800,"codigo_evaluacion":"EV-624","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"01\/11\/23","ponderacion":40}
	,{"_id":187500,"id_asignatura":420,"codigo_evaluacion":"EV-625","tipo_evaluacion":"Tarea","fecha_evaluacion":"19\/12\/24","ponderacion":40}
	,{"_id":187800,"id_asignatura":450,"codigo_evaluacion":"EV-626","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/04\/24","ponderacion":20}
	,{"_id":188100,"id_asignatura":2490,"codigo_evaluacion":"EV-627","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/01\/23","ponderacion":50}
	,{"_id":188400,"id_asignatura":1860,"codigo_evaluacion":"EV-628","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/01\/23","ponderacion":30}
	,{"_id":188700,"id_asignatura":180,"codigo_evaluacion":"EV-629","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/04\/25","ponderacion":40}
	,{"_id":189000,"id_asignatura":1350,"codigo_evaluacion":"EV-630","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"13\/03\/25","ponderacion":50}
	,{"_id":189300,"id_asignatura":2610,"codigo_evaluacion":"EV-631","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/03\/25","ponderacion":30}
	,{"_id":189600,"id_asignatura":1230,"codigo_evaluacion":"EV-632","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/09\/22","ponderacion":50}
	,{"_id":189900,"id_asignatura":2490,"codigo_evaluacion":"EV-633","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/07\/24","ponderacion":30}
	,{"_id":190200,"id_asignatura":2610,"codigo_evaluacion":"EV-634","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"24\/07\/25","ponderacion":50}
	,{"_id":190500,"id_asignatura":960,"codigo_evaluacion":"EV-635","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"25\/06\/24","ponderacion":40}
	,{"_id":190800,"id_asignatura":930,"codigo_evaluacion":"EV-636","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/08\/23","ponderacion":40}
	,{"_id":191100,"id_asignatura":1980,"codigo_evaluacion":"EV-637","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"21\/02\/25","ponderacion":20}
	,{"_id":191400,"id_asignatura":2730,"codigo_evaluacion":"EV-638","tipo_evaluacion":"Tarea","fecha_evaluacion":"05\/10\/24","ponderacion":30}
	,{"_id":191700,"id_asignatura":660,"codigo_evaluacion":"EV-639","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/12\/23","ponderacion":30}
	,{"_id":192000,"id_asignatura":1770,"codigo_evaluacion":"EV-640","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/01\/23","ponderacion":30}
	,{"_id":192300,"id_asignatura":1080,"codigo_evaluacion":"EV-641","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/01\/25","ponderacion":20}
	,{"_id":192600,"id_asignatura":30,"codigo_evaluacion":"EV-642","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"27\/11\/23","ponderacion":50}
	,{"_id":192900,"id_asignatura":420,"codigo_evaluacion":"EV-643","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"11\/02\/25","ponderacion":50}
	,{"_id":193200,"id_asignatura":3030,"codigo_evaluacion":"EV-644","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/08\/23","ponderacion":30}
	,{"_id":193500,"id_asignatura":3510,"codigo_evaluacion":"EV-645","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/12\/23","ponderacion":30}
	,{"_id":193800,"id_asignatura":2730,"codigo_evaluacion":"EV-646","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/02\/25","ponderacion":30}
	,{"_id":194100,"id_asignatura":2910,"codigo_evaluacion":"EV-647","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/05\/25","ponderacion":40}
	,{"_id":194400,"id_asignatura":1110,"codigo_evaluacion":"EV-648","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/03\/25","ponderacion":20}
	,{"_id":194700,"id_asignatura":2820,"codigo_evaluacion":"EV-649","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/10\/24","ponderacion":40}
	,{"_id":195000,"id_asignatura":1080,"codigo_evaluacion":"EV-650","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/11\/23","ponderacion":50}
	,{"_id":195300,"id_asignatura":3300,"codigo_evaluacion":"EV-651","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/03\/24","ponderacion":40}
	,{"_id":195600,"id_asignatura":1830,"codigo_evaluacion":"EV-652","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/11\/24","ponderacion":50}
	,{"_id":195900,"id_asignatura":4050,"codigo_evaluacion":"EV-653","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/03\/23","ponderacion":50}
	,{"_id":196200,"id_asignatura":1080,"codigo_evaluacion":"EV-654","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/11\/23","ponderacion":20}
	,{"_id":196500,"id_asignatura":2130,"codigo_evaluacion":"EV-655","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/04\/24","ponderacion":50}
	,{"_id":196800,"id_asignatura":3480,"codigo_evaluacion":"EV-656","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/01\/25","ponderacion":30}
	,{"_id":197100,"id_asignatura":1560,"codigo_evaluacion":"EV-657","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/09\/23","ponderacion":50}
	,{"_id":197400,"id_asignatura":2490,"codigo_evaluacion":"EV-658","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/10\/24","ponderacion":20}
	,{"_id":197700,"id_asignatura":2370,"codigo_evaluacion":"EV-659","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/06\/24","ponderacion":30}
	,{"_id":198000,"id_asignatura":2190,"codigo_evaluacion":"EV-660","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"28\/08\/25","ponderacion":30}
	,{"_id":198300,"id_asignatura":3060,"codigo_evaluacion":"EV-661","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/10\/23","ponderacion":50}
	,{"_id":198600,"id_asignatura":3750,"codigo_evaluacion":"EV-662","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/04\/23","ponderacion":40}
	,{"_id":198900,"id_asignatura":3450,"codigo_evaluacion":"EV-663","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/08\/23","ponderacion":30}
	,{"_id":199200,"id_asignatura":3720,"codigo_evaluacion":"EV-664","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/10\/23","ponderacion":30}
	,{"_id":199500,"id_asignatura":1800,"codigo_evaluacion":"EV-665","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/07\/24","ponderacion":30}
	,{"_id":199800,"id_asignatura":3750,"codigo_evaluacion":"EV-666","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"31\/03\/24","ponderacion":50}
	,{"_id":200100,"id_asignatura":2940,"codigo_evaluacion":"EV-667","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"17\/02\/25","ponderacion":40}
	,{"_id":200400,"id_asignatura":1140,"codigo_evaluacion":"EV-668","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/03\/24","ponderacion":50}
	,{"_id":200700,"id_asignatura":2100,"codigo_evaluacion":"EV-669","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"13\/08\/25","ponderacion":50}
	,{"_id":201000,"id_asignatura":630,"codigo_evaluacion":"EV-670","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/11\/23","ponderacion":40}
	,{"_id":201300,"id_asignatura":210,"codigo_evaluacion":"EV-671","tipo_evaluacion":"Tarea","fecha_evaluacion":"03\/07\/23","ponderacion":40}
	,{"_id":201600,"id_asignatura":2610,"codigo_evaluacion":"EV-672","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/11\/23","ponderacion":40}
	,{"_id":201900,"id_asignatura":1020,"codigo_evaluacion":"EV-673","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/03\/25","ponderacion":50}
	,{"_id":202200,"id_asignatura":3930,"codigo_evaluacion":"EV-674","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"12\/04\/24","ponderacion":20}
	,{"_id":202500,"id_asignatura":1410,"codigo_evaluacion":"EV-675","tipo_evaluacion":"Tarea","fecha_evaluacion":"20\/03\/23","ponderacion":20}
	,{"_id":202800,"id_asignatura":2220,"codigo_evaluacion":"EV-676","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"19\/12\/24","ponderacion":20}
	,{"_id":203100,"id_asignatura":780,"codigo_evaluacion":"EV-677","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/05\/25","ponderacion":40}
	,{"_id":203400,"id_asignatura":2490,"codigo_evaluacion":"EV-678","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/02\/25","ponderacion":20}
	,{"_id":203700,"id_asignatura":480,"codigo_evaluacion":"EV-679","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/02\/25","ponderacion":30}
	,{"_id":204000,"id_asignatura":1800,"codigo_evaluacion":"EV-680","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/03\/25","ponderacion":20}
	,{"_id":204300,"id_asignatura":2340,"codigo_evaluacion":"EV-681","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"16\/02\/23","ponderacion":30}
	,{"_id":204600,"id_asignatura":2790,"codigo_evaluacion":"EV-682","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/01\/24","ponderacion":30}
	,{"_id":204900,"id_asignatura":3540,"codigo_evaluacion":"EV-683","tipo_evaluacion":"Tarea","fecha_evaluacion":"27\/04\/25","ponderacion":20}
	,{"_id":205200,"id_asignatura":2850,"codigo_evaluacion":"EV-684","tipo_evaluacion":"Tarea","fecha_evaluacion":"14\/06\/23","ponderacion":20}
	,{"_id":205500,"id_asignatura":3180,"codigo_evaluacion":"EV-685","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/02\/25","ponderacion":50}
	,{"_id":205800,"id_asignatura":2550,"codigo_evaluacion":"EV-686","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/05\/24","ponderacion":30}
	,{"_id":206100,"id_asignatura":1290,"codigo_evaluacion":"EV-687","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/05\/23","ponderacion":50}
	,{"_id":206400,"id_asignatura":3480,"codigo_evaluacion":"EV-688","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"04\/09\/24","ponderacion":40}
	,{"_id":206700,"id_asignatura":570,"codigo_evaluacion":"EV-689","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/05\/25","ponderacion":20}
	,{"_id":207000,"id_asignatura":3690,"codigo_evaluacion":"EV-690","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"16\/11\/22","ponderacion":20}
	,{"_id":207300,"id_asignatura":1320,"codigo_evaluacion":"EV-691","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/10\/24","ponderacion":40}
	,{"_id":207600,"id_asignatura":300,"codigo_evaluacion":"EV-692","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"16\/05\/25","ponderacion":20}
	,{"_id":207900,"id_asignatura":3030,"codigo_evaluacion":"EV-693","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"10\/11\/22","ponderacion":40}
	,{"_id":208200,"id_asignatura":1590,"codigo_evaluacion":"EV-694","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"08\/02\/24","ponderacion":30}
	,{"_id":208500,"id_asignatura":990,"codigo_evaluacion":"EV-695","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/09\/22","ponderacion":40}
	,{"_id":208800,"id_asignatura":2400,"codigo_evaluacion":"EV-696","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"15\/04\/24","ponderacion":40}
	,{"_id":209100,"id_asignatura":2880,"codigo_evaluacion":"EV-697","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/11\/22","ponderacion":50}
	,{"_id":209400,"id_asignatura":2250,"codigo_evaluacion":"EV-698","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/01\/24","ponderacion":30}
	,{"_id":209700,"id_asignatura":2430,"codigo_evaluacion":"EV-699","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/02\/24","ponderacion":30}
	,{"_id":210000,"id_asignatura":900,"codigo_evaluacion":"EV-700","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/08\/24","ponderacion":50}
	,{"_id":210300,"id_asignatura":1950,"codigo_evaluacion":"EV-701","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"03\/11\/23","ponderacion":30}
	,{"_id":210600,"id_asignatura":3570,"codigo_evaluacion":"EV-702","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/06\/25","ponderacion":40}
	,{"_id":210900,"id_asignatura":2700,"codigo_evaluacion":"EV-703","tipo_evaluacion":"Tarea","fecha_evaluacion":"05\/06\/25","ponderacion":20}
	,{"_id":211200,"id_asignatura":1200,"codigo_evaluacion":"EV-704","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/06\/23","ponderacion":30}
	,{"_id":211500,"id_asignatura":2910,"codigo_evaluacion":"EV-705","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/01\/24","ponderacion":40}
	,{"_id":211800,"id_asignatura":1530,"codigo_evaluacion":"EV-706","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/02\/24","ponderacion":40}
	,{"_id":212100,"id_asignatura":3090,"codigo_evaluacion":"EV-707","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/03\/24","ponderacion":50}
	,{"_id":212400,"id_asignatura":3210,"codigo_evaluacion":"EV-708","tipo_evaluacion":"Tarea","fecha_evaluacion":"03\/11\/23","ponderacion":20}
	,{"_id":212700,"id_asignatura":2070,"codigo_evaluacion":"EV-709","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/06\/25","ponderacion":40}
	,{"_id":213000,"id_asignatura":510,"codigo_evaluacion":"EV-710","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/02\/25","ponderacion":30}
	,{"_id":213300,"id_asignatura":2430,"codigo_evaluacion":"EV-711","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/12\/24","ponderacion":20}
	,{"_id":213600,"id_asignatura":660,"codigo_evaluacion":"EV-712","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/02\/23","ponderacion":50}
	,{"_id":213900,"id_asignatura":2100,"codigo_evaluacion":"EV-713","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/01\/25","ponderacion":30}
	,{"_id":214200,"id_asignatura":3690,"codigo_evaluacion":"EV-714","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/09\/22","ponderacion":50}
	,{"_id":214500,"id_asignatura":3540,"codigo_evaluacion":"EV-715","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"21\/02\/25","ponderacion":30}
	,{"_id":214800,"id_asignatura":2850,"codigo_evaluacion":"EV-716","tipo_evaluacion":"Tarea","fecha_evaluacion":"05\/10\/24","ponderacion":30}
	,{"_id":215100,"id_asignatura":2010,"codigo_evaluacion":"EV-717","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/07\/25","ponderacion":50}
	,{"_id":215400,"id_asignatura":4050,"codigo_evaluacion":"EV-718","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"27\/10\/24","ponderacion":50}
	,{"_id":215700,"id_asignatura":2400,"codigo_evaluacion":"EV-719","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/11\/23","ponderacion":20}
	,{"_id":216000,"id_asignatura":1140,"codigo_evaluacion":"EV-720","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/10\/24","ponderacion":30}
	,{"_id":216300,"id_asignatura":2640,"codigo_evaluacion":"EV-721","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"02\/11\/24","ponderacion":20}
	,{"_id":216600,"id_asignatura":2640,"codigo_evaluacion":"EV-722","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/09\/22","ponderacion":30}
	,{"_id":216900,"id_asignatura":1950,"codigo_evaluacion":"EV-723","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/01\/23","ponderacion":40}
	,{"_id":217200,"id_asignatura":480,"codigo_evaluacion":"EV-724","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"10\/03\/23","ponderacion":40}
	,{"_id":217500,"id_asignatura":540,"codigo_evaluacion":"EV-725","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"03\/11\/23","ponderacion":50}
	,{"_id":217800,"id_asignatura":1920,"codigo_evaluacion":"EV-726","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/02\/23","ponderacion":30}
	,{"_id":218100,"id_asignatura":660,"codigo_evaluacion":"EV-727","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/02\/25","ponderacion":50}
	,{"_id":218400,"id_asignatura":2070,"codigo_evaluacion":"EV-728","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/04\/23","ponderacion":20}
	,{"_id":218700,"id_asignatura":60,"codigo_evaluacion":"EV-729","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/01\/25","ponderacion":20}
	,{"_id":219000,"id_asignatura":2310,"codigo_evaluacion":"EV-730","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/08\/24","ponderacion":20}
	,{"_id":219300,"id_asignatura":1980,"codigo_evaluacion":"EV-731","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/12\/23","ponderacion":40}
	,{"_id":219600,"id_asignatura":3480,"codigo_evaluacion":"EV-732","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/08\/23","ponderacion":30}
	,{"_id":219900,"id_asignatura":2640,"codigo_evaluacion":"EV-733","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/11\/23","ponderacion":50}
	,{"_id":220200,"id_asignatura":3150,"codigo_evaluacion":"EV-734","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/12\/23","ponderacion":40}
	,{"_id":220500,"id_asignatura":2040,"codigo_evaluacion":"EV-735","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/07\/24","ponderacion":40}
	,{"_id":220800,"id_asignatura":780,"codigo_evaluacion":"EV-736","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/07\/24","ponderacion":50}
	,{"_id":221100,"id_asignatura":2700,"codigo_evaluacion":"EV-737","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"22\/07\/23","ponderacion":40}
	,{"_id":221400,"id_asignatura":630,"codigo_evaluacion":"EV-738","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/09\/23","ponderacion":40}
	,{"_id":221700,"id_asignatura":1260,"codigo_evaluacion":"EV-739","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/11\/24","ponderacion":50}
	,{"_id":222000,"id_asignatura":3060,"codigo_evaluacion":"EV-740","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/02\/25","ponderacion":20}
	,{"_id":222300,"id_asignatura":510,"codigo_evaluacion":"EV-741","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/02\/23","ponderacion":20}
	,{"_id":222600,"id_asignatura":210,"codigo_evaluacion":"EV-742","tipo_evaluacion":"Tarea","fecha_evaluacion":"29\/11\/22","ponderacion":30}
	,{"_id":222900,"id_asignatura":1440,"codigo_evaluacion":"EV-743","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"28\/02\/25","ponderacion":40}
	,{"_id":223200,"id_asignatura":3150,"codigo_evaluacion":"EV-744","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/08\/23","ponderacion":50}
	,{"_id":223500,"id_asignatura":2160,"codigo_evaluacion":"EV-745","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/03\/24","ponderacion":20}
	,{"_id":223800,"id_asignatura":3360,"codigo_evaluacion":"EV-746","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"10\/08\/25","ponderacion":40}
	,{"_id":224100,"id_asignatura":2520,"codigo_evaluacion":"EV-747","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"11\/10\/23","ponderacion":50}
	,{"_id":224400,"id_asignatura":750,"codigo_evaluacion":"EV-748","tipo_evaluacion":"Tarea","fecha_evaluacion":"24\/12\/22","ponderacion":30}
	,{"_id":224700,"id_asignatura":780,"codigo_evaluacion":"EV-749","tipo_evaluacion":"Tarea","fecha_evaluacion":"16\/01\/23","ponderacion":50}
	,{"_id":225000,"id_asignatura":2610,"codigo_evaluacion":"EV-750","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/11\/24","ponderacion":30}
	,{"_id":225300,"id_asignatura":4020,"codigo_evaluacion":"EV-751","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"31\/07\/24","ponderacion":20}
	,{"_id":225600,"id_asignatura":3210,"codigo_evaluacion":"EV-752","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/10\/23","ponderacion":20}
	,{"_id":225900,"id_asignatura":3000,"codigo_evaluacion":"EV-753","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/12\/24","ponderacion":30}
	,{"_id":226200,"id_asignatura":660,"codigo_evaluacion":"EV-754","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/02\/25","ponderacion":40}
	,{"_id":226500,"id_asignatura":480,"codigo_evaluacion":"EV-755","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"20\/10\/22","ponderacion":30}
	,{"_id":226800,"id_asignatura":1950,"codigo_evaluacion":"EV-756","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/07\/25","ponderacion":50}
	,{"_id":227100,"id_asignatura":2400,"codigo_evaluacion":"EV-757","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/07\/23","ponderacion":20}
	,{"_id":227400,"id_asignatura":1110,"codigo_evaluacion":"EV-758","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/04\/24","ponderacion":50}
	,{"_id":227700,"id_asignatura":1170,"codigo_evaluacion":"EV-759","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"16\/11\/22","ponderacion":40}
	,{"_id":228000,"id_asignatura":2610,"codigo_evaluacion":"EV-760","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/03\/23","ponderacion":30}
	,{"_id":228300,"id_asignatura":2490,"codigo_evaluacion":"EV-761","tipo_evaluacion":"Tarea","fecha_evaluacion":"30\/08\/25","ponderacion":20}
	,{"_id":228600,"id_asignatura":510,"codigo_evaluacion":"EV-762","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"12\/11\/23","ponderacion":30}
	,{"_id":228900,"id_asignatura":3210,"codigo_evaluacion":"EV-763","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/05\/25","ponderacion":20}
	,{"_id":229200,"id_asignatura":2010,"codigo_evaluacion":"EV-764","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/10\/24","ponderacion":50}
	,{"_id":229500,"id_asignatura":2070,"codigo_evaluacion":"EV-765","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/08\/23","ponderacion":30}
	,{"_id":229800,"id_asignatura":60,"codigo_evaluacion":"EV-766","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"02\/09\/23","ponderacion":50}
	,{"_id":230100,"id_asignatura":3210,"codigo_evaluacion":"EV-767","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/10\/24","ponderacion":50}
	,{"_id":230400,"id_asignatura":930,"codigo_evaluacion":"EV-768","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/10\/24","ponderacion":30}
	,{"_id":230700,"id_asignatura":2700,"codigo_evaluacion":"EV-769","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/01\/25","ponderacion":30}
	,{"_id":231000,"id_asignatura":300,"codigo_evaluacion":"EV-770","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/12\/22","ponderacion":30}
	,{"_id":231300,"id_asignatura":120,"codigo_evaluacion":"EV-771","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/02\/25","ponderacion":20}
	,{"_id":231600,"id_asignatura":2760,"codigo_evaluacion":"EV-772","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"13\/10\/24","ponderacion":50}
	,{"_id":231900,"id_asignatura":210,"codigo_evaluacion":"EV-773","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/07\/25","ponderacion":20}
	,{"_id":232200,"id_asignatura":1680,"codigo_evaluacion":"EV-774","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/12\/22","ponderacion":50}
	,{"_id":232500,"id_asignatura":480,"codigo_evaluacion":"EV-775","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/03\/25","ponderacion":20}
	,{"_id":232800,"id_asignatura":2970,"codigo_evaluacion":"EV-776","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/09\/24","ponderacion":40}
	,{"_id":233100,"id_asignatura":3060,"codigo_evaluacion":"EV-777","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"24\/10\/23","ponderacion":50}
	,{"_id":233400,"id_asignatura":3720,"codigo_evaluacion":"EV-778","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/04\/25","ponderacion":50}
	,{"_id":233700,"id_asignatura":1890,"codigo_evaluacion":"EV-779","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"20\/06\/23","ponderacion":40}
	,{"_id":234000,"id_asignatura":780,"codigo_evaluacion":"EV-780","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"28\/11\/23","ponderacion":50}
	,{"_id":234300,"id_asignatura":3240,"codigo_evaluacion":"EV-781","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/12\/23","ponderacion":50}
	,{"_id":234600,"id_asignatura":3210,"codigo_evaluacion":"EV-782","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"02\/07\/24","ponderacion":40}
	,{"_id":234900,"id_asignatura":2790,"codigo_evaluacion":"EV-783","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/12\/22","ponderacion":20}
	,{"_id":235200,"id_asignatura":1770,"codigo_evaluacion":"EV-784","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/07\/25","ponderacion":50}
	,{"_id":235500,"id_asignatura":3810,"codigo_evaluacion":"EV-785","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/10\/24","ponderacion":50}
	,{"_id":235800,"id_asignatura":4050,"codigo_evaluacion":"EV-786","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/07\/24","ponderacion":20}
	,{"_id":236100,"id_asignatura":1530,"codigo_evaluacion":"EV-787","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"11\/09\/23","ponderacion":20}
	,{"_id":236400,"id_asignatura":810,"codigo_evaluacion":"EV-788","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/08\/23","ponderacion":50}
	,{"_id":236700,"id_asignatura":3810,"codigo_evaluacion":"EV-789","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"15\/04\/25","ponderacion":30}
	,{"_id":237000,"id_asignatura":2250,"codigo_evaluacion":"EV-790","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"03\/02\/23","ponderacion":40}
	,{"_id":237300,"id_asignatura":1350,"codigo_evaluacion":"EV-791","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/05\/23","ponderacion":20}
	,{"_id":237600,"id_asignatura":1170,"codigo_evaluacion":"EV-792","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/11\/23","ponderacion":50}
	,{"_id":237900,"id_asignatura":510,"codigo_evaluacion":"EV-793","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/03\/24","ponderacion":30}
	,{"_id":238200,"id_asignatura":3690,"codigo_evaluacion":"EV-794","tipo_evaluacion":"Tarea","fecha_evaluacion":"30\/06\/25","ponderacion":30}
	,{"_id":238500,"id_asignatura":3810,"codigo_evaluacion":"EV-795","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/01\/25","ponderacion":30}
	,{"_id":238800,"id_asignatura":2550,"codigo_evaluacion":"EV-796","tipo_evaluacion":"Tarea","fecha_evaluacion":"05\/09\/24","ponderacion":40}
	,{"_id":239100,"id_asignatura":3900,"codigo_evaluacion":"EV-797","tipo_evaluacion":"Tarea","fecha_evaluacion":"11\/10\/22","ponderacion":30}
	,{"_id":239400,"id_asignatura":2400,"codigo_evaluacion":"EV-798","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"11\/01\/25","ponderacion":20}
	,{"_id":239700,"id_asignatura":4020,"codigo_evaluacion":"EV-799","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/06\/23","ponderacion":50}
	,{"_id":240000,"id_asignatura":1230,"codigo_evaluacion":"EV-800","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/12\/23","ponderacion":40}
	,{"_id":240300,"id_asignatura":1680,"codigo_evaluacion":"EV-801","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/09\/24","ponderacion":50}
	,{"_id":240600,"id_asignatura":1740,"codigo_evaluacion":"EV-802","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/07\/24","ponderacion":40}
	,{"_id":240900,"id_asignatura":240,"codigo_evaluacion":"EV-803","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"06\/06\/25","ponderacion":30}
	,{"_id":241200,"id_asignatura":2550,"codigo_evaluacion":"EV-804","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/09\/25","ponderacion":20}
	,{"_id":241500,"id_asignatura":420,"codigo_evaluacion":"EV-805","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/05\/23","ponderacion":20}
	,{"_id":241800,"id_asignatura":1620,"codigo_evaluacion":"EV-806","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/07\/25","ponderacion":50}
	,{"_id":242100,"id_asignatura":1770,"codigo_evaluacion":"EV-807","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/11\/22","ponderacion":30}
	,{"_id":242400,"id_asignatura":1890,"codigo_evaluacion":"EV-808","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/11\/23","ponderacion":30}
	,{"_id":242700,"id_asignatura":3600,"codigo_evaluacion":"EV-809","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/02\/23","ponderacion":30}
	,{"_id":243000,"id_asignatura":390,"codigo_evaluacion":"EV-810","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/12\/22","ponderacion":30}
	,{"_id":243300,"id_asignatura":2010,"codigo_evaluacion":"EV-811","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/03\/25","ponderacion":30}
	,{"_id":243600,"id_asignatura":1740,"codigo_evaluacion":"EV-812","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/11\/23","ponderacion":50}
	,{"_id":243900,"id_asignatura":300,"codigo_evaluacion":"EV-813","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/03\/25","ponderacion":40}
	,{"_id":244200,"id_asignatura":1920,"codigo_evaluacion":"EV-814","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/12\/23","ponderacion":50}
	,{"_id":244500,"id_asignatura":2910,"codigo_evaluacion":"EV-815","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/10\/24","ponderacion":40}
	,{"_id":244800,"id_asignatura":1440,"codigo_evaluacion":"EV-816","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/09\/22","ponderacion":40}
	,{"_id":245100,"id_asignatura":930,"codigo_evaluacion":"EV-817","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"06\/07\/24","ponderacion":40}
	,{"_id":245400,"id_asignatura":1380,"codigo_evaluacion":"EV-818","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/12\/23","ponderacion":50}
	,{"_id":245700,"id_asignatura":1140,"codigo_evaluacion":"EV-819","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"12\/06\/23","ponderacion":40}
	,{"_id":246000,"id_asignatura":1200,"codigo_evaluacion":"EV-820","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"27\/08\/23","ponderacion":20}
	,{"_id":246300,"id_asignatura":3210,"codigo_evaluacion":"EV-821","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/03\/24","ponderacion":20}
	,{"_id":246600,"id_asignatura":2100,"codigo_evaluacion":"EV-822","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/09\/24","ponderacion":30}
	,{"_id":246900,"id_asignatura":3510,"codigo_evaluacion":"EV-823","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/09\/23","ponderacion":50}
	,{"_id":247200,"id_asignatura":2340,"codigo_evaluacion":"EV-824","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/09\/22","ponderacion":20}
	,{"_id":247500,"id_asignatura":810,"codigo_evaluacion":"EV-825","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/09\/22","ponderacion":40}
	,{"_id":247800,"id_asignatura":150,"codigo_evaluacion":"EV-826","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/01\/25","ponderacion":30}
	,{"_id":248100,"id_asignatura":1440,"codigo_evaluacion":"EV-827","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/10\/24","ponderacion":30}
	,{"_id":248400,"id_asignatura":3930,"codigo_evaluacion":"EV-828","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/05\/23","ponderacion":50}
	,{"_id":248700,"id_asignatura":3210,"codigo_evaluacion":"EV-829","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"19\/01\/24","ponderacion":50}
	,{"_id":249000,"id_asignatura":240,"codigo_evaluacion":"EV-830","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/10\/22","ponderacion":30}
	,{"_id":249300,"id_asignatura":690,"codigo_evaluacion":"EV-831","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"05\/04\/23","ponderacion":30}
	,{"_id":249600,"id_asignatura":3690,"codigo_evaluacion":"EV-832","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/06\/24","ponderacion":50}
	,{"_id":249900,"id_asignatura":2370,"codigo_evaluacion":"EV-833","tipo_evaluacion":"Tarea","fecha_evaluacion":"19\/11\/23","ponderacion":30}
	,{"_id":250200,"id_asignatura":180,"codigo_evaluacion":"EV-834","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"19\/04\/25","ponderacion":50}
	,{"_id":250500,"id_asignatura":2730,"codigo_evaluacion":"EV-835","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/09\/22","ponderacion":20}
	,{"_id":250800,"id_asignatura":3720,"codigo_evaluacion":"EV-836","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/02\/23","ponderacion":20}
	,{"_id":251100,"id_asignatura":3840,"codigo_evaluacion":"EV-837","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"31\/01\/23","ponderacion":50}
	,{"_id":251400,"id_asignatura":1350,"codigo_evaluacion":"EV-838","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"28\/09\/23","ponderacion":30}
	,{"_id":251700,"id_asignatura":330,"codigo_evaluacion":"EV-839","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/09\/23","ponderacion":50}
	,{"_id":252000,"id_asignatura":3630,"codigo_evaluacion":"EV-840","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/05\/24","ponderacion":50}
	,{"_id":252300,"id_asignatura":1620,"codigo_evaluacion":"EV-841","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/11\/22","ponderacion":30}
	,{"_id":252600,"id_asignatura":1170,"codigo_evaluacion":"EV-842","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"01\/04\/23","ponderacion":20}
	,{"_id":252900,"id_asignatura":4050,"codigo_evaluacion":"EV-843","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/05\/25","ponderacion":30}
	,{"_id":253200,"id_asignatura":570,"codigo_evaluacion":"EV-844","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"12\/01\/23","ponderacion":50}
	,{"_id":253500,"id_asignatura":1230,"codigo_evaluacion":"EV-845","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/03\/24","ponderacion":30}
	,{"_id":253800,"id_asignatura":2460,"codigo_evaluacion":"EV-846","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/07\/25","ponderacion":50}
	,{"_id":254100,"id_asignatura":2340,"codigo_evaluacion":"EV-847","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/08\/24","ponderacion":30}
	,{"_id":254400,"id_asignatura":1860,"codigo_evaluacion":"EV-848","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/06\/24","ponderacion":50}
	,{"_id":254700,"id_asignatura":3300,"codigo_evaluacion":"EV-849","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/02\/25","ponderacion":30}
	,{"_id":255000,"id_asignatura":1290,"codigo_evaluacion":"EV-850","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/11\/23","ponderacion":40}
	,{"_id":255300,"id_asignatura":3750,"codigo_evaluacion":"EV-851","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"18\/07\/23","ponderacion":20}
	,{"_id":255600,"id_asignatura":300,"codigo_evaluacion":"EV-852","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"20\/02\/25","ponderacion":40}
	,{"_id":255900,"id_asignatura":810,"codigo_evaluacion":"EV-853","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/01\/25","ponderacion":30}
	,{"_id":256200,"id_asignatura":840,"codigo_evaluacion":"EV-854","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/12\/22","ponderacion":30}
	,{"_id":256500,"id_asignatura":2100,"codigo_evaluacion":"EV-855","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/06\/23","ponderacion":30}
	,{"_id":256800,"id_asignatura":2430,"codigo_evaluacion":"EV-856","tipo_evaluacion":"Tarea","fecha_evaluacion":"15\/09\/22","ponderacion":20}
	,{"_id":257100,"id_asignatura":540,"codigo_evaluacion":"EV-857","tipo_evaluacion":"Tarea","fecha_evaluacion":"13\/08\/25","ponderacion":20}
	,{"_id":257400,"id_asignatura":1260,"codigo_evaluacion":"EV-858","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/08\/25","ponderacion":30}
	,{"_id":257700,"id_asignatura":510,"codigo_evaluacion":"EV-859","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/06\/24","ponderacion":20}
	,{"_id":258000,"id_asignatura":1200,"codigo_evaluacion":"EV-860","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/03\/25","ponderacion":30}
	,{"_id":258300,"id_asignatura":1020,"codigo_evaluacion":"EV-861","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/05\/24","ponderacion":40}
	,{"_id":258600,"id_asignatura":1200,"codigo_evaluacion":"EV-862","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/01\/24","ponderacion":50}
	,{"_id":258900,"id_asignatura":1770,"codigo_evaluacion":"EV-863","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"30\/06\/24","ponderacion":40}
	,{"_id":259200,"id_asignatura":900,"codigo_evaluacion":"EV-864","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/09\/23","ponderacion":30}
	,{"_id":259500,"id_asignatura":1830,"codigo_evaluacion":"EV-865","tipo_evaluacion":"Tarea","fecha_evaluacion":"30\/11\/22","ponderacion":30}
	,{"_id":259800,"id_asignatura":1380,"codigo_evaluacion":"EV-866","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"21\/10\/22","ponderacion":40}
	,{"_id":260100,"id_asignatura":2610,"codigo_evaluacion":"EV-867","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/07\/23","ponderacion":30}
	,{"_id":260400,"id_asignatura":3690,"codigo_evaluacion":"EV-868","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"21\/06\/23","ponderacion":30}
	,{"_id":260700,"id_asignatura":2130,"codigo_evaluacion":"EV-869","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/06\/24","ponderacion":50}
	,{"_id":261000,"id_asignatura":270,"codigo_evaluacion":"EV-870","tipo_evaluacion":"Tarea","fecha_evaluacion":"20\/11\/22","ponderacion":30}
	,{"_id":261300,"id_asignatura":810,"codigo_evaluacion":"EV-871","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/08\/23","ponderacion":20}
	,{"_id":261600,"id_asignatura":3960,"codigo_evaluacion":"EV-872","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"08\/09\/22","ponderacion":30}
	,{"_id":261900,"id_asignatura":120,"codigo_evaluacion":"EV-873","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/11\/24","ponderacion":30}
	,{"_id":262200,"id_asignatura":2940,"codigo_evaluacion":"EV-874","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/05\/23","ponderacion":40}
	,{"_id":262500,"id_asignatura":1080,"codigo_evaluacion":"EV-875","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/08\/23","ponderacion":20}
	,{"_id":262800,"id_asignatura":1230,"codigo_evaluacion":"EV-876","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/05\/23","ponderacion":50}
	,{"_id":263100,"id_asignatura":1260,"codigo_evaluacion":"EV-877","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/11\/24","ponderacion":50}
	,{"_id":263400,"id_asignatura":1500,"codigo_evaluacion":"EV-878","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/09\/23","ponderacion":30}
	,{"_id":263700,"id_asignatura":1770,"codigo_evaluacion":"EV-879","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/01\/25","ponderacion":40}
	,{"_id":264000,"id_asignatura":3690,"codigo_evaluacion":"EV-880","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/05\/23","ponderacion":30}
	,{"_id":264300,"id_asignatura":2400,"codigo_evaluacion":"EV-881","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/09\/22","ponderacion":20}
	,{"_id":264600,"id_asignatura":2400,"codigo_evaluacion":"EV-882","tipo_evaluacion":"Tarea","fecha_evaluacion":"16\/06\/25","ponderacion":20}
	,{"_id":264900,"id_asignatura":1080,"codigo_evaluacion":"EV-883","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"13\/02\/25","ponderacion":30}
	,{"_id":265200,"id_asignatura":960,"codigo_evaluacion":"EV-884","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/12\/23","ponderacion":40}
	,{"_id":265500,"id_asignatura":2430,"codigo_evaluacion":"EV-885","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/03\/25","ponderacion":30}
	,{"_id":265800,"id_asignatura":3360,"codigo_evaluacion":"EV-886","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"10\/02\/23","ponderacion":30}
	,{"_id":266100,"id_asignatura":720,"codigo_evaluacion":"EV-887","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/07\/24","ponderacion":30}
	,{"_id":266400,"id_asignatura":2310,"codigo_evaluacion":"EV-888","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/10\/24","ponderacion":40}
	,{"_id":266700,"id_asignatura":90,"codigo_evaluacion":"EV-889","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/11\/23","ponderacion":30}
	,{"_id":267000,"id_asignatura":1980,"codigo_evaluacion":"EV-890","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"18\/08\/24","ponderacion":50}
	,{"_id":267300,"id_asignatura":1050,"codigo_evaluacion":"EV-891","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"25\/07\/23","ponderacion":30}
	,{"_id":267600,"id_asignatura":2760,"codigo_evaluacion":"EV-892","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/10\/22","ponderacion":40}
	,{"_id":267900,"id_asignatura":1980,"codigo_evaluacion":"EV-893","tipo_evaluacion":"Tarea","fecha_evaluacion":"11\/03\/25","ponderacion":50}
	,{"_id":268200,"id_asignatura":2880,"codigo_evaluacion":"EV-894","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/11\/22","ponderacion":20}
	,{"_id":268500,"id_asignatura":2880,"codigo_evaluacion":"EV-895","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/04\/24","ponderacion":50}
	,{"_id":268800,"id_asignatura":1380,"codigo_evaluacion":"EV-896","tipo_evaluacion":"Tarea","fecha_evaluacion":"03\/05\/23","ponderacion":20}
	,{"_id":269100,"id_asignatura":270,"codigo_evaluacion":"EV-897","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/07\/24","ponderacion":40}
	,{"_id":269400,"id_asignatura":1440,"codigo_evaluacion":"EV-898","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"24\/03\/25","ponderacion":30}
	,{"_id":269700,"id_asignatura":480,"codigo_evaluacion":"EV-899","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/02\/24","ponderacion":30}
	,{"_id":270000,"id_asignatura":2370,"codigo_evaluacion":"EV-900","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/06\/23","ponderacion":50}
	,{"_id":270300,"id_asignatura":840,"codigo_evaluacion":"EV-901","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/06\/25","ponderacion":30}
	,{"_id":270600,"id_asignatura":3300,"codigo_evaluacion":"EV-902","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/03\/25","ponderacion":50}
	,{"_id":270900,"id_asignatura":120,"codigo_evaluacion":"EV-903","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/06\/25","ponderacion":40}
	,{"_id":271200,"id_asignatura":3720,"codigo_evaluacion":"EV-904","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/10\/24","ponderacion":30}
	,{"_id":271500,"id_asignatura":1980,"codigo_evaluacion":"EV-905","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/12\/24","ponderacion":50}
	,{"_id":271800,"id_asignatura":2220,"codigo_evaluacion":"EV-906","tipo_evaluacion":"Tarea","fecha_evaluacion":"17\/02\/24","ponderacion":40}
	,{"_id":272100,"id_asignatura":120,"codigo_evaluacion":"EV-907","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/11\/22","ponderacion":30}
	,{"_id":272400,"id_asignatura":3420,"codigo_evaluacion":"EV-908","tipo_evaluacion":"Tarea","fecha_evaluacion":"05\/03\/23","ponderacion":30}
	,{"_id":272700,"id_asignatura":1680,"codigo_evaluacion":"EV-909","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"13\/01\/23","ponderacion":40}
	,{"_id":273000,"id_asignatura":180,"codigo_evaluacion":"EV-910","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/01\/25","ponderacion":30}
	,{"_id":273300,"id_asignatura":780,"codigo_evaluacion":"EV-911","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/03\/23","ponderacion":20}
	,{"_id":273600,"id_asignatura":2640,"codigo_evaluacion":"EV-912","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"16\/05\/25","ponderacion":20}
	,{"_id":273900,"id_asignatura":1020,"codigo_evaluacion":"EV-913","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/03\/24","ponderacion":30}
	,{"_id":274200,"id_asignatura":3330,"codigo_evaluacion":"EV-914","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/10\/22","ponderacion":40}
	,{"_id":274500,"id_asignatura":1740,"codigo_evaluacion":"EV-915","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/02\/24","ponderacion":40}
	,{"_id":274800,"id_asignatura":1740,"codigo_evaluacion":"EV-916","tipo_evaluacion":"Tarea","fecha_evaluacion":"18\/05\/25","ponderacion":30}
	,{"_id":275100,"id_asignatura":30,"codigo_evaluacion":"EV-917","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/02\/23","ponderacion":30}
	,{"_id":275400,"id_asignatura":150,"codigo_evaluacion":"EV-918","tipo_evaluacion":"Tarea","fecha_evaluacion":"14\/12\/22","ponderacion":50}
	,{"_id":275700,"id_asignatura":1350,"codigo_evaluacion":"EV-919","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/03\/24","ponderacion":20}
	,{"_id":276000,"id_asignatura":600,"codigo_evaluacion":"EV-920","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/10\/23","ponderacion":50}
	,{"_id":276300,"id_asignatura":120,"codigo_evaluacion":"EV-921","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/09\/23","ponderacion":40}
	,{"_id":276600,"id_asignatura":1530,"codigo_evaluacion":"EV-922","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/01\/25","ponderacion":40}
	,{"_id":276900,"id_asignatura":2250,"codigo_evaluacion":"EV-923","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/10\/24","ponderacion":20}
	,{"_id":277200,"id_asignatura":1320,"codigo_evaluacion":"EV-924","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/07\/23","ponderacion":20}
	,{"_id":277500,"id_asignatura":1350,"codigo_evaluacion":"EV-925","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"31\/05\/24","ponderacion":30}
	,{"_id":277800,"id_asignatura":2010,"codigo_evaluacion":"EV-926","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"05\/12\/24","ponderacion":40}
	,{"_id":278100,"id_asignatura":3810,"codigo_evaluacion":"EV-927","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/07\/24","ponderacion":20}
	,{"_id":278400,"id_asignatura":3330,"codigo_evaluacion":"EV-928","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/11\/24","ponderacion":50}
	,{"_id":278700,"id_asignatura":3150,"codigo_evaluacion":"EV-929","tipo_evaluacion":"Tarea","fecha_evaluacion":"29\/09\/24","ponderacion":30}
	,{"_id":279000,"id_asignatura":1710,"codigo_evaluacion":"EV-930","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/03\/25","ponderacion":30}
	,{"_id":279300,"id_asignatura":3780,"codigo_evaluacion":"EV-931","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/07\/23","ponderacion":30}
	,{"_id":279600,"id_asignatura":3960,"codigo_evaluacion":"EV-932","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/08\/24","ponderacion":20}
	,{"_id":279900,"id_asignatura":1650,"codigo_evaluacion":"EV-933","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/05\/24","ponderacion":20}
	,{"_id":280200,"id_asignatura":3420,"codigo_evaluacion":"EV-934","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"31\/05\/25","ponderacion":40}
	,{"_id":280500,"id_asignatura":810,"codigo_evaluacion":"EV-935","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/01\/25","ponderacion":20}
	,{"_id":280800,"id_asignatura":3480,"codigo_evaluacion":"EV-936","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/07\/23","ponderacion":30}
	,{"_id":281100,"id_asignatura":3780,"codigo_evaluacion":"EV-937","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/12\/23","ponderacion":20}
	,{"_id":281400,"id_asignatura":3690,"codigo_evaluacion":"EV-938","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/09\/24","ponderacion":40}
	,{"_id":281700,"id_asignatura":3390,"codigo_evaluacion":"EV-939","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/12\/23","ponderacion":20}
	,{"_id":282000,"id_asignatura":1320,"codigo_evaluacion":"EV-940","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/03\/24","ponderacion":30}
	,{"_id":282300,"id_asignatura":1230,"codigo_evaluacion":"EV-941","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"04\/06\/23","ponderacion":50}
	,{"_id":282600,"id_asignatura":3660,"codigo_evaluacion":"EV-942","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/12\/23","ponderacion":40}
	,{"_id":282900,"id_asignatura":2040,"codigo_evaluacion":"EV-943","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"08\/01\/24","ponderacion":20}
	,{"_id":283200,"id_asignatura":2460,"codigo_evaluacion":"EV-944","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"02\/10\/23","ponderacion":30}
	,{"_id":283500,"id_asignatura":3570,"codigo_evaluacion":"EV-945","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/08\/24","ponderacion":30}
	,{"_id":283800,"id_asignatura":2070,"codigo_evaluacion":"EV-946","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"12\/06\/25","ponderacion":20}
	,{"_id":284100,"id_asignatura":3060,"codigo_evaluacion":"EV-947","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/01\/23","ponderacion":20}
	,{"_id":284400,"id_asignatura":240,"codigo_evaluacion":"EV-948","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/03\/24","ponderacion":40}
	,{"_id":284700,"id_asignatura":960,"codigo_evaluacion":"EV-949","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/07\/24","ponderacion":50}
	,{"_id":285000,"id_asignatura":1710,"codigo_evaluacion":"EV-950","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"21\/07\/25","ponderacion":20}
	,{"_id":285300,"id_asignatura":2850,"codigo_evaluacion":"EV-951","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/01\/25","ponderacion":20}
	,{"_id":285600,"id_asignatura":3900,"codigo_evaluacion":"EV-952","tipo_evaluacion":"Tarea","fecha_evaluacion":"30\/07\/24","ponderacion":20}
	,{"_id":285900,"id_asignatura":2220,"codigo_evaluacion":"EV-953","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"08\/07\/24","ponderacion":30}
	,{"_id":286200,"id_asignatura":2160,"codigo_evaluacion":"EV-954","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/10\/24","ponderacion":50}
	,{"_id":286500,"id_asignatura":930,"codigo_evaluacion":"EV-955","tipo_evaluacion":"Tarea","fecha_evaluacion":"14\/09\/22","ponderacion":50}
	,{"_id":286800,"id_asignatura":2640,"codigo_evaluacion":"EV-956","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"13\/03\/23","ponderacion":40}
	,{"_id":287100,"id_asignatura":3720,"codigo_evaluacion":"EV-957","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/06\/23","ponderacion":20}
	,{"_id":287400,"id_asignatura":480,"codigo_evaluacion":"EV-958","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/05\/23","ponderacion":50}
	,{"_id":287700,"id_asignatura":3780,"codigo_evaluacion":"EV-959","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/05\/24","ponderacion":30}
	,{"_id":288000,"id_asignatura":2700,"codigo_evaluacion":"EV-960","tipo_evaluacion":"Tarea","fecha_evaluacion":"18\/07\/24","ponderacion":20}
	,{"_id":288300,"id_asignatura":3450,"codigo_evaluacion":"EV-961","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/04\/23","ponderacion":40}
	,{"_id":288600,"id_asignatura":2040,"codigo_evaluacion":"EV-962","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"29\/06\/25","ponderacion":50}
	,{"_id":288900,"id_asignatura":1230,"codigo_evaluacion":"EV-963","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/09\/22","ponderacion":50}
	,{"_id":289200,"id_asignatura":2370,"codigo_evaluacion":"EV-964","tipo_evaluacion":"Tarea","fecha_evaluacion":"01\/03\/24","ponderacion":40}
	,{"_id":289500,"id_asignatura":2940,"codigo_evaluacion":"EV-965","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/03\/24","ponderacion":30}
	,{"_id":289800,"id_asignatura":1020,"codigo_evaluacion":"EV-966","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/12\/24","ponderacion":30}
	,{"_id":290100,"id_asignatura":1500,"codigo_evaluacion":"EV-967","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/09\/22","ponderacion":30}
	,{"_id":290400,"id_asignatura":1200,"codigo_evaluacion":"EV-968","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/09\/23","ponderacion":40}
	,{"_id":290700,"id_asignatura":360,"codigo_evaluacion":"EV-969","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/11\/23","ponderacion":30}
	,{"_id":291000,"id_asignatura":1980,"codigo_evaluacion":"EV-970","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/03\/25","ponderacion":20}
	,{"_id":291300,"id_asignatura":2490,"codigo_evaluacion":"EV-971","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/05\/23","ponderacion":40}
	,{"_id":291600,"id_asignatura":120,"codigo_evaluacion":"EV-972","tipo_evaluacion":"Tarea","fecha_evaluacion":"13\/01\/24","ponderacion":50}
	,{"_id":291900,"id_asignatura":1170,"codigo_evaluacion":"EV-973","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"11\/05\/24","ponderacion":30}
	,{"_id":292200,"id_asignatura":1290,"codigo_evaluacion":"EV-974","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/01\/23","ponderacion":50}
	,{"_id":292500,"id_asignatura":3780,"codigo_evaluacion":"EV-975","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/08\/24","ponderacion":30}
	,{"_id":292800,"id_asignatura":630,"codigo_evaluacion":"EV-976","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/11\/24","ponderacion":30}
	,{"_id":293100,"id_asignatura":3900,"codigo_evaluacion":"EV-977","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/02\/24","ponderacion":40}
	,{"_id":293400,"id_asignatura":870,"codigo_evaluacion":"EV-978","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/01\/24","ponderacion":20}
	,{"_id":293700,"id_asignatura":1620,"codigo_evaluacion":"EV-979","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"16\/06\/24","ponderacion":30}
	,{"_id":294000,"id_asignatura":630,"codigo_evaluacion":"EV-980","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/09\/22","ponderacion":30}
	,{"_id":294300,"id_asignatura":1500,"codigo_evaluacion":"EV-981","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"01\/11\/23","ponderacion":30}
	,{"_id":294600,"id_asignatura":600,"codigo_evaluacion":"EV-982","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/07\/25","ponderacion":40}
	,{"_id":294900,"id_asignatura":90,"codigo_evaluacion":"EV-983","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"26\/12\/24","ponderacion":30}
	,{"_id":295200,"id_asignatura":960,"codigo_evaluacion":"EV-984","tipo_evaluacion":"Tarea","fecha_evaluacion":"27\/04\/23","ponderacion":40}
	,{"_id":295500,"id_asignatura":3630,"codigo_evaluacion":"EV-985","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"15\/03\/24","ponderacion":40}
	,{"_id":295800,"id_asignatura":1680,"codigo_evaluacion":"EV-986","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/11\/22","ponderacion":50}
	,{"_id":296100,"id_asignatura":3300,"codigo_evaluacion":"EV-987","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/10\/23","ponderacion":40}
	,{"_id":296400,"id_asignatura":150,"codigo_evaluacion":"EV-988","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/10\/22","ponderacion":40}
	,{"_id":296700,"id_asignatura":660,"codigo_evaluacion":"EV-989","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"11\/09\/24","ponderacion":30}
	,{"_id":297000,"id_asignatura":540,"codigo_evaluacion":"EV-990","tipo_evaluacion":"Tarea","fecha_evaluacion":"01\/12\/24","ponderacion":40}
	,{"_id":297300,"id_asignatura":4020,"codigo_evaluacion":"EV-991","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/08\/25","ponderacion":50}
	,{"_id":297600,"id_asignatura":990,"codigo_evaluacion":"EV-992","tipo_evaluacion":"Tarea","fecha_evaluacion":"14\/11\/23","ponderacion":40}
	,{"_id":297900,"id_asignatura":2760,"codigo_evaluacion":"EV-993","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"01\/09\/23","ponderacion":30}
	,{"_id":298200,"id_asignatura":1950,"codigo_evaluacion":"EV-994","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/01\/24","ponderacion":20}
	,{"_id":298500,"id_asignatura":3750,"codigo_evaluacion":"EV-995","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"29\/03\/24","ponderacion":20}
	,{"_id":298800,"id_asignatura":1680,"codigo_evaluacion":"EV-996","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/10\/24","ponderacion":30}
	,{"_id":299100,"id_asignatura":3570,"codigo_evaluacion":"EV-997","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/12\/24","ponderacion":20}
	,{"_id":299400,"id_asignatura":3060,"codigo_evaluacion":"EV-998","tipo_evaluacion":"Tarea","fecha_evaluacion":"12\/05\/24","ponderacion":20}
	,{"_id":299700,"id_asignatura":690,"codigo_evaluacion":"EV-999","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"27\/06\/25","ponderacion":20}
	,{"_id":300000,"id_asignatura":330,"codigo_evaluacion":"EV-1000","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/09\/22","ponderacion":50}
	,{"_id":300300,"id_asignatura":90,"codigo_evaluacion":"EV-1001","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/03\/24","ponderacion":40}
	,{"_id":300600,"id_asignatura":840,"codigo_evaluacion":"EV-1002","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/03\/23","ponderacion":30}
	,{"_id":300900,"id_asignatura":3810,"codigo_evaluacion":"EV-1003","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/10\/23","ponderacion":40}
	,{"_id":301200,"id_asignatura":3720,"codigo_evaluacion":"EV-1004","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/12\/23","ponderacion":30}
	,{"_id":301500,"id_asignatura":810,"codigo_evaluacion":"EV-1005","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"21\/11\/23","ponderacion":40}
	,{"_id":301800,"id_asignatura":2850,"codigo_evaluacion":"EV-1006","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/03\/24","ponderacion":20}
	,{"_id":302100,"id_asignatura":1200,"codigo_evaluacion":"EV-1007","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/02\/23","ponderacion":50}
	,{"_id":302400,"id_asignatura":3990,"codigo_evaluacion":"EV-1008","tipo_evaluacion":"Tarea","fecha_evaluacion":"11\/03\/23","ponderacion":30}
	,{"_id":302700,"id_asignatura":600,"codigo_evaluacion":"EV-1009","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/04\/23","ponderacion":20}
	,{"_id":303000,"id_asignatura":3810,"codigo_evaluacion":"EV-1010","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/07\/25","ponderacion":20}
	,{"_id":303300,"id_asignatura":1470,"codigo_evaluacion":"EV-1011","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/06\/25","ponderacion":30}
	,{"_id":303600,"id_asignatura":2130,"codigo_evaluacion":"EV-1012","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/06\/23","ponderacion":40}
	,{"_id":303900,"id_asignatura":720,"codigo_evaluacion":"EV-1013","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"12\/11\/22","ponderacion":30}
	,{"_id":304200,"id_asignatura":3420,"codigo_evaluacion":"EV-1014","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/11\/24","ponderacion":40}
	,{"_id":304500,"id_asignatura":2370,"codigo_evaluacion":"EV-1015","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/02\/23","ponderacion":50}
	,{"_id":304800,"id_asignatura":1140,"codigo_evaluacion":"EV-1016","tipo_evaluacion":"Tarea","fecha_evaluacion":"01\/02\/24","ponderacion":30}
	,{"_id":305100,"id_asignatura":1200,"codigo_evaluacion":"EV-1017","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/04\/25","ponderacion":20}
	,{"_id":305400,"id_asignatura":3420,"codigo_evaluacion":"EV-1018","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/02\/24","ponderacion":50}
	,{"_id":305700,"id_asignatura":2520,"codigo_evaluacion":"EV-1019","tipo_evaluacion":"Tarea","fecha_evaluacion":"10\/12\/23","ponderacion":30}
	,{"_id":306000,"id_asignatura":3600,"codigo_evaluacion":"EV-1020","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"24\/05\/25","ponderacion":30}
	,{"_id":306300,"id_asignatura":390,"codigo_evaluacion":"EV-1021","tipo_evaluacion":"Tarea","fecha_evaluacion":"19\/08\/24","ponderacion":20}
	,{"_id":306600,"id_asignatura":1950,"codigo_evaluacion":"EV-1022","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/12\/23","ponderacion":40}
	,{"_id":306900,"id_asignatura":720,"codigo_evaluacion":"EV-1023","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"15\/05\/24","ponderacion":40}
	,{"_id":307200,"id_asignatura":2220,"codigo_evaluacion":"EV-1024","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"24\/03\/25","ponderacion":40}
	,{"_id":307500,"id_asignatura":840,"codigo_evaluacion":"EV-1025","tipo_evaluacion":"Tarea","fecha_evaluacion":"06\/04\/25","ponderacion":40}
	,{"_id":307800,"id_asignatura":3870,"codigo_evaluacion":"EV-1026","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/08\/24","ponderacion":20}
	,{"_id":308100,"id_asignatura":660,"codigo_evaluacion":"EV-1027","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/08\/24","ponderacion":30}
	,{"_id":308400,"id_asignatura":120,"codigo_evaluacion":"EV-1028","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/02\/23","ponderacion":50}
	,{"_id":308700,"id_asignatura":3840,"codigo_evaluacion":"EV-1029","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"27\/06\/23","ponderacion":30}
	,{"_id":309000,"id_asignatura":3960,"codigo_evaluacion":"EV-1030","tipo_evaluacion":"Tarea","fecha_evaluacion":"07\/01\/25","ponderacion":20}
	,{"_id":309300,"id_asignatura":450,"codigo_evaluacion":"EV-1031","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/06\/25","ponderacion":50}
	,{"_id":309600,"id_asignatura":1470,"codigo_evaluacion":"EV-1032","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/01\/24","ponderacion":20}
	,{"_id":309900,"id_asignatura":3240,"codigo_evaluacion":"EV-1033","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/03\/25","ponderacion":30}
	,{"_id":310200,"id_asignatura":3360,"codigo_evaluacion":"EV-1034","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/01\/25","ponderacion":30}
	,{"_id":310500,"id_asignatura":1290,"codigo_evaluacion":"EV-1035","tipo_evaluacion":"Tarea","fecha_evaluacion":"30\/05\/24","ponderacion":40}
	,{"_id":310800,"id_asignatura":3810,"codigo_evaluacion":"EV-1036","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"03\/11\/22","ponderacion":50}
	,{"_id":311100,"id_asignatura":3780,"codigo_evaluacion":"EV-1037","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"06\/01\/23","ponderacion":20}
	,{"_id":311400,"id_asignatura":360,"codigo_evaluacion":"EV-1038","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/07\/25","ponderacion":40}
	,{"_id":311700,"id_asignatura":3240,"codigo_evaluacion":"EV-1039","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"25\/09\/24","ponderacion":50}
	,{"_id":312000,"id_asignatura":2580,"codigo_evaluacion":"EV-1040","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"13\/09\/22","ponderacion":40}
	,{"_id":312300,"id_asignatura":120,"codigo_evaluacion":"EV-1041","tipo_evaluacion":"Tarea","fecha_evaluacion":"14\/04\/24","ponderacion":20}
	,{"_id":312600,"id_asignatura":2910,"codigo_evaluacion":"EV-1042","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"15\/09\/23","ponderacion":20}
	,{"_id":312900,"id_asignatura":1290,"codigo_evaluacion":"EV-1043","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"02\/10\/24","ponderacion":30}
	,{"_id":313200,"id_asignatura":180,"codigo_evaluacion":"EV-1044","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/03\/25","ponderacion":40}
	,{"_id":313500,"id_asignatura":2070,"codigo_evaluacion":"EV-1045","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/05\/24","ponderacion":40}
	,{"_id":313800,"id_asignatura":480,"codigo_evaluacion":"EV-1046","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"28\/04\/24","ponderacion":50}
	,{"_id":314100,"id_asignatura":3990,"codigo_evaluacion":"EV-1047","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"04\/10\/23","ponderacion":40}
	,{"_id":314400,"id_asignatura":3990,"codigo_evaluacion":"EV-1048","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/08\/23","ponderacion":40}
	,{"_id":314700,"id_asignatura":3810,"codigo_evaluacion":"EV-1049","tipo_evaluacion":"Tarea","fecha_evaluacion":"09\/06\/24","ponderacion":40}
	,{"_id":315000,"id_asignatura":1410,"codigo_evaluacion":"EV-1050","tipo_evaluacion":"Tarea","fecha_evaluacion":"30\/12\/23","ponderacion":40}
	,{"_id":315300,"id_asignatura":510,"codigo_evaluacion":"EV-1051","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/04\/23","ponderacion":50}
	,{"_id":315600,"id_asignatura":3180,"codigo_evaluacion":"EV-1052","tipo_evaluacion":"Tarea","fecha_evaluacion":"01\/12\/22","ponderacion":20}
	,{"_id":315900,"id_asignatura":2190,"codigo_evaluacion":"EV-1053","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"07\/04\/23","ponderacion":50}
	,{"_id":316200,"id_asignatura":3090,"codigo_evaluacion":"EV-1054","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/02\/24","ponderacion":40}
	,{"_id":316500,"id_asignatura":1470,"codigo_evaluacion":"EV-1055","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/05\/24","ponderacion":50}
	,{"_id":316800,"id_asignatura":2250,"codigo_evaluacion":"EV-1056","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/01\/24","ponderacion":20}
	,{"_id":317100,"id_asignatura":2310,"codigo_evaluacion":"EV-1057","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/02\/25","ponderacion":40}
	,{"_id":317400,"id_asignatura":600,"codigo_evaluacion":"EV-1058","tipo_evaluacion":"Tarea","fecha_evaluacion":"13\/04\/23","ponderacion":40}
	,{"_id":317700,"id_asignatura":3000,"codigo_evaluacion":"EV-1059","tipo_evaluacion":"Tarea","fecha_evaluacion":"17\/09\/23","ponderacion":30}
	,{"_id":318000,"id_asignatura":2040,"codigo_evaluacion":"EV-1060","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"29\/02\/24","ponderacion":30}
	,{"_id":318300,"id_asignatura":1620,"codigo_evaluacion":"EV-1061","tipo_evaluacion":"Tarea","fecha_evaluacion":"29\/10\/24","ponderacion":30}
	,{"_id":318600,"id_asignatura":1740,"codigo_evaluacion":"EV-1062","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/05\/24","ponderacion":20}
	,{"_id":318900,"id_asignatura":510,"codigo_evaluacion":"EV-1063","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/09\/22","ponderacion":50}
	,{"_id":319200,"id_asignatura":1350,"codigo_evaluacion":"EV-1064","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/03\/25","ponderacion":50}
	,{"_id":319500,"id_asignatura":2250,"codigo_evaluacion":"EV-1065","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"27\/12\/22","ponderacion":40}
	,{"_id":319800,"id_asignatura":60,"codigo_evaluacion":"EV-1066","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"19\/03\/24","ponderacion":40}
	,{"_id":320100,"id_asignatura":2490,"codigo_evaluacion":"EV-1067","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/11\/22","ponderacion":20}
	,{"_id":320400,"id_asignatura":1350,"codigo_evaluacion":"EV-1068","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/05\/25","ponderacion":40}
	,{"_id":320700,"id_asignatura":990,"codigo_evaluacion":"EV-1069","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/12\/23","ponderacion":40}
	,{"_id":321000,"id_asignatura":4050,"codigo_evaluacion":"EV-1070","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"23\/05\/24","ponderacion":30}
	,{"_id":321300,"id_asignatura":3030,"codigo_evaluacion":"EV-1071","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"17\/07\/24","ponderacion":30}
	,{"_id":321600,"id_asignatura":1140,"codigo_evaluacion":"EV-1072","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"26\/02\/25","ponderacion":40}
	,{"_id":321900,"id_asignatura":2610,"codigo_evaluacion":"EV-1073","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"12\/08\/23","ponderacion":50}
	,{"_id":322200,"id_asignatura":3960,"codigo_evaluacion":"EV-1074","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/03\/25","ponderacion":30}
	,{"_id":322500,"id_asignatura":3180,"codigo_evaluacion":"EV-1075","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"17\/01\/25","ponderacion":20}
	,{"_id":322800,"id_asignatura":3840,"codigo_evaluacion":"EV-1076","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"18\/04\/23","ponderacion":30}
	,{"_id":323100,"id_asignatura":3600,"codigo_evaluacion":"EV-1077","tipo_evaluacion":"Tarea","fecha_evaluacion":"28\/05\/25","ponderacion":40}
	,{"_id":323400,"id_asignatura":3420,"codigo_evaluacion":"EV-1078","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/11\/22","ponderacion":50}
	,{"_id":323700,"id_asignatura":690,"codigo_evaluacion":"EV-1079","tipo_evaluacion":"Tarea","fecha_evaluacion":"01\/09\/23","ponderacion":50}
	,{"_id":324000,"id_asignatura":1980,"codigo_evaluacion":"EV-1080","tipo_evaluacion":"Tarea","fecha_evaluacion":"26\/03\/24","ponderacion":50}
	,{"_id":324300,"id_asignatura":2430,"codigo_evaluacion":"EV-1081","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"03\/06\/24","ponderacion":20}
	,{"_id":324600,"id_asignatura":2640,"codigo_evaluacion":"EV-1082","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/08\/25","ponderacion":40}
	,{"_id":324900,"id_asignatura":420,"codigo_evaluacion":"EV-1083","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/08\/24","ponderacion":40}
	,{"_id":325200,"id_asignatura":3570,"codigo_evaluacion":"EV-1084","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"09\/01\/25","ponderacion":40}
	,{"_id":325500,"id_asignatura":3990,"codigo_evaluacion":"EV-1085","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"01\/08\/25","ponderacion":20}
	,{"_id":325800,"id_asignatura":1470,"codigo_evaluacion":"EV-1086","tipo_evaluacion":"Tarea","fecha_evaluacion":"29\/10\/22","ponderacion":30}
	,{"_id":326100,"id_asignatura":2010,"codigo_evaluacion":"EV-1087","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"22\/11\/22","ponderacion":40}
	,{"_id":326400,"id_asignatura":2490,"codigo_evaluacion":"EV-1088","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/11\/24","ponderacion":30}
	,{"_id":326700,"id_asignatura":990,"codigo_evaluacion":"EV-1089","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"21\/05\/23","ponderacion":50}
	,{"_id":327000,"id_asignatura":780,"codigo_evaluacion":"EV-1090","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/02\/24","ponderacion":30}
	,{"_id":327300,"id_asignatura":960,"codigo_evaluacion":"EV-1091","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"12\/01\/25","ponderacion":50}
	,{"_id":327600,"id_asignatura":2370,"codigo_evaluacion":"EV-1092","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/07\/24","ponderacion":40}
	,{"_id":327900,"id_asignatura":1290,"codigo_evaluacion":"EV-1093","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/06\/23","ponderacion":50}
	,{"_id":328200,"id_asignatura":2250,"codigo_evaluacion":"EV-1094","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/10\/22","ponderacion":30}
	,{"_id":328500,"id_asignatura":3240,"codigo_evaluacion":"EV-1095","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"21\/06\/23","ponderacion":30}
	,{"_id":328800,"id_asignatura":3690,"codigo_evaluacion":"EV-1096","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/08\/24","ponderacion":50}
	,{"_id":329100,"id_asignatura":3630,"codigo_evaluacion":"EV-1097","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/11\/22","ponderacion":20}
	,{"_id":329400,"id_asignatura":1830,"codigo_evaluacion":"EV-1098","tipo_evaluacion":"Tarea","fecha_evaluacion":"29\/09\/23","ponderacion":30}
	,{"_id":329700,"id_asignatura":2190,"codigo_evaluacion":"EV-1099","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"08\/10\/24","ponderacion":30}
	,{"_id":330000,"id_asignatura":2790,"codigo_evaluacion":"EV-1100","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"21\/04\/24","ponderacion":20}
	,{"_id":330300,"id_asignatura":1980,"codigo_evaluacion":"EV-1101","tipo_evaluacion":"Tarea","fecha_evaluacion":"15\/05\/23","ponderacion":30}
	,{"_id":330600,"id_asignatura":180,"codigo_evaluacion":"EV-1102","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"31\/05\/25","ponderacion":30}
	,{"_id":330900,"id_asignatura":2130,"codigo_evaluacion":"EV-1103","tipo_evaluacion":"Tarea","fecha_evaluacion":"20\/02\/23","ponderacion":40}
	,{"_id":331200,"id_asignatura":2460,"codigo_evaluacion":"EV-1104","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"21\/02\/23","ponderacion":30}
	,{"_id":331500,"id_asignatura":270,"codigo_evaluacion":"EV-1105","tipo_evaluacion":"Tarea","fecha_evaluacion":"25\/08\/24","ponderacion":40}
	,{"_id":331800,"id_asignatura":2670,"codigo_evaluacion":"EV-1106","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/05\/24","ponderacion":40}
	,{"_id":332100,"id_asignatura":3180,"codigo_evaluacion":"EV-1107","tipo_evaluacion":"Tarea","fecha_evaluacion":"23\/06\/23","ponderacion":20}
	,{"_id":332400,"id_asignatura":3930,"codigo_evaluacion":"EV-1108","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/12\/22","ponderacion":20}
	,{"_id":332700,"id_asignatura":4020,"codigo_evaluacion":"EV-1109","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"03\/08\/23","ponderacion":20}
	,{"_id":333000,"id_asignatura":210,"codigo_evaluacion":"EV-1110","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/06\/24","ponderacion":30}
	,{"_id":333300,"id_asignatura":660,"codigo_evaluacion":"EV-1111","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"03\/09\/24","ponderacion":50}
	,{"_id":333600,"id_asignatura":180,"codigo_evaluacion":"EV-1112","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"16\/12\/23","ponderacion":20}
	,{"_id":333900,"id_asignatura":690,"codigo_evaluacion":"EV-1113","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"08\/09\/24","ponderacion":20}
	,{"_id":334200,"id_asignatura":3030,"codigo_evaluacion":"EV-1114","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/03\/23","ponderacion":50}
	,{"_id":334500,"id_asignatura":300,"codigo_evaluacion":"EV-1115","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"14\/04\/23","ponderacion":30}
	,{"_id":334800,"id_asignatura":3390,"codigo_evaluacion":"EV-1116","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/02\/25","ponderacion":20}
	,{"_id":335100,"id_asignatura":2070,"codigo_evaluacion":"EV-1117","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"17\/07\/24","ponderacion":20}
	,{"_id":335400,"id_asignatura":3300,"codigo_evaluacion":"EV-1118","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/01\/23","ponderacion":40}
	,{"_id":335700,"id_asignatura":1080,"codigo_evaluacion":"EV-1119","tipo_evaluacion":"Tarea","fecha_evaluacion":"14\/04\/25","ponderacion":40}
	,{"_id":336000,"id_asignatura":2070,"codigo_evaluacion":"EV-1120","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/08\/25","ponderacion":50}
	,{"_id":336300,"id_asignatura":510,"codigo_evaluacion":"EV-1121","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/01\/24","ponderacion":50}
	,{"_id":336600,"id_asignatura":3780,"codigo_evaluacion":"EV-1122","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"28\/11\/22","ponderacion":50}
	,{"_id":336900,"id_asignatura":1140,"codigo_evaluacion":"EV-1123","tipo_evaluacion":"Tarea","fecha_evaluacion":"14\/12\/24","ponderacion":50}
	,{"_id":337200,"id_asignatura":1770,"codigo_evaluacion":"EV-1124","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"02\/09\/23","ponderacion":40}
	,{"_id":337500,"id_asignatura":3540,"codigo_evaluacion":"EV-1125","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"28\/01\/24","ponderacion":50}
	,{"_id":337800,"id_asignatura":1950,"codigo_evaluacion":"EV-1126","tipo_evaluacion":"Tarea","fecha_evaluacion":"16\/10\/24","ponderacion":30}
	,{"_id":338100,"id_asignatura":240,"codigo_evaluacion":"EV-1127","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"30\/04\/24","ponderacion":30}
	,{"_id":338400,"id_asignatura":3780,"codigo_evaluacion":"EV-1128","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/04\/24","ponderacion":30}
	,{"_id":338700,"id_asignatura":2790,"codigo_evaluacion":"EV-1129","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/12\/22","ponderacion":50}
	,{"_id":339000,"id_asignatura":2280,"codigo_evaluacion":"EV-1130","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"30\/05\/25","ponderacion":50}
	,{"_id":339300,"id_asignatura":3810,"codigo_evaluacion":"EV-1131","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"31\/03\/23","ponderacion":20}
	,{"_id":339600,"id_asignatura":3750,"codigo_evaluacion":"EV-1132","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/10\/22","ponderacion":30}
	,{"_id":339900,"id_asignatura":2400,"codigo_evaluacion":"EV-1133","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/04\/25","ponderacion":20}
	,{"_id":340200,"id_asignatura":2910,"codigo_evaluacion":"EV-1134","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/01\/24","ponderacion":20}
	,{"_id":340500,"id_asignatura":1740,"codigo_evaluacion":"EV-1135","tipo_evaluacion":"Tarea","fecha_evaluacion":"12\/09\/22","ponderacion":30}
	,{"_id":340800,"id_asignatura":3390,"codigo_evaluacion":"EV-1136","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/09\/22","ponderacion":50}
	,{"_id":341100,"id_asignatura":2760,"codigo_evaluacion":"EV-1137","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"12\/09\/23","ponderacion":50}
	,{"_id":341400,"id_asignatura":3330,"codigo_evaluacion":"EV-1138","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"28\/05\/24","ponderacion":30}
	,{"_id":341700,"id_asignatura":2820,"codigo_evaluacion":"EV-1139","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/12\/22","ponderacion":30}
	,{"_id":342000,"id_asignatura":1230,"codigo_evaluacion":"EV-1140","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"22\/01\/25","ponderacion":50}
	,{"_id":342300,"id_asignatura":2070,"codigo_evaluacion":"EV-1141","tipo_evaluacion":"Tarea","fecha_evaluacion":"15\/10\/23","ponderacion":30}
	,{"_id":342600,"id_asignatura":1590,"codigo_evaluacion":"EV-1142","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"26\/03\/23","ponderacion":30}
	,{"_id":342900,"id_asignatura":2940,"codigo_evaluacion":"EV-1143","tipo_evaluacion":"Tarea","fecha_evaluacion":"19\/05\/25","ponderacion":40}
	,{"_id":343200,"id_asignatura":1860,"codigo_evaluacion":"EV-1144","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/02\/25","ponderacion":30}
	,{"_id":343500,"id_asignatura":3030,"codigo_evaluacion":"EV-1145","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"10\/04\/24","ponderacion":50}
	,{"_id":343800,"id_asignatura":1290,"codigo_evaluacion":"EV-1146","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/12\/24","ponderacion":40}
	,{"_id":344100,"id_asignatura":3870,"codigo_evaluacion":"EV-1147","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/08\/25","ponderacion":20}
	,{"_id":344400,"id_asignatura":930,"codigo_evaluacion":"EV-1148","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"18\/04\/23","ponderacion":50}
	,{"_id":344700,"id_asignatura":3180,"codigo_evaluacion":"EV-1149","tipo_evaluacion":"Tarea","fecha_evaluacion":"14\/05\/23","ponderacion":50}
	,{"_id":345000,"id_asignatura":2880,"codigo_evaluacion":"EV-1150","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"23\/06\/25","ponderacion":30}
	,{"_id":345300,"id_asignatura":1080,"codigo_evaluacion":"EV-1151","tipo_evaluacion":"Tarea","fecha_evaluacion":"08\/10\/22","ponderacion":30}
	,{"_id":345600,"id_asignatura":3960,"codigo_evaluacion":"EV-1152","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"07\/05\/23","ponderacion":40}
	,{"_id":345900,"id_asignatura":1650,"codigo_evaluacion":"EV-1153","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"05\/03\/24","ponderacion":40}
	,{"_id":346200,"id_asignatura":3330,"codigo_evaluacion":"EV-1154","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"04\/10\/22","ponderacion":20}
	,{"_id":346500,"id_asignatura":2520,"codigo_evaluacion":"EV-1155","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"20\/02\/24","ponderacion":50}
	,{"_id":346800,"id_asignatura":2940,"codigo_evaluacion":"EV-1156","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/12\/24","ponderacion":40}
	,{"_id":347100,"id_asignatura":3900,"codigo_evaluacion":"EV-1157","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/05\/23","ponderacion":50}
	,{"_id":347400,"id_asignatura":3810,"codigo_evaluacion":"EV-1158","tipo_evaluacion":"Tarea","fecha_evaluacion":"30\/07\/24","ponderacion":20}
	,{"_id":347700,"id_asignatura":3930,"codigo_evaluacion":"EV-1159","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/01\/25","ponderacion":20}
	,{"_id":348000,"id_asignatura":2790,"codigo_evaluacion":"EV-1160","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"25\/08\/23","ponderacion":30}
	,{"_id":348300,"id_asignatura":1590,"codigo_evaluacion":"EV-1161","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"24\/07\/24","ponderacion":20}
	,{"_id":348600,"id_asignatura":2040,"codigo_evaluacion":"EV-1162","tipo_evaluacion":"Tarea","fecha_evaluacion":"03\/11\/24","ponderacion":50}
	,{"_id":348900,"id_asignatura":630,"codigo_evaluacion":"EV-1163","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"22\/04\/25","ponderacion":40}
	,{"_id":349200,"id_asignatura":4020,"codigo_evaluacion":"EV-1164","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"11\/10\/22","ponderacion":20}
	,{"_id":349500,"id_asignatura":3330,"codigo_evaluacion":"EV-1165","tipo_evaluacion":"Tarea","fecha_evaluacion":"22\/06\/24","ponderacion":50}
	,{"_id":349800,"id_asignatura":3990,"codigo_evaluacion":"EV-1166","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"07\/10\/23","ponderacion":30}
	,{"_id":350100,"id_asignatura":720,"codigo_evaluacion":"EV-1167","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"28\/01\/23","ponderacion":50}
	,{"_id":350400,"id_asignatura":3900,"codigo_evaluacion":"EV-1168","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"09\/03\/24","ponderacion":50}
	,{"_id":350700,"id_asignatura":1950,"codigo_evaluacion":"EV-1169","tipo_evaluacion":"Tarea","fecha_evaluacion":"19\/01\/24","ponderacion":30}
	,{"_id":351000,"id_asignatura":1140,"codigo_evaluacion":"EV-1170","tipo_evaluacion":"Tarea","fecha_evaluacion":"27\/01\/23","ponderacion":50}
	,{"_id":351300,"id_asignatura":2370,"codigo_evaluacion":"EV-1171","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/09\/24","ponderacion":40}
	,{"_id":351600,"id_asignatura":3330,"codigo_evaluacion":"EV-1172","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"05\/01\/23","ponderacion":20}
	,{"_id":351900,"id_asignatura":180,"codigo_evaluacion":"EV-1173","tipo_evaluacion":"Tarea","fecha_evaluacion":"04\/10\/23","ponderacion":50}
	,{"_id":352200,"id_asignatura":1530,"codigo_evaluacion":"EV-1174","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"27\/05\/24","ponderacion":30}
	,{"_id":352500,"id_asignatura":1200,"codigo_evaluacion":"EV-1175","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"21\/10\/22","ponderacion":20}
	,{"_id":352800,"id_asignatura":3480,"codigo_evaluacion":"EV-1176","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"20\/12\/23","ponderacion":30}
	,{"_id":353100,"id_asignatura":2640,"codigo_evaluacion":"EV-1177","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"06\/03\/25","ponderacion":40}
	,{"_id":353400,"id_asignatura":2640,"codigo_evaluacion":"EV-1178","tipo_evaluacion":"Prueba Parcial","fecha_evaluacion":"09\/06\/24","ponderacion":50}
	,{"_id":353700,"id_asignatura":810,"codigo_evaluacion":"EV-1179","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"14\/12\/23","ponderacion":30}
	,{"_id":354000,"id_asignatura":1500,"codigo_evaluacion":"EV-1180","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"17\/05\/24","ponderacion":40}
	,{"_id":354300,"id_asignatura":30,"codigo_evaluacion":"EV-1181","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/07\/25","ponderacion":50}
	,{"_id":354600,"id_asignatura":2070,"codigo_evaluacion":"EV-1182","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"04\/08\/25","ponderacion":40}
	,{"_id":354900,"id_asignatura":1200,"codigo_evaluacion":"EV-1183","tipo_evaluacion":"Tarea","fecha_evaluacion":"09\/02\/25","ponderacion":30}
	,{"_id":355200,"id_asignatura":1530,"codigo_evaluacion":"EV-1184","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"29\/05\/25","ponderacion":50}
	,{"_id":355500,"id_asignatura":1290,"codigo_evaluacion":"EV-1185","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"30\/06\/25","ponderacion":40}
	,{"_id":355800,"id_asignatura":3780,"codigo_evaluacion":"EV-1186","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"23\/11\/23","ponderacion":40}
	,{"_id":356100,"id_asignatura":3240,"codigo_evaluacion":"EV-1187","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"03\/05\/24","ponderacion":50}
	,{"_id":356400,"id_asignatura":2460,"codigo_evaluacion":"EV-1188","tipo_evaluacion":"Tarea","fecha_evaluacion":"21\/06\/23","ponderacion":20}
	,{"_id":356700,"id_asignatura":3960,"codigo_evaluacion":"EV-1189","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"13\/08\/24","ponderacion":20}
	,{"_id":357000,"id_asignatura":2400,"codigo_evaluacion":"EV-1190","tipo_evaluacion":"Tarea","fecha_evaluacion":"16\/11\/22","ponderacion":30}
	,{"_id":357300,"id_asignatura":2910,"codigo_evaluacion":"EV-1191","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"29\/12\/23","ponderacion":20}
	,{"_id":357600,"id_asignatura":1710,"codigo_evaluacion":"EV-1192","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"19\/07\/24","ponderacion":30}
	,{"_id":357900,"id_asignatura":90,"codigo_evaluacion":"EV-1193","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"14\/09\/22","ponderacion":50}
	,{"_id":358200,"id_asignatura":3120,"codigo_evaluacion":"EV-1194","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"12\/03\/24","ponderacion":30}
	,{"_id":358500,"id_asignatura":1020,"codigo_evaluacion":"EV-1195","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"24\/09\/22","ponderacion":50}
	,{"_id":358800,"id_asignatura":2730,"codigo_evaluacion":"EV-1196","tipo_evaluacion":"Tarea","fecha_evaluacion":"02\/01\/25","ponderacion":40}
	,{"_id":359100,"id_asignatura":2040,"codigo_evaluacion":"EV-1197","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"10\/06\/23","ponderacion":40}
	,{"_id":359400,"id_asignatura":2310,"codigo_evaluacion":"EV-1198","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"02\/02\/24","ponderacion":30}
	,{"_id":359700,"id_asignatura":1830,"codigo_evaluacion":"EV-1199","tipo_evaluacion":"Prueba Final","fecha_evaluacion":"05\/11\/24","ponderacion":40}
	,{"_id":360000,"id_asignatura":480,"codigo_evaluacion":"EV-1200","tipo_evaluacion":"Examen Oral","fecha_evaluacion":"06\/03\/23","ponderacion":50}
];
// Periodos
periodos = [
	{"_id":500,"nombre_periodo":"PRIMERO"}
	,{"_id":1000,"nombre_periodo":"SEGUNDO"}
];
// Resultado Evaluaciones
resul_eval = [
	{"_id":150,"id_estudiante":378,"id_evaluacion":175800,"nota_resul_eval":5}
	,{"_id":300,"id_estudiante":496,"id_evaluacion":102300,"nota_resul_eval":6.5}
	,{"_id":450,"id_estudiante":831,"id_evaluacion":358500,"nota_resul_eval":4.6}
	,{"_id":600,"id_estudiante":550,"id_evaluacion":252000,"nota_resul_eval":3.6}
	,{"_id":750,"id_estudiante":752,"id_evaluacion":309300,"nota_resul_eval":7}
	,{"_id":900,"id_estudiante":659,"id_evaluacion":291300,"nota_resul_eval":3.8}
	,{"_id":1050,"id_estudiante":970,"id_evaluacion":269400,"nota_resul_eval":7}
	,{"_id":1200,"id_estudiante":487,"id_evaluacion":14100,"nota_resul_eval":6.1}
	,{"_id":1350,"id_estudiante":688,"id_evaluacion":183600,"nota_resul_eval":6.4}
	,{"_id":1500,"id_estudiante":371,"id_evaluacion":39600,"nota_resul_eval":3.5}
	,{"_id":1650,"id_estudiante":631,"id_evaluacion":296100,"nota_resul_eval":3.3}
	,{"_id":1800,"id_estudiante":752,"id_evaluacion":338400,"nota_resul_eval":5.7}
	,{"_id":1950,"id_estudiante":755,"id_evaluacion":240300,"nota_resul_eval":4.5}
	,{"_id":2100,"id_estudiante":508,"id_evaluacion":257700,"nota_resul_eval":5.7}
	,{"_id":2250,"id_estudiante":169,"id_evaluacion":81600,"nota_resul_eval":6.2}
	,{"_id":2400,"id_estudiante":321,"id_evaluacion":337200,"nota_resul_eval":5.6}
	,{"_id":2550,"id_estudiante":118,"id_evaluacion":142500,"nota_resul_eval":6.7}
	,{"_id":2700,"id_estudiante":721,"id_evaluacion":237300,"nota_resul_eval":6.5}
	,{"_id":2850,"id_estudiante":314,"id_evaluacion":291600,"nota_resul_eval":5.9}
	,{"_id":3000,"id_estudiante":75,"id_evaluacion":307200,"nota_resul_eval":3.4}
	,{"_id":3150,"id_estudiante":681,"id_evaluacion":349500,"nota_resul_eval":6.6}
	,{"_id":3300,"id_estudiante":316,"id_evaluacion":160500,"nota_resul_eval":4.3}
	,{"_id":3450,"id_estudiante":598,"id_evaluacion":28500,"nota_resul_eval":3.1}
	,{"_id":3600,"id_estudiante":252,"id_evaluacion":144600,"nota_resul_eval":3.4}
	,{"_id":3750,"id_estudiante":760,"id_evaluacion":252000,"nota_resul_eval":5.3}
	,{"_id":3900,"id_estudiante":873,"id_evaluacion":331800,"nota_resul_eval":4.4}
	,{"_id":4050,"id_estudiante":114,"id_evaluacion":205200,"nota_resul_eval":3.3}
	,{"_id":4200,"id_estudiante":633,"id_evaluacion":229800,"nota_resul_eval":3.8}
	,{"_id":4350,"id_estudiante":327,"id_evaluacion":51000,"nota_resul_eval":4.5}
	,{"_id":4500,"id_estudiante":277,"id_evaluacion":212100,"nota_resul_eval":3.7}
	,{"_id":4650,"id_estudiante":56,"id_evaluacion":39600,"nota_resul_eval":4.2}
	,{"_id":4800,"id_estudiante":487,"id_evaluacion":282600,"nota_resul_eval":6.6}
	,{"_id":4950,"id_estudiante":721,"id_evaluacion":267600,"nota_resul_eval":5.5}
	,{"_id":5100,"id_estudiante":274,"id_evaluacion":295500,"nota_resul_eval":3.9}
	,{"_id":5250,"id_estudiante":587,"id_evaluacion":74700,"nota_resul_eval":3.8}
	,{"_id":5400,"id_estudiante":274,"id_evaluacion":58800,"nota_resul_eval":3.5}
	,{"_id":5550,"id_estudiante":56,"id_evaluacion":223200,"nota_resul_eval":5.2}
	,{"_id":5700,"id_estudiante":357,"id_evaluacion":306000,"nota_resul_eval":4.5}
	,{"_id":5850,"id_estudiante":363,"id_evaluacion":264900,"nota_resul_eval":5.2}
	,{"_id":6000,"id_estudiante":344,"id_evaluacion":112500,"nota_resul_eval":5.3}
	,{"_id":6150,"id_estudiante":215,"id_evaluacion":254700,"nota_resul_eval":6.8}
	,{"_id":6300,"id_estudiante":60,"id_evaluacion":214800,"nota_resul_eval":4.1}
	,{"_id":6450,"id_estudiante":404,"id_evaluacion":61800,"nota_resul_eval":5.7}
	,{"_id":6600,"id_estudiante":480,"id_evaluacion":159900,"nota_resul_eval":4.1}
	,{"_id":6750,"id_estudiante":110,"id_evaluacion":149700,"nota_resul_eval":5.9}
	,{"_id":6900,"id_estudiante":158,"id_evaluacion":252300,"nota_resul_eval":5.6}
	,{"_id":7050,"id_estudiante":257,"id_evaluacion":52500,"nota_resul_eval":4.2}
	,{"_id":7200,"id_estudiante":38,"id_evaluacion":174600,"nota_resul_eval":5}
	,{"_id":7350,"id_estudiante":326,"id_evaluacion":189300,"nota_resul_eval":6.8}
	,{"_id":7500,"id_estudiante":664,"id_evaluacion":18000,"nota_resul_eval":6.7}
	,{"_id":7650,"id_estudiante":332,"id_evaluacion":215100,"nota_resul_eval":6.7}
	,{"_id":7800,"id_estudiante":662,"id_evaluacion":54900,"nota_resul_eval":6.4}
	,{"_id":7950,"id_estudiante":402,"id_evaluacion":255600,"nota_resul_eval":5.5}
	,{"_id":8100,"id_estudiante":584,"id_evaluacion":345600,"nota_resul_eval":6.2}
	,{"_id":8250,"id_estudiante":611,"id_evaluacion":203400,"nota_resul_eval":5.1}
	,{"_id":8400,"id_estudiante":112,"id_evaluacion":267900,"nota_resul_eval":3}
	,{"_id":8550,"id_estudiante":669,"id_evaluacion":121200,"nota_resul_eval":6}
	,{"_id":8700,"id_estudiante":30,"id_evaluacion":8100,"nota_resul_eval":6.7}
	,{"_id":8850,"id_estudiante":499,"id_evaluacion":236400,"nota_resul_eval":6.5}
	,{"_id":9000,"id_estudiante":36,"id_evaluacion":270000,"nota_resul_eval":3.7}
	,{"_id":9150,"id_estudiante":568,"id_evaluacion":110100,"nota_resul_eval":4.3}
	,{"_id":9300,"id_estudiante":341,"id_evaluacion":290700,"nota_resul_eval":4}
	,{"_id":9450,"id_estudiante":453,"id_evaluacion":203700,"nota_resul_eval":4.3}
	,{"_id":9600,"id_estudiante":79,"id_evaluacion":336300,"nota_resul_eval":6.2}
	,{"_id":9750,"id_estudiante":990,"id_evaluacion":132600,"nota_resul_eval":4.2}
	,{"_id":9900,"id_estudiante":269,"id_evaluacion":354000,"nota_resul_eval":5.1}
	,{"_id":10050,"id_estudiante":40,"id_evaluacion":156000,"nota_resul_eval":3.2}
	,{"_id":10200,"id_estudiante":629,"id_evaluacion":284700,"nota_resul_eval":5.4}
	,{"_id":10350,"id_estudiante":141,"id_evaluacion":345300,"nota_resul_eval":3.4}
	,{"_id":10500,"id_estudiante":517,"id_evaluacion":76200,"nota_resul_eval":4.3}
	,{"_id":10650,"id_estudiante":752,"id_evaluacion":178500,"nota_resul_eval":4.8}
	,{"_id":10800,"id_estudiante":260,"id_evaluacion":78600,"nota_resul_eval":4.7}
	,{"_id":10950,"id_estudiante":752,"id_evaluacion":27300,"nota_resul_eval":5.3}
	,{"_id":11100,"id_estudiante":181,"id_evaluacion":111300,"nota_resul_eval":4.9}
	,{"_id":11250,"id_estudiante":241,"id_evaluacion":145500,"nota_resul_eval":5.2}
	,{"_id":11400,"id_estudiante":107,"id_evaluacion":102600,"nota_resul_eval":4.7}
	,{"_id":11550,"id_estudiante":503,"id_evaluacion":229200,"nota_resul_eval":6.2}
	,{"_id":11700,"id_estudiante":318,"id_evaluacion":229800,"nota_resul_eval":5.8}
	,{"_id":11850,"id_estudiante":395,"id_evaluacion":248700,"nota_resul_eval":6.9}
	,{"_id":12000,"id_estudiante":708,"id_evaluacion":231000,"nota_resul_eval":3.6}
	,{"_id":12150,"id_estudiante":709,"id_evaluacion":137700,"nota_resul_eval":5.1}
	,{"_id":12300,"id_estudiante":873,"id_evaluacion":169500,"nota_resul_eval":5.7}
	,{"_id":12450,"id_estudiante":687,"id_evaluacion":196200,"nota_resul_eval":5.2}
	,{"_id":12600,"id_estudiante":658,"id_evaluacion":316800,"nota_resul_eval":4.4}
	,{"_id":12750,"id_estudiante":1,"id_evaluacion":235200,"nota_resul_eval":3.4}
	,{"_id":12900,"id_estudiante":438,"id_evaluacion":302700,"nota_resul_eval":6.3}
	,{"_id":13050,"id_estudiante":571,"id_evaluacion":317100,"nota_resul_eval":4.9}
	,{"_id":13200,"id_estudiante":708,"id_evaluacion":354300,"nota_resul_eval":3.9}
	,{"_id":13350,"id_estudiante":608,"id_evaluacion":300000,"nota_resul_eval":3.8}
	,{"_id":13500,"id_estudiante":123,"id_evaluacion":190500,"nota_resul_eval":3.6}
	,{"_id":13650,"id_estudiante":819,"id_evaluacion":90600,"nota_resul_eval":4.4}
	,{"_id":13800,"id_estudiante":335,"id_evaluacion":127800,"nota_resul_eval":5}
	,{"_id":13950,"id_estudiante":376,"id_evaluacion":112800,"nota_resul_eval":3.9}
	,{"_id":14100,"id_estudiante":968,"id_evaluacion":249000,"nota_resul_eval":5.7}
	,{"_id":14250,"id_estudiante":152,"id_evaluacion":32700,"nota_resul_eval":3}
	,{"_id":14400,"id_estudiante":538,"id_evaluacion":21600,"nota_resul_eval":6.4}
	,{"_id":14550,"id_estudiante":73,"id_evaluacion":230400,"nota_resul_eval":4.2}
	,{"_id":14700,"id_estudiante":123,"id_evaluacion":56700,"nota_resul_eval":5.2}
	,{"_id":14850,"id_estudiante":374,"id_evaluacion":164400,"nota_resul_eval":3.2}
	,{"_id":15000,"id_estudiante":43,"id_evaluacion":341700,"nota_resul_eval":6.4}
	,{"_id":15150,"id_estudiante":181,"id_evaluacion":300300,"nota_resul_eval":3.6}
	,{"_id":15300,"id_estudiante":191,"id_evaluacion":301200,"nota_resul_eval":4.7}
	,{"_id":15450,"id_estudiante":470,"id_evaluacion":8400,"nota_resul_eval":6.1}
	,{"_id":15600,"id_estudiante":451,"id_evaluacion":38700,"nota_resul_eval":5.8}
	,{"_id":15750,"id_estudiante":882,"id_evaluacion":3300,"nota_resul_eval":5.6}
	,{"_id":15900,"id_estudiante":502,"id_evaluacion":117000,"nota_resul_eval":3.7}
	,{"_id":16050,"id_estudiante":809,"id_evaluacion":213900,"nota_resul_eval":3.7}
	,{"_id":16200,"id_estudiante":704,"id_evaluacion":105600,"nota_resul_eval":4.7}
	,{"_id":16350,"id_estudiante":551,"id_evaluacion":320100,"nota_resul_eval":6.5}
	,{"_id":16500,"id_estudiante":753,"id_evaluacion":307200,"nota_resul_eval":6.9}
	,{"_id":16650,"id_estudiante":549,"id_evaluacion":260400,"nota_resul_eval":3.8}
	,{"_id":16800,"id_estudiante":310,"id_evaluacion":249900,"nota_resul_eval":3.6}
	,{"_id":16950,"id_estudiante":532,"id_evaluacion":319500,"nota_resul_eval":5}
	,{"_id":17100,"id_estudiante":291,"id_evaluacion":54000,"nota_resul_eval":3}
	,{"_id":17250,"id_estudiante":250,"id_evaluacion":42900,"nota_resul_eval":6.5}
	,{"_id":17400,"id_estudiante":480,"id_evaluacion":84000,"nota_resul_eval":5.6}
	,{"_id":17550,"id_estudiante":699,"id_evaluacion":88500,"nota_resul_eval":5.7}
	,{"_id":17700,"id_estudiante":805,"id_evaluacion":294900,"nota_resul_eval":5.6}
	,{"_id":17850,"id_estudiante":643,"id_evaluacion":127800,"nota_resul_eval":6.3}
	,{"_id":18000,"id_estudiante":665,"id_evaluacion":249000,"nota_resul_eval":5.1}
	,{"_id":18150,"id_estudiante":103,"id_evaluacion":6600,"nota_resul_eval":5.1}
	,{"_id":18300,"id_estudiante":285,"id_evaluacion":270600,"nota_resul_eval":4.4}
	,{"_id":18450,"id_estudiante":88,"id_evaluacion":229800,"nota_resul_eval":6.9}
	,{"_id":18600,"id_estudiante":774,"id_evaluacion":295800,"nota_resul_eval":6.7}
	,{"_id":18750,"id_estudiante":985,"id_evaluacion":172500,"nota_resul_eval":5.8}
	,{"_id":18900,"id_estudiante":433,"id_evaluacion":280200,"nota_resul_eval":6.1}
	,{"_id":19050,"id_estudiante":517,"id_evaluacion":129900,"nota_resul_eval":6.3}
	,{"_id":19200,"id_estudiante":518,"id_evaluacion":206700,"nota_resul_eval":6.3}
	,{"_id":19350,"id_estudiante":122,"id_evaluacion":113100,"nota_resul_eval":6.1}
	,{"_id":19500,"id_estudiante":393,"id_evaluacion":213000,"nota_resul_eval":5.4}
	,{"_id":19650,"id_estudiante":647,"id_evaluacion":115500,"nota_resul_eval":6.2}
	,{"_id":19800,"id_estudiante":211,"id_evaluacion":291900,"nota_resul_eval":6.5}
	,{"_id":19950,"id_estudiante":144,"id_evaluacion":343500,"nota_resul_eval":6.6}
	,{"_id":20100,"id_estudiante":10,"id_evaluacion":310200,"nota_resul_eval":3}
	,{"_id":20250,"id_estudiante":46,"id_evaluacion":298500,"nota_resul_eval":4.7}
	,{"_id":20400,"id_estudiante":707,"id_evaluacion":30300,"nota_resul_eval":6.9}
	,{"_id":20550,"id_estudiante":308,"id_evaluacion":284100,"nota_resul_eval":5.7}
	,{"_id":20700,"id_estudiante":620,"id_evaluacion":55800,"nota_resul_eval":4.9}
	,{"_id":20850,"id_estudiante":793,"id_evaluacion":72600,"nota_resul_eval":4.1}
	,{"_id":21000,"id_estudiante":478,"id_evaluacion":170400,"nota_resul_eval":5.7}
	,{"_id":21150,"id_estudiante":272,"id_evaluacion":173100,"nota_resul_eval":4.8}
	,{"_id":21300,"id_estudiante":631,"id_evaluacion":102600,"nota_resul_eval":3.2}
	,{"_id":21450,"id_estudiante":868,"id_evaluacion":237000,"nota_resul_eval":5.8}
	,{"_id":21600,"id_estudiante":983,"id_evaluacion":25500,"nota_resul_eval":5.6}
	,{"_id":21750,"id_estudiante":628,"id_evaluacion":210000,"nota_resul_eval":5}
	,{"_id":21900,"id_estudiante":53,"id_evaluacion":271800,"nota_resul_eval":4.2}
	,{"_id":22050,"id_estudiante":817,"id_evaluacion":57900,"nota_resul_eval":4.9}
	,{"_id":22200,"id_estudiante":404,"id_evaluacion":159600,"nota_resul_eval":6.3}
	,{"_id":22350,"id_estudiante":849,"id_evaluacion":323100,"nota_resul_eval":4.1}
	,{"_id":22500,"id_estudiante":512,"id_evaluacion":252000,"nota_resul_eval":4.7}
	,{"_id":22650,"id_estudiante":881,"id_evaluacion":121200,"nota_resul_eval":4.6}
	,{"_id":22800,"id_estudiante":72,"id_evaluacion":255300,"nota_resul_eval":4.1}
	,{"_id":22950,"id_estudiante":41,"id_evaluacion":321600,"nota_resul_eval":6.3}
	,{"_id":23100,"id_estudiante":995,"id_evaluacion":198900,"nota_resul_eval":4.6}
	,{"_id":23250,"id_estudiante":24,"id_evaluacion":310500,"nota_resul_eval":3.7}
	,{"_id":23400,"id_estudiante":790,"id_evaluacion":196800,"nota_resul_eval":4.1}
	,{"_id":23550,"id_estudiante":889,"id_evaluacion":338100,"nota_resul_eval":7}
	,{"_id":23700,"id_estudiante":870,"id_evaluacion":88500,"nota_resul_eval":6.1}
	,{"_id":23850,"id_estudiante":1000,"id_evaluacion":8400,"nota_resul_eval":5.5}
	,{"_id":24000,"id_estudiante":182,"id_evaluacion":52800,"nota_resul_eval":4.2}
	,{"_id":24150,"id_estudiante":291,"id_evaluacion":237900,"nota_resul_eval":6.1}
	,{"_id":24300,"id_estudiante":745,"id_evaluacion":329400,"nota_resul_eval":4.1}
	,{"_id":24450,"id_estudiante":633,"id_evaluacion":201900,"nota_resul_eval":4.6}
	,{"_id":24600,"id_estudiante":317,"id_evaluacion":327000,"nota_resul_eval":6.8}
	,{"_id":24750,"id_estudiante":525,"id_evaluacion":48000,"nota_resul_eval":3.3}
	,{"_id":24900,"id_estudiante":452,"id_evaluacion":92700,"nota_resul_eval":5.9}
	,{"_id":25050,"id_estudiante":341,"id_evaluacion":266400,"nota_resul_eval":3.9}
	,{"_id":25200,"id_estudiante":887,"id_evaluacion":307500,"nota_resul_eval":3.8}
	,{"_id":25350,"id_estudiante":48,"id_evaluacion":135900,"nota_resul_eval":6.7}
	,{"_id":25500,"id_estudiante":24,"id_evaluacion":3600,"nota_resul_eval":6.2}
	,{"_id":25650,"id_estudiante":972,"id_evaluacion":313800,"nota_resul_eval":4.7}
	,{"_id":25800,"id_estudiante":51,"id_evaluacion":164400,"nota_resul_eval":5.6}
	,{"_id":25950,"id_estudiante":544,"id_evaluacion":261300,"nota_resul_eval":4.1}
	,{"_id":26100,"id_estudiante":233,"id_evaluacion":119100,"nota_resul_eval":4.5}
	,{"_id":26250,"id_estudiante":128,"id_evaluacion":272100,"nota_resul_eval":3.5}
	,{"_id":26400,"id_estudiante":203,"id_evaluacion":294000,"nota_resul_eval":5.3}
	,{"_id":26550,"id_estudiante":494,"id_evaluacion":202500,"nota_resul_eval":4.7}
	,{"_id":26700,"id_estudiante":328,"id_evaluacion":353400,"nota_resul_eval":4.2}
	,{"_id":26850,"id_estudiante":772,"id_evaluacion":304500,"nota_resul_eval":6.4}
	,{"_id":27000,"id_estudiante":823,"id_evaluacion":225300,"nota_resul_eval":3.2}
	,{"_id":27150,"id_estudiante":693,"id_evaluacion":178200,"nota_resul_eval":3.6}
	,{"_id":27300,"id_estudiante":662,"id_evaluacion":181200,"nota_resul_eval":5.4}
	,{"_id":27450,"id_estudiante":2,"id_evaluacion":184200,"nota_resul_eval":5.4}
	,{"_id":27600,"id_estudiante":656,"id_evaluacion":42300,"nota_resul_eval":6.3}
	,{"_id":27750,"id_estudiante":534,"id_evaluacion":211800,"nota_resul_eval":5}
	,{"_id":27900,"id_estudiante":166,"id_evaluacion":71100,"nota_resul_eval":4.9}
	,{"_id":28050,"id_estudiante":629,"id_evaluacion":278400,"nota_resul_eval":4.8}
	,{"_id":28200,"id_estudiante":661,"id_evaluacion":147600,"nota_resul_eval":5.2}
	,{"_id":28350,"id_estudiante":489,"id_evaluacion":36000,"nota_resul_eval":4.3}
	,{"_id":28500,"id_estudiante":800,"id_evaluacion":279000,"nota_resul_eval":5.4}
	,{"_id":28650,"id_estudiante":19,"id_evaluacion":6600,"nota_resul_eval":4.1}
	,{"_id":28800,"id_estudiante":565,"id_evaluacion":239400,"nota_resul_eval":4.1}
	,{"_id":28950,"id_estudiante":516,"id_evaluacion":4200,"nota_resul_eval":6}
	,{"_id":29100,"id_estudiante":209,"id_evaluacion":297000,"nota_resul_eval":3.2}
	,{"_id":29250,"id_estudiante":426,"id_evaluacion":11700,"nota_resul_eval":3.1}
	,{"_id":29400,"id_estudiante":652,"id_evaluacion":336300,"nota_resul_eval":4.4}
	,{"_id":29550,"id_estudiante":876,"id_evaluacion":113100,"nota_resul_eval":6.4}
	,{"_id":29700,"id_estudiante":36,"id_evaluacion":105300,"nota_resul_eval":4.3}
	,{"_id":29850,"id_estudiante":497,"id_evaluacion":189000,"nota_resul_eval":5.8}
	,{"_id":30000,"id_estudiante":899,"id_evaluacion":229800,"nota_resul_eval":4.9}
	,{"_id":30150,"id_estudiante":900,"id_evaluacion":208200,"nota_resul_eval":6.6}
	,{"_id":30300,"id_estudiante":65,"id_evaluacion":281400,"nota_resul_eval":5.7}
	,{"_id":30450,"id_estudiante":66,"id_evaluacion":270900,"nota_resul_eval":6.2}
	,{"_id":30600,"id_estudiante":334,"id_evaluacion":349800,"nota_resul_eval":5.5}
	,{"_id":30750,"id_estudiante":215,"id_evaluacion":264300,"nota_resul_eval":5.5}
	,{"_id":30900,"id_estudiante":463,"id_evaluacion":130200,"nota_resul_eval":4.3}
	,{"_id":31050,"id_estudiante":37,"id_evaluacion":23400,"nota_resul_eval":5.9}
	,{"_id":31200,"id_estudiante":458,"id_evaluacion":281400,"nota_resul_eval":6}
	,{"_id":31350,"id_estudiante":585,"id_evaluacion":99600,"nota_resul_eval":3.8}
	,{"_id":31500,"id_estudiante":610,"id_evaluacion":260100,"nota_resul_eval":6.6}
	,{"_id":31650,"id_estudiante":683,"id_evaluacion":251100,"nota_resul_eval":5.5}
	,{"_id":31800,"id_estudiante":251,"id_evaluacion":235500,"nota_resul_eval":5.3}
	,{"_id":31950,"id_estudiante":293,"id_evaluacion":202800,"nota_resul_eval":6}
	,{"_id":32100,"id_estudiante":631,"id_evaluacion":40800,"nota_resul_eval":6}
	,{"_id":32250,"id_estudiante":54,"id_evaluacion":351300,"nota_resul_eval":4.9}
	,{"_id":32400,"id_estudiante":873,"id_evaluacion":225900,"nota_resul_eval":4.1}
	,{"_id":32550,"id_estudiante":808,"id_evaluacion":81300,"nota_resul_eval":3.3}
	,{"_id":32700,"id_estudiante":384,"id_evaluacion":356400,"nota_resul_eval":3.9}
	,{"_id":32850,"id_estudiante":820,"id_evaluacion":251700,"nota_resul_eval":5.9}
	,{"_id":33000,"id_estudiante":308,"id_evaluacion":212400,"nota_resul_eval":4.6}
	,{"_id":33150,"id_estudiante":877,"id_evaluacion":255300,"nota_resul_eval":4.2}
	,{"_id":33300,"id_estudiante":683,"id_evaluacion":138900,"nota_resul_eval":4.7}
	,{"_id":33450,"id_estudiante":257,"id_evaluacion":179700,"nota_resul_eval":5.7}
	,{"_id":33600,"id_estudiante":501,"id_evaluacion":165000,"nota_resul_eval":4.3}
	,{"_id":33750,"id_estudiante":552,"id_evaluacion":19800,"nota_resul_eval":3.9}
	,{"_id":33900,"id_estudiante":72,"id_evaluacion":164100,"nota_resul_eval":6.9}
	,{"_id":34050,"id_estudiante":216,"id_evaluacion":104100,"nota_resul_eval":4}
	,{"_id":34200,"id_estudiante":149,"id_evaluacion":72300,"nota_resul_eval":3.6}
	,{"_id":34350,"id_estudiante":553,"id_evaluacion":49800,"nota_resul_eval":3.7}
	,{"_id":34500,"id_estudiante":454,"id_evaluacion":113100,"nota_resul_eval":5.6}
	,{"_id":34650,"id_estudiante":640,"id_evaluacion":157800,"nota_resul_eval":5.8}
	,{"_id":34800,"id_estudiante":201,"id_evaluacion":297000,"nota_resul_eval":6.8}
	,{"_id":34950,"id_estudiante":191,"id_evaluacion":147300,"nota_resul_eval":3}
	,{"_id":35100,"id_estudiante":544,"id_evaluacion":62700,"nota_resul_eval":3.2}
	,{"_id":35250,"id_estudiante":774,"id_evaluacion":257400,"nota_resul_eval":4.1}
	,{"_id":35400,"id_estudiante":26,"id_evaluacion":243000,"nota_resul_eval":3.5}
	,{"_id":35550,"id_estudiante":326,"id_evaluacion":10500,"nota_resul_eval":6.1}
	,{"_id":35700,"id_estudiante":463,"id_evaluacion":36000,"nota_resul_eval":3}
	,{"_id":35850,"id_estudiante":624,"id_evaluacion":136500,"nota_resul_eval":6.4}
	,{"_id":36000,"id_estudiante":699,"id_evaluacion":163200,"nota_resul_eval":3.9}
	,{"_id":36150,"id_estudiante":499,"id_evaluacion":12600,"nota_resul_eval":6.3}
	,{"_id":36300,"id_estudiante":6,"id_evaluacion":273300,"nota_resul_eval":5.9}
	,{"_id":36450,"id_estudiante":852,"id_evaluacion":234600,"nota_resul_eval":4.9}
	,{"_id":36600,"id_estudiante":729,"id_evaluacion":271500,"nota_resul_eval":5.8}
	,{"_id":36750,"id_estudiante":133,"id_evaluacion":339000,"nota_resul_eval":4.6}
	,{"_id":36900,"id_estudiante":272,"id_evaluacion":200100,"nota_resul_eval":6.6}
	,{"_id":37050,"id_estudiante":53,"id_evaluacion":44700,"nota_resul_eval":5.1}
	,{"_id":37200,"id_estudiante":637,"id_evaluacion":329100,"nota_resul_eval":4.8}
	,{"_id":37350,"id_estudiante":605,"id_evaluacion":25200,"nota_resul_eval":3.5}
	,{"_id":37500,"id_estudiante":599,"id_evaluacion":265500,"nota_resul_eval":4.6}
	,{"_id":37650,"id_estudiante":95,"id_evaluacion":282300,"nota_resul_eval":5.8}
	,{"_id":37800,"id_estudiante":299,"id_evaluacion":158700,"nota_resul_eval":6.9}
	,{"_id":37950,"id_estudiante":574,"id_evaluacion":215700,"nota_resul_eval":5.9}
	,{"_id":38100,"id_estudiante":441,"id_evaluacion":3300,"nota_resul_eval":6.7}
	,{"_id":38250,"id_estudiante":220,"id_evaluacion":159600,"nota_resul_eval":4}
	,{"_id":38400,"id_estudiante":420,"id_evaluacion":135900,"nota_resul_eval":5.6}
	,{"_id":38550,"id_estudiante":850,"id_evaluacion":59700,"nota_resul_eval":5.8}
	,{"_id":38700,"id_estudiante":717,"id_evaluacion":162000,"nota_resul_eval":5.2}
	,{"_id":38850,"id_estudiante":137,"id_evaluacion":195600,"nota_resul_eval":3.3}
	,{"_id":39000,"id_estudiante":816,"id_evaluacion":285900,"nota_resul_eval":4.5}
	,{"_id":39150,"id_estudiante":775,"id_evaluacion":232200,"nota_resul_eval":5}
	,{"_id":39300,"id_estudiante":417,"id_evaluacion":115500,"nota_resul_eval":6.2}
	,{"_id":39450,"id_estudiante":164,"id_evaluacion":323700,"nota_resul_eval":5}
	,{"_id":39600,"id_estudiante":102,"id_evaluacion":44700,"nota_resul_eval":4.7}
	,{"_id":39750,"id_estudiante":381,"id_evaluacion":21000,"nota_resul_eval":4.1}
	,{"_id":39900,"id_estudiante":693,"id_evaluacion":131700,"nota_resul_eval":3.5}
	,{"_id":40050,"id_estudiante":98,"id_evaluacion":37500,"nota_resul_eval":3.9}
	,{"_id":40200,"id_estudiante":985,"id_evaluacion":259500,"nota_resul_eval":5.5}
	,{"_id":40350,"id_estudiante":248,"id_evaluacion":30900,"nota_resul_eval":3.7}
	,{"_id":40500,"id_estudiante":217,"id_evaluacion":180900,"nota_resul_eval":3.6}
	,{"_id":40650,"id_estudiante":562,"id_evaluacion":60600,"nota_resul_eval":5.5}
	,{"_id":40800,"id_estudiante":643,"id_evaluacion":26400,"nota_resul_eval":5.4}
	,{"_id":40950,"id_estudiante":312,"id_evaluacion":114000,"nota_resul_eval":4.5}
	,{"_id":41100,"id_estudiante":920,"id_evaluacion":222300,"nota_resul_eval":4}
	,{"_id":41250,"id_estudiante":260,"id_evaluacion":212100,"nota_resul_eval":5.3}
	,{"_id":41400,"id_estudiante":738,"id_evaluacion":168900,"nota_resul_eval":5.8}
	,{"_id":41550,"id_estudiante":628,"id_evaluacion":85200,"nota_resul_eval":5.9}
	,{"_id":41700,"id_estudiante":306,"id_evaluacion":277800,"nota_resul_eval":6.7}
	,{"_id":41850,"id_estudiante":704,"id_evaluacion":353700,"nota_resul_eval":4.8}
	,{"_id":42000,"id_estudiante":389,"id_evaluacion":120900,"nota_resul_eval":6.3}
	,{"_id":42150,"id_estudiante":109,"id_evaluacion":180300,"nota_resul_eval":5.4}
	,{"_id":42300,"id_estudiante":17,"id_evaluacion":162600,"nota_resul_eval":5.5}
	,{"_id":42450,"id_estudiante":862,"id_evaluacion":306300,"nota_resul_eval":4.7}
	,{"_id":42600,"id_estudiante":190,"id_evaluacion":234600,"nota_resul_eval":3.2}
	,{"_id":42750,"id_estudiante":663,"id_evaluacion":308100,"nota_resul_eval":3.2}
	,{"_id":42900,"id_estudiante":561,"id_evaluacion":161700,"nota_resul_eval":3.6}
	,{"_id":43050,"id_estudiante":122,"id_evaluacion":154200,"nota_resul_eval":6.2}
	,{"_id":43200,"id_estudiante":564,"id_evaluacion":2400,"nota_resul_eval":5.8}
	,{"_id":43350,"id_estudiante":921,"id_evaluacion":82200,"nota_resul_eval":6.4}
	,{"_id":43500,"id_estudiante":251,"id_evaluacion":335100,"nota_resul_eval":6.8}
	,{"_id":43650,"id_estudiante":913,"id_evaluacion":233100,"nota_resul_eval":6.5}
	,{"_id":43800,"id_estudiante":708,"id_evaluacion":75900,"nota_resul_eval":4.1}
	,{"_id":43950,"id_estudiante":670,"id_evaluacion":21300,"nota_resul_eval":4.7}
	,{"_id":44100,"id_estudiante":612,"id_evaluacion":61200,"nota_resul_eval":6.1}
	,{"_id":44250,"id_estudiante":519,"id_evaluacion":268200,"nota_resul_eval":4}
	,{"_id":44400,"id_estudiante":801,"id_evaluacion":152100,"nota_resul_eval":3.4}
	,{"_id":44550,"id_estudiante":6,"id_evaluacion":265200,"nota_resul_eval":5.7}
	,{"_id":44700,"id_estudiante":44,"id_evaluacion":300900,"nota_resul_eval":4.8}
	,{"_id":44850,"id_estudiante":395,"id_evaluacion":174900,"nota_resul_eval":3.5}
	,{"_id":45000,"id_estudiante":665,"id_evaluacion":600,"nota_resul_eval":6.8}
	,{"_id":45150,"id_estudiante":286,"id_evaluacion":77700,"nota_resul_eval":3.9}
	,{"_id":45300,"id_estudiante":859,"id_evaluacion":241800,"nota_resul_eval":4.8}
	,{"_id":45450,"id_estudiante":969,"id_evaluacion":14100,"nota_resul_eval":3.7}
	,{"_id":45600,"id_estudiante":87,"id_evaluacion":157500,"nota_resul_eval":5}
	,{"_id":45750,"id_estudiante":393,"id_evaluacion":165600,"nota_resul_eval":4.1}
	,{"_id":45900,"id_estudiante":862,"id_evaluacion":170400,"nota_resul_eval":5.8}
	,{"_id":46050,"id_estudiante":313,"id_evaluacion":108300,"nota_resul_eval":5.7}
	,{"_id":46200,"id_estudiante":529,"id_evaluacion":94500,"nota_resul_eval":3.8}
	,{"_id":46350,"id_estudiante":318,"id_evaluacion":23100,"nota_resul_eval":4.6}
	,{"_id":46500,"id_estudiante":130,"id_evaluacion":180300,"nota_resul_eval":4.5}
	,{"_id":46650,"id_estudiante":540,"id_evaluacion":295500,"nota_resul_eval":4}
	,{"_id":46800,"id_estudiante":595,"id_evaluacion":350400,"nota_resul_eval":3.1}
	,{"_id":46950,"id_estudiante":58,"id_evaluacion":151800,"nota_resul_eval":3.1}
	,{"_id":47100,"id_estudiante":964,"id_evaluacion":79200,"nota_resul_eval":6.8}
	,{"_id":47250,"id_estudiante":298,"id_evaluacion":86400,"nota_resul_eval":5.7}
	,{"_id":47400,"id_estudiante":220,"id_evaluacion":237300,"nota_resul_eval":6.9}
	,{"_id":47550,"id_estudiante":103,"id_evaluacion":289800,"nota_resul_eval":6.6}
	,{"_id":47700,"id_estudiante":299,"id_evaluacion":107700,"nota_resul_eval":5.6}
	,{"_id":47850,"id_estudiante":758,"id_evaluacion":357600,"nota_resul_eval":3.6}
	,{"_id":48000,"id_estudiante":853,"id_evaluacion":211500,"nota_resul_eval":3.6}
	,{"_id":48150,"id_estudiante":798,"id_evaluacion":247200,"nota_resul_eval":4.7}
	,{"_id":48300,"id_estudiante":580,"id_evaluacion":264900,"nota_resul_eval":3.3}
	,{"_id":48450,"id_estudiante":362,"id_evaluacion":95100,"nota_resul_eval":4.2}
	,{"_id":48600,"id_estudiante":465,"id_evaluacion":331500,"nota_resul_eval":5.9}
	,{"_id":48750,"id_estudiante":591,"id_evaluacion":287700,"nota_resul_eval":6.6}
	,{"_id":48900,"id_estudiante":412,"id_evaluacion":296700,"nota_resul_eval":6.7}
	,{"_id":49050,"id_estudiante":129,"id_evaluacion":266700,"nota_resul_eval":6.7}
	,{"_id":49200,"id_estudiante":118,"id_evaluacion":131400,"nota_resul_eval":3}
	,{"_id":49350,"id_estudiante":796,"id_evaluacion":36300,"nota_resul_eval":4.2}
	,{"_id":49500,"id_estudiante":327,"id_evaluacion":110100,"nota_resul_eval":4.9}
	,{"_id":49650,"id_estudiante":944,"id_evaluacion":30600,"nota_resul_eval":3.4}
	,{"_id":49800,"id_estudiante":109,"id_evaluacion":100200,"nota_resul_eval":3.1}
	,{"_id":49950,"id_estudiante":688,"id_evaluacion":210600,"nota_resul_eval":3.2}
	,{"_id":50100,"id_estudiante":753,"id_evaluacion":187800,"nota_resul_eval":6.6}
	,{"_id":50250,"id_estudiante":528,"id_evaluacion":245100,"nota_resul_eval":3.9}
	,{"_id":50400,"id_estudiante":739,"id_evaluacion":324000,"nota_resul_eval":5.7}
	,{"_id":50550,"id_estudiante":758,"id_evaluacion":200400,"nota_resul_eval":5.4}
	,{"_id":50700,"id_estudiante":968,"id_evaluacion":175200,"nota_resul_eval":5}
	,{"_id":50850,"id_estudiante":778,"id_evaluacion":187500,"nota_resul_eval":6}
	,{"_id":51000,"id_estudiante":205,"id_evaluacion":51000,"nota_resul_eval":5.9}
	,{"_id":51150,"id_estudiante":939,"id_evaluacion":280800,"nota_resul_eval":3.2}
	,{"_id":51300,"id_estudiante":787,"id_evaluacion":245100,"nota_resul_eval":5.6}
	,{"_id":51450,"id_estudiante":861,"id_evaluacion":152100,"nota_resul_eval":4.7}
	,{"_id":51600,"id_estudiante":14,"id_evaluacion":114600,"nota_resul_eval":4.9}
	,{"_id":51750,"id_estudiante":935,"id_evaluacion":50100,"nota_resul_eval":3.6}
	,{"_id":51900,"id_estudiante":526,"id_evaluacion":72300,"nota_resul_eval":5.5}
	,{"_id":52050,"id_estudiante":679,"id_evaluacion":20100,"nota_resul_eval":6}
	,{"_id":52200,"id_estudiante":876,"id_evaluacion":331500,"nota_resul_eval":6.3}
	,{"_id":52350,"id_estudiante":357,"id_evaluacion":194100,"nota_resul_eval":4.6}
	,{"_id":52500,"id_estudiante":971,"id_evaluacion":309300,"nota_resul_eval":4.5}
	,{"_id":52650,"id_estudiante":743,"id_evaluacion":79800,"nota_resul_eval":6.1}
	,{"_id":52800,"id_estudiante":208,"id_evaluacion":157500,"nota_resul_eval":5.4}
	,{"_id":52950,"id_estudiante":624,"id_evaluacion":271500,"nota_resul_eval":6.9}
	,{"_id":53100,"id_estudiante":226,"id_evaluacion":54300,"nota_resul_eval":6.8}
	,{"_id":53250,"id_estudiante":994,"id_evaluacion":338400,"nota_resul_eval":5.3}
	,{"_id":53400,"id_estudiante":421,"id_evaluacion":35100,"nota_resul_eval":4.2}
	,{"_id":53550,"id_estudiante":667,"id_evaluacion":122700,"nota_resul_eval":6.2}
	,{"_id":53700,"id_estudiante":51,"id_evaluacion":118200,"nota_resul_eval":5.6}
	,{"_id":53850,"id_estudiante":880,"id_evaluacion":329700,"nota_resul_eval":4}
	,{"_id":54000,"id_estudiante":222,"id_evaluacion":285600,"nota_resul_eval":3.6}
	,{"_id":54150,"id_estudiante":965,"id_evaluacion":141600,"nota_resul_eval":5.3}
	,{"_id":54300,"id_estudiante":710,"id_evaluacion":24300,"nota_resul_eval":5.4}
	,{"_id":54450,"id_estudiante":431,"id_evaluacion":341700,"nota_resul_eval":5.1}
	,{"_id":54600,"id_estudiante":857,"id_evaluacion":131700,"nota_resul_eval":6.7}
	,{"_id":54750,"id_estudiante":524,"id_evaluacion":110100,"nota_resul_eval":3.4}
	,{"_id":54900,"id_estudiante":305,"id_evaluacion":41400,"nota_resul_eval":3.8}
	,{"_id":55050,"id_estudiante":791,"id_evaluacion":157200,"nota_resul_eval":5.8}
	,{"_id":55200,"id_estudiante":847,"id_evaluacion":117000,"nota_resul_eval":4.1}
	,{"_id":55350,"id_estudiante":375,"id_evaluacion":195300,"nota_resul_eval":5.6}
	,{"_id":55500,"id_estudiante":149,"id_evaluacion":215400,"nota_resul_eval":4.1}
	,{"_id":55650,"id_estudiante":235,"id_evaluacion":129600,"nota_resul_eval":3.8}
	,{"_id":55800,"id_estudiante":915,"id_evaluacion":107400,"nota_resul_eval":3.6}
	,{"_id":55950,"id_estudiante":928,"id_evaluacion":303300,"nota_resul_eval":4.4}
	,{"_id":56100,"id_estudiante":176,"id_evaluacion":159000,"nota_resul_eval":5.5}
	,{"_id":56250,"id_estudiante":809,"id_evaluacion":267300,"nota_resul_eval":3.1}
	,{"_id":56400,"id_estudiante":860,"id_evaluacion":285300,"nota_resul_eval":7}
	,{"_id":56550,"id_estudiante":677,"id_evaluacion":274200,"nota_resul_eval":6.9}
	,{"_id":56700,"id_estudiante":399,"id_evaluacion":167400,"nota_resul_eval":4.7}
	,{"_id":56850,"id_estudiante":664,"id_evaluacion":324900,"nota_resul_eval":4.5}
	,{"_id":57000,"id_estudiante":447,"id_evaluacion":141900,"nota_resul_eval":6.8}
	,{"_id":57150,"id_estudiante":266,"id_evaluacion":50700,"nota_resul_eval":5}
	,{"_id":57300,"id_estudiante":220,"id_evaluacion":51000,"nota_resul_eval":6.7}
	,{"_id":57450,"id_estudiante":681,"id_evaluacion":219300,"nota_resul_eval":6}
	,{"_id":57600,"id_estudiante":907,"id_evaluacion":108900,"nota_resul_eval":5.2}
	,{"_id":57750,"id_estudiante":182,"id_evaluacion":188700,"nota_resul_eval":6.3}
	,{"_id":57900,"id_estudiante":375,"id_evaluacion":264300,"nota_resul_eval":5.1}
	,{"_id":58050,"id_estudiante":443,"id_evaluacion":289800,"nota_resul_eval":4.2}
	,{"_id":58200,"id_estudiante":348,"id_evaluacion":46200,"nota_resul_eval":4.6}
	,{"_id":58350,"id_estudiante":794,"id_evaluacion":185700,"nota_resul_eval":6.5}
	,{"_id":58500,"id_estudiante":751,"id_evaluacion":326400,"nota_resul_eval":5.8}
	,{"_id":58650,"id_estudiante":818,"id_evaluacion":260400,"nota_resul_eval":3.3}
	,{"_id":58800,"id_estudiante":77,"id_evaluacion":24900,"nota_resul_eval":3.4}
	,{"_id":58950,"id_estudiante":797,"id_evaluacion":319200,"nota_resul_eval":3.4}
	,{"_id":59100,"id_estudiante":69,"id_evaluacion":336600,"nota_resul_eval":4.4}
	,{"_id":59250,"id_estudiante":691,"id_evaluacion":238800,"nota_resul_eval":3.5}
	,{"_id":59400,"id_estudiante":762,"id_evaluacion":228900,"nota_resul_eval":4.4}
	,{"_id":59550,"id_estudiante":373,"id_evaluacion":246000,"nota_resul_eval":6.1}
	,{"_id":59700,"id_estudiante":929,"id_evaluacion":177600,"nota_resul_eval":4.7}
	,{"_id":59850,"id_estudiante":841,"id_evaluacion":238500,"nota_resul_eval":5.2}
	,{"_id":60000,"id_estudiante":225,"id_evaluacion":112200,"nota_resul_eval":4.5}
	,{"_id":60150,"id_estudiante":666,"id_evaluacion":72300,"nota_resul_eval":6.5}
	,{"_id":60300,"id_estudiante":952,"id_evaluacion":171900,"nota_resul_eval":4.7}
	,{"_id":60450,"id_estudiante":293,"id_evaluacion":239100,"nota_resul_eval":3.1}
	,{"_id":60600,"id_estudiante":996,"id_evaluacion":59400,"nota_resul_eval":3.4}
	,{"_id":60750,"id_estudiante":753,"id_evaluacion":134100,"nota_resul_eval":3.2}
	,{"_id":60900,"id_estudiante":85,"id_evaluacion":111600,"nota_resul_eval":6}
	,{"_id":61050,"id_estudiante":335,"id_evaluacion":333600,"nota_resul_eval":4.6}
	,{"_id":61200,"id_estudiante":478,"id_evaluacion":306900,"nota_resul_eval":4.7}
	,{"_id":61350,"id_estudiante":648,"id_evaluacion":171000,"nota_resul_eval":3.1}
	,{"_id":61500,"id_estudiante":303,"id_evaluacion":255900,"nota_resul_eval":4.2}
	,{"_id":61650,"id_estudiante":366,"id_evaluacion":208800,"nota_resul_eval":6.9}
	,{"_id":61800,"id_estudiante":255,"id_evaluacion":82500,"nota_resul_eval":4.1}
	,{"_id":61950,"id_estudiante":147,"id_evaluacion":351300,"nota_resul_eval":4.5}
	,{"_id":62100,"id_estudiante":476,"id_evaluacion":290100,"nota_resul_eval":3.6}
	,{"_id":62250,"id_estudiante":950,"id_evaluacion":19500,"nota_resul_eval":6.7}
	,{"_id":62400,"id_estudiante":110,"id_evaluacion":317100,"nota_resul_eval":6}
	,{"_id":62550,"id_estudiante":404,"id_evaluacion":291600,"nota_resul_eval":6}
	,{"_id":62700,"id_estudiante":79,"id_evaluacion":218100,"nota_resul_eval":6.9}
	,{"_id":62850,"id_estudiante":451,"id_evaluacion":63300,"nota_resul_eval":4.1}
	,{"_id":63000,"id_estudiante":420,"id_evaluacion":340200,"nota_resul_eval":3.6}
	,{"_id":63150,"id_estudiante":986,"id_evaluacion":150600,"nota_resul_eval":4.3}
	,{"_id":63300,"id_estudiante":218,"id_evaluacion":198600,"nota_resul_eval":5.7}
	,{"_id":63450,"id_estudiante":896,"id_evaluacion":336600,"nota_resul_eval":4.2}
	,{"_id":63600,"id_estudiante":557,"id_evaluacion":297600,"nota_resul_eval":4.5}
	,{"_id":63750,"id_estudiante":366,"id_evaluacion":336900,"nota_resul_eval":4.5}
	,{"_id":63900,"id_estudiante":718,"id_evaluacion":253200,"nota_resul_eval":5.5}
	,{"_id":64050,"id_estudiante":159,"id_evaluacion":320700,"nota_resul_eval":5.4}
	,{"_id":64200,"id_estudiante":432,"id_evaluacion":104100,"nota_resul_eval":5.4}
	,{"_id":64350,"id_estudiante":973,"id_evaluacion":48300,"nota_resul_eval":5.2}
	,{"_id":64500,"id_estudiante":20,"id_evaluacion":176100,"nota_resul_eval":5.1}
	,{"_id":64650,"id_estudiante":882,"id_evaluacion":177300,"nota_resul_eval":5.5}
	,{"_id":64800,"id_estudiante":504,"id_evaluacion":22500,"nota_resul_eval":4.5}
	,{"_id":64950,"id_estudiante":911,"id_evaluacion":248700,"nota_resul_eval":3}
	,{"_id":65100,"id_estudiante":906,"id_evaluacion":294600,"nota_resul_eval":4.5}
	,{"_id":65250,"id_estudiante":579,"id_evaluacion":167400,"nota_resul_eval":4.9}
	,{"_id":65400,"id_estudiante":568,"id_evaluacion":3300,"nota_resul_eval":6.6}
	,{"_id":65550,"id_estudiante":930,"id_evaluacion":85800,"nota_resul_eval":4.8}
	,{"_id":65700,"id_estudiante":370,"id_evaluacion":321300,"nota_resul_eval":5.2}
	,{"_id":65850,"id_estudiante":145,"id_evaluacion":274800,"nota_resul_eval":5.2}
	,{"_id":66000,"id_estudiante":894,"id_evaluacion":36300,"nota_resul_eval":6.8}
	,{"_id":66150,"id_estudiante":418,"id_evaluacion":99900,"nota_resul_eval":6.2}
	,{"_id":66300,"id_estudiante":566,"id_evaluacion":156000,"nota_resul_eval":3.1}
	,{"_id":66450,"id_estudiante":938,"id_evaluacion":331200,"nota_resul_eval":6.5}
	,{"_id":66600,"id_estudiante":340,"id_evaluacion":6000,"nota_resul_eval":4.2}
	,{"_id":66750,"id_estudiante":857,"id_evaluacion":229200,"nota_resul_eval":4.5}
	,{"_id":66900,"id_estudiante":425,"id_evaluacion":257700,"nota_resul_eval":5.7}
	,{"_id":67050,"id_estudiante":37,"id_evaluacion":96300,"nota_resul_eval":4.4}
	,{"_id":67200,"id_estudiante":500,"id_evaluacion":335100,"nota_resul_eval":5.7}
	,{"_id":67350,"id_estudiante":98,"id_evaluacion":299700,"nota_resul_eval":3.6}
	,{"_id":67500,"id_estudiante":913,"id_evaluacion":355200,"nota_resul_eval":5.9}
	,{"_id":67650,"id_estudiante":521,"id_evaluacion":75000,"nota_resul_eval":6}
	,{"_id":67800,"id_estudiante":384,"id_evaluacion":38700,"nota_resul_eval":6.7}
	,{"_id":67950,"id_estudiante":608,"id_evaluacion":31500,"nota_resul_eval":6.6}
	,{"_id":68100,"id_estudiante":109,"id_evaluacion":140400,"nota_resul_eval":3.7}
	,{"_id":68250,"id_estudiante":461,"id_evaluacion":263100,"nota_resul_eval":6.3}
	,{"_id":68400,"id_estudiante":310,"id_evaluacion":241200,"nota_resul_eval":5.6}
	,{"_id":68550,"id_estudiante":178,"id_evaluacion":197100,"nota_resul_eval":5.9}
	,{"_id":68700,"id_estudiante":306,"id_evaluacion":121500,"nota_resul_eval":4.7}
	,{"_id":68850,"id_estudiante":578,"id_evaluacion":348300,"nota_resul_eval":4}
	,{"_id":69000,"id_estudiante":187,"id_evaluacion":258900,"nota_resul_eval":3.3}
	,{"_id":69150,"id_estudiante":446,"id_evaluacion":294000,"nota_resul_eval":5.4}
	,{"_id":69300,"id_estudiante":102,"id_evaluacion":39300,"nota_resul_eval":6.1}
	,{"_id":69450,"id_estudiante":32,"id_evaluacion":268200,"nota_resul_eval":6.1}
	,{"_id":69600,"id_estudiante":437,"id_evaluacion":77400,"nota_resul_eval":3.5}
	,{"_id":69750,"id_estudiante":509,"id_evaluacion":21000,"nota_resul_eval":3.9}
	,{"_id":69900,"id_estudiante":231,"id_evaluacion":39000,"nota_resul_eval":3.3}
	,{"_id":70050,"id_estudiante":619,"id_evaluacion":174000,"nota_resul_eval":5.5}
	,{"_id":70200,"id_estudiante":645,"id_evaluacion":316500,"nota_resul_eval":5.5}
	,{"_id":70350,"id_estudiante":715,"id_evaluacion":156900,"nota_resul_eval":3.5}
	,{"_id":70500,"id_estudiante":846,"id_evaluacion":118200,"nota_resul_eval":6}
	,{"_id":70650,"id_estudiante":853,"id_evaluacion":215700,"nota_resul_eval":5.6}
	,{"_id":70800,"id_estudiante":412,"id_evaluacion":69900,"nota_resul_eval":6.3}
	,{"_id":70950,"id_estudiante":792,"id_evaluacion":56100,"nota_resul_eval":4.8}
	,{"_id":71100,"id_estudiante":130,"id_evaluacion":20400,"nota_resul_eval":5.3}
	,{"_id":71250,"id_estudiante":999,"id_evaluacion":157500,"nota_resul_eval":3.4}
	,{"_id":71400,"id_estudiante":167,"id_evaluacion":308700,"nota_resul_eval":3.6}
	,{"_id":71550,"id_estudiante":195,"id_evaluacion":306000,"nota_resul_eval":4.9}
	,{"_id":71700,"id_estudiante":801,"id_evaluacion":2700,"nota_resul_eval":3.1}
	,{"_id":71850,"id_estudiante":627,"id_evaluacion":327300,"nota_resul_eval":3.1}
	,{"_id":72000,"id_estudiante":409,"id_evaluacion":217200,"nota_resul_eval":5.2}
	,{"_id":72150,"id_estudiante":656,"id_evaluacion":43200,"nota_resul_eval":4.7}
	,{"_id":72300,"id_estudiante":15,"id_evaluacion":252000,"nota_resul_eval":5.9}
	,{"_id":72450,"id_estudiante":318,"id_evaluacion":126900,"nota_resul_eval":4.1}
	,{"_id":72600,"id_estudiante":724,"id_evaluacion":188400,"nota_resul_eval":6.6}
	,{"_id":72750,"id_estudiante":653,"id_evaluacion":197400,"nota_resul_eval":4.6}
	,{"_id":72900,"id_estudiante":735,"id_evaluacion":243000,"nota_resul_eval":3.2}
	,{"_id":73050,"id_estudiante":356,"id_evaluacion":306900,"nota_resul_eval":5.3}
	,{"_id":73200,"id_estudiante":709,"id_evaluacion":207900,"nota_resul_eval":3.3}
	,{"_id":73350,"id_estudiante":758,"id_evaluacion":92400,"nota_resul_eval":3.4}
	,{"_id":73500,"id_estudiante":978,"id_evaluacion":177000,"nota_resul_eval":3.9}
	,{"_id":73650,"id_estudiante":281,"id_evaluacion":150600,"nota_resul_eval":6}
	,{"_id":73800,"id_estudiante":22,"id_evaluacion":113100,"nota_resul_eval":4.9}
	,{"_id":73950,"id_estudiante":680,"id_evaluacion":23700,"nota_resul_eval":6.1}
	,{"_id":74100,"id_estudiante":316,"id_evaluacion":274200,"nota_resul_eval":6.2}
	,{"_id":74250,"id_estudiante":764,"id_evaluacion":161400,"nota_resul_eval":3.4}
	,{"_id":74400,"id_estudiante":362,"id_evaluacion":85500,"nota_resul_eval":4.3}
	,{"_id":74550,"id_estudiante":771,"id_evaluacion":102600,"nota_resul_eval":7}
	,{"_id":74700,"id_estudiante":693,"id_evaluacion":220200,"nota_resul_eval":3.9}
	,{"_id":74850,"id_estudiante":54,"id_evaluacion":174300,"nota_resul_eval":5.7}
	,{"_id":75000,"id_estudiante":466,"id_evaluacion":287100,"nota_resul_eval":3.4}
	,{"_id":75150,"id_estudiante":249,"id_evaluacion":240600,"nota_resul_eval":5.5}
	,{"_id":75300,"id_estudiante":182,"id_evaluacion":210900,"nota_resul_eval":4.6}
	,{"_id":75450,"id_estudiante":898,"id_evaluacion":261900,"nota_resul_eval":3.4}
	,{"_id":75600,"id_estudiante":801,"id_evaluacion":10800,"nota_resul_eval":3.4}
	,{"_id":75750,"id_estudiante":741,"id_evaluacion":199800,"nota_resul_eval":5.5}
	,{"_id":75900,"id_estudiante":563,"id_evaluacion":315600,"nota_resul_eval":5.9}
	,{"_id":76050,"id_estudiante":444,"id_evaluacion":215400,"nota_resul_eval":4.7}
	,{"_id":76200,"id_estudiante":966,"id_evaluacion":333000,"nota_resul_eval":4.4}
	,{"_id":76350,"id_estudiante":976,"id_evaluacion":48300,"nota_resul_eval":4.5}
	,{"_id":76500,"id_estudiante":777,"id_evaluacion":250500,"nota_resul_eval":4.3}
	,{"_id":76650,"id_estudiante":487,"id_evaluacion":289500,"nota_resul_eval":3.1}
	,{"_id":76800,"id_estudiante":476,"id_evaluacion":244800,"nota_resul_eval":6.9}
	,{"_id":76950,"id_estudiante":860,"id_evaluacion":84900,"nota_resul_eval":4.5}
	,{"_id":77100,"id_estudiante":696,"id_evaluacion":47100,"nota_resul_eval":5.7}
	,{"_id":77250,"id_estudiante":252,"id_evaluacion":337800,"nota_resul_eval":6.8}
	,{"_id":77400,"id_estudiante":926,"id_evaluacion":297000,"nota_resul_eval":4.1}
	,{"_id":77550,"id_estudiante":259,"id_evaluacion":38400,"nota_resul_eval":3.2}
	,{"_id":77700,"id_estudiante":81,"id_evaluacion":104700,"nota_resul_eval":4}
	,{"_id":77850,"id_estudiante":362,"id_evaluacion":331500,"nota_resul_eval":3.5}
	,{"_id":78000,"id_estudiante":292,"id_evaluacion":196200,"nota_resul_eval":6.3}
	,{"_id":78150,"id_estudiante":91,"id_evaluacion":157800,"nota_resul_eval":4.1}
	,{"_id":78300,"id_estudiante":377,"id_evaluacion":118200,"nota_resul_eval":5.5}
	,{"_id":78450,"id_estudiante":177,"id_evaluacion":278100,"nota_resul_eval":4.9}
	,{"_id":78600,"id_estudiante":412,"id_evaluacion":277800,"nota_resul_eval":4.6}
	,{"_id":78750,"id_estudiante":585,"id_evaluacion":48600,"nota_resul_eval":5.7}
	,{"_id":78900,"id_estudiante":42,"id_evaluacion":206400,"nota_resul_eval":4.4}
	,{"_id":79050,"id_estudiante":812,"id_evaluacion":100500,"nota_resul_eval":5.3}
	,{"_id":79200,"id_estudiante":876,"id_evaluacion":64200,"nota_resul_eval":5.5}
	,{"_id":79350,"id_estudiante":886,"id_evaluacion":193500,"nota_resul_eval":3.3}
	,{"_id":79500,"id_estudiante":163,"id_evaluacion":177900,"nota_resul_eval":5.6}
	,{"_id":79650,"id_estudiante":451,"id_evaluacion":29100,"nota_resul_eval":5.4}
	,{"_id":79800,"id_estudiante":184,"id_evaluacion":246300,"nota_resul_eval":6.8}
	,{"_id":79950,"id_estudiante":407,"id_evaluacion":312000,"nota_resul_eval":6.3}
	,{"_id":80100,"id_estudiante":879,"id_evaluacion":225000,"nota_resul_eval":3.4}
	,{"_id":80250,"id_estudiante":382,"id_evaluacion":45600,"nota_resul_eval":4.6}
	,{"_id":80400,"id_estudiante":181,"id_evaluacion":274500,"nota_resul_eval":6.8}
	,{"_id":80550,"id_estudiante":85,"id_evaluacion":289800,"nota_resul_eval":6.6}
	,{"_id":80700,"id_estudiante":473,"id_evaluacion":223500,"nota_resul_eval":4.5}
	,{"_id":80850,"id_estudiante":144,"id_evaluacion":180000,"nota_resul_eval":5}
	,{"_id":81000,"id_estudiante":923,"id_evaluacion":319200,"nota_resul_eval":5}
	,{"_id":81150,"id_estudiante":52,"id_evaluacion":261900,"nota_resul_eval":6.5}
	,{"_id":81300,"id_estudiante":858,"id_evaluacion":24900,"nota_resul_eval":4.6}
	,{"_id":81450,"id_estudiante":306,"id_evaluacion":347100,"nota_resul_eval":5.6}
	,{"_id":81600,"id_estudiante":455,"id_evaluacion":107400,"nota_resul_eval":3.8}
	,{"_id":81750,"id_estudiante":977,"id_evaluacion":162000,"nota_resul_eval":4.3}
	,{"_id":81900,"id_estudiante":507,"id_evaluacion":70200,"nota_resul_eval":5.1}
	,{"_id":82050,"id_estudiante":81,"id_evaluacion":102000,"nota_resul_eval":6.9}
	,{"_id":82200,"id_estudiante":492,"id_evaluacion":221100,"nota_resul_eval":6.2}
	,{"_id":82350,"id_estudiante":712,"id_evaluacion":326400,"nota_resul_eval":4.4}
	,{"_id":82500,"id_estudiante":331,"id_evaluacion":321000,"nota_resul_eval":5.2}
	,{"_id":82650,"id_estudiante":227,"id_evaluacion":343800,"nota_resul_eval":4.1}
	,{"_id":82800,"id_estudiante":292,"id_evaluacion":158400,"nota_resul_eval":5.2}
	,{"_id":82950,"id_estudiante":444,"id_evaluacion":189000,"nota_resul_eval":7}
	,{"_id":83100,"id_estudiante":238,"id_evaluacion":111000,"nota_resul_eval":6.6}
	,{"_id":83250,"id_estudiante":267,"id_evaluacion":256500,"nota_resul_eval":3.6}
	,{"_id":83400,"id_estudiante":489,"id_evaluacion":169800,"nota_resul_eval":4.5}
	,{"_id":83550,"id_estudiante":631,"id_evaluacion":11700,"nota_resul_eval":5.9}
	,{"_id":83700,"id_estudiante":690,"id_evaluacion":222900,"nota_resul_eval":6.9}
	,{"_id":83850,"id_estudiante":643,"id_evaluacion":102300,"nota_resul_eval":6.5}
	,{"_id":84000,"id_estudiante":859,"id_evaluacion":313500,"nota_resul_eval":5.6}
	,{"_id":84150,"id_estudiante":39,"id_evaluacion":316500,"nota_resul_eval":5.6}
	,{"_id":84300,"id_estudiante":216,"id_evaluacion":44400,"nota_resul_eval":5.5}
	,{"_id":84450,"id_estudiante":92,"id_evaluacion":169500,"nota_resul_eval":6.1}
	,{"_id":84600,"id_estudiante":518,"id_evaluacion":107700,"nota_resul_eval":3.8}
	,{"_id":84750,"id_estudiante":413,"id_evaluacion":347700,"nota_resul_eval":6.9}
	,{"_id":84900,"id_estudiante":423,"id_evaluacion":85800,"nota_resul_eval":5.5}
	,{"_id":85050,"id_estudiante":601,"id_evaluacion":100200,"nota_resul_eval":5}
	,{"_id":85200,"id_estudiante":9,"id_evaluacion":13500,"nota_resul_eval":5.5}
	,{"_id":85350,"id_estudiante":755,"id_evaluacion":288000,"nota_resul_eval":6.6}
	,{"_id":85500,"id_estudiante":449,"id_evaluacion":289800,"nota_resul_eval":5.8}
	,{"_id":85650,"id_estudiante":293,"id_evaluacion":17400,"nota_resul_eval":5.1}
	,{"_id":85800,"id_estudiante":909,"id_evaluacion":36300,"nota_resul_eval":6.8}
	,{"_id":85950,"id_estudiante":282,"id_evaluacion":176700,"nota_resul_eval":5.4}
	,{"_id":86100,"id_estudiante":43,"id_evaluacion":106500,"nota_resul_eval":3.2}
	,{"_id":86250,"id_estudiante":749,"id_evaluacion":20100,"nota_resul_eval":3.8}
	,{"_id":86400,"id_estudiante":26,"id_evaluacion":289800,"nota_resul_eval":3.3}
	,{"_id":86550,"id_estudiante":922,"id_evaluacion":194700,"nota_resul_eval":4.5}
	,{"_id":86700,"id_estudiante":313,"id_evaluacion":18600,"nota_resul_eval":4.8}
	,{"_id":86850,"id_estudiante":654,"id_evaluacion":315000,"nota_resul_eval":4.6}
	,{"_id":87000,"id_estudiante":256,"id_evaluacion":228600,"nota_resul_eval":4.4}
	,{"_id":87150,"id_estudiante":912,"id_evaluacion":349800,"nota_resul_eval":6.8}
	,{"_id":87300,"id_estudiante":42,"id_evaluacion":195900,"nota_resul_eval":5.6}
	,{"_id":87450,"id_estudiante":739,"id_evaluacion":165900,"nota_resul_eval":6.6}
	,{"_id":87600,"id_estudiante":594,"id_evaluacion":173400,"nota_resul_eval":3.1}
	,{"_id":87750,"id_estudiante":119,"id_evaluacion":300000,"nota_resul_eval":5.5}
	,{"_id":87900,"id_estudiante":608,"id_evaluacion":136800,"nota_resul_eval":5}
	,{"_id":88050,"id_estudiante":643,"id_evaluacion":33900,"nota_resul_eval":5.5}
	,{"_id":88200,"id_estudiante":898,"id_evaluacion":229500,"nota_resul_eval":4.8}
	,{"_id":88350,"id_estudiante":423,"id_evaluacion":304800,"nota_resul_eval":3.7}
	,{"_id":88500,"id_estudiante":863,"id_evaluacion":73200,"nota_resul_eval":3.3}
	,{"_id":88650,"id_estudiante":858,"id_evaluacion":204000,"nota_resul_eval":4}
	,{"_id":88800,"id_estudiante":116,"id_evaluacion":240600,"nota_resul_eval":6.3}
	,{"_id":88950,"id_estudiante":127,"id_evaluacion":200700,"nota_resul_eval":3.5}
	,{"_id":89100,"id_estudiante":979,"id_evaluacion":330300,"nota_resul_eval":3.1}
	,{"_id":89250,"id_estudiante":194,"id_evaluacion":153000,"nota_resul_eval":3.8}
	,{"_id":89400,"id_estudiante":238,"id_evaluacion":55800,"nota_resul_eval":3.6}
	,{"_id":89550,"id_estudiante":857,"id_evaluacion":356700,"nota_resul_eval":4.1}
	,{"_id":89700,"id_estudiante":252,"id_evaluacion":95400,"nota_resul_eval":3.2}
	,{"_id":89850,"id_estudiante":345,"id_evaluacion":324300,"nota_resul_eval":6.9}
	,{"_id":90000,"id_estudiante":759,"id_evaluacion":125400,"nota_resul_eval":3.9}
	,{"_id":90150,"id_estudiante":45,"id_evaluacion":261600,"nota_resul_eval":6.2}
	,{"_id":90300,"id_estudiante":453,"id_evaluacion":321600,"nota_resul_eval":5.6}
	,{"_id":90450,"id_estudiante":420,"id_evaluacion":160800,"nota_resul_eval":6.5}
	,{"_id":90600,"id_estudiante":378,"id_evaluacion":13200,"nota_resul_eval":4}
	,{"_id":90750,"id_estudiante":292,"id_evaluacion":69600,"nota_resul_eval":6.1}
	,{"_id":90900,"id_estudiante":777,"id_evaluacion":124500,"nota_resul_eval":5}
	,{"_id":91050,"id_estudiante":813,"id_evaluacion":266100,"nota_resul_eval":6}
	,{"_id":91200,"id_estudiante":902,"id_evaluacion":359400,"nota_resul_eval":5.8}
	,{"_id":91350,"id_estudiante":725,"id_evaluacion":243900,"nota_resul_eval":3.3}
	,{"_id":91500,"id_estudiante":259,"id_evaluacion":27900,"nota_resul_eval":6.9}
	,{"_id":91650,"id_estudiante":858,"id_evaluacion":103800,"nota_resul_eval":6.3}
	,{"_id":91800,"id_estudiante":398,"id_evaluacion":81600,"nota_resul_eval":4.9}
	,{"_id":91950,"id_estudiante":554,"id_evaluacion":173400,"nota_resul_eval":4.4}
	,{"_id":92100,"id_estudiante":491,"id_evaluacion":355500,"nota_resul_eval":5.6}
	,{"_id":92250,"id_estudiante":455,"id_evaluacion":356100,"nota_resul_eval":6.8}
	,{"_id":92400,"id_estudiante":987,"id_evaluacion":251400,"nota_resul_eval":6.1}
	,{"_id":92550,"id_estudiante":798,"id_evaluacion":175500,"nota_resul_eval":4.9}
	,{"_id":92700,"id_estudiante":616,"id_evaluacion":204600,"nota_resul_eval":6.6}
	,{"_id":92850,"id_estudiante":190,"id_evaluacion":42300,"nota_resul_eval":4.3}
	,{"_id":93000,"id_estudiante":151,"id_evaluacion":341700,"nota_resul_eval":6.8}
	,{"_id":93150,"id_estudiante":318,"id_evaluacion":284700,"nota_resul_eval":3.5}
	,{"_id":93300,"id_estudiante":119,"id_evaluacion":145800,"nota_resul_eval":3}
	,{"_id":93450,"id_estudiante":193,"id_evaluacion":175500,"nota_resul_eval":4.6}
	,{"_id":93600,"id_estudiante":586,"id_evaluacion":234300,"nota_resul_eval":3.4}
	,{"_id":93750,"id_estudiante":782,"id_evaluacion":358500,"nota_resul_eval":5.4}
	,{"_id":93900,"id_estudiante":918,"id_evaluacion":48300,"nota_resul_eval":6.5}
	,{"_id":94050,"id_estudiante":822,"id_evaluacion":176100,"nota_resul_eval":3.9}
	,{"_id":94200,"id_estudiante":532,"id_evaluacion":31500,"nota_resul_eval":3.2}
	,{"_id":94350,"id_estudiante":432,"id_evaluacion":197700,"nota_resul_eval":6.3}
	,{"_id":94500,"id_estudiante":126,"id_evaluacion":127500,"nota_resul_eval":6.5}
	,{"_id":94650,"id_estudiante":155,"id_evaluacion":290400,"nota_resul_eval":4.6}
	,{"_id":94800,"id_estudiante":88,"id_evaluacion":209100,"nota_resul_eval":6.1}
	,{"_id":94950,"id_estudiante":944,"id_evaluacion":39600,"nota_resul_eval":4.9}
	,{"_id":95100,"id_estudiante":740,"id_evaluacion":97500,"nota_resul_eval":5.4}
	,{"_id":95250,"id_estudiante":489,"id_evaluacion":142800,"nota_resul_eval":4.9}
	,{"_id":95400,"id_estudiante":519,"id_evaluacion":233100,"nota_resul_eval":6.9}
	,{"_id":95550,"id_estudiante":205,"id_evaluacion":12000,"nota_resul_eval":4.9}
	,{"_id":95700,"id_estudiante":942,"id_evaluacion":34200,"nota_resul_eval":5}
	,{"_id":95850,"id_estudiante":436,"id_evaluacion":282300,"nota_resul_eval":3.2}
	,{"_id":96000,"id_estudiante":568,"id_evaluacion":71100,"nota_resul_eval":3.6}
	,{"_id":96150,"id_estudiante":693,"id_evaluacion":201300,"nota_resul_eval":4.2}
	,{"_id":96300,"id_estudiante":854,"id_evaluacion":61200,"nota_resul_eval":6.3}
	,{"_id":96450,"id_estudiante":963,"id_evaluacion":178500,"nota_resul_eval":6.7}
	,{"_id":96600,"id_estudiante":857,"id_evaluacion":308700,"nota_resul_eval":4.5}
	,{"_id":96750,"id_estudiante":225,"id_evaluacion":273900,"nota_resul_eval":3.5}
	,{"_id":96900,"id_estudiante":449,"id_evaluacion":21600,"nota_resul_eval":4.4}
	,{"_id":97050,"id_estudiante":863,"id_evaluacion":69300,"nota_resul_eval":5.6}
	,{"_id":97200,"id_estudiante":361,"id_evaluacion":168900,"nota_resul_eval":4.3}
	,{"_id":97350,"id_estudiante":643,"id_evaluacion":195000,"nota_resul_eval":4.9}
	,{"_id":97500,"id_estudiante":401,"id_evaluacion":249900,"nota_resul_eval":3.4}
	,{"_id":97650,"id_estudiante":223,"id_evaluacion":332400,"nota_resul_eval":4.6}
	,{"_id":97800,"id_estudiante":69,"id_evaluacion":206100,"nota_resul_eval":3.9}
	,{"_id":97950,"id_estudiante":787,"id_evaluacion":225300,"nota_resul_eval":6.8}
	,{"_id":98100,"id_estudiante":247,"id_evaluacion":67500,"nota_resul_eval":4.8}
	,{"_id":98250,"id_estudiante":730,"id_evaluacion":131700,"nota_resul_eval":3.2}
	,{"_id":98400,"id_estudiante":534,"id_evaluacion":225000,"nota_resul_eval":4.1}
	,{"_id":98550,"id_estudiante":172,"id_evaluacion":207000,"nota_resul_eval":6.3}
	,{"_id":98700,"id_estudiante":130,"id_evaluacion":260100,"nota_resul_eval":5.7}
	,{"_id":98850,"id_estudiante":566,"id_evaluacion":211500,"nota_resul_eval":6.6}
	,{"_id":99000,"id_estudiante":68,"id_evaluacion":254700,"nota_resul_eval":4.9}
	,{"_id":99150,"id_estudiante":810,"id_evaluacion":276900,"nota_resul_eval":4.9}
	,{"_id":99300,"id_estudiante":630,"id_evaluacion":352500,"nota_resul_eval":4.1}
	,{"_id":99450,"id_estudiante":256,"id_evaluacion":137100,"nota_resul_eval":4.6}
	,{"_id":99600,"id_estudiante":410,"id_evaluacion":359400,"nota_resul_eval":4.3}
	,{"_id":99750,"id_estudiante":681,"id_evaluacion":68400,"nota_resul_eval":5.7}
	,{"_id":99900,"id_estudiante":127,"id_evaluacion":260400,"nota_resul_eval":4.5}
	,{"_id":100050,"id_estudiante":726,"id_evaluacion":139500,"nota_resul_eval":3.5}
	,{"_id":100200,"id_estudiante":930,"id_evaluacion":139200,"nota_resul_eval":6}
	,{"_id":100350,"id_estudiante":872,"id_evaluacion":26700,"nota_resul_eval":4.6}
	,{"_id":100500,"id_estudiante":505,"id_evaluacion":329700,"nota_resul_eval":4.3}
	,{"_id":100650,"id_estudiante":431,"id_evaluacion":330600,"nota_resul_eval":6.6}
	,{"_id":100800,"id_estudiante":693,"id_evaluacion":227400,"nota_resul_eval":5.6}
	,{"_id":100950,"id_estudiante":32,"id_evaluacion":149400,"nota_resul_eval":3.4}
	,{"_id":101100,"id_estudiante":185,"id_evaluacion":300,"nota_resul_eval":6.7}
	,{"_id":101250,"id_estudiante":481,"id_evaluacion":140100,"nota_resul_eval":4.7}
	,{"_id":101400,"id_estudiante":817,"id_evaluacion":136200,"nota_resul_eval":4.1}
	,{"_id":101550,"id_estudiante":592,"id_evaluacion":155100,"nota_resul_eval":3.5}
	,{"_id":101700,"id_estudiante":173,"id_evaluacion":189300,"nota_resul_eval":4.2}
	,{"_id":101850,"id_estudiante":979,"id_evaluacion":151200,"nota_resul_eval":3.1}
	,{"_id":102000,"id_estudiante":765,"id_evaluacion":353400,"nota_resul_eval":6.2}
	,{"_id":102150,"id_estudiante":975,"id_evaluacion":84300,"nota_resul_eval":5.8}
	,{"_id":102300,"id_estudiante":933,"id_evaluacion":69900,"nota_resul_eval":5.4}
	,{"_id":102450,"id_estudiante":278,"id_evaluacion":141000,"nota_resul_eval":5.2}
	,{"_id":102600,"id_estudiante":138,"id_evaluacion":342000,"nota_resul_eval":4.6}
	,{"_id":102750,"id_estudiante":280,"id_evaluacion":77400,"nota_resul_eval":4.4}
	,{"_id":102900,"id_estudiante":899,"id_evaluacion":29400,"nota_resul_eval":5.2}
	,{"_id":103050,"id_estudiante":34,"id_evaluacion":48000,"nota_resul_eval":4.6}
	,{"_id":103200,"id_estudiante":31,"id_evaluacion":201300,"nota_resul_eval":4}
	,{"_id":103350,"id_estudiante":442,"id_evaluacion":348300,"nota_resul_eval":5.6}
	,{"_id":103500,"id_estudiante":430,"id_evaluacion":348600,"nota_resul_eval":7}
	,{"_id":103650,"id_estudiante":280,"id_evaluacion":249000,"nota_resul_eval":6.5}
	,{"_id":103800,"id_estudiante":580,"id_evaluacion":213600,"nota_resul_eval":3.8}
	,{"_id":103950,"id_estudiante":476,"id_evaluacion":79500,"nota_resul_eval":6.3}
	,{"_id":104100,"id_estudiante":215,"id_evaluacion":102900,"nota_resul_eval":3.4}
	,{"_id":104250,"id_estudiante":263,"id_evaluacion":279000,"nota_resul_eval":5.8}
	,{"_id":104400,"id_estudiante":76,"id_evaluacion":324300,"nota_resul_eval":6.7}
	,{"_id":104550,"id_estudiante":468,"id_evaluacion":188700,"nota_resul_eval":4.5}
	,{"_id":104700,"id_estudiante":913,"id_evaluacion":221100,"nota_resul_eval":3.8}
	,{"_id":104850,"id_estudiante":198,"id_evaluacion":221700,"nota_resul_eval":5.9}
	,{"_id":105000,"id_estudiante":554,"id_evaluacion":327300,"nota_resul_eval":5.8}
	,{"_id":105150,"id_estudiante":433,"id_evaluacion":160800,"nota_resul_eval":3.6}
	,{"_id":105300,"id_estudiante":121,"id_evaluacion":126000,"nota_resul_eval":6}
	,{"_id":105450,"id_estudiante":373,"id_evaluacion":138000,"nota_resul_eval":3.8}
	,{"_id":105600,"id_estudiante":118,"id_evaluacion":31500,"nota_resul_eval":3.3}
	,{"_id":105750,"id_estudiante":574,"id_evaluacion":283800,"nota_resul_eval":4.7}
	,{"_id":105900,"id_estudiante":364,"id_evaluacion":208200,"nota_resul_eval":3.1}
	,{"_id":106050,"id_estudiante":44,"id_evaluacion":255000,"nota_resul_eval":6.8}
	,{"_id":106200,"id_estudiante":924,"id_evaluacion":96000,"nota_resul_eval":5.1}
	,{"_id":106350,"id_estudiante":683,"id_evaluacion":177900,"nota_resul_eval":3.9}
	,{"_id":106500,"id_estudiante":872,"id_evaluacion":168000,"nota_resul_eval":3.9}
	,{"_id":106650,"id_estudiante":188,"id_evaluacion":259500,"nota_resul_eval":5.5}
	,{"_id":106800,"id_estudiante":416,"id_evaluacion":199200,"nota_resul_eval":5}
	,{"_id":106950,"id_estudiante":904,"id_evaluacion":165600,"nota_resul_eval":5.8}
	,{"_id":107100,"id_estudiante":627,"id_evaluacion":319500,"nota_resul_eval":4.7}
	,{"_id":107250,"id_estudiante":970,"id_evaluacion":130800,"nota_resul_eval":6.7}
	,{"_id":107400,"id_estudiante":958,"id_evaluacion":7500,"nota_resul_eval":4.9}
	,{"_id":107550,"id_estudiante":443,"id_evaluacion":65700,"nota_resul_eval":6.3}
	,{"_id":107700,"id_estudiante":900,"id_evaluacion":27300,"nota_resul_eval":6.9}
	,{"_id":107850,"id_estudiante":140,"id_evaluacion":308100,"nota_resul_eval":4.2}
	,{"_id":108000,"id_estudiante":94,"id_evaluacion":321600,"nota_resul_eval":6.1}
	,{"_id":108150,"id_estudiante":347,"id_evaluacion":241500,"nota_resul_eval":6.5}
	,{"_id":108300,"id_estudiante":871,"id_evaluacion":316500,"nota_resul_eval":4.5}
	,{"_id":108450,"id_estudiante":499,"id_evaluacion":70500,"nota_resul_eval":6.6}
	,{"_id":108600,"id_estudiante":808,"id_evaluacion":192900,"nota_resul_eval":6.3}
	,{"_id":108750,"id_estudiante":292,"id_evaluacion":196200,"nota_resul_eval":6.8}
	,{"_id":108900,"id_estudiante":614,"id_evaluacion":177900,"nota_resul_eval":4}
	,{"_id":109050,"id_estudiante":592,"id_evaluacion":99600,"nota_resul_eval":4.4}
	,{"_id":109200,"id_estudiante":111,"id_evaluacion":105000,"nota_resul_eval":4.4}
	,{"_id":109350,"id_estudiante":255,"id_evaluacion":350700,"nota_resul_eval":6.6}
	,{"_id":109500,"id_estudiante":738,"id_evaluacion":177000,"nota_resul_eval":3.6}
	,{"_id":109650,"id_estudiante":580,"id_evaluacion":267300,"nota_resul_eval":4.1}
	,{"_id":109800,"id_estudiante":134,"id_evaluacion":184800,"nota_resul_eval":4.8}
	,{"_id":109950,"id_estudiante":844,"id_evaluacion":322500,"nota_resul_eval":5.6}
	,{"_id":110100,"id_estudiante":739,"id_evaluacion":37800,"nota_resul_eval":3.5}
	,{"_id":110250,"id_estudiante":721,"id_evaluacion":263700,"nota_resul_eval":3.5}
	,{"_id":110400,"id_estudiante":659,"id_evaluacion":25800,"nota_resul_eval":6.5}
	,{"_id":110550,"id_estudiante":987,"id_evaluacion":297600,"nota_resul_eval":3.4}
	,{"_id":110700,"id_estudiante":1,"id_evaluacion":86400,"nota_resul_eval":6.3}
	,{"_id":110850,"id_estudiante":306,"id_evaluacion":114000,"nota_resul_eval":6.9}
	,{"_id":111000,"id_estudiante":971,"id_evaluacion":42600,"nota_resul_eval":5.2}
	,{"_id":111150,"id_estudiante":12,"id_evaluacion":125700,"nota_resul_eval":3.1}
	,{"_id":111300,"id_estudiante":423,"id_evaluacion":54300,"nota_resul_eval":5}
	,{"_id":111450,"id_estudiante":58,"id_evaluacion":140700,"nota_resul_eval":6.8}
	,{"_id":111600,"id_estudiante":549,"id_evaluacion":92100,"nota_resul_eval":3.4}
	,{"_id":111750,"id_estudiante":733,"id_evaluacion":6600,"nota_resul_eval":6.7}
	,{"_id":111900,"id_estudiante":499,"id_evaluacion":201900,"nota_resul_eval":4.3}
	,{"_id":112050,"id_estudiante":192,"id_evaluacion":173400,"nota_resul_eval":6.1}
	,{"_id":112200,"id_estudiante":593,"id_evaluacion":353100,"nota_resul_eval":5.6}
	,{"_id":112350,"id_estudiante":104,"id_evaluacion":59400,"nota_resul_eval":5.6}
	,{"_id":112500,"id_estudiante":910,"id_evaluacion":146400,"nota_resul_eval":4.7}
	,{"_id":112650,"id_estudiante":508,"id_evaluacion":320400,"nota_resul_eval":5.8}
	,{"_id":112800,"id_estudiante":549,"id_evaluacion":305700,"nota_resul_eval":6.1}
	,{"_id":112950,"id_estudiante":984,"id_evaluacion":47100,"nota_resul_eval":6.7}
	,{"_id":113100,"id_estudiante":374,"id_evaluacion":108900,"nota_resul_eval":5.1}
	,{"_id":113250,"id_estudiante":438,"id_evaluacion":105000,"nota_resul_eval":5.7}
	,{"_id":113400,"id_estudiante":434,"id_evaluacion":104100,"nota_resul_eval":5.2}
	,{"_id":113550,"id_estudiante":163,"id_evaluacion":66000,"nota_resul_eval":4.7}
	,{"_id":113700,"id_estudiante":774,"id_evaluacion":239700,"nota_resul_eval":5.5}
	,{"_id":113850,"id_estudiante":404,"id_evaluacion":255300,"nota_resul_eval":5.5}
	,{"_id":114000,"id_estudiante":27,"id_evaluacion":147000,"nota_resul_eval":4.8}
	,{"_id":114150,"id_estudiante":468,"id_evaluacion":301500,"nota_resul_eval":4.2}
	,{"_id":114300,"id_estudiante":964,"id_evaluacion":312600,"nota_resul_eval":3.4}
	,{"_id":114450,"id_estudiante":789,"id_evaluacion":288900,"nota_resul_eval":5}
	,{"_id":114600,"id_estudiante":682,"id_evaluacion":269700,"nota_resul_eval":4.1}
	,{"_id":114750,"id_estudiante":508,"id_evaluacion":89700,"nota_resul_eval":5.7}
	,{"_id":114900,"id_estudiante":353,"id_evaluacion":78000,"nota_resul_eval":3.9}
	,{"_id":115050,"id_estudiante":571,"id_evaluacion":31200,"nota_resul_eval":5.4}
	,{"_id":115200,"id_estudiante":98,"id_evaluacion":284400,"nota_resul_eval":5.8}
	,{"_id":115350,"id_estudiante":514,"id_evaluacion":27000,"nota_resul_eval":4.1}
	,{"_id":115500,"id_estudiante":261,"id_evaluacion":254400,"nota_resul_eval":3.6}
	,{"_id":115650,"id_estudiante":64,"id_evaluacion":311100,"nota_resul_eval":5.2}
	,{"_id":115800,"id_estudiante":768,"id_evaluacion":94500,"nota_resul_eval":6.9}
	,{"_id":115950,"id_estudiante":497,"id_evaluacion":212100,"nota_resul_eval":5.2}
	,{"_id":116100,"id_estudiante":717,"id_evaluacion":93300,"nota_resul_eval":4.9}
	,{"_id":116250,"id_estudiante":876,"id_evaluacion":230400,"nota_resul_eval":5.4}
	,{"_id":116400,"id_estudiante":529,"id_evaluacion":281100,"nota_resul_eval":6.5}
	,{"_id":116550,"id_estudiante":222,"id_evaluacion":224100,"nota_resul_eval":6.2}
	,{"_id":116700,"id_estudiante":533,"id_evaluacion":101400,"nota_resul_eval":5.2}
	,{"_id":116850,"id_estudiante":593,"id_evaluacion":98400,"nota_resul_eval":6.9}
	,{"_id":117000,"id_estudiante":406,"id_evaluacion":145800,"nota_resul_eval":5.2}
	,{"_id":117150,"id_estudiante":525,"id_evaluacion":171300,"nota_resul_eval":7}
	,{"_id":117300,"id_estudiante":389,"id_evaluacion":105600,"nota_resul_eval":6.7}
	,{"_id":117450,"id_estudiante":975,"id_evaluacion":46500,"nota_resul_eval":5.9}
	,{"_id":117600,"id_estudiante":666,"id_evaluacion":317700,"nota_resul_eval":4.2}
	,{"_id":117750,"id_estudiante":687,"id_evaluacion":92100,"nota_resul_eval":3.8}
	,{"_id":117900,"id_estudiante":57,"id_evaluacion":133200,"nota_resul_eval":4.4}
	,{"_id":118050,"id_estudiante":682,"id_evaluacion":213600,"nota_resul_eval":3.6}
	,{"_id":118200,"id_estudiante":265,"id_evaluacion":169500,"nota_resul_eval":4.2}
	,{"_id":118350,"id_estudiante":40,"id_evaluacion":280800,"nota_resul_eval":4.4}
	,{"_id":118500,"id_estudiante":722,"id_evaluacion":283800,"nota_resul_eval":6.4}
	,{"_id":118650,"id_estudiante":807,"id_evaluacion":52200,"nota_resul_eval":5.3}
	,{"_id":118800,"id_estudiante":154,"id_evaluacion":91500,"nota_resul_eval":4.7}
	,{"_id":118950,"id_estudiante":882,"id_evaluacion":134700,"nota_resul_eval":6.6}
	,{"_id":119100,"id_estudiante":743,"id_evaluacion":81600,"nota_resul_eval":3.9}
	,{"_id":119250,"id_estudiante":685,"id_evaluacion":280200,"nota_resul_eval":6}
	,{"_id":119400,"id_estudiante":691,"id_evaluacion":82200,"nota_resul_eval":3.2}
	,{"_id":119550,"id_estudiante":24,"id_evaluacion":269700,"nota_resul_eval":5}
	,{"_id":119700,"id_estudiante":557,"id_evaluacion":312000,"nota_resul_eval":6.6}
	,{"_id":119850,"id_estudiante":767,"id_evaluacion":158100,"nota_resul_eval":6.8}
	,{"_id":120000,"id_estudiante":261,"id_evaluacion":348000,"nota_resul_eval":3.1}
	,{"_id":120150,"id_estudiante":765,"id_evaluacion":190200,"nota_resul_eval":3.7}
	,{"_id":120300,"id_estudiante":423,"id_evaluacion":162900,"nota_resul_eval":6.6}
	,{"_id":120450,"id_estudiante":540,"id_evaluacion":313200,"nota_resul_eval":5.4}
	,{"_id":120600,"id_estudiante":562,"id_evaluacion":154800,"nota_resul_eval":6.3}
	,{"_id":120750,"id_estudiante":656,"id_evaluacion":144000,"nota_resul_eval":3}
	,{"_id":120900,"id_estudiante":628,"id_evaluacion":194400,"nota_resul_eval":5.6}
	,{"_id":121050,"id_estudiante":893,"id_evaluacion":155100,"nota_resul_eval":6.8}
	,{"_id":121200,"id_estudiante":693,"id_evaluacion":285900,"nota_resul_eval":5.4}
	,{"_id":121350,"id_estudiante":790,"id_evaluacion":302100,"nota_resul_eval":6.5}
	,{"_id":121500,"id_estudiante":681,"id_evaluacion":308700,"nota_resul_eval":4.5}
	,{"_id":121650,"id_estudiante":929,"id_evaluacion":288600,"nota_resul_eval":5.4}
	,{"_id":121800,"id_estudiante":938,"id_evaluacion":286500,"nota_resul_eval":3.4}
	,{"_id":121950,"id_estudiante":674,"id_evaluacion":142500,"nota_resul_eval":6.1}
	,{"_id":122100,"id_estudiante":730,"id_evaluacion":346500,"nota_resul_eval":4.4}
	,{"_id":122250,"id_estudiante":752,"id_evaluacion":76500,"nota_resul_eval":4.3}
	,{"_id":122400,"id_estudiante":298,"id_evaluacion":126600,"nota_resul_eval":4.7}
	,{"_id":122550,"id_estudiante":656,"id_evaluacion":195600,"nota_resul_eval":6.9}
	,{"_id":122700,"id_estudiante":36,"id_evaluacion":161100,"nota_resul_eval":3.1}
	,{"_id":122850,"id_estudiante":683,"id_evaluacion":183300,"nota_resul_eval":5.6}
	,{"_id":123000,"id_estudiante":392,"id_evaluacion":225900,"nota_resul_eval":3.8}
	,{"_id":123150,"id_estudiante":514,"id_evaluacion":189000,"nota_resul_eval":4.7}
	,{"_id":123300,"id_estudiante":521,"id_evaluacion":91500,"nota_resul_eval":5}
	,{"_id":123450,"id_estudiante":470,"id_evaluacion":71400,"nota_resul_eval":6.6}
	,{"_id":123600,"id_estudiante":49,"id_evaluacion":249900,"nota_resul_eval":6.4}
	,{"_id":123750,"id_estudiante":121,"id_evaluacion":342900,"nota_resul_eval":5.2}
	,{"_id":123900,"id_estudiante":105,"id_evaluacion":234900,"nota_resul_eval":3.8}
	,{"_id":124050,"id_estudiante":1000,"id_evaluacion":156900,"nota_resul_eval":6.6}
	,{"_id":124200,"id_estudiante":785,"id_evaluacion":90900,"nota_resul_eval":4.6}
	,{"_id":124350,"id_estudiante":614,"id_evaluacion":170100,"nota_resul_eval":5.5}
	,{"_id":124500,"id_estudiante":455,"id_evaluacion":209100,"nota_resul_eval":3.2}
	,{"_id":124650,"id_estudiante":397,"id_evaluacion":211800,"nota_resul_eval":5.3}
	,{"_id":124800,"id_estudiante":626,"id_evaluacion":103200,"nota_resul_eval":3}
	,{"_id":124950,"id_estudiante":826,"id_evaluacion":5700,"nota_resul_eval":3.6}
	,{"_id":125100,"id_estudiante":144,"id_evaluacion":155700,"nota_resul_eval":3.8}
	,{"_id":125250,"id_estudiante":616,"id_evaluacion":279000,"nota_resul_eval":4.4}
	,{"_id":125400,"id_estudiante":726,"id_evaluacion":221700,"nota_resul_eval":4}
	,{"_id":125550,"id_estudiante":616,"id_evaluacion":256500,"nota_resul_eval":5.1}
	,{"_id":125700,"id_estudiante":787,"id_evaluacion":165000,"nota_resul_eval":6.3}
	,{"_id":125850,"id_estudiante":19,"id_evaluacion":140100,"nota_resul_eval":5.2}
	,{"_id":126000,"id_estudiante":659,"id_evaluacion":73800,"nota_resul_eval":3.9}
	,{"_id":126150,"id_estudiante":965,"id_evaluacion":41100,"nota_resul_eval":4.6}
	,{"_id":126300,"id_estudiante":862,"id_evaluacion":247200,"nota_resul_eval":3.7}
	,{"_id":126450,"id_estudiante":863,"id_evaluacion":160500,"nota_resul_eval":3.9}
	,{"_id":126600,"id_estudiante":822,"id_evaluacion":346800,"nota_resul_eval":5.7}
	,{"_id":126750,"id_estudiante":499,"id_evaluacion":154200,"nota_resul_eval":5}
	,{"_id":126900,"id_estudiante":502,"id_evaluacion":343200,"nota_resul_eval":3.6}
	,{"_id":127050,"id_estudiante":601,"id_evaluacion":303000,"nota_resul_eval":6.6}
	,{"_id":127200,"id_estudiante":732,"id_evaluacion":149400,"nota_resul_eval":4.1}
	,{"_id":127350,"id_estudiante":85,"id_evaluacion":85500,"nota_resul_eval":6.4}
	,{"_id":127500,"id_estudiante":666,"id_evaluacion":102000,"nota_resul_eval":3.9}
	,{"_id":127650,"id_estudiante":110,"id_evaluacion":120000,"nota_resul_eval":4.2}
	,{"_id":127800,"id_estudiante":919,"id_evaluacion":324000,"nota_resul_eval":5.3}
	,{"_id":127950,"id_estudiante":147,"id_evaluacion":205500,"nota_resul_eval":3.1}
	,{"_id":128100,"id_estudiante":381,"id_evaluacion":116100,"nota_resul_eval":4.2}
	,{"_id":128250,"id_estudiante":631,"id_evaluacion":351900,"nota_resul_eval":6.4}
	,{"_id":128400,"id_estudiante":209,"id_evaluacion":243000,"nota_resul_eval":5.6}
	,{"_id":128550,"id_estudiante":185,"id_evaluacion":237600,"nota_resul_eval":3.9}
	,{"_id":128700,"id_estudiante":884,"id_evaluacion":45000,"nota_resul_eval":6.8}
	,{"_id":128850,"id_estudiante":521,"id_evaluacion":210900,"nota_resul_eval":4.1}
	,{"_id":129000,"id_estudiante":742,"id_evaluacion":78900,"nota_resul_eval":4.9}
	,{"_id":129150,"id_estudiante":666,"id_evaluacion":26400,"nota_resul_eval":3.8}
	,{"_id":129300,"id_estudiante":151,"id_evaluacion":61800,"nota_resul_eval":6.4}
	,{"_id":129450,"id_estudiante":484,"id_evaluacion":104400,"nota_resul_eval":6.2}
	,{"_id":129600,"id_estudiante":257,"id_evaluacion":172800,"nota_resul_eval":6.1}
	,{"_id":129750,"id_estudiante":513,"id_evaluacion":249900,"nota_resul_eval":5.7}
	,{"_id":129900,"id_estudiante":669,"id_evaluacion":334800,"nota_resul_eval":6.3}
	,{"_id":130050,"id_estudiante":280,"id_evaluacion":54300,"nota_resul_eval":3.8}
	,{"_id":130200,"id_estudiante":790,"id_evaluacion":335100,"nota_resul_eval":3.7}
	,{"_id":130350,"id_estudiante":663,"id_evaluacion":87900,"nota_resul_eval":5.1}
	,{"_id":130500,"id_estudiante":82,"id_evaluacion":188700,"nota_resul_eval":5.3}
	,{"_id":130650,"id_estudiante":374,"id_evaluacion":196800,"nota_resul_eval":6.1}
	,{"_id":130800,"id_estudiante":250,"id_evaluacion":252000,"nota_resul_eval":5.8}
	,{"_id":130950,"id_estudiante":192,"id_evaluacion":315000,"nota_resul_eval":6.7}
	,{"_id":131100,"id_estudiante":423,"id_evaluacion":340800,"nota_resul_eval":5.1}
	,{"_id":131250,"id_estudiante":776,"id_evaluacion":243900,"nota_resul_eval":4.8}
	,{"_id":131400,"id_estudiante":978,"id_evaluacion":69000,"nota_resul_eval":5.1}
	,{"_id":131550,"id_estudiante":318,"id_evaluacion":122400,"nota_resul_eval":6.1}
	,{"_id":131700,"id_estudiante":579,"id_evaluacion":122400,"nota_resul_eval":4.1}
	,{"_id":131850,"id_estudiante":654,"id_evaluacion":233700,"nota_resul_eval":6.2}
	,{"_id":132000,"id_estudiante":840,"id_evaluacion":298500,"nota_resul_eval":6.7}
	,{"_id":132150,"id_estudiante":358,"id_evaluacion":89700,"nota_resul_eval":4.2}
	,{"_id":132300,"id_estudiante":523,"id_evaluacion":49200,"nota_resul_eval":4.7}
	,{"_id":132450,"id_estudiante":108,"id_evaluacion":75000,"nota_resul_eval":4.2}
	,{"_id":132600,"id_estudiante":928,"id_evaluacion":15300,"nota_resul_eval":5.2}
	,{"_id":132750,"id_estudiante":661,"id_evaluacion":141000,"nota_resul_eval":4.5}
	,{"_id":132900,"id_estudiante":200,"id_evaluacion":337500,"nota_resul_eval":5.2}
	,{"_id":133050,"id_estudiante":705,"id_evaluacion":351900,"nota_resul_eval":6.2}
	,{"_id":133200,"id_estudiante":481,"id_evaluacion":93900,"nota_resul_eval":4.4}
	,{"_id":133350,"id_estudiante":339,"id_evaluacion":106500,"nota_resul_eval":6.7}
	,{"_id":133500,"id_estudiante":922,"id_evaluacion":303300,"nota_resul_eval":4.6}
	,{"_id":133650,"id_estudiante":961,"id_evaluacion":262800,"nota_resul_eval":5.5}
	,{"_id":133800,"id_estudiante":621,"id_evaluacion":226800,"nota_resul_eval":4}
	,{"_id":133950,"id_estudiante":721,"id_evaluacion":171900,"nota_resul_eval":4.4}
	,{"_id":134100,"id_estudiante":722,"id_evaluacion":42600,"nota_resul_eval":5.3}
	,{"_id":134250,"id_estudiante":230,"id_evaluacion":111000,"nota_resul_eval":6.8}
	,{"_id":134400,"id_estudiante":14,"id_evaluacion":12000,"nota_resul_eval":4.8}
	,{"_id":134550,"id_estudiante":899,"id_evaluacion":224400,"nota_resul_eval":6.1}
	,{"_id":134700,"id_estudiante":547,"id_evaluacion":304500,"nota_resul_eval":3.2}
	,{"_id":134850,"id_estudiante":664,"id_evaluacion":288000,"nota_resul_eval":6.4}
	,{"_id":135000,"id_estudiante":583,"id_evaluacion":76500,"nota_resul_eval":4.7}
	,{"_id":135150,"id_estudiante":696,"id_evaluacion":249900,"nota_resul_eval":5.7}
	,{"_id":135300,"id_estudiante":788,"id_evaluacion":173700,"nota_resul_eval":3.4}
	,{"_id":135450,"id_estudiante":372,"id_evaluacion":231900,"nota_resul_eval":5.9}
	,{"_id":135600,"id_estudiante":61,"id_evaluacion":260700,"nota_resul_eval":6.4}
	,{"_id":135750,"id_estudiante":651,"id_evaluacion":106500,"nota_resul_eval":5.5}
	,{"_id":135900,"id_estudiante":160,"id_evaluacion":291300,"nota_resul_eval":3.9}
	,{"_id":136050,"id_estudiante":265,"id_evaluacion":114900,"nota_resul_eval":4}
	,{"_id":136200,"id_estudiante":727,"id_evaluacion":172800,"nota_resul_eval":5.6}
	,{"_id":136350,"id_estudiante":176,"id_evaluacion":252900,"nota_resul_eval":6.1}
	,{"_id":136500,"id_estudiante":419,"id_evaluacion":307800,"nota_resul_eval":4.8}
	,{"_id":136650,"id_estudiante":784,"id_evaluacion":106500,"nota_resul_eval":3.5}
	,{"_id":136800,"id_estudiante":594,"id_evaluacion":158100,"nota_resul_eval":6.4}
	,{"_id":136950,"id_estudiante":122,"id_evaluacion":205500,"nota_resul_eval":6.2}
	,{"_id":137100,"id_estudiante":272,"id_evaluacion":159600,"nota_resul_eval":6}
	,{"_id":137250,"id_estudiante":428,"id_evaluacion":243600,"nota_resul_eval":5}
	,{"_id":137400,"id_estudiante":394,"id_evaluacion":349800,"nota_resul_eval":6.3}
	,{"_id":137550,"id_estudiante":333,"id_evaluacion":211500,"nota_resul_eval":6}
	,{"_id":137700,"id_estudiante":116,"id_evaluacion":53400,"nota_resul_eval":5.5}
	,{"_id":137850,"id_estudiante":491,"id_evaluacion":259500,"nota_resul_eval":4.7}
	,{"_id":138000,"id_estudiante":903,"id_evaluacion":140100,"nota_resul_eval":4.3}
	,{"_id":138150,"id_estudiante":806,"id_evaluacion":162000,"nota_resul_eval":4.1}
	,{"_id":138300,"id_estudiante":966,"id_evaluacion":124500,"nota_resul_eval":6.7}
	,{"_id":138450,"id_estudiante":644,"id_evaluacion":350700,"nota_resul_eval":3.3}
	,{"_id":138600,"id_estudiante":119,"id_evaluacion":78300,"nota_resul_eval":3.4}
	,{"_id":138750,"id_estudiante":560,"id_evaluacion":304500,"nota_resul_eval":5.5}
	,{"_id":138900,"id_estudiante":906,"id_evaluacion":24600,"nota_resul_eval":5.9}
	,{"_id":139050,"id_estudiante":501,"id_evaluacion":226800,"nota_resul_eval":6.6}
	,{"_id":139200,"id_estudiante":529,"id_evaluacion":17400,"nota_resul_eval":3.3}
	,{"_id":139350,"id_estudiante":531,"id_evaluacion":290100,"nota_resul_eval":5.5}
	,{"_id":139500,"id_estudiante":573,"id_evaluacion":90000,"nota_resul_eval":5.4}
	,{"_id":139650,"id_estudiante":294,"id_evaluacion":83700,"nota_resul_eval":4}
	,{"_id":139800,"id_estudiante":971,"id_evaluacion":50700,"nota_resul_eval":4.4}
	,{"_id":139950,"id_estudiante":313,"id_evaluacion":69300,"nota_resul_eval":3.8}
	,{"_id":140100,"id_estudiante":4,"id_evaluacion":5100,"nota_resul_eval":3.8}
	,{"_id":140250,"id_estudiante":8,"id_evaluacion":291300,"nota_resul_eval":6.7}
	,{"_id":140400,"id_estudiante":578,"id_evaluacion":228600,"nota_resul_eval":5.8}
	,{"_id":140550,"id_estudiante":20,"id_evaluacion":217200,"nota_resul_eval":6.5}
	,{"_id":140700,"id_estudiante":292,"id_evaluacion":339300,"nota_resul_eval":6.8}
	,{"_id":140850,"id_estudiante":891,"id_evaluacion":222900,"nota_resul_eval":6.7}
	,{"_id":141000,"id_estudiante":724,"id_evaluacion":26100,"nota_resul_eval":4.3}
	,{"_id":141150,"id_estudiante":283,"id_evaluacion":100500,"nota_resul_eval":5.1}
	,{"_id":141300,"id_estudiante":520,"id_evaluacion":286800,"nota_resul_eval":6.4}
	,{"_id":141450,"id_estudiante":945,"id_evaluacion":292500,"nota_resul_eval":4.1}
	,{"_id":141600,"id_estudiante":811,"id_evaluacion":36000,"nota_resul_eval":6.1}
	,{"_id":141750,"id_estudiante":281,"id_evaluacion":201600,"nota_resul_eval":4.4}
	,{"_id":141900,"id_estudiante":362,"id_evaluacion":301500,"nota_resul_eval":4.1}
	,{"_id":142050,"id_estudiante":880,"id_evaluacion":208800,"nota_resul_eval":3.2}
	,{"_id":142200,"id_estudiante":926,"id_evaluacion":284100,"nota_resul_eval":3.7}
	,{"_id":142350,"id_estudiante":224,"id_evaluacion":92400,"nota_resul_eval":5.4}
	,{"_id":142500,"id_estudiante":966,"id_evaluacion":323100,"nota_resul_eval":6.3}
	,{"_id":142650,"id_estudiante":868,"id_evaluacion":301800,"nota_resul_eval":5.4}
	,{"_id":142800,"id_estudiante":685,"id_evaluacion":13800,"nota_resul_eval":5.4}
	,{"_id":142950,"id_estudiante":259,"id_evaluacion":90900,"nota_resul_eval":6.3}
	,{"_id":143100,"id_estudiante":571,"id_evaluacion":88200,"nota_resul_eval":5.4}
	,{"_id":143250,"id_estudiante":298,"id_evaluacion":39300,"nota_resul_eval":4.6}
	,{"_id":143400,"id_estudiante":384,"id_evaluacion":348900,"nota_resul_eval":4.3}
	,{"_id":143550,"id_estudiante":767,"id_evaluacion":200400,"nota_resul_eval":6.2}
	,{"_id":143700,"id_estudiante":158,"id_evaluacion":170400,"nota_resul_eval":4.4}
	,{"_id":143850,"id_estudiante":123,"id_evaluacion":198300,"nota_resul_eval":5.9}
	,{"_id":144000,"id_estudiante":787,"id_evaluacion":7800,"nota_resul_eval":3.2}
	,{"_id":144150,"id_estudiante":149,"id_evaluacion":49800,"nota_resul_eval":4.4}
	,{"_id":144300,"id_estudiante":770,"id_evaluacion":337500,"nota_resul_eval":3.8}
	,{"_id":144450,"id_estudiante":291,"id_evaluacion":255900,"nota_resul_eval":4.2}
	,{"_id":144600,"id_estudiante":938,"id_evaluacion":80400,"nota_resul_eval":4.1}
	,{"_id":144750,"id_estudiante":391,"id_evaluacion":3600,"nota_resul_eval":5.4}
	,{"_id":144900,"id_estudiante":883,"id_evaluacion":222300,"nota_resul_eval":4.9}
	,{"_id":145050,"id_estudiante":636,"id_evaluacion":22200,"nota_resul_eval":5.1}
	,{"_id":145200,"id_estudiante":655,"id_evaluacion":40200,"nota_resul_eval":6.3}
	,{"_id":145350,"id_estudiante":290,"id_evaluacion":135900,"nota_resul_eval":6.7}
	,{"_id":145500,"id_estudiante":4,"id_evaluacion":93300,"nota_resul_eval":3}
	,{"_id":145650,"id_estudiante":890,"id_evaluacion":297300,"nota_resul_eval":3}
	,{"_id":145800,"id_estudiante":588,"id_evaluacion":135300,"nota_resul_eval":6.1}
	,{"_id":145950,"id_estudiante":593,"id_evaluacion":213600,"nota_resul_eval":3}
	,{"_id":146100,"id_estudiante":424,"id_evaluacion":38400,"nota_resul_eval":5.7}
	,{"_id":146250,"id_estudiante":621,"id_evaluacion":164100,"nota_resul_eval":6.4}
	,{"_id":146400,"id_estudiante":449,"id_evaluacion":195600,"nota_resul_eval":5.8}
	,{"_id":146550,"id_estudiante":178,"id_evaluacion":239400,"nota_resul_eval":6.9}
	,{"_id":146700,"id_estudiante":40,"id_evaluacion":234600,"nota_resul_eval":5.9}
	,{"_id":146850,"id_estudiante":876,"id_evaluacion":237000,"nota_resul_eval":6.6}
	,{"_id":147000,"id_estudiante":462,"id_evaluacion":178500,"nota_resul_eval":4.8}
	,{"_id":147150,"id_estudiante":887,"id_evaluacion":69000,"nota_resul_eval":4.8}
	,{"_id":147300,"id_estudiante":720,"id_evaluacion":211500,"nota_resul_eval":5.8}
	,{"_id":147450,"id_estudiante":640,"id_evaluacion":270600,"nota_resul_eval":4.7}
	,{"_id":147600,"id_estudiante":160,"id_evaluacion":46200,"nota_resul_eval":5}
	,{"_id":147750,"id_estudiante":739,"id_evaluacion":185100,"nota_resul_eval":6.2}
	,{"_id":147900,"id_estudiante":206,"id_evaluacion":144600,"nota_resul_eval":4.8}
	,{"_id":148050,"id_estudiante":121,"id_evaluacion":322800,"nota_resul_eval":7}
	,{"_id":148200,"id_estudiante":647,"id_evaluacion":73800,"nota_resul_eval":5.3}
	,{"_id":148350,"id_estudiante":170,"id_evaluacion":335100,"nota_resul_eval":6.7}
	,{"_id":148500,"id_estudiante":428,"id_evaluacion":47700,"nota_resul_eval":5.9}
	,{"_id":148650,"id_estudiante":836,"id_evaluacion":28800,"nota_resul_eval":4.8}
	,{"_id":148800,"id_estudiante":270,"id_evaluacion":94500,"nota_resul_eval":7}
	,{"_id":148950,"id_estudiante":252,"id_evaluacion":106800,"nota_resul_eval":6}
	,{"_id":149100,"id_estudiante":184,"id_evaluacion":299700,"nota_resul_eval":5.9}
	,{"_id":149250,"id_estudiante":941,"id_evaluacion":157800,"nota_resul_eval":3.7}
	,{"_id":149400,"id_estudiante":914,"id_evaluacion":237000,"nota_resul_eval":5.3}
	,{"_id":149550,"id_estudiante":88,"id_evaluacion":258000,"nota_resul_eval":3}
	,{"_id":149700,"id_estudiante":917,"id_evaluacion":26100,"nota_resul_eval":4.2}
	,{"_id":149850,"id_estudiante":719,"id_evaluacion":134400,"nota_resul_eval":5.8}
	,{"_id":150000,"id_estudiante":870,"id_evaluacion":304500,"nota_resul_eval":6.3}
	,{"_id":150150,"id_estudiante":401,"id_evaluacion":30300,"nota_resul_eval":5.7}
	,{"_id":150300,"id_estudiante":640,"id_evaluacion":8100,"nota_resul_eval":5.7}
	,{"_id":150450,"id_estudiante":468,"id_evaluacion":75300,"nota_resul_eval":4.1}
	,{"_id":150600,"id_estudiante":660,"id_evaluacion":246600,"nota_resul_eval":4.6}
	,{"_id":150750,"id_estudiante":865,"id_evaluacion":218400,"nota_resul_eval":6.9}
	,{"_id":150900,"id_estudiante":679,"id_evaluacion":233400,"nota_resul_eval":6.6}
	,{"_id":151050,"id_estudiante":352,"id_evaluacion":227100,"nota_resul_eval":3}
	,{"_id":151200,"id_estudiante":727,"id_evaluacion":54600,"nota_resul_eval":4.8}
	,{"_id":151350,"id_estudiante":312,"id_evaluacion":345300,"nota_resul_eval":4.6}
	,{"_id":151500,"id_estudiante":226,"id_evaluacion":327600,"nota_resul_eval":3.5}
	,{"_id":151650,"id_estudiante":947,"id_evaluacion":282000,"nota_resul_eval":6.1}
	,{"_id":151800,"id_estudiante":202,"id_evaluacion":111900,"nota_resul_eval":4}
	,{"_id":151950,"id_estudiante":785,"id_evaluacion":254100,"nota_resul_eval":4.7}
	,{"_id":152100,"id_estudiante":501,"id_evaluacion":53700,"nota_resul_eval":6.3}
	,{"_id":152250,"id_estudiante":231,"id_evaluacion":164400,"nota_resul_eval":5.5}
	,{"_id":152400,"id_estudiante":938,"id_evaluacion":159000,"nota_resul_eval":6}
	,{"_id":152550,"id_estudiante":496,"id_evaluacion":324000,"nota_resul_eval":4.2}
	,{"_id":152700,"id_estudiante":390,"id_evaluacion":280200,"nota_resul_eval":7}
	,{"_id":152850,"id_estudiante":457,"id_evaluacion":210600,"nota_resul_eval":4.6}
	,{"_id":153000,"id_estudiante":781,"id_evaluacion":160200,"nota_resul_eval":6.4}
	,{"_id":153150,"id_estudiante":347,"id_evaluacion":158400,"nota_resul_eval":7}
	,{"_id":153300,"id_estudiante":436,"id_evaluacion":12000,"nota_resul_eval":3.4}
	,{"_id":153450,"id_estudiante":889,"id_evaluacion":227400,"nota_resul_eval":4.3}
	,{"_id":153600,"id_estudiante":434,"id_evaluacion":186600,"nota_resul_eval":3.1}
	,{"_id":153750,"id_estudiante":449,"id_evaluacion":349800,"nota_resul_eval":3.6}
	,{"_id":153900,"id_estudiante":830,"id_evaluacion":201900,"nota_resul_eval":4.7}
	,{"_id":154050,"id_estudiante":872,"id_evaluacion":303600,"nota_resul_eval":5.5}
	,{"_id":154200,"id_estudiante":509,"id_evaluacion":318300,"nota_resul_eval":3.1}
	,{"_id":154350,"id_estudiante":758,"id_evaluacion":5100,"nota_resul_eval":4.6}
	,{"_id":154500,"id_estudiante":839,"id_evaluacion":325500,"nota_resul_eval":5.2}
	,{"_id":154650,"id_estudiante":923,"id_evaluacion":226800,"nota_resul_eval":5.1}
	,{"_id":154800,"id_estudiante":165,"id_evaluacion":36000,"nota_resul_eval":6.5}
	,{"_id":154950,"id_estudiante":257,"id_evaluacion":164400,"nota_resul_eval":3.6}
	,{"_id":155100,"id_estudiante":34,"id_evaluacion":34200,"nota_resul_eval":4.4}
	,{"_id":155250,"id_estudiante":409,"id_evaluacion":316800,"nota_resul_eval":5.8}
	,{"_id":155400,"id_estudiante":111,"id_evaluacion":258000,"nota_resul_eval":5}
	,{"_id":155550,"id_estudiante":516,"id_evaluacion":307800,"nota_resul_eval":4.2}
	,{"_id":155700,"id_estudiante":660,"id_evaluacion":59700,"nota_resul_eval":4.5}
	,{"_id":155850,"id_estudiante":838,"id_evaluacion":119100,"nota_resul_eval":4.8}
	,{"_id":156000,"id_estudiante":304,"id_evaluacion":88200,"nota_resul_eval":3.3}
	,{"_id":156150,"id_estudiante":590,"id_evaluacion":328800,"nota_resul_eval":5.3}
	,{"_id":156300,"id_estudiante":571,"id_evaluacion":92700,"nota_resul_eval":5.8}
	,{"_id":156450,"id_estudiante":534,"id_evaluacion":230100,"nota_resul_eval":5}
	,{"_id":156600,"id_estudiante":214,"id_evaluacion":211500,"nota_resul_eval":3.3}
	,{"_id":156750,"id_estudiante":821,"id_evaluacion":101700,"nota_resul_eval":5.2}
	,{"_id":156900,"id_estudiante":201,"id_evaluacion":357600,"nota_resul_eval":3.2}
	,{"_id":157050,"id_estudiante":292,"id_evaluacion":319500,"nota_resul_eval":4.6}
	,{"_id":157200,"id_estudiante":393,"id_evaluacion":213600,"nota_resul_eval":5.1}
	,{"_id":157350,"id_estudiante":710,"id_evaluacion":340800,"nota_resul_eval":6.7}
	,{"_id":157500,"id_estudiante":419,"id_evaluacion":23400,"nota_resul_eval":3.9}
	,{"_id":157650,"id_estudiante":497,"id_evaluacion":62100,"nota_resul_eval":3.6}
	,{"_id":157800,"id_estudiante":141,"id_evaluacion":62100,"nota_resul_eval":6}
	,{"_id":157950,"id_estudiante":73,"id_evaluacion":139800,"nota_resul_eval":6}
	,{"_id":158100,"id_estudiante":525,"id_evaluacion":4200,"nota_resul_eval":6.5}
	,{"_id":158250,"id_estudiante":518,"id_evaluacion":104400,"nota_resul_eval":5.2}
	,{"_id":158400,"id_estudiante":379,"id_evaluacion":156900,"nota_resul_eval":4.6}
	,{"_id":158550,"id_estudiante":591,"id_evaluacion":195000,"nota_resul_eval":5.5}
	,{"_id":158700,"id_estudiante":559,"id_evaluacion":358500,"nota_resul_eval":6.1}
	,{"_id":158850,"id_estudiante":215,"id_evaluacion":345900,"nota_resul_eval":6}
	,{"_id":159000,"id_estudiante":663,"id_evaluacion":109800,"nota_resul_eval":5.9}
	,{"_id":159150,"id_estudiante":918,"id_evaluacion":120900,"nota_resul_eval":6.1}
	,{"_id":159300,"id_estudiante":552,"id_evaluacion":192300,"nota_resul_eval":6.4}
	,{"_id":159450,"id_estudiante":874,"id_evaluacion":22500,"nota_resul_eval":4.7}
	,{"_id":159600,"id_estudiante":395,"id_evaluacion":235200,"nota_resul_eval":4.2}
	,{"_id":159750,"id_estudiante":501,"id_evaluacion":55200,"nota_resul_eval":4}
	,{"_id":159900,"id_estudiante":793,"id_evaluacion":65700,"nota_resul_eval":3.7}
	,{"_id":160050,"id_estudiante":77,"id_evaluacion":20700,"nota_resul_eval":4.8}
	,{"_id":160200,"id_estudiante":336,"id_evaluacion":202200,"nota_resul_eval":3.7}
	,{"_id":160350,"id_estudiante":542,"id_evaluacion":13500,"nota_resul_eval":4.6}
	,{"_id":160500,"id_estudiante":826,"id_evaluacion":163800,"nota_resul_eval":3.4}
	,{"_id":160650,"id_estudiante":294,"id_evaluacion":97200,"nota_resul_eval":4}
	,{"_id":160800,"id_estudiante":281,"id_evaluacion":93300,"nota_resul_eval":5.5}
	,{"_id":160950,"id_estudiante":587,"id_evaluacion":156000,"nota_resul_eval":6.6}
	,{"_id":161100,"id_estudiante":122,"id_evaluacion":310800,"nota_resul_eval":4.7}
	,{"_id":161250,"id_estudiante":185,"id_evaluacion":117300,"nota_resul_eval":3.3}
	,{"_id":161400,"id_estudiante":8,"id_evaluacion":40500,"nota_resul_eval":5.3}
	,{"_id":161550,"id_estudiante":105,"id_evaluacion":327000,"nota_resul_eval":6.1}
	,{"_id":161700,"id_estudiante":537,"id_evaluacion":46800,"nota_resul_eval":3.1}
	,{"_id":161850,"id_estudiante":947,"id_evaluacion":252900,"nota_resul_eval":3.6}
	,{"_id":162000,"id_estudiante":536,"id_evaluacion":106200,"nota_resul_eval":6.7}
	,{"_id":162150,"id_estudiante":351,"id_evaluacion":1800,"nota_resul_eval":4.5}
	,{"_id":162300,"id_estudiante":529,"id_evaluacion":238800,"nota_resul_eval":6.5}
	,{"_id":162450,"id_estudiante":54,"id_evaluacion":209400,"nota_resul_eval":6.8}
	,{"_id":162600,"id_estudiante":794,"id_evaluacion":89400,"nota_resul_eval":3.5}
	,{"_id":162750,"id_estudiante":619,"id_evaluacion":309900,"nota_resul_eval":5.2}
	,{"_id":162900,"id_estudiante":519,"id_evaluacion":35100,"nota_resul_eval":4.1}
	,{"_id":163050,"id_estudiante":228,"id_evaluacion":237300,"nota_resul_eval":4.6}
	,{"_id":163200,"id_estudiante":687,"id_evaluacion":141300,"nota_resul_eval":3.6}
	,{"_id":163350,"id_estudiante":27,"id_evaluacion":284100,"nota_resul_eval":4.5}
	,{"_id":163500,"id_estudiante":21,"id_evaluacion":202500,"nota_resul_eval":3.8}
	,{"_id":163650,"id_estudiante":766,"id_evaluacion":219600,"nota_resul_eval":3.5}
	,{"_id":163800,"id_estudiante":327,"id_evaluacion":349200,"nota_resul_eval":3.6}
	,{"_id":163950,"id_estudiante":531,"id_evaluacion":278100,"nota_resul_eval":5.5}
	,{"_id":164100,"id_estudiante":599,"id_evaluacion":308700,"nota_resul_eval":6.4}
	,{"_id":164250,"id_estudiante":808,"id_evaluacion":230700,"nota_resul_eval":4.8}
	,{"_id":164400,"id_estudiante":194,"id_evaluacion":310200,"nota_resul_eval":6.3}
	,{"_id":164550,"id_estudiante":524,"id_evaluacion":128400,"nota_resul_eval":5.8}
	,{"_id":164700,"id_estudiante":148,"id_evaluacion":180300,"nota_resul_eval":3}
	,{"_id":164850,"id_estudiante":910,"id_evaluacion":238800,"nota_resul_eval":5.6}
	,{"_id":165000,"id_estudiante":802,"id_evaluacion":17400,"nota_resul_eval":5.9}
	,{"_id":165150,"id_estudiante":456,"id_evaluacion":257400,"nota_resul_eval":3.9}
	,{"_id":165300,"id_estudiante":718,"id_evaluacion":87900,"nota_resul_eval":5.3}
	,{"_id":165450,"id_estudiante":76,"id_evaluacion":93300,"nota_resul_eval":5.6}
	,{"_id":165600,"id_estudiante":472,"id_evaluacion":108300,"nota_resul_eval":3.9}
	,{"_id":165750,"id_estudiante":184,"id_evaluacion":258600,"nota_resul_eval":5.5}
	,{"_id":165900,"id_estudiante":404,"id_evaluacion":145200,"nota_resul_eval":3.9}
	,{"_id":166050,"id_estudiante":270,"id_evaluacion":296700,"nota_resul_eval":5.9}
	,{"_id":166200,"id_estudiante":416,"id_evaluacion":352800,"nota_resul_eval":4.6}
	,{"_id":166350,"id_estudiante":953,"id_evaluacion":283200,"nota_resul_eval":4.6}
	,{"_id":166500,"id_estudiante":145,"id_evaluacion":333300,"nota_resul_eval":6}
	,{"_id":166650,"id_estudiante":255,"id_evaluacion":178500,"nota_resul_eval":6.2}
	,{"_id":166800,"id_estudiante":113,"id_evaluacion":187800,"nota_resul_eval":5}
	,{"_id":166950,"id_estudiante":808,"id_evaluacion":86700,"nota_resul_eval":6.2}
	,{"_id":167100,"id_estudiante":794,"id_evaluacion":152400,"nota_resul_eval":5.8}
	,{"_id":167250,"id_estudiante":415,"id_evaluacion":302700,"nota_resul_eval":5.4}
	,{"_id":167400,"id_estudiante":523,"id_evaluacion":118500,"nota_resul_eval":5.7}
	,{"_id":167550,"id_estudiante":639,"id_evaluacion":334200,"nota_resul_eval":6.7}
	,{"_id":167700,"id_estudiante":906,"id_evaluacion":184800,"nota_resul_eval":4.2}
	,{"_id":167850,"id_estudiante":19,"id_evaluacion":209700,"nota_resul_eval":4.4}
	,{"_id":168000,"id_estudiante":157,"id_evaluacion":336300,"nota_resul_eval":5.4}
	,{"_id":168150,"id_estudiante":360,"id_evaluacion":138300,"nota_resul_eval":5.4}
	,{"_id":168300,"id_estudiante":327,"id_evaluacion":15000,"nota_resul_eval":5.3}
	,{"_id":168450,"id_estudiante":277,"id_evaluacion":147600,"nota_resul_eval":5}
	,{"_id":168600,"id_estudiante":558,"id_evaluacion":238800,"nota_resul_eval":3.2}
	,{"_id":168750,"id_estudiante":635,"id_evaluacion":155700,"nota_resul_eval":6}
	,{"_id":168900,"id_estudiante":411,"id_evaluacion":138000,"nota_resul_eval":3.2}
	,{"_id":169050,"id_estudiante":723,"id_evaluacion":359700,"nota_resul_eval":5.2}
	,{"_id":169200,"id_estudiante":946,"id_evaluacion":350400,"nota_resul_eval":4.4}
	,{"_id":169350,"id_estudiante":946,"id_evaluacion":253800,"nota_resul_eval":4.8}
	,{"_id":169500,"id_estudiante":951,"id_evaluacion":75900,"nota_resul_eval":4.2}
	,{"_id":169650,"id_estudiante":170,"id_evaluacion":58500,"nota_resul_eval":4.6}
	,{"_id":169800,"id_estudiante":707,"id_evaluacion":211800,"nota_resul_eval":4.1}
	,{"_id":169950,"id_estudiante":141,"id_evaluacion":70800,"nota_resul_eval":5.4}
	,{"_id":170100,"id_estudiante":901,"id_evaluacion":138000,"nota_resul_eval":4.5}
	,{"_id":170250,"id_estudiante":789,"id_evaluacion":105000,"nota_resul_eval":6.7}
	,{"_id":170400,"id_estudiante":69,"id_evaluacion":174600,"nota_resul_eval":4.8}
	,{"_id":170550,"id_estudiante":730,"id_evaluacion":297000,"nota_resul_eval":3.4}
	,{"_id":170700,"id_estudiante":809,"id_evaluacion":135300,"nota_resul_eval":6.5}
	,{"_id":170850,"id_estudiante":801,"id_evaluacion":55200,"nota_resul_eval":4.9}
	,{"_id":171000,"id_estudiante":953,"id_evaluacion":266100,"nota_resul_eval":5.4}
	,{"_id":171150,"id_estudiante":792,"id_evaluacion":169500,"nota_resul_eval":4.1}
	,{"_id":171300,"id_estudiante":968,"id_evaluacion":322500,"nota_resul_eval":5.4}
	,{"_id":171450,"id_estudiante":252,"id_evaluacion":253200,"nota_resul_eval":6.2}
	,{"_id":171600,"id_estudiante":143,"id_evaluacion":139500,"nota_resul_eval":6.6}
	,{"_id":171750,"id_estudiante":96,"id_evaluacion":150000,"nota_resul_eval":5.6}
	,{"_id":171900,"id_estudiante":220,"id_evaluacion":266100,"nota_resul_eval":4.6}
	,{"_id":172050,"id_estudiante":751,"id_evaluacion":21300,"nota_resul_eval":6.4}
	,{"_id":172200,"id_estudiante":329,"id_evaluacion":143100,"nota_resul_eval":6.8}
	,{"_id":172350,"id_estudiante":175,"id_evaluacion":246600,"nota_resul_eval":5.2}
	,{"_id":172500,"id_estudiante":415,"id_evaluacion":104100,"nota_resul_eval":4.5}
	,{"_id":172650,"id_estudiante":390,"id_evaluacion":39900,"nota_resul_eval":4.4}
	,{"_id":172800,"id_estudiante":624,"id_evaluacion":49800,"nota_resul_eval":4.4}
	,{"_id":172950,"id_estudiante":355,"id_evaluacion":259800,"nota_resul_eval":6.6}
	,{"_id":173100,"id_estudiante":40,"id_evaluacion":153000,"nota_resul_eval":5.8}
	,{"_id":173250,"id_estudiante":192,"id_evaluacion":305100,"nota_resul_eval":3.5}
	,{"_id":173400,"id_estudiante":930,"id_evaluacion":235200,"nota_resul_eval":4.9}
	,{"_id":173550,"id_estudiante":324,"id_evaluacion":95700,"nota_resul_eval":6.6}
	,{"_id":173700,"id_estudiante":46,"id_evaluacion":351300,"nota_resul_eval":5.1}
	,{"_id":173850,"id_estudiante":261,"id_evaluacion":68400,"nota_resul_eval":4.6}
	,{"_id":174000,"id_estudiante":798,"id_evaluacion":354000,"nota_resul_eval":4.2}
	,{"_id":174150,"id_estudiante":372,"id_evaluacion":124800,"nota_resul_eval":4.6}
	,{"_id":174300,"id_estudiante":759,"id_evaluacion":164100,"nota_resul_eval":5}
	,{"_id":174450,"id_estudiante":395,"id_evaluacion":325800,"nota_resul_eval":4.3}
	,{"_id":174600,"id_estudiante":807,"id_evaluacion":5400,"nota_resul_eval":4.5}
	,{"_id":174750,"id_estudiante":396,"id_evaluacion":78300,"nota_resul_eval":5.4}
	,{"_id":174900,"id_estudiante":252,"id_evaluacion":290100,"nota_resul_eval":3}
	,{"_id":175050,"id_estudiante":806,"id_evaluacion":334800,"nota_resul_eval":4}
	,{"_id":175200,"id_estudiante":413,"id_evaluacion":240600,"nota_resul_eval":6.4}
	,{"_id":175350,"id_estudiante":114,"id_evaluacion":259500,"nota_resul_eval":6.6}
	,{"_id":175500,"id_estudiante":850,"id_evaluacion":30900,"nota_resul_eval":5.1}
	,{"_id":175650,"id_estudiante":221,"id_evaluacion":29100,"nota_resul_eval":3.5}
	,{"_id":175800,"id_estudiante":274,"id_evaluacion":159900,"nota_resul_eval":6.1}
	,{"_id":175950,"id_estudiante":723,"id_evaluacion":14700,"nota_resul_eval":6}
	,{"_id":176100,"id_estudiante":472,"id_evaluacion":229500,"nota_resul_eval":5.7}
	,{"_id":176250,"id_estudiante":326,"id_evaluacion":79500,"nota_resul_eval":3.5}
	,{"_id":176400,"id_estudiante":31,"id_evaluacion":11400,"nota_resul_eval":5.4}
	,{"_id":176550,"id_estudiante":920,"id_evaluacion":294000,"nota_resul_eval":3.4}
	,{"_id":176700,"id_estudiante":114,"id_evaluacion":334200,"nota_resul_eval":3.1}
	,{"_id":176850,"id_estudiante":119,"id_evaluacion":40500,"nota_resul_eval":3.4}
	,{"_id":177000,"id_estudiante":443,"id_evaluacion":214500,"nota_resul_eval":4.9}
	,{"_id":177150,"id_estudiante":611,"id_evaluacion":360000,"nota_resul_eval":3.2}
	,{"_id":177300,"id_estudiante":609,"id_evaluacion":284100,"nota_resul_eval":6.7}
	,{"_id":177450,"id_estudiante":666,"id_evaluacion":177600,"nota_resul_eval":4.2}
	,{"_id":177600,"id_estudiante":133,"id_evaluacion":221400,"nota_resul_eval":3.3}
	,{"_id":177750,"id_estudiante":216,"id_evaluacion":211800,"nota_resul_eval":5.6}
	,{"_id":177900,"id_estudiante":252,"id_evaluacion":129600,"nota_resul_eval":3.8}
	,{"_id":178050,"id_estudiante":637,"id_evaluacion":347400,"nota_resul_eval":4.8}
	,{"_id":178200,"id_estudiante":244,"id_evaluacion":246000,"nota_resul_eval":3.9}
	,{"_id":178350,"id_estudiante":381,"id_evaluacion":312600,"nota_resul_eval":3.1}
	,{"_id":178500,"id_estudiante":828,"id_evaluacion":171300,"nota_resul_eval":5.7}
	,{"_id":178650,"id_estudiante":253,"id_evaluacion":289800,"nota_resul_eval":5.8}
	,{"_id":178800,"id_estudiante":674,"id_evaluacion":3600,"nota_resul_eval":5.8}
	,{"_id":178950,"id_estudiante":975,"id_evaluacion":252600,"nota_resul_eval":6.7}
	,{"_id":179100,"id_estudiante":782,"id_evaluacion":257100,"nota_resul_eval":5.7}
	,{"_id":179250,"id_estudiante":224,"id_evaluacion":337800,"nota_resul_eval":5.6}
	,{"_id":179400,"id_estudiante":729,"id_evaluacion":256200,"nota_resul_eval":3.4}
	,{"_id":179550,"id_estudiante":931,"id_evaluacion":342600,"nota_resul_eval":6}
	,{"_id":179700,"id_estudiante":229,"id_evaluacion":126900,"nota_resul_eval":6.6}
	,{"_id":179850,"id_estudiante":983,"id_evaluacion":69600,"nota_resul_eval":4.7}
	,{"_id":180000,"id_estudiante":378,"id_evaluacion":116400,"nota_resul_eval":4.8}
	,{"_id":180150,"id_estudiante":547,"id_evaluacion":41700,"nota_resul_eval":4.7}
	,{"_id":180300,"id_estudiante":837,"id_evaluacion":193800,"nota_resul_eval":3.2}
	,{"_id":180450,"id_estudiante":29,"id_evaluacion":72000,"nota_resul_eval":3.9}
	,{"_id":180600,"id_estudiante":679,"id_evaluacion":71400,"nota_resul_eval":6.2}
	,{"_id":180750,"id_estudiante":565,"id_evaluacion":46500,"nota_resul_eval":6.2}
	,{"_id":180900,"id_estudiante":286,"id_evaluacion":54600,"nota_resul_eval":3.9}
	,{"_id":181050,"id_estudiante":403,"id_evaluacion":79200,"nota_resul_eval":5.4}
	,{"_id":181200,"id_estudiante":467,"id_evaluacion":71700,"nota_resul_eval":5.4}
	,{"_id":181350,"id_estudiante":305,"id_evaluacion":111300,"nota_resul_eval":3.2}
	,{"_id":181500,"id_estudiante":648,"id_evaluacion":220800,"nota_resul_eval":6.9}
	,{"_id":181650,"id_estudiante":467,"id_evaluacion":74400,"nota_resul_eval":3.4}
	,{"_id":181800,"id_estudiante":823,"id_evaluacion":236100,"nota_resul_eval":3.4}
	,{"_id":181950,"id_estudiante":852,"id_evaluacion":125400,"nota_resul_eval":3}
	,{"_id":182100,"id_estudiante":661,"id_evaluacion":262800,"nota_resul_eval":5.6}
	,{"_id":182250,"id_estudiante":718,"id_evaluacion":20400,"nota_resul_eval":5.1}
	,{"_id":182400,"id_estudiante":598,"id_evaluacion":273900,"nota_resul_eval":6.9}
	,{"_id":182550,"id_estudiante":303,"id_evaluacion":255900,"nota_resul_eval":3.6}
	,{"_id":182700,"id_estudiante":662,"id_evaluacion":311700,"nota_resul_eval":6.9}
	,{"_id":182850,"id_estudiante":623,"id_evaluacion":182100,"nota_resul_eval":5.1}
	,{"_id":183000,"id_estudiante":462,"id_evaluacion":232500,"nota_resul_eval":3.6}
	,{"_id":183150,"id_estudiante":819,"id_evaluacion":304500,"nota_resul_eval":5.5}
	,{"_id":183300,"id_estudiante":171,"id_evaluacion":38100,"nota_resul_eval":4.7}
	,{"_id":183450,"id_estudiante":544,"id_evaluacion":158700,"nota_resul_eval":4}
	,{"_id":183600,"id_estudiante":526,"id_evaluacion":98400,"nota_resul_eval":5.5}
	,{"_id":183750,"id_estudiante":308,"id_evaluacion":110100,"nota_resul_eval":3.7}
	,{"_id":183900,"id_estudiante":377,"id_evaluacion":135900,"nota_resul_eval":3.4}
	,{"_id":184050,"id_estudiante":191,"id_evaluacion":185700,"nota_resul_eval":4.1}
	,{"_id":184200,"id_estudiante":219,"id_evaluacion":235800,"nota_resul_eval":6}
	,{"_id":184350,"id_estudiante":57,"id_evaluacion":150300,"nota_resul_eval":5.5}
	,{"_id":184500,"id_estudiante":911,"id_evaluacion":164700,"nota_resul_eval":3.5}
	,{"_id":184650,"id_estudiante":972,"id_evaluacion":238500,"nota_resul_eval":5.3}
	,{"_id":184800,"id_estudiante":365,"id_evaluacion":204300,"nota_resul_eval":4}
	,{"_id":184950,"id_estudiante":631,"id_evaluacion":345600,"nota_resul_eval":5.3}
	,{"_id":185100,"id_estudiante":182,"id_evaluacion":95400,"nota_resul_eval":7}
	,{"_id":185250,"id_estudiante":352,"id_evaluacion":2700,"nota_resul_eval":6.6}
	,{"_id":185400,"id_estudiante":136,"id_evaluacion":251700,"nota_resul_eval":3.2}
	,{"_id":185550,"id_estudiante":402,"id_evaluacion":20700,"nota_resul_eval":3.4}
	,{"_id":185700,"id_estudiante":556,"id_evaluacion":334200,"nota_resul_eval":3.1}
	,{"_id":185850,"id_estudiante":960,"id_evaluacion":13500,"nota_resul_eval":6.2}
	,{"_id":186000,"id_estudiante":707,"id_evaluacion":182400,"nota_resul_eval":3.1}
	,{"_id":186150,"id_estudiante":357,"id_evaluacion":202200,"nota_resul_eval":3.9}
	,{"_id":186300,"id_estudiante":890,"id_evaluacion":128700,"nota_resul_eval":4.1}
	,{"_id":186450,"id_estudiante":53,"id_evaluacion":195900,"nota_resul_eval":3.5}
	,{"_id":186600,"id_estudiante":701,"id_evaluacion":353700,"nota_resul_eval":3.6}
	,{"_id":186750,"id_estudiante":785,"id_evaluacion":109800,"nota_resul_eval":5.2}
	,{"_id":186900,"id_estudiante":578,"id_evaluacion":98400,"nota_resul_eval":3.5}
	,{"_id":187050,"id_estudiante":889,"id_evaluacion":197100,"nota_resul_eval":5.9}
	,{"_id":187200,"id_estudiante":175,"id_evaluacion":283800,"nota_resul_eval":4.6}
	,{"_id":187350,"id_estudiante":105,"id_evaluacion":319800,"nota_resul_eval":6.5}
	,{"_id":187500,"id_estudiante":907,"id_evaluacion":282600,"nota_resul_eval":6.1}
	,{"_id":187650,"id_estudiante":931,"id_evaluacion":16200,"nota_resul_eval":3.7}
	,{"_id":187800,"id_estudiante":691,"id_evaluacion":246900,"nota_resul_eval":4.7}
	,{"_id":187950,"id_estudiante":662,"id_evaluacion":82500,"nota_resul_eval":5.4}
	,{"_id":188100,"id_estudiante":775,"id_evaluacion":279900,"nota_resul_eval":6.2}
	,{"_id":188250,"id_estudiante":922,"id_evaluacion":233700,"nota_resul_eval":4}
	,{"_id":188400,"id_estudiante":612,"id_evaluacion":99900,"nota_resul_eval":3}
	,{"_id":188550,"id_estudiante":224,"id_evaluacion":63600,"nota_resul_eval":4.2}
	,{"_id":188700,"id_estudiante":179,"id_evaluacion":129900,"nota_resul_eval":5.8}
	,{"_id":188850,"id_estudiante":878,"id_evaluacion":20100,"nota_resul_eval":5.3}
	,{"_id":189000,"id_estudiante":731,"id_evaluacion":281100,"nota_resul_eval":6.2}
	,{"_id":189150,"id_estudiante":688,"id_evaluacion":120000,"nota_resul_eval":6.3}
	,{"_id":189300,"id_estudiante":252,"id_evaluacion":282600,"nota_resul_eval":3.9}
	,{"_id":189450,"id_estudiante":931,"id_evaluacion":283500,"nota_resul_eval":4.9}
	,{"_id":189600,"id_estudiante":694,"id_evaluacion":134100,"nota_resul_eval":3.4}
	,{"_id":189750,"id_estudiante":444,"id_evaluacion":291600,"nota_resul_eval":3}
	,{"_id":189900,"id_estudiante":131,"id_evaluacion":13500,"nota_resul_eval":4}
	,{"_id":190050,"id_estudiante":250,"id_evaluacion":32700,"nota_resul_eval":5.6}
	,{"_id":190200,"id_estudiante":440,"id_evaluacion":172200,"nota_resul_eval":5.8}
	,{"_id":190350,"id_estudiante":561,"id_evaluacion":342900,"nota_resul_eval":7}
	,{"_id":190500,"id_estudiante":5,"id_evaluacion":294600,"nota_resul_eval":6.6}
	,{"_id":190650,"id_estudiante":239,"id_evaluacion":239400,"nota_resul_eval":5.4}
	,{"_id":190800,"id_estudiante":956,"id_evaluacion":3900,"nota_resul_eval":5.7}
	,{"_id":190950,"id_estudiante":560,"id_evaluacion":300600,"nota_resul_eval":4.2}
	,{"_id":191100,"id_estudiante":978,"id_evaluacion":141300,"nota_resul_eval":5.6}
	,{"_id":191250,"id_estudiante":867,"id_evaluacion":112500,"nota_resul_eval":6.9}
	,{"_id":191400,"id_estudiante":649,"id_evaluacion":220500,"nota_resul_eval":4}
	,{"_id":191550,"id_estudiante":297,"id_evaluacion":55200,"nota_resul_eval":3.8}
	,{"_id":191700,"id_estudiante":251,"id_evaluacion":285900,"nota_resul_eval":4.6}
	,{"_id":191850,"id_estudiante":879,"id_evaluacion":97500,"nota_resul_eval":3.2}
	,{"_id":192000,"id_estudiante":209,"id_evaluacion":22800,"nota_resul_eval":4.8}
	,{"_id":192150,"id_estudiante":163,"id_evaluacion":360000,"nota_resul_eval":5.3}
	,{"_id":192300,"id_estudiante":449,"id_evaluacion":100200,"nota_resul_eval":3}
	,{"_id":192450,"id_estudiante":452,"id_evaluacion":282300,"nota_resul_eval":7}
	,{"_id":192600,"id_estudiante":843,"id_evaluacion":336900,"nota_resul_eval":4.1}
	,{"_id":192750,"id_estudiante":729,"id_evaluacion":127200,"nota_resul_eval":5.3}
	,{"_id":192900,"id_estudiante":518,"id_evaluacion":345600,"nota_resul_eval":5.8}
	,{"_id":193050,"id_estudiante":739,"id_evaluacion":233100,"nota_resul_eval":6.8}
	,{"_id":193200,"id_estudiante":957,"id_evaluacion":123900,"nota_resul_eval":4.7}
	,{"_id":193350,"id_estudiante":373,"id_evaluacion":128100,"nota_resul_eval":4.2}
	,{"_id":193500,"id_estudiante":836,"id_evaluacion":291900,"nota_resul_eval":3.2}
	,{"_id":193650,"id_estudiante":885,"id_evaluacion":301800,"nota_resul_eval":5.3}
	,{"_id":193800,"id_estudiante":955,"id_evaluacion":335400,"nota_resul_eval":4.1}
	,{"_id":193950,"id_estudiante":831,"id_evaluacion":7200,"nota_resul_eval":4.4}
	,{"_id":194100,"id_estudiante":368,"id_evaluacion":74400,"nota_resul_eval":3.7}
	,{"_id":194250,"id_estudiante":993,"id_evaluacion":292800,"nota_resul_eval":6}
	,{"_id":194400,"id_estudiante":82,"id_evaluacion":143100,"nota_resul_eval":4.9}
	,{"_id":194550,"id_estudiante":192,"id_evaluacion":347100,"nota_resul_eval":3}
	,{"_id":194700,"id_estudiante":712,"id_evaluacion":76500,"nota_resul_eval":4.6}
	,{"_id":194850,"id_estudiante":850,"id_evaluacion":279000,"nota_resul_eval":4}
	,{"_id":195000,"id_estudiante":834,"id_evaluacion":138600,"nota_resul_eval":4}
	,{"_id":195150,"id_estudiante":730,"id_evaluacion":264300,"nota_resul_eval":5.7}
	,{"_id":195300,"id_estudiante":31,"id_evaluacion":203700,"nota_resul_eval":6.8}
	,{"_id":195450,"id_estudiante":443,"id_evaluacion":78000,"nota_resul_eval":4.5}
	,{"_id":195600,"id_estudiante":898,"id_evaluacion":233400,"nota_resul_eval":4.6}
	,{"_id":195750,"id_estudiante":53,"id_evaluacion":21000,"nota_resul_eval":5.3}
	,{"_id":195900,"id_estudiante":795,"id_evaluacion":115500,"nota_resul_eval":5.4}
	,{"_id":196050,"id_estudiante":842,"id_evaluacion":150600,"nota_resul_eval":6.5}
	,{"_id":196200,"id_estudiante":376,"id_evaluacion":227100,"nota_resul_eval":4.4}
	,{"_id":196350,"id_estudiante":216,"id_evaluacion":248400,"nota_resul_eval":5.3}
	,{"_id":196500,"id_estudiante":43,"id_evaluacion":147300,"nota_resul_eval":4.4}
	,{"_id":196650,"id_estudiante":292,"id_evaluacion":305700,"nota_resul_eval":4.5}
	,{"_id":196800,"id_estudiante":768,"id_evaluacion":267000,"nota_resul_eval":3.5}
	,{"_id":196950,"id_estudiante":892,"id_evaluacion":315300,"nota_resul_eval":4.2}
	,{"_id":197100,"id_estudiante":189,"id_evaluacion":317100,"nota_resul_eval":4.2}
	,{"_id":197250,"id_estudiante":639,"id_evaluacion":102600,"nota_resul_eval":5.9}
	,{"_id":197400,"id_estudiante":651,"id_evaluacion":204900,"nota_resul_eval":6}
	,{"_id":197550,"id_estudiante":93,"id_evaluacion":199800,"nota_resul_eval":3.1}
	,{"_id":197700,"id_estudiante":104,"id_evaluacion":175200,"nota_resul_eval":4.4}
	,{"_id":197850,"id_estudiante":574,"id_evaluacion":55500,"nota_resul_eval":6.4}
	,{"_id":198000,"id_estudiante":964,"id_evaluacion":35400,"nota_resul_eval":3.2}
	,{"_id":198150,"id_estudiante":576,"id_evaluacion":192600,"nota_resul_eval":4.1}
	,{"_id":198300,"id_estudiante":151,"id_evaluacion":155400,"nota_resul_eval":4.3}
	,{"_id":198450,"id_estudiante":72,"id_evaluacion":314700,"nota_resul_eval":6.7}
	,{"_id":198600,"id_estudiante":226,"id_evaluacion":306300,"nota_resul_eval":4.6}
	,{"_id":198750,"id_estudiante":659,"id_evaluacion":321000,"nota_resul_eval":3.4}
	,{"_id":198900,"id_estudiante":628,"id_evaluacion":274500,"nota_resul_eval":4.6}
	,{"_id":199050,"id_estudiante":947,"id_evaluacion":248100,"nota_resul_eval":6.2}
	,{"_id":199200,"id_estudiante":942,"id_evaluacion":214500,"nota_resul_eval":3.2}
	,{"_id":199350,"id_estudiante":362,"id_evaluacion":306300,"nota_resul_eval":5.6}
	,{"_id":199500,"id_estudiante":677,"id_evaluacion":276600,"nota_resul_eval":4.2}
	,{"_id":199650,"id_estudiante":933,"id_evaluacion":131400,"nota_resul_eval":4.7}
	,{"_id":199800,"id_estudiante":502,"id_evaluacion":185700,"nota_resul_eval":4.4}
	,{"_id":199950,"id_estudiante":177,"id_evaluacion":231600,"nota_resul_eval":4.1}
	,{"_id":200100,"id_estudiante":580,"id_evaluacion":132300,"nota_resul_eval":4.8}
	,{"_id":200250,"id_estudiante":999,"id_evaluacion":127200,"nota_resul_eval":5.1}
	,{"_id":200400,"id_estudiante":689,"id_evaluacion":320700,"nota_resul_eval":4.1}
	,{"_id":200550,"id_estudiante":445,"id_evaluacion":40200,"nota_resul_eval":4.4}
	,{"_id":200700,"id_estudiante":681,"id_evaluacion":278700,"nota_resul_eval":5.5}
	,{"_id":200850,"id_estudiante":690,"id_evaluacion":120300,"nota_resul_eval":4.9}
	,{"_id":201000,"id_estudiante":174,"id_evaluacion":255600,"nota_resul_eval":5.4}
	,{"_id":201150,"id_estudiante":255,"id_evaluacion":251700,"nota_resul_eval":3.7}
	,{"_id":201300,"id_estudiante":6,"id_evaluacion":345900,"nota_resul_eval":5.8}
	,{"_id":201450,"id_estudiante":517,"id_evaluacion":105600,"nota_resul_eval":4.9}
	,{"_id":201600,"id_estudiante":811,"id_evaluacion":258900,"nota_resul_eval":4}
	,{"_id":201750,"id_estudiante":621,"id_evaluacion":73500,"nota_resul_eval":3.6}
	,{"_id":201900,"id_estudiante":257,"id_evaluacion":324300,"nota_resul_eval":5}
	,{"_id":202050,"id_estudiante":797,"id_evaluacion":278400,"nota_resul_eval":4.1}
	,{"_id":202200,"id_estudiante":252,"id_evaluacion":135000,"nota_resul_eval":4.5}
	,{"_id":202350,"id_estudiante":334,"id_evaluacion":246900,"nota_resul_eval":3.2}
	,{"_id":202500,"id_estudiante":693,"id_evaluacion":105000,"nota_resul_eval":3}
	,{"_id":202650,"id_estudiante":672,"id_evaluacion":94200,"nota_resul_eval":4.6}
	,{"_id":202800,"id_estudiante":571,"id_evaluacion":25800,"nota_resul_eval":3.3}
	,{"_id":202950,"id_estudiante":809,"id_evaluacion":134700,"nota_resul_eval":4.2}
	,{"_id":203100,"id_estudiante":433,"id_evaluacion":303900,"nota_resul_eval":3.2}
	,{"_id":203250,"id_estudiante":276,"id_evaluacion":131100,"nota_resul_eval":4.2}
	,{"_id":203400,"id_estudiante":973,"id_evaluacion":35100,"nota_resul_eval":4.1}
	,{"_id":203550,"id_estudiante":868,"id_evaluacion":249000,"nota_resul_eval":3.6}
	,{"_id":203700,"id_estudiante":616,"id_evaluacion":62100,"nota_resul_eval":3.7}
	,{"_id":203850,"id_estudiante":408,"id_evaluacion":129300,"nota_resul_eval":3}
	,{"_id":204000,"id_estudiante":831,"id_evaluacion":99000,"nota_resul_eval":3.1}
	,{"_id":204150,"id_estudiante":831,"id_evaluacion":7800,"nota_resul_eval":5.3}
	,{"_id":204300,"id_estudiante":747,"id_evaluacion":238500,"nota_resul_eval":4.7}
	,{"_id":204450,"id_estudiante":797,"id_evaluacion":131100,"nota_resul_eval":4.4}
	,{"_id":204600,"id_estudiante":891,"id_evaluacion":119400,"nota_resul_eval":5.7}
	,{"_id":204750,"id_estudiante":252,"id_evaluacion":347400,"nota_resul_eval":3.3}
	,{"_id":204900,"id_estudiante":580,"id_evaluacion":99000,"nota_resul_eval":3.2}
	,{"_id":205050,"id_estudiante":106,"id_evaluacion":349800,"nota_resul_eval":3.9}
	,{"_id":205200,"id_estudiante":27,"id_evaluacion":172800,"nota_resul_eval":6}
	,{"_id":205350,"id_estudiante":753,"id_evaluacion":304200,"nota_resul_eval":3.1}
	,{"_id":205500,"id_estudiante":831,"id_evaluacion":120600,"nota_resul_eval":5.5}
	,{"_id":205650,"id_estudiante":423,"id_evaluacion":24900,"nota_resul_eval":6.3}
	,{"_id":205800,"id_estudiante":267,"id_evaluacion":189900,"nota_resul_eval":5}
	,{"_id":205950,"id_estudiante":60,"id_evaluacion":66600,"nota_resul_eval":6.6}
	,{"_id":206100,"id_estudiante":295,"id_evaluacion":177600,"nota_resul_eval":3.5}
	,{"_id":206250,"id_estudiante":542,"id_evaluacion":240000,"nota_resul_eval":3.2}
	,{"_id":206400,"id_estudiante":342,"id_evaluacion":15300,"nota_resul_eval":5.3}
	,{"_id":206550,"id_estudiante":52,"id_evaluacion":256200,"nota_resul_eval":5.7}
	,{"_id":206700,"id_estudiante":727,"id_evaluacion":204300,"nota_resul_eval":3.2}
	,{"_id":206850,"id_estudiante":402,"id_evaluacion":189600,"nota_resul_eval":4.5}
	,{"_id":207000,"id_estudiante":725,"id_evaluacion":102900,"nota_resul_eval":6}
	,{"_id":207150,"id_estudiante":843,"id_evaluacion":327300,"nota_resul_eval":6.6}
	,{"_id":207300,"id_estudiante":555,"id_evaluacion":250200,"nota_resul_eval":5}
	,{"_id":207450,"id_estudiante":902,"id_evaluacion":250800,"nota_resul_eval":5.8}
	,{"_id":207600,"id_estudiante":982,"id_evaluacion":156600,"nota_resul_eval":5.3}
	,{"_id":207750,"id_estudiante":732,"id_evaluacion":103200,"nota_resul_eval":4.4}
	,{"_id":207900,"id_estudiante":375,"id_evaluacion":252000,"nota_resul_eval":4.7}
	,{"_id":208050,"id_estudiante":745,"id_evaluacion":192900,"nota_resul_eval":6.8}
	,{"_id":208200,"id_estudiante":902,"id_evaluacion":197400,"nota_resul_eval":5.9}
	,{"_id":208350,"id_estudiante":458,"id_evaluacion":197700,"nota_resul_eval":4.2}
	,{"_id":208500,"id_estudiante":38,"id_evaluacion":260100,"nota_resul_eval":4.9}
	,{"_id":208650,"id_estudiante":790,"id_evaluacion":109800,"nota_resul_eval":3.7}
	,{"_id":208800,"id_estudiante":295,"id_evaluacion":128400,"nota_resul_eval":6.8}
	,{"_id":208950,"id_estudiante":629,"id_evaluacion":18900,"nota_resul_eval":3.5}
	,{"_id":209100,"id_estudiante":193,"id_evaluacion":87000,"nota_resul_eval":3.1}
	,{"_id":209250,"id_estudiante":380,"id_evaluacion":173700,"nota_resul_eval":4.1}
	,{"_id":209400,"id_estudiante":789,"id_evaluacion":141000,"nota_resul_eval":4.7}
	,{"_id":209550,"id_estudiante":567,"id_evaluacion":64200,"nota_resul_eval":3.1}
	,{"_id":209700,"id_estudiante":922,"id_evaluacion":294600,"nota_resul_eval":6.6}
	,{"_id":209850,"id_estudiante":352,"id_evaluacion":67800,"nota_resul_eval":6.8}
	,{"_id":210000,"id_estudiante":268,"id_evaluacion":181800,"nota_resul_eval":7}
	,{"_id":210150,"id_estudiante":125,"id_evaluacion":300,"nota_resul_eval":4.7}
	,{"_id":210300,"id_estudiante":630,"id_evaluacion":347700,"nota_resul_eval":6.5}
	,{"_id":210450,"id_estudiante":665,"id_evaluacion":167400,"nota_resul_eval":3.8}
	,{"_id":210600,"id_estudiante":60,"id_evaluacion":172800,"nota_resul_eval":5.5}
	,{"_id":210750,"id_estudiante":179,"id_evaluacion":237900,"nota_resul_eval":4}
	,{"_id":210900,"id_estudiante":177,"id_evaluacion":203400,"nota_resul_eval":5.5}
	,{"_id":211050,"id_estudiante":399,"id_evaluacion":296400,"nota_resul_eval":3.9}
	,{"_id":211200,"id_estudiante":396,"id_evaluacion":172800,"nota_resul_eval":6.3}
	,{"_id":211350,"id_estudiante":951,"id_evaluacion":143400,"nota_resul_eval":3.5}
	,{"_id":211500,"id_estudiante":574,"id_evaluacion":350400,"nota_resul_eval":6.4}
	,{"_id":211650,"id_estudiante":794,"id_evaluacion":348000,"nota_resul_eval":3.2}
	,{"_id":211800,"id_estudiante":399,"id_evaluacion":357600,"nota_resul_eval":3.2}
	,{"_id":211950,"id_estudiante":159,"id_evaluacion":178500,"nota_resul_eval":4.3}
	,{"_id":212100,"id_estudiante":427,"id_evaluacion":201300,"nota_resul_eval":3.6}
	,{"_id":212250,"id_estudiante":726,"id_evaluacion":220800,"nota_resul_eval":5.1}
	,{"_id":212400,"id_estudiante":797,"id_evaluacion":227100,"nota_resul_eval":6.3}
	,{"_id":212550,"id_estudiante":674,"id_evaluacion":312000,"nota_resul_eval":5}
	,{"_id":212700,"id_estudiante":92,"id_evaluacion":313500,"nota_resul_eval":5.7}
	,{"_id":212850,"id_estudiante":323,"id_evaluacion":323100,"nota_resul_eval":4.6}
	,{"_id":213000,"id_estudiante":598,"id_evaluacion":600,"nota_resul_eval":6.9}
	,{"_id":213150,"id_estudiante":89,"id_evaluacion":36000,"nota_resul_eval":4.7}
	,{"_id":213300,"id_estudiante":306,"id_evaluacion":253500,"nota_resul_eval":5.5}
	,{"_id":213450,"id_estudiante":98,"id_evaluacion":141000,"nota_resul_eval":4.1}
	,{"_id":213600,"id_estudiante":732,"id_evaluacion":228300,"nota_resul_eval":3.8}
	,{"_id":213750,"id_estudiante":193,"id_evaluacion":13200,"nota_resul_eval":4.5}
	,{"_id":213900,"id_estudiante":299,"id_evaluacion":306600,"nota_resul_eval":6.6}
	,{"_id":214050,"id_estudiante":982,"id_evaluacion":342600,"nota_resul_eval":5.8}
	,{"_id":214200,"id_estudiante":80,"id_evaluacion":172800,"nota_resul_eval":3.8}
	,{"_id":214350,"id_estudiante":242,"id_evaluacion":40200,"nota_resul_eval":3.5}
	,{"_id":214500,"id_estudiante":374,"id_evaluacion":158100,"nota_resul_eval":4.7}
	,{"_id":214650,"id_estudiante":348,"id_evaluacion":309900,"nota_resul_eval":4.7}
	,{"_id":214800,"id_estudiante":700,"id_evaluacion":64800,"nota_resul_eval":4.4}
	,{"_id":214950,"id_estudiante":118,"id_evaluacion":304500,"nota_resul_eval":3.6}
	,{"_id":215100,"id_estudiante":51,"id_evaluacion":115800,"nota_resul_eval":6.4}
	,{"_id":215250,"id_estudiante":773,"id_evaluacion":284700,"nota_resul_eval":5.3}
	,{"_id":215400,"id_estudiante":552,"id_evaluacion":230100,"nota_resul_eval":5.5}
	,{"_id":215550,"id_estudiante":279,"id_evaluacion":150900,"nota_resul_eval":3.1}
	,{"_id":215700,"id_estudiante":380,"id_evaluacion":290400,"nota_resul_eval":6.3}
	,{"_id":215850,"id_estudiante":850,"id_evaluacion":316200,"nota_resul_eval":4.2}
	,{"_id":216000,"id_estudiante":882,"id_evaluacion":220200,"nota_resul_eval":5.3}
	,{"_id":216150,"id_estudiante":185,"id_evaluacion":336600,"nota_resul_eval":4.9}
	,{"_id":216300,"id_estudiante":155,"id_evaluacion":75000,"nota_resul_eval":5.1}
	,{"_id":216450,"id_estudiante":838,"id_evaluacion":283500,"nota_resul_eval":4.8}
	,{"_id":216600,"id_estudiante":673,"id_evaluacion":41700,"nota_resul_eval":4.7}
	,{"_id":216750,"id_estudiante":261,"id_evaluacion":72900,"nota_resul_eval":4.6}
	,{"_id":216900,"id_estudiante":10,"id_evaluacion":144300,"nota_resul_eval":5}
	,{"_id":217050,"id_estudiante":956,"id_evaluacion":307500,"nota_resul_eval":5}
	,{"_id":217200,"id_estudiante":456,"id_evaluacion":331800,"nota_resul_eval":4}
	,{"_id":217350,"id_estudiante":885,"id_evaluacion":327900,"nota_resul_eval":6.7}
	,{"_id":217500,"id_estudiante":928,"id_evaluacion":216300,"nota_resul_eval":6.7}
	,{"_id":217650,"id_estudiante":102,"id_evaluacion":219000,"nota_resul_eval":4.7}
	,{"_id":217800,"id_estudiante":611,"id_evaluacion":67800,"nota_resul_eval":6.8}
	,{"_id":217950,"id_estudiante":922,"id_evaluacion":246600,"nota_resul_eval":3.4}
	,{"_id":218100,"id_estudiante":974,"id_evaluacion":330900,"nota_resul_eval":3.5}
	,{"_id":218250,"id_estudiante":680,"id_evaluacion":279300,"nota_resul_eval":5}
	,{"_id":218400,"id_estudiante":581,"id_evaluacion":296100,"nota_resul_eval":6}
	,{"_id":218550,"id_estudiante":96,"id_evaluacion":154800,"nota_resul_eval":4}
	,{"_id":218700,"id_estudiante":829,"id_evaluacion":81000,"nota_resul_eval":4.1}
	,{"_id":218850,"id_estudiante":793,"id_evaluacion":78000,"nota_resul_eval":6.2}
	,{"_id":219000,"id_estudiante":854,"id_evaluacion":329100,"nota_resul_eval":6.5}
	,{"_id":219150,"id_estudiante":97,"id_evaluacion":357000,"nota_resul_eval":4}
	,{"_id":219300,"id_estudiante":164,"id_evaluacion":339300,"nota_resul_eval":5}
	,{"_id":219450,"id_estudiante":274,"id_evaluacion":165600,"nota_resul_eval":3.3}
	,{"_id":219600,"id_estudiante":227,"id_evaluacion":140400,"nota_resul_eval":5.7}
	,{"_id":219750,"id_estudiante":429,"id_evaluacion":262200,"nota_resul_eval":6.1}
	,{"_id":219900,"id_estudiante":715,"id_evaluacion":342000,"nota_resul_eval":4.4}
	,{"_id":220050,"id_estudiante":520,"id_evaluacion":37500,"nota_resul_eval":5.3}
	,{"_id":220200,"id_estudiante":410,"id_evaluacion":189900,"nota_resul_eval":3.7}
	,{"_id":220350,"id_estudiante":856,"id_evaluacion":218100,"nota_resul_eval":4.2}
	,{"_id":220500,"id_estudiante":182,"id_evaluacion":239400,"nota_resul_eval":3.8}
	,{"_id":220650,"id_estudiante":493,"id_evaluacion":125700,"nota_resul_eval":6.5}
	,{"_id":220800,"id_estudiante":369,"id_evaluacion":288300,"nota_resul_eval":6.7}
	,{"_id":220950,"id_estudiante":440,"id_evaluacion":264300,"nota_resul_eval":3.3}
	,{"_id":221100,"id_estudiante":838,"id_evaluacion":215400,"nota_resul_eval":6.7}
	,{"_id":221250,"id_estudiante":215,"id_evaluacion":104400,"nota_resul_eval":6.3}
	,{"_id":221400,"id_estudiante":842,"id_evaluacion":15000,"nota_resul_eval":4.2}
	,{"_id":221550,"id_estudiante":943,"id_evaluacion":20400,"nota_resul_eval":5}
	,{"_id":221700,"id_estudiante":237,"id_evaluacion":294000,"nota_resul_eval":3.6}
	,{"_id":221850,"id_estudiante":396,"id_evaluacion":343200,"nota_resul_eval":4.9}
	,{"_id":222000,"id_estudiante":227,"id_evaluacion":99300,"nota_resul_eval":3.5}
	,{"_id":222150,"id_estudiante":616,"id_evaluacion":99900,"nota_resul_eval":4.8}
	,{"_id":222300,"id_estudiante":817,"id_evaluacion":346500,"nota_resul_eval":3.9}
	,{"_id":222450,"id_estudiante":826,"id_evaluacion":148200,"nota_resul_eval":6}
	,{"_id":222600,"id_estudiante":298,"id_evaluacion":159000,"nota_resul_eval":3.6}
	,{"_id":222750,"id_estudiante":719,"id_evaluacion":18000,"nota_resul_eval":4.6}
	,{"_id":222900,"id_estudiante":987,"id_evaluacion":242100,"nota_resul_eval":3.3}
	,{"_id":223050,"id_estudiante":162,"id_evaluacion":19500,"nota_resul_eval":5.4}
	,{"_id":223200,"id_estudiante":944,"id_evaluacion":54000,"nota_resul_eval":4.9}
	,{"_id":223350,"id_estudiante":903,"id_evaluacion":68100,"nota_resul_eval":4.1}
	,{"_id":223500,"id_estudiante":253,"id_evaluacion":212100,"nota_resul_eval":4.5}
	,{"_id":223650,"id_estudiante":224,"id_evaluacion":71700,"nota_resul_eval":6}
	,{"_id":223800,"id_estudiante":446,"id_evaluacion":299100,"nota_resul_eval":5.8}
	,{"_id":223950,"id_estudiante":828,"id_evaluacion":58500,"nota_resul_eval":4.7}
	,{"_id":224100,"id_estudiante":639,"id_evaluacion":274500,"nota_resul_eval":4.4}
	,{"_id":224250,"id_estudiante":579,"id_evaluacion":201000,"nota_resul_eval":4.4}
	,{"_id":224400,"id_estudiante":388,"id_evaluacion":168900,"nota_resul_eval":3.9}
	,{"_id":224550,"id_estudiante":785,"id_evaluacion":122100,"nota_resul_eval":5.6}
	,{"_id":224700,"id_estudiante":763,"id_evaluacion":282000,"nota_resul_eval":6.2}
	,{"_id":224850,"id_estudiante":947,"id_evaluacion":258900,"nota_resul_eval":4.8}
	,{"_id":225000,"id_estudiante":3,"id_evaluacion":163500,"nota_resul_eval":3.9}
];
// Semestres
semestres = [
	{"_id":250,"año":2020,"id_periodo":500,"fecha_ini":"01\/03\/20","fecha_ter":"15\/07\/20"}
	,{"_id":500,"año":2020,"id_periodo":1000,"fecha_ini":"01\/08\/20","fecha_ter":"15\/12\/20"}
	,{"_id":750,"año":2021,"id_periodo":500,"fecha_ini":"01\/03\/21","fecha_ter":"15\/07\/21"}
	,{"_id":1000,"año":2021,"id_periodo":1000,"fecha_ini":"01\/08\/21","fecha_ter":"15\/12\/21"}
	,{"_id":1250,"año":2022,"id_periodo":500,"fecha_ini":"01\/03\/22","fecha_ter":"15\/07\/22"}
	,{"_id":1500,"año":2022,"id_periodo":1000,"fecha_ini":"01\/08\/22","fecha_ter":"15\/12\/22"}
	,{"_id":1750,"año":2023,"id_periodo":500,"fecha_ini":"01\/03\/23","fecha_ter":"15\/07\/23"}
	,{"_id":2000,"año":2023,"id_periodo":1000,"fecha_ini":"01\/08\/23","fecha_ter":"15\/12\/23"}
	,{"_id":2250,"año":2024,"id_periodo":500,"fecha_ini":"01\/03\/24","fecha_ter":"15\/07\/24"}
	,{"_id":2500,"año":2024,"id_periodo":1000,"fecha_ini":"01\/08\/24","fecha_ter":"15\/12\/24"}
];

/*agregarColeccion("ASIGNATURA", asignaturas);
agregarColeccion("CARRERA", carreras);
agregarColeccion("DOCENTE", docentes);
agregarColeccion("ESPECIALIDAD", especialidades);
agregarColeccion("ESTUDIANTE", estudiantes);
agregarColeccion("EVALUACION", evaluaciones);*/
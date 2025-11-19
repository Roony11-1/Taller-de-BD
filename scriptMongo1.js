// En mongo shell usa load("dirección de el script")

db = db.getSiblingDB("dbEjemplo"); // Comando que define la bd a usar
print("Usando la bd " + db.getName()); // obtengo el nombre dinamicamente

// Manejo de la colección
db.createCollection('Persona'); 
// db.Persona.drop(); // limpia la colección

const nombres = ['José']; // Podemos asignar todos los nombres que querramos
const edades = [30]; // Solo importa que tenga el mismo tamaño de nombre
var listaInicial = [];

const agregarPersonas = () => {
    const largoInicial = db.Persona.find().count(); // para que no varie dentro de el for
    listaInicial = []; // limpiamos la lista para no agregar duplicados
    
    for (let i = 0; i < nombres.length; i++) 
	{
        listaInicial.push // agregamos elementos
		({
			_id: largoInicial + i + 1, // _id es unico por defecto, si no lo agregamos ahora se vuelve inmutable
			nombre: nombres[i], // iteramos en la lista de nombres
			edad: edades[i] // iteramos en la lista de edades
		});
    }
};

// Llamar a la función para llenar listaInicial
agregarPersonas();

// No llamamos a la db si la lista esta vacía
// regla de negocio básica al trabajar con servicios
if (listaInicial.length > 0) 
{
	// Si te das cuenta insertamos de forma [ .. lista ..] que es lo que pide, entonces podemos formatear una lista
	// con todo el codigo que querramos, esa es mi idea de hacer esto
	// al final entender algo más complejo almenos para mi te ayuda mucho a comprender el resto
    const resultado = db.Persona.insertMany(listaInicial); // guardamos los resultados, podríamos hacer un checkeo con la info que nos da(? depende que quieras hacer
    print("Mostrando los resultados...");
    print(resultado);
} 
else
    print("No hay datos para insertar.");

// Mostrar los documentos en la colección
var personas = db.Persona.find().toArray(); // obtenemos la lista entera para ver todos los datos | se que hay un metodo que te devuelve solo los nuevos, no lo recuerdo
print(personas);
// puedes usar printjson(..Json a usar); pero ami no me gusta, usa mucho espacio en la terminal
print("-- Datos ingresados --"); // separador

// si te das cuenta es un flujo básico en javaScript de formatear un Array
// lo importante es acordarse como definir el db => db = db.getSiblingDB("dbEjemplo");

// al profe no le funciona lo que quiere hacer xd
// por eso hice esto mejor

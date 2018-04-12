/*

Realiza la modelización de un Zoológico

El zoológico deberá tener un nombre, una ubicación, un aforo máximo, un horario... ¡y todo lo que se te pueda ocurrir!

El zoológico deberá tener varias áreas":

- Reptiles
- Aves
- Mamíferos
- Peces

con distintos recintos, por ejemplo":

- Reptiles
	- Serpientes
	- Lagartos
- Aves
	- Aves pequeñas
	- Aves tropicales

	... etcétera

Cada recinto debe tener un nombre, una capacidad máxima de animales, aforo maximo de personas y un conjunto de animales.

Modeliza el zoológico lo más completo que puedas.

*/

var precioArea=1000;
var precioRecinto=500;
var precioAnimal=50;
var precioComida=20;
var precioEntrada=10;
var tiempo=5000;
var hora=0;
var zoologicos= new Array();
var zoologicoActivo;
var precioEnfermedadAnimal=100;


function comenzarTiempo()
{
	
	setInterval(function(){
		hora++;
		if(hora==24)	
		{
				hora=0;
		}
		document.getElementById("hora").innerHTML="HORA:"+hora;
		zoologicos.forEach(function(zoo)
		{
			zoo.areas.forEach(function(area)
			{
				area.recintos.forEach(function(recinto)
				{		
					recinto.animales.forEach(function(animal)
					{
						if(hora==0 || !(hora%animal.comida))
						{
							comer(recinto);
						}	
					});
				});						
			});		
		});
	},tiempo);
}

	
	function comer(recinto)
	{	
		
		recinto.dinero-=recinto.animales.length*precioComida;
		if(recinto.dinero<0)
		{
			console.log("recinto "+recinto.nombre+" con dinero "+recinto.dinero);
		}
	}	

function venderEntradas(zoo,personas)
{
	try
	{
	importe=personas*precioEntrada/dameRecintos(zoo);
	zoo.areas.forEach(function(area)
	{
		area.recintos.forEach(function(recinto)
		{
			recinto.dinero+=importe;
		});
	});
	}
	catch(e)
	{

	}		


}

function detectarCambio(variable,elemento){
	var variableAntigua=0;
	var variableNueva=variable;
	setInterval(function(variable){
		if(variableAntigua!=variableNueva)
		{
			elemento.innerHTML=variableNueva;
			variableAntigua=variableNueva;
		}
	},10)	
}


function dinero(zoo){
	var dinero=0;
	zoo.areas.forEach(function(area)
	{
		area.recintos.forEach(function(recinto)
		{
			dinero+=recinto.dinero;
		});
	});

	return dinero;
}


function dameRecintos(zoo)
{
	var recintos=0;
	zoo.areas.forEach(function(area)
	{
		recintos+=area.recintos.length;
	});
	return recintos;
}


function curarAnimal(recinto,animales)
{
	recinto.dinero-=animales*precioEnfermedadAnimal;
}
function agregarRecintoAArea(recinto, area){
	area.recintos.push(recinto);
	
}

function agregarAnimalARecinto(recinto,animal){
	if(recinto.animales.length<recinto.capacidad)
		recinto.animales.push(animal);
	else
		alert("no caben mas animales");
}


function agregarAreaAZoo(area, zoo)
{
	zoo.areas.push(area);
	
}





function crearZoo(nombre,ubicacion,apertura,cierre,dinero)
{
		var zoo={
		"nombre": nombre,
		"ubicacion": ubicacion,
		"areas": [],
		"aforo": 0,
		"apertura":apertura,
		"cierre":cierre,
		"dinero":dinero
	};
	 return zoo;

}

function crearUbicacion(direccion,numero, ciudad)
{
	
	var ubicacion={
		"direccion": direccion,
		"ciudad": ciudad,
		"numero": numero
	};
	return  ubicacion
}


var zoo1=crearZoo("zoo1",crearUbicacion("calle del Pez",1,"Madrid"),10,21,5000);
zoologicos.push(zoo1);


function crearArea(nombre)
{
	
	var area={
		"nombre": nombre,
		"aforo": 0,
		"recintos": [],
		"dinero":0
	}; 
	return area;
}


agregarAreaAZoo(crearArea("mamiferos"),zoologicos[0]);
function crearRecinto(nombre, aforo, capacidad,especie,dinero)
{
	 
	var recinto={
		"nombre": nombre,
		"animales": [],
		"aforo": aforo,
		"capacidad": capacidad,
		"especie": especie,
		"dinero":dinero
	};
	return recinto;
}

var recinto=crearRecinto("leones","30",5,"leon",5);
var area=zoologicos[0].areas[0];

agregarRecintoAArea(recinto,area);
function crearAnimal( especie, comida)
{
	
	var animal={
		
		"especie": especie,
		"comida": comida
	};
	return animal;
}

agregarAnimalARecinto(zoologicos[0].areas[0].recintos[0],crearAnimal("leon",4))

comenzarTiempo();


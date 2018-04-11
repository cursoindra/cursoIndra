var zoologicos = [];

var Zoo = {
	nombre: "",
	ubicacion: {},
	aforo: 0,
	horarioApertura: "",
	horarioCierre: "",
	dinero: 0,
	areas: [],
	precioEntrada: 10
}

var Ubicacion = {
	calle: "",
	ciudad: "",
	pais: ""
}

var Area = {
	recintos: [],
	aforo: 0,
	nombre: "",
	dinero: 0,
	precio: 1000
}

var Recinto = {
	especies: {},
	cantidadAnimales: 0,
	aforo: 0,
	dinero: 0,
	precio: 100,
	capacidad: 0
}

var Animal = {
	especie: "",
	comida: 0,
	precioComida: 0,
	precio: 50
}

function crearZoo(){
	var zoologico = new Zoo();
	var ubicacionzoo = new Ubicacion();

	zoologico.nombre = document.getElementById("nombreZoo").value;
	zoologico.horarioApertura = document.getElementById("horarioAperturaZoo").value;
	zoologico.horarioCierre = document.getElementById("horarioCierreZoo").value;
	zoologico.dinero = document.getElementById("dineroZoo").value;
	ubicacionzoo.calle = document.getElementById("calleZoo").value;
	ubicacionzoo.ciudad = document.getElementById("ciudadZoo").value;
	ubicacionzoo.pais = document.getElementById("paisZoo").value;
	zoologico.ubicacion = ubicacionzoo;

	zoologicos.push(zoologico);
}

function crearArea(){
	var area = new Area();

	area.nombre = document.getElementById("nombreArea").value;
	area.dinero = document.getElementById("dineroArea").value;

	var zoo = comprobarZoo();

	if(zoo.dinero >= (area.precio + area.dinero)){
		zoo.areas.push(area);
		zoo.dinero -= area.precio;
	}
	else
		alert("No hay suficiente dinero");
}

function crearRecinto(){
	var recinto = new Recinto();

	recinto.aforo = document.getElementById("aforoRecinto").value;
	recinto.dinero = document.getElementById("dineroRecinto").value;
	recinto.capacidad = document.getElementById("capacidadRecinto").value;

	var zoo = comprobarZoo();
	var area = comprobarArea(zoo);

	if(area.dinero >= (recinto.precio + recinto.dinero)){
		area.recintos.push(recinto);
		area.aforo += recinto.aforo;
		zoo.dinero -= recinto.precio;
		area.dinero -= recinto.precio;
	}
	else
		alert("No hay suficiente dinero");
}

function crearAnimal(){
	var animal = new Animal();
	var cantidad = document.getElementById("cantidadAnimales").value;

	animal.especie = document.getElementById("especieAnimal").value;
	animal.comida = document.getElementById("comidaAnimal").value;
	animal.precioComida = document.getElementById("precioComidaAnimal").value;

	var zoo = comprobarZoo();
	var area = comprobarArea(zoo);
	var recinto = comprobarRecinto(area);

	recinto.especies = animal;	
}

function cantidadAnimales(){
	var zoo = comprobarZoo();
	var area = comprobarArea(zoo);
	var recinto = comprobarRecinto(area);
	var coste = recinto.cantidadAnimales * recinto.comida * recinto.precioComida * 7;

	if(recinto.dinero >= coste){
		if(recinto.capacidad >= cantidad){
			recinto.cantidad = cantidad;
			zoo.dinero -= coste;
			area.dinero -= coste;
			recinto.dinero -= coste;
		}
		else
			alert("No hay hueco");

	}
	else
		alert("No hay suficiente dinero");
}

function comprobarZoo(){
	for(var i=0; i<zoologicos.length; i++){
		if(zoologicos[i].nombre == document.getElementById("zoo")){
			return zoologicos[i];
		}
	}
}

function comprobarArea(zoo){
	for(var i=0; i<zoo.areas.length; i++){
		if(zoo.areas[i].nombre == document.getElementById("nombreArea")){
			return zoo.areas[i];
		}
	}
}

function comprobarArea(area){
	for(var i=0; i<area.recintos.length; i++){
		if(area.recintos[i].especie == document.getElementById("especieRecinto")){
			return area.recintos[i];
		}
	}
}

function mostrarArea(){
	var zoo = comprobarZoo();
	var area = comprobarArea(zoo);

	document.getElementById("nA").innerHTML = area.nombre;
	document.getElementById("aA").innerHTML = area.aforo;
	document.getElementById("dA").innerHTML = area.dinero;
}
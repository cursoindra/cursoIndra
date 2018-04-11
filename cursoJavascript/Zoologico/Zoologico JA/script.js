var zoologicos = [];

function Zoo() {
	this.nombre = "",
	this.ubicacion = {},
	this.aforo = 0,
	this.horarioApertura = "",
	this.horarioCierre = "",
	this.dinero = 0,
	this.areas = [],
	this.precioEntrada = 10
}

function Ubicacion() {
	this.calle = "",
	this.ciudad = "",
	this.pais = ""
}

function Area() {
	this.recintos = [],
	this.aforo = 0,
	this.nombre = "",
	this.dinero = 0,
	this.precio = 1000
}

function Recinto() {
	this.especie = {},
	this.cantidadAnimales = 0,
	this.aforo = 0,
	this.dinero = 0,
	this.precio = 100,
	this.capacidad = 0
}

function Animal() {
	this.especie = "",
	this.comida = 0,
	this.precioComida = 0,
	this.precio = 50
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

	var zoo = document.getElementById("zoo");
	var opciones = document.createElement("option");
	var txt = document.createTextNode(zoologico.nombre);
	opciones.appendChild(txt);
	zoo.appendChild(opciones);


}

function crearArea(){
	var area = new Area();

	area.nombre = document.getElementById("nombreArea").value;
	area.dinero = document.getElementById("dineroArea").value;

	var zoo = comprobarZoo();

	if(parseInt(zoo.dinero) >= (parseInt(area.precio) + parseInt(area.dinero))){
		zoo.areas.push(area);
		zoo.dinero -= area.precio;
	}
	else
		alert("No hay suficiente dinero");
	console.log(area);
}

function crearRecinto(){
	var recinto = new Recinto();

	recinto.aforo = document.getElementById("aforoRecinto").value;
	recinto.dinero = document.getElementById("dineroRecinto").value;
	recinto.capacidad = document.getElementById("capacidadRecinto").value;

	var zoo = comprobarZoo();
	var area = comprobarArea(zoo);

	if(parseInt(area.dinero) >= (parseInt(recinto.precio) + parseInt(recinto.dinero))){
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

	recinto.especie = animal;	
}

function cantidadAnimales(){
	var zoo = comprobarZoo();
	var area = comprobarArea(zoo);
	var recinto = comprobarRecinto(area);
	var coste = parseInt(recinto.cantidadAnimales) * parseInt(recinto.comida) * parseInt(recinto.precioComida) * 7;

	if(parseInt(recinto.dinero) >= coste){
		if(parseInt(recinto.capacidad) >= cantidad){
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
		if(zoologicos[i].nombre == document.getElementById("zoo").value){
			return zoologicos[i];
		}
	}
}

function comprobarArea(zoo){
	for(var i=0; i<zoo.areas.length; i++){
		if(zoo.areas[i].nombre == document.getElementById("nombreArea").value){
			return zoo.areas[i];
		}
	}
}

function comprobarRecinto(area){
	for(var i=0; i<area.recintos.length; i++){
		if(area.recintos[i].especie == document.getElementById("especieRecinto").value){
			return area.recintos[i];
		}
	}
}

function mostrarArea(){
	var zoo = comprobarZoo();
	var area = comprobarArea(zoo);

	var tabla = document.getElementById("areas");
	for(var i=0; i<zoo.areas.length; i++){
		var row = tabla.insertRow(tabla.length);
		row.insertCell(0).innerHTML = area.nombre;
		row.insertCell(1).innerHTML = area.aforo;
		row.insertCell(2).innerHTML = area.dinero;
	}
}

function mostrarRecinto(){
    var zoo = comprobarZoo();
	var area = comprobarArea(zoo);
	var recinto = comprobarRecinto(area);

	var select = document.getElementById("recint");
	var opciones = document.createElement("select");
	for(var i=0; i<area.recintos.length; i++){
		var op = document.createElement("option");
		var txt = document.createTextNode(recinto.especie);
		op.appendChild(txt);
		opciones.appendChild(op);
	}
	select.appendChild(opciones);

	var tabla = document.getElementById("recintos");
	for(var i=0; i<zoo.areas.length; i++){
		var row = tabla.insertRow(tabla.length);
		row.insertCell(0).innerHTML = recinto.especie;
		row.insertCell(1).innerHTML = recinto.cantidadAnimales;
		row.insertCell(2).innerHTML = recinto.aforo;
		row.insertCell(3).innerHTML = recinto.dinero;
		row.insertCell(4).innerHTML = recinto.capacidad;
	}
}
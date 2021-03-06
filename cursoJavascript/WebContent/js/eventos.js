var calendarios = new Array();
var eventos = new Array();
if(localStorage.getItem("calendario"))
	calendarios.push(JSON.parse(localStorage.getItem("calendario")));
if(localStorage.getItem("evento"))
	eventos.push(JSON.parse(localStorage.getItem("evento")));

class Calendario{
    constructor(nombre,tipoCalendario,roles,propietario,id=0){
        this.nombre = nombre;
        this.tipoCalendario = tipoCalendario;
        this.roles = roles;
        this.propietario = propietario;
        this.id = id;
    }
}

class Evento{
    constructor(propietario,inicio,fin,descripcion,aviso,calendario,invitados,tipoEvento){
        this.propietario = propietario;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.aviso = aviso;
        this.calendario = calendario;
        this.invitados = invitados;
        this.tipoEvento = tipoEvento;
    }
}

class Agenda{
	constructor(direccion, nombre, telefono){
		this.direccion=direccion;
		this.nombre=nombre;
		this.telefono=telefono;
	}
}

function crearCalendario(){
	event.preventDefault();
	var nombre = document.getElementById('nombre').value;
	var roles = new Array;
	var tipoCalendario = document.getElementById('tipoCalendario').value;

	if (document.formulario.user.checked == true) {
		var rol1 
		= document.formulario.user.value;
		roles.push(rol1);
	}
	if (document.formulario.admin.checked == true) {
		var rol2 = document.formulario.admin.value;
		roles.push(rol2);
	}
	if (document.formulario.proyect1.checked == true) {
		var rol3 = document.formulario.proyect1.value;
		roles.push(rol3);
	}
	if (document.formulario.proyect2.checked == true) {
		var rol4 = document.formulario.proyect2.value;
		roles.push(rol4);
	}
	if (document.formulario.proyect3.checked == true) {
		var rol5 = document.formulario.proyect3.value;
		roles.push(rol5);
	}

	if(roles.length == 0)
		alert("Debes elegir algun rol");
	else{
		var calendario = new Calendario();
		calendario.nombre = nombre;
		calendario.tipoCalendario = tipoCalendario;
		calendario.roles = roles;

		if(calendarios.length > 0)
			calendario.id = calendarios[calendarios.length - 1].id + 1;

		calendarios.push(calendario);
		console.log(calendarios);
		localStorage.setItem("calendario",JSON.stringify(calendarios));
		console.log(localStorage.getItem("calendario",calendarios));
	}
};

function crearEvento(){
	event.preventDefault();
	var fechaInicio = document.getElementById("start-date").value;
	var fechaFin = document.getElementById("end-date").value;
	var invitadosAgregados = new Array();
	for (let i=0;i<document.getElementById("invitadosAgregados").options.length;i++)
		invitadosAgregados.push(document.getElementById("invitadosAgregados").options[i].value);
	var tipoCalendario = document.getElementById("tipoCalendario").value;
	var inputAlert = document.getElementById("inputAlert").value;
	var descripcion = document.getElementById("descripcion").value;
	var nombreEvento = document.getElementById("nombreEvento").value;
	
	var evento = new Evento();
	evento.inicio = fechaInicio;
	evento.fin = fechaFin;
	evento.descripcion = descripcion;
	evento.aviso = inputAlert;
	evento.calendario = tipoCalendario;
	evento.invitados = invitadosAgregados;
	evento.tipoEvento = nombreEvento;

	eventos.push(evento);
	console.log(eventos);
	localStorage.setItem("calendario",JSON.stringify(eventos));
	console.log(localStorage.getItem("evento",eventos));
}
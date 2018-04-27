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
	var nombre = document.getElementById('nombre').value;
	var roles = new Array;
	var tipoCalendario = document.getElementById('tipoCalendario').value;

	if (document.formulario.user.checked == true) {
		var rol1 = document.formulario.user.value;
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

		var datosJson = JSON.stringify(calendario);
		localStorage.setItem("calendario", datosJson);
		alert(datosJson);
	}
};

function crearEvento(){
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

	var datosJson = JSON.stringify(evento);
	localStorage.setItem("evento", datosJson);
	alert(datosJson);
}
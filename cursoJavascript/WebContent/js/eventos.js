class TipoEvento{
	constructor(descripcion, id = 0){
		this.id = id;
		this.descripcion = descripcion;
	}
}

class Evento{
	constructor(fechaInicio, fechaFin, descripcion, aviso, calendario, datosPersonales, tipoEvento, id = 0){
		this.id = id;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
		this.descripcion = descripcion;
		this.aviso = aviso;
		this.calendario_id = calendario;
		this.datosPersonales_id = datosPersonales;
		this.tipoEvento_id = tipoEvento;
	}
}

class TipoCalendario{
	constructor(descripcion, id = 0){
		this.descripcion = descripcion;
		this.id = id;
	}
}

class Calendario{
	constructor(nombre, descripcion, tipoCalendario, rol, id = 0){
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.tipoCalendario_id =  tipoCalendario;
		this.rol_id = rol;
	}
}

class Agenda{
	constructor(direccion, nombre, telefono){
		this.direccion=direccion;
		this.nombre=nombre;
		this.telefono=telefono;
	}
}
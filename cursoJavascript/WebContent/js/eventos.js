class TipoEvento{
	constructor(id, descripcion){
		this.id = id;
		this.descripcion = descripcion;
	}
}

class Evento{
	constructor(id, fechaInicio, fechaFin, descripcion, aviso, calendario, datosPersonales, tipoEvento){
		this.id = id;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
		this.descripcion = descripcion;
		this.aviso = aviso;
		this.calendario = calendario;
		this.datosPersonales = datosPersonales;
		this.tipoEvento = tipoEvento;
	}
}
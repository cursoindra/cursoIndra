/**
 * 
 */

function grabar(){
	var agenda= new Agenda("javier","669951228");
	var request = new Request('https://localhost:8080/curso/recibir.html', {
	    method: 'POST',
	    body:      agenda
	});
	fetch(request),then(function(datos){
		console.log(datos);
	})
}

class Agenda{
	constructor(nombre,telefono)
	{
		this.nombre=nombre;
		this.telefono= telefono;
	}
}

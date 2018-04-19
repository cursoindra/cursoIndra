/**
 * 
 */

 

var grabar=()=>{
 	return new Promise((resolve,reject)=>{
 		var cabeceras= new Headers();
 		
 	cabeceras.set('Content-Type', 'application/json');

 		var agenda=new Agenda("Javier","669951228");
 		var request = new Request('http://localhost:8080/curso/recibir.html', {
 		    method: 'POST',
 		    headers:cabeceras,
 		    body:      JSON.stringify(agenda)
 		});
 		fetch(request).then(datos=>{
 			if(datos.ok)
 				datos.text().then(function(valor){
 					console.log(valor);
 				});
 		}).catch(()=>{reject("se ha producido un error")});
 	});
 };



class Agenda{
	constructor(nombre,telefono)
	{
		this.nombre=nombre;
		this.telefono= telefono;
	}
}

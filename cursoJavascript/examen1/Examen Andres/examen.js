function Biblioteca(nombre){
	this.nombre=nombre;
	this.secciones=[];
	this.socios=[];
}
function Libro(nombre,numeroPaginas, autor, tematica){
	this.nombre=nombre;
	this.numeroPaginas=numeroPaginas;
	this.autor=autor;
	this.tematica=tematica;
}

function Seccion(nombre){
	this.nombre=nombre;
	this.libros=[];
}

function Socio (nombre, numeroSocio){
	this.nombre=nombre;
	this.numeroSocio=numeroSocio;
	this.libros=[];
}

var autores = ["Benito Perez Galdos", "Miguel de Cervantes", "Terry Pratchet", "Brandon Sanderson", "H.P. Lovecraft", "Camilo Jose Cela", "Gustavo Adolfo Becquer"];
var nombreSocios = ["Juan", "Saul", "Fernando", "Sergio", "Jorge", "David", "Sara", "Marta", "Raquel", "Ignacio", "Julio"];
var tematicas = ["Amor", "Aventuras", "Naturaleza", "Historia", "Viajes"];
var titulos = ["Harry Potter y el cáliz de fuego", "Mundo disco", "El ladron del rayo", "Temerario", "Los templarios", "Colmillo Blanco", "El código Da Vinci", "Indra libro"];
var biblioteca = new Biblioteca();

Biblioteca.prototype.añadirLibro = function(libro){
		for(j = 0 ; j<this.secciones.length;j++){
			if(this.secciones[j].nombre.includes(libro.tematica)){
				this.secciones[j].libros.push(libro)
			}
		}
	}

Biblioteca.prototype.dameLibroAleatorio= function (){
		return (this.secciones[Math.floor((Math.random() * this.secciones.length))].libros.splice(Math.floor((Math.random() * this.length)),1))[0];
	};	

Biblioteca.prototype.devolverLibro= function (libro){
			for(j = 0 ; j<this.secciones.length;j++){
			if(this.secciones[j].nombre.includes(libro.tematica)){
				this.secciones[j].libros.push(libro);
			}
		}	
}

Socio.prototype.ejecutarCiclo=function(){
		for (var j= 0; j<this.libros.length;j++){
			biblioteca.devolverLibro(this.libros[j])
		}
		this.libros = [];
		var azar = Math.floor((Math.random() * 3) + 1)
		for (var i = 0; i<azar; i++){
			if(this.libros.length<3){
				this.libros.push(biblioteca.dameLibroAleatorio())
			}
		}
	}

Biblioteca.prototype.ejecutarCiclo=function(){
		for(var i=0;i<this.socios.length;i++){
		this.socios[i].ejecutarCiclo()}
		this.imprimirEstado();
	};
Biblioteca.prototype.imprimirEstado=function(){
		var librosSinPrestar=0;
		var res="Biblioteca Municipal:\n";
		for(var j = 0 ; j<this.secciones.length;j++){
			librosSinPrestar+=this.secciones[j].libros.length;
			res+="Sección "+this.secciones[j].nombre+"\n         Número de libros: "+this.secciones[j].libros.length+"\n";
			}
			res+="\nTotal de libros en la biblioteca: "+librosSinPrestar+"\nTotal de libros prestados a los socios: "+ (1000-librosSinPrestar)
			console.log(res)

}
//carga de secciones
for (i = 0 ; i<tematicas.length; i++){
	var seccion = new Seccion(tematicas[i])
	biblioteca.secciones.push(seccion);
}
//carga de socios
for (i = 1; i<=100;i++){
	var socio= new Socio(nombreSocios[Math.floor((Math.random() * nombreSocios.length))],i)
	biblioteca.socios.push(socio)
}
//carga de libros
for (i = 0; i<1000;i++){
	var libro = new Libro(titulos[Math.floor((Math.random() * titulos.length))],Math.floor((Math.random() * 200) + 100),autores[Math.floor((Math.random() * autores.length))],tematicas[Math.floor((Math.random() * tematicas.length))])
	biblioteca.añadirLibro(libro);
}
setInterval(function (){
	console.clear();
	biblioteca.ejecutarCiclo();
},1000)
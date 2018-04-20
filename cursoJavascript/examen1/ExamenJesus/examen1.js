var nomSocios = ["Juan","Jose","Miguel","Pepe","Eustaquio"];
var nomAutores = ["Federico","Perico","Roberto","Daniel","Ludovic"];

var socios = new Array();
var libros = new Array();
var libAlquilados = new Array();

var am=0,av=0,n=0,h=0,v=0;

function Biblioteca(nombre){
	this.nombre = nombre;
	this.secciones = new Array();
	this.socios = new Array();
}
function Libro(nombre,numPag,autor,tematica){
	this.nombre = nombre;
	this.numPag = numPag;
	this.autor = autor;
	this.tematica = tematica;
}
function Seccion(nombre){
	this.nombre = nombre;
	this.libros = new Array();
}
function Socio(nombre,numSocio){
	this.nombre = nombre;
	this.numSocio = numSocio;
	this.libros = new Array();
}
Biblioteca.prototype = {
	anadirLibro: function(libro){
		libros.push(libro);
		if(libro.tematica.nombre == "Amor")
			amor.libros.push(libro);
		else if(libro.tematica.nombre == "Aventuras")
			aventuras.libros.push(libro);
		else if(libro.tematica.nombre == "Naturaleza")
			naturaleza.libros.push(libro);
		else if(libro.tematica.nombre == "Historia")
			historia.libros.push(libro);
		else
			viajes.libros.push(libro);
		sumarLibro(libro);
	},
	ejecutarCiclo: function(){
		for(var i=0;i<this.socios.length;i++)
			this.socios[i].ejecutarCiclo();
		imprimir();
	},
	dameLibroAleatorio: function(){
		for(var j=0;j<this.socios.length;j++){
			var cantidad = aleatorio(1,3);
			for(var i=1;i<=cantidad;i++){
				do{
					var pos = aleatorio(0,999);
					var correcto = true;
					for(var z=0;z<libAlquilados.length;z++){
						if(libAlquilados[z].nombre == libros[pos].nombre)
							correcto = false;
					}
				}while(!correcto);
				var libro = libros[pos];
				this.socios[j].libros.push(libro);
				libAlquilados.push(libro);
				restarLibros(libro);
			}
		}
	},
	devolverLibro: function(libro){
		for(var i=0;i<this.socios.length;i++){
			for(var j=0;j<this.socios[i].libros.length;j++){
				if(libro.nombre == this.socios[i].libros[j].nombre){
					this.socios[i].libros.splice(j,1);
					for(var z=0;z<libAlquilados.length;z++){
						if(libro.nombre == libAlquilados[z].nombre){
							libAlquilados.splice(z,1);
							sumarLibro(libro);
						}
					}
				}
			}
		}
	}
}
Socio.prototype = {
	ejecutarCiclo: function(){
		for(var i=0;i<libros.length;i++){
			biblioteca.devolverLibro(libros[i]);
		}
		biblioteca.dameLibroAleatorio();
	}
}
function aleatorio(a,b){
	return Math.round(Math.random()*(b-a)+parseInt(a));
}
function imprimir(){
	console.clear();
	console.log("Biblioteca municipal:");
	console.log("");
	console.log("Seccion Amor:");
	console.log("	Numero de libros: "+am);
	console.log("Seccion Aventuras:");
	console.log("	Numero de libros: "+av);
	console.log("Seccion Naturaleza:");
	console.log("	Numero de libros: "+n);
	console.log("Seccion Historia:");
	console.log("	Numero de libros: "+h);
	console.log("Seccion Viajes:");
	console.log("	Numero de libros: "+v);
	console.log("");
	console.log("Total de libros en la biblioteca: "+ (libros.length-libAlquilados.length));
	console.log("Total de libros prestados a los socios: "+libAlquilados.length);

	document.getElementById("libAm").innerHTML = am;
	document.getElementById("libAv").innerHTML = av;
	document.getElementById("libNat").innerHTML = n;
	document.getElementById("libHis").innerHTML = h;
	document.getElementById("libVia").innerHTML = v;
	document.getElementById("tot").innerHTML = (libros.length-libAlquilados.length);
	document.getElementById("totSoc").innerHTML = libAlquilados.length;
}
function restarLibros(libro){
		if(libro.tematica.nombre == "Amor")
			am--;
		else if(libro.tematica.nombre == "Aventuras")
			av--;
		else if(libro.tematica.nombre == "Naturaleza")
			n--;
		else if(libro.tematica.nombre == "Historia")
			h--;
		else
			v--;
}
function sumarLibro(libro){
		if(libro.tematica.nombre == "Amor")
			am++;
		else if(libro.tematica.nombre == "Aventuras")
			av++;
		else if(libro.tematica.nombre == "Naturaleza")
			n++;
		else if(libro.tematica.nombre == "Historia")
			h++;
		else
			v++;
}

var biblioteca = new Biblioteca("Biblioteca");
var amor = new Seccion("Amor");
var aventuras = new Seccion("Aventuras");
var naturaleza = new Seccion("Naturaleza");
var historia = new Seccion("Historia");
var viajes = new Seccion("Viajes");

biblioteca.secciones.push(amor);
biblioteca.secciones.push(aventuras);
biblioteca.secciones.push(naturaleza);
biblioteca.secciones.push(historia);
biblioteca.secciones.push(viajes);

for(var i=0;i<100;i++){
	var socio = new Socio(nomSocios[aleatorio(0,4)],i);
	socios.push(socio);
	biblioteca.socios.push(socio);
}
for(var i=0;i<1000;i++){
	var nom = "Nombre libro "+i;
	var pag = aleatorio(100,300);
	var au = nomAutores[aleatorio(0,4)];
	var tem = biblioteca.secciones[aleatorio(0,4)];
	var libro = new Libro(nom,pag,au,tem);
	biblioteca.anadirLibro(libro);
}

setInterval(biblioteca.ejecutarCiclo,1000);
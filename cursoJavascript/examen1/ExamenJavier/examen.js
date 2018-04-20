function Biblioteca(nombre){
	this.nombre = nombre;
	this.secciones = new Array();
	this.socios = new Array();
	this.libros = new Array();
}

function Libro(nombre,autor,tematica){
	this.nombre = nombre;
	this.paginas = 0;
	this.autor = autor;
	this.tematica = tematica;
}

function Seccion(nombre){
	this.nombre = nombre;
	this.libros = new Array();
}

function Socio(nombre){
	this.nombre = nombre;
	this.num_socio = 0;
	this.libros = new Array();
}

function rellenarSocios(){
	var cantidadNumeros = 100;
	while(biblioteca1.socios.length < cantidadNumeros ){
  		var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  		var existe = false;
  		for(var i=0;i<biblioteca1.socios.length;i++){
			if(biblioteca1.socios [i] == numeroAleatorio){
        		existe = true;
        		break;
    		}
  		}
  		if(!existe){
   			biblioteca1.socios[biblioteca1.socios.length] = numeroAleatorio;
  		}
	}
}

function anadirLibros(biblioteca1){
	for (var i = 0; i < 1000; i++){
		var libros[i] = new Libro();
		libro[i].nombre = "Libro"+i;
		libro[i].paginas = Math.random()*(500 - 50) + 50;
		libro[i].autor = "Autor"+i;
		var aleatorio = Math.floor(Math.random()*(biblioteca1.secciones.length));
		var seleccion = biblioteca1.secciones[aleatorio];
		libro[i].tematica = seleccion;
		
	}
}

var biblioteca1 = new Biblioteca();
biblioteca1.nombre = "Biblioteca 1"
biblioteca1.secciones = ["Amor","Aventuras","Naturaleza","Historia","Viajes"];
rellenarSocios();
console.log(biblioteca1.socios);
anadirLibros();
console.log(anadirLibros());
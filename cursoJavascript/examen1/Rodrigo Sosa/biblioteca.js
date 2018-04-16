function Biblioteca(nombre, secciones){
	this.nombre = nombre;
	this.secciones = secciones;
	this.socios = new Array();
}

function Libro(nombre, paginas, autor, tematica){
	this.nombre = nombre;
	this.paginas = paginas;
	this.autor = autor;
	this.tematica = tematica;
}

function Seccion(nombre){
	this.nombre = nombre;
	this.libros = new Array();
}	

function Socio(nombre, n_socio){
	this.nombre = nombre;
	this.n_socio = n_socio;
	this.libros = new Array();
}

Biblioteca.prototype = {
	anadirLibro : function(libro){
		this.secciones.forEach(function(seccion, index){		
			if(seccion.nombre == libro.tematica){				
				seccion.libros.push(libro);				
			}
		});		
	},
	dameLibroAleatorio : function()
	{				
		section = this.secciones[Math.floor(Math.random()*this.secciones.length)];		
		random_book = Math.floor(Math.random()*section.libros.length);
		book = section.libros[random_book];		
		section.libros.splice(random_book, 1);
		return book;		
	},
	devolverLibro : function(libro){		
		this.anadirLibro(libro);	
	},
	ejecutarCiclo : function(){		
		this.socios.forEach(function(socio){
			socio.ejecutarCiclo();
		});
		
	},
	imprimirEstado: function(){
		var total = 0;
		var total_socios = 0;	
		console.clear();
		console.log("%c \n/// "+this.nombre+" \\\\\\", 'color: green');
		this.socios.forEach(function(socio){			
			total_socios+=socio.libros.length;
		})

		this.secciones.forEach(function(seccion){			
			console.log("Seccion: "+seccion.nombre+"");	
			console.log("\t >> Numero de libros: "+seccion.libros.length);
			total+=seccion.libros.length;
		})
		console.log("Total libros prestados a los socios: "+total_socios);
		console.log("Total libros en biblioteca: "+total);		
	}

}

seccion1 = new Seccion("Amor");
seccion2 = new Seccion("Aventuras");
seccion3 = new Seccion("Naturaleza");
seccion4 = new Seccion("Historia");
seccion5 = new Seccion("Viajes");

var biblioteca = new Biblioteca("Biblioteca Municipal", [seccion1, seccion2, seccion3, seccion4, seccion5]);

for(i = 0 ; i < 100 ; i++)
	biblioteca.socios.push(new Socio("Socio"+i, i));

for(i = 0 ; i < 1000; i++)
	biblioteca.anadirLibro(new Libro("Libro"+i, 100, "autor"+i, biblioteca.secciones[Math.floor(Math.random()*biblioteca.secciones.length)].nombre));	

Socio.prototype.ejecutarCiclo = function(){
	rnd = Math.floor(Math.random()*3+1);
	
	for(i = 0; i <= rnd;i++)
		this.libros.push(biblioteca.dameLibroAleatorio());	
	
	for (var i = 0; i <= this.libros.length; i++) {			
		if(this.libros[i] != null){
				biblioteca.devolverLibro(this.libros[i]);
				this.libros.splice(i, 1);
		}
	}	

}

setInterval(function(){ biblioteca.ejecutarCiclo(); biblioteca.imprimirEstado(); }, 1000);

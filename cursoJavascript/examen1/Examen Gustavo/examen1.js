var autores=["Cervantes","Lorca","Alberti","Machado","Delibes"];
var secciones=["Amor","Aventuras","Naturaleza","Historia","Viajes"];
	function Biblioteca(nombre,secciones)
	{
		this.nombre=nombre;
		this.secciones=new Array();
		this.socios=new Array();
	}

	Biblioteca.prototype={
		anadirLibro:function(libro)
		{

								this.secciones.forEach(function(seccion)
								{	
								if(seccion.nombre == libro.tematica)
								{
								seccion.libros.push(libro);
								}
								
								});

							
							
			
		},
		dameLibroAleatorio:function()
		{
			seccion = this.secciones[Math.ceil(Math.random()*this.secciones.length)];		
			ran_lim = Math.ceil(Math.random()*section.libros.length);
			libro = section.libros[ran_lim];		
			seccion.libros.splice(ran_lim, 1);
			return libro;	
		},
		devolverLibro:function(libro)
		{
			this.anadirLibro();
		},
		ejecutarCiclo:function()
		{
			alert(this)
			for(var i=0;i<this.socios.length;i++)
			{
				this.socios[i].ejecutarCiclo()
			}
				
		},
		
		imprimirEstado:function()
		{
			var num=0;
			console.log(this.nombre);
			this.secciones.forEach(function (seccion) {
            console.log("Seccion " + seccion.nombre + "\n" 
                 + "Numero de libros: " + seccion.libros.length);
            contador += seccion.libros.length;
        });  
			console.log("Total de libros en la biblioteca: " + num); 
        	console.log("Total de libros prestados a los socios: " + (1000 - num) + "\n\n");  
		}

	};

	function Libro(nombre,num_pag,autor,tematica)
	{
		this.nombre=nombre;
		this.num_pag=num_pag;
		this.autor=autor;
		this.tematica=tematica;
	};

	function Seccion(nombre)
	{
		this.nombre=nombre;
		this.libros=new Array();
	};

	function Socio(nombre,num_soc)
	{
		this.nombre=nombre;
		this.num_soc=num_soc;
		this.libros=new Array();
	};

	Socio.prototype={
		ejecutarCiclo:function()
		{
			var num =Math.ceil(getRandom() * 3 + 1);

			 this.libros.forEach(function (libro) {
       		 biblioteca.devolverLibro(libro);
    			});

			for(var i=0;i<=num;i++)
			{
				this.libros.push(biblioteca1.dameLibroAleatorio());	
			}
			
			}
			
		};
	


function getRandom() {
  return Math.random();
}



var sec1 = new Seccion("Amor");
var sec2 = new Seccion("Aventuras");
var sec3 = new Seccion("Naturaleza");
var sec4 = new Seccion("Historia");
var sec5 = new Seccion("Viajes");

var biblioteca1= new Biblioteca("biblio1", [sec1, sec2, sec3, sec4, sec5]);



for(var i=0; i<100;i++){

	biblioteca1.socios.push(new Socio("Socio " + i, i));
}						
									for (var i=0;i<1000;i++)
									{
										var nom="Libro" + i;
										var autor=autores[Math.ceil(getRandom() * 4)];
										var seccion=secciones[Math.ceil(getRandom() * 4)];
										var num_pag=Math.ceil(getRandom() * (200-100)+100);
										biblioteca1.anadirLibro(new Libro(nom,num_pag,autor,seccion));
									}


setInterval(biblioteca1.ejecutarCiclo,1000);
biblioteca1.imprimirEstado();

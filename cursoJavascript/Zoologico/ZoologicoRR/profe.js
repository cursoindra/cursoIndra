/*

Realiza la modelización de un Zoológico

El zoológico deberá tener un nombre, una ubicación, un aforo máximo, un horario... ¡y todo lo que se te pueda ocurrir!

El zoológico deberá tener varias áreas":

- Reptiles
- Aves
- Mamíferos
- Peces

con distintos recintos, por ejemplo":

- Reptiles
	- Serpientes
	- Lagartos
- Aves
	- Aves pequeñas
	- Aves tropicales

	... etcétera

Cada recinto debe tener un nombre, una capacidad máxima de animales, aforo maximo de personas y un conjunto de animales.

Modeliza el zoológico lo más completo que puedas.

*/




	
	setInterval(function(){
		hora++;
		if(hora==24)	
		{
				hora=0;
		}
		document.getElementById("hora").innerHTML="HORA:"+hora;
		try
		{
			zoos.forEach(function(zoo)
			{
				zoo.areas.forEach(function(area)
				{
					area.recintos.forEach(function(recinto)
					{		
						recinto.animal.forEach(function(animal)
						{
							if(hora==0 || !(hora%animal.comida))
							{
								comer(recinto,zoo);
							}	
						});
					});						
				});		
			});
		}
		catch(e)
		{
			console.log("zoo incompleto");
		
		}
	},tiempo);


	
	function comer(recinto,zoo)
	{	
		
		recinto.dinero-=recinto.animal.length*precioComida;
		if(recinto.dinero<0)
		{
			console.log("recinto "+recinto.especie+" con dinero "+recinto.dinero);
		}
		zoo.dinero=dinero(zoo);

	}	

	function repartirDinero(dinero,zoo)
	{
		var importe=dinero/dameRecintos(zoo);
		zoo.areas.forEach(function(area)
		{
			area.recintos.forEach(function(recinto)
			{
				recinto.dinero+=importe;
			});
		});
	}

	function venderEntradas(zoo,personas)
	{
		try
		{
		repartirDinero(personas*precioEntrada,zoo);
		}
		catch(e)
		{
			console.log(e);
		}		


	}

function detectarCambio(variable,elemento){
	var variableAntigua=0;
	var variableNueva=variable;
	setInterval(function(variable){
		if(variableAntigua!=variableNueva)
		{
			elemento.innerHTML=variableNueva;
			variableAntigua=variableNueva;
		}
	},10)	
}


function dinero(zoo){
	var dinero=0;
	zoo.areas.forEach(function(area)
	{
		var dineroArea=0;
		area.recintos.forEach(function(recinto)
		{
			dinero+=recinto.dinero;
			dineroArea+=recinto.dinero;
		});
		area.dinero=dineroArea;
	});
	refrescarDineroAreas();



	return dinero;
}

function refrescarDineroAreas()
{

selectedZoo.areas.forEach(function(area,indice){
	$("area_"+indice+"_dinero").innerHTML=area.dinero;
	area.recintos.forEach(function(recinto,indice1){
		$("recinto_"+indice1+"_dinero").innerHTML=recinto.dinero;
	});
	});
	

}


function dameRecintos(zoo)
{
	try
	{
		var recintos=0;
		zoo.areas.forEach(function(area)
		{
			recintos+=area.recintos.length;
		});
		return recintos;
	}
	catch(e)
	{
		console.log(e);
	}
}


function curarAnimal(recinto,animales)
{
	recinto.dinero-=animales*precioEnfermedadAnimal;
}





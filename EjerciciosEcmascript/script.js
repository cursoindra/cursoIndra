import * as script from "./modulo-js.js";
console.log(script.prueba);

var a=5;
const pi=3.1416

function algo(){
	var a=7;
	if(a==7){
		let b = 8;
		console.log("A dentro: "+a);
		console.log("B dentro: "+b);
	}
}
// pi=17; // No podría poner esto ya que es una constante y daría error.
algo();
console.log("A fuera: "+a);
// console.log("B fuera: "+b); // Da error porque esta definida como "let", que tiene un ambito local.

var nombre="Javier";
var edad=40;
var obj1={
	nombre,
	edad
}
console.log(obj1.nombre);

var modalidad="mariposa";
var natacion={
	[modalidad+"100"]:"esto son 100 metros mariposa",
	[modalidad+"200"]:"esto son 200 metros mariposa"
}
console.log(natacion.mariposa200);

var nombre="Javier";
var apellido="Duran";
console.log("Mi nombre es "+nombre+" y mi apellido es "+apellido);
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);

/* function suma(a,b){  //Esto es lo mismo que lo de abajo
	return a+b;
} */

var suma=(a,b) =>{
	return a+b;
}
console.log(suma(4,5));

/* function cuadrado(numero){  //Esto es lo mismo que lo de abajo
	return numero*numero;
} */

var cuadrado=numero=> numero*numero;
console.log(cuadrado(5));

/* setTimeout(function(){  //Esto es lo mismo que lo de abajo
	console.log("Hola")
},2000) */

setTimeout(()=>{
	console.log("Hola")
},2000)

var objTest={
	retardo:function(){
		setTimeout(()=>{
			this.hacerAlgo();
		},1000)
	},
	hacerAlgo:function(){
		alert("Ya he hecho algo");
	}
}
objTest.retardo();

var multiplica=(a,b=2)=>a*b;
console.log(multiplica(5));
console.log(multiplica(5,3));

// Rest y spread

//


// PROMISES 

var otraCosa =(texto)=>{
	var haciendoAlgo=(resolve,reject)=>{
		console.log(texto);
		if (texto.endsWith("3"))
			reject("Se ha producido un error en "+texto);
			setTimeout(resolve,1000);
	}
	return new Promise(haciendoAlgo);
}

otraCosa("Hago algo 1").then(()=>{
otraCosa("Hago algo 2").then(()=>{
otraCosa("Hago algo 3").then(()=>{
otraCosa("Hago algo 4").then(()=>{
	console.log("He terminado");
}).catch((error)=>{console.log(error)})
}).catch((error)=>{console.log(error)})
}).catch((error)=>{console.log(error)})
}).catch((error)=>{console.log(error)});

// CLASES
class Persona{
	constructor(nombre, telefono, edad){
		this.nombre=nombre;
		this.edad=edad;
		this.telefono=telefono;
	}
	calcularPension(importe){
		var tiempo = 65-this.edad;
		return tiempo*importe;
	}
}
var persona = new Persona("Pepe","999999999",25);
console.log(persona);
console.log(persona.calcularPension(1000));


class Empleado extends Persona{
	constructor(nombre, telefono, edad, salario){
		super(nombre,telefono,edad);
		this.salario=salario;
	}
}
var empleado = new Empleado("Federico","651290423",34,3000);
console.log(`Tu nombre es: ${empleado.nombre} y ganas ${empleado.salario}`);


//COLECCIONES
var coches = new Set();
coches.add("Renault");
coches.add("Ford");
coches.add("Seat");
coches.add("Ford");

console.log(coches.has("Renault"));
console.log(coches.size);

coches.forEach(coche=>{console.log(coche)});

var misCoches=[...coches];
for(var i=0; i<coches.size;i++){
	console.log(misCoches[i]);
}

for(let coche of coches){
	console.log(coche);
}

var mapa = new Map();
mapa.set("Nombre","Javier");
mapa.set("Telefono","612345678");
mapa.set("Edad",20);
mapa.set("Objeto", new Empleado("Sdfdsf","",0,0));

console.log(mapa.get("Telefono"));
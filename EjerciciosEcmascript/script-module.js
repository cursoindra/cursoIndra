"use strict";

var _natacion;

var _moduloJs = require("./modulo-js.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = 5;
var pi = 3.1416;

function algo() {
	var a = 7;
	if (a == 7) {
		var b = 8;
		console.log("A dentro: " + a);
		console.log("B dentro: " + b);
	}
}
// pi=17; // No podría poner esto ya que es una constante y daría error.
algo();
console.log("A fuera: " + a);
// console.log("B fuera: "+b); // Da error porque esta definida como "let", que tiene un ambito local.

var nombre = "Javier";
var edad = 40;
obj1 = {
	nombre: nombre,
	edad: edad
};
console.log(obj1.nombre);

var modalidad = "mariposa";
var natacion = (_natacion = {}, _defineProperty(_natacion, modalidad + "100", "esto son 100 metros mariposa"), _defineProperty(_natacion, modalidad + "200", "esto son 200 metros mariposa"), _natacion);
console.log(natacion.mariposa200);

var nombre = "Javier";
var apellido = "Duran";
console.log("Mi nombre es " + nombre + " y mi apellido es " + apellido);
console.log("Mi nombre es " + nombre + " y mi apellido es " + apellido);

/* function suma(a,b){  //Esto es lo mismo que lo de abajo
	return a+b;
} */

var suma = function suma(a, b) {
	return a + b;
};
console.log(suma(4, 5));

/* function cuadrado(numero){  //Esto es lo mismo que lo de abajo
	return numero*numero;
} */

var cuadrado = function cuadrado(numero) {
	return numero * numero;
};
console.log(cuadrado(5));

/* setTimeout(function(){  //Esto es lo mismo que lo de abajo
	console.log("Hola")
},2000) */

setTimeout(function () {
	console.log("Hola");
}, 2000);

var objTest = {
	retardo: function retardo() {
		var _this = this;

		setTimeout(function () {
			_this.hacerAlgo();
		}, 1000);
	},
	hacerAlgo: function hacerAlgo() {
		alert("Ya he hecho algo");
	}
};
objTest.retardo();

var multiplica = function multiplica(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	return a * b;
};
console.log(multiplica(5));
console.log(multiplica(5, 3));

// Rest y spread

//

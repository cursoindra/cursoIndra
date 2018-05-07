function validar(esto){ 
	valido=false; 
	for(a=0;a<esto.elements.length;a++){ 
		if(esto[a].type=="checkbox" && esto[a].checked==true){ 
			valido=true;
			carga();
		break;
		} 
	} 
	if(!valido){
		alert("Debe seleccionar al menos un Rol.");
		return false; 
	}
}

class Registro{
	constructor(nombre, apellido1, apellido2, fechaNacimiento){
	this.user = [];
	this.roles = [];
	this.nombre = nombre;
	this.apellido1 = apellido1;
	this.apellido2 = apellido2;
	this.fechaNacimiento = fechaNacimiento;
	}
}
		var datoPrueba = localStorage.getItem("registros");
		alert(datoPrueba);
function carga(){
		var numeros = "12346789";
		var pass = "";
  		for (i=0; i<8; i++) {
  			pass += numeros.charAt(Math.floor(Math.random()*numeros.length))
  		};
		var roles = [];
		var nombre = document.getElementById('nombre').value;
		var apellido1 = document.getElementById('apellido1').value;
		var apellido2 = document.getElementById('apellido2').value;
		var email = document.getElementById('user').value;
		var user = {"user":email,
					"password":pass};
		var fechaNacimiento = document.getElementById('fechaNacimiento').value;

		if (document.formulario.rol_user.checked == true) {
    		var rol1 = document.formulario.rol_user.value;
    		roles.push(rol1);
    	};

		if (document.formulario.rol_admin.checked == true) {
    		var rol2 = document.formulario.rol_admin.value;
    		roles.push(rol2);
    	};

		if (document.formulario.rol_proyect1.checked == true) {
    		var rol3 = document.formulario.rol_proyect1.value;
    		roles.push(rol3);
    	};

		if (document.formulario.rol_proyect2.checked == true) {
    		var rol4 = document.formulario.rol_proyect2.value;
    		roles.push(rol4);
    	};

		if (document.formulario.rol_proyect3.checked == true) {
    		var rol5 = document.formulario.rol_proyect3.value;
    		roles.push(rol5);
    	};

		var registro = new Registro();
		registro.user = user;
		registro.roles = roles;
		registro.nombre = nombre;
		registro.apellido1 = apellido1;
		registro.apellido2 = apellido2;
		registro.fechaNacimiento = fechaNacimiento;

		var datos = JSON.parse(localStorage.getItem("registros"))
		if(datos==undefined) {
 			var datos = [];
 			datos.push(registro);
 			localStorage.setItem("registros", JSON.stringify(datos));
		}else{
  			datos.push(registro);
 			localStorage.setItem("registros", JSON.stringify(datos));
 		};

		var datoPrueba = localStorage.getItem("registros");
		alert(datoPrueba);
		// localStorage.clear();
};
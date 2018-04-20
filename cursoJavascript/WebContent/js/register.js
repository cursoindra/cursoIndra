$(document).ready(function () {
    $('#submit_register').click(function() {
      checked = $("input[type=checkbox]:checked").length;

      if(!checked) {
        alert("Debes seleccionar al menos un rol.");
        return false;
      }

    });
});

function reg() {
  window.captureEvents(Event.SUBMIT);
  window.onsubmit = carga;
}

function Registro(id, nombre, apellido1, apellido2, email, fechaNacimiento){
	this.id = id;
	this.roles = [];
	this.nombre = nombre;
	this.apellido1 = apellido1;
	this.apellido2 = apellido2;
	this.email = email;
	this.fechaNacimiento = fechaNacimiento;
}

function carga(){
		var id = document.getElementById('id').value;
		var roles = [];
		var nombre = document.getElementById('nombre').value;
		var apellido1 = document.getElementById('apellido1').value;
		var apellido2 = document.getElementById('apellido2').value;
		var email = document.getElementById('email').value;
		var fechaNacimiento = document.getElementById('fechaNacimiento').value;

		if (document.formulario.user.checked == true) {
    		var rol1 = document.formulario.user.value;
    		roles.push(rol1);
    	};

		if (document.formulario.admin.checked == true) {
    		var rol2 = document.formulario.admin.value;
    		roles.push(rol2);
    	};

		if (document.formulario.proyect1.checked == true) {
    		var rol3 = document.formulario.proyect1.value;
    		roles.push(rol3);
    	};

		if (document.formulario.proyect2.checked == true) {
    		var rol4 = document.formulario.proyect2.value;
    		roles.push(rol4);
    	};

		if (document.formulario.proyect3.checked == true) {
    		var rol5 = document.formulario.proyect3.value;
    		roles.push(rol5);
    	};

		var registro = new Registro();
		registro.id = id;
		registro.roles = roles;
		registro.nombre = nombre;
		registro.apellido1 = apellido1;
		registro.apellido2 = apellido2;
		registro.email = email;
		registro.fechaNacimiento = fechaNacimiento;

		var datoJson = JSON.stringify(registro);
		alert(datoJson); 
};
function comprobarClave(){ 
    clave1 = document.form1.new_password.value;
    clave2 = document.form1.new_password_repeat.value;
    if (clave1 != clave2){
        alert("Revisa tu nueva contraseña. Debes introducir la misma en los dos campos de nueva contraseña.");
        return false; 
    }else{
    	carga();
    }
}

class Datos_Recuperacion{
	constructor(recuperacion_pass, new_pass){
	this.recuperacion_pass = recuperacion_pass;
	this.new_pass = new_pass;
	}
}

function carga(){
	var recuperacion_pass = document.getElementById('old_password').value;
	var new_pass = document.getElementById('new_password').value;

	var datos = new Datos_Recuperacion();
	datos.recuperacion_pass = recuperacion_pass;
	datos.new_pass = new_pass;

	var datoJson = JSON.stringify(datos);
	alert(datoJson);
}

function mostrarInfo(){
	div = document.getElementById('info');
	div.style.display = 'block';
}

function closeInfo(){
	div =document.getElementById('info');
    div.style.display = 'none';
}
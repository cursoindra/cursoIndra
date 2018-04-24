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

class Datos_Cambio{
	constructor(old_pass, new_pass){
	this.old_pass = old_pass;
	this.new_pass = new_pass;
	}
}

function carga(){
	var old_pass = document.getElementById('old_password').value;
	var new_pass = document.getElementById('new_password').value;

	var datos = new Datos_Cambio();
	datos.old_pass = old_pass;
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

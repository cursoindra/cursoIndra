class Login{
	constructor(email, pass){
	this.user = email;
	this.pass = pass;
	}
}

function entrar(){
	var user = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;

	var login = new Login();
	login.user = user;
	login.pass = pass;

	var datoJson = JSON.stringify(login);
	alert(datoJson);
}

function recuperarPass(){
	var email = document.getElementById('email2').value;
	alert(email);
	
}
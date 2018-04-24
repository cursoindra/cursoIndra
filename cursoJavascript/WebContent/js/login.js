class Login{
	constructor(email, pass){
	this.user = email;
	this.pass = pass;
	}
}

function entrar(){
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;

	var login = new Login();
	login.user = email;
	login.pass = pass;

	var datoJson = JSON.stringify(login);
	alert(datoJson);
}

function recuperarPass(){
	var email = document.getElementById('email2').value;
	alert(email);
}
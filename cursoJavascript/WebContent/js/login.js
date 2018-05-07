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

	sessionStorage.setItem("login", JSON.stringify(login));
	var datos = sessionStorage.getItem("login");
	alert(datos);

	if (isNaN(pass)){
		window.location.href="noticias.html";
		return false;
	}else{
		window.location.href="newPassword.html";
		return false;
	};
}

function recuperarPass(){
	var email = document.getElementById('email2').value;
	sessionStorage.setItem("email", email);
	alert(email);
}
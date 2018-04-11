
var letra =[ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

var numero =  document.getElementById('numero')
numero.addEventListener("change",calcularLetra);
numero.addEventListener("keyup",esLetra);
	function calcularLetra(){

		valor= this.value
			if (valor.length == 8){
		resultado=valor%23
		console.log(resultado)
		document.getElementById('dni').innerHTML = valor +letra[resultado];

		}
	}

function esLetra(e){
//alert(String.fromCharCode(e.keyCode))
//	console.log(typeof(this.value.parseInt()))
console.log(this.value.length)
	if(isNaN(String.fromCharCode(e.keyCode))){
		if (e.keyCode == 46){
			e.preventDefault()
		}
		console.log("entra"+this.value)
		this.value=this.value.slice(0,this.value.length-1)
	}

	document.getElementById('dni').innerHTML =this.value
	if (this.value.length==8){
	this.blur();}
}

var miArray = new Array();
document.getElementById("agregar").addEventListener("click",agregar);
document.getElementById("ordenar").addEventListener("click",orden);
document.getElementById("primos").addEventListener("click",ordenarPrimos);


	var numeros = new Array()
	var numerosPrimos = new Array()

function agregar(){
	numero = document.getElementById('numero').value;
	miArray.push(numero)
	colocar();
					
			
			
			}
				
function colocar(){
	if (miArray.length>1){
				document.getElementById("res").innerHTML +=" - "+ numero;
			
			}
			else {document.getElementById("res").innerHTML += numero;}
}

function ordenar(){
		//console.log (miArray)
	miArray.sort(function(a,b){return a-b})
//	console.log (miArray)
	document.getElementById("res").innerHTML = ""

	for (var i = 0; i < miArray.length; i++) {
		if(i<miArray.length-1){
		document.getElementById("res").innerHTML += miArray[i] + " - ";}
	else{
		document.getElementById("res").innerHTML += miArray[i]}
	}
}

function orden(){
	var flag = true;
	while (flag == true){
		for (var i = 0; i< miArray.length; i++) {
			if(parseInt(miArray[i])>parseInt(miArray[i+1])){
			//	alert("entrA")
				miArray.splice(i, 2, miArray[i+1], miArray[i])
			}
		
			
		}
		flag = false;
	}
//	console.log(miArray)
	document.getElementById("res").innerHTML= ""
	colocar();
}

function ordenarPrimos(){
	flag = true;
	numerosPrimos.push(1)
	for (var i = 2; i <= 100; i++) {
		numeros.push(i)
			
			for (var j= i-1; j>1; j--){
				if (i%j==0){
					j=1;
					flag=false;
				}
				else {flag = true}
			}	
		if (flag==true){
			numerosPrimos.push(i)
		}
	}
document.getElementById("res").innerHTML=numerosPrimos
}
	
		

	
	console.log(numerosPrimos)

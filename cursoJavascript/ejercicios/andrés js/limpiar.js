document.getElementById('limpia').addEventListener('click',limpiar)
document.getElementById('embellecer').addEventListener('click',embellecer1)
document.getElementById('embellecer2').addEventListener('click',embellecer2)
var frase = document.getElementById('frase')
var grupos = document.getElementById('varios')
var fraseBella = document.getElementById('bonito1')
var fraseBella2 = document.getElementById('bonito2')
var miArray = new Array()

	function limpiar(){
		console.log(frase.value)
		miArray = frase.value.split("")

		for (var i = 0 ; i<miArray.length ;i++){
			console.log("posicion: "+i +" "+(miArray[i]))
			if (miArray[i].includes('*')){
					miArray.splice(i,1)
					console.log(miArray[i] + "la quita")
					i--
			}

		}
		console.log(miArray)
		document.getElementById('res').innerHTML= miArray
	}

	function agrupar(){
		miArray = grupos.value.split("")
		var misNumeros = new Array()
		console.log(miArray)
		var pattern = new RegExp("[1-9]")
		for (var i = 0 ; i<miArray.length ;i++){
			if (pattern.test(miArray[i])){
					var aux=miArray[i];
					miArray.splice(i,1)
					misNumeros.push(aux)
					console.log(miArray[i] + "la quitaaa")
					i--
			}
		}
		console.log(miArray)
		document.getElementById('res2').innerHTML= misNumeros+miArray
	}
	


	function embellecer1(){
		miArray = fraseBella.value.split("")
		var patt =("QWRTYPSDFGHJKLZXCVBNMÑ")
		var p = "aeiou"
		for (var i = 0 ; i<miArray.length ;i++){
			for (var j=0; j<patt.length; j++){
				if (patt.charAt(j)==miArray[i]){			
					miArray[i]=miArray[i].toLowerCase()
					}
				}
			for (var j=0; j<p.length; j++){
				if (p.charAt(j)==miArray[i]){					
					miArray[i]=miArray[i].toUpperCase()
					}
				}	
		document.getElementById('res2').innerHTML= miArray
		}		
	}


		function embellecer2(){
		miArray = fraseBella2.value.split("")
		var misNumeros = new Array();
		var pattern = new RegExp("[1-9]")

		
		for (var i = 0 ; i<miArray.length ;i++){
			if (pattern.test(miArray[i])){
				console.log("Entra, numero: "+miArray[i])
				//misNumeros.push(miArray[i])
				if (!isNaN(miArray[i+1])){
					var resus= parseInt(miArray[i])+parseInt(miArray[i+1]);
					console.log("suma "+miArray[i]+"+"+miArray[i+1]+":"+ resus)
					//console.log(typeof(resus.toString()))
					miArray.splice(i,2,resus.toString())
					console.log("dato:"+miArray[i])

					if(miArray[i].length>1){
						console.log("Entra en la de dos digitos "+miArray[i].length)
						misNumeros = miArray[i].split("");
						var total = parseInt(misNumeros[0])+parseInt(misNumeros[1])
						miArray[i]= total.toString()
						--i 	
					}
				}
			}
			console.log("POSICION ARRAY: "+i)
		}
		console.log(miArray)
	}
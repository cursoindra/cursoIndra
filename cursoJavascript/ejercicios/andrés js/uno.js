	
			var a = 100;
			var b = "100";
			console.log(a==b);
			console.log(a===b);

			//Si un elemento es String las siguientes operaciones se concatenan
			console.log(3+7+5+6+9+6);
			console.log(3+7+"5"+6+9+6);			

			//Ejemplo de declaración de array
			function ejemplo1()
			{
				var paises = ["España", "Francia", "Portugal"];
				console.log(paises);
				console.log(paises[1])
				
				//Funciones de las arrays
				paises.push("Alemania")
				paises.push("Holanda")
				//ordenar
				paises.sort();
				console.log(paises);

				for (var i = 0; i <paises.length ; i++) {
					console.log(paises[i])
				}

				for (pais in paises){

					console.log("País con in: "+paises[pais])
				}

				paises.forEach(function(pais){

					console.log("For each: "+pais)
				})

//				window.setTimeout(mostrar,5000);
				
				var a = window.setInterval(mostrar,1000);
				console.log(a)
				var i = 0;
				function mostrar(){

					i++
					document.getElementById("h1").innerHTML = i;
					if (i == 5){
						clearInterval(a);
					}
				}
			}

			ejemplo1();
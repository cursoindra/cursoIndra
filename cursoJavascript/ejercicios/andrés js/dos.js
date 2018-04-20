var elemento = {
	"propiedad1" : "valor1",
	"propiedad2" : "valor2"
}

alert(elemento.propiedad1)
alert(elemento)
var texto = JSON.stringify(elemento)
alert(texto)
alert(JSON.parse(texto).propiedad2)
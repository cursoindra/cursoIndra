var fechas = {
    "fechaInicio": "2018-04-27 9:00",
    "fechaFin" : "2018-04-27 12:00",
    "descripcion" : "Esta es la descripcion de un evento cualquiera 1",
    "tipoEvento_id": {
		"id": "2",
		"descripcion" : "Evento 1"
	}
 }
 var fechas1 = {
    "fechaInicio": "2018-04-27 12:00",
    "fechaFin" : "2018-04-27 15:00",
    "descripcion" : "Esta es la descripcion de un evento cualquiera 2",
    "tipoEvento_id": {
		"id": "2",
		"descripcion" : "Evento 2"
	}
 }
 var fechas2 = {
    "fechaInicio": "2018-04-30 15:00",
    "fechaFin" : "2018-04-30 18:00",
    "descripcion" : "Esta es la descripcion de un evento cualquiera 3",
    "tipoEvento_id": {
		"id": "2",
		"descripcion" : "Evento 3"
	}
 }
var misFechas= [fechas,fechas1,fechas2];
var flag=true; 
var contenidoPagina= document.querySelector('[href="horaEvento.html"]').import;
var template = contenidoPagina.querySelector("#cabecera").content;
var tabla = template.querySelector("#tabla");
var clonTabla = tabla.cloneNode(true);
clonTabla.removeChild(clonTabla.querySelector("template"))
var templateOtraPagina = template.querySelector("#cuerpo").content;
var cloneOtraPagina= templateOtraPagina.cloneNode(true);
var tBody = cloneOtraPagina.querySelector("tbody")
var fila = cloneOtraPagina.querySelector("tr")
cloneOtraPagina.querySelector("tbody").removeChild(cloneOtraPagina.querySelector("tbody").querySelector("tr"))
misFechas.forEach(function(fecha){
    clonFila = fila.cloneNode(true)
    clonFila.querySelector("td:nth-child(1)").innerHTML=fecha.fechaInicio.split(" ")[1];
    clonFila.querySelector("td:nth-child(2)").innerHTML=fecha.fechaFin.split(" ")[1];
    clonFila.querySelector("td:nth-child(3)").innerHTML=fecha.tipoEvento_id.descripcion;
    clonFila.addEventListener("click",mostrarEvento);
    clonFila.addEventListener("mouseover",encima);
    clonFila.addEventListener("mouseout",fuera);
    tBody.appendChild(clonFila)
    clonTabla.appendChild(tBody)
 })
document.getElementById("evento").appendChild(clonTabla)

function encima(){
    this.style.cursor="pointer";
    this.style.opacity= 0.5;
    this.style.filter= "alpha(opacity=50)";
}

function fuera(){this.style.opacity= 1;
    this.style.filter= "alpha(opacity=100)";}

function mostrarEvento(){
    this.parentNode.querySelectorAll("tr").forEach(function (fila){
        fila.style.color="black";
        fila.style.fontWeight="normal"
       })
    this.style.color="#00b0ca";
    this.style.fontWeight="bold";
    var template = contenidoPagina.querySelector("#descripcion").content;
    var clonTemplate =template.cloneNode(true);
    var card = clonTemplate.querySelector(".card");
    card.querySelector("h3").innerHTML=this.querySelector("td:nth-child(3)").innerHTML;
    card.querySelector("p").innerHTML= misFechas[this.rowIndex-1].descripcion;
    if (flag){ document.querySelector("#descripcion").appendChild(card)
        flag=false;}
    document.querySelector("h3").innerHTML=misFechas[this.rowIndex-1].tipoEvento_id.descripcion;
    document.querySelector("p").innerHTML=misFechas[this.rowIndex-1].descripcion;
} 



var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var dia_text = ["Dom", "Lun", "Mar", "Mie", "Juv", "Vie", "Sab"];

estructurar();

var date = new Date();
var day = date.getDate();
var month = date.toLocaleString("es",{month:"long"});
month = month.replace(/\b\w/g, l => l.toUpperCase());
var mesActual = mes_text.indexOf(month);

function estructurar() {
  for (m = 0; m <= 11; m++) {
    //Mes
    let mes = document.getElementById("calend");
    //Tabla
    let tabla_mes = document.createElement("TABLE");
    tabla_mes.className = "tabla_mes";
    mes.appendChild(tabla_mes);
    //Título
    let titulo = document.createElement("CAPTION");
    let anterior = document.createElement("I");
    anterior.className = "fa fa-arrow-circle-left anterior";
    let siguiente = document.createElement("I");
    siguiente.className = "fa fa-arrow-circle-right siguiente";
    titulo.className = "titulo";
    let span = document.createElement("SPAN");
    span.innerText = mes_text[m];
    titulo.appendChild(anterior);
    titulo.appendChild(span);
    titulo.appendChild(siguiente);
    tabla_mes.appendChild(titulo);
    anterior.addEventListener("click",function(){
      if(mesActual > 0) mesActual--;
      numerar();
    })
    siguiente.addEventListener("click",function(){
      if(mesActual <11) mesActual++;
      numerar();
    })
    //Cabecera
    let cabecera = document.createElement("THEAD");
    tabla_mes.appendChild(cabecera);
    let fila = document.createElement("TR");
    cabecera.appendChild(fila);
    for (d = 0; d < 7; d++) {
      let dia = document.createElement("TH");
      dia.innerText = dia_text[d];
      fila.appendChild(dia);
    }
    //Cuerpo
    let cuerpo = document.createElement("TBODY");
    tabla_mes.appendChild(cuerpo);
    for (f = 0; f < 6; f++) {
      let fila = document.createElement("TR");
      cuerpo.appendChild(fila);
      for (d = 0; d < 7; d++) {
        let dia = document.createElement("TD");
        dia.innerText = "";
        fila.appendChild(dia);
        dia.addEventListener("click",function(){
          numerar(dia.innerHTML);
        })
      }     
    }    
  }
}

numerar();

function numerar(d=day) {
  for (i = 1; i < 366; i++) {
    let fecha = fechaPorDia(2017, i);
    let mes = fecha.getMonth();
    let select_tabla = document.getElementsByClassName('tabla_mes')[mes];
    if(mes != mesActual) {document.getElementsByClassName('tabla_mes')[mes].setAttribute("hidden","true");}
    else {document.getElementsByClassName('tabla_mes')[mes].removeAttribute("hidden")}
    let dia = fecha.getDate()
    let dia_semana = fecha.getDay();
    if (dia == 1) {var sem = 0;}
    select_tabla.children[2].children[sem].children[dia_semana].innerText = dia;
    if(dia == d) {select_tabla.children[2].children[sem].children[dia_semana].className = "bg-light"}
    else {select_tabla.children[2].children[sem].children[dia_semana].classList.remove("bg-light")}
    if (dia_semana == 6) { sem = sem + 1; }
  }
}

function fechaPorDia(ano, dia) {
  var date = new Date(ano, 0);
  return new Date(date.setDate(dia));
}
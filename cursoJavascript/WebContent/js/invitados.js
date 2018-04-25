var agregar = document.getElementById("agregarInvitado");
var quitar = document.getElementById("quitarInvitado");

let posiblesInvitados = document.getElementById("posiblesInvitados");
let invitadosAgregados = document.getElementById("invitadosAgregados");

agregar.addEventListener("click",function(){
    inicioProceso(invitadosAgregados,posiblesInvitados);
})

quitar.addEventListener("click",function(){
    inicioProceso(posiblesInvitados,invitadosAgregados);
})

function inicioProceso(listaAgregar,listaQuitar){
    let seleccionados = new Array();
    for(let i=0;i<listaQuitar.options.length;i++){
        if(listaQuitar.options[i].selected){
            seleccionados.push(listaQuitar.options[i].innerHTML);
            listaQuitar.removeChild(listaQuitar.options[i]);
            i--;
        }
    }
    seleccionados = agregarArray(listaAgregar,seleccionados);
    seleccionados.sort();
    agregarLista(listaAgregar,seleccionados);
}

function agregarArray(lista,seleccionados){
    for(let i=0;i<lista.options.length;i++){
        seleccionados.push(lista.options[i].innerHTML);
        lista.removeChild(lista.options[i]);
        i--;
    }
    return seleccionados;
}

function agregarLista(lista,seleccionados){
    for(let i =0;i<seleccionados.length;i++){
        let option = document.createElement("OPTION");
        option.innerText = seleccionados[i];
        lista.appendChild(option);
    }
}
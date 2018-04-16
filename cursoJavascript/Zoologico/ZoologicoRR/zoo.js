var precioArea=1000;
var precioRecinto=500;
var precioAnimal=50;
var precioComida=20;
var precioEntrada=10;
var tiempo=5000;
var hora=0;

var precioEnfermedadAnimal=100;
var zoos = new Array();
var selectedZoo = null;
var selectedArea = null;
var selectedRecinto = null;

function $(id) {
    return document.getElementById(id);
}

$("submit_zoo").addEventListener("click", function () {
    var nombre = $("name_zoo").value,
        apertura = $("open").value,
        cierre = $("close").value,
        dinero = $("money").value,
        calle = $("address").value,
        numero = $("n_address").value,
        ciudad = $("city").value;
<<<<<<< HEAD
        $("dinero").innerHTML=dinero;
=======
       
>>>>>>> 84570b53a45aa65383606e788bdb8d06160b9c5e
    var ubi = new Ubicacion(calle, numero, ciudad);
    var zoo = new Zoo(nombre, ubi, apertura, cierre, dinero);
    zoos.push(zoo);
    showZoos();
});
    
setInterval(function(){
    if(selectedZoo!=null)
     $("zoo_dinero").innerHTML = selectedZoo.dinero;
},10);

$("submit_area").addEventListener("click", function () {
    if(hayDineroArea()){
        var nombre = $("name_area").value;
        var area = new Area(nombre);
        selectedArea = area;
        selectedZoo.areas.push(area);
        selectedZoo.dinero-=precioArea;
        showAreas();
    }else{
        alert("No hay suficiente money para crear área");
    }    
});

$("submit_recinto").addEventListener("click", function () {    
    if (hayDineroRecinto()) {
        var aforo = $("aforo_recinto").value,        
        especie = $("especie_recinto").value,
        capacidad = $("capacidad_recinto").value;              

        var recinto = new Recinto(aforo, especie, capacidad);
        selectedArea.recintos.push(recinto);   
        selectedZoo.dinero-=precioRecinto; 
        selectedRecinto=recinto;
        showRecintos(selectedArea.recintos);
    }else{
        alert("No hay dinero para resinto");
    }    
});

$("submit_animal").addEventListener("click", function () {
    var especie = $("animal_especie").value,        
        comida = $("animal_comida").value;
    if(hayDineroAnimal(comida)){     
        var animal = new Animal(especie,comida);
        selectedRecinto.animal.push(animal); 
        selectedRecinto.cantidad+=1;
        selectedZoo.dinero-=precioAnimal;   
        showRecintos(selectedArea.recintos);
        if(!selectedZoo.repartido){            
            repartirDinero(selectedZoo.dinero, selectedZoo);
            selectedZoo.repartido = true;
        }
    }else{
        alert("No hay dinero para animalada");
    }
});

$("select_zoos").addEventListener("change", function () {
	selectedZoo = $("select_zoos").value;
    selectedArea = null;
    selectedRecinto = null;
	for(i = 0; i < zoos.length; i++){	
		if(selectedZoo == zoos[i].nombre){
			selectedZoo = zoos[i];					
			break;
		}
	}
	if (selectedZoo != null){
		$("zoo_name").innerHTML = selectedZoo.nombre;
		$("zoo_ubicacion").innerHTML = selectedZoo.ubicacion.calle +" "+ selectedZoo.ubicacion.numero +" "+ selectedZoo.ubicacion.ciudad;
		$("zoo_horario").innerHTML = "De "+selectedZoo.apertura +" a "+ selectedZoo.cierre;
		$("zoo_dinero").innerHTML = selectedZoo.dinero;
	}
	showAreas( );
});
function Ubicacion (calle, numero, ciudad) {
<<<<<<< HEAD
    this.calle = calle;
    this.numero = numero;
    this.ciudad = ciudad;
}

function Zoo (nombre, ubicacion, apertura, cierre, dinero) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.aforo = 0;
    this.precioEntrada = 10;
    this.apertura = apertura;
    this.cierre = cierre;
    this.dinero = dinero;
    this.areas = [];
    this.repartido = false;
=======
    
        this.calle= calle;
        this.numero= numero;
        this.ciudad= ciudad;
    
}



function Zoo (nombre, ubicacion, apertura, cierre, dinero) {
    
        this.nombre= nombre;
        this.ubicacion= ubicacion;
        this.aforo= 0;
        this.precioEntrada= 10;
        this.apertura= apertura;
        this.cierre= cierre;
        this.dinero= dinero;
        this.areas= new Array();
        this.repartido= false;
    
>>>>>>> 84570b53a45aa65383606e788bdb8d06160b9c5e
}

function showZoos () {
    var select = $("select_zoos");
    var options = [...select.children];
    options.forEach((el) => {
        el.remove();
    });
    zoos.forEach( function(zoo, index) {
        var option = document.createElement("option");
        select.appendChild(option).text = zoo.nombre;
    });
    event = new Event("change");
    select.dispatchEvent(event);
}

function Area (nombre) {
<<<<<<< HEAD
        this.nombre = nombre;
        this.recintos = [];
        this.aforo = 0;
        this.dinero = 0;       
=======
    
        this.nombre= nombre;
        this.recintos= [];
        this.aforo= 0;
        this.dinero=0 ;       
   
>>>>>>> 84570b53a45aa65383606e788bdb8d06160b9c5e
}

function showAreas () {
	cleanNastyTables(0);
	var areas = selectedZoo.areas;
	for (var i = 0 ; i < areas.length; i++) {
		var row = $("area_tbody").insertRow();		
		row.classList.add("area_"+i);		
		row.addEventListener("click", function (e) {			
            cleanBg($("area_tbody").children);  
            this.classList.add("table-success");   
			areaSeleccionada(this);
		});
		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell();
		var cell2 = row.insertCell();
		var cell3=row.insertCell();
		cell3.setAttribute("id","area_"+i+"_dinero");
		// Add some text to the new cells:
		cell1.innerHTML = areas[i].nombre;
		cell2.innerHTML = areas[i].aforo;
		cell3.innerHTML = areas[i].dinero;		
	}	
}

function Recinto (aforo, especie, capacidad) {
<<<<<<< HEAD
    this.especie = especie;
    this.aforo = aforo;
    this.animal = [];
    this.cantidad = 0;
    this.capacidad = capacidad;
    this.dinero = 0;
=======
    
        this.especie= especie;
        this.aforo= aforo;
        this.animal= new Array();
        this.cantidad= 0;
        this.capacidad= capacidad;
        this.dinero=0;
    
>>>>>>> 84570b53a45aa65383606e788bdb8d06160b9c5e
}

function showRecintos(rec){
	cleanNastyTables(1);
	for (var i = 0 ; i < rec.length; i++) {
		var row = $("recinto_tbody").insertRow();		
		row.classList.add("recinto_"+i);		
		row.addEventListener("click", function (e) {
            cleanBg($("recinto_tbody").children);			
			this.classList.add("table-success");
			recintoSeleccionado(this);
		});
		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell();
		var cell2 = row.insertCell();
		var cell3 = row.insertCell();
		cell3.setAttribute("id","recinto_"+i+"_dinero");
		var cell5 = row.insertCell();
		var cell6 = row.insertCell();
		// Add some text to the new cells:
		cell1.innerHTML = rec[i].aforo;
		cell2.innerHTML = rec[i].capacidad;
		cell3.innerHTML = rec[i].dinero;
		cell5.innerHTML = rec[i].especie;
		cell6.innerHTML = rec[i].cantidad;		
	}
}

function areaSeleccionada (ar) {
	var index = ar.classList[0].split("_")[1];
	selectedArea = selectedZoo.areas[index];
	showRecintos(selectedArea.recintos);
}

function recintoSeleccionado (rec) {
    var index = rec.classList[0].split("_")[1];
    selectedRecinto = selectedArea.recintos[index];
}

function Animal (especie, comida) {
<<<<<<< HEAD
    this.especie = especie;
    this.comida = comida;
=======
    
        this.especie= especie;
        this.comida= comida;
    
}

function showAnimal () {

>>>>>>> 84570b53a45aa65383606e788bdb8d06160b9c5e
}

function cleanBg(childs){
    for(i = 0 ; i < childs.length ; i++)
        childs[i].classList.remove("table-success");
}

function cleanNastyTables(c){		
	if(c == 0){
		var table_a = $("area_tbody");
		var tbody_a = [...table_a.children];		
		tbody_a.forEach((el) => {
        el.remove();
    	});
	}	
	var table_r = $("recinto_tbody");    
    var tbody_r = [...table_r.children];    
    tbody_r.forEach((el) => {
        el.remove();
    });
}
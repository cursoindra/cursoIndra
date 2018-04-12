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
        $("dinero").innerHTML=dinero;
    var ubi = createUbicacion(calle, numero, ciudad);
    var zoo = createZoo(nombre, ubi, apertura, cierre, dinero);
    zoos.push(zoo);
    showZoos();
});

setInterval(function(){
    if(selectedZoo!=null)
     $("dinero").innerHTML=selectedZoo.dinero;
},10)

$("submit_area").addEventListener("click", function () {
    var nombre = $("name_area").value;

    var area = createArea(nombre);
    selectedArea = area;
    selectedZoo.areas.push(area);
    selectedZoo.dinero-=precioArea;
    if(!hayDineroArea())
        alert("no hay");
    showAreas();
});

$("submit_recinto").addEventListener("click", function () {
    var aforo = $("aforo_recinto").value,        
        
        capacidad = $("capacidad_recinto").value;
              

    var recinto = createRecinto(aforo, capacidad);
    selectedArea.recintos.push(recinto);   
    selectedZoo.dinero-=precioRecinto; 
    selectedRecinto=recinto;
    showRecintos(selectedArea.recintos);
});

$("submit_animal").addEventListener("click", function () {
    var especie = $("animal_especie").value,        
        comida = $("animal_comida").value;
            

    var animal = createAnimal(especie,comida);
    selectedRecinto.animal.push(animal); 
    selectedZoo.dinero-=precioAnimal;   
    showRecintos(selectedArea.recintos);
});

$("select_zoos").addEventListener("change", function () {
	selectedZoo = $("select_zoos").value;

	for(i = 0; i < zoos.length; i++){	
		if(selectedZoo == zoos[i].nombre){
			selectedZoo = zoos[i];					
			break;
		}
	}

	if (selectedZoo != null)
	{
		$("zoo_name").innerHTML = selectedZoo.nombre;
		$("zoo_ubicacion").innerHTML = selectedZoo.ubicacion.calle +" "+ selectedZoo.ubicacion.numero +" "+ selectedZoo.ubicacion.ciudad;
		$("zoo_horario").innerHTML = "De "+selectedZoo.apertura +" a "+ selectedZoo.cierre;
	}
	showAreas();

});
function createUbicacion (calle, numero, ciudad) {
    var ubicacion = {
        "calle" : calle,
        "numero" : numero,
        "ciudad" : ciudad
    };
    return ubicacion;
}



function createZoo (nombre, ubicacion, apertura, cierre, dinero) {
    var zoo = {
        "nombre" : nombre,
        "ubicacion" : ubicacion,
        "aforo" : 0,
        "precioEntrada" : 10,
        "apertura" : apertura,
        "cierre" : cierre,
        "dinero" : dinero,
        "areas" : []
    };
    return zoo;
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

function createArea (nombre) {
    var area = {
        "nombre": nombre,
        "recintos" : [],
        "aforo" : 0
        
    };
    return area;
}

function showAreas () {
	cleanNastyTables(0);
	var areas = selectedZoo.areas;


	for (var i = 0 ; i < areas.length; i++) {
		var row = $("area_tbody").insertRow();		
		row.classList.add("area_"+i);		
		row.addEventListener("click", function (e) {			
			
			areaSeleccionada(this);

		});
		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell();
		var cell2 = row.insertCell();
		var cell3 = row.insertCell();
		

		// Add some text to the new cells:
		cell1.innerHTML = areas[i].nombre;
		cell2.innerHTML = areas[i].aforo;
		cell3.innerHTML = areas[i].dinero;
		
		
	}
	
}

function createRecinto (aforo, capacidad) {
    var recinto = {
        "aforo" : aforo,
        "animal" : [],
        
        "capacidad" : capacidad
    };
    return recinto;
}
function showRecintos(rec){
	cleanNastyTables(1);
	for (var i = 0 ; i < rec.length; i++) {
		var row = $("recinto_tbody").insertRow();		
		row.classList.add("recinto_"+i);		
		row.addEventListener("click", function (e) {			
			
			recintoSeleccionado(this);

		});
		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell();
		var cell2 = row.insertCell();
		var cell3 = row.insertCell();
		var cell5 = row.insertCell();
		var cell6 = row.insertCell();

		// Add some text to the new cells:
		cell1.innerHTML = rec[i].aforo;
		cell2.innerHTML = rec[i].capacidad;
		cell3.innerHTML = rec[i].dinero;
		cell5.innerHTML = rec[i].animal;
		cell6.innerHTML = rec[i].n_animal;
		
	}
}

function areaSeleccionada (rec) {
	var index = rec.classList[0].split("_")[1];

	selectedArea = selectedZoo.areas[index];

	showRecintos(selectedArea.recintos);
}

function createAnimal (especie, comida) {
    var animal = {
        "especie" : especie,
        "comida" : comida
        
    };
    return animal;
}

function showAnimal () {

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
if (localStorage.getItem("publicaciones") == null)
    var publicaciones = new Array();
else
    var publicaciones = JSON.parse(localStorage.getItem("publicaciones"));


var loadGroups = () => {
    var groups = new Array({"descripcion": "contractors", "roles" : "muchos", "id":6}, { "descripcion": "velociraptors", "roles": "muchos", "id": 7 }, { "descripcion": "predators", "roles": "muchos", "id": 7 }, { "descripcion": "tractors", "roles": "muchos", "id": 8 });
    var cols = groups.length;				
    var templateT1 = document.querySelector("#t1").content;            	
    var div = templateT1.querySelector(".form-check");
    var input = templateT1.querySelector("input");
    var label = templateT1.querySelector("label");
    div.remove();
    
    groups.forEach((group, index) => {
        var newDiv = div.cloneNode(false);	
        var newInput = input.cloneNode(false);
        var newLabel = label.cloneNode(true);
        newLabel.textContent = group.descripcion+"-"+index;	
        if(cols > 5)
            newDiv.classList.add("col-6", "col-md-2");
        else
            newDiv.classList.add("col-12");

        newInput.setAttribute("value", group.descripcion);				
        newDiv.appendChild(newInput);
        newDiv.appendChild(newLabel);				
        templateT1.appendChild(newDiv);                									
    
    });
    var clonT1 = templateT1.cloneNode(true);
    document.querySelector("#grupos").appendChild(clonT1);
}

class Grupo {
    constructor(descripcion, roles, id = 0) {
        this.id = id;
        this.descripcion = descripcion;
        this.roles = roles;
    }
}

class Publicacion{
        constructor(titulo, contenido, grupos, propietario){
                this.titulo = titulo;            
                this.contenido = contenido;
                this.grupos = grupos;
                this.propietario = propietario;
                this.url = document.URL+titulo;		
                this.comentarios = [];
                this.likes = [];
                											
        }					
}

document.querySelector("#form_noticia").addEventListener("submit", function(event){		
                
    var grupos = new Array();
    var breakEmpty = {
            message : "Tiene que rellenar todos los campos"
    }
    this.querySelectorAll("input, textarea, select").forEach(element => {								
        try{									
            if(element.value == "") throw breakEmpty																														
            if(element.type == "text")	
                titulo = element.value;								
            if(element.type == "textarea")
                contenido = element.value;									
            if(element.type == "checkbox" && element.checked)
                grupos.push(element.value);									
        }catch(e){
                alert(e.message);
        }
            
    });					 
    
    obj = new Publicacion(titulo, contenido, grupos, "Pepe");
    publicaciones.push(obj);
    localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
    console.log(localStorage.getItem("publicaciones"));
    alert(JSON.stringify(obj)); 							
    event.preventDefault();
    location.reload();
    
});

loadGroups();
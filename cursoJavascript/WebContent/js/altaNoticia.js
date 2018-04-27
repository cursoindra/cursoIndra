import {roles} from './roles.js'

if (localStorage.getItem("publicaciones") == null)
    var publicaciones = new Array();
else
    var publicaciones = JSON.parse(localStorage.getItem("publicaciones"));

class Publicacion {
    constructor(titulo, contenido, grupos, propietario, url = document.URL) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.grupos = grupos;
        this.propietario = propietario;
        this.url = url;
        this.comentarios = [];
        this.likes = [];

    }
}

var loadRoles = (roles) => {
    var roles = roles;
    var cols = roles.length;				
    var templateT1 = document.querySelector("#t1").content;            	
    var div = templateT1.querySelector(".form-check");
    var input = templateT1.querySelector("input");
    var label = templateT1.querySelector("label");
    div.remove();
    
    roles.forEach((role, index) => {
        var newDiv = div.cloneNode(false);	
        var newInput = input.cloneNode(false);
        var newLabel = label.cloneNode(true);
        newLabel.textContent = index+". - "+role.rol;	
        if(cols > 5)
            newDiv.classList.add("col-6", "col-md-2");
        else
            newDiv.classList.add("col-12");

        newInput.setAttribute("value", role.id);				        
        newDiv.appendChild(newInput);
        newDiv.appendChild(newLabel);        				
        templateT1.appendChild(newDiv);                									
    
    });
    var clonT1 = templateT1.cloneNode(true);
    document.querySelector("#grupos").appendChild(clonT1);
}

document.querySelector("#form_noticia").addEventListener("submit", function(event){		
    var obj;        
    var roles = new Array();
    var titulo;
    var contenido;
    var url;
    var breakEmpty = {
            message : "Tiene que rellenar todos los campos"
    }
    this.querySelectorAll("input, textarea, select").forEach(element => {								
        try{									
            if(element.value == "" && element.type != "url") throw breakEmpty																														
            if(element.type == "text")	
                titulo = element.value;								
            if(element.type == "textarea")
                contenido = element.value;									
            if(element.type == "checkbox" && element.checked)
                roles.push(element.value);
            if (element.type == "url" && element.value != "")
                url = element.value;									
        }catch(e){
                alert(e.message);
        }
            
    });					 
    
    obj = new Publicacion(titulo, contenido, roles, "Pepe", url);
    publicaciones.push(obj);
    localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
    console.log(localStorage.getItem("publicaciones"));
    alert(JSON.stringify(obj)); 							
    event.preventDefault();
    location.replace("./noticiasTemplate.html");

});

loadRoles(roles);
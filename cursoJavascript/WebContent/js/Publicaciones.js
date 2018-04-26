var templateNews = document.getElementById("news-template").content;
var templateComments = document.getElementById("comments-template").content;
var templateNewComment = document.getElementById("new-comment-template").content;

if (localStorage.getItem("publicaciones") == null)
    var publicaciones = new Array();
else
    var publicaciones = JSON.parse(localStorage.getItem("publicaciones"));

if (localStorage.getItem("comentarios") == null)
    var comentarios = new Array();
else
    var comentarios = JSON.parse(localStorage.getItem("comentarios"));

//var usuarios = JSON.parse(localStorage.getItem("usuarios"));



//var publicacion = { "titulo": "", "contenido": "", "url": "", "grupos": ["descripcion"], "propietario": "ID_DATOS_PERS", "likes": ["ID_DATOS_PERS"], "comentarios": ["ID_COMEN"] };

//var comentario = { "id": num, "texto": "", "propietario": "ID_DATOS_PERS", "likes": ["ID_DATOS_PERS"] };

class Comentario {
	constructor (id, texto, propietario, likes) {
		this.id = id;
		this.texto = texto;
		this.propietario = propietario;
		this.likes = likes;
	}
}


publicaciones.forEach((publicacion, index) => {
	
	var noticia = templateNews.cloneNode(true);
	noticia.getElementById("news-title").textContent = publicacion.titulo;
	noticia.getElementById("news-content").textContent = publicacion.contenido;
	noticia.getElementById("like-img").setAttribute("src", "images/like.png");
	noticia.querySelector(".like-button").setAttribute("href", index);
	noticia.getElementById("collapse-button").setAttribute("data-target", "#collapse"+index);
	noticia.getElementById("collapse").setAttribute("id", "collapse"+index);
	noticia.getElementById("num-comments").textContent = publicacion.comentarios.length;
	publicacion.comentarios.forEach(comentario => {
		var comentario = comentarios.filter((com)=>{
			return com.id == comentario;
		})[0];
		if (comentario) {
			/*
			var user = usuarios.filter((us) => {
				return us.nombre == comentario.propietario;
			}); 
			*/
			var com = templateComments.cloneNode(true);
			com.getElementById("user-avatar").setAttribute("src", "images/img_avatar1.png"); // TODO: mostrar img del user
			//com.getElementById("user-name").textContent = user.nombre;
			com.getElementById("user-name").textContent = "user.nombre";
			com.getElementById("comment-content").textContent = comentario.texto;

			noticia.getElementById("comments").appendChild(com);
		}
	});

	var newCom = templateNewComment.cloneNode(true);
	newCom.getElementById("numNoticia").value = index;
	noticia.getElementById("comments").appendChild(newCom);

	document.getElementById("news").appendChild(noticia);
});

if(publicaciones.length){

	[...document.getElementsByClassName("form_comentario")].forEach((form)=>{

		form.addEventListener("submit", function(event){		
			var numNoticia = form.querySelector("#numNoticia").value,
				texto = form.querySelector("#textoComentario").value;

			var com = new Comentario(comentarios.length, texto, "Pepe", []);

			comentarios.push(com);

			// añadir el comentario a la noticia

			publicaciones[numNoticia].comentarios.push(com.id);

			// resubir las noticias y el comentario

			localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
			localStorage.setItem("comentarios", JSON.stringify(comentarios));

			location.reload();
		});
	});

	[...document.getElementsByClassName("like-button")].forEach((button)=>{

		button.addEventListener("click", function(event){
			event.preventDefault();	

			var numNoticia = button.getAttribute("href");

			publicaciones[numNoticia].likes.push("Pepe");

			// resubir las noticias y el comentario

			localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
		});
	});

}



/**
var comm1 = templateComments.cloneNode(true);
comm1.getElementById("user-avatar").setAttribute("src", "images/img_avatar1.png");
comm1.getElementById("user-name").textContent = "Usuario1";
comm1.getElementById("comment-content").textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

var comm2 = templateComments.cloneNode(true);
comm2.getElementById("user-avatar").setAttribute("src", "images/img_avatar1.png");
comm2.getElementById("user-name").textContent = "Usuario2";
comm2.getElementById("comment-content").textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

var comm3 = comm2.cloneNode(true);


var noticia1 = templateNews.cloneNode(true);
noticia1.getElementById("news-title").textContent = "Titulo de noticia 1";
noticia1.getElementById("news-content").textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non";
noticia1.getElementById("like").setAttribute("src", "images/like.png");
noticia1.getElementById("collapse-button").setAttribute("data-target", "#collapse1");
noticia1.getElementById("collapse").setAttribute("id", "collapse1");
noticia1.getElementById("num-comments").textContent = 2;
noticia1.getElementById("comments").appendChild(comm1);
noticia1.getElementById("comments").appendChild(comm2);

var noticia2 = templateNews.cloneNode(true);
noticia2.getElementById("news-title").textContent = "Titulo de noticia 2";
noticia2.getElementById("news-content").textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non";
noticia2.getElementById("like").setAttribute("src", "images/unlike.png");
noticia2.getElementById("collapse-button").setAttribute("data-target", "#collapse2");
noticia2.getElementById("collapse").setAttribute("id", "collapse2");
noticia2.getElementById("num-comments").textContent = 1;
noticia2.getElementById("comments").appendChild(comm3);


document.getElementById("news").appendChild(noticia1);
document.getElementById("news").appendChild(noticia2);


 */
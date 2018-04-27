var templateNews = document.getElementById("news-template").content;
var templateComments = document.getElementById("comments-template").content;
var templateNewComment = document.getElementById("new-comment-template").content;

var publicaciones;
var comentarios;
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

function reloadPublish () {

	loadVars();
	cleanPublish();

	publicaciones.forEach((publicacion, index) => {

		var noticia = templateNews.cloneNode(true);
		noticia.getElementById("news-title").textContent = publicacion.titulo;
		noticia.getElementById("news-content").textContent = publicacion.contenido;
		noticia.getElementById("like-img").setAttribute("src", "images/like.png");
		noticia.querySelector(".like-button").setAttribute("href", index);
		noticia.getElementById("collapse-button").setAttribute("data-target", "#collapse" + index);
		noticia.getElementById("collapse").setAttribute("id", "collapse" + index);
		noticia.getElementById("num-comments").textContent = publicacion.comentarios.length;
		publicacion.comentarios.forEach(comentario => {
			var comentario = comentarios.filter((com) => {
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

	if (publicaciones.length) {

		[...document.getElementsByClassName("form_comentario")].forEach((form) => {

			form.addEventListener("submit", function (event) {
				var numNoticia = form.querySelector("#numNoticia").value,
					texto = form.querySelector("#textoComentario").value;

				var com = new Comentario(comentarios.length, texto, "Pepe", []);

				comentarios.push(com);

				// añadir el comentario a la noticia

				publicaciones[numNoticia].comentarios.push(com.id);

				// resubir las publicaciones y el comentario

				localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
				localStorage.setItem("comentarios", JSON.stringify(comentarios));

				location.reload();
			});
		});

		[...document.getElementsByClassName("like-button")].forEach((button) => {

			button.addEventListener("click", function (event) {
				event.preventDefault();

				var numNoticia = button.getAttribute("href");

				publicaciones[numNoticia].likes.push("Pepe");

				// resubir las publicaciones

				localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
			});
		});

	}

}

function cleanPublish () {
	var nodoPubli = document.getElementById("news");
	while (nodoPubli.firstChild) {
		nodoPubli.removeChild(nodoPubli.firstChild);
	}
}

function loadVars () {
	if (localStorage.getItem("publicaciones") == null)
		publicaciones = new Array();
	else
		publicaciones = JSON.parse(localStorage.getItem("publicaciones"));

	if (localStorage.getItem("comentarios") == null)
		comentarios = new Array();
	else
		comentarios = JSON.parse(localStorage.getItem("comentarios"));
}

function loadComments () {

}

reloadPublish();

setInterval(()=>{
	reloadPublish();
},15000);
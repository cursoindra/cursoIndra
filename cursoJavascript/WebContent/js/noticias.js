var templateNews = document.getElementById("news-template").content;
var templateComments = document.getElementById("comments-template").content;


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



var publicacion = {"titulo":"", "contenido":"", "url":"", "grupos":["descripcion"], "propietario":"ID_DATOS_PERS","likes":["ID_DATOS_PERS"], "comentarios":["ID_COMEN"]};

var comentario = {"id":num,  "texto": "", "propietario": "ID_DATOS_PERS", "likes": ["ID_DATOS_PERS"]};
//datos personales,cal,mensa,eventos

class Publicaciones{

	constructor(titulo,contenido,url,comentarios,id=0){
		this.id=id;
		this.titulo=titulo;
		this.contenido=contenido;
		this.url=url;
		this.comentarios=comentarios;

	}
}
class Comentarios{


	constructor(texto,id=0)
	{
		this.id=id;
		this.texto=texto;

	}
}

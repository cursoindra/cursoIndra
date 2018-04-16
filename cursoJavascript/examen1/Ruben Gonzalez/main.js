var SECCIONES = ["Amor", "Aventuras", "Naturaleza", "Historia", "Viajes"];
var AUTORES = ["Cervantes", "Shakespeare", "Naomi Novik", "J.K. Rowling", "Tolkien", "George R.R. Martin", "Lorca"];

function Biblioteca (nombre) {
    this.nombre = nombre;
    this.secciones = new Array();
    this.socios = new Array();
}

Biblioteca.prototype = {
    anadirLibro : function (libro) {
        this.secciones.forEach( function (seccion) {
            if (seccion.nombre == libro.tematica)
                seccion.libros.push(libro);
        });
    },
    dameLibroAleatorio : function () {
        var ranSect = Math.floor(Math.random()*(this.secciones.length));
        var ranBook = Math.floor(Math.random()*(this.secciones[ranSect].libros.length));
        var book = this.secciones[ranSect].libros.splice(ranBook, 1)[0];
        return book;
    },
    devolverLibro : function (libro) {
        this.secciones.forEach( function (seccion) {
            if (seccion.nombre == libro.tematica)
                seccion.libros.push(libro);
        });
    },
    ejecutarCiclo : function () {
        this.socios.forEach( function (socio) {
            socio.ejecutarCiclo(this);
        }, this);
        this.imprimirEstado();
    },
    imprimirEstado : function () {
        var contador = 0;
        console.clear();
        console.log("%c" + this.nombre, "background: blue; color: lightblue; font-size: large;");
        this.secciones.forEach(function (seccion) {
            console.log("Seccion " + seccion.nombre + "\n" 
                + "\t" + "Numero de libros: " + seccion.libros.length);
            contador += seccion.libros.length;
        });  
        console.log("Total de libros en la biblioteca: " + contador); 
        console.log("Total de libros prestados a los socios: " + (1000 - contador) + "\n\n");  
    }
};

function Seccion (nombre) {
    this.nombre = nombre;
    this.libros = new Array();
}

function Libro (nombre, numPag, autor, tematica) {
    this.nombre = nombre;
    this.numPag = numPag;
    this.autor = autor;
    this.tematica = tematica;
}

function Socio (nombre, numSocio) {
    this.nombre = nombre;
    this.numSocio = numSocio;
    this.libros = new Array();
}

Socio.prototype.ejecutarCiclo = function (biblioteca) {
    this.libros.forEach(function (libro) {
        biblioteca.devolverLibro(libro);
    });
    this.libros.length = 0;
    var ranNumBooks = Math.ceil(Math.random()*3);
    var book;
    for (ranNumBooks; ranNumBooks>0; ranNumBooks--) {
        book = biblioteca.dameLibroAleatorio();
        this.libros.push(book);
    }
};


var BiblioNacional = new Biblioteca (" Biblioteca Nacional ");

SECCIONES.forEach(function (nombre) {
    BiblioNacional.secciones.push(new Seccion(nombre));
});

for (var i = 1; i<=100; i++) {
    BiblioNacional.socios.push(new Socio("Socio " + i, i));
}

for (i = 1; i<=1000; i++) {
    var ranNumPag = (Math.floor(Math.random()*100)+100);
    var ranSect = SECCIONES[Math.floor(Math.random()*(SECCIONES.length))];
    var ranAutor = AUTORES[Math.floor(Math.random()*(AUTORES.length))];
    BiblioNacional.anadirLibro(new Libro("Libro " + i, ranNumPag, ranAutor, ranSect));
}

setInterval(function () {
    BiblioNacional.ejecutarCiclo();
}, 1000);
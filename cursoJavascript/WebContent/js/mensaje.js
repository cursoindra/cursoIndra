class Mensaje {
    constructor (fecha, texto, leido, emisor_id, receptor_id, id = 0) {
        this.id = id;
        this.fecha = fecha;
        this.texto = texto;
        this.leido = leido;
        this.emisor_id = emisor_id;
        this.receptor_id = receptor_id;
    }
}
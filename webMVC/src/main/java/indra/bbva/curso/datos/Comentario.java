package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the COMENTARIOS database table.
 * 
 */
@Entity
@Table(name="COMENTARIOS")
@NamedQuery(name="Comentario.findAll", query="SELECT c FROM Comentario c")
public class Comentario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	@Lob
	private String texto;

	//bi-directional many-to-many association to DatoPersonal
	@ManyToMany(mappedBy="comentarios")
	private List<DatoPersonal> datosPersonales;

	//bi-directional many-to-many association to Publicacion
	@ManyToMany(mappedBy="comentarios")
	private List<Publicacion> publicaciones;

	public Comentario() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTexto() {
		return this.texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public List<DatoPersonal> getDatosPersonales() {
		return this.datosPersonales;
	}

	public void setDatosPersonales(List<DatoPersonal> datosPersonales) {
		this.datosPersonales = datosPersonales;
	}

	public List<Publicacion> getPublicaciones() {
		return this.publicaciones;
	}

	public void setPublicaciones(List<Publicacion> publicaciones) {
		this.publicaciones = publicaciones;
	}

}
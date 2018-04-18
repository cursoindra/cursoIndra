package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Set;


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

	//bi-directional many-to-many association to DatosPersonale
	@ManyToMany(mappedBy="comentarios")
	private Set<DatosPersonale> datosPersonales;

	//bi-directional many-to-many association to Publicacione
	@ManyToMany(mappedBy="comentarios")
	private Set<Publicacione> publicaciones;

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

	public Set<DatosPersonale> getDatosPersonales() {
		return this.datosPersonales;
	}

	public void setDatosPersonales(Set<DatosPersonale> datosPersonales) {
		this.datosPersonales = datosPersonales;
	}

	public Set<Publicacione> getPublicaciones() {
		return this.publicaciones;
	}

	public void setPublicaciones(Set<Publicacione> publicaciones) {
		this.publicaciones = publicaciones;
	}

}
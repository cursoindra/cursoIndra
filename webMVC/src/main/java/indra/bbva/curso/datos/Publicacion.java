package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the PUBLICACIONES database table.
 * 
 */
@Entity
@Table(name="PUBLICACIONES")
@NamedQuery(name="Publicacion.findAll", query="SELECT p FROM Publicacion p")
public class Publicacion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	@Lob
	private String contenido;

	private String titulo;

	private String url;

	//bi-directional many-to-many association to DatoPersonal
	@ManyToMany
	@JoinTable(
		name="DATOS_PERSONALES_LIKE_PUBLICACIONES"
		, joinColumns={
			@JoinColumn(name="PUBLICACIONES_ID")
			}
		, inverseJoinColumns={
			@JoinColumn(name="DATOS_PERSONALES_ID")
			}
		)
	private List<DatoPersonal> datosPersonales1;

	//bi-directional many-to-many association to DatoPersonal
	@ManyToMany(mappedBy="publicaciones2")
	private List<DatoPersonal> datosPersonales2;

	//bi-directional many-to-many association to Comentario
	@ManyToMany
	@JoinTable(
		name="PUBLICACIONES_COMENTARIOS"
		, joinColumns={
			@JoinColumn(name="PUBLICACIONES_ID")
			}
		, inverseJoinColumns={
			@JoinColumn(name="COMENTARIOS_ID")
			}
		)
	private List<Comentario> comentarios;

	public Publicacion() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getContenido() {
		return this.contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	public String getTitulo() {
		return this.titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public List<DatoPersonal> getDatosPersonales1() {
		return this.datosPersonales1;
	}

	public void setDatosPersonales1(List<DatoPersonal> datosPersonales1) {
		this.datosPersonales1 = datosPersonales1;
	}

	public List<DatoPersonal> getDatosPersonales2() {
		return this.datosPersonales2;
	}

	public void setDatosPersonales2(List<DatoPersonal> datosPersonales2) {
		this.datosPersonales2 = datosPersonales2;
	}

	public List<Comentario> getComentarios() {
		return this.comentarios;
	}

	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

}
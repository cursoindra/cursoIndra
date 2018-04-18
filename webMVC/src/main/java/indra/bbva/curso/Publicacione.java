package indra.bbva.curso;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Set;


/**
 * The persistent class for the PUBLICACIONES database table.
 * 
 */
@Entity
@Table(name="PUBLICACIONES")
@NamedQuery(name="Publicacione.findAll", query="SELECT p FROM Publicacione p")
public class Publicacione implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	@Lob
	private String contenido;

	private String titulo;

	private String url;

	//bi-directional many-to-many association to DatosPersonale
	@ManyToMany(mappedBy="publicaciones1")
	private Set<DatosPersonale> datosPersonales1;

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
	private Set<Comentario> comentarios;

	//bi-directional many-to-many association to DatosPersonale
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
	private Set<DatosPersonale> datosPersonales2;

	public Publicacione() {
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

	public Set<DatosPersonale> getDatosPersonales1() {
		return this.datosPersonales1;
	}

	public void setDatosPersonales1(Set<DatosPersonale> datosPersonales1) {
		this.datosPersonales1 = datosPersonales1;
	}

	public Set<Comentario> getComentarios() {
		return this.comentarios;
	}

	public void setComentarios(Set<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

	public Set<DatosPersonale> getDatosPersonales2() {
		return this.datosPersonales2;
	}

	public void setDatosPersonales2(Set<DatosPersonale> datosPersonales2) {
		this.datosPersonales2 = datosPersonales2;
	}

}
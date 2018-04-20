package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;

import java.util.Date;
import java.util.Set;


/**
 * The persistent class for the DATOS_PERSONALES database table.
 * 
 */
@Entity
@Table(name="DATOS_PERSONALES")
@NamedQuery(name="DatosPersonale.findAll", query="SELECT d FROM DatosPersonale d")
public class DatosPersonale implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	private String apellido1;

	private String apellido2;

	private String email;

	@Temporal(TemporalType.DATE)
	@Column(name="`FECHA NACIMIENTO`")
	private Date fecha_nacimiento;

	private String imagen;

	private String nombre;

	//bi-directional many-to-many association to Comentario
	@ManyToMany
	@JoinTable(
		name="DATOS_PERSONALES_LIKE_COMENTARIOS"
		, joinColumns={
			@JoinColumn(name="DATOS_PERSONALES_ID")
			}
		, inverseJoinColumns={
			@JoinColumn(name="COMENTARIOS_ID")
			}
		)
	private Set<Comentario> comentarios;

	//bi-directional many-to-many association to DatosPersonale
	@ManyToMany
	@JoinTable(
		name="AMISTADES"
		, joinColumns={
			@JoinColumn(name="DATOS_PERSONALES_ID1")
			}
		, inverseJoinColumns={
			@JoinColumn(name="DATOS_PERSONALES_ID")
			}
		)
	private Set<DatosPersonale> datosPersonales1;

	//bi-directional many-to-many association to DatosPersonale
	@ManyToMany(mappedBy="datosPersonales1")
	private Set<DatosPersonale> datosPersonales2;

	//bi-directional many-to-many association to Publicacione
	@ManyToMany
	@JoinTable(
		name="DATOS_PERSONALES_PUBLICACIONES"
		, joinColumns={
			@JoinColumn(name="DATOS_PERSONALES_ID")
			}
		, inverseJoinColumns={
			@JoinColumn(name="PUBLICACIONES_ID")
			}
		)
	private Set<Publicacione> publicaciones1;

	//bi-directional many-to-one association to Usuario
	@ManyToOne
	@JoinColumn(name="USUARIOS_ID")
	private Usuario usuario;

	//bi-directional many-to-one association to Mensaje
	@OneToMany(mappedBy="datosPersonale1")
	private Set<Mensaje> mensajes1;

	//bi-directional many-to-one association to Mensaje
	@OneToMany(mappedBy="datosPersonale2")
	private Set<Mensaje> mensajes2;

	//bi-directional many-to-one association to Proyecto
	@OneToMany(mappedBy="datosPersonale")
	private Set<Proyecto> proyectos;

	//bi-directional many-to-many association to Publicacione
	@ManyToMany(mappedBy="datosPersonales2")
	private Set<Publicacione> publicaciones2;

	public DatosPersonale() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getApellido1() {
		return this.apellido1;
	}

	public void setApellido1(String apellido1) {
		this.apellido1 = apellido1;
	}

	public String getApellido2() {
		return this.apellido2;
	}

	public void setApellido2(String apellido2) {
		this.apellido2 = apellido2;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getFecha_nacimiento() {
		return this.fecha_nacimiento;
	}

	public void setFecha_nacimiento(Date fecha_nacimiento) {
		this.fecha_nacimiento = fecha_nacimiento;
	}

	public String getImagen() {
		return this.imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Set<Comentario> getComentarios() {
		return this.comentarios;
	}

	public void setComentarios(Set<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

	public Set<DatosPersonale> getDatosPersonales1() {
		return this.datosPersonales1;
	}

	public void setDatosPersonales1(Set<DatosPersonale> datosPersonales1) {
		this.datosPersonales1 = datosPersonales1;
	}

	public Set<DatosPersonale> getDatosPersonales2() {
		return this.datosPersonales2;
	}

	public void setDatosPersonales2(Set<DatosPersonale> datosPersonales2) {
		this.datosPersonales2 = datosPersonales2;
	}

	public Set<Publicacione> getPublicaciones1() {
		return this.publicaciones1;
	}

	public void setPublicaciones1(Set<Publicacione> publicaciones1) {
		this.publicaciones1 = publicaciones1;
	}

	public Usuario getUsuario() {
		return this.usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Set<Mensaje> getMensajes1() {
		return this.mensajes1;
	}

	public void setMensajes1(Set<Mensaje> mensajes1) {
		this.mensajes1 = mensajes1;
	}

	public Mensaje addMensajes1(Mensaje mensajes1) {
		getMensajes1().add(mensajes1);
		mensajes1.setDatosPersonale1(this);

		return mensajes1;
	}

	public Mensaje removeMensajes1(Mensaje mensajes1) {
		getMensajes1().remove(mensajes1);
		mensajes1.setDatosPersonale1(null);

		return mensajes1;
	}

	public Set<Mensaje> getMensajes2() {
		return this.mensajes2;
	}

	public void setMensajes2(Set<Mensaje> mensajes2) {
		this.mensajes2 = mensajes2;
	}

	public Mensaje addMensajes2(Mensaje mensajes2) {
		getMensajes2().add(mensajes2);
		mensajes2.setDatosPersonale2(this);

		return mensajes2;
	}

	public Mensaje removeMensajes2(Mensaje mensajes2) {
		getMensajes2().remove(mensajes2);
		mensajes2.setDatosPersonale2(null);

		return mensajes2;
	}

	public Set<Proyecto> getProyectos() {
		return this.proyectos;
	}

	public void setProyectos(Set<Proyecto> proyectos) {
		this.proyectos = proyectos;
	}

	public Proyecto addProyecto(Proyecto proyecto) {
		getProyectos().add(proyecto);
		proyecto.setDatosPersonale(this);

		return proyecto;
	}

	public Proyecto removeProyecto(Proyecto proyecto) {
		getProyectos().remove(proyecto);
		proyecto.setDatosPersonale(null);

		return proyecto;
	}

	public Set<Publicacione> getPublicaciones2() {
		return this.publicaciones2;
	}

	public void setPublicaciones2(Set<Publicacione> publicaciones2) {
		this.publicaciones2 = publicaciones2;
	}

}
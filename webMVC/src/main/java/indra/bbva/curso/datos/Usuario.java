package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the USUARIOS database table.
 * 
 */
@Entity
@Table(name="USUARIOS")
@NamedQuery(name="Usuario.findAll", query="SELECT u FROM Usuario u")
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	private String clave;

	private String usuario;

	//bi-directional many-to-one association to DatoPersonal
	@OneToMany(mappedBy="usuario")
	private List<DatoPersonal> datosPersonales;

	//bi-directional many-to-many association to Rol
	@ManyToMany
	@JoinTable(
		name="USUARIOS_ROLES"
		, joinColumns={
			@JoinColumn(name="USUARIOS_ID")
			}
		, inverseJoinColumns={
			@JoinColumn(name="ROLES_ID")
			}
		)
	private List<Rol> roles;

	public Usuario() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getClave() {
		return this.clave;
	}

	public void setClave(String clave) {
		this.clave = clave;
	}

	public String getUsuario() {
		return this.usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public List<DatoPersonal> getDatosPersonales() {
		return this.datosPersonales;
	}

	public void setDatosPersonales(List<DatoPersonal> datosPersonales) {
		this.datosPersonales = datosPersonales;
	}

	public DatoPersonal addDatosPersonale(DatoPersonal datosPersonale) {
		getDatosPersonales().add(datosPersonale);
		datosPersonale.setUsuario(this);

		return datosPersonale;
	}

	public DatoPersonal removeDatosPersonale(DatoPersonal datosPersonale) {
		getDatosPersonales().remove(datosPersonale);
		datosPersonale.setUsuario(null);

		return datosPersonale;
	}

	public List<Rol> getRoles() {
		return this.roles;
	}

	public void setRoles(List<Rol> roles) {
		this.roles = roles;
	}

}
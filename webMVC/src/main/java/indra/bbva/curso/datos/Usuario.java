package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;

import java.util.Set;


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

	//bi-directional many-to-one association to DatosPersonale
	@OneToMany(mappedBy="usuario")
	private Set<DatosPersonale> datosPersonales;

	//bi-directional many-to-many association to Role
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
	private Set<Role> roles;

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

	public Set<DatosPersonale> getDatosPersonales() {
		return this.datosPersonales;
	}

	public void setDatosPersonales(Set<DatosPersonale> datosPersonales) {
		this.datosPersonales = datosPersonales;
	}

	public DatosPersonale addDatosPersonale(DatosPersonale datosPersonale) {
		getDatosPersonales().add(datosPersonale);
		datosPersonale.setUsuario(this);

		return datosPersonale;
	}

	public DatosPersonale removeDatosPersonale(DatosPersonale datosPersonale) {
		getDatosPersonales().remove(datosPersonale);
		datosPersonale.setUsuario(null);

		return datosPersonale;
	}

	public Set<Role> getRoles() {
		return this.roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

}
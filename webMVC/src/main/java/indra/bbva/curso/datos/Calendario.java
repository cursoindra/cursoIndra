package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the CALENDARIOS database table.
 * 
 */
@Entity
@Table(name="CALENDARIOS")
@NamedQuery(name="Calendario.findAll", query="SELECT c FROM Calendario c")
public class Calendario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String descripcion;

	private String nombre;

	//bi-directional many-to-one association to Role
	@ManyToOne
	@JoinColumn(name="ROLES_ID")
	private Role role;

	//bi-directional many-to-one association to TipoCalendario
	@ManyToOne
	@JoinColumn(name="TIPO_CALENDARIO_ID")
	private TipoCalendario tipoCalendario;

	public Calendario() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public TipoCalendario getTipoCalendario() {
		return this.tipoCalendario;
	}

	public void setTipoCalendario(TipoCalendario tipoCalendario) {
		this.tipoCalendario = tipoCalendario;
	}

}
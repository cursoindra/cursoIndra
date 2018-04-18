package indra.bbva.curso;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the GRUPOS database table.
 * 
 */
@Entity
@Table(name="GRUPOS")
@NamedQuery(name="Grupo.findAll", query="SELECT g FROM Grupo g")
public class Grupo implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private GrupoPK id;

	private String descripcion;

	//bi-directional many-to-one association to Role
	@ManyToOne
	@JoinColumn(name="ROLES_ID")
	private Role role;

	public Grupo() {
	}

	public GrupoPK getId() {
		return this.id;
	}

	public void setId(GrupoPK id) {
		this.id = id;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

}
package indra.bbva.curso.datos;

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

	
	private String descripcion;

	//bi-directional many-to-one association to Rol
	@ManyToOne
	@JoinColumn(name="ROLES_ID")
	private Rol role;

	public Grupo() {
	}

	
	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Rol getRole() {
		return this.role;
	}

	public void setRole(Rol role) {
		this.role = role;
	}

}
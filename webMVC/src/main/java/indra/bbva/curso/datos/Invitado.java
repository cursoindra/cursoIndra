package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the INVITADOS database table.
 * 
 */
@Entity
@Table(name="INVITADOS")
@NamedQuery(name="Invitado.findAll", query="SELECT i FROM Invitado i")
public class Invitado implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	public Invitado() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
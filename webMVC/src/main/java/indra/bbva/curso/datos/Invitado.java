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

	@EmbeddedId
	private InvitadoPK id;

	public Invitado() {
	}

	public InvitadoPK getId() {
		return this.id;
	}

	public void setId(InvitadoPK id) {
		this.id = id;
	}

}
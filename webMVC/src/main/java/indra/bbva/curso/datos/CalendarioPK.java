package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the CALENDARIOS database table.
 * 
 */
@Embeddable
public class CalendarioPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	private int id;

	@Column(name="TIPO_CALENDARIO_ID", insertable=false, updatable=false)
	private int tipoCalendarioId;

	@Column(name="ROLES_ID", insertable=false, updatable=false)
	private int rolesId;

	public CalendarioPK() {
	}
	public int getId() {
		return this.id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getTipoCalendarioId() {
		return this.tipoCalendarioId;
	}
	public void setTipoCalendarioId(int tipoCalendarioId) {
		this.tipoCalendarioId = tipoCalendarioId;
	}
	public int getRolesId() {
		return this.rolesId;
	}
	public void setRolesId(int rolesId) {
		this.rolesId = rolesId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof CalendarioPK)) {
			return false;
		}
		CalendarioPK castOther = (CalendarioPK)other;
		return 
			(this.id == castOther.id)
			&& (this.tipoCalendarioId == castOther.tipoCalendarioId)
			&& (this.rolesId == castOther.rolesId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.id;
		hash = hash * prime + this.tipoCalendarioId;
		hash = hash * prime + this.rolesId;
		
		return hash;
	}
}
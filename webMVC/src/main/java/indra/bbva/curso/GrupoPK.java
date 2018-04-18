package indra.bbva.curso;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the GRUPOS database table.
 * 
 */
@Embeddable
public class GrupoPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	private int id;

	@Column(name="ROLES_ID", insertable=false, updatable=false)
	private int rolesId;

	public GrupoPK() {
	}
	public int getId() {
		return this.id;
	}
	public void setId(int id) {
		this.id = id;
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
		if (!(other instanceof GrupoPK)) {
			return false;
		}
		GrupoPK castOther = (GrupoPK)other;
		return 
			(this.id == castOther.id)
			&& (this.rolesId == castOther.rolesId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.id;
		hash = hash * prime + this.rolesId;
		
		return hash;
	}
}
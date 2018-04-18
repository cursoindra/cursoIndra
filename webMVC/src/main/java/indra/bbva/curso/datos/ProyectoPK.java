package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the PROYECTOS database table.
 * 
 */
@Embeddable
public class ProyectoPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	private int id;

	@Column(name="DATOS_PERSONALES_ID", insertable=false, updatable=false)
	private int datosPersonalesId;

	public ProyectoPK() {
	}
	public int getId() {
		return this.id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getDatosPersonalesId() {
		return this.datosPersonalesId;
	}
	public void setDatosPersonalesId(int datosPersonalesId) {
		this.datosPersonalesId = datosPersonalesId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof ProyectoPK)) {
			return false;
		}
		ProyectoPK castOther = (ProyectoPK)other;
		return 
			(this.id == castOther.id)
			&& (this.datosPersonalesId == castOther.datosPersonalesId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.id;
		hash = hash * prime + this.datosPersonalesId;
		
		return hash;
	}
}
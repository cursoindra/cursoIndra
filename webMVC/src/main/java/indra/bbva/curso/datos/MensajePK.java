package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the MENSAJES database table.
 * 
 */
@Embeddable
public class MensajePK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	private int id;

	@Column(name="DATOS_PERSONALES_ID", insertable=false, updatable=false)
	private int datosPersonalesId;

	@Column(name="DATOS_PERSONALES_ID_DESTINATARIO", insertable=false, updatable=false)
	private int datosPersonalesIdDestinatario;

	public MensajePK() {
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
	public int getDatosPersonalesIdDestinatario() {
		return this.datosPersonalesIdDestinatario;
	}
	public void setDatosPersonalesIdDestinatario(int datosPersonalesIdDestinatario) {
		this.datosPersonalesIdDestinatario = datosPersonalesIdDestinatario;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof MensajePK)) {
			return false;
		}
		MensajePK castOther = (MensajePK)other;
		return 
			(this.id == castOther.id)
			&& (this.datosPersonalesId == castOther.datosPersonalesId)
			&& (this.datosPersonalesIdDestinatario == castOther.datosPersonalesIdDestinatario);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.id;
		hash = hash * prime + this.datosPersonalesId;
		hash = hash * prime + this.datosPersonalesIdDestinatario;
		
		return hash;
	}
}
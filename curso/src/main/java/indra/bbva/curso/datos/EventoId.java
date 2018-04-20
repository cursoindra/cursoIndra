package indra.bbva.curso.datos;
// Generated 20-abr-2018 12:27:47 by Hibernate Tools 5.0.6.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * EventoId generated by hbm2java
 */
@Embeddable
public class EventoId implements java.io.Serializable {

	private int id;
	private int calendarioId;
	private int datosPersonalesId;

	public EventoId() {
	}

	public EventoId(int id, int calendarioId, int datosPersonalesId) {
		this.id = id;
		this.calendarioId = calendarioId;
		this.datosPersonalesId = datosPersonalesId;
	}

	@Column(name = "ID", nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "CALENDARIO_ID", nullable = false)
	public int getCalendarioId() {
		return this.calendarioId;
	}

	public void setCalendarioId(int calendarioId) {
		this.calendarioId = calendarioId;
	}

	@Column(name = "DATOS_PERSONALES_ID", nullable = false)
	public int getDatosPersonalesId() {
		return this.datosPersonalesId;
	}

	public void setDatosPersonalesId(int datosPersonalesId) {
		this.datosPersonalesId = datosPersonalesId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof EventoId))
			return false;
		EventoId castOther = (EventoId) other;

		return (this.getId() == castOther.getId()) && (this.getCalendarioId() == castOther.getCalendarioId())
				&& (this.getDatosPersonalesId() == castOther.getDatosPersonalesId());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getId();
		result = 37 * result + this.getCalendarioId();
		result = 37 * result + this.getDatosPersonalesId();
		return result;
	}

}

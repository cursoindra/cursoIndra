package indra.bbva.curso.datos;
// Generated 20-abr-2018 12:27:47 by Hibernate Tools 5.0.6.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * DatosPersonalesLikePublicacionesId generated by hbm2java
 */
@Embeddable
public class DatosPersonalesLikePublicacionesId implements java.io.Serializable {

	private int datosPersonalesId;
	private int publicacionesId;

	public DatosPersonalesLikePublicacionesId() {
	}

	public DatosPersonalesLikePublicacionesId(int datosPersonalesId, int publicacionesId) {
		this.datosPersonalesId = datosPersonalesId;
		this.publicacionesId = publicacionesId;
	}

	@Column(name = "DATOS_PERSONALES_ID", nullable = false)
	public int getDatosPersonalesId() {
		return this.datosPersonalesId;
	}

	public void setDatosPersonalesId(int datosPersonalesId) {
		this.datosPersonalesId = datosPersonalesId;
	}

	@Column(name = "PUBLICACIONES_ID", nullable = false)
	public int getPublicacionesId() {
		return this.publicacionesId;
	}

	public void setPublicacionesId(int publicacionesId) {
		this.publicacionesId = publicacionesId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof DatosPersonalesLikePublicacionesId))
			return false;
		DatosPersonalesLikePublicacionesId castOther = (DatosPersonalesLikePublicacionesId) other;

		return (this.getDatosPersonalesId() == castOther.getDatosPersonalesId())
				&& (this.getPublicacionesId() == castOther.getPublicacionesId());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getDatosPersonalesId();
		result = 37 * result + this.getPublicacionesId();
		return result;
	}

}

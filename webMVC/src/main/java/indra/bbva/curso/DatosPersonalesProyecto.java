package indra.bbva.curso;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the DATOS_PERSONALES_PROYECTOS database table.
 * 
 */
@Entity
@Table(name="DATOS_PERSONALES_PROYECTOS")
@NamedQuery(name="DatosPersonalesProyecto.findAll", query="SELECT d FROM DatosPersonalesProyecto d")
public class DatosPersonalesProyecto implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private DatosPersonalesProyectoPK id;

	public DatosPersonalesProyecto() {
	}

	public DatosPersonalesProyectoPK getId() {
		return this.id;
	}

	public void setId(DatosPersonalesProyectoPK id) {
		this.id = id;
	}

}
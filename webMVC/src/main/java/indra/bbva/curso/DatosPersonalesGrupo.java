package indra.bbva.curso;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the DATOS_PERSONALES_GRUPOS database table.
 * 
 */
@Entity
@Table(name="DATOS_PERSONALES_GRUPOS")
@NamedQuery(name="DatosPersonalesGrupo.findAll", query="SELECT d FROM DatosPersonalesGrupo d")
public class DatosPersonalesGrupo implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private DatosPersonalesGrupoPK id;

	public DatosPersonalesGrupo() {
	}

	public DatosPersonalesGrupoPK getId() {
		return this.id;
	}

	public void setId(DatosPersonalesGrupoPK id) {
		this.id = id;
	}

}
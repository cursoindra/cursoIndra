package indra.bbva.curso;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the PUBLICACIONES_GRUPOS database table.
 * 
 */
@Entity
@Table(name="PUBLICACIONES_GRUPOS")
@NamedQuery(name="PublicacionesGrupo.findAll", query="SELECT p FROM PublicacionesGrupo p")
public class PublicacionesGrupo implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private PublicacionesGrupoPK id;

	public PublicacionesGrupo() {
	}

	public PublicacionesGrupoPK getId() {
		return this.id;
	}

	public void setId(PublicacionesGrupoPK id) {
		this.id = id;
	}

}
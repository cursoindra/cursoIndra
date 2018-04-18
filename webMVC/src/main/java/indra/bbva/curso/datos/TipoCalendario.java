package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Set;


/**
 * The persistent class for the TIPO_CALENDARIO database table.
 * 
 */
@Entity
@Table(name="TIPO_CALENDARIO")
@NamedQuery(name="TipoCalendario.findAll", query="SELECT t FROM TipoCalendario t")
public class TipoCalendario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;

	private String descripcion;

	public TipoCalendario() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}
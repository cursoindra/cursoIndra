package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the PROYECTOS database table.
 * 
 */
@Entity
@Table(name="PROYECTOS")
@NamedQuery(name="Proyecto.findAll", query="SELECT p FROM Proyecto p")
public class Proyecto implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private ProyectoPK id;

	private String descripcion;

	//bi-directional many-to-one association to DatosPersonale
	@ManyToOne
	@JoinColumn(name="DATOS_PERSONALES_ID")
	private DatosPersonale datosPersonale;

	public Proyecto() {
	}

	public ProyectoPK getId() {
		return this.id;
	}

	public void setId(ProyectoPK id) {
		this.id = id;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public DatosPersonale getDatosPersonale() {
		return this.datosPersonale;
	}

	public void setDatosPersonale(DatosPersonale datosPersonale) {
		this.datosPersonale = datosPersonale;
	}

}
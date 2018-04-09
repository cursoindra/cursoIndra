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

	
	private String descripcion;

	//bi-directional many-to-one association to DatoPersonal
	@ManyToOne
	@JoinColumn(name="DATOS_PERSONALES_ID")
	private DatoPersonal datosPersonale;

	public Proyecto() {
	}

	
	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public DatoPersonal getDatosPersonale() {
		return this.datosPersonale;
	}

	public void setDatosPersonale(DatoPersonal datosPersonale) {
		this.datosPersonale = datosPersonale;
	}

}
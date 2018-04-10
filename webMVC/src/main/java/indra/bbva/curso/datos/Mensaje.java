package indra.bbva.curso.datos;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the MENSAJES database table.
 * 
 */
@Entity
@Table(name="MENSAJES")
@NamedQuery(name="Mensaje.findAll", query="SELECT m FROM Mensaje m")
public class Mensaje implements Serializable {
	private static final long serialVersionUID = 1L;

	
	@Temporal(TemporalType.DATE)
	private Date fecha;

	private int leido;

	private String mensaje;

	//bi-directional many-to-one association to DatoPersonal
	@ManyToOne
	@JoinColumn(name="DATOS_PERSONALES_ID")
	private DatoPersonal datosPersonale1;

	//bi-directional many-to-one association to DatoPersonal
	@ManyToOne
	@JoinColumn(name="DATOS_PERSONALES_ID_DESTINATARIO")
	private DatoPersonal datosPersonale2;

	public Mensaje() {
	}

	

	public Date getFecha() {
		return this.fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public int getLeido() {
		return this.leido;
	}

	public void setLeido(int leido) {
		this.leido = leido;
	}

	public String getMensaje() {
		return this.mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public DatoPersonal getDatosPersonale1() {
		return this.datosPersonale1;
	}

	public void setDatosPersonale1(DatoPersonal datosPersonale1) {
		this.datosPersonale1 = datosPersonale1;
	}

	public DatoPersonal getDatosPersonale2() {
		return this.datosPersonale2;
	}

	public void setDatosPersonale2(DatoPersonal datosPersonale2) {
		this.datosPersonale2 = datosPersonale2;
	}

}
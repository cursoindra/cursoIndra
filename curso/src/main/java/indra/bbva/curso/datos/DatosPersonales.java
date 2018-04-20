package indra.bbva.curso.datos;
// Generated 20-abr-2018 12:27:47 by Hibernate Tools 5.0.6.Final

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * DatosPersonales generated by hbm2java
 */
@Entity
@Table(name = "DATOS_PERSONALES", catalog = "indrabook")
public class DatosPersonales implements java.io.Serializable {

	private Integer id;
	private String nombre;
	private String apellido1;
	private String apellido2;
	private String email;
	private Date fechaNacimiento;
	private int usuariosId;
	private String imagen;

	public DatosPersonales() {
	}

	public DatosPersonales(int usuariosId) {
		this.usuariosId = usuariosId;
	}

	public DatosPersonales(String nombre, String apellido1, String apellido2, String email, Date fechaNacimiento,
			int usuariosId, String imagen) {
		this.nombre = nombre;
		this.apellido1 = apellido1;
		this.apellido2 = apellido2;
		this.email = email;
		this.fechaNacimiento = fechaNacimiento;
		this.usuariosId = usuariosId;
		this.imagen = imagen;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "ID", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "NOMBRE", length = 45)
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Column(name = "APELLIDO1", length = 45)
	public String getApellido1() {
		return this.apellido1;
	}

	public void setApellido1(String apellido1) {
		this.apellido1 = apellido1;
	}

	@Column(name = "APELLIDO2", length = 45)
	public String getApellido2() {
		return this.apellido2;
	}

	public void setApellido2(String apellido2) {
		this.apellido2 = apellido2;
	}

	@Column(name = "EMAIL", length = 45)
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "FECHA NACIMIENTO", length = 10)
	public Date getFechaNacimiento() {
		return this.fechaNacimiento;
	}

	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	@Column(name = "USUARIOS_ID", nullable = false)
	public int getUsuariosId() {
		return this.usuariosId;
	}

	public void setUsuariosId(int usuariosId) {
		this.usuariosId = usuariosId;
	}

	@Column(name = "IMAGEN", length = 100)
	public String getImagen() {
		return this.imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

}

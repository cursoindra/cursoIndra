package indra.bbva.curso.datos;
// Generated 20-abr-2018 12:27:47 by Hibernate Tools 5.0.6.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Comentarios generated by hbm2java
 */
@Entity
@Table(name = "COMENTARIOS", catalog = "indrabook")
public class Comentarios implements java.io.Serializable {

	private Integer id;
	private String texto;

	public Comentarios() {
	}

	public Comentarios(String texto) {
		this.texto = texto;
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

	@Column(name = "TEXTO", length = 65535)
	public String getTexto() {
		return this.texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

}

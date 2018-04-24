package indra.bbva.curso;

import java.util.Date;
import java.util.HashSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import indra.bbva.curso.datos.DatosPersonale;
import indra.bbva.curso.datos.Role;
import indra.bbva.curso.datos.Usuario;
import indra.bbva.curso.servicios.IndraBookService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired
	private IndraBookService indraBookService;

	/**
	 * Simply selects the home view to render by returning its name.
	 * 
	 * @throws Exception
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public DatosPersonale grabaUsuario() throws Exception {

		Usuario usuario = new Usuario();
		usuario.setUsuario("pepe");
		usuario.setClave("1234");
		Role rol = new Role();
		rol.setRol("ROLE_USER");
		if (usuario.getRoles() == null)
			usuario.setRoles(new HashSet<Role>());
		usuario.getRoles().add(rol);

		DatosPersonale datosPersonale = new DatosPersonale();
		datosPersonale.setNombre("Javier");
		datosPersonale.setApellido1("Diaz");
		datosPersonale.setApellido2("Lopez");
		datosPersonale.setEmail("SDFSDF");
		datosPersonale.setFecha_nacimiento(new Date());

		datosPersonale.setUsuario(usuario);

		return getIndraBookService().grabaUsuario(datosPersonale);

	}

	@RequestMapping(value = "dameUsuario.html", method = RequestMethod.POST, consumes = "aplication/json", produces = "aplication/json")
	@ResponseBody
	public DatosPersonale getUsuario(Usuario usuario) {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String codificado = encoder.encode("12345");
		System.err.println(codificado);

		DatosPersonale datosPersonale2 = null;
		try {
			datosPersonale2 = (getIndraBookService().getUsuario((Usuario) usuario));
			return datosPersonale2;
		} catch (Exception e) {
			return null;
		}

	}

	public IndraBookService getIndraBookService() {
		return indraBookService;
	}

	public void setIndraBookService(IndraBookService indraBookService) {
		this.indraBookService = indraBookService;
	}

}

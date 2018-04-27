package indra.bbva.curso;

import java.util.Date;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import indra.bbva.curso.datos.DatosPersonale;
import indra.bbva.curso.datos.Role;
import indra.bbva.curso.datos.Usuario;
import indra.bbva.curso.servicios.IndraBookService;

@org.springframework.web.bind.annotation.RestController
public class RestController {

	@Autowired
	private IndraBookService indraBookService;
	
	@RequestMapping(value = "dameUsuario.html",  consumes = "aplication/json", produces = "aplication/json")
	@ResponseBody
	public DatosPersonale getUsuario() {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String codificado = encoder.encode("12345");
		System.err.println(codificado);

		DatosPersonale datosPersonale2 = null;
		Usuario usuario= new Usuario();
		usuario.setClave("1234");
		usuario.setUsuario("pepe");
		try {
			datosPersonale2 = (getIndraBookService().getUsuario(usuario));
			return datosPersonale2;
		} catch (Exception e) {
			return null;
		}

	}
	@RequestMapping(value = "/grabaUsuario.html", method = RequestMethod.GET)
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

	public IndraBookService getIndraBookService() {
		return indraBookService;
	}

	public void setIndraBookService(IndraBookService indraBookService) {
		this.indraBookService = indraBookService;
	}
}

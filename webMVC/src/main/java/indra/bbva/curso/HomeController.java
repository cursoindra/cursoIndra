package indra.bbva.curso;
//prueba
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Handles requests for the application home page.
 */
@RestController
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model, @RequestParam("nombre") String nombre) {
		logger.info("Welcome home! The client locale is {}.", locale);

		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);

		model.addAttribute("texto", "Has escrito " + nombre.toUpperCase() + " y tiene " + nombre.length() + " letras");

		return "home";
	}

	@RequestMapping("/datos")
	public List<Agenda> datos() {
		List<Agenda> datos = new ArrayList<Agenda>();
		Agenda agenda1= new Agenda();
		agenda1.setNombre("Javier");
		agenda1.setDireccion("mi casa");
		agenda1.setTelefono("9199999999");
		datos.add(agenda1);
		
		Agenda agenda2= new Agenda();
		agenda2.setNombre("Javier1");
		agenda2.setDireccion("mi casa1");
		agenda2.setTelefono("91999999991");
		datos.add(agenda2);
		
		Agenda agenda3= new Agenda();
		agenda3.setNombre("Javier2");
		agenda3.setDireccion("mi casa2");
		agenda3.setTelefono("91999999992");
		datos.add(agenda3);
		
		Agenda agenda4= new Agenda();
		agenda4.setNombre("Javier3");
		agenda4.setDireccion("mi casa3");
		agenda4.setTelefono("91999999993");
		datos.add(agenda4);
		
		Agenda agenda5= new Agenda();
		agenda5.setNombre("Javier4");
		agenda5.setDireccion("mi casa4");
		agenda5.setTelefono("91999999994");
		datos.add(agenda5);
		
		Agenda agenda6= new Agenda();
		agenda6.setNombre("Javier5");
		agenda6.setDireccion("mi casa5");
		agenda6.setTelefono("91999999995");
		datos.add(agenda6);
		
		
		
		return datos;
	}

}

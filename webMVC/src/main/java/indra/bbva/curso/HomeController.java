package indra.bbva.curso;
import java.util.GregorianCalendar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.GenericGroovyApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



/**
 * Handles requests for the application home page.
 */
@RestController
public class HomeController {

	

@RequestMapping(value="recibir.html",method = RequestMethod.POST)	

	public  Agenda recibir(  Agenda agenda) {
		
		System.out.println(agenda);
		Class clase= agenda.getClass();
		System.out.println(clase);
		for(int i=0;i<clase.getMethods().length;i++)
		{
			System.out.println(clase.getMethods()[i]);
		}
		System.out.println(agenda.getNombre());
		Agenda a = new Agenda();
		a.setNombre("mi nombreeeeee");
		a.setTelefono("9876543");
		return a;
	}
	

	

}

package indra.bbva.curso;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Controlador {
	@RequestMapping("/")
	public String inicio()
	{
		return "home";
	}
}

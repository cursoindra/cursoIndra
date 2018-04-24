package indra.bbva.curso.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import indra.bbva.curso.daos.IndraBookDao;
import indra.bbva.curso.datos.DatosPersonale;
import indra.bbva.curso.datos.Usuario;

@Service
public class IndraBookService {
	
	@Autowired
	private IndraBookDao indraBookDao;

	public IndraBookDao getIndraBookDao() {
		return indraBookDao;
	}

	public void setIndraBookDao(IndraBookDao indraBookDao) {
		this.indraBookDao = indraBookDao;
	}

	public DatosPersonale grabaUsuario(DatosPersonale datosPersonale) {
		return getIndraBookDao().grabaUsuario(datosPersonale);
		
		
	}

	public DatosPersonale getUsuario(Usuario usuario) throws Exception {
	
		return getIndraBookDao().getUsuario(usuario);
	}

}

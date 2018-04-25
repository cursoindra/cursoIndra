package indra.bbva.curso.daos;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import indra.bbva.curso.datos.DatosPersonale;
import indra.bbva.curso.datos.Role;
import indra.bbva.curso.datos.Usuario;

@Repository
public class IndraBookDao {

	@Autowired
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public DatosPersonale grabaUsuario(DatosPersonale datosPersonales) {
		Session session = getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		
		for (Role rol : datosPersonales.getUsuario().getRoles()) {
			session.saveOrUpdate(rol);
		}
		session.saveOrUpdate(datosPersonales.getUsuario());
		session.saveOrUpdate(datosPersonales);
		tx.commit();
		session.close();
		return datosPersonales;
	}

	
	
	
	public DatosPersonale getUsuario(Usuario usuario) throws Exception
	{
		Session session= getSessionFactory().openSession();
		Criteria criteria= session.createCriteria(DatosPersonale.class);
		criteria.add(Restrictions.isNotNull("usuario")).createCriteria("usuario").
		add(Restrictions.
				and(Restrictions.eq("usuario", usuario.getUsuario()),Restrictions.eq("clave", usuario.getClave())));
		DatosPersonale resultado=(DatosPersonale) criteria.uniqueResult();
		if(resultado==null)
			throw new Exception();
		session.close();
		return resultado;
	}
}








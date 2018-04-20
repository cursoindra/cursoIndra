package indra.curso.mvc;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Prueba {

	public static void main(String[] args) {
		
		
		Agenda agenda= new Agenda("pepe","989");
		agenda.setEdad(67);
		String resultado=agenda.dameTodo();
		System.out.println(resultado);
		
		
		// TODO Auto-generated method stub
		/*Agenda agenda= new Agenda();
		agenda.setNombre("pepe");
		agenda.setTelefono("987654");
		System.out.println(agenda.dameTodo());*/
		
		//Agenda agenda= new Agenda("pepe constructor", "98765 constructor");
		//System.out.println(agenda.dameTodo());
		
		/*try {
			Agenda agenda=Agenda.class.getConstructor().newInstance();
			Method metodoSetNombre=Agenda.class.getMethod("setNombre", String.class);
			metodoSetNombre.invoke(agenda, "pepe reflection");
			Method metodoSetTelefono=Agenda.class.getMethod("setTelefono", String.class);
			metodoSetTelefono.invoke(agenda, "98765 reflection");
			Method metodoFinal=Agenda.class.getMethod("dameTodo");	
			
			
			//String resultado=(String) metodoFinal.invoke(agenda);
			//System.out.println(resultado);
			
			Agenda  agenda= Agenda.class.getConstructor(String.class,String.class).newInstance("pepe constructor reflection","98765 constructor reflection");
			Method metodoFinal=Agenda.class.getMethod("dameTodo");
			String resultado=(String) metodoFinal.invoke(agenda);
			 System.out.println(resultado);
			 
			 
			 
			
		
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InstantiationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
	}

}

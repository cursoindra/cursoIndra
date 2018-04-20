package indra.curso.mvc;

import java.lang.annotation.Annotation;

public class Agenda {

	
	public Agenda() {
		// TODO Auto-generated constructor stub
	}
	public Agenda(String nombre,String telefono) {
		this.nombre=nombre;
		this.telefono=telefono;
	}
	
	private String nombre,telefono;
	private int edad;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	
	public String dameTodo()
	{
		try {
			int anotacionMin=Agenda.class.getMethod("getEdad").getAnnotation(Min.class).value();
			if(getEdad()<anotacionMin)
			{
				System.out.println("no puedes tener menos de 18 años");
				return null;
			}
			int anotacionMax=Agenda.class.getMethod("getEdad").getAnnotation(Max.class).value();
			if(getEdad()>=anotacionMax)
			{
				System.out.println("no puedes tener mas de "+anotacionMax+" años");
				return null;
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
		} 
		
		return getNombre()+" - "+getTelefono()+" - "+getEdad();
	}
	@Min(value=18)
	@Max(value=65)
	public int getEdad() {
		return edad;
	}
	
	
	public void setEdad(int edad) {
		this.edad = edad;
	}
	
	
}

class Datos_Personales{

	constructor(nombre,apellido1,apellido2,email,fechaNacimiento,usuario,imagen,id=0){
		
		this.id=id;
		this.nombre=nombre;
		this.apellido1=apellido1;		
		this.apellido2=apellido2;
		this.email=email;
		this.fechaNacimiento=fechaNacimiento;
		this.usuario=usuario;
		this.imagen=imagen;

	}

}

class Usuario{

	constructor(usuario,clave,rol,id=0){

		this.usuario=usuario;
		this.clave=clave;
		this.id=id;
		this.rol=rol;
	}
}

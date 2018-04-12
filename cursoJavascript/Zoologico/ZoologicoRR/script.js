var total;

function hayDineroArea(){
	total = precioArea + precioRecinto + precioAnimal;
	return hayDinero(total)
}

function hayDineroRecinto(cantidad){
	total = precioAnimal + precioRecinto + precioComida * cantidad * 7;
	return hayDinero(total)
}

function hayDineroAnimal(cantidad){
	total = precioAnimal + precioComida * cantidad * 7;
	return hayDinero(total)
}

function hayDinero(total){
	if (!(selectedZoo.dinero >= total)) 
		return false;
	return true;
}


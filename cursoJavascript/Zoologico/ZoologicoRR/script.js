var total;

function hayDineroArea(){
	total = precioArea + precioRecinto + precioAnimal;
	return hayDinero(total)
}

function hayDineroRecinto(){
	total = precioAnimal + precioRecinto;
	return hayDinero(total)
}

function hayDineroAnimal(cantidad){
	total = precioAnimal + precioComida * Math.floor(24/cantidad) * 7;
	return hayDinero(total)
}

function hayDinero(total){
	if (!(selectedZoo.dinero >= total)) 
		return false;
	return true;
}


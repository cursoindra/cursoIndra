<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type"
	content="text/html; charset=windows-1252">
<title></title>

<script type="text/javascript">
	var datos = {
		id : 0,
		usuario : "pepe",
		clave : "1234",
		roles : [ {
			id : 0,
			rol : "ROLE_USER"
		} ]
	}
	var response = {
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		url : '/curso1/dameUsuario.html',
		method : 'POST',
		body : datos

	}
	fetch(response).then(function(datos1) {
		console.log(datos1);
	})
</script>
</head>
<body>

<h1>dentro</h1>

</body>
</html>
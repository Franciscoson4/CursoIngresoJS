/*Soncini Francisco Div D
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value; 
	nombreIngresado = document.getElementById('txtIdNombre').value;
	nombreIngresado=txtIdNombre.value;
	alert("Su nombre es: " + nombreIngresado);

}

//ingresar datos mediante ID
 
//recordar no olvidar el .value
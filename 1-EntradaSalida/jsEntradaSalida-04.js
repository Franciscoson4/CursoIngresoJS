/* 
Debemos lograr tomar un dato por 'prompt' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombreIngresado; //lowerCamelCase
	
	nombreIngresado = prompt("Ingrese su nombre");  //tomo dato por prompt
	
	txtIdNombre.value=nombreIngresado
	//document.getElementById("txtIdNombre").value = nombreIngresado; // muestro por Id ambas son correctas

}

//txtIdNombre
//nombreIngresado=txtIdNombre.value;
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
var nombre; 
var edad;

nombre = document.getElementById('txtIdNombre').value;

edad = document.getElementById('txtIdEdad').value;

alert("Usted se llama: "+ nombre +   " y tiene:" + edad + " años");

}

/*
recordar inspeccionar Id´s
puntos y comas pq te matan
"espacio y empiezo a escribir"
tip: probar con alert si los Id llegan al programa antes de concatenar
*/


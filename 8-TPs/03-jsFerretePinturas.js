/*Soncini Francisco Div D
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
	var cambioDeUnidad;

	temperaturaIngresada=document.getElementById('txtIdTemperatura').value;
	temperaturaIngresada=parseInt(temperaturaIngresada);

	cambioDeUnidad=(temperaturaIngresada-32)/1.8;

	alert(temperaturaIngresada+"° Fahrenheit son "+cambioDeUnidad+"° Centígrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
	var cambioDeUnidad;

	temperaturaIngresada=document.getElementById('txtIdTemperatura').value;
	temperaturaIngresada=parseInt(temperaturaIngresada);

	cambioDeUnidad=(temperaturaIngresada*1.8)+32;

	alert(temperaturaIngresada+"° Centígrados son "+cambioDeUnidad+"° Fahrenheit");
}


//txtIdTemperatura





/*
Concatenatr mensajes
var mesaje
mensaje= temperaturaIngresada+"° Centígrados son "
mensaje= mensaje + cambioDeUnidad+"° Fahrenheit";
alert(mensaje)
*/
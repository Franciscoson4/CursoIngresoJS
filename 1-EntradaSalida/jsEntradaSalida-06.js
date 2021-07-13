/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);//el proceso se llama parseo
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;

	alert("La suma es:" + resultado);
}



/*
parseInt: permite transformar una cadena en un valor numerico.
Toda variable no asignada resulta como undefined
¡¡¡¡¡NO OLVIDAR .value!!!!!
*/

//txtIdNumeroUno
//txtIdNumeroDos
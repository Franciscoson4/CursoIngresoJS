/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
	var precioProductoUno;	
	var precioProductoDos;
	var precioProductoTres;
	var precioFinal;

	precioProductoUno = document.getElementById('txtIdPrecioUno').value;
	precioProductoDos =	document.getElementById('txtIdPrecioDos').value;
	precioProductoTres = document.getElementById('txtIdPrecioTres').value;

	precioProductoUno = parseFloat(precioProductoUno);
	precioProductoDos = parseFloat(precioProductoDos);
	precioProductoTres = parseFloat(precioProductoTres);

	precioFinal = precioProductoUno + precioProductoDos + precioProductoTres;
	
	alert(precioFinal).toFixed(2);
}

function Promedio () 
{

	var precioProductoUno;	
	var precioProductoDos;
	var precioProductoTres;
	var precioFinal;

	precioProductoUno = document.getElementById('txtIdPrecioUno').value;
	precioProductoDos =	document.getElementById('txtIdPrecioDos').value;
	precioProductoTres = document.getElementById('txtIdPrecioTres').value;

	precioProductoUno = parseFloat(precioProductoUno);
	precioProductoDos = parseFloat(precioProductoDos);
	precioProductoTres = parseFloat(precioProductoTres);

	precioFinal = (precioProductoUno+precioProductoDos+precioProductoTres) / 3;

	alert(precioFinal).toFixed(2);	
}


function PrecioFinal () 
{
	var precioProductoUno;	
	var precioProductoDos;
	var precioProductoTres;
	var PrecioFinal;
	var precioIva;

	precioProductoUno = document.getElementById('txtIdPrecioUno').value;
	precioProductoDos =	document.getElementById('txtIdPrecioDos').value;
	precioProductoTres = document.getElementById('txtIdPrecioTres').value;

	precioProductoUno = parseFloat(precioProductoUno);
	precioProductoDos = parseFloat(precioProductoDos);
	precioProductoTres = parseFloat(precioProductoTres);

	precioFinal = precioProductoUno+precioProductoDos+precioProductoTres;

	precioIva = precioFinal*21/100;

	alert(precioFinal-precioIva).toFixed(2);
}
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importeSueldo;
	var aumento;
	var resultado;
	
	importeSueldo = document.getElementById('txtIdSueldo').value;
	importeSueldo = parseFloat(importeSueldo);

	//aumento = importeSueldo * 0.1;
	aumento = importeSueldo *10 /100;

	resultado = importeSueldo + aumento;

	document.getElementById('txtIdResultado').value = resultado.toFixed(2);


/*
otra forma sin variable aumento

	resultado= importeSueldo '1.1;

*/
}
//txtIdSueldo
//txtIdResultado


/*
que entra?
	importe del sueldo
que proceso?
	agregarle 10%
que sale?
	impore con el aumento
*/

//parsefloat es igual a parseint pero con decimales incluidos
//toFixed(cantidad de comas q quiero)
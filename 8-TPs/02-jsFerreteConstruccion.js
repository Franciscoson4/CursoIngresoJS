/* Soncini Francisco Div D
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;	
	var anchoTerreno;
	var perimetroRectangulo;

	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

	perimetroRectangulo = (largo + ancho) *6;

	alert(perimetroRectangulo.toFixed(2));
}	

function Circulo () 
{
	var radioTerreno;
	var perimetroCirculo;

	radioTerreno = document.getElementById('txtIdRadio').value;

	radioTerreno = parseFloat(radioTerreno);

	perimetroCirculo = 2 * 3.14 * radioTerreno;

	alert(perimetroCirculo.toFixed(2));
}

function Materiales () 
{
	var bolsasDeCemento;
	var bolsasDeCal;
	var totalBolsasCemento;
	var totalBolsasCal
	var largoTerreno;	
	var anchoTerreno;
	var perimetroRectangulo;

	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

	perimetroRectangulo = (largo + ancho) *2;
	
	bolsasDeCemento = 2;
	bolsasDeCal = 3;

	totalBolsasCemento = bolsasDeCemento * perimetroRectangulo;
	totalBolsasCal = bolsasDeCal * perimetroRectangulo;

	alert(" Necesita "+totalBolsasCemento+" bolsas de cemento "+" y "+totalBolsasCal+" bolsas de cal ");
}


//txtIdLargo
//txtIdAncho
//txtIdRadio
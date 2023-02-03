/* Robledo Micaela Div. D Grupo 3 Ej 3 */
/* Ejercicio integrador clase 2: se ingresará por id el valor 
de una compra de productos para el hogar. 
Se deberá agregar el iva (21%) y  luego 
se deberá restar el 5% en concepto de compra mayorista. 
El programa deberá mostrar por alert importe bruto, el iva, 
el importe con iva, el valor del descuento y el total a pagar.
*/

function mostrar()
{
	var valorDeCompra;
	var importeConIva;
	var valorDeIva;
	var totalAPagar;
	var descuentoMayorista;
	var importeBruto;

	valorDeCompra = document.getElementById("txtIdValorDeCompra").value;
	valorDeCompra = parseFloat(valorDeCompra);

    importeBruto = valorDeCompra;
	valorDeIva = valorDeCompra * 0.21;
	importeConIva = valorDeCompra + valorDeIva;
	descuentoMayorista = importeConIva * 0.05;
	totalAPagar = importeConIva - descuentoMayorista

	alert(" Importe bruto: " + importeBruto + "\n Valor de IVA: " + valorDeIva + "\n Importe con IVA: " + importeConIva + "\n Descuento: " + descuentoMayorista + "\n Importe total: " + totalAPagar);

}

//txtIdValorDeCompra














/*
function mostrar()
{
	var nombre;
	nombre = document.getElementById("txtIdNombre").value;
    alert(nombre)
}

*/

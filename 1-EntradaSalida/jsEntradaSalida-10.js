/* Robledo Micaela Div. D Grupo 3 Ej 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe
	var resultadoConDescuento
	var porcentajeDeDescuento

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe)
	porcentajeDeDescuento = importe * 25/100;

	resultadoConDescuento = importe - porcentajeDeDescuento

	document.getElementById("txtIdResultado").value = resultadoConDescuento

}
// txtIdImporte
// txtIdResultado

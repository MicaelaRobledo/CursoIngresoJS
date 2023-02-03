/* Robledo Micaela Div. D Grupo 3 Ej 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentajeDeAumento;
	var resultadoConAumento;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo);
	porcentajeDeAumento = sueldo * 10/100;
	//porcentajeDeAumento = sueldo * 1/10;
	//porcentajeDeAumento = sueldo * 0.1;

	sueldoConAumento = sueldo + porcentajeDeAumento

	document.getElementById("txtIdResultado").value = sueldoConAumento;



}
 // txtIdSueldo
//txtIdResultado

/* Robledo Micaela Div. D Grupo 3 Ej 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var unNumero;
	var otroNumero;

	unNumero = document.getElementById("txtIdNumeroUno").value;
	otroNumero = document.getElementById("txtIdNumeroDos").value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	suma = unNumero + otroNumero;

	alert("La suma es: " + suma);

}

/*
txtIdNumeroUno
txtIdNumeroDos */

/*
operadores aritmeticos
+ , -, *, /, %

operadores relacionales 
<, >, <=, >=, == , |=

operadores logicos

&&, ||, 

 - parseInt transforma una cadena en un valor numerico
 - parseFloat se usa para numeros con coma

 SIEMPRE QUE HAYA QUE INGRESAR NUMEROS HAY QUE PARSEAR

*/

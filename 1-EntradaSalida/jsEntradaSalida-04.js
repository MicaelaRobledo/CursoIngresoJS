/*  Robledo Micaela Div. D Grupo 3 Ej 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{ var nombre;
   nombre = prompt("ingrese su nombre");
   document.getElementById("txtIdNombre").value = nombre;

}
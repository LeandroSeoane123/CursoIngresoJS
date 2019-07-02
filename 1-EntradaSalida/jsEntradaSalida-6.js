/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numero1;
var numero2;
var convierte1;
var convierte2;
var resultado;

 numero1 = document.getElementById("numeroUno").value;
 numero2 = document.getElementById("numeroDos").value;

 convierte1 = parseInt(numero1);
 convierte2 = parseInt(numero2);
 
 resultado = (convierte1+convierte2);

 alert ("La suma es "+resultado);

}


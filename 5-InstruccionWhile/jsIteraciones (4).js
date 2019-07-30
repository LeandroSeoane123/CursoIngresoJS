function mostrar()
{

	var numero = parseInt(prompt("Ingrese un número entre 0 y 10."));

	while (numero > 10 || numero < 0 || isNaN(numero)) {

		numero = parseInt(prompt("La clave es incorrecta, reingrese un numero entre 0 y 10."));

	}
document.getElementById("Numero").value=numero
}//FIN DE LA FUNCIÓN
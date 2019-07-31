function mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var suma = 0;
	

	while (respuesta){
	numero = parseInt(prompt("Ingrese un numero"));
acumulador = acumulador + numero;
respuesta = confirm("¿Quiere seguir sumando numeros?");
contador = contador +1;
}

/*	
while (respuesta != "no"){

do{
	numero=parseInt(prompt("Ingrese un numero"));

}while (isNaN(numero));
suma = suma + numero;
contador = contador + 1;
*/

}
  



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
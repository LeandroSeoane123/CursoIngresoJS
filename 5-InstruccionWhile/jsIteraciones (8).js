function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while (respuesta){
		numero = parseInt(prompt("Ingrese un numero"));
		if(numero >=0){
			positivo = positivo + numero;
		}
		else{
			negativo = negativo * numero;
		}
	respuesta = confirm("¿Quiere seguir sumando numeros?");
	contador = contador + 1;
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
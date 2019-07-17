function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
		numero = Math.floor(Math.random()* (11-1)) + 1;

		if (numero>= 9)
		alert ("La nota es EXCELENTE, usted saco "+numero);
		else 
		if (numero>=4)
		alert ("Usted esta APROBADO, usted saco "+numero);
		else 
		alert ("Vamos, la proxima se puede, usted saco "+numero );


}//FIN DE LA FUNCIÓN
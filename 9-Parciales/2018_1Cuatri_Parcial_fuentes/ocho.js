function mostrar()
{

 var letra;
 var numero;
 var continuar;
 var contadorPares = 0;
 var contadorImpares = 0;
 var contadorCeros = 0;
 var acumuladorPos = 0;
 var contadorPos = 0;
 var acumuladorNeg = 0;
 var promedioPos;
 var numMax;
 var numMin;
 var letraMax;
 var letraMin;
 var flag = 0;
 
 do{
    
    letra = prompt("Ingrese una letra.");

    while(!(isNaN(letra))){

        letra = prompt("La letra que ingreso es invalida o no es una letra, por favor reingrese una letra");

    }
    
    numero = parseInt(prompt("Ingrese un numero entre -100 o 100."));
    
    while(isNaN(numero) || numero < -100 || numero > 100){

        numero = prompt("El numero que ingreso es invalido o no es un numero, por favor reingrese un numero entre -100 y 100");

    }
    
    if(numero > 0){
   
        acumuladorPos = acumuladorPos + numero;
        contadorPos = contadorPos + 1;

    }
   
    else if(numero < 0){

        acumuladorNeg = acumuladorNeg + numero;

    }
    
    if(numero % 2 == 0 && numero != 0){
        
        contadorPares++
    }
    else if (numero == 0){
        
        contadorCeros++
    
    }
    else{
        
        contadorImpares++
    
    }
    
    if (flag == 0){

        flag = 1
        numMax = numero;
        numMin = numero;
        letraMax = letra;
        letraMin = letra;

    }

    if(numero > numMax){

        numMax = numero;
        letraMax = letra;

    }
    
    if (numero < numMin){

        numMin = numero;
        letraMin = letra;

    }

continuar = confirm("¿Quiere seguir ingresando datos?")

 }while(continuar);
 
 promedioPos = acumuladorPos / contadorPos;

 document.write ("La cantidad de números pares es " + contadorPares + "<br>");
 document.write ("La cantidad de números impares es " + contadorImpares + "<br>");
 document.write ("La cantidad de ceros es " + contadorCeros + "<br>");
 document.write (" El promedio de todos los números positivos ingresados es " + promedioPos + "<br>");
 document.write ("La suma de todos los números negativos es " + acumuladorNeg + "<br>");
 document.write ("El número maximo es " + numMax + " y la letra del máximo es  " + letraMax + "<br>");
 document.write ("El número minimo es " + numMin + " y la letra del minimo es  " + letraMin + "<br>");

}



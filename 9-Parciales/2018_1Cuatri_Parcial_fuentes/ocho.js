function mostrar()
{

 var letra;
 var numero;
 var contador;
 var continuar;
 var contadorPares = 0;
 var contadorImpares = 0;
 var contadorCeros = 0;
 var numPos;
 var numNeg;
 var promedio;
 var numMax;
 var numMin;
 var letraMax;
 var letraMin;

 
 do{
    letra = prompt("Ingrese una letra.");
    numero = parseInt(prompt("Ingrese un numero entre -100 o 100."));
    while(isNaN(numero) || numero < -100 || numero > 100){

        numero = prompt("Usted ingreso un numero mayor a 100, menor a -100 y no ingreso un numero, por favor intentelo nuveamente.");

    }
    if(numero % 2 == 0 && numero != 0){
        contadorPares = contadorPares + 1;
    }
    else if (numero == 0){
        contadorCeros = contadorCeros + 1
    }
    else{
        contadorImpares = contadorImpares + 1
    }









   



continuar = confirm("¿Quiere seguir ingresando datos?")
 }while(continuar);
 


 document.write ("pares" + contadorPares + "<br>");
 document.write ("impares" + contadorImpares + "<br>");
 document.write ("ceros" + contadorCeros + "<br>");




}



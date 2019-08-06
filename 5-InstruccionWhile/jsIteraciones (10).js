function mostrar()
{

var numero;
var acumuladorp=0;
var acumuladorn=0;
var contadorp=0;
var contadorn=0;
var contadorneutro=0;
var contadorpares=0;
var promediop;
var promedion;
var diferencia;
var seguir = true;

while(seguir){
numero = parseInt(prompt("Ingrese un numero"));
if(numero >0) {
acumuladorp = acumuladorp + numero;
contadorp = contadorp + 1;
}
else if (numero < 0)  {
acumuladorn = acumuladorn + numero;
contadorn = contadorn + 1;
}
else {
contadorneutro = contadorneutro + 1;
}
if (numero %2 == 0){  
contadorpares = contadorpares + 1;
} 


seguir = confirm("¿Desea continuar?")
}

if (contadorp != 0){  
promediop = acumuladorp/contadorp;
} 
if (contadorn != 0){  
promedion = acumuladorn/contadorn;
} 

diferencia = acumuladorp - acumuladorn;

document.write ("1-Suma de los negativos: "+ acumuladorn + "<br>");
document.write ("2-Suma de los positivos: "+ acumuladorp + "<br>");
document.write ("3-Cantidad de positivos: "+ contadorp + "<br>");
document.write ("4-Cantidad de negativos:  "+ contadorn + "<br>");
document.write ("5-Cantidad de ceros: "+ contadorneutro + "<br>");
document.write ("6-Cantidad de números pares: "+ contadorpares + "<br>");
document.write ("7-Promedio de positivos: "+ promediop + "<br>");
document.write ("8-Promedios de negativos: "+ promedion + "<br>");
document.write ("9-Diferencia entre positivos y negativos: "+ diferencia + "<br>");






}//FIN DE LA FUNCIÓN
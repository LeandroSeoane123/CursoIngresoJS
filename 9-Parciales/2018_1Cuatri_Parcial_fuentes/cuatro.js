function mostrar()
{
var numero1;
var numero2;
var resta;
var suma;

numero1 = parseInt(prompt("Ingrese un numero"));
numero2 = parseInt(prompt("Ingrese otro numero"));

if(numero1 == numero2){

    alert ("El primer numero es "+numero1 + " y el segundo numero es "+numero2);
}
else if(numero1 > numero2){

    resta = numero1 - numero2;

    alert("La resta de los numeros es "+resta);

}
else{

    suma = numero1 + numero2;
    if(suma > 10){
        alert ("La suma es "+suma+" y supero el 10");
    }
     else{

        alert ("La suma de los numeros es "+suma);

     }
   
}
}

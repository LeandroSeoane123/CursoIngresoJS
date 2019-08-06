function mostrar()
{
var numero;
var contador = 0;
numero = parseInt(prompt("Ingrese un numero"));

for(var i = 0; i < numero; i++){
if(i %2 == 0){
    console.log  (numero);
}
contador = contador + 1
}
console.log ("La cantidad de numeros es " + contador)



}//FIN DE LA FUNCIÓN
 function mostrar()
{

/*
    var sexo = prompt("Ingrese su sexo, f ó m .");

while (sexo != "f" && sexo != "m" && sexo != "F" && sexo != "M"){

    sexo = prompt("La letra ingresada no corresponde a ningun sexo, por favor reingrese f o m");


}
document.getElementById('Sexo').value=sexo;
*/

for (var sexo = prompt("Ingrese su sexo, f ó m .");sexo != "f" && sexo != "m" && sexo != "F" && sexo != "M"; sexo = sexo){

    sexo = prompt("La letra ingresada no corresponde a ningun sexo, por favor reingrese f o m");
}


document.getElementById('Sexo').value=sexo;



}//FIN DE LA FUNCIÓN
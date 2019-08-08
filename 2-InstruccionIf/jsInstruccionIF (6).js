function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value; 

if (edad >= 18) {
    
    alert ("La persona es adulta");
}
else if (edad >= 13){

    alert ("La persona es adolescente");

}


else{

    alert ("La persona es un niño");

}


}//FIN DE LA FUNCIÓN
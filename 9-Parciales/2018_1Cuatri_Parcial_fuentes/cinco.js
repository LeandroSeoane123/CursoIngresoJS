function mostrar()
{
var planeta;

planeta = prompt("Ingrese un planeta");

switch(planeta){

    case "tierra":
        alert("Aca vivimos");
        break;

    case "mercurio":
        alert("Aca hace mas calor");
        break;
    
    case "venus":
        alert("Aca hace mas calor");
        break;

    case "marte":
        alert("Aca hace mas frio");
        break;
    
    case "jupiter":
        alert("Aca hace mas frio");
        break;

    case "saturno":
       alert("Aca hace mas frio");
       break;

    case "urano":
       alert("Aca hace mas frio");
       break;

    case "neptuno":
       alert("Aca hace mas frio");
       break;
       
    default:
        alert("El planeta ingresado no es valido");
        break;

}
}

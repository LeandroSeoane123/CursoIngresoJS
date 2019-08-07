function mostrar()
{
var hora;

hora = document.getElementById("laHora").value;


switch(hora){  
case "6":
alert("Es de mañana");
break;
case "7":
alert("Es de mañana");
break;
case "8":
alert("Es de mañana");
break;
case "9":
alert("Es de mañana");
break;
case "10":
alert("Es de mañana");
break;
case "11":
alert("Es de mañana");
break;
case "12":
alert("Es de tarde");
break;
case "13":
alert("Es de tarde");
break;
case "14":
alert("Es de tarde");
break;
case "15":
alert("Es de tarde");
break;
case "16":
alert("Es de tarde");
break;
case "17":
alert("Es de tarde");
break;
case "18":
alert("Es de tarde");
break;
case "19":
alert("Es de tarde");
break;
default: if(hora > 24 || isNaN(hora)){
    alert("La hora ingresada no es valida");
    break;
}
else{
    alert("Es de noche, a dormir");
    break;
}



}
}

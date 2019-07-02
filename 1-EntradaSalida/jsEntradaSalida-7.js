/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
{	
    var numero1;
    var numero2;
    var convierte1;
    var convierte2;
    var resultadosuma;
    var resultadoresta;
    var resultadomult;
    var resultadodiv;

function sumar()
{	
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    
    convierte1 = parseInt(numero1);
    convierte2 = parseInt(numero2);

    resultadosuma = (convierte1+convierte2);
    alert ("La suma es "+resultadosuma);
	
}

function restar()
{
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    
    convierte1 = parseInt(numero1);
    convierte2 = parseInt(numero2);

	resultadoresta = (convierte1-convierte2);
    alert ("La resta es "+resultadoresta);
}

function multiplicar()
{ 
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    
    convierte1 = parseInt(numero1);
    convierte2 = parseInt(numero2);

	resultadomult = (convierte1*convierte2);
    alert ("La multiplicacion es "+resultadomult);
}

function dividir()
{
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    
    convierte1 = parseInt(numero1);
    convierte2 = parseInt(numero2);

	resultadodiv = (convierte1/convierte2);
    alert ("La division es "+resultadodiv);
}

}

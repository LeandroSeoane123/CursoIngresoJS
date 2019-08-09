function mostrar()
{

    var marca;
    var temperatura;
    var peso;
    var continuar;
    var contadorPares = 0;
    var contadorPeso = 0;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contadorMenosCero = 0;
    var pesoMax;
    var pesoMin;
    var marcaMax;
    var flag = 0;
    
    do{
       
       marca = prompt("Ingrese una marca.");
   
       while(!(isNaN(marca))){
   
           marca = prompt("La marca que ingreso es invalida o no es una letra, por favor reingrese una marca");
   
       }

       peso = parseInt(prompt("Ingrese un peso entre 1 o 100."));
       
       while(isNaN(peso) || peso < 1 || peso > 100){
   
           peso = parseInt(prompt("El peso que ingreso es invalido o no es un numero, por favor reingrese un peso entre 1 y 100"));
   
       }

       acumuladorPeso = acumuladorPeso + peso;
       
       contadorPeso = contadorPeso + 1;
       
       temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento del producto"));

       while(isNaN(temperatura) || temperatura > 30 || temperatura < -30){

          temperatura = parseInt(prompt("La temperatura ingresada es invalida, por favor reingrese la temperatura"));

       }
      
       if(temperatura < 0){
   
           contadorMenosCero++
   
       }
       
       if(temperatura % 2 == 0 && temperatura != 0){
           
           contadorPares++

       }
       
       if (flag == 0){
   
           flag = 1
           pesoMax = peso;
           pesoMin = peso;
           marcaMax = marca;
           marcaMin = marca;
   
       }
   
       if(peso > pesoMax){
   
           pesoMax = peso;
           marcaMax = marca;
   
       }
       
       if (peso < pesoMin){
   
           pesoMin = peso;
           marcaMin = marca;
   
       }
   
   continuar = confirm("¿Quiere seguir ingresando datos?")
   
    }while(continuar);
    
    promedioPeso = acumuladorPeso / contadorPeso;
   
    document.write ("La cantidad de temperaturas pares es " + contadorPares + "<br>");
    document.write (" La marca del producto más pesado es " + marcaMax + "<br>");
    document.write ("La cantidad de productos que se conservan a menos de 0 grados es " + contadorMenosCero + "<br>");
    document.write ("El promedio del peso de todos los productos es " + promedioPeso + "<br>");
    document.write ("El peso máximo es " + pesoMax + " y el peso mínimo es " + pesoMin + "<br>");

}

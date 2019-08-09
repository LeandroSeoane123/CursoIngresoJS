function mostrar()
{
    var nota;
    var sexo;
    var contador = 0;
    var acumulador = 0;
    var promedio;
    var flag = 0;
    var minimo;
    var sexoMinimo;
    var acumuladorVaronNota6 = 0;
   


    while(contador < 5){
      
        nota = parseInt(prompt("Ingrese una nota"));
        
        while(nota < 0 || nota > 10 || isNaN(nota)){
            nota = parseInt(prompt("La nota que ingreso es invalida, reingrese una nota"));
        }
        
        sexo = prompt("Ingrese un sexo");
        
        while(sexo != "f" && sexo != "m" ){
            sexo = prompt("El sexo ingresado es incorrecto, reingrese un sexo");
        }

        if(flag == 0){
            flag = 1;
            minimo = nota;
            sexoMinimo = sexo;
            
         }
        if (nota >= 6 && sexo == "m"){
            acumuladorVaronNota6++;
         }
         
       if (nota < minimo){
             minimo = nota;
             sexoMinimo = sexo;
        
         }

        contador++;
        
        acumulador = acumulador + nota;

        promedio = acumulador / contador;

    }

    alert("El promedio de todas las notas es "+promedio);
    alert ("La nota más baja es "+minimo+" y su sexo es "+sexoMinimo);
    alert ("La cantidad de varones cuya nota es mayor o igual a 6 es "+acumuladorVaronNota6);

}

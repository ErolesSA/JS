/*Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array que contenga todos los números desde inicio hasta (e incluyendo) final.*/
/*Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que indique el valor de “paso” utilizado para cuando construyas el array. Si no se da ningún paso, los elementos suben en incrementos de uno, correspondiedo al comportamiento anterior. La llamada a la función rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también funcione con valores de pasos negativos para que rango(5, 2, -1) produzca [5, 4, 3, 2].*/ 

function rango(a, b, c){
    
    let sum =0

    if (c != null){
        for(let i = a; i <= b; i +=c){
            sum += i;
    }
    } else {
        for(let i = a; i <= b; i++){
            sum += i;
    }  
}
 return sum; 
}

rango(1, 10, 2);

/*Revirtiendo un array
Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y produce un nuevo array que tiene los mismos elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: modifica el array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.

*/

function reverseArray(array){
    var salida = [];
    for (var i = array.length - 1; i >= 0; i--){
        salida.push(array[i]);
    }

    return salida;
}

var ejem = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(ejem));
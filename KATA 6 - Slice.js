/* K6
        Crea una función que reciba un array de números, la posición inicial 
        y final del nuevo array (opcional), y devuelva el nuevo array.

        Ejemplo 1: ([1, 2, 3], 0, 1) // => [1]
        Ejemplo 2: ([1, 2, 3], 1) // => [2,3]
*/ 

function recortarArray(arrNumeros, inicio, fin){
  
  if(fin === undefined) fin = arrNumeros.length;        
  return arrNumeros.slice(inicio, fin);
}

console.log(recortarArray([0,1,2,3,4,5,6,7,8,9,10], 2, 4))

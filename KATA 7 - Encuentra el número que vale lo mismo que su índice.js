/* KATA 7 - Encuentra el número que vale lo mismo que su índice
    Crea una función que  reciba un array de números y 
    devuelva los números que coinciden con su posición en el array.

    Ejemplos:
        [1,2,5,3] → Devuelve [3] que se encuentra en la posición 3 del array
        [1,5,20,4,16,8,6] → Devuelve [6] que se encuentra en la posición 6 del array
        [10,1,20,3,16,8,10] → Devuelve [1,3] ya que ambos coinciden.
*/ 

function posicionValorIguales(arrNumeros){
  
  let coincide = [];
  
  arrNumeros.forEach(
    x => {
      if(x === arrNumeros.indexOf(x)) coincide.push(x)
    }  
  );
  
  return coincide;
}

console.log(posicionValorIguales([1,2,5,3]))
console.log(posicionValorIguales([1,5,20,4,16,8,6]))
console.log(posicionValorIguales([10,1,20,3,16,8,10]))
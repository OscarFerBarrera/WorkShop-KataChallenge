/* KATA 3
        Crea una función que reciba como argumento un array de números 
        y devuelva aquel que aparecen únicamente un número impar de veces.

        Ejemplos: 

            [1]         → Devuelve el número 1, ya que aparece una única vez
            [3,3,5]     → Devuelve el 5, ya que aparece 1 vez.
            [2,1,1,2,2] → Devuelve 2, ya que aparece 3 veces*/

function contarImparArray(arrNumeros){
  
  let acumulador=[];
  let contadores=[];
  let resultado=0;
  
  arrNumeros.forEach(
    x => {
      // console.log(x)
      if(!acumulador.includes(x)){
        acumulador.push(x)
        contadores.push(1)
      } else {
        let idx = acumulador.indexOf(x)
        contadores[idx] += 1; 
      }  
    }
  );
  // console.log (contadores);
  // console.log(acumulador);
  contadores.forEach(
    function(x){
      if(x %2 !=0){resultado = contadores.indexOf(x)}
    }

  );
  return acumulador[resultado];
}
console.log(contarImparArray([3,3,5]));
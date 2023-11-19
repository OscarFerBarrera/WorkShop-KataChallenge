    /* KATA 2
    Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.
        
        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.*/

function sumaMultiplos(limite){
  
  let acumulador = [];
  
  for (let x = 1; x < limite; x++) {

    let resultado = 3 * x;
    if(resultado < limite && !acumulador.includes(resultado)) acumulador.push(resultado);
    
    resultado = 5 * x;
    if(resultado < limite && !acumulador.includes(resultado)) acumulador.push(resultado);
  }
  
    let total ={
      suma: acumulador.reduce((a,b) => a + b, 0),
      listado: acumulador
    };
  
  return total;
}

console.log(sumaMultiplos(20));

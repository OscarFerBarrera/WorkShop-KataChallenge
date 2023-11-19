/* KATA 1
        Crear una función que devuelva el número de vocales 
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/

const palabra = "hoy es el dia de la marmota";
let contador = 0;

function contarVocales(frase){
    frase.toLowerCase().split("").forEach(x => { 
    if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u")
        contador++;
})
  return contador;
}

console.log(contarVocales(palabra));
/* K5 Crea una función que reciba una serie de arrays como argumentos y devuelva uno único ordenado.
    
    Ejemplo: 
        Recibe: 
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'], 
            ['Vinicius', 'Kane'])  
        Devuelve: 
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi', 
            'Neymar', 'Vinicius']   */

const arrDelanteros = [['Cristiano', 'Messi'], ['Neymar', 'Mbappe', 'Benzema'], ['Vinicius', 'Kane']];

function ordenaDelanteros(delanteros){
  
  let auxDelanteros = [];
  
  delanteros.forEach(x =>{ x.forEach(y => {auxDelanteros.push(y)})});
  
  return auxDelanteros.sort();
}
console.log(ordenaDelanteros(arrDelanteros));

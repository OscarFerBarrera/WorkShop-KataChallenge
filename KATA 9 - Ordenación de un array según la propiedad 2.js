/* KATA 9 - Ordenación de un array según la propiedad
        Crea una función que reciba la lista de regalos de los reyes magos 
        y la ordene según la propiedad elegida.

        Ejemplo:        
            Entrada: 
                    ([{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Lego’, categoria:’construcción’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }], ‘nombre’);

            Salida:
                    [{nombre: ‘Barbie’, categoria: ‘muñecas’ },
                    {nombre: ‘Fifa2023’, categoria:’videojuego’ }
                    {nombre: ‘Lego’, categoria:’construcción’ }]
*/ 

const arrJugetes= ([{nombre: 'Barbie', categoria: 'munecas'}, 
                    {nombre: 'Lego', categoria:'construccion' },
                    {nombre: 'Fifa2023', categoria:'videojuego'}]);

function ordenarJugetes(jugetes, orden = 'nombre'){

  let propiedad = orden;
  
  if (!(propiedad === 'nombre' || propiedad === 'categoria')){ propiedad = 'nombre'}
  
  let arrAux = jugetes.sort(function (x, y) {

    if (x[propiedad] > y[propiedad]) {
      return 1;
    }
    if (x[propiedad] < y[propiedad]) {
      return -1;
    }
    return 0;
  });
    return arrAux;
}
console.log(ordenarJugetes(arrJugetes));
console.log(ordenarJugetes(arrJugetes, 'nombre'));
console.log(ordenarJugetes(arrJugetes, 'categoria'));
console.log(ordenarJugetes(arrJugetes, 'otracosa'));
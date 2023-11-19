/* 
        Crea una función que reciba un listado de jugadores con el número de 
        billetes de cada cantidad que tienen y devuelva el jugador con más dinero. 

        No habrá más de un jugador que tenga el mayor número de billetes

        Ejemplo:
       Entrada:
            [{nombre: ‘Pedro’, billetesDe5: 10, billetesDe10: 3, billetestDe50: 1 },
            {nombre: ‘Luis’, billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 },
                {nombre: ‘Gon’, , billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 },];

            Salida:
                Gon
*/ 
const arrJugadores =[{nombre: 'Pedro', billetesDe5: 10, billetesDe10: 3, billetestDe50: 1 },
                     {nombre: 'Luis', billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 }, 
                     {nombre: 'Gon', billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 }];

function contarDinero(listaJugadores){
  
  let jugador= [];
  
  listaJugadores.forEach(
    x => {
      jugador.push({nombre:x.nombre, numeroBilletes: (x.billetesDe5 + x.billetesDe10 + x.billetestDe50) })
    }  
  );
  
  jugador.sort(((a, b) => b.numeroBilletes - a.numeroBilletes));
  
  console.log(jugador)
  return jugador[0].nombre;
}

console.log(contarDinero(arrJugadores))
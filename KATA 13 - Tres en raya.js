/* 
    Crea una función que recibiendo un resultado del tablero del 3 en raya, 
    indique si algún jugador ha ganado la partida. Asumimos que recibimos 
    un tablero válido

            - 0 - Hueco en blanco
            - 1 - Jugador 1
            - 2 - Jugador 2

    La función devolverá:
        - -1 si nadie ha ganado todavía y el tablero tiene huecos por rellenar
        - 1 si el jugador 1 ha ganado
        - 2 si el jugador 2 ha ganado
        - 0 nadie ha ganado

    Ejemplo:
        Entrada:    
        [  [ 0, 2, 1],
           [ 0, 1, 2],
           [ 2, 1, 0] ]

        Salida: -1
*/ 
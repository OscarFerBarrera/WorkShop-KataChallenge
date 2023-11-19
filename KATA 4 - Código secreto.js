/* KATA 4
        Crea una función que reciba como parámetro un string y devuelva otro, 
        remplazando las letras por su posición en el alfabeto.

        Si algún caracter no se encuentra, simplemente lo ignoramos.
*/

const alfabeto= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function cifrarMensaje(mensaje){
  
  let mensajeCifrado=[];
  
  let msm = mensaje.split('').forEach(
    
    function(x){
      
      if( x != ' ') mensajeCifrado.push(alfabeto.indexOf(x) + 1)
    }
  );

  // let msm = alfabeto.indexOf('a') + 1;
  return mensajeCifrado.join();
}

console.log(cifrarMensaje("ana ama a mama"));
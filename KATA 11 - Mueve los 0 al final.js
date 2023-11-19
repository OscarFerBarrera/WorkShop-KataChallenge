/* 
    Crea una función que reciba un listado y mueva todos los 0 al final, 
    manteniendo el orden del resto de elementos.

    Ejemplo:
       Entrada: [1,0,true,0,’hola’, 5, 30, ‘a’]
       Salida: [1,true,’hola’, 5, 30, ‘a’,0,0]
*/ 

function llevarCerosAlFinal(lista){
   
  let arrAux = lista.filter((x) => x !== 0);
  
  lista.forEach(x => {if(x === 0) arrAux.push(x)});
  
  return  arrAux;
}

let datos = [1,0,true,0,'hola', 5, 30, 'a'];
console.log(llevarCerosAlFinal(datos))
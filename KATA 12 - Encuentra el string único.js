/* 
    Crea una función que reciba un listado de strings y devuelva 
    el string diferente al resto.

    Serán strings sin espacios.

    Ejemplo:

     Entrada: [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]
     Salida : 'BbBb’

     Entrada: ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba’]
     Salida : 'foo’
*/ 
function encuentraElDiferente(lista){
  
  let listAux = [];
  
  lista.forEach(
    item =>{  
      let arr = item.toString().toLowerCase().split('')
      listAux.push(arr.sort())
    }
  );

  //console.log(listAux)
  let  arrUnicos =[];
  
  listAux.forEach((item) =>{
    
    let letrasUnicas = [];
    item.forEach(x =>{if (!letrasUnicas.includes(x)) letrasUnicas.push(x)});
    letrasUnicas = letrasUnicas.join().replaceAll(',','')
    arrUnicos.push(letrasUnicas)
    }
  );
  
  console.log(arrUnicos)
  let objUnicos = new Object();
  
  let a = [];
  let b = [];
  let idx = 0;

  for (let i = 0; i <= arrUnicos.length - 1; i++){

    if (!a.includes(arrUnicos[i])){
      a.push(arrUnicos[i])
      b.push(1)
    }else{
      idx =a.indexOf(arrUnicos[i])
      b[idx] +=1; 
    }
  } 
  
  b.forEach(x => {if(x===1){idx = (b.indexOf(x))}})
                       
  return a[idx];
}

let arrLista= [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ];
console.log(encuentraElDiferente(arrLista));


let arrLista1 = ['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'];
console.log(encuentraElDiferente(arrLista1));
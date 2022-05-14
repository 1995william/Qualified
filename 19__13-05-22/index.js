// challenge 1

const abrevNome = (nome) => {
  let nomeAbrev = "";
  nome.split("").forEach((letra, i, arr) => {
    if (i == 0) nomeAbrev += letra;
    if (letra == " ") nomeAbrev += `.${arr[i + 1]}`;
  });
  return nomeAbrev.toUpperCase();
};

// challenge 2

function findSmallest(numbers) {
  return numbers.sort((a, b) => a - b)[0];
}

// challenge 3


function completeSeries(arr) {

  const arrOrd = arr.sort((a,b)=> {return a-b});

  let res = [];

  for (let i = 0; i < arrOrd.length; i++) {

    if(arrOrd.indexOf(arrOrd[i]) !== i){
      res.push(0)
      return res
    }
  }
  for (let i =0; i <= arrOrd[arrOrd.length - 1];i++) {
    res.push(i);
  }
  return res

}
// challenge 4


var orderedCount = function (text) {
  // Implement me!
const strArr = text.split('')

  const removeStrRepetida = strArr.filter((letra, i) => { 
   return strArr.indexOf(letra) == i
  })
  
  const res =  removeStrRepetida.map((letra) =>{ 
   return [letra,text.split(letra).length - 1]
  })
  return res
}
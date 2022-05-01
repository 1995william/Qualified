// challenge 1

// Insira aqui o código correspondente ao que foi solicitado nas instruçÕes
function areaOuPerimetro (base, altura) {
    if (base == altura) {
      return base * altura
    } else {
      return  (base + altura) * 2
    }
}

// challenge 2


function acumular (num) {
    //Insira seu código aqui!
    var total = 0;
    
    for(var i = 1; i <= num; i++) {
      total = total + i;
    }
    return total;
  }

// challenge 3


function filterArr(arr) {
    // Retorne um array sem as strings presentes em arr
    var numeros = [];
    for(var i = 0; i < arr.length; i++) {
      if(typeof arr[i] === "number") {
        numeros.push(arr[i]);
      }
    }
    return numeros;
  }

// challenge 4


//Declare e implemente sua função aqui!
function contaCarneirinhos (numero) {
    let total = 0; 
    for(let i = 0; i < numero.length; i++) {
        if (numero[i] === true) {
          total = total + 1
        }
      
     }
    return total;
  }

// challenge 5


//retorne o número de sorrisos válidos presentes em arr
function contaSorrisos(arr) {
  var total = 0;
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == ':)' || arr[i] == ':D' || arr[i] == ';D' || arr[i] == ';)'
         || arr[i] == ':-D' || arr[i] == ':-)' || arr[i] == ':~)' || arr[i] == ':~D'
         || arr[i] == ';-D' || arr[i] == ';-)' || arr[i] == ';~)' || arr[i] == ';~D') {
        total = total + 1
      } 
    }
  return total
}

// challenge 6


//Insira seu código aqui!
function oposto (n) {
    return (-n)
       
    }

// challenge 7


function separaEInverte(numero) {
    //insira aqui seu código
    let invertido = [];
    let vet = [];
    let str = numero.toString();
    for (let i = str.length -1; i >= 0; i--) {
        
      invertido.push(str.charAt(i));
    }
    for (let i = 0; i < invertido.length; i++) {
      vet[i] = parseInt(invertido[i]);
    }
    return vet;
  }

// challenge 8

function maiorEMenor(nomeros) {
  var arr = nomeros.split(' ')
  var maior = arr[0]
  var menor = arr[0]
  for(var i = 0; i < arr.length; i++){
    arr[i] = Number(arr[i])
  
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `${maior} ${menor}`
}
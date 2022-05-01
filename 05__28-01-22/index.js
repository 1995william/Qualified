// challenge 1

function contaVitorias(arr, pais) {
  var res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].country === pais) {
      res = res + 1;
    }
  }
  return res;
}

// challenge 2

//Insira seu código aqui
var jabulani = fabricaDeBolas('bola da copa');
var baba = fabricaDeBolas('bola normal');

// challenge 3

//Insira seu código aqui!
function fabricaDeBolas (str) {
    var obj = {
      tipo: str,
      getTipo: function () {
      return this.tipo;
       } ,
      setTipo: function (str) {
        this.tipo = str;
      }
    }
   return obj;
    };
// challenge 4

function recompensa(boletim1, boletim2, boletim3) {
    //Insira seu código aqui!
      var resultado1 = 0;
      var resultado2 = 0;
      var resultado3 = 0;
      var total = '';
      for( let x in boletim1) {
        resultado1 += boletim1[x];
      }
       for(let x in boletim2) {
        resultado2 += boletim2[x];
      }
      for(let x in boletim3) {
        resultado3 += boletim3[x];
      }
      
     if(resultado1 ==  resultado2 || resultado1 == resultado3 || resultado2 == resultado3) {
       total = 'A bicicleta será dividida.';
     }
      else if (resultado1 > resultado2 && resultado3) {
        total = 'Eu preciso comprar uma bicicleta para meu primeiro filho.';
      }
      else if (resultado2 > resultado1 && resultado3) {
         total = 'Eu preciso comprar uma bicicleta para meu segundo filho.';
       }
     return total;
    }
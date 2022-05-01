// challenge 1

//Insira aqui seu código
function abrevNome (nome) {
    var res = "";
  
  for(var i = 0; i < nome.length; i++) {
      if (i == 0) {
          res += nome.charAt(i);
      }
      if (nome.charAt(i) == " ") {
          res += "." + nome.charAt(i + 1)
      }
  }
  
  res = res.toUpperCase()
  
   return res
  }
// challenge 2

//Insira aqui seu código
function filtroAmigo (arr) {
    var res = [];
    for(var i = 0; i < arr.length; i++) {
      if (arr[i].length == 4) {
          res.push(arr[i]);
      }
  }
  return res
}
// challenge 3

function arrayMaisArray(arr1, arr2) {
    var res =0;
    
    for(var i = 0; i < arr1.length; i++) {
      res += arr1[i];
    }
    for(var i = 0; i < arr2.length; i++) {
      res += arr2[i];
    }
    return res; 
  }
// challenge 4

//Insira aqui sua implementação
function fizzBuzz (num) {
    var res = [];
    for (var i = 1; i <= num; i++) {
      if( i % 3 == 0 && i % 5 == 0) {
          res.push("FizzBuzz")
      } 
      else if (i % 3 == 0) {
           res.push("Fizz")
       }
       else if (i % 5 == 0) {
           res.push("Buzz")
       } else {
           res.push(i)
       }
       
   }
    return res;
  }
// challenge 5

//Insira aqui sua implementação
function trianguloInvertido (num) {
    var res = "";
    for(var i = num; i > 0 ; i--) {
  
  
        for (var k = i; k > 0; k--) {
            res += "*"
        }
        res += "\n"
    }
    return res
  }
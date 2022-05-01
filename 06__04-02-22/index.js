// challenge 1

function findSmallest(numbers) {
  return numbers.sort((a, b) => a - b)[0];
}
// challenge 2

function calculate(num1, operation, num2) {
  //TODO: make a basic calculator.
  let resultado = "";

  if (operation == "+") {
    resultado = num1 + num2;
  } else if (operation == "*") {
    resultado = num1 * num2;
  } else if (operation == "-") {
    resultado = num1 - num2;
  } else if (operation == "/" && num2 != 0) {
    resultado = num1 / num2;
  } else {
    resultado = null;
  }
  return resultado;
}
// challenge 3

//Neste exercício você utilizará uma função! Esse conteúdo será coberto mais a frente
//Insira seu código a partir da linha 10, como informado pelo comentário
//Não modifique outras partes do código
//Não se preocupe com a declaração das variáveis saldo e saque. Elas estão prontas para serem utilizadas nos condicionais
//Utilizando condicionais, verifique a possibilidade do saque, e armazene na variável mensagem a string correspondente a operação presente na especificação.

function habilitaSaque(saldo, saque, tipoCliente) {
  var mensagem;
  //insira seu código na linha abaixo
  if (saque <= saldo) {
    mensagem = "valor liberado para saque";
  } else if (saque <= saldo + 100 && tipoCliente == "normal") {
    mensagem = "valor liberado - cheque especial normal habilitado";
  } else if (saque <= saldo + 300 && tipoCliente == "vip") {
    mensagem = "valor liberado - cheque especial vip habilitado";
  } else if (saque > saldo + 100) {
    mensagem = "saque negado - saldo insuficiente";
  }

  //não modifique a linha abaixo
  return mensagem;
}
// challenge 4

function rgb(r, g, b) {
  // complete this function
  if (r > 255) {
    r = 255;
  }
  if (g > 255) {
    g = 255;
  }
  if (b > 255) {
    b = 255;
  }

  if (r < 0) {
    r = 0;
  }

  if (g < 0) {
    g = 0;
  }
  if (b < 0) {
    b = 0;
  }

  r = r.toString(16).toUpperCase();
  g = g.toString(16).toUpperCase();
  b = b.toString(16).toUpperCase();

  if (r.length < 2) {
    r = "0" + r;
  }
  if (g.length < 2) {
    g = "0" + g;
  }
  if (b.length < 2) {
    b = "0" + b;
  }
  return r + g + b;
}
// challenge 5

function twosDifference(input) {
  //Enter your solution here
  let res = [];
  input.sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    for (let n = i + 1; n < input.length; n++) {
      if (input[i] - input[n] == 2 || input[i] - input[n] == -2) {
        let ordem = [];
        ordem.push(input[i]);
        ordem.push(input[n]);

        res.push(ordem);
      }
    }
  }
  return res;
}

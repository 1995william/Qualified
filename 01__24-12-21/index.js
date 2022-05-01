// challenge 1

var curso = 'Resilia Webdev'
var versao ='V 2.0'
var cursoVersao = curso + " " + versao

// challenge 2

var  precoKgArroz=7.53
var qtdArroz=3
var gastoTotal = precoKgArroz * qtdArroz

// challenge 3

//Neste exercício você utilizará uma função! Esse conteúdo será coberto mais a frente 
//Insira seu código a partir da linha 10, como informado pelo comentário
//Não modifique outras partes do código
//Não se preocupe com a declaração da variável nota. Ela está pronta para ser utilizada nos condicionais
//Utilizando condicionais, aprove ou reprove os estudantes da escola com base na especificação. Guarde o valor esperado dentro da variável aprovado

function foiAprovado(nota) {
    var aprovado;
    //insira seu código na linha abaixo
    if (nota >= 5) {
      aprovado = true
    } else {
      aprovado = false
    }
    
    //não modifique a linha abaixo
    return aprovado;
  }

// challenge 4

var gloria = 'Glória Pires';
var tony = 'Tony Ramos';
gloria = 'Tony Ramos';
tony = 'Glória Pires';

// challenge 5

//Neste exercício você utilizará uma função! Esse conteúdo será coberto mais a frente 
//Insira seu código a partir da linha 10, como informado pelo comentário
//Não modifique outras partes do código
//Não se preocupe com a declaração das variáveis saldo e saque. Elas estão prontas para serem utilizadas nos condicionais
//Utilizando condicionais, verifique a possibilidade do saque, e armazene na variável mensagem a string correspondente a operação presente na especificação.


function habilitaSaque(saldo, saque) {
    var mensagem;
    //insira seu código na linha abaixo
    if (saque <= saldo) {
      mensagem = 'valor liberado para saque'
    }
    if (saque + 100 > saldo) {
      mensagem = 'valor liberado - cheque especial habilitado'
    }
    if (saque > saldo + 100 ) {
      mensagem = 'saque negado - saldo insuficiente'
    }
    
    //não modifique a linha abaixo
    return mensagem;
  }


// challenge 6

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5
var total = laLigaGoals + championsLeagueGoals + copaDelReyGoals
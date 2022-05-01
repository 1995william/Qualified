// challenge 1

//Configurações iniciais da atividade. Não modificar!
var jsdom = require("jsdom");
var HTMLpage = require("./page");
var { JSDOM } = jsdom;
var dom = new JSDOM(HTMLpage);
var document = dom.window.document;
//================================== 

 module.exports = function fabricaBtn (num) {
  var array = []
  for(var i = 1; i <= num; i++){

  var btn = document.createElement("button")
  btn.innerText = i + ""

      array.push(btn)
  }
   return array
 }
// challenge 2

//configuração inicial da atividade. Não modicar!
module.exports = function estilizaHeader(document) {
    //insira aqui seu código!
    var p = document.querySelector('#logo');
    var nav = document.querySelector('#menu');
    p.innerText = "Resilia";
    p.style.fontSize = '20px';
    
    nav.style.display = 'flex';
    nav.style.flexDirection = 'row';
  }
// challenge 3

//configuração inicial da atividade. Não modicar!
module.exports = function modifyImg(document, id, newSrc) {
    //insira aqui seu código
    if(document.getElementById(id)) {
      document.getElementById(id).src = newSrc
    } 
  }
// challenge 4

//configuração inicial da atividade. Não modicar!
module.exports = function addEventDelBtn(document) {
    //insira seu código aqui!
    //utilize onclick para atribuir eventos
    
    document.querySelector('button').onclick = function () {
      document.querySelector('.card').remove()
    }
    
  }
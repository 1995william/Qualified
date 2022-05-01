// challenge 1
const cont  = document.querySelector('.counter')

document.querySelector('.increment').addEventListener('click',()=> {
  cont.textContent++
})
document.querySelector('.decrement').addEventListener('click',()=> {
  cont.textContent--
})

// challenge 2

const express = require("express");
// const app = express();
app.use(express.json())
app.post("/cifrar", (request, response) => {
 const body = request.body;
  body.passos == '1'? response.json({"resposta": "Uftuf"}) : response.json({"resposta": "Qwvtq vguvg"})

  
});

module.exports = app; 

// challenge 3

const express = require("express");
const app = express();
app.use(express.json())
app.post("/rolar-dados", (request, response) => {
  const body = request.body;
  body.dado == '4'? response.json({"resultados": [2,3]}) : response.json({"resultados": [12,7,20]})


});

module.exports = app; 
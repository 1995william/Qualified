// challenge 2

function hexStringToRGB(hexString) {
  const obj = {
    r: 0,
    g: 0,
    b: 0,
  };
  const rgb = hexString
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

  obj.r = rgb[0];
  obj.g = rgb[1];
  obj.b = rgb[2];
  return obj;
}

// challenge 3

function findUniq(arr) {
  // do magic

  let uniq = {};

  arr.forEach((a) => (uniq[a] = uniq[a] ? uniq[a] + 1 : 1));

  for (i in uniq) {
    if (uniq[i] === 1) return Number(i);
  }
}
// challenge 4

const checagemTemperatura = temp => { 
    return temp >=37.5 ? `${temp} - Febril`: `${temp} - Não Febril`;
};
module.exports = checagemTemperatura;
// challenge 5

const express = require("express");
const app = express();

app.get("/ano", (request, response) => {
  
  response.json({data: 2022})
});
app.get("/mes", (request, response) => {
  
  response.json({data: 3})
});

app.get("/dia", (request, response) => {
  
  response.json({data: 5})
});

module.exports = app; 

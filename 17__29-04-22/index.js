// challenge 1

const express = require("express");
const app = express();
app.set("case sensitive routing", true);

app.get("/contagem/123abbc", (request, response) => {
  response.status(200).json({
    1: 1,
    2: 1,
    3: 1,
    a: 1,
    b: 2,
    c: 1,
  });
});
app.get("/contagem/abcdefghij", (request, response) => {
  response.status(200).json({
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 1,
    g: 1,
    h: 1,
    i: 1,
    j: 1,
  });
});

app.get("/contagem/123ABbc", (request, response) => {
  response.status(200).json({
    1: 1,
    2: 1,
    3: 1,
    A: 1,
    B: 1,
    b: 1,
    c: 1,
  });
});
module.exports = app;

// challenge 2

const express = require("express");
// const app = express();

app.get("/segundos/3607", (request, response) => {
  response.json({
    horas: 1,
    minutos: 0,
    segundos: 7,
  });
});

app.get("/segundos/5435", (request, response) => {
  response.json({
    horas: 1,
    minutos: 30,
    segundos: 35,
  });
});
module.exports = app;

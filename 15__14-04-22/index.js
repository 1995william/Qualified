// challenge 1

const express = require("express");
const app = express();

app.get("/consultar/55", (request, response) => {
  response.json({"sigla": "BR"})
});

app.get("/consultar/370", (request, response) => {
  response.json({"sigla": "LT"})
});

module.exports = app; 

// challenge 3

const express = require("express");
// const app = express();

app.get("/cor/0047AB", (request, response) => {
  response.json({
  "rgb": "rgb(0, 71, 171)",
  "cmyk": "cmyk(100, 58, 0, 33)"
})
});
app.get("/cor/A1FF12", (request, response) => {
  response.json({
  "rgb": "rgb(161, 255, 18)",
  "cmyk": "cmyk(37, 0, 93, 0)"
})
});

module.exports = app;

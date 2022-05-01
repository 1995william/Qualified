// challenge 1

const devsBR = (devsArr) => {
  //insira aqui seu código
  return devsArr.filter(
    (dev) => dev.country == "Brazil" && dev.language == "JavaScript"
  );
};

// challenge 2

function maioresQue5Invertido(num) {
  //insira aqui o seu código
  let numStr = num.toString();
  let arr = [];
  let tot = "";

  for (let i of numStr) {
    arr.push(i);
  }
  arr.reverse();

  arr.forEach((n) => {
    if (n > 5) tot += n;
  });
  if (tot == "") return null;

  return Number(tot);
}
// challenge 3

class Arr {
  constructor(...elementos) {
    this._arr = [...elementos];
  }

  adiciona(...elementos) {
    this._arr = [...this._arr, ...elementos];
  }

  getArr() {
    return this._arr;
  }

  //implemente aqui os métodos map e filter como solicitado
  map() {
    let arr = this._arr;
    const mapeado = arr.map((el) => el.toUpperCase());
    return mapeado;
  }
  filter() {
    let arr = this._arr;
    const filtrado = arr.filter((el) => (el.length % 2 === 1 ? true : false));
    return filtrado;
  }
}

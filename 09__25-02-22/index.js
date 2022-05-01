// challenge 2

module.exports = function encrypt(mensagem) {
  //insira aqui sua solução
  let str = mensagem.split("");
  let arr = str.reverse();
  let res = "";
  arr.forEach((letra) => {
    if (letra == "a") res += "4";
    else if (letra == "e") res += "3";
    else if (letra == "i") res += "2";
    else if (letra == "o") res += "1";
    else if (letra == "u") res += "0";
    else if (letra != /[aeiou]/) res += letra;
  });
  res += "ece";
  return res;
};

// challenge 3

module.exports = contaNucleotideos;

/*
Dada uma cadeia de DNA, cria um histograma dos nucleotídeos.
## Exemplos:

contaNucleotideos('AATAA')
> {'A': 4, 'T': 1, 'C': 0, 'G': 0}
*/
function contaNucleotideos(stringDNA) {
  // Implemente sua solução aqui...
  let obj = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };
  for (let i of stringDNA) {
    if (i == "A") obj.A++;
    if (i == "C") obj.C++;
    if (i == "G") obj.G++;
    if (i == "T") obj.T++;
  }
  return obj;
}

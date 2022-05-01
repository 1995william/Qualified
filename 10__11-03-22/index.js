// challenge 1

module.exports = separa;

function separa(str) {
  // Insira seu código aqui...
let arr = str.split('');
let resultado = '';
arr.forEach(l => {
   if( l =='A' ||l =='B' ||l =='C' ||l =='D' ||l =='E' || l =='F' ||l =='G' ||l =='H' ||l =='I' ||l =='J' ||l =='K' ||l =='L' ||l =='M' ||l =='N' ||l =='O' ||l =='P' ||l =='Q' ||l =='R' ||l =='S' ||l =='T' ||l =='U' ||l =='V' ||l =='X' ||l =='Y' ||l =='Z') resultado+= l;   
});
arr.forEach(l => {
    if( l =='a' ||l =='b' ||l =='c' ||l =='d' ||l =='e' || l =='f' ||l =='g' ||l =='h' ||l =='i' ||l =='j' ||l =='k' ||l =='l' ||l =='m' ||l =='n' ||l =='o' ||l =='p' ||l =='q' ||l =='r' ||l =='s' ||l =='t' ||l =='u' ||l =='v' ||l =='x' ||l =='y' ||l =='z') resultado+= l;
 });
  return resultado;
}

// challenge 2

function removeMinimum(numbers) {
    // Insira seu código aqui
  const copy = numbers.slice();
  copy.splice( copy.indexOf(Math.min.apply(null, copy)),1)
    return copy;
  }
// challenge 1 

//Insira seu código aqui!
class Bola {
    constructor(bola) {
      this._tipo = bola;
    };
  getTipo () {
    return this._tipo;
  }
  setTipo (bola) {
    return this._tipo = bola;
  }
}

// challenge 2

class Pessoa {
    constructor (nome, sobrenome, dataNascimento) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.dataNascimento = dataNascimento;
    }
    nomeCompleto() {
      let nomeCompleto = this.nome+' '+this.sobrenome; 
       return nomeCompleto;
          };
    abreviacao() {
      let nomeAbv = '';
      for(let i = 0; i < this.nome.length; i++) {
        if(i == 0) {
        nomeAbv+= this.nome[i];
      }
      if(i == ' ') {
        nomeAbv+= '.'
      }
      }
      for(let i =0;i <this.sobrenome.length; i++) {
    if (i == 0) {
        nomeAbv+= this.sobrenome[i] 
    }
    if (this.sobrenome[i] == ' ') {
        nomeAbv+= '.' + this.sobrenome[i+1]
    }
}
      let maiuscula = nomeAbv.toUpperCase();
      return maiuscula
    }
}
// challenge 3

//Insira aqui as declarações e implementações das classes Pilha e Fila
class Pilha extends Armazem {
    constructor(...num) {
        super()
        if(num.length > 0) {
          for(let i = 0; i< num.length; i++){
            
            super.add(num[i])
            }
        }  
 }
    empilha(...n) {
        for(let i = 0; i< n.length; i++){
            
          super.add(n[i])
          }
    }
    desempilha() {
      let result = this.arr[this.arr.length - 1];
      this.arr.pop();
      return result;
    }
 }

 class Fila extends Armazem {
    constructor(...num) {
      super()
      for(let i = 0; i < num.length; i++) {
        super.add(num[i])
      }
    }
    chegada(...n) {
      for(let i = 0; i < n.length; i++) {
        super.add(n[i])
      }
    }
    partida() {
      let res = this.arr.shift();
      return res;
    }
 }
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + " " + this.sobrenome;  
} 

const pessoa1 = new Pessoa('Gilberto', 'Daniel')
const pessoa2 = new Pessoa('Sara', 'Marques')

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());

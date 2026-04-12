function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Sara', 'Marques', 22)
const pessoa2 = criaPessoa('Gilberto', 'Gulart', 22)
const pessoa3 = criaPessoa('Debora', 'Cristina', 41)

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);



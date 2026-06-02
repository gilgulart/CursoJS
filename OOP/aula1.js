class Pessoa {
    constructor(nome, sobrenome ,idade ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    falar(){
        console.log(`${this.nome} está falando`);
        
    }

    comer() {
        console.log(`${this.nome} está comendo`);
        
    }

    nomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
        
    }
}

const pessoa = new Pessoa("Gilberto", "Daniel", 22);
console.log(pessoa);

pessoa.falar()
pessoa.comer()
pessoa.nomeCompleto()

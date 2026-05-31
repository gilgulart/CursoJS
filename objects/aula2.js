function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque,
        // writable: true,
        configurable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (value) {
            this.estoquePrivado = value
        }
    })
    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true,
    //         // value: nome,
    //         // writable: true,
    //         configurable: true
    //     },
    //     preco: {
    //         enumerable: true,
    //         // value: preco,
    //         // writable: true,
    //         configurable: true
    //     },
    //     estoque: {
    //         enumerable: true,
    //         value: estoque,
    //         // writable: true,
    //         configurable: false
    //     }
    // });
};

const p1 = new Produto('TV', 1988, 450)
console.log(Object.keys(p1));
p1.estoque = 'fodase'
console.log(p1.estoque);

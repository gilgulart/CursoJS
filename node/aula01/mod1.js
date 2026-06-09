// const name = 'Gilberto Daniel'
// const lastname = 'Gulart Maria'

// const sayMyName = () => name + ' ' + lastname
// exports.name = name;
// exports.lastname = lastname;
// exports.sayMyName = sayMyName;

// console.log(exports);


class Pessoa {
    constructor (name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

exports.Pessoa = Pessoa;
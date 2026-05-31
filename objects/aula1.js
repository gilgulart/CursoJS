const pessoa = {
    name: 'Gilberto',
    lastname: 'Maria'
};

console.log(pessoa['name']);
console.log(pessoa.lastname);

const pessoa2 = new Object();
pessoa2.name = 'Sara';
pessoa2.lastname = 'Marques';
pessoa2.sayHello = function () {
    console.log(`${this.name} diz Hello!`);
    
}


console.log(pessoa2.name);
console.log(pessoa2.lastname);
pessoa2.sayHello();

for (let chave in pessoa2) {
    console.log(pessoa2[chave]);
    
}
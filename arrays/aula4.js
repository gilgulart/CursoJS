const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numDobro = numeros.map(value => value * 2)

console.log(numDobro);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Wallace', idade: 55},
    {nome: 'Gilberto', idade: 22},
    {nome: 'Sara', idade: 22},
    {nome: 'Eliézer', idade: 17},
    {nome: 'Debora', idade: 41},
    {nome: 'Gilmar', idade: 47},
    {nome: 'Marli', idade: 63},
];

// para cada elemento:
// Retorne apenas uma string com o nome da pessoa
//  Remova apenas a chave nome do objeto
//  adicione uma chave id em cada objeto

const names = pessoas.map(obj => obj.nome)
console.log(names);

const ages = pessoas.map(obj => ({idade: obj.idade}))
console.log(ages);

const idObj = pessoas.map((obj, index) => {
    const newObj = {...obj};
    newObj.id = (index + 1) * 1000;
    return newObj;
})


console.log(pessoas);
console.log(idObj);

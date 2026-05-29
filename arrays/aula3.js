// filter, map, reduce

// retornar os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];



const numFilter = numeros.filter(value => value > 10)
console.log(numFilter);

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

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
const maisDe30Anos = pessoas.filter(obj => obj.idade > 30);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(maisDe30Anos);
console.log(nomeTerminaComA);




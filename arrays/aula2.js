const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

nomes.splice(-2, 1);
console.log(nomes);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];
console.log(a3);
console.log(a4);

const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes];
const removido = nomes.shift()
const fatiar = nomes.slice(0,1)
// spread - rest

// nomes[2] = 'João';
// delete nomes[2];
novo.pop();
novo.push('Wallace');
// começo: shift e unshift
// final: pop e push
console.log(nomes, removido);
console.log(novo);
console.log(fatiar);

const converter = "Gilberto Daniel Gulart Maria";
const listaNome = converter.split(" ");
console.log(listaNome);
const unir = listaNome.join(" ");
console.log(unir);




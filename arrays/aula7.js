const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

for (let i in numeros){
    console.log(i);
}

for (let num of numeros) {
    console.log(num);
}

numeros.forEach(value => console.log(value))

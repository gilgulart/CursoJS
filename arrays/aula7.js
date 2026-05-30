const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

for (i in numeros){
    console.log(num);
}

for (num of numeros) {
    console.log(num);
}

const num = 5 ;
let count = 0;

for (let i = 1; i <= num; i++ ){
    if (num % i === 0) count += 1;
}

if (count === 2) {
    console.log("Número primo");
    
} else {
    console.log("Não é primo");
    
}
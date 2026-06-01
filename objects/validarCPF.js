// 705.484.450-52    070.987.720-03

/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11  10  9  8  7  6  5  4  3 2
77  0  45 32  56 24 20 20 0 10 = 284

11 - (237 % 11) = 5 (Primeiro dígito)
Se o dígito for maior que 9, consideramos 0.

11 - (284 % 11) = 2 (Segundo dígito)

*/

let cpf = "070.987.720-03"
let cpfClean = cpf.replace(/\D+/g, "")
let cpfArray = Array.from(cpfClean);

const allEqual = cpfArray.every(digit => digit === cpfArray [0]);

if (allEqual) {
    console.log("CPF inválido! (dígitos repetidos)");
}

cpfArray.splice(-2)

function verifyDigit(sum) {

    let digit = 11 - (sum % 11);

    if (digit >= 10){
        cpfArray.push('0')
    } else {
        cpfArray.push(String(digit))
    }

    return digit;

}

function sumArray(array) {return array.reduce((sum, value) => sum + Number(value), 0)};


const firstProducts = cpfArray.map(function(value, index) {
    const peso = 10 - index;
    const result = Number(value) * peso;
    return result;
});
verifyDigit(sumArray(firstProducts));

const secondProducts = cpfArray.map(function(value, index) {
    const peso = 11 - index;
    const result = Number(value) * peso;
    return result;
});
verifyDigit(sumArray(secondProducts));

const cpfChecked = cpfArray.join('');
const cpfFormat = 
    cpfChecked.slice(0, 3) + "." +
    cpfChecked.slice(3, 6) + "." +
    cpfChecked.slice(6, 9) + "-" +
    cpfChecked.slice(9, 11);



if (cpfChecked === cpfClean) {
    console.log(` CPF válido! \n CPF verificado: ${cpfFormat}\n CPF original: ${cpf}`);

} else {
    console.log(` CPF inválido! \n CPF verificado: ${cpfFormat}\n CPF original: ${cpf}`);
}

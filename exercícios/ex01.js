const inputNumber = prompt("Digite um número: ")

function isPeer(num) {
  if (num % 2 == 0){
    console.log("par");
    
    return true
  }
  else {
    console.log("ímpar");
    return false
  }
}
console.log(isPeer(inputNumber));

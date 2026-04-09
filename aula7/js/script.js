let infoNum = Number(prompt("Informe um número"));
const numTitle = document.getElementById("num-title");
const text = document.getElementById("text");

numTitle.innerHTML = infoNum;
text.innerHTML = `<p>Seu número + 2 é:  ${infoNum + 2}</p>
<p>${infoNum} é inteiro: ${Number.isInteger(infoNum)}</p>
<p>É NaN: ${Number.isNaN(infoNum)}</p>
<p>Arredondando para baixo: ${Math.floor(infoNum)}</p>
<p>Arredondando para cima: ${Math.ceil(infoNum)}</p>
<p>Com duas casas decimais: ${infoNum.toFixed(2)}</p>`;
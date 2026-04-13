const date = new Date(2026, 3, 20, 15, 14); // a, m, d, h, M, s, ms


console.log('Dia',date.getDate());
console.log('Mês',date.getMonth());
console.log('Ano',date.getFullYear());
console.log('Hora',date.getHours());
console.log('Min',date.getMinutes());
console.log('Seg',date.getSeconds());
console.log('ms',date.getMilliseconds());
console.log('Dia da semana',date.getDay());
console.log(date.toString());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formatDate(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda( data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dateBR = formatDate(date)
console.log(dateBR);

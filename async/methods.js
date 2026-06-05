function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)

}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
       if (typeof msg !== 'string') reject(new Error('ERRO'));
        setTimeout(() => {
            resolve(msg + ' - Passei na promise')
        }, tempo)
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
]

Promise.race(promises)
.then(value => {
    console.log(value);
})
.catch(e => {console.log('ERRO', e);
})

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO',e))
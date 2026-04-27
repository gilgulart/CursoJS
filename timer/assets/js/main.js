function getSeconds(seconds){
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
};

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let seconds = 0;
let timer;

function timerInit(){
    timer = setInterval(function (){
        seconds++;
        relogio.innerHTML = getSeconds(seconds);
    }, 1000) ;
};

document.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('iniciar')){
        relogio.classList.remove("pausado");
        clearInterval(timer);
        timerInit();
    };

    if (element.classList.contains('pausar')){
        relogio.classList.add("pausado");
        clearInterval(timer);

    };

    if (element.classList.contains('zerar')){
        clearInterval(timer);
        relogio.classList.remove("pausado")
        relogio.innerHTML = "00:00:00";
        seconds = 0;
    };
});

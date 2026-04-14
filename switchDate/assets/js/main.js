const date = new Date(2026, 2, 5, 23, 59);

function createH1() {
  const h = document.createElement("h1");
  return h;
}

function showDate(msg, date) {
  result = document.querySelector(".container");
  result.innerHTML = "";

  const h = createH1();

  h.innerHTML = msg;
  result.appendChild(h);
}

function getFullDate() {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dayWeek = date.getDay();

  switch (month) {
    case 0:
      monthName = "janeiro"; break;
    case 1:
      monthName = "fevereiro"; break;
    case 2:
      monthName = "março"; break;
    case 3:
      monthName = "abril"; break;
    case 4:
      monthName = "maio"; break;
    case 5:
      monthName = "junho"; break;
    case 6:
      monthName = "julho"; break;
    case 7:
      monthName = "agosto"; break;
    case 8:
      monthName = "setembro"; break;
    case 9:
      monthName = "outubro"; break;
    case 10:
      monthName = "novembro"; break;
    case 11:
      monthName = "dezembro"; break;
  }
  switch (dayWeek) {
    case 0:
      dayName = "Domingo"; break;
    case 1:
      dayName = "Segunda-feira"; break;
    case 2:
      dayName = "Terça-feira"; break;
    case 3:
      dayName = "Quarta-feira"; break;
    case 4:
      dayName = "Quinta-feira"; break;
    case 5:
      dayName = "Sexta-feira"; break;
    case 6:
      dayName = "Sábado"; break;
  }

return `${dayName}, ${day} de ${monthName} de ${year} ${hours}:${minutes}`

}

const msg = getFullDate()
showDate(msg, date);


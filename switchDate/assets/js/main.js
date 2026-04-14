const date = new Date(2019, 9, 7, 22, 52);

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
  const minutes = date.getMinutes;
  const dayWeek = date.getDay();

  switch (month) {
    case 0:
      return "janeiro";

    case 1:
      return "fevereiro";

    case 2:
      return "março";

    case 3:
      return "abril";

    case 4:
      return "maio";

    case 5:
      return "junho";

    case 6:
      return "julho";
    case 7:
      return "agosto";
    case 8:
      return "setembro";
    case 9:
      return "outubro";
    case 10:
      return "novembro";
    case 11:
      return "dezembro";

    default:
      break;
  }
  switch (dayWeek) {
    case 0:
      dayName = "Domingo";

    case 1:
      dayName = "Segunda-feira";

    case 2:
      return "Terça-feira";

    case 3:
      dayName = "Quarta-feira";

    case 4:
      dayName = "Quinta-feira";

    case 5:
      dayName = "Sexta-feira";

    case 6:
      dayName = "Sábado";

    default:
      break;
  }

return `${dayWeek}, ${day} de ${month} de ${year} ${hours}:${minutes}`

}

const msg = getFullDate()
showDate(msg, date);


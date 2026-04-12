function meuEscopo() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".resultado");

  const people = [];

  function eventForm(event) {
    event.preventDefault();

    const nome = form.querySelector(".name");
    const sobrenome = form.querySelector(".lastname");
    const peso = form.querySelector(".weight");
    const altura = form.querySelector(".height");

    people.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    result.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value}kg, ${altura.value}m<p/>`;
  }
  form.addEventListener("submit", eventForm);
}
meuEscopo();

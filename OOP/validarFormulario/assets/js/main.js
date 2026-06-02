class VerifyingForm {
    constructor() {
      this.form = document.querySelector('.formulario');


      this.events()
    }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Formulário não enviado");
    const validFields = this.checkFields();
  }

  checkFields() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')){
      errorText.remove();
    }

    for(let field of this.form.querySelectorAll('.validar')) {
        if (!field.value) {
          const label = field.previousElementSibling.innerHTML;
          this.createError(field, `Campo "${label}" não pode estar em branco`);
        }
    }
  }

  createError(field, msg){
    const div = document.createElement('div');
    div.innerHTML = msg
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div)
  }
}

const validForm = new VerifyingForm();
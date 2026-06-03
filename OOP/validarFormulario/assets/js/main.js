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
    const validPassWords = this.checkPasswords();

    if (validFields && validPassWords) {
      alert('Formulário enviado') 
      this.form.submit()
    }
  }

  checkFields() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')){
      errorText.remove();
    }

    for(let field of this.form.querySelectorAll('.validar')) {
        if (!field.value) {
          const label = field.previousElementSibling.textContent;
          this.createError(field, `Campo "${label}" não pode estar em branco`);
          valid = false;
        }
        if(field.classList.contains('cpf')){
          if(!this.verifyingCPF(field)) valid = false
        }
        if(field.classList.contains('usuario')){
          if(!this.verifyingUser(field)) valid = false
        }
    }
    return valid;
  }

  checkPasswords() {
    let valid = true;

    const password = this.form.querySelector(".senha")
    const passwordRepeat = this.form.querySelector(".repetir-senha")
    if (password.value !== passwordRepeat.value) {
      valid = false
      this.createError(password, 'Campos senha e repetir senha precisam ser iguais' )
      this.createError(passwordRepeat, 'Campos senha e repetir senha precisam ser iguais' )
    };

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createError(password, 'Senha precisa estar entre 6 e 12 caracteres')
    }

    return valid
  }

  verifyingCPF(field) {
    const cpf = new VerifyingCPF(field.value);

    if(!cpf.verify()) {
      this.createError(field, 'CPF inválido.')
      return false
    }
    return true;
  }
  
  verifyingUser(field) {
    let valid = true;

    const user = field.value;
    if (user.length < 3 || user.length > 12) {
      this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.')
      valid = false;
    }
    
    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, 'Apenas letras ou números.')
      valid = false;
    }
    
    return valid;
  }

  createError(field, msg){
    const div = document.createElement('div');
    div.innerHTML = msg
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div)
  }
}

const validForm = new VerifyingForm();
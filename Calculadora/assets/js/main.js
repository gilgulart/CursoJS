function Calculator() {
  this.display = document.querySelector('.display');

  this.init = () => {
    if (!isNaN(this.display.value) | this.display.value === 0) {
      this.getClick();
      this.getEnter();
      
    }
  }

  
  this.getClick = () => {
    document.addEventListener('click', (e) => {
      const el = e.target;
      if (el.classList.contains('btn')) this.addNumDisplay(el)
      if (el.classList.contains('btn-del')) this.del()
      if (el.classList.contains('btn-clear')) this.clear()
      if (el.classList.contains('btn-eq')) this.calculate()

    })
  }

  this.getEnter = () => {
    document.addEventListener('keydown', (e) => {
      console.log(e.key);
      
      if (e.key === 'Enter' ) this.calculate();
      if (!isNaN(e.key) | e.key === '.') {
        this.display.focus();
      }
        
      if (e.key === 'Delete' | e.key === 'Backspace') this.clear();
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  }
    
  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0,-1);
  
  this.calculate = () => {
    try {
      const count = eval(this.display.value);

      if (!count){ 
        alert('Conta inválida');
        return;
      }

      this.display.value = String(count);
    } catch (error) {
      alert('Conta inválida');
      return;
      
    }
  }
}

const calculator = new Calculator();
calculator.init();
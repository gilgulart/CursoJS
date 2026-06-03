class VerifyingCPF {
    constructor(cpf) {
        this.cpf = Array.from(cpf.replace(/\D+/g, ""));
    }

    isSequence() {
        this.sequence = this.cpf[0].repeat(this.cpf.length)
        return this.sequence === this.cpf.join("");
    }

    verify() {
        if(!this.cpf) return false;
        if(this.cpf.length !== 11) return false;
        if(this.isSequence()) return false;

        const partialCPF = this.cpf.slice(0, -2);
        const firstDigit = this.createDigit(partialCPF);
        const secondDigit = this.createDigit([...partialCPF, firstDigit]);

        const newCPF = [...partialCPF, firstDigit, secondDigit].join("");
        return newCPF === this.cpf.join("");
    }

    createDigit(partialCPF) {
        let regressive = partialCPF.length + 1;
        const total = partialCPF.reduce((ac, val) => {
            ac += regressive * Number(val);
            regressive--;
            return ac;
        }, 0);


        const digit =  11 - (total % 11);
        return digit > 9 ? '0' : String(digit);
    }
    


}

// let cpf = new VerifyingCPF('070.987.720-03')

// if (cpf.verify()){
//     console.log('CPF válido');
// } else {
//     console.log('CPF inválido');
    
// }

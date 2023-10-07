class Banco {
    constructor(conta, saldo, tipoDeConta, agencia) {
        this.conta = conta; 
        this.saldo = saldo;
        this.tipoDeConta = tipoDeConta;
        this.agencia = agencia;
    }

    // Método para buscar saldo
    buscarSaldo() {
        return this.saldo;
    }

    // Método para depósito
    deposito(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$${valor} realizado com sucesso! Saldo atual: R$${this.saldo}`;
        } else {
            return "Valor de depósito inválido.";
        }
    }

    // Método para saque
    saque(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return `Saque de R$${valor} realizado com sucesso! Saldo atual: R$${this.saldo}`;
        } else if (valor <= 0) {
            return "Valor de saque inválido.";
        } else {
            return "Saldo insuficiente.";
        }
    }

    // Método para retornar número da conta
    numeroDaConta() {
        return this.conta;
    }
}

// Exemplo de uso:
let contaDoJoao = new Banco(123456, 1000, "Corrente", "001");
console.log(contaDoJoao.buscarSaldo()); // 1000
console.log(contaDoJoao.deposito(200)); // Depósito de R$200 realizado com sucesso! Saldo atual: R$1200
console.log(contaDoJoao.saque(300));    // Saque de R$300 realizado com sucesso! Saldo atual: R$900
console.log(contaDoJoao.numeroDaConta());  // 123456

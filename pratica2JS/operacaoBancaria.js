const leia = require('readline-sync');

let operacao = leia.questionInt('Digite a operação que deseja sendo que 1 = Saldo, 2 = Saque, 3 = Depósito: ');
let saldo = 1000.00;

switch (operacao) {
    case 1:
        console.log(`Seu saldo é ${saldo}.`);
        break;
    case 2:
        let saque = leia.questionInt('Digite o valor do saque: ');
        if (saque <= saldo) {
            saldo -= saque;
            console.log(`Saque de ${saque} realizado com sucesso. Novo saldo: ${saldo}.`);
        } else {
            console.log('Saldo insuficiente.');
        }
        break;
    case 3:
        let deposito = leia.questionInt('Digite o valor do depósito: ');
        saldo += deposito;
        console.log(`Depósito de ${deposito} realizado com sucesso. Novo saldo: ${saldo}.`);
        break;
    default:
        console.log('Operação inválida.');
}
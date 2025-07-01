const leia = require('readline-sync');

let number1 = leia.questionInt('Digite o primeiro número: ');
let number2 = leia.questionInt('Digite o segundo número: ');
let operacao = leia.questionInt('Digite a operação que deseja sendo que 1 = Soma, 2 = Subtração, 3 = Multiplicação, 4 = Divisão: ');

switch (operacao) {
    case 1:
        console.log(`A soma de ${number1} e ${number2} é ${number1 + number2}.`);
        break;
    case 2:
        console.log(`A subtração de ${number1} e ${number2} é ${number1 - number2}.`);
        break;
    case 3:
        console.log(`A multiplicação de ${number1} e ${number2} é ${number1 * number2}.`);
        break;
    case 4:
        if (number2 !== 0) {
            console.log(`A divisão de ${number1} por ${number2} é ${number1 / number2}.`);
        } else {
            console.log('Divisão por zero não é permitida.');
        }
        break;
    default:
        console.log('Operação inválida!');
        break;
    
}
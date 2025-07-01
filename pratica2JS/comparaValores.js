const leia = require('readline-sync');

let number1 = leia.questionInt('Digite o primeiro número: ');
let number2 = leia.questionInt('Digite o segundo número: ');
let number3 = leia.questionInt('Digite o terceiro número: ');

if(number1 + number2 > number3) {
    console.log('A soma dos dois primeiros números é maior que o terceiro.');
}   else if(number1 + number2 < number3) {
    console.log('A soma dos dois primeiros números é menor que o terceiro.');
}
else {
    console.log('A soma dos dois primeiros números é igual ao terceiro.');
}
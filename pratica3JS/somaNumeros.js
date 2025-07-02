const leia = require('readline-sync');

let soma = 0;
let numero;

do {

    numero = leia.questionInt('Informe um número inteiro positivo ou 0 para sair: ');

    if (numero > 0) {
        soma += numero;
    } 
} while (numero !== 0);

console.log(`A soma dos números positivos é: ${soma}`);
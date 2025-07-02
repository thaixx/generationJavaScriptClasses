const leia = require('readline-sync');

let vetor = [2,5,1,3,4,9,7,8,10,6];
let numero = leia.questionInt('Informe um número para buscar no vetor: ');
let achou = false;

for(let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        console.log(`O número ${numero} foi encontrado na posição ${i}.`);
        achou = true;
        break; // Para evitar continuar a busca após encontrar o número
    }
    
}
if(!achou)
console.log(`O número ${numero} não foi encontrado no vetor.`);
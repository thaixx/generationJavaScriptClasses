const leia = require('readline-sync');

let number: number = leia.questionInt("Digite um número: ");
let numbers: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

let i = 0
while (i < numbers.length) {
    if (numbers[i] === number) {
        console.log("O número " + number + " foi encontrado no índice " + i);
        break;
    }
    i++;
}
if (i === numbers.length && numbers[i - 1] !== number) {
    console.log("O número " + number + " não foi encontrado.");
}
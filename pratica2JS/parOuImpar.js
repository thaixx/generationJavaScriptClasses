const leia = require('readline-sync');

let number = leia.questionInt('Digite um número: ');

let ans1;
let ans2;

if (number % 2 === 0) {
    ans1 = "é par";
} else {
    ans1 = "é ímpar";
}

if (number >= 0) {
    ans2 = "é positivo";
} else{
    ans2 = "é negativo";
} 

console.log(`O número ${number} ${ans1} e ${ans2}!`);
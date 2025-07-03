const leia = require('readline-sync');

let number1: number = leia.questionInt("Digite um número: ");
let number2: number = leia.questionInt("Digite outro número: ");
let number3: number = leia.questionInt("Digite mais um número: ");
let number4: number = leia.questionInt("Digite mais um número: ");
let number5: number = leia.questionInt("Digite mais um número: ");
let number6: number = leia.questionInt("Digite mais um número: ");
let number7: number = leia.questionInt("Digite mais um número: ");
let number8: number = leia.questionInt("Digite mais um número: ");
let number9: number = leia.questionInt("Digite mais um número: ");
let number10: number = leia.questionInt("Digite mais um número: ");

let numbers: Set<number> = new Set<number>([
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
  number10
]);
console.log("Listar dados do set:", numbers);
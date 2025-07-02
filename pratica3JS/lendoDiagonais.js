const leia = require('readline-sync');

let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

let linha1 = leia.question('Informe a primeira linha da matriz 3x3 (separada por vírgulas): ');
let linha2 = leia.question('Informe a segunda linha da matriz 3x3 (separada por vírgulas): ');
let linha3 = leia.question('Informe a terceira linha da matriz 3x3 (separada por vírgulas): ');

let matriz = [
    linha1.split(',').map(Number),
    linha2.split(',').map(Number),
    linha3.split(',').map(Number)
];

for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
        if (i === j) {
            diagonalPrincipal.push(matriz[i][j]);
            somaDiagonalPrincipal += matriz[i][j];
        }
        if (i + j === matriz.length - 1) {
            diagonalSecundaria.push(matriz[i][j]);
            somaDiagonalSecundaria += matriz[i][j];
        }
    }
    
}
console.log(`Elementos da diagonal Principal: ${diagonalPrincipal}`);
console.log(`Elementos da Diagonal Secundária: ${diagonalSecundaria}`);
console.log(`Soma dos elementos da Diagonal Principal: ${somaDiagonalPrincipal}`);
console.log(`Soma dos elementos da Diagonal Secundária: ${somaDiagonalSecundaria}`);
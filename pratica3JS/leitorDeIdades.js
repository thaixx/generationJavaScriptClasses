const leia = require('readline-sync');

let quantidade = leia.questionInt('Quantas idades você deseja informar? ');
let count = 0;
let under21 = 0;
let up50 = 0;
while(count < quantidade) {
    count++
    let idade = leia.questionInt(`Informe a idade: `);
    if (idade < 21 && idade >= 0) {
        under21++;
    } else if (idade > 50) {
        up50++;
    } else {
        continue;
    }
    
}
console.log(`Quantidade de pessoas com menos de 21 anos: ${under21}`);
console.log(`Quantidade de pessoas com mais de 50 anos: ${up50}`);
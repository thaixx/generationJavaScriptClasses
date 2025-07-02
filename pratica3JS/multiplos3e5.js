const leia = require('readline-sync');

let limiteInicial = leia.questionInt('Digite o limite inicia: ');
let limiteFinal = leia.questionInt('Digite o limite final: ');

if(limiteInicial > limiteFinal) {
    console.log('Intervalo inválido. Limite inicial deve ser menor do que limite final.');
        return;
}

for(let i = limiteInicial; i <= limiteFinal; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é múltiplo de 3 e 5.`);
    } 
    
}
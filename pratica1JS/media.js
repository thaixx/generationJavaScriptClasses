const leia = require('readline-sync');

    let nota1 = leia.questionInt('Digite a primeira nota: ');
    let nota2 = leia.questionInt('Digite a segunda nota: ');
    let nota3 = leia.questionInt('Digite a terceira nota: ');
    let nota4 = leia.questionInt('Digite a quarta nota: ');

    const media = Math.ceil((nota1 + nota2 + nota3 + nota4) / 4);
    console.log('Média final:' + media.toFixed(1));
    
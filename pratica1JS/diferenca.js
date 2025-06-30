const leia = require('readline-sync');

    let number1 = leia.questionInt('Digite o primeiro número: ');
    let number2 = leia.questionInt('Digite o segundo número: ');
    let number3 = leia.questionInt('Digite o terceiro número: ');
    let number4 = leia.questionInt('Digite o quarto número: ');

    const ans = (number1 * number2) - (number3 * number4);
    console.log(ans.toFixed(1));


const leia = require('readline-sync');

    let salario = leia.questionFloat('Digite o salário: ');
    let abono = leia.questionFloat('Digite o abono: ');

    let novoSalario = salario + abono;
    console.log('Novo salário: ' + novoSalario.toFixed(2));

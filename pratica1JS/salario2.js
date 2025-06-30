const leia = require('readline-sync');
let salarioBruto = leia.questionFloat('Digite o salário bruto: ');
let adicionalNoturno = leia.questionFloat('Digite o adicional noturno: ');
let horasExtras = leia.questionFloat('Digite o valor das horas extras: ');
let descontos = leia.questionFloat('Digite o valor do descontos: ');
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5 )- descontos;

console.log('Salário líquido: ' + salarioLiquido.toFixed(2));

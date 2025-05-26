const leia = require('readline-sync');

let salario, abono, novoSalario

salario = leia.questionFloat("Digite o Salário: ");
abono = leia.questionFloat("Digite o abono: ")

novoSalario = salario + abono

console.log("Novo Salário: " +
  new Intl.NumberFormat('pt-BR', {     
    style: 'currency',
    currency: 'BRL',
}).format(novoSalario))

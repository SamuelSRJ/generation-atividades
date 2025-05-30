const leia = require('readline-sync');

let num1, num2, op

num1 = leia.questionFloat("\nDigite o primeiro número: ");
num2 = leia.questionFloat("Digite o segundo número: ");
op = leia.questionInt("\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n\nQual operação você deseja? ")

switch (op) {
    case 1:
        console.log(`\n${num1} + ${num2} = ${num1 + num2}\n`)
        break
    case 2:
        console.log(`\n${num1} - ${num2} = ${num1 - num2}\n`)
        break
    case 3:
        console.log(`\n${num1} x ${num2} = ${num1 * num2}\n`)
        break
    case 4:
        console.log(`\n${num1} / ${num2} = ${num1 / num2}\n`)
        break
    default:
        console.log("\nOperação inválida!")
        break
}

const leia = require('readline-sync');

let saldo = 1000.00, op, valor

op = leia.questionInt(`\n1 - Saldo\n2 - Saque\n3 - Depósito\n\nEscolha uma operação: `)

switch (op) {
    case 1:
        console.log(`\nOperação - Saldo\nSaldo: R$ ${saldo}\n`)
        break
    case 2:
        valor = leia.questionFloat("Valor a ser sacado: R$ ")
        if(valor > saldo) {
            console.log(`\nOperação - Saque\nSaldo Insuficiente!\n`)
        } else {
            console.log(`\nOperação - Saque\nNovo Saldo: R$ ${saldo - valor}\n`)
        }
        break
    case 3:
        valor = leia.questionFloat("Valor a ser depositado: R$ ")
        console.log(`\nOperação - Deposito\nNovo Saldo: R$ ${saldo + valor}\n`)
        break
    default:
        console.log(`\nOperação Inválida!\n`)
        break
}
const leia = require('readline-sync');

let op, qtd, valor

console.log("\nCÓDIGO DO PRODUTO \t\tPRODUTO \tPREÇO UNITÁRIO");
console.log("\t1 \t\t  Cachorro Quente \t   R$ 10,00\n");
console.log("\t2 \t\t  X-Salada \t\t   R$ 15,00\n");
console.log("\t3 \t\t  X-Bacon \t\t   R$ 18,00\n");
console.log("\t4 \t\t  Bauru \t\t   R$ 12,00\n");
console.log("\t5 \t\t  Refrigerante \t\t   R$ 8,00\n");
console.log("\t6 \t\t  Suco de Laranja \t   R$ 13,00\n");

op = leia.questionInt("Código do produto: ");
qtd = leia.questionInt("Qual a quantidade: ");

switch(op) {
    case 1:
        valor = qtd * 10.00
        console.log("\nPRODUTO: Cachorro Quente")
        console.log(`VALOR TOTAL: R$${valor},00\n`)
        break
    case 2:
        valor = qtd * 15.00
        console.log("\nPRODUTO: X-Salada")
        console.log(`VALOR TOTAL: R$${valor},00\n`)
        break
    case 3:
        valor = qtd * 18.00
        console.log("\nPRODUTO: X-Bacon")
        console.log(`VALOR TOTAL: R$${valor},00\n`)
        break
    case 4:
        valor = qtd * 12.00
        console.log("\nPRODUTO: Bauru")
        console.log(`VALOR TOTAL: R$${valor},00\n`)
        break
    case 5:
        valor = qtd * 8.00
        console.log("\nPRODUTO: Refrigerante")
        console.log(`VALOR TOTAL: R$${valor},00\n`)
        break
    case 6:
        valor = qtd * 13.00
        console.log("\nPRODUTO: Suco de laranja")
        console.log(`VALOR TOTAL: R$${valor},00\n`)
        break
    default:
        console.log("Produto não encontrado!")
        return
}
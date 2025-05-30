const leia = require("readline-sync");

let total = 0, num;

do {
    num = leia.questionInt("Digite um número: ");
    if(num > 0) {
        total += num;
    }
} while(num != 0);

console.log(`\nA soma dos números positivos é: ${total}\n`);
const leia = require("readline-sync");

let totalMultiplo = 0, num, qtd = 0;

do {
    num = leia.questionInt("Digite um número: ");
    if(num % 3 === 0 && num != 0) {
        totalMultiplo += num;
        qtd++;
    }
} while(num != 0);

console.log(`\nA média de todos os números múltiplos de 3 é: ${totalMultiplo / qtd}\n`);
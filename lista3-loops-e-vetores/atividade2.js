const leia = require("readline-sync");

let num, impares = 0, pares = 0

for(let i = 1; i <= 10; i++) {
    num = leia.questionInt(`Digite o ${i}o número: `);
    if(num % 2 === 1) {
        impares++;
    } else {
        pares++;
    }
}

console.log(`\nTotal de números pares: ${pares}\nTotal de números ímpares: ${impares}\n`);
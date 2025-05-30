const leia = require("readline-sync");

let vet = [], total = 0;

for(let i = 0; i < 10; i++) {
    vet[i] = leia.questionInt(`Digite o ${i}o número do vetor: `);
    total += vet[i];
    console.clear();
}

console.log(`\nElementos nos índices ímpares: `);
for(let i = 1; i < 10; i += 2) {
    console.log(vet[i]);
}

console.log(`\nElementos pares: `);
for(let i = 0; i < 10; i++) {
    if(vet[i] % 2 === 0) {
        console.log(vet[i]);
    }
}

console.log(`\nSoma: ${total}`);
console.log(`Média: ${total / vet.length}`);
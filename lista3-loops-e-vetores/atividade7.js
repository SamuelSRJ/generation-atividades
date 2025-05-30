const leia = require("readline-sync");

const vet = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let num, pos = -1;

num = leia.questionInt("Digite o número que você deseja encontrar: ");

for(let i = 0; i < vet.length; i++) {
    if(vet[i] === num) {
        pos = i;
    }
}
if(pos != -1) {
    console.log(`\nO número ${num} está localizado na posição ${pos}\n`);
} else {
    console.log(`\nO número ${num} não foi encontrado!`);
}

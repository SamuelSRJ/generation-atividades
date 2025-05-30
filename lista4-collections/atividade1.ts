import leia from "readline-sync";

const vet: Array<string> = new Array<string>();

for(let i = 0; i < 5; i++) {
    vet.push(leia.question(`Digite a ${i + 1}a cor: `));
}

console.log("\nLISTA DE CORES: \n");
for(let cor of vet) {
    console.log(cor);
}

vet.sort();
console.log("\nLISTA DE CORES EM ORDEM ALFABETICA: \n");
for(let cor of vet) {
    console.log(cor);
}
import leia from "readline-sync";

const vet: Set<number> = new Set<number>();

for(let i = 0; i < 10; i++) {
    vet.add(leia.questionInt(`Digite o ${i}o número: `));
}

for(let num of vet) {
    console.log(num);
}
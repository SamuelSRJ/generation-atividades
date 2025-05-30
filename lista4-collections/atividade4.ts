import leia from "readline-sync";

const vet: Set<number> = new Set<number>();
let num: number;

vet.add(2);
vet.add(5);
vet.add(1);
vet.add(3);
vet.add(4);
vet.add(9);
vet.add(7);
vet.add(8);
vet.add(8);
vet.add(10);
vet.add(6);

num = leia.questionInt("Digite o número que você deseja encontrar: ");
if(vet.has(num)) {
    console.log(`O número ${num} foi encontrado!`);
} else {
    console.log(`O número ${40} não foi encontrado!`);
}
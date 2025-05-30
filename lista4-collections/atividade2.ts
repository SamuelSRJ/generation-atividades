import leia from "readline-sync";

const vet: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let num: number;

num = leia.questionInt("Digite um número: ");

if(vet.indexOf(num) != -1) {
    console.log(`O número ${num} está na posição ${vet.indexOf(num)}`);
} else {
    console.log(`O número ${num} não foi encontrado!`);
}
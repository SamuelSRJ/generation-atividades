const leia = require("readline-sync");

let menor21 = 0, maior50 = 0, idade = 0;


while(idade >= 0) {
    idade = leia.questionInt("Digite uma idade: ");
    if(idade < 21 && idade >= 0){
        menor21++;
    } else if(idade > 50) {
        maior50++;
    }
}

console.log("Idade negativa!\nPrograma encerrado!");
console.log(`\nTotal de pessoas menores de 21 anos: ${menor21}\nTotal de pessoas maiores de 50 anos: ${maior50}\n`);
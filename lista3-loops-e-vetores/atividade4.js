const leia = require("readline-sync");

let idade, genero, especialidade, op = true;
let totDevBack = 0, totMulCisTraFront = 0, totHomCisTraMobile40 = 0, totNaobiFull30 = 0, totalRespostas = 0, totalIdade = 0;

while(op === true) {
    idade = leia.questionInt("\nIdade: ");
    console.clear();
    genero = leia.questionInt("\n\nIdentidade de Gênero:\n1 - Mulher Cis\n2 - Homem Cis\n3 - Não Binário\n4 - Mulher Trans\n5 - Outros\n\n Escolha uma opção: ");
    console.clear();
    especialidade = leia.questionInt("Pessoa Desenvolvedora:\n\n1 - Backend\n2 - Frontend\n3 - Mobile\n4 - FullStack\n\n Escolha uma opção: ")
    console.clear();
    op = leia.keyInYNStrict("Deseja continuar?");
    console.clear()
    if(especialidade === 1) {
        totDevBack++;
    } else if((genero === 1 || genero === 4) && especialidade === 2) {
        totMulCisTraFront++;
    } else if(genero === 2 || genero === 5 && especialidade === 3 && idade > 40) {
        totHomCisTraMobile40++;
    } else if(genero === 3 && especialidade === 4 && idade < 30) {
        totNaobiFull30++;
    }
    totalRespostas++;
    totalIdade += idade;
}

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${totDevBack}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${totMulCisTraFront}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totHomCisTraMobile40}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${totNaobiFull30}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${totalRespostas}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${totalIdade / totalRespostas}\n`);
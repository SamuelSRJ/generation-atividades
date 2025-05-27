const leia = require('readline-sync');

let nome, idade, primeiraVez

nome = leia.question("Digite o Nome do doador: ")
idade = leia.questionInt("Digite a idade do doador: ")
primeiraVez = leia.question("Primeira doação de sangue? ")

// CONDIÇÕES PARA DOAR SANGUE
// Ter entre 18 e 69
// Pessoas entre 60 e 69 só podem doar se não for a primeira doação

if (idade > 0) {
    if (idade > 18 && idade < 60) {
        console.log(`\n${nome} está apto para doar sangue!`);
    } else if (idade >= 60 && idade < 70) {
        if(primeiraVez === "false") {
            console.log(`\n${nome} está apto para doar sangue!`);
        } else {
            console.log(`\n${nome} NÃO está apto para doar sangue!`);
        }
    } else {
        console.log(`\n${nome} NÃO está apto para doar sangue!`);
    }
} else {
    console.log("Informe uma idade valida!")
    return
}
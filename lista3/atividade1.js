const leia = require("readline-sync");

let primeiro, segundo

primeiro = leia.questionInt("\nDigite o primeiro número do intervalo: ");
segundo = leia.questionInt("Digite o segundo número do intervalo: ");

if(segundo < primeiro) {
    console.log("\n*ERRO:* O segundo número é menor que o primeiro.\nOperação inválida!\n");
} else {
    console.log(`\nNo Intervalo entre ${primeiro} e ${segundo}\n`)
    for(let i = primeiro; i <= segundo; i++) {
        if((i % 3 === 0) && (i % 5 === 0)) {
            console.log(`${i} é multiplo de 3 e 5`);
        }
    }
}
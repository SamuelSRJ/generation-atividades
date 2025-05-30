const leia = require('readline-sync');

let palavra1, palavra2, palavra3

palavra1 = leia.question("Informe a primeira palavra: ");
palavra2 = leia.question("Informe a segunda palavra: ");
palavra3 = leia.question("Informe a terceira palavra: ");

if(palavra1 === "vertebrado"){
    if(palavra2 === "ave") {
        if(palavra3 === "carnivoro") {
            console.log("\nÁGUIA");       
        } else if(palavra3 === "onivoro") {
            console.log("\nPOMBA");
        }
    } else if(palavra2 === "mamifero"){
        if(palavra3 === "onivoro") {
            console.log("\nHOMEM");
        } else if(palavra3 === "herbivoro") {
            console.log("\nVACA");
        }
    }
} else if ("invertebrado") {
    if(palavra2 === "inseto") {
        if(palavra3 === "hematofago") {
            console.log("\nPULGA");
        } else if(palavra3 === "herbivoro") {
            console.log("\nLAGARTA");
        }
    } else if(palavra2 === "anelideo") {
        if(palavra3 === "hematofago") {
            console.log("\nSANGUESSUGA");
        } else if(palavra3 === "onivoro") {
            console.log("\nMINHOCA");
        }
    }
}
const leia = require('readline-sync');

let palavra1, palavra2, palavra3

palavra1 = leia.question("Vertebrado ou Invertebrado? ")

if(palavra1 === "vertebrado") {
    palavra2 = leia.question("Ave ou Mamífero? ")
    if(palavra2 === "ave") { // AVE
        palavra3 = leia.question("Carnívoro ou Onívoro? ")
        if(palavra3 === "carnivoro") { // CARNIVORO
            console.log("\nÁGUIA")
        } else if (palavra3 === "onivoro"){ // ONIVORO
            console.log("\nPOMBA")
        }
    } else if(palavra2 === "mamifero"){ // MAMIFERO
        palavra3 = leia.question("Onívoro ou Herbívoro? ")
        if(palavra3 === "onivoro") {
            console.log("\nHOMEM")
        } else if(palavra3 === "herbivoro") {
            console.log("\nVACA")
        }
    }
} else { // INVERTEBRADO
    palavra2 = leia.question("Inseto ou Anelídeo? ")
    if(palavra2 === "inseto") {
        palavra3 = leia.question("Hematófago ou Herbívoro? ")
        if(palavra3 === "hematofago") {
            console.log("\nPULGA")
        } else if(palavra3 === "herbivoro") {
            console.log("\nLAGARTA")
        }
    } else if (palavra2 === "anelideo") {
        palavra3 = leia.question("Hematófago ou Onívoro? ")
        if(palavra3 === "hematofago") {
            console.log("\nSANGUESSUGA")
        } else if(palavra3 === "onivoro") {
            console.log("\nMINHOCA")
        }
    }
}
const leia = require('readline-sync');

let num1, num2, num3, num4

num1 = leia.questionFloat("Número 1: ");
num2 = leia.questionFloat("Número 2: ");
num3 = leia.questionFloat("Número 3: ");
num4 = leia.questionFloat("Número 4: ");

console.log("Diferença: " + ((num1 * num2) - (num3 * num4)))

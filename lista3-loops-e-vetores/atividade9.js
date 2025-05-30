const leia = require("readline-sync");

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let pos = 0; posS = matrix.length - 1, totDiagP = 0; totDiagS = 0;

console.log(`\nElementos da Diagonal Principal: `);
for(let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][pos]);
    totDiagP += matrix[i][pos];
    pos++;
}

console.log(`\nElementos da Diagonal Secundária: `);
for(let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][posS]);
    totDiagS += matrix[i][posS];
    posS--;
}

console.log(`\nSoma dos Elementos da Diagonal Principal: ${totDiagP}`);
console.log(`\nSoma dos Elementos da Diagonal Secundária: ${totDiagS}`);

// [1][2][3]
// [4][5][6]
// [7][8][9]

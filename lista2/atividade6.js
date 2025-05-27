const leia = require('readline-sync');

let nome, cargo, salario

nome = leia.question("\nNome do colaborador: ");
cargo = leia.questionInt("\nCargo: ");

if (cargo > 0 && cargo < 7) {
    salario = leia.questionFloat("\nSalário: ");
    switch (cargo) {
        case 1:
            console.log(`\nNome do colaborador: ${nome}`);
            console.log(`Cargo: Gerente`);
            console.log(`Salário: R$ ${salario + (0.1 * salario)}\n`)
            break
        case 2:
            console.log(`\nNome do colaborador: ${nome}`);
            console.log(`Cargo: Vendedor`);
            console.log(`Salário: R$ ${salario + (0.07 * salario)}\n`)
            break
        case 3:
            console.log(`\nNome do colaborador: ${nome}`);
            console.log(`Cargo: Supervisor`);
            console.log(`Salário: R$ ${salario + (0.09 * salario)}\n`)
            break
        case 4:
            console.log(`\nNome do colaborador: ${nome}`);
            console.log(`Cargo: Motorista`);
            console.log(`Salário: R$ ${salario + (0.06 * salario)}\n`)
            break
        case 5:
            console.log(`\nNome do colaborador: ${nome}`);
            console.log(`Cargo: Estoquista`);
            console.log(`Salário: R$ ${salario + (0.05 * salario)}\n`)
            break
        case 6:
            console.log(`\nNome do colaborador: ${nome}`);
            console.log(`Cargo: Técnico de TI`);
            console.log(`Salário: R$ ${salario + (0.08 * salario)}\n`)
            break
    }
} else {
    console.log("Cargo invalido!")
    return
}
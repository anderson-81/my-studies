/*
-- Instalação.
-- Comentário sobre variáveis.
*/

// Variável:
var x = 30;

// Constante:
const PI = 3.14;

//let, variável de escopo (escopo do let):
for (var a = 0; a < 10; a++) {
    console.log(a);
}

console.log(`Valor final de 'a': ${a}`);

for (let b = 0; b < 10; b++) {
    console.log(b);
}

// console.log(`Valor final de 'b': ${b}`); ERRO!
for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 4; y++) {
        console.log(`[${x + 1},${y + 1}] = ${x + y} `);        
    }
    // Não preciso reiniciar o y.
}
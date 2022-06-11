// Separar em partes o código.
// Para exportar, utilizo a palavra-chave "export" em variáveis e funções.

import { PI, somar, subtrair } from "./modulos/calculadora";

console.log(`PI: ${PI}`);

console.log(somar(2 + 4 + 7));

// Ao executar, vai dar erro, pois preciso compilar esse código para que o Node entenda.
// Instalar o es6-module-transpiler -g por npm ou yarn;
// Posso usar o babbel.

//exemplo:
//  compile-modules convert .\modulos\calculadora.js .\31_modulos.js -I . -o build --format commonjs

subtrair(39, 26);

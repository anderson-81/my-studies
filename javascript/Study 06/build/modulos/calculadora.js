"use strict";
exports.somar = somar, exports.message = message, exports.subtrair = subtrair;
const PI = 3.14;

function somar(...params) {
  let result = 0;
  for (let i = 0; i < params.length; i++) {
    result += params[i];
  }
  return result;
}

function message() {
  console.log("Hello, World!");
}

function subtrair(val1, val2){
  console.log(val1-val2);
}
exports.PI = PI;

//# sourceMappingURL=calculadora.js.map
"use strict";

try {
  throw "Essa é uma descrição do erro.";
} catch (error) {
  console.log(`${error}`);
}

try {
  throw { code: 333, message: "Essa é uma descrição do erro." };
} catch (error) {
  console.log(`${error.code} - ${error.message}`);
}

function ErrorMessage() {
  this.code = 777;
  this.message = "Essa é uma descrição do erro.";
}

try {
  throw new ErrorMessage();
} catch (error) {}

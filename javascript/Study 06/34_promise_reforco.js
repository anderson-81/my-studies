function myexample() {
  let variavel = require("./modulos/pcalc");
  variavel
    .pcalc(10, 3, 1)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error(error));
}

myexample();

// Mencionado, o uso de retorno de um promisse;
// Retorno de valor de uma promisse dentro de uma função.

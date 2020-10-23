// Arrow function (Lambda function):
var function01 = (msg) => {
  console.log(msg);
};

var function02 = (msg) => console.log(msg);

function01("Hello, World!");
function02("Hello, World!");

// Função encapsulada 01:
(function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
})(10, 3);

// Função encapsulada 02:
((x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
})(10, 3);

// Função encapsulada 03:
((...params) => {
  for (let i of params) {
    console.log(i);
  }
})(123, "Anderson", "M", Date.now(), 5432.11, true);

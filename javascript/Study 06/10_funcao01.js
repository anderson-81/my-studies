function somar1(x, y) {
  return x + y;
}

function somar2(x, y) {
  return x + y;
}

console.log(somar1(10, 3));
console.log(somar2(10, 3));

// Função anônima => Funções anônimas, também conhecidas como closures,
// permitem a criação de funções que não tem o nome especificado.

var somar3 = function (x, y) {
  return x + y;
};

console.log(somar3(10, 3));

window.onload = function onload(e) {};

var alertar = function () {
  alert("Hello, World!");
};

var btn1 = document.getElementById("btnclick1");
var btn2 = document.getElementById("btnclick2");
var btn3 = document.getElementById("btnclick3");
btn1.onclick = alertar;
btn3.onclick = alertar;

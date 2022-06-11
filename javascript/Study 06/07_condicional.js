var valor = 5212.11;

if (valor > 0) {
  console.log("Com saldo.");
} else if (valor == 0) {
  console.log("Zerado.");
} else {
  console.log("Em débito.");
}

var opc = 4;

switch (opc) {
  case 1:
    console.log("Opção 01.");
    break;
  case 2:
    console.log("Opção 02.");
    break;
  case 3:
    console.log("Opção 03.");
    break;
  default:
    console.log("Opção inválida.");
    break;
}

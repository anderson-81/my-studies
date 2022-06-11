var calculadora = {
  num1: 0,
  num2: 0,
  somar: () => {
    return calculadora.num1 + calculadora.num2;
  },
  subtrair: () => {
    return calculadora.num1 - calculadora.num2;
  },
  multiplicar: () => {
    return calculadora.num1 * calculadora.num2;
  },
  dividir: () => {
    return calculadora.num1 / calculadora.num2;
  },
  modular: () => {
    return calculadora.num1 % calculadora.num2;
  },
  about: {
    description: "Sistema de Calculadora.",
    version: "v1.0",
  },
};

var calculadora2 = {
  num1: 0,
  num2: 0,
};

calculadora.num1 = 10;
calculadora.num2 = 3;
console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());
console.log(calculadora.modular());
console.log(calculadora.about.description, calculadora.about.version);

// Todas as chaves (keys) de um objeto:
console.log("principal: " + Object.keys(calculadora));
console.log("about: " + Object.keys(calculadora.about));

// comparação de itens de objeto:
console.log(Object.is("num1", 33));


//-------------------------------------------------------

var p1 = {
    id: 123,
    name: 'Anderson'
};

var p2 = {
    id: 123,
    name: 'Anderson'
};

console.log(`p1 == p2 => ${Object.is(p1, p2)}`);

var p3 = Object.freeze(p1);
console.log(p3);
p3.id = 543; // Não altera o valor;
console.log(Object.isFrozen(p3));

// passando objeto json para texto:
console.log(JSON.stringify(p3));

// passando string para json:
var str = "{\"id\":123,\"name\":\"Anderson\"}";
console.log(JSON.parse(str));




























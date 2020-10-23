//Symbol

/*
O ES6 introduz um novo tipo primitivo chamado Symbol. Eles são úteis 
para implementar a metaprogramação em programas JavaScript.

Um símbolo é apenas um pedaço de memória na qual você pode armazenar alguns dados. 
Cada símbolo apontará para um local de memória diferente. 
Os valores retornados por um construtor Symbol () são únicos e imutáveis.


*/

function example01() {
  const s1 = Symbol();
  const s2 = Symbol();
  console.log(typeof s1);
  console.log(s1 === s2);
  const s3 = Symbol("Hello");
  const s4 = Symbol("Hello");
  console.log(s3, s4);
  console.log(s3 === s4);
}

function example02() {
  const ID = Symbol();
  const NAME = Symbol();

  class Person {
    constructor(id, name) {
      this[ID] = id;
      this[NAME] = name;
    }
  }

  let p = new Person(123, "Anderson");
  console.log(p);
  p[ID] = 43421;
  console.log(`${p[ID]} - ${p[NAME]}`);

  //FOR
  const dateNow1 = Symbol.for("dateNow");
  const dateNow2 = Symbol.for("dateNow");
  const dateNow3 = Symbol("dateNow");
  console.log(dateNow1 == dateNow2); // true (ambos no registro)
  console.log(dateNow1 == dateNow3); // false (dateNow3 fora do registro)
}

function example03() {
  const s1 = Symbol.for("symbol01");
  const s2 = Symbol("symbol02");
  console.log(Symbol.keyFor(s1)); // recuperando quando registrado.
  console.log(Symbol.keyFor(s2)); // Não recupera pois não está registrado.
}

// example01();
// example02();
example03();

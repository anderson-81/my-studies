/*
O ES6 introduz novos recursos em torno da metaprogramação, que envolve inspecionar 
ou modificar a estrutura do programa ou alterar a maneira como as coisas funcionam 
na própria linguagem.

A seguir, estão as três formas de meta programação -

Introspecção - Introspecção significa um programa que coleta informações sobre si mesmo. 
Alguns exemplos de operadores JavaScript usados ​​para introspecção são typeof, instanceof etc.

Auto-modificação - Auto-modificação refere-se à modificação da estrutura de um programa em tempo 
de execução. Envolve acessar ou criar novas propriedades em tempo de execução. 
Em outras palavras, a auto-modificação ocorre quando algum código se modifica.

Intercessão - refere-se ao código que modifica o comportamento padrão de uma linguagem de programação. 
A intercessão envolve a modificação da semântica da linguagem de programação ou a adição de novas 
construções ao programa em tempo de execução.
*/

function apply01() {
  const greeting = function (id, name) {
    console.log(`${id} - ${name}`);
  };
  var datas = [123, "Anderson"];
  Reflect.apply(greeting, null, datas);
}

function apply02() {
  const greeting = function (id, name) {
    return `${thisValue.id}${id} - ${thisValue.name}${name}`;
  };

  const thisValue = {
    id: "ID: ",
    name: "NAME: ",
  };

  var datas = [123, "Anderson"];
  console.log(Reflect.apply(greeting, thisValue, datas));
}

function constructor01() {
  class Person {
    constructor(fname, sname) {
      this.fname = fname;
      this.sname = sname;
    }
    get fullname() {
      return `${this.fname} ${this.sname}`;
    }
  }

  const args = ["Anderson", "Marins"];

  const p1 = Reflect.construct(Person, args);

  console.log(p1.getName());
}

function getreflect() {
  class Person {
    constructor(fname, sname) {
      this.fname = fname;
      this.sname = sname;
    }
    get fullname() {
      return `${this.fname} ${this.sname}`;
    }
  }

  const args = ["Anderson", "Marins"];
  const p1 = Reflect.construct(Person, args);
  let result = Reflect.get(p1, "fullname");
  console.log(`Fullname: ${result}`);
}

function setreflect() {
  class Person {
    constructor(fname, sname) {
      this.fname = fname;
      this.sname = sname;
    }
    get fullname() {
      return `${this.fname} ${this.sname}`;
    }
  }

  const args = ["Anderson", "Marins"];
  const p1 = Reflect.construct(Person, args);

  let result = Reflect.get(p1, "fullname");
  console.log(`Fullname: ${result}`);

  Reflect.set(p1, "fname", "Conceição");
  console.log(`Fullname: ${result}`);
}

function hasReflect() {
  class Person {
    constructor(fname, sname) {
      this.fname = fname;
      this.sname = sname;
    }
    get fullname() {
      return `${this.fname} ${this.sname}`;
    }
  }

  const args = ["Anderson", "Marins"];
  const p1 = Reflect.construct(Person, args);

  console.log(p1);

  console.log(Reflect.has(p1, "fullname")); // existe metodo fullname.
  console.log(Reflect.has(p1, "fname")); // existe atributo fname.
  console.log(Reflect.has(p1, "id")); // nao existe atributo id.
}

//apply01();
//apply02();

// constructor01();

// getreflect();

// setreflect();

hasReflect();

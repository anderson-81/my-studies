/*
PROXY

O ES6 implementa a forma de intercessão da meta programação usando Proxies. 
Semelhante ao ReflectAPI, a Proxy API é outra maneira de implementar a meta programação no ES6. 

O objeto Proxy é usado para DEFINIR O COMPORTAMENTO PERSONALIZADO PARA OPERAÇÕES FUNDAMENTAIS. 

Um objeto proxy executa algumas operações em nome do objeto real.

const proxy = new Proxy(target,handler)
*/

function proxy01() {
  function criarRetangulo(tamanho, altura) {
    return tamanho * altura;
  }

  const handler = {
    apply: function (target, thisArgs, args) {
      console.log(`target: ${target}`);
      console.log(`thisArgs: ${thisArgs}`);
      console.log(`args: ${args}`);
      if (args.length == 2) {
        return Reflect.apply(criarRetangulo, thisArgs, args);
      } else {
        console.log("Nenhuma operação executada.");
      }
    },
  };

  const proxy = new Proxy(criarRetangulo, handler);
  const retangulo = proxy(200, 300);
  console.log(`Area: ${retangulo}`);
}

function proxy02() {
  class Person {
    constructor(fname, sname) {
      this.fname = fname;
      this.sname = sname;
    }

    get fullname() {
      return `${this.fname} ${this.sname}`;
    }
  }

  const handler = {
    construct: function (target, args) {
      if (args.length == 2) {
        return Reflect.construct(target, args);
      } else {
        throw "Please enter First name and Last name.";
      }
    },
  };

  const PersonProxy = new Proxy(Person, handler);
  const p1 = new PersonProxy("José", "da Silva");
  console.log(p1.fullname);
}

function proxy03() {
  class Person {
    constructor(fname, sname) {
      this.fname = fname;
      this.sname = sname;
    }

    get fullname() {
      return `${this.fname} ${this.sname}`;
    }
  }

  const handler = {
    get: function (target, property) {
      return Reflect.get(target, property).toUpperCase();
    },
  };

  const p1 = new Person("Jose", "da Silva");
  const proxy = new Proxy(p1, handler);
  console.log(proxy.fullname);
}

function proxy04() {
  class Person {
    constructor(fname, sname) {
      this.fname = fname;
      this.sname = sname;
    }

    get fullname() {
      return `${this.fname} ${this.sname}`;
    }
  }

  const handler = {
    set: function (target, property, value) {
      if (value.length > 2) {
        return Reflect.set(target, property, value);
      }
      throw "Please enter First name and Last name.";
    },
  };

  const p1 = new Person("Jose", "da Silva");
  const proxy = new Proxy(p1, handler);
  console.log(proxy.fullname);
}

function proxy05() {
  class Person {
    constructor(fname, sname) {
      this.fname = fname;
      this.sname = sname;
    }
  }

  const handler = {
    has: function (target, property) {
      console.log("Checking for " + property + " in the object");
      return Reflect.has(target, property);
    },
  };

  const p1 = new Person("Jose", "da Silva");
  const proxy = new Proxy(p1, handler);
  // console.log(proxy.fullname);
  console.log(proxy);
}

// proxy01();
// proxy02();
// proxy03();
// proxy04();
proxy05();

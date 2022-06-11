function classe01() {
  class Person {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }

  let p = new Person(1, "Anderson");
  console.log(p.name);
}

//expressao de classe:
function classe02() {
  var Person = class {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  };

  let p = new Person(1, "Anderson");
  console.log(p.name);
}

//expressao de classe:
function classe03() {
  var Person = class Person {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  };

  let p = new Person(1, "Anderson");
  console.log(p.name);
}

function classe04() {
  let p = new Person(1, "Anderson");
  console.log(p.name);

  class Person {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
}

classe01();
classe02();
classe03();
classe04(); //error!!!

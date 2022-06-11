class Pessoa {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  show = () => {
    console.log(`${this.id} - ${this.name}`);
  };
}

class PessoaFisica extends Pessoa {
  constructor(id, name, cpf) {
    super(id, name);
    this.cpf = cpf;
  }

  show = () => {
    console.log(`${this.id} - ${this.name} - ${this.cpf}`);
  };
}

let pf = new PessoaFisica(1, "Anderson", "44411155588899");
pf.show();

// Mostrado o uso do Object.setPrototypeOf.

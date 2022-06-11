var person = function (id, name) {
  this.id = id;
  this.name = name;
  this.operacao = "";

  //getter:
  this.getid = function () {
    return this.id;
  };

  this.getname = () => this.name;

  //setter:
  this.setid = (id) => (this.id = id);
  this.setname = (name) => (this.name = name);

  //metodos publicos:
  this.showperson = () => {
    return `${id} - ${name}`;
  };

  //metodos privados:
  var setoperacao = (() => {
    this.operacao = "78267831278323235327";
    console.log("executado!");
  })();
};

var obj = new person(1, "Anderson");
console.log(obj.showperson());

// obj.setoperacao(); //ERROR!!!

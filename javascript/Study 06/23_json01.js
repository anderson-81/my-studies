//Forma de criar 01:
var json1 = {};

//Forma de criar 02:
var json2 = new Object();

//Forma de criar 03:
var json3 = {
    id: 123,
    'name': 'Anderson',
    "status": true,
    salary: 4321
};

//Acessando itens:
console.log(json3.id, json3['name'], json3["status"]);

//JSON destruiu a ideia do XML.

//Excluindo itens do objeto json:
delete json3.salary;

console.log(json3);

//comparando:

// objeto do tipo obj1:
var obj1 = {
    id: 123,
    name: 'Andeson'
};

// objeto do tipo obj2:
var obj2 = {
    id: 123,
    name: 'Andeson'
};

console.log(obj1 == obj2); //diferentes

// copiando um objeto:
var obj3 = Object.assign(obj1);
console.log(obj3);
// editando valores:
obj3.id = 432;
obj3.name = 'Mara';
console.log(obj3 == obj1); //true

//desmembrando os itens do objeto.
var {id, name} = obj3;
console.log(`ID: ${id} - NAME: ${name}`);





// Juntar tudo numa string.

var people = ['João', 'Maria', 'José', 'Carmen'];

console.log(people.join());
console.log(people.join('|'));

// Concatenação 01:
var vetor1 = [1,3,5,7,9];
var vetor2 = [0,2,4,6,8];

// Concatenação 02:
console.log(vetor1.concat(vetor2));
console.log(vetor2.concat(vetor1));

//indexof:
console.log(people.indexOf('Carmen'));

//slice:
console.log(people.slice(1,3));
console.log(people.slice(-2)); // 2 ultimos;

//adicionando item na primeira posição:
people.unshift("Robert");
console.log(people);

//removendo ultimo item:
people.pop()
console.log(people); //remove Carmen

//adicionando com splice:
//obs: posso esquecer todos os metodos anteriores e usar esse. 
console.log(`vetor atual: ${people}`);
people.splice(1, 0, 'Márcia'); //entre Robert e João adiciono Márcia.
console.log(people);
people.splice(2, 1, 'Joana');
console.log(people); //trocando João por Joana.

// vetor to string
console.log(people.toString());

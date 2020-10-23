var people = ["João", "Maria", "José", "Carmen"];

people.forEach((v, k) => {
  console.log(k, v);
});

console.log("------------------------------");

for (const key in people) {
  console.log(key, people[key]);
}

console.log("------------------------------");

// será executado em todos os itens do vetor:
var r1 = people.every((v, i, people) => {
  return people[i].length < 3;
});

console.log(`resultado (every): ${r1}`);

console.log("------------------------------");

// filtrando resultados:
var r2 = people.filter((v, i, people) => {
  return people[i].startsWith("J");
});

console.log(`resultado (filter): ${r2}`);

console.log("------------------------------");

// executando um somatório com reduce:
var vetor = [20, 30, 15, 25, 10];

var r3 = vetor.reduce((a,b)=>{
    return a + b;
});
console.log(`resultado (reduce): ${r3}`);

console.log("------------------------------");

var r4 = vetor.reduceRight((a,b)=>{
    return a + b;
});
console.log(`resultado (reduceRight): ${r4}`);

console.log("------------------------------");

// se existe algum item multiplo de 10:
var r5 = vetor.some((a,b) => {
    return ((a % 10) == 0);
});
console.log(`resultado (some): ${r5}`);

console.log("------------------------------");


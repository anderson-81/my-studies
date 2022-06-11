var map = new Map();
map.set("color1", "green");
map.set("color2", "yellow");
map.set("color3", "blue");
map.set("color4", "white");
map.set("color5", "red");

for ([key, value] of map) {
  console.log(`- ${key} => ${value}`);
}

//  todos os itens:
console.log(map);

//  acessando item:
console.log(map.get("color3"));

//  se tem chave
console.log(map.has("color6"));

//  tamanho
console.log(map.size);

//  values
console.log(map.values());
for (let item of map.values()) {
  console.log("-", item);
}

//  foreach:
map.forEach((v, k, map) => {
  console.log(k, v);
});

//  entries:
console.log(map.entries());
for (let item of map.entries()) {
  console.log(`- ${item[0]} => ${item[1]}`);
}

//  vetor:
for (let item of map.entries()) {
  console.log(item.join(":"));
}

//  limpando tudo:
map.clear();
console.log(map);

// Iniciando Map com dados:
var map1 = new Map([
  ["item1", true],
  ["item2", 5452.11],
  ["item3", "Testing"],
  ["item4", 123],
]);

console.log(map1);

map1.forEach((v, k) => {
  console.log(k, v);
});

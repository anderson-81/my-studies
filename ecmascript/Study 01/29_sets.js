var set = new Set();

// Adicionando itens:
set.add(123);
set.add("Anderson");
set.add(7777.33);
set.add("M");
set.add(new Date(2000, 11 - 1, 12));

// Listar itens:
set.forEach((item) => {
  console.log(item);
});

// Tem item?
console.log(set.has(123));

// Valores:
console.log(set.values());

// Chaves:
console.log(set.keys());

// Listando entradas:
for (let item of set.entries()) {
  console.log(item[0]);
}

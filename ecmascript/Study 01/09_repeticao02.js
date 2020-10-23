var people = [
  { name: "Anne" },
  { name: "Lucy" },
  { name: "Tiffany" },
  { name: "Carmen" },
];

// FOR
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// FOR ..IN
for (const i in people) {
  const person = people[i];
  console.log(i, person.name);
}

// FOR ..OF
for (const person of people) {
  console.log(person.name);
}

var map = new Map();
map.set(11, "green");
map.set(21, "yellow");
map.set(31, "white");
map.set(41, "blue");
map.set(51, "red");

for (let iterator of map) {
  console.log(iterator);
  console.log(iterator[0], iterator[1]);
  console.log("-------------------------------------------");
}

for (let [key, value] of map) {
  console.log(key, value);
}

var objset = new Set();
objset.add(1, "Anne");
objset.add(2, "Carmen");
objset.add(3, "Tiffany");
objset.add(4, "Lucy");
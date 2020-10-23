const msg = "Hello, World!";

console.log(`First Char: ${msg.charAt(0)}`);

var concat = "";
for (let index = 0; index < msg.length; index++) {
  concat =
    index == 0
      ? msg[index].charCodeAt()
      : concat + ", " + msg[index].charCodeAt();
}

console.log(concat);

console.log(msg.replace("World!", "Mundo!"));

var itens = "id,name,email,salary,birthday,gender,status";
console.log(itens.split(""));
console.log(itens.split(",")); //gera um vetor com os dados usando ',' como base.
console.log(itens.split()); //retorna ele mesmo!


console.log(msg.substring(7,12));

console.log(msg.toUpperCase());

console.log(msg.toLowerCase());
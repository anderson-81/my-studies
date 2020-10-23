const msg = "Hello, World!";

console.log(msg.indexOf("W"));

console.log(msg.lastIndexOf("o"));

console.log(msg.search("W"));

console.log(msg.bold());

console.log(msg.big().fontcolor("red"));

console.log(msg.startsWith("Olá"));

console.log(msg.endsWith("World!"));

console.log(msg.includes("Y"));

// Meus próprios métodos:

String.prototype.capitalize = function () {
  console.log(this);
  return (
    this.charAt(0).toUpperCase() + this.substring(1, this.length).toLowerCase()
  );
};

console.log(msg.capitalize());

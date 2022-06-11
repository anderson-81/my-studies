function function01() {
  let obj = new RegExp("string");
  console.log(obj);
}

//flags:
function function02() {
  let rxp1 = new RegExp("string", "g"); // global
  console.log(rxp1.global);

  let rxp2 = new RegExp("string"); // não global
  console.log(rxp2.global);
}

function function02() {
  let rxp1 = new RegExp();
  let rxp2 = new RegExp();

  // Global
  rxp1 = RegExp("string", "g"); // global
  console.log(rxp1.global);

  rxp2 = new RegExp("string"); // não global
  console.log(rxp2.global);

  // IgnoreCase:
  rxp1 = RegExp("string", "i"); // ignorecase
  console.log(rxp1.ignoreCase);

  rxp2 = new RegExp("string"); // não ignorecase
  console.log(rxp2.ignoreCase);

  // lastIndex
  let text = "Javascript is an interesting scripting language";
  rxp1 = RegExp("script", "g");
  rxp1.test(text);
  console.log(rxp1.lastIndex);
  rxp1.test(text);
  console.log(rxp1.lastIndex);

  // multiline:
  rxp1 = RegExp("string", "m"); // multiline
  console.log(rxp1.multiline);

  rxp2 = RegExp("string"); // não multiline
  console.log(rxp2.multiline);

  // Source:
  var re = new RegExp("script", "g");
  console.log(re.test(text));
  console.log(re.source);
}

function function03() {
  // se encontrar, retorna true:
  var text = "hello, 123456789 World 432.111.763-11!";
  var rxp = new RegExp("hello", "g");
  console.log(rxp.exec(text));
  // console.log(rxp.exec(text).length); // retorna 1 se encontrado.
}

function function04() {
  // se encontrar, retorna true:
  var text = "hello, 123456789 World 432.111.763-11!";
  var rxp = new RegExp("eqweqweqwew", "g");
  console.log(rxp.test(text));
}

function function05() {
  var text = "hello, 123456789 World 432.111.763-11!";
  var rxp = new RegExp("[1-9]", "g");
  console.log(text.match(rxp));
}

function function06() {
  var text = "Hello, World!";
  console.log(text.replace("World", "Anderson"));
}

function function06() {
  let str = "Hello, World!";
  let regexp = new RegExp("llo");
  console.log(str.search(regexp));
}

function function07() {
  let text = "Hello, World!";
  let rgxp = "Hello, ";
  console.log(text.split(rgxp));
  // console.log(text.split(rgxp).length);
}

function function08() {
  let text = "Hello, World!";
  let rgxp = new RegExp("Hello", "g");
  console.log(rgxp.toString(text));
}

// function01();
// function02();
// function03();
// function04();
// function05();
// function06();
// function07();
function08();

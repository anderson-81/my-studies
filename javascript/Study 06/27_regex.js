function exemplo01() {
  var r = new RegExp("ABC", "g");
  console.log(r.test("ABDterra"));
  console.log(r.test("ABmarte"));
  console.log(r.test("ABCworld"));
}

function exemplo02() {
  var cepRegex1 = /[0-9]{5}-[0-9]{3}/;
  var texto = "Cep antigo é 54211-111, e o novo 32121-987";

  //testando se existe a expressão:
  console.log(cepRegex1.test(texto));

  //Executes a search on a string using a regular expression pattern,
  //and returns an array containing the results of that search.
  console.log(cepRegex1.exec(texto));

  //pegando todos os ceps:
  var cepRegex2 = /[0-9]{5}-[0-9]{3}/g; //adicionado um 'g' no final
  console.log("ceps encontrados: " + texto.match(cepRegex2));
}

// exemplo01();
// exemplo02();

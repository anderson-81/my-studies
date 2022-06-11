let vetor = [65, 32, 13, 45, 87];

function function01() {
  for (let item of vetor) {
    console.log(item);
  }
}

function function02() {
  let it = vetor[Symbol.iterator]();
  for (let index = 0; index < vetor.length; index++) {
    console.log(it.next());
  }
}
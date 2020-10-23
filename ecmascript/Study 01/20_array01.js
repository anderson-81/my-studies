// formas de criar vetores:

function exemplo01() {
  var vetor1 = [5, 6, 4, 7, 3, 8, 2, 9, 1, 0];
  console.log(vetor1);
}

function exemplo02() {
  var vetor2 = [];
  vetor2[4] = -6;
  vetor2[7] = 33;
  vetor2.push(5);
  vetor2.push(4);
  vetor2.push(8);
  vetor2.push(1);
  vetor2.push(1);
  console.log(vetor2);
}

function exemplo03() {
  var vetor3 = [
    123,
    4321.11,
    true,
    "M",
    "Anderson",
    {
      address: {
        rua: "Rua de Teste",
        numero: 4,
        bairro: "Bairro do Teste",
        cidade: "Rio de Janeiro",
      },
      vetor: [5, 1, 3, 8],
    },
  ];

  for (const key in vetor3) {
    if (vetor3.hasOwnProperty(key)) {
      const element = vetor3[key];
      console.log(element);
    }
  }
}

//exemplo01();
//exemplo02();

exemplo03();

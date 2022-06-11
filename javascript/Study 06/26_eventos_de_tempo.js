function exemplo01() {
  console.log("executing...");
  setTimeout(() => {
    console.log("Hello, World!");
  }, 3000);
}

function exemplo02() {
  console.log("executing...");
  var timeout = setTimeout(() => {
    console.log("Hello, World!");
  }, 3000);

  // limpa o timeout agendado:
  setTimeout(() => {
    console.log("clearTimeout!");
    clearTimeout(timeout);
  }, 2000);
}

// exemplo01();
// exemplo02();

function exemplo03() {
  var cont = 0;
  var interval = setInterval(() => {
    console.log("Hello, World!");
    cont++;
    if (cont == 5) {
      clearInterval(interval);
      console.log("clearInterval!");
    }
  }, 3 * 1000);
}

// exemplo03();

function exemplo04() {
  var interval = setInterval(() => {
    console.log("Hello, World!");
  }, 3 * 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("clearInterval!");
  }, 1000 * 15);
}

exemplo04();

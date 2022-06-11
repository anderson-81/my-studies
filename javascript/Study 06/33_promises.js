// Promises => Promessas
// Deixa o código assincrono (nao prende a aplicação numa execução).
// Deixa o código mais legível.

function exemplo01() {
  // Código para explicação:
  function notificar(email, sms) {
    console.log("Inicializar notificação.");
    setTimeout(() => {
      email();
      setTimeout(() => {
        sms();
      }, 2000);
    }, 1000);
  }

  notificar(
    () => {
      console.log("Notificação de E-mail.");
    },
    () => {
      console.log("Notificação de SMS.");
    }
  );

  console.log("Finalizado!"); // executado antes do fim;
}

// exemplo01();

function exemplo02() {
  var mp = require("./modulos/mpromise");

  console.log(mp.saudacao("Anderson")); // Promise { 'Hello, Anderson!' }

  // console.log(mp.saudacao('')); // Promise { 'Hello, Anderson!' }

  // Implementando o uso do promise corretamente:

  mp.saudacao("Anderson")
    .then((r) => {
      console.log(r);
    })
    .catch((e) => {
      console.error(e);
    });

  // mp.saudacao("")
  //   .then((r) => {
  //     console.log(r);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });
}

exemplo02();

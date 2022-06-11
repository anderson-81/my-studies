class MyClass {
  /**
   *
   * @param {Number} num1 Numero Inteiro.
   * @param {Number} num2 Numero Inteiro.
   */

  somar(num1, num2) {
    return num1 + num2;
  }

  /**
   *
   * @param {String} nome Nome para saudação.
   */
  saudar(nome) {
    return `Hello, ${nome}!`;
  }

  //metodos estaticos:
  static cont = 0;

  static increment() {
    MyClass.cont++;
  }
}

let obj = new MyClass();
console.log(obj.saudar("Anderson"));

while (true) {
  console.log(MyClass.cont);
  MyClass.increment();
  if (MyClass.cont == 10) {
    break;
    console.log("finalizado!");
  }
}

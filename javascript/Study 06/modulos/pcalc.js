exports.pcalc = (val1, val2, opc) => {
  let toexecute = () => {
    if (opc == 1) {
      return val1 + val2;
    }
    if (opc == 2) {
      return val1 - val2;
    }
    if (opc == 3) {
      return val1 * val2;
    }
    if (opc == 4) {
      return val1 / val2;
    }
    if (opc == 5) {
      return val1 % val2;
    }
  };

  var p = new Promise((resolve, reject) => {
    if (opc == 4) {
      if (val2 == 0) {
        reject(Error("Divisão por zero."));
      }
    }
    resolve(toexecute());
  });

  return p;
};

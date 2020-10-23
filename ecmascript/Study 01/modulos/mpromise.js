exports.saudacao = (name) => {
  let checkName = () => {
    return name.length == 0;
  };

  var p = new Promise((resolve, reject) => {
    if (checkName()) {
      reject(Error("Nome vazio."));
    }
    resolve(`Hello, ${name}!`);
  });

  return p;
};

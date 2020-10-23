export const PI = 3.14;

export function somar(...params) {
  let result = 0;
  for (let i = 0; i < params.length; i++) {
    result += params[i];
  }
  return result;
}

export function message() {
  console.log("Hello, World!");
}

export function subtrair(val1, val2){
  console.log(val1-val2);
}
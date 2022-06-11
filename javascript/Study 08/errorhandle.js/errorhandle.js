import { MyError } from "../errors.js";

let num1 = 10;
let num2 = 0;

try {
    if (num2 == 0) {
        throw ("Divisão por zero.");
    }
    console.log(num1 / num2);
} catch (e) {
    console.error(`Error: ${e}`);
}

/*
class MyError{
    constructor(){
        this.name = "Custom Error";
        this.message = "Divisão por zero.";
    }
}
*/


try {
    if (num2 == 0) {
        throw new MyError();
    }
    console.log(num1 / num2);
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
}



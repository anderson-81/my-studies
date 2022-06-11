import { sumAsync02 as promiseSum, Person } from "./mymodule.js";

promiseSum(13, 27).then((success) => {
    console.log(`Sucessfully executed. | Result: ${success}`);
}).catch((err) => {
    console.error(`Error: ${err}`);
});

let p = new Person();
console.log(typeof(p));
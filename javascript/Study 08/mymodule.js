let sumAsync02 = (num1, num2) => {
    let promisse = new Promise((resolve, reject) => {
        if ((num1 > 0) && (num2 > 0)) {
            return resolve(num1 + num2);
        } else {
            return reject("Error summing.");
        }
    });
    return promisse;
}

class Person{
}

export { sumAsync02, Person };




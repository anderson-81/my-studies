function sumAsync01(num1, num2) {
    let promisse = new Promise((resolve, reject) => {
        if ((num1 > 0) && (num2 > 0)) {
            return resolve(40);
        } else {
            return reject("Error summing.");
        }
    }).then((success) => {
        console.log(`Sucessfully executed.`);
        console.log(success);
    }).catch((err) => {
        console.error(`Error: ${err}`);
    });
}

function sumAsync02(num1, num2) {
    let promisse = new Promise((resolve, reject) => {
        if ((num1 > 0) && (num2 > 0)) {
            return resolve(num1 + num2);
        } else {
            return reject("Error summing.");
        }
    });
    return promisse;
}

sumAsync02(13, 27).then((success) => {
    console.log(`Execution 01: Sucessfully executed. | Result: ${success}`);
    return sumAsync02(success, success).then((success) => {
        console.log(`Execution 02: Sucessfully executed. | Result: ${success}`);
        return sumAsync02(success, success)
    }).then((success) => {
        console.log(`Execution 03: Sucessfully executed. | Result: ${success}`);
        return sumAsync02(success, success)
    }).catch((err) => {
        console.error(`Error: ${err}`);
    })
});


Promise.all([sumAsync02(10, 20), sumAsync02(30, 40), sumAsync02(50, 60)]).then((result) => {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
}).catch((error) => {
    console.log(`Error: ${error}.`);
});

Promise.race([sumAsync02(10, 20), sumAsync02(30, 40), sumAsync02(50, 60)]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(`Error: ${error}.`);
});



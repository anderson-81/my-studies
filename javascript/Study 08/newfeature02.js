async function* calc(num1, num2) {
    yield await Promise.resolve(num1 + num2);
    yield await Promise.resolve(num1 - num2);
    yield await Promise.resolve(num1 * num2);
    yield await Promise.resolve(num1 / num2);
    yield await Promise.resolve(num1 % num2);
}

async function execute(){
    for await(let c of calc(15, 25)){
        console.log(c);
    }
}

execute();
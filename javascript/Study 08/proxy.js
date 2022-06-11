/*
function greeting(name, status, salary){
    console.log(name, status, salary);
    return `Hello, ${name}!`;
}
*/

function greeting(name) {
    return `Hello, ${name}!`;
}

const handler = {
    apply: function (target, thisArgs, args) {
        console.log(args);
        return Reflect.apply(target, thisArgs, args);
    }
}

const proxy = new Proxy(greeting, handler);
// const result = proxy("Anderson", true, 6542.11);
const result = proxy("Anderson");
console.log(result);


function ProxyConstructor() {

    class Person {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }

    const handler = {
        constructor: function (target, args) {
            return Reflect.construct(target, args);
        },
        get: function (target, property) {
            Reflect.get(target, property);
        },
        set: function (target, property, value) {
            return Reflect.set(target, property, value);
        },
        has: function (target, property) {
            return Reflect.has(target, property)
        }
    }

    const person = new Person(123, "Anderson");
    const proxy = new Proxy(person, handler);
    console.log(proxy);
    console.log(proxy.name);
    proxy.name = "Anderson C.";
    console.log(proxy.name);
    console.log('name' in proxy);
}

ProxyConstructor();
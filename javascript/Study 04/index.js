"use strict";

//import * as test from "./support.js"

var i = 20;

{
    let i = 10;
    console.log(i);
}

console.log(i);

let num = "Anderson";
console.log(typeof num);

let message = {
    title: "Message Title",
    body: "Lorem ipsum hsa djhsag jhdsgh dgas dasjhd sjhag dasj.",
    published: new Date(1981, 11, 12, 10, 30).toString()
};

console.log(typeof message);
console.log(message.title);
console.log(message.body);
console.log(message.published);

function createarray(...params) {
    const nums = [];
    params.forEach((item) => {
        nums.push(item);
    });
    nums.push(2, 9, 1, 0);
    nums.forEach((num) => {
        console.log(num);
    });
}

createarray(5, 6, 4, [7, 3, 8]);

(() => {
    console.log("Auto execution!");
})();

var properties = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7
};

var vector = [123, 'A', true, "Anderson", new Date(), 2712.11];

for (var item in properties) {
    console.log(item);
}

// Error:
/*
for(var item of properties){
    console.log(item);
}
*/

// Index:
for (var item in vector) {
    console.log(item);
}

// Values:
for (var item of vector) {
    console.log(item);
}

let x, y = 0;

// #region Label loop

function label01() {
    outerloop: // This is the label name
    for (var i = 0; i < 5; i++) {
        console.log("Outerloop: " + i);
        innerloop:
        for (var j = 0; j < 5; j++) {
            if (j > 3) break; // Quit the innermost loop
            if (i == 2) break innerloop; // Do the same thing
            if (i == 4) break outerloop; // Quit the outer loop
            console.log("Innerloop: " + j);
        }
    }
}

function label02() {
    outerloop: // This is the label name
    for (var i = 0; i < 3; i++) {
        console.log("Outerloop: " + i);
        for (var j = 0; j < 5; j++) {
            if (j == 3) {
                continue outerloop;
            }
            console.log("Innerloop: " + j);
        }
    }
}

//#endregion

var f = function (num1, num2) {
    return num1 + num2;
}

console.log(f(14, 26));

var myFunc = new Function("num1", "num2", "return num1 + num2");
console.log(myFunc(10, 23));


(() => {
    console.log("Hello, World!");
})();

var foo1 = (num1, num2) => num1 + num2;
console.log(foo1(11, 22));

var foo2 = ((num1, num2) => {
    return num1 + num2;
});
console.log(foo2(10, 20));

var hello = () => console.log("Hello, World!");
hello();

sum(17, 23);

function sum(num1, num2) {
    console.log(num1 + num2);
}


var main = function calc() {
    var message = function () {
        console.log("Hello, World!");
    }();
}

main();

{
    function* colors() {
        yield "Yellow";
        yield "Green";
        yield "White";
        yield "Blue";
        yield "Red";
    }

    /* Don't work
    for(var color in colors())
    {
        console.log(color);
    }
    */

    for (var color of colors()) {
        console.log(color);
    }

    function* ask() {
        let name = yield "What's your name?";
        let city = yield "What's your city?";
        console.log(`${name}, ${city}`);
    }

    let questions = ask();
    console.log(questions.next());
    console.log(questions.next("Anderson"));
    console.log(questions.next("Rio de Janeiro"));
}


{
    let vector = [123, 'A', true, "Anderson", new Date(), 2712.11];
    vector.map((element, index) => {
        console.log(`${index}, ${element}`);
    });
}


{
    function Person(id, name) {
        this.id = id;
        this.name = name;
        this.display = () => console.log(`${this.id}, ${this.name}`);
    }

    let p1 = new Person(123, "Anderson");
    p1.display();
}

{
    void function main() {
        var hello = function () {
            console.log("Hello, World!");
        }
        hello();
    }();
}


{
    var person = {
        id: 123,
        name: "Anderson",
        birthday: new Date(1981, 11 - 1, 12, 10, 30),
        toString: () => {
            return (`ID: ${person.id} | Name: ${person.name} | Birthday: ${person.birthday}`);
        },
        display: function () {
            console.log(this);
        }
    };

    console.log(person);

    var client = new Object();
    client.id = 123;
    client.name = "Sarah";

    console.log(client);
    console.log(client["name"]);

    var myFunc = new Function("num1", "num2", "return num1 + num2;");
    console.log(myFunc(12, 28));


    function Car(model, plate) {
        this.model = model;
        this.plate = plate;

        this.toString = () => {
            return (`Model: ${this.model} | Plate: ${this.plate}`);
        };
    }

    var car = new Car("Chevette", "YHN1871");
    console.log(car.toString());

    let person2 = Object.create(person);
    person2.name = "Sarah";
    person2.id = 123;
    person2.birthday = new Date(1977, 11 - 1, 17, 10, 11);
    console.log(person2.toString());
    person2.display();

    var assigned = Object.assign({}, person, person2);
    for (let value in assigned) {
        console.log(assigned[value]);
    }

    delete person2.birthday;
    person2.display();

    var obj1 = { num: 10 };
    var obj2 = { num: 10 };
    console.log(obj1 == obj2);
    console.log(obj1 === obj2);

}

{
    const ID = Symbol();
    const NAME = Symbol();
    const BIRTHDAY = Symbol();

    class Person {
        constructor(id, name, birthday) {
            this[ID] = id;
            this[NAME] = name;
            this[BIRTHDAY] = birthday;
        }
    }

    var person = new Person(123, "Anderson", new Date(1981, 11 - 1, 12));
    console.log(person);
    console.log(`Hello, ${person[NAME]}!`);

    // Recomenda-se o uso do Symbol para as propriedades.
}


{
    var msg = new String("Hello, World!");
    console.log(msg.startsWith("Olá"));
    console.log(msg.endsWith("World"));
    console.log(msg.repeat(10));
    console.log(msg.includes('lo'))
}

{
    let i = 0;
    let array = new Array(10);
    for (let i = 0; i < 10; i++) {
        array[i] = i * 3 / 2;
    }
    console.log(array);
}

{
    let people = new Array("Anderson", "Sarah", "Anne", "Sarah");
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }
}

{
    let people = new Array("Anderson", "Sarah", "Anne", "Sarah");
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }
}

{
    console.log("\n\n\nArray methods:");
    console.log("\n");
    let people = new Array("Anderson", "Sarah", "Anne", "Silvia");
    people.forEach((p) => {
        console.log(p);
    });

    console.log(people.filter((p) => {
        return p.startsWith("S");
    }));

    let people1 = new Array("Anderson", "Anne");
    let people2 = new Array("Sarah", "Silvia");
    console.log(people1.join(people2.splice(",")));

    people.map((item, index) => {
        console.log(`[${index}] = ${item}`);
    });

    console.log(people.pop()); // retonar o ultimo.
    console.log(people);

    people.push("Silvia"); // adicionando...

    let nums = new Array(5, 6, 4, 7);
    console.log(nums.reduce(function (x, y) { return x + y }));

    console.log(nums.reduceRight(function (x, y) { return x + y }));

    people.shift()

    console.log(people);

    people.push("Anderson"); // adicionando...

    console.log(people.slice(1, 2));

    var obj = {
        id: 123,
        name: "Anderson"
    };
    // console.log(obj.toSource());
}

{
    let people = new Array("Anderson", "Sarah", "Taylor", "Julie", "John", "Anne");
    var result = people.find((p) => p.startsWith("A"));
    console.log(result);

    var result = people.findIndex((p) => p.startsWith("A"));
    console.log(result);

    var nums = new Array(5, 6, 4, 7, 1).entries();
    console.log(nums.next());
    console.log(nums.next().value);
    console.log(nums.next().value);
    console.log(nums.next().value);
    console.log(nums.next().value);
    console.log(nums.next());
}

{
    for (let l of 'Hello, World!') {
        console.log(l);
    }

    for (let l of Array.from('Hello, World!')) {
        console.log(l);
    }

    var nums = new Array(5, 6, 4, 7, 1);
    /*
    for(let n in nums){
        console.log(n);
    }
    */


    for (let n of nums) {
        console.log(n);
    }
}

{
    function getpeople() {
        new Array("Anderson", "Sarah", "Taylor", "Julie", "John", "Anne");
    }
}

{
    let names = ["Anderson", "Sarah", "Anne"];
    let n1, n2, n3 = names;

    console.log(n1, n2, n3);

    let [p1, ...params] = names;

    let first = 10, second = 20;
    [first, second] = [second, first];
    console.log(first);
    console.log(second);
}

{
    var date = new Date(1981, 11, 12, 10, 30, 0);
    console.log(`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`);
}

{
    for (let i = 0; i < 10; i++) {
        console.log(Math.floor(Math.random() * 100) + 1);
    }
}

{
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var regex = new RegExp(pattern, "g");
    console.log(regex.test("@jskjdskjds.com"));
    console.log(regex.test("sgdjhsdsj@jskjdskjds.com"));

    var str = "Hello, World!";
    var regex = new RegExp("Hello")
    console.log(str.match(regex));

    var regex = new RegExp("hello", "i");
    if (regex.ignoreCase) {
        console.log('ignoreCase!');
    } else {
        console.log('Not ignoreCase!');
    }

    var regex = new RegExp("hello");
    if (regex.ignoreCase) {
        console.log('ignoreCase!');
    } else {
        console.log('Not ignoreCase!');
    }

    var regex = new RegExp("hello", "m");
    if (regex.multiline) {
        console.log('Multiline!');
    } else {
        console.log('Not multiline!');
    }
}

{
    // document.html
}

{
    let nums = [67, 29, 10, 38, 72, 31, 54];
    for (let n of nums) {
        console.log(n)
    }

    // indices
    for (let i in nums) {
        console.log(nums[i]);
    }

    let iter = nums[Symbol.iterator]();
    console.log(iter.next().value);
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next().done);
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());


    function* getcolors() {
        yield "green";
        yield "yellow";
        yield "white";
        yield "blue";
        yield "red";
    }

    let colors = getcolors();
    console.log(colors.next());
    console.log(colors.next());
    console.log(colors.next().value);
    console.log(colors.next());
    console.log(colors.next());



    function* questions() {
        let name = yield "What's your name?";
        let age = yield "How old are you?";
        console.log(`Name: ${name} | Age: ${age}`);
    }

    let q = questions();
    console.log(q.next());
    console.log(q.next("Anderson"));
    console.log(q.next(40));
}

{
    var myMap = new Map();
    myMap.set(1, "Anderson");
    myMap.set(2, "Anne");
    myMap.set(3, "Lucy");
    myMap.set(4, "Taylor");
    myMap.set(5, "Jason");
    myMap.set(6, "Whinston");
    myMap.set(7, "Smith");

    console.log(myMap);

    console.log(myMap.has(8));
    console.log(myMap.has(5));

    myMap.clear();

    console.log(myMap);

    var myMap = new Map([
        [1, "Anderson"],
        [2, "Anne"],
        [3, "Lucy"],
        [4, "Taylor"],
        [5, "Jason"],
        [6, "Whinston"],
        [7, "Smith"]]);

    console.log(myMap.get(4));

    console.log(myMap.has(8));
    console.log(myMap.has(5));

    myMap.delete(6);

    console.log(myMap);

    console.log(myMap.entries());

    myMap.forEach((p) => {
        if (!p.startsWith("A")) {
            console.log(p);
        }
    });

    console.log(JSON.stringify(myMap.keys()));
    console.log(myMap.values());

    var wmap = new WeakMap();
    var obj = {};
    wmap.set(obj, 123);
    wmap.set(obj, "Anderson");
    wmap.set(obj, true);
    wmap.set(obj, new Date(1977, 11, 11));
    console.log(wmap);
    wmap.delete(obj1);
    console.log(wmap);
}

{
    class Person {
        static cont = 0;

        constructor(id, name) {
            this.id = id;
            this.name = name;
            Person.cont++;
        }

        set setId(id) {
            this.id = id;
        }

        get getId() {
            return this.id;
        }

        set setName(name) {
            this.name = name;
        }

        get getName() {
            return this.name;
        }
    }

    class PhysicalPerson extends Person {

        constructor(id, name, cpf) {
            super(id, name);
            this.cpf = cpf;
        }

        set setcpf(cpf) {
            this.cpf = cpf;
        }

        get getcpf() {
            return this.cpf;
        }
    }

    var pp = new PhysicalPerson(123, "Anderson", "54378965412");
    console.log(pp);

    let i = 0;
    while (i < 100000) {
        if (i == 33) {
            break;
        }
        var pp = new PhysicalPerson(123, "Anderson", "54378965412");
        i++;
    }

    console.log(Person.cont);

    let expr = "date";
    var obj = {
        get [expr]() {
            if (expr == "greeting") {
                return "Hello, World!";
            }
            if (expr == "date") {
                return new Date();
            }
            return undefined;
        }
    }
    console.log(obj.date);
}


{
    function divpromise(num1, num2) {
        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num2 != 0) {
                    resolve(num1 / num2);
                }
                reject("Division by zero.");
            }, 2000);
        });
        return p;
    }

    console.log("\nPromise:");
    /*
    divpromise(10, 0).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
    */

    /*
    console.log("\n\nPromise race:");

    let promises = [
        divpromise(10, 0),
        divpromise(15, 1),
        divpromise(33, 9),
        divpromise(13, 0),
        divpromise(11, 2),
        divpromise(5, 6)
    ];

    Promise.race([divpromise(10, 1), divpromise(15, 1)]).then((data) => {
        console.log(data);
    }).then((error) => {
        console.error(error);
    });
    */
}

{
    // console.log(test.greeting("Anderson"));
}

{
    let num1 = 20;
    let num2 = 0;

    try {
        if (num2 == 0) {
            throw ("Division by Zero.");
        } else {
            console.log(num1 / num2);
        }
    } catch (error) {
        console.log(error);
    }

    // window.error

    // Custom error:

    class DivisionByZero {
        constructor() {
            this.message = "Division By Zero.";
        }
    }

    try {
        if (num2 == 0) {
            throw new DivisionByZero();
        } else {
            console.log(num1 / num2);
        }
    } catch (error) {
        console.log(error.message);
    }
}

{
    var obj1 = { id: 1, name: "Anderson" };
    var obj2 = { id: 2, name: "Sarah" };
    var obj3 = { id: 3, name: "Anne" };
    var obj4 = { id: 1, name: "Anderson" };

    console.log(Object.is(obj1, obj4));

    console.log(obj1.__proto__);

    let i1 = { x: 10 }, i2 = { y: 20 }, i3 = { z: 30 };
    Object.assign(i1, i2, i3);
    console.log(i1)
}

{
    const calcarea = (width, height) => {
        console.log(measure);
        return `Area: ${width * height}`;
    }

    const measure = {
        units: 'centimeters'
    }

    const matrix = [640, 480];

    console.log(Reflect.apply(calcarea, measure, matrix));

    /************/

    class Person {
        constructor(fname, lname) {
            this.fname = fname;
            this.lname = lname;
        }

        get fullname() {
            return `${this.fname} ${this.lname}`;
        }
    }

    let datas = ["Anderson", "Conceição"];
    // constructor
    let p = Reflect.construct(Person, datas);
    //get
    console.log(`Fullname: ${Reflect.get(p, 'fullname')}`);
    //set
    Reflect.set(p, 'lname', 'Marins')
    console.log(p.fullname);
}

{
    {

        const calcarea = (width, height) => {
            return `Area: ${width * height}`;
        }

        const handler = {
            apply: (target, thisArgs, argsList) => {
                if (argsList.length == 2) {
                    return Reflect.apply(target, thisArgs, argsList);
                } else {
                    throw ("Error calculating.");
                }
            }
        }

        let proxy = new Proxy(calcarea, handler);
        console.log(proxy(640, 480));

    }


    /* --------------------------------------------------------- */

    {
        class Person {
            constructor(fname, lname) {
                this.fname = fname;
                this.lname = lname;
            }

            get fullname() {
                return `${this.fname} ${this.lname}`;
            }
        }

        const handler = {
            construct: (target, args) => {
                if (args.length == 2) {
                    return Reflect.construct(target, args);
                } else {
                    throw ("Error building.");
                }
            },
            get: (target, property, value) => {
                if (value.length > 2) {
                    return Reflect.get(target, property);
                } else {
                    throw ("Error getting.");
                }
            },
            set: (target, property, value) => {
                if (value.length > 2) {
                    return Reflect.set(target, property, value);
                } else {
                    throw ("Error setting.");
                }
            },
            has: (target, property) => {
                return Reflect.has(target, property)
            }
        }

        const PersonProxy = new Proxy(Person, handler);
        const p = new PersonProxy('Anderson', 'Conceição');
        p.lname = "da Conceição";
        console.log(p.fname);
        console.log(p.fullname);
        console.log('fname' in p); // Verificar se tem um atributo.
    }
}

{
    function greeting(name){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Hello, ${name}!`)
            }, 5000)
        });
   }

    async function asyncCall(){
        const result = await greeting("Anderson");
        console.log(result);
    }

    asyncCall();
}

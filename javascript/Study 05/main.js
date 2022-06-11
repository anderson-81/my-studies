function CriandoObject() {
    var person = Object();
    person.id = 123;
    person.name = "Anderson";
    console.log("ID: " + person.id + " | Name: " + person.name);
}

function setId(id) {
    with (this) {
        name = name;
    }
}

function setName(name) {
    with (this) {
        name = name;
    }
}

function Person(id, name) {
    this.id = id;
    this.name = name;
    this.setId = setId;
    this.setName = setName;
}

function CriandoPerson() {
    var p = new Person(132, "Anderson");
    p.setId(132);
    p.setName("Anderson C.");
    console.log(p.id + " - " + p.name);

    // Adicionando nova propriedade:
    Person.prototype.cpf = null;
    p.cpf = "43125342532";

    console.log(p.id + " - " + p.name + " - " + p.cpf);

    console.log(p.constructor);
}

function NumberObject() {
    var num = new Number(12);
    console.log(Number.MIN_VALUE);
    console.log(Number.MAX_VALUE);
    console.log(Number.NaN);

    console.log(num.constructor);

}

function ArraysObject01() {
    var numbers01 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
    var numbers02 = [1, 2, 3, 4, 5];
    var numbers03 = [6, 7, 8, 9, 0];

    for (var num in numbers01) {
        console.log(num);
    }

    numbers03.concat(numbers02).forEach((num) => {
        console.log(num);
    });
}

function DateTimeObject() {
    var date = new Date(1981, (11 - 1), 12, 10, 30, 0);
    console.log(date);
    console.log(date.getTime());
    console.log(date.toLocaleString());
    console.log(date.toLocaleDateString());

    var date = Date.parse("November 12, 1981");
    console.log(date);
}

function Regex(email) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    console.log(pattern.test(email));
}

function Regex(email) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    console.log(pattern.test(email));

    var regex = new RegExp(pattern);
    console.log(regex.test(email));

    console.log(email.replace("iqwieuwew", "gmail"));

    console.log(email.replace("iqwieuwew", "gmail").search("gmail"));
}

function TryCatch01() {
    var a = 100;
    try {
        console.log(a);
    } catch (e) {
        console.log(e);
    } finally {
        console.log("Terminado.");
    }
}

function TryCatch02() {
    var num1 = 2;
    var num2 = 0;
    var rslt = 0;

    try {
        if (num2 == 0) {
            throw ("Divisão por zero.");
        }
        else {
            rslt = num1 / num2;
            console.log(rslt);
        }
    } catch (e) {
        console.log("Error: " + e);
    } finally {
        console.log("Terminado.");
    }
}

CriandoObject();
CriandoPerson();
NumberObject();

var status = true;


ArraysObject01();

DateTimeObject();

Regex("kdasjhdjhasjds@iqwieuwew.com");

TryCatch01();

TryCatch02();











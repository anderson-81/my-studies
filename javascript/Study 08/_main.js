var myObj = {
    name: "Anderson",
    salary: 1541.11,
    gender: 'M',
    birthday: new Date(1981,11,12),
    certifications: ["MS", "OCL", "CIS", "EMB", "PMI"],
    location: {
        address: "Estrada da Felicidade",
        number: 1000,
        city: "Rio de Janeiro",
        state: "RJ",
        country: "Brazil"
    },
    status: true
};


delete myObj.salary;
console.log(JSON.stringify(myObj));

console.log(`${myObj["name"]}, ${myObj.location.city}`);

myObj.certifications.map((element, index) => {
    console.log(index + " --- " + element);
});

var obj = new Object();
obj.name = "Anderson";
obj.age = 40;
obj.func = () => {
    console.log(`${obj["name"]}, ${obj.age}`);
};
obj.func();

function Person(name, age){
    this.name = name;
    this.age = age;
}

var p1 = new Person("Anderson", 40);
var p2 = new Person("Sarah", 45);

var p3 = Object.assign(p1, p2);
console.log(JSON.stringify(p3));


let fname = "Anderson";
let sname = "Conceição";

let person = {
    fname, sname, getFullname:() => {
        return `${person.fname} ${person.sname}`
    }
};

console.log(person.getFullname());


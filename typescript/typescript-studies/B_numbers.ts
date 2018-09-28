/*
    TypeScript - Numbers
        TypeScript like JavaScript supports numeric values as Number objects. 
        A number object converts numeric literal to an instance of the number class. 
        The Number class acts as a wrapper and enables manipulation of numeric literals as they were objects.

*/

function Example30(){

    var num = new Number(36.111);
    console.log(num.toExponential(2));
    console.log(num.toFixed(2));
    console.log(num.toLocaleString());
    console.log(num.toPrecision());
    console.log(num.toString());
    console.log(num.valueOf());
}

function Example31(){

    console.log(Number.MIN_VALUE);
    console.log(Number.MAX_VALUE);
    console.log(Number.NEGATIVE_INFINITY);
    console.log(Number.POSITIVE_INFINITY);
    console.log(Number.NaN);
}

function Example32(){
    /*
    function Person(_id:number, _name:string){
        this.id = _id;
        this.name = _name;
    }
    */

    function Person(_id, _name){
        this.id = _id;
        this.name = _name;
    }

    var p = new Person(123, "Anderson");
    Person.prototype.email = "anderson@sgahgsha.com";

    console.log("ID = " + p.id);
    console.log("Name = " + p.name);
    console.log("Email = " + p.email);
}

Example30();
Example31();
Example32();
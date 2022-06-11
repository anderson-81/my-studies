var obj1 = new Boolean(123);
var obj2 = new Boolean(Number.NaN);
var obj3 = new Boolean(Number.POSITIVE_INFINITY);
var obj4 = new Boolean(false);
var obj5 = new Boolean('A');
var obj6 = new Boolean('');

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);

var obj7 = new Boolean();
console.log(obj7.constructor);

/*
function book(title, publisher, price) {
    this.title = title;
    this.publisher = publisher;
    this.price = price;
}         
var newBook = new book("Perl","Leo Inc",200); 
console.log(newBook.toSource()); 
*/

var obj8 = new Boolean(false);
console.log("obj8.toString(): " + obj8.toString());

var obj9 = new Boolean('');
console.log("obj9.toString(): " + obj9.toString());

var obja = new Boolean(123);
console.log("obja.toString(): " + obja.toString());

// -------------------- //

console.log("obj8.valueOf(): " + obj8.valueOf());
console.log("obj9.valueOf(): " + obj9.valueOf());
console.log("obja.valueOf(): " + obja.valueOf());
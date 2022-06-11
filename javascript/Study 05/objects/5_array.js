function function01(){
    var array = new Array(1, "Anderson", 'M', 4321.11, new Date("November 12, 1981"));
    console.log(array[4]);
}

function function02(){
    var array = [1, "Anderson", 'M', 4321.11, new Date("November 12, 1981")];
    console.log(array[4]);
}

var array1 = new Array(0,2,4,6,8);
var array2 = [1,3,5,7,9];

function function03(){
    console.log(array1.concat(array2));
}

function function04(){

    var testArray = (x) => {
        return x < 10;
    }

    console.log(array1.every(testArray)); // true or false
}

function function05(){

    var myFilter = (x) => {
        return ((x % 2) == 0);
    }

    console.log(array1.concat(array2).filter(myFilter));
}

function function06(){

    array1.forEach((x, y) => {
        console.log(x);
    })
}

function function07(){

    console.log("indexof: " + array1.indexOf(4));
}

function function08(){

    console.log("join: " + array1.join()); // STRING
}

function function09(){

    console.log("lastIndexOf: " + array1.lastIndexOf(4));
}

function function10(){

    var newArray = array1.concat(array2).map((x) => (x % 2) == 0);
    console.log(newArray);
}

function function11(){

    var newArray = array1.concat(array2).pop();
    console.log("Last Item: " + newArray);
}

function function12(){

    var newArray = array1.concat(array2).push(1234);
    console.log("New Lenght: " + newArray);
}

function function13(){

    var sum = (x, y) => x - y;

    var newArray = array1.concat(array2).reduce(sum);
    console.log("New Lenght: " + newArray);

    console.log(0+2+4+6+8+1+3+5+7+9);
}

function function14(){

    var sum = (x, y) => x - y;

    var newArray = array1.concat(array2).reduceRight(sum);
    console.log("New Lenght: " + newArray);

    console.log(0+2+4+6+8+1+3+5+7+9);
}

function function15(){

    var newArray = array1.reverse();
    console.log(newArray);
}

function function16(){

    var newArray = array1.shift();
    console.log(newArray);
}

function function17(){

    var newArray = array1.concat(array2).slice(3,5);
    console.log(newArray);
}

function function18(){

    var testElement = (x) => ((x % 2) == 0);
    console.log(array2.some(testElement));
}

//-------//

/*
function function19(){
    var arr = new Array("orange", "mango", "banana", "sugar");
    var str = arr.toSource();
    console.log("Returned string is : " + str );
}
*/

function function20(){
    var numArray = [6,1,3,2,8,7,4,9,0,5];
    console.log(numArray.sort());
}

function function21(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log(fruits);
}

function function22(){
    console.log(array1.toString());
}

function function23(){
    var numArray = [6,1,3,2,8,7,4,9,0,5];
    numArray.unshift(123);
    console.log(numArray);
}


function01();
function02();
function03();
function04();
function05();
function06();
function07();
function08();
function09();
function10();
function11();
function12();
function13();
function14();
function15();
function16();
function17();
function18();
// function19(); //TypeError: arr.toSource is not a function
function20();
function21();
function22();
function23();

function h1() {
    console.log("Hello, World!");
}

function h2(name) {
    console.log("Hello, " + name + "!");
}

function soma(num1, num2) {
    return num1 + num2;
}

//funções aninhadas:

function fglobal(name)
{
    function flocal(name)
    {
        return ("Hello, " + name + "!");
    }
    return flocal(name);
}

function cfunction()
{
    var func = new Function("x","y", "return x * y;");
    console.log(func(7,3));
}

var literalsoma = function(num1, num2){
    return num1 + num2;
}

h1();
h2("Anderson");
console.log(soma(20, 13));
console.log(fglobal("Anderson"));
cfunction();
console.log(literalsoma(20, 18));



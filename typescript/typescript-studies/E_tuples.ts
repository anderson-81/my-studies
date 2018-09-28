/*
    TypeScript - Tuplas
        Às vezes, pode haver a necessidade de armazenar uma coleção 
        de valores de tipos variados. Arrays não servirão para este 
        propósito. O TypeScript nos fornece um tipo de dados 
        chamado tupla que ajuda a atingir esse propósito.

*/

function Example41(){
    var birthday = new Date();
    birthday.setDate(12)
    birthday.setMonth(11);
    birthday.setFullYear(1981);
    var tuple = [123,"Anderson",true,4321.11,birthday];

    console.log(tuple[1]);

    tuple.forEach((value) => {
        console.log(typeof value);
    });

    console.log(tuple.length);
}

function Example42(){
    var a = ["Anderson",36];
    var [b,c] = a; //Atribuição sequencial dos valores.
    console.log("Age = " + c);
    console.log("Name = " + b);
}

Example41();
Example42();
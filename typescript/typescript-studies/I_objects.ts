/*
    TypeScript - Objetos
        Um objeto é uma instância que contém um conjunto de pares de valores-chave. 
        Os valores podem ser valores escalares ou funções ou até mesmo array 
        de outros objetos.
*/

//Sintaxe
function Example58(){
    var obj = {
        name:"Anderson",
        list:["Anderson","Maria","Joana"],
        fct1 : (() => {return "Hello, World!"}),
        fct2 : undefined
    }

    console.log(obj.name);
    obj.list.forEach((item) => {console.log(item);});
    console.log(obj.fct1());
    obj.fct2 = ((val1,val2) => {return val1+val2;});
    console.log(obj.fct2(30,6));
}

//Modelo de tipo de TypeScript
function Example59(){
    var obj = {
        name:"Anderson C.",
        list:["Yellow","Green","Blue","White"],
        fct1 : (() => {return "Hello, World!"})
    }

    function Show(obj : {
        name:string,
        list:string[],
        fct1 : (() => {})
    }){
        console.log(obj.name);
        obj.list.forEach((item) => {console.log(item);});
        console.log(obj.fct1());
    }

    Show(obj);
}

//Objeto Anônimo
function Example60(){

    var invoke = function(obj:{id:number,name:string}){
        console.log("ID = " + obj.id);
        console.log("NAME = " + obj.name);
    }
    invoke({id:123,name:"Anderson"})
}

function Example61(){

    interface IPoint{
        x:number,
        y:number
    }

    function SumPoint(p1:IPoint,p2:IPoint){
        var x = p1.x + p2.x;
        var y = p1.y + p2.y;
        return {x:x,y:y};
    }

    var var1 = SumPoint({x:3,y:4},{x:7,y:3});
    console.log(var1);
}


Example58();
Example59();
Example60();
Example61();
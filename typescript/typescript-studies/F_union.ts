/*
    TypeScript - Union
        O TypeScript 1.4 oferece aos programas a capacidade de combinar um ou dois tipos. 
        Os tipos de união são uma maneira poderosa de expressar um valor que pode ser um 
        dos vários tipos. Dois ou mais tipos de dados são combinados usando o símbolo de 
        pipe (|) para denotar um tipo de união. Em outras palavras, um tipo de união é 
        escrito como uma seqüência de tipos separados por barras verticais.
*/

function Example43(){
    var val : string|number;
    val = 36;
    console.log("Value = " + val + " |Type = " + typeof val);
    val = "Anderson";
    console.log("Value = " + val + " |Type = " + typeof val);
}

function Example44(){
    var val;
    val = 36;
    console.log("Value = " + val + " |Type = " + typeof val);
    val = "Anderson";
    console.log("Value = " + val + " |Type = " + typeof val);
}

function Example45(){

    function SetValue(value:number|string){
        if(typeof value == "number"){
            console.log("Number");
        }else{
            console.log("String");
        }
    }

    SetValue("Anderson");
    SetValue(36);
}

function Example46(){

    function SetValue(value:number[]|string[]){
        console.log(value);
    }

    var vet1 = ["Anderson","Joana","Maria","Pamela"];
    var vet2 = [7,6,5,4,3,2,1];
    SetValue(vet2);
    SetValue(vet1);
}


Example43();
Example44();
Example45();
Example46();
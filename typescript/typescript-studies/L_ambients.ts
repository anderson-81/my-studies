/*
    TypeScript - Ambientes
        Declarações ambientais são uma maneira de dizer ao compilador do TypeScript 
        que o código-fonte real existe em outro lugar. Quando você está consumindo 
        um monte de bibliotecas js de terceiros, como jquery / angularjs / nodejs, 
        não é possível reescrevê-las em TypeScript. Garantir segurança de tipos e 
        intellisense ao usar essas bibliotecas será um desafio para um programador TypeScript. 
        
        As declarações de ambiente ajudam a integrar outras bibliotecas js ao TypeScript.

        Sample.d.ts

*/

/// <reference path = "calc.d.ts" />

function Example65(){
    var obj = new TutorialPoint.Calculator(); 
    console.log(obj.Calc(30,6));
}

Example65();
/*
    TypeScript - matrizes
        O uso de variáveis ​​para armazenar valores apresenta as seguintes limitações -
            Variáveis ​​são escalares por natureza. Em outras palavras, uma declaração de variável pode conter apenas um único por vez. 
            Isso significa que, para armazenar n valores em um programa, serão necessárias declarações de variáveis. 
            Portanto, o uso de variáveis ​​não é viável quando é necessário armazenar uma coleção maior de valores.
            
            Variáveis ​​em um programa são alocadas memória em ordem aleatória, tornando difícil recuperar / ler 
            os valores na ordem de sua declaração.
        O TypeScript introduz o conceito de matrizes para lidar com o mesmo. Uma matriz é uma coleção homogênea de valores. 
        Para simplificar, uma matriz é uma coleção de valores do mesmo tipo de dados. É um tipo definido pelo usuário.


*/


function Example34(){
    var persons:string[] = ["Maria","Joana","Carla","Pamela"];
    console.log("Count = " + persons.length);
    console.log(persons[3]);
}

function Example35(){
    var numbers = [1,3.15,7,-1,-9,12,11,1981];
    console.log(numbers[2]);
}

function Example36(){
    var obj:number[] = new Array(5);
    obj[0] = 12;
    obj[1] = 11;
    obj[2] = 1981;
    obj[3] = 10;
    obj[4] = 30;
}

function Example37(){
    var obj = new Array(3);
    obj[0] = "Anderson";
    obj[1] = "Pamela";
    obj[2] = "Fernanda";
}

function Example38(){
    var people:string[] = new Array("Anderson", "Joana", "Maria");
    people.forEach((person) => {
        console.log(person);
    });
}


function Example39(){
    var vet1 = new Array(3);
    vet1[0] = "Anderson";
    vet1[1] = "Pamela";
    vet1[2] = "Fernanda";

    var vet2 = new Array(3);
    vet2[0] = 12;
    vet2[1] = 11;
    vet2[2] = 81;
    vet2[3] = "Anderson";

    console.log(vet1);    
    var vet3 = vet1.concat(vet2);
    
    /**************************** */
    function isBigEnough(element, index, array) { 
        return (element >= 10); 
    } 
               
    var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
    console.log("Test Value : " + passed );
    /**************************** */

    vet3.forEach(function(value){
        if(!(typeof value == "number")){
            console.log(value);
        }
    });
    /**************************** */

    console.log(vet3.indexOf(0));
    
    /**************************** */

    var vet3String = vet3.join();
    console.log(vet3String);
    console.log(typeof vet3String);

    /**************************** */

    function functionFilter(element, index, array){
        return (typeof element == "string");
    }
    vet3.filter(functionFilter).forEach((item) => {
        console.log(item);
    });

    /**************************** */
    console.log(vet3.lastIndexOf("Anderson"));
    /**************************** */

    console.log(vet3.pop());
    /**************************** */
    console.log(vet3.push("Last Item"));
    /**************************** */
    function sum(x,y){
        return x+y;
    }

    var total = [12,11,1981,0].reduce(sum);
    console.log(total);
    /**************************** */


}


function Example40(){
    
}

Example34();
Example35();
Example36();
Example37();
Example38();
Example39();
Example40();

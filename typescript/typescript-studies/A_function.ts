

/*
    TypeScript - Funções
        Funções são os blocos de construção de código legível, sustentável e reutilizável. 
        Uma função é um conjunto de instruções para executar uma tarefa específica. 
        Funções organizam o programa em blocos lógicos de código. Uma vez definidas, as 
        funções podem ser chamadas para acessar o código. Isso torna o código reutilizável. 
        Além disso, as funções facilitam a leitura e a manutenção do código do programa.
*/

class cFunction{
    public Example16(_name:string, _age?:number, _salary:number = 4321.11){
        console.log("Name = " + _name);
        if(_age == undefined){
            console.log("Age = " + _age);
        }else{
            console.log("Age undefined.");
        }
        console.log("Salary = " + _salary);
    }
    
    public Example17(_name){
        console.log("Hello, " + _name + "!");
    }
    
    public Example18(...nums:number[]):number{
        var sum : number = 0;
        for(var i = 0; i < nums.length; i++){
            sum = sum + nums[i];
        }
        return sum;
    }
    
    public Example19(){
        var vfunction = function(){
            console.log("Anonymous function.");
        };
        vfunction();
    }
  
    public Example20(){
        var vfunction = function(num1,num2){
            console.log(num1+num2);
        };
        vfunction(30,6);
    }
  
    public Example21(){
        var objf = new Function("num1","num2","return num1+num2;");
        var result = objf(30,6);
        console.log(result);
    }
    
    public Example22(){
        function factorial(number) {
            if (number <= 0) {         // termination case
               return 1; 
            } else {     
               return (number * factorial(number - 1));     // function invokes itself
            } 
         }; 
         console.log(factorial(6));      // outputs 720 
    }
    
    public Example23(){
        (function(){
            console.log("Hello, World!");
        });
    }

    public Example24(){
        var foo = (x:number) => 30 + x;
        console.log(foo(6));
    }

    public Example25(){
        var foo = (x:number) => {
            if(x >= 0){
                return 30 + x;
            }else{
                return "Invalid value.";
            }
        };
        console.log(foo(-6));
    }

    public Example26(){
        var foo = (x) => {
            if(typeof x == "string"){
                console.log("String.");
            }

            if(typeof x == "number"){
                console.log("Number.");
            }

            if(typeof x == "boolean"){
                console.log("Boolean.");
            }
        }

        foo(36);
        foo(true);
        foo("Anderson");
    }

    public Example28(x,y){
        console.log(typeof x);
        console.log(typeof y);
    }

    public Example29(){
        
        function OverloadFunction(_num:number);
        function OverloadFunction(_num:number, _name:string);

        function OverloadFunction(x:any, y?:any){
            console.log(x);
            if(!(y == undefined)){
                console.log(y);
            }
        }
        
    }
}




var obj = new cFunction();
obj.Example16("Anderson");
obj.Example17("Anderson");
console.log(obj.Example18(10, 20, 30, 40, 50, 60, 70, 80, 90, 0));
obj.Example19();
obj.Example20();
obj.Example21();
obj.Example22();
obj.Example23();
obj.Example24();
obj.Example25();
obj.Example26();
obj.Example28("Anderson", 36);
obj.Example29();

/************************/



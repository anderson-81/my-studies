/*
    TypeScript - Namespaces
        Um namespace é uma maneira de agrupar logicamente o código relacionado. 

*/

namespace operations{

    export namespace arithmetic{
        export interface ICalculator{
            Sum() : number,
            Sub() : number,
            Mlt() : number,
            Div() : number,
            Mod() : number
        }
        export class Calculator implements ICalculator{

            private num1:number;
            private num2:number;

            constructor(num1:number,num2:number){
                this.num1 = num1;
                this.num2 = num2;
            }

            public Sum(){
                return this.num1+this.num2;
            }

            public Sub(){
                return this.num1-this.num2;
            }

            public Mlt(){
                return this.num1*this.num2;
            }

            public Div(){
                return this.num1/this.num2;
            }

            public Mod(){
                return this.num1%this.num2;
            }
        }
    }

    export namespace hello{
        export class Greet{
            public ShowMessage(){
                return "Hello, World!";
            }
        }
    }
}

function Example62(){
    console.log(new operations.hello.Greet().ShowMessage());
}

Example62();



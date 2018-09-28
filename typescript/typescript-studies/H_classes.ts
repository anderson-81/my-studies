/*
    TypeScript - Classes
        TypeScript é JavaScript orientado a objeto. O TypeScript suporta recursos de programação orientada 
        a objetos, como classes, interfaces, etc. Uma classe em termos de OOP é um projeto para criar 
        objetos. Uma classe encapsula dados para o objeto. O typescript fornece suporte embutido para 
        esse conceito chamado class. JavaScript ES5 ou anterior não suportava classes. 
        
        O typescript obtém esse recurso do ES6.

        Uma definição de classe pode incluir o seguinte -

            Campos - Um campo é qualquer variável declarada em uma classe. 
                     Campos representam dados pertencentes a objetos

            Construtores - Responsável por alocar memória para os objetos da classe

            Funções - Funções representam ações que um objeto pode executar. 
                      Eles também são às vezes chamados de métodos
*/

//Declarando uma classe
function Example51(){

    class Person{
        id:number;
        name:string;

        constructor(id,name){
            this.id = id;
            this.name = name;
        }

        disp():void {
            console.log("Destroyed.");
        }
    }

    var p = new Person(123, "Anderson");
    console.log(p.id);
    console.log(p.name);
    p.disp();
}

/*
    Herança de Classe
        O TypeScript suporta o conceito de herança. Herança é a capacidade de um programa criar 
        novas classes a partir de uma classe existente. A classe que é estendida para criar classes 
        mais novas é chamada de classe-pai / super-classe. As classes recém-criadas são chamadas 
        de sub-classes / filho.

        A herança pode ser classificada como -

            Único - cada classe pode, no máximo, se estender de uma classe pai

            Múltiplo - Uma classe pode herdar de várias classes. O TypeScript não suporta herança múltipla.

            Multi-level - O exemplo a seguir mostra como funciona a herança em vários níveis.
*/

//Herança de Classe
function Example52(){

    class Person{
        id:number;
        name:string;

        constructor(id,name){
            this.id = id;
            this.name = name;
        }
    }

    class PhysicalPerson extends Person{
        salary:number;

        constructor(id,name,salary){
            super(id,name);
            this.salary = salary;
        }

        disp():void{
            console.log("destroyed");
        }
    }

    var p = new PhysicalPerson(123,"Anderson",4421.11);
    p.disp();
}

//Herança de Classes e Substituição de Métodos
function Example53(){
    

    class Class1{
        ShowMessage(){
            console.log("Class01");
        }
    }

    class Class2 extends Class1{
        ShowMessage(){
            super.ShowMessage(); //chamando o método pai.
            console.log("Class02");
        }
    }
    
    var obj = new Class2();
    obj.ShowMessage();
}

//A palavra-chave "static"
function Example54(){

    class ClassTest{
        static num = 0;
        static Increment(){
            ClassTest.num++;
            return ClassTest.num;
        }
    }

    console.log(ClassTest.Increment());
    console.log(ClassTest.Increment());
    console.log(ClassTest.Increment());
}

/*
    O operador instanceof
        O operador instanceof retorna true se o objeto pertencer ao tipo especificado.
*/

//instanceof
function Example55(){

    class Class1{
        ShowMessage(){
            console.log("Class01");
        }
    }

    class Class2 extends Class1{
        ShowMessage(){
            super.ShowMessage(); //chamando o método pai.
            console.log("Class02");
        }
    }

    class Class3{
        ShowMessage(){
            console.log("Class03");
        }
    }
    
    var obj = new Class2();
    obj.ShowMessage();

    console.log(obj instanceof Class1);
    console.log(obj instanceof Class2);
    console.log(obj instanceof Class3);
}

/*
    Esconder dados
        Uma classe pode controlar a visibilidade de seus membros de dados para membros de outras classes. 
        Esse recurso é denominado como ocultação de dados ou encapsulamento.

        público
            Um membro de dados públicos tem acessibilidade universal. 
            Os membros de dados em uma classe são públicos por padrão.

        privado
            Os membros de dados privados são acessíveis somente dentro da classe que define esses membros. 
            Se um membro da classe externa tentar acessar um membro particular, o compilador emitirá um erro.

        protegido
            Um membro de dados protegido é acessível pelos membros dentro da mesma classe que a 
            do primeiro e também pelos membros das classes filhas.

*/

//Ocultação de itens da classe.
function Example56(){

    class Class1{
        private attr1 : string;

        public setAttr1(value):void{
            this.attr1 = value;
        }

        protected ShowMessage(){
            console.log("Class01");
        }
    }

    class Class2 extends Class1{
        public ShowMessage(){
            super.ShowMessage(); //chamando o método pai.
            console.log("Class02");
        }
    }
    var obj = new Class2();
    obj.setAttr1("Anderson");
}

//Classes e Interfaces
function Example57(){

    interface ICalc{
        Sum:() => number,
        Sub:() => number,
        Mlt:() => number,
        Div:() => number
    }

    class Calculador implements ICalc {
        private num1: number;
        private num2: number;
        public Sum () { return this.num1+this.num2; };
        public Sub () { return this.num1-this.num2; };
        public Mlt () { return this.num1*this.num2; };
        public Div () { return this.num1/this.num2; };
    }
}

Example51();
Example52();
Example53();
Example54();
Example55();
Example56();
Example57();

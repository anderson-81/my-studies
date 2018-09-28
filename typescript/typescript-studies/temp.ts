function Example01(){
    var message : string = "Hello, World!";
    console.log(message);
}



/*
    O JavaScript "...sua falha em adotar os recursos da Orientação a Objetos, 
    verificação de tipo forte e verificações de erros em tempo de compilação 
    impedem o sucesso do JavaScript no nível corporativo como uma tecnologia 
    completa do lado do servidor. 
    O TypeScript foi apresentado para preencher essa lacuna."

    Por definição, "TypeScript é JavaScript para desenvolvimento em escala de aplicativo".

    Foi projetado por Anders Hejlsberg (designer de C #) na Microsoft.

    Em outras palavras, o TypeScript é JavaScript, além de alguns recursos adicionais.

    O TypeScript suporta outras bibliotecas JS. (jQuery, AngularJS e etc...)

    A especificação ECMAScript é uma especificação padronizada de uma linguagem de script. 
    Há seis edições do ECMA-262 publicadas. A versão 6 do padrão é codinome "Harmony". 
    O TypeScript está alinhado com a especificação ECMAScript6.

    O TypeScript é superior aos seus outros equivalentes, como as linguagens de programação CoffeeScript 
    e Dart, de uma forma que o TypeScript é estendido para JavaScript. 
    Por outro lado, linguagens como Dart, CoffeeScript são novas linguagens em si mesmas e requerem 
    ambiente de execução específico da linguagem.

    A sintaxe define um conjunto de regras para escrever programas. 
    Cada especificação de linguagem define sua própria sintaxe. 
    Um programa TypeScript é composto por:
        Módulos
        Funções
        Variáveis
        Declarações e Expressões
        Comentários
*/


function Example02(){
    class App{
        Greet():void{
            console.log("I'm method on class.");
        }
    }
    
    let obj = new App();
    obj.Greet();
}

/*
    - Sinalizadores para o compilador.
    - Palavras reservadas.

    Os pontos e vírgulas são opcionais.
        console.log("Hello, World"); or console.log("Hello, World") 

    TypeScript e Orientação a Objetos
        TypeScript é JavaScript orientado a objetos. 
        Orientação a Objetos é um paradigma de desenvolvimento de software que segue a 
        modelagem do mundo real. Orientação a Objetos considera um programa como uma coleção 
        de objetos que se comunicam entre si através de mecanismos chamados métodos. 
        O TypeScript também suporta esses componentes orientados a objetos.

        - Objeto => Um objeto é uma representação em tempo real de qualquer entidade. 
            De acordo com Grady Brooch, todo objeto deve ter três características -

        - Estado => descrito pelos atributos de um objeto

        - Comportamento => descreve como o objeto vai agir

        - Identidade => um valor único que distingue um objeto de um conjunto de objetos semelhantes.

        - Classe => Uma classe em termos de OOP é um plano para criar objetos. 
            Uma classe encapsula dados para o objeto.

        - Método => Métodos facilitam a comunicação entre objetos.

        Built-in types
            The following table illustrates all the built-in types in TypeScript −

            __________________________________________________
            Data        type	    Keyword	Description
            __________________________________________________
            Number	    number	    Double precision 64-bit floating point values. 
                                    It can be used to represent both, integers and fractions.
            String	    string	    Represents a sequence of Unicode characters
            Boolean	    boolean	    Represents logical values, true and false
            Void	    void	    Used on function return types to represent non-returning functions
            Null	    null	    Represents an intentional absence of an object value.
            Undefined	undefined	Denotes value given to all uninitialized variables
            __________________________________________________

*/

function Example03():void{
    var var1 :number = 36;
    var var2 :number = 3.1514;
    var var3 :string = "Anderson";
    var var4 :boolean = true;
    /*********************/
    var var5 :number = undefined;
    var var6 :number = null;

    console.log(var1);
    console.log(var2);
    console.log(var3);
    console.log(var4);
    console.log(var5);
    console.log(var6);
}

/*
    Uma variável, por definição, é “um espaço nomeado na memória” que armazena valores. 
    
    A sintaxe de tipo para declarar uma variável no TypeScript é incluir dois pontos (:) após o nome da variável, seguido por seu tipo.

    
*/

function Example04(){
    var var1 : number = 12;
    var var2 : number;
    var var3 = 12;
    var var4;
}

/*
    Type Assertion no TypeScript
        O TypeScript permite alterar uma variável de um tipo para outro.

        O motivo pelo qual não é chamado "type casting" é que o casting geralmente implica algum tipo de suporte de 
        tempo de execução, enquanto "type assertions" são puramente uma compilação de tempo de 
        compilação e uma maneira de você fornecer dicas para o compilador sobre como deseja 
        que seu código ser analisado.
*/

function Example05(){

    var txt : string = "36";
    var num : number = <number><any>txt;
    console.log(num);
}

/*
    Digitação inferida em TypeScript
        Dado o fato de que, Typescript é fortemente tipado, esse recurso é opcional. 
        O TypeScript também incentiva a digitação dinâmica de variáveis.

*/

function Example06(){
    var var1 = "Anderson";
    var var2 = 36;
    var var3 = true;
    var var4 = 5426.11;
    console.log(typeof var1);
    console.log(typeof var2);
    console.log(typeof var3);
    console.log(typeof var4);
}

/*
    Escopo Variável TypeScript
        O escopo de uma variável especifica onde a variável é definida. A disponibilidade de uma variável dentro de um programa é determinada pelo seu escopo. As variáveis ​​do TypeScript podem ser dos seguintes escopos -

            Escopo global => Variáveis ​​globais são declaradas fora das construções de programação. 
                             Essas variáveis ​​podem ser acessadas de qualquer lugar dentro do seu código.

            Escopo da Classe => Essas variáveis ​​também são chamadas de campos . Campos ou variáveis ​​de classe são declarados dentro da classe, 
                                mas fora dos métodos. Essas variáveis ​​podem ser acessadas usando o objeto da classe. Os campos também podem ser estáticos. 
                                Campos estáticos podem ser acessados ​​usando o nome da classe.

            Escopo Local => Variáveis ​​locais, como o nome sugere, são declaradas dentro das construções como métodos, loops, etc. Variáveis ​​locais 
                            são acessíveis apenas dentro da construção onde elas são declaradas.

*/


function Example07(){
    var global_num = 12          //global variable 
    class Numbers { 
        num_val = 13;             //class variable 
        static sval = 10;         //static field 
            storeNum():void { 
                var local_num = 14;    //local variable 
            } 
    } 
    console.log("Global num: "+global_num)  
    console.log(Numbers.sval)   //static variable  
    var obj = new Numbers(); 
    console.log("Global num: "+obj.num_val) 
}

/*
    O que é um operador?
        Um operador define alguma função que será executada nos dados.

        Os principais operadores do TypeScript podem ser classificados como -
            Operadores aritméticos
            Operadores lógicos
            Operadores relacionais
            Operadores bit a bit
            Operadores de atribuição
            Operador ternário / condicional
            Operador de cordas
            Tipo operador

*/

function Example08(){
    class Operator{

        public Calculator(num1:number, num2:number, opr:number):void{
            switch (opr) {
                case 1:
                    console.log(num1+num2);
                    break;
                case 2:
                    console.log(num1-num2);
                    break;
                case 3:
                    console.log(num1*num2);
                    break;
                case 4:
                    console.log(num1/num2);
                    break;
                case 5:
                    console.log(num1--);
                    console.log(num2--);
                    break;
                case 6:
                    console.log(num1++);
                    console.log(num2++);
                    break;
                case 7:
                    console.log(num1%num2);
                    break;
                default:
                    console.log("Invalid option.");
                    break;
            }
        }

        public Compare(num1:number, num2:number):void{
        
            console.log(num1>num2);
            console.log(num1>=num2);
            console.log(num1<num2);
            console.log(num1<=num2);
            console.log(num1==num2);
            console.log(num1!=num2);
        }

        public Relational(num1:number, num2:number):void{
        
            console.log((num1>num2) && (num1<num2));
            console.log((num1>num2) || (num1<num2));
            console.log(!(num1>num2) && (num1<num2));
        }

        public Attr(num1:number, num2:number):void{
            num1+=num2;
            console.log(num1);
            num1-=num2;
            console.log(num1);
            num1*=num2;
            console.log(num1);
            num1/=num2;
            console.log(num1);
            num1=num2;
            console.log(num1);
        }

        public Ternary(num1:number, num2:number):void{
            var var1 = (num1 > num2) ? true : false;
            console.log(var1);
        }

        public Operators():void{
            console.log("Hello, " + "World!");
            var num = -36;
            console.log(num);
        }
    }

    var obj = new Operator();
    obj.Calculator(30,6,1);
    obj.Compare(30,6);
    obj.Relational(30,6);
    obj.Attr(30,6);
    obj.Ternary(30,6)
    obj.Operators();


}

/*
    TypeScript - Decision Making
        Decision-making structures require that the programmer specifies one or more 
        conditions to be evaluated or tested by the program, along with a statement or 
        statements to be executed if the condition is determined to be true, and optionally, 
        other statements to be executed if the condition is determined to be false.


*/

/*
    TypeScript - Loops
        Você pode encontrar situações, quando um bloco de código precisa ser executado várias vezes. 
        Em geral, as instruções são executadas seqüencialmente: a primeira instrução em uma função é executada primeiro, 
        seguida pela segunda e assim por diante.

        As linguagens de programação fornecem várias estruturas de controle que permitem caminhos de execução mais complicados.

        Uma instrução de loop nos permite executar uma instrução ou grupo de instruções várias vezes. 
        Dada a seguir é a forma geral de uma declaração de loop na maioria das linguagens de programação.
*/


function Example09(){

    var cont : number = 0;
    while(cont < 10){
        console.log(cont);
        cont++;
    }

}



/************************/

Example01();
Example02();
Example03();
Example04();
Example05();
Example06();
Example07();
Example08();
Example09();
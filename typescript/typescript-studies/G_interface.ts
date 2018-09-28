/*
    TypeScript - Interfaces
        Uma interface é um contrato sintático ao qual uma entidade deve obedecer. 
        Em outras palavras, uma interface define a sintaxe que qualquer entidade deve aderir.

        Interfaces definem propriedades, métodos e eventos, que são os membros da interface. 


*/

//Declarando Interfaces
function Example47(){

    interface IPerson{
        id:number,
        name:string,
        Say:() => string
    }

    var customer : IPerson = {
        id:123,
        name:"Anderson",
        Say:() => { return "Hello, i'm Anderson."}
    }    
   
    var client : IPerson = {
        id:321,
        name:"Maria",
        Say:() => { return "Hello, i'm Maria."}
    }  
    
    console.log(customer.id);
    console.log(customer.name);
    console.log(customer.Say());

    console.log(client.id);
    console.log(client.name);
    console.log(client.Say());
}


/*
    O exemplo define uma interface. O objeto do cliente é do tipo IPerson. Portanto, 
    ele será vinculado ao objeto para definir todas as propriedades conforme 
    especificado pela interface.

    OBS: Interfaces não devem ser convertidas para JavaScript. É apenas parte do TypeScript.

*/



//Tipo de união e interface
function Example48(){

    interface IInterface{
        attr: string | string[] | (() => string)
    }

    var obj1 : IInterface = {
        attr : "Anderson"
    };

    var obj2 : IInterface = {
        attr : ["Anderson","Maria","Joana","Tânia"]
    };

    var obj3 : IInterface = {
        attr : ()=>{return "**Hello World**";}
    };

    console.log(obj1.attr);
    console.log(obj2.attr);
    console.log(obj3.attr);
}


//Interfaces e Matrizes
function Example49(){
    interface namelist { 
        [index:number]:string 
    } 
     
    interface ages { 
        [index:string]:number 
    } 
     
    var agelist:ages; 
}


//Interfaces e herança
function Example50(){

    interface IPerson{
        id:number,
        name:string
    }

    interface IPhysicalPerson extends IPerson{
        salary:number
    }
    
    var obj : IPhysicalPerson = {
        id:123,
        name:"Anderson",
        salary:4321.11
    }

    console.log(obj.id);    
    console.log(obj.name);
    console.log(obj.salary);
}

Example47();
Example48();
Example49();
Example50();

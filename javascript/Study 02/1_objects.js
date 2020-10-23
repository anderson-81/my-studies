function object01()
{
    var obj = new Object();
    obj.id = 123;
    obj.name = "Anderson";
    obj.showMethod = function(){
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
    }

    obj.showMethod();

    console.log("------------------------------------");
}

function object02()
{
    function showPerson(){
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
    }

    function Person(id, name){
        this.id = id;
        this.name = name;
        this.showPerson = showPerson; //Assign method!
    }

    var obj = new Person(123, "Anderson");
    obj.showPerson();

    console.log("------------------------------------");
}

function object03()
{
    var obj = new Object();

    with(obj){
        id = 123;
        name = "Anderson";
        showMethod = function(){
            console.log("ID: " + this.id);
            console.log("Name: " + this.name);
        }
        showMethod();
    }

    console.log("------------------------------------");
}


object01();
object02();
object03();

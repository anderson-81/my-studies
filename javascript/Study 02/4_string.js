function string01() {
    var str = new String("Hello, World!");
    console.log(str.constructor);
    console.log(str.length);
    console.log(str.constructor);
}

// The prototype property allows you to add properties and methods to any object 
// (Number, Boolean, String and Date etc.).

function string02() {

    function person(id, name) {
        this.id = id;
        this.name = name;
    }

    var p = new person(123, "Anderson");
    
    person.prototype.salary = 4321.11;

    person.prototype.show = function(){
        console.log("ID    : " + p.id);
        console.log("Name  : " + p.name);
        console.log("Salary: " + p.salary);
    }

    p.show();
}

function string03() {

    console.log("\n\nString Methods:");

    var text1 = "Hello, World!";
    var text2 = "Olá, Mundo!";
    var text3 = "Hello, World!";

    console.log("charAt(7): " + text1.charAt(7));

    console.log("charCodeAt(7): W=" + text1.charCodeAt(7));

    console.log("text1.concat(\" \", text2): " + text1.concat(" ", text2));

    console.log("text1.indexOf(\", World!!\"): " + text1.indexOf(", World!"));

    console.log("text1.lastIndexOf(\"World!\"): " + text1.lastIndexOf("World!"));

    console.log("text1.localeCompare(XYZ): " + text1.localeCompare("XYZ"));

    console.log("text1.match(text3): " + text1.match(text3));
    console.log("text1.match(text2): " + text1.match(text2));

    console.log("text1.replace(\"World!\", \"Ggbsfgds!\"): " + text1.replace("World!", "Ggbsfgds!"));

    console.log("text1.search(\"World\"): " + text1.search("World"));

    console.log("text1.slice(2,7): " + text1.slice(2,7));

    console.log("text1.split(\"H\", 3): " + text1.split("H", 3));

    console.log("text1.substr(2,7): " + text1.substr(2,7));

    console.log("text1.substring(4,8): " + text1.substring(4,8));

    console.log("text1.toLocaleLowerCase(): " + text1.toLocaleLowerCase());

    console.log("text1.toLocaleUpperCase(): " + text1.toLocaleUpperCase());

    console.log("text1.toString(): " + text1.toString());

    var str = new String("Hello world");
    console.log(str.valueOf( ));
}

string01();
string02();
string03();
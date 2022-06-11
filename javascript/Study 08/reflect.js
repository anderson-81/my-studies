function RefApply() {
    const area = function (num1, num2) {
        return `${num1 + num2} ${this.unit}`;
    }

    const numbers = [13, 27];

    const thisValue = {
        unit: 'cm'
    }

    const result = Reflect.apply(area, thisValue, numbers);
    console.log(result);
}

RefApply();

function RefConstructor() {

    class Person {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }

        set Id(id) {
            this.id = id;
        }

        get Id() {
            return this.name;
        }

        set Name(name) {
            this.name = name;
        }

        get Name() {
            return this.name;
        }
    }

    const attributes = [4321, "Anderson"];
    const p = Reflect.construct(Person, attributes);
    console.log(p);

    // Reflect.get
    console.log(`Name: ${Reflect.get(p, "name")}`);
    
    // Reflect.set
    Reflect.set(p, "name", "Anderson C.");
    console.log(`Name: ${Reflect.get(p, "name")}`);

    //Reflect.has
    console.log(`Name: ${Reflect.has(p, "name")}`);
    console.log(`Name: ${Reflect.has(p, "salary")}`);
}

RefConstructor();
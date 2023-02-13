class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log('HEllo world !! ');
    }
    static staticMethodExample() {
        console.log('Hello from static Methoed'); // run Person.staticMethodExample(); with the class name

    }
}

const person = new Person('Raghad');


class MyMath {
    static sum(...args) {
        let total = 0;
        for (let num of args) total += num;
        return total;

    }
    static multiply(...args) {
        let total = 1;
        for (let num of args) total *= num;
        return total;

    }
}
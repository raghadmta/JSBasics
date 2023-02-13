class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(
            `Hello my name is ${this.name}, and I am ${this.age} years old.`
        );
    }
}


class student extends Person { // class ClassName extends FromClass1, extends is for inherit.

    constructor(name, age, level) {
        super(name, age);
        this.level = level;
    }


    print() {
        console.log(`${this.name}, ${this.age}, ${this.level}`);
    }
}

const person = new student('Raghad', 15, 2);
person.hello();
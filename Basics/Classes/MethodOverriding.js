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


class Student extends Person {

    constructor(name, age, level) {
        super(name, age);
        this.level = level;
    }
    hello() {
        console.log(
            `Hello my name is ${this.name}.`
        );
    }
}

const student = new Student('Raghad', 15, 2);
student.hello();
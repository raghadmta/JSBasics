class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age; // _ mean it privet/re-strictred
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 1) throw new Error('Invalid age !');
        this._age = value;
    }
}

const person = new Person('Raghad', 25);
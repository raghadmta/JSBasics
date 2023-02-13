class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age; // _ mean it privet/re-strictred
    }
   get  age(){
        return this._age;
    }
}

const person = new Person('Raghad', 25);
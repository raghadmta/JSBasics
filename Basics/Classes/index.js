class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log('HEllo world !! ');
    }
    log() {
        console.log(this);
    }
}

const person = new Person('Raghad');
const log = person.log;
log(); // undefined

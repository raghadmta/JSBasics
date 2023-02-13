function Person(name, age, gender) {
    let id = Math.floor(Math.random() * 10);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function () {
        console.log('hello there persons ! ');
    };
    // Object.defineProperty(obj, prop, descriptor) 
    Object.defineProperty(this, 'id', {
        get: function () { return id },
        // set: function (value) { id = value }, // we can change the id now
        set: function (value) {
            if (!value) throw new Error('invalid ID - not a correct number');
            id = value;
        }
    })
}

const person1 = new Person('Raghad', 25, 'female');
console.log(person1);
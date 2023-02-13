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
        get: function() { return id }
    })
}

const person1 = new Person('Raghad', 25, 'female');

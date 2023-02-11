// hold refrence to an object
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function () {
        console.log('hello there persons ! ');
    };
}


// object info
let person1 = new Person('raghad', 24, 'female'); // write person1 in the console


// arrays of objects
let persona = [
    new Person('raghad', 25, 'female'),
    new Person('raghad', 26, 'female'),
    new Person('raghad', 27, 'female')
]
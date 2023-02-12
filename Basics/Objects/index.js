// Hold refrence to an object
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function () {
        console.log('hello there persons ! ');
    };
}


const Person1 = new Function('name', 'age', 'gender', `
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function () {
         console.log('hello there persons ! ');
        
    };

`);

// Object info
const person1 = new Person1('raghad', 25, 'female');


function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function () {
        console.log('hello there persons ! ');
    };
}

const person1 = new Person('raghad', 25, 'female');

// Dot Notation
console.log(person1.name);


// Bracket Notation
const atribute = 'name';
console.log(person1[atribute]);

// change the value of the object
person1.age = 30;
// added a new propertie
person1.adress = 'Saudi Arabia';
// remove the propertie
delete person1.adress;
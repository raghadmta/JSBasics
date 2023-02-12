// Hold refrence to an object
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function () {
        console.log('hello there persons ! ');
    };
}

// const Person1 = new Function('name', 'age', 'gender', `
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.hello = function () {
//          console.log('hello there persons ! ');

//     };

// `);


Person.call({}, 'abeer', 16, 'female'); // We can call the function. {} act like the word newe
Person.apply({}, ['Norah', 18, 'female']); // same as call but taking it as argument

// Object info
const person1 = new Person('raghad', 25, 'female');


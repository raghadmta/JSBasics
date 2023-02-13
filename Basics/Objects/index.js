function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function () {
        console.log('hello there persons ! ');
    };
}

const person1 = new Person('Raghad', 25, 'female');

// to see all the attribute we use for-in or keys function
for (let key in person1) {
    if (typeof person1[key] == 'function') continue; // do not show the function
    console.log(key, person1[key]);

}


const keys = Object.keys(person1); // show the attribute only
console.log(keys);


// To show if the object have the attribute
if ('name' in person1)
    console.log('The name is: ', person1.name);
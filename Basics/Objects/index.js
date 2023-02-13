function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function () {
        console.log('hello there persons ! ');
    };
}

const person1 = new Person('raghad', 25, 'female');



for(let key in person1){
    if (typeof person1[key] == 'function') continue; // dont show the function
    console.log(key, person1[key]);

}
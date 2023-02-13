function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hello = function () {
        if (canTalk())
            console.log('hello there persons ! ');
    };
    let canTalk = function () {
        return age > 3;
    }
}

const person1 = new Person('Raghad', 25, 'female');
person1.hello();
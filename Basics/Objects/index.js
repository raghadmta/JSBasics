function Person(name, age) {
    let id = Math.floor(Math.random() * 10);
    this.name = name;
    this.age = age;
    this.friends = [];
}

Person.prototype.hello = function () {
    console.log('hello There !! ');
};

const person1 = new Person('Raghad', 25);
const person2 = new Person('Reem', 21);


person1.hello();
person2.hello();

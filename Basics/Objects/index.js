function Person() {
}

Person.prototype.name='';
Person.prototype.age=0;
Person.prototype.friends=[];
Person.prototype.hello=function(){
    console.log('hello There !! ');
};

const person1 = new Person('Raghad', 25);
const person2 = new Person('Reem', 21);


person1.hello();
person2.hello();

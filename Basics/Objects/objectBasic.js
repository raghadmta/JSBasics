// literal way.
let person = {
    name: 'Raghad',
    age: 25,
    gender: 'famle',
    adress:{ // object inside an object
        country: 'Saudi Arabia',
        city: 'qassim',
        numberOfStreet :'21351'
    },
    hello: function(){
        console.log('function from a person');
    }
};
console.log(person);
person.hello();

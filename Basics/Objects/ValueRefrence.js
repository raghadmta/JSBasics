// Premitve Types  String - Numbers - Boolean - undefind - null 
// Refrence Types  object - Function - Array

let x = 23;
let y = x;
x = 20;

let z = { name: 'Abdulrhaman' };
let e = z;
z.name = 'Ali';

function increase(number){
    number.value ++;
}

let number = {value: 1};
increase(number);
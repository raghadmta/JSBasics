function greeting(name) {
    console.log('Hello ' + name);
}
greeting('Raghad');


// Number functions
function sum(n1, n2 = 0) { // we gave the n2 a  defulat value
    return n1 + n2;
}

let result = sum(5, 5);
console.log('Resulte is ', result);
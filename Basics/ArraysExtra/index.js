let numbers = [52, 4, 73, 4, 89];

// includes
console.log(numbers.includes(10)); // false mean the item is not found
console.log(numbers.includes(4));// true mean the item is found

// indexs
console.log(numbers.indexOf(4));  // found the first index of the item
console.log(numbers.lastIndexOf(4));  // found the last index of the item
console.log(numbers.indexOf(555));  //  -1 means is not found

let index = numbers.findIndex(item => item > 70);
console.log(index);


// find first index
let result = numbers.find(item => item > 70);
console.log(result);


// filter
let filter = numbers.filter(item => item > 70);
console.log(filter);

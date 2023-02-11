let arr = ["I", "Study", "JavaScript"];
console.log(arr);


// // splice
// arr.splice(index number, how many items to be replaced, 'the value of the items',...); 
arr.splice(3, 1, 'Ruby');
console.log(arr);


// slice
// arr.slice(start of the slice,ending of the slice);
let part = arr.slice(0, 2); // the ending is not included
console.log(part); // print the sliced part

// slice form the start x
let par = arr.slice(2);
console.log(par);

// duplicate the array
let pa = arr.slice();
console.log(pa);


// concat , join arrays togather
let numbers = [1, 2];
console.log(numbers.concat([3, 4], [5, 6]));
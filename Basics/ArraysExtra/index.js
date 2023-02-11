let fruit = ["apple", "oreange", "banana"];


// add to the start.
fruit.unshift('pear');
console.log(fruit);


// add to the end.
fruit[4] = 'chery';
console.log(fruit);

fruit[fruit.length] = 'greap';
console.log(fruit);


// add x numbers of elemnts.
fruit.push('bluberries', 'strawberries');
console.log(fruit);


// add element in index x
fruit.splice(3, 0, 'plum', ' pineapple');
console.log(fruit);


// remove first item 
const first = fruit.shift();
console.log('item deleted: ' + first);
console.log(fruit);

// remove last item 
const last = fruit.pop();
console.log('item deleted: ' + last);
console.log(fruit);


// remove more than one item from the middle 
fruit.splice(0, 2); // fruit.splice(index number,how many items to be deleted); 
console.log(fruit);


const msg = [
    'hi',
    'there',
    'what r u doin',
    'great meeting you'
]

// for-in -> to see all the objects and the arrays
for (let index in msg) {
    console.log(index, msg[index]);

}

// for-of -> to see the items inside the array only
for (let item of msg) {
    console.log(item, msg[item]);

}
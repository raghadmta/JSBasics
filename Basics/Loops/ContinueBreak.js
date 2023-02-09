
let total = 0;
while (true) {
    let value = +prompt('Enter Number');
    if (value == 0) break; // to Stop when  enter 0
    if (isNaN(value)) continue; // to continue the loop without the total being NaN 
    total += value;
}
alert(`Your total is ${total}`);

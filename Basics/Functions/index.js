function sum(first, ...numbers) {//(n1, n2). // Rest parameter should be in the first palce

    // console.log(arguments); // shows the argument in need

    // // Old way 
    // let total = 0;
    // for (let n of arguments) total += n;
    // return total;

    // Newer way
    console.log(numbers);
    let total = first;
    for (let n of numbers) total += n;
    return total;
};

console.log(
    sum(3, 4, 5, 4, 5)
);
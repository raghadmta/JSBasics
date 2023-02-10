function hello(name) {
    console.log('Hi there !! ' + name);
}

let timeId = setTimeout(hello, 3000, 'Raghad'); // to start the function after 3 sec
clearTimeout(timeId); // to clean the timer

let intevalId = setInterval(hello, 1000, 'Raghad'); // repeate the function after 1 sec
clearInterval(intevalId);// to clean the timer


// setTimeout(function trick() {
//     console.log('tick');
//     setTimeout(trick, 1000);
// }, 1000);
// // will make sure that the function is finished then it waites 1 sec and the run again
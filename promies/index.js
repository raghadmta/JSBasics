let wait = time => new Promise( //to create a new promise
    (resolve, reject) => {
        if(time > 5000) reject('sorry I cant waite this long'); //the case of reject
        setTimeout(resolve, time);
    }
    //in case of resolve or reject
);
 
wait(3000) //the wating time for the message to be shown change it to see the log
    .then(()=> console.log("hey there")) 
    .catch(err => console.log(err)); //to catch the error if it excited and print the reject log
let wait = time => new Promise(
    (reslove, reject) => {
        if(time > 5000) reject('sorry I cant wait this long');
        setTimeout(reslove, time);
    }
);

wait(2000)
    .then (() => {
        console.log('hi there');
        return wait(1000);
    })
    .then (() => {
        console.log('bey there');

    });

    new Promise ((reslove, reject) => {
        setTimeout(() => reslove(1), 1000); //return after 1 seconed
    })
    .then (result =>{
        console.log(result);
        return result * 2 ;
    })
    .then (result =>{
        console.log(result);
        return result * 2 ;
    })
    .then (result =>{
        console.log(result);
        return result * 2 ;
    }) //this could solve the problem with 
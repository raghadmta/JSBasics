let wait = time => new Promise(
    (reslove, reject) => {
        if (time > 5000) reject('sorry I cant wait this long');
        setTimeout(reslove, time);
    }
);

async function doWork() { // to tell that the function isnt in sync
    try {
        await wait(9000);
        console.log('Hello');
        await wait(2000);
        console.log('there');
    } catch (error) {
        console.log(error);
    }
}


doWork();
console.log('End'); // to see that it is not working in a syncable way
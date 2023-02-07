const express = require('express'); //import express

const app = express(); // call function to create aserver 

app.get('/', (req, res) => { //how to handle the requset from the user
    res.sendFile('index.html', {root: __dirname});
});

//server listen to port number:
app.listen(3000, () => console.log('server is listening in port 3000!'));

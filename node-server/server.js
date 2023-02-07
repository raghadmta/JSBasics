const express = require('express'); //import express

const app = express(); // call function to create aserver 

app.get('/', (req, res) => { //how to handle the requset from the user
    res.sendFile('index.html', {root: __dirname});
});

app.get('/user', (req, res) => res.json([ // the user will requset from the path with the 'user' suffix
    {id:1, name:"raghad", email:'example1@example.com'},
    {id:2, name:"abeer", email:'example2@example.com'},
    {id:3, name:"manahel", email:'example3@example.com'},

]));

//server listen to port number:
app.listen(3000, () => console.log('server is listening in port 3000!'));

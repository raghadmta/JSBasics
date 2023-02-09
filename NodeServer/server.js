const express = require('express'); //import express
const bodyParser =require('body-parser'); // after installing body parser -> npm i body-parser 
const app = express(); // call function to create a server 

app.use(bodyParser.json());


app.get('/', (req, res) => { //how to handle the requset from the user
    res.sendFile('index.html', {root: __dirname});
});



app.get('/user', (req, res) => res.json([ // the user will requset from the path with the 'user' suffix
    {id:1, name:"raghad", email:'example1@example.com'},
    {id:2, name:"abeer", email:'example2@example.com'},
    {id:3, name:"manahel", email:'example3@example.com'},

]));


app.post('/user', (req, res) =>{ //to add the user, post is to sent the data to the server
    console.log(req.body);
    res.json({message: "user added successfully!"});
})

app.listen(3000, () => console.log('server is listening in port 3000!')); //server listen to port number:


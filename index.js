const express = require('express');
const app = express();
const postRouts = require('./routs/postRouts');

app.use('/posts' , postRouts);

app.get('/', (req,res)=>{
    res.send('hello');
});

app.listen(5000);
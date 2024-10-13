//import express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//init the express app
const app = express();

//Mongo atlas connection string
const mongoURI = 'mongodb+srv://veroproduction4:sujalapi@cluster4.rmdge.mongodb.net/';

//connect to mongodb Atlas 
mongoose.connect(mongoURI)
.then(()=>{
    console.log('connected to  mongodb')
})
.catch((error)=>{
    console.error('error connecting to mongoDb',error);
});

// Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 

//Define  a route 
app.get ('/',(req,res)=>{
    res.send('welcome to  my recipe assignemnt ')
})


//Initiazlie the port
const PORT = 2004;

// Initiazlize the sserver
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
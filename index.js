//import express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
dotenv.config({path: './config.env'});
const recipeRoutes = require('./src/routes/routes');
const InitiateMongoServer = require('./db');
const { route } = require('./src/routes/routes');

//Initialize Mongo Server
InitiateMongoServer();

//init the express app
const app = express();


//Mongo atlas connection string
//const mongoURI = 'mongodb+srv://veroproduction4:sujalapi@cluster4.rmdge.mongodb.net/';


// Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 

app.use('/api/recipe',recipeRoutes)

// read data from json 
const data = JSON.parse(fs.readFileSync('./recipes.json','utf-8'));
console.log(data);

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
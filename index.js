//import express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config({path: './config.env'});
const InitiateMongoServer = require('./db');
const { route } = require('./src/routes/routes');
const recipeRoutes = require('./src/routes/routes');

//Read data from Recipes.json
const data = JSON.parse(fs.readFileSync('./recipes.json','utf-8'));
//console.log(data);

//Initialize Mongo Server
InitiateMongoServer();

//init the express app
const app = express();


//Mongo atlas connection string
//const mongoURI = 'mongodb+srv://veroproduction4:sujalapi@cluster4.rmdge.mongodb.net/';

// Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 



//Define  a route 
app.get ('/',(req,res)=>{
    res.send('welcome to  my recipe assignemnt ')

})

// Link the Routes
app.use('/recipe',recipeRoutes);
console.log("h1")


//Initiazlie the port
const PORT = 2004;



// Initiazlize the sserver
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
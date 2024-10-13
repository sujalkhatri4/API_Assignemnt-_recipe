//import express
const express = require('express');
const bodyParser = require('body-parser');

//init the express app
const app = express();

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
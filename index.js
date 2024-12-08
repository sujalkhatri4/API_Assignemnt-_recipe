
require('dotenv').config({ path: './config.env' });
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const recipeRoutes = require('./routes/recipeRoute');
const userRoutes = require('./routes/userRoutes');


const app = express();


const mongoURI = process.env.DATABASE_URL;


mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Database Connected");
  }).catch((error)=>{
    console.log("Connection Error")
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/recipe', recipeRoutes);
app.use('/user', userRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


const { json } = require('body-parser');
const Recipe = require('../models/Recipes');
const fs = require('fs');

//function to import recipe from json 
exports.importRecipes = async(req, res) => {
    try{
        const data =JSON.parse(fs.readFileSync('./recipes.json','utf-8'));
        await Recipe.insertMany(data);//Get Recipes from database
        res.status(200).send("Recipe imported successfully");
    }
    catch(e){
        console.error(e);
    }
};

// function too get all the files 
exports.getMovies = async(req, res) => {
    try{
        const recipe = await Recipe.find();
        res.status(200).json(recipes);
    }
    catch(e){
        res.status(500).send('Error while fetching recipes');
    }
};
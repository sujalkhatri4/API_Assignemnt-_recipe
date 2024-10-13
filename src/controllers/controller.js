const Recipe = require('../models/Recipe')
const fs = require('fs');

// function to import recipes from json
exports.importRecipes = async(req,res)=>{
    try{
        const data = JSON.parse(fs.readFileSync('./recipes.json','utf-8'));
        await Recipe.insertMany(data);//import data 
        res.status(200).send("recipes imported sucessfully");
    }
    catch(e){
            console.error(e);
    }
};
//func to get all the data
exports.getRecipes = async(req,res)=>{
    try{
        const recipes = await Recipe.find();
        res.status(200).JSON(recipes);
    }
    catch(e){
            console.error(e);
            res.statis(500).send('error retriving recipe');
    }
};

// function to create new recipe
exports.createRecipe = async(req,res)=>{
    try{
        const newRecipe = new Recipe.find(req.body);
        await newRecipe.save();
        res.status(201).JSON(recipes);
    }
    catch(e){
            console.error(e);
            res.statis(500).send('error creating recipe');
    }
}

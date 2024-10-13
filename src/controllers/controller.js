const Recipe = require('../models/Recipe')
const fs = require('fs');

// function to import recipes from json
exports.importRecipes = async(req,res)=>{
    try{
        const data = json.parse(fs.readFileSync('./recipes.json','utf-8'));
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
        res.status(200).json(recipes);
    }
    catch(e){
            console.error(e);
            res.status(500).send('error retriving recipe');
    }
};

// function to create new recipe
exports.createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body); // Assuming req.body contains valid recipe data
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating recipe');
    }
};


//Get a single recipe by Id
exports.getRecipeById = async(req,res) =>{
    try{
        const recipe = await recipe.findById(req.params.id);
        if(!recipe){
            return res.status(404).send('recipe is not found');
        }
        res.status(201).json(recipe);
    
    }
    catch(e){
        console.error(e);
        res.status(500).send('Error retrieving the recipe');
    }
    };
const Recipe = require('../models/Recipe')
const fs = require('fs');

// function to import recipes from json
exports.importRecipes = async(req,res)=>{
    try{
        const data = JSON.parse(fs.readFileSync('./recipes.json','utf-8'));
        await Recipe.insertMany(data);//import data 
        res.status(200).send("Movies imported sucessfully");
    }
    catch(e){
            console.error(e);
    }
};
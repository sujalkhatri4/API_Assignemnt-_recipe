const Recipe = require('../models/Recipes');

exports.GetRecipes = async(req, res) => {
    try{
        const recipes =await Recipe.find();
        //Get Recipes from database
        res.status(200).json(recipes);
    }
    catch(e){
        res.status(500).send('Error while fetching recipes');
    }
};
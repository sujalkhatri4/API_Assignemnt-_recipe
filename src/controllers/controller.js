const Recipe = require('../models/Recipe');
const fs = require('fs');

// Function to import recipes from JSON
exports.importRecipes = async (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync('./recipes.json', 'utf-8')); // Corrected to JSON.parse
        await Recipe.insertMany(data); // Import data
        res.status(200).send("Recipes imported successfully");
    } catch (e) {
        console.error(e);
        res.status(500).send('Error importing recipes');
    }
};

// Function to get all recipes
exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (e) {
        console.error(e);
        res.status(500).send('Error retrieving recipes');
    }
};

// Function to create a new recipe
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

// Get a single recipe by ID
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id); // Corrected from `recipe` to `Recipe`
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).json(recipe); // Changed status to 200 for successful retrieval
    } catch (e) {
        console.error(e);
        res.status(500).send('Error retrieving the recipe');
    }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).json(updatedRecipe); // Return the updated recipe
    } catch (e) {
        console.error(e);
        res.status(500).send('Error updating the recipe');
    }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).json(deletedRecipe); // Return the deleted recipe
    } catch (e) {
        console.error(e);
        res.status(500).send('Error deleting the recipe');
    }
};

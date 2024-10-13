const Recipe = require('../models/Recipes');
const fs = require('fs');

// Function to import recipe from JSON
exports.importRecipes = async (req, res) => {
    try {
        // Read data from recipes.json
        const data = JSON.parse(fs.readFileSync('./recipes.json', 'utf-8'));
        
        // Ensure data is in the correct format (an array of recipe objects)
        if (!Array.isArray(data)) {
            return res.status(400).send("Invalid data format in recipes.json");
        }

        // Insert recipes into the database
        await Recipe.insertMany(data);
        res.status(200).send("Recipes imported successfully");
    } catch (e) {
        console.error("Error importing recipes:", e);
        res.status(500).send('Failed to import recipes');
    }
};

// Function to get all recipes
exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find(); // Change 'recipe' to 'recipes'
        res.status(200).json(recipes);
    } catch (e) {
        console.error("Error while fetching recipes:", e);
        res.status(500).send('Error while fetching recipes');
    }
};

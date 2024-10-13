const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/controller');

// Route to import recipes
router.post('/import', recipeController.importRecipes);

// Route to get all recipes
router.get('/', recipeController.getRecipes);

// Route to create a new recipe
router.post('/create', recipeController.createRecipe);

// Route to get a single recipe by ID
router.get('/:id', recipeController.getRecipeById);

// Route to update a recipe by ID
router.put('/:id', recipeController.updateRecipe); // Updated path for clarity

// Route to delete a recipe by ID
router.delete('/:id', recipeController.deleteRecipe); // Updated path for clarity

module.exports = router;

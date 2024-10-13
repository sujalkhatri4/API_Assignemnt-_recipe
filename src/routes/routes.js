const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/controller');

// Route to import recipes
router.post('/import', recipeController.importRecipes);

// Route to get all recipes
router.get('/', recipeController.getRecipes); 

module.exports = router;

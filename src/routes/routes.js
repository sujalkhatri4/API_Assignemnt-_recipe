const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/controller');

//Route to import recipe
router.post('/import',recipeController.importRecipes);

//routes to get all the recipe 
router.get('/',recipeController.getRecipes);

//routes to create new recipe
router.post('/create',recipeController.createRecipe);

module.exports=router;
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/controller');

//Route to import recipe
router.post('/import',recipeController.importRecipes);

//routes to get all the recipe 
router.get('/',recipeController.getRecipes);

//routes to create new recipe
router.post('/create',recipeController.createRecipe);

//Route to get a single recipe by id
router.get('/:id',recipeController.getRecipeById);

//Route to update a recipe by id

router.put('/update/:id', recipeController.updateRecipe);



module.exports=router;
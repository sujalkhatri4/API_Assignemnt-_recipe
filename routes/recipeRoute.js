

const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const verifyToken = require('../middleware/auth');


router.post('/import',recipeController.importRecipes);


router.post('/', verifyToken, recipeController.createRecipes);


router.get('/', recipeController.getAllRecipes);


router.get('/:id', recipeController.getRecipeById);


router.put('/:id',verifyToken, recipeController.updateRecipe);


router.delete('/:id', verifyToken, recipeController.deleteRecipe);

module.exports = router;

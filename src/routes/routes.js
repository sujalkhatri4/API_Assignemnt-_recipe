const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/controller');
//Route to import recipe
router.post('/import', recipeController.importRecipes);

//Routes to get all recipe
router.get('/',recipeController.getMovies);

module.exports = router;
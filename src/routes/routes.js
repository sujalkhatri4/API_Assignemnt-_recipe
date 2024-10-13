const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/controller');

//Route to import recipe
router.post('/import',recipeController.importRecipes);

module.exports=router;
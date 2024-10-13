const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/controller');

router.get('/', recipeController.GetRecipes);

module.exports = router;
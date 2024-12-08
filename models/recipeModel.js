

const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
    recipeName: { type: String },
    ingredients: { type: [String] },
    cookingTime: { type: String },
    difficulty: { type: String },
    cuisine: { type: String },
    description: { type: String },
    photoLink: { type: String },
    averageRating: { type: Number }
});


const Recipe = mongoose.model('recipes', recipeSchema);


module.exports = Recipe;

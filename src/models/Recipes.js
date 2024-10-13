const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    recipeName: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    cookingTime: { type: Number, required: true },
    difficulty: { 
        type: String, 
        enum: ['Easy', 'Medium', 'Hard'], 
        required: true 
    },
    cuisine: { type: String, required: true },
    description: { type: String, required: true },
    photoLink: { type: String, required: true },
    averageRating: { type: Number, min: 0, max: 5 }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;

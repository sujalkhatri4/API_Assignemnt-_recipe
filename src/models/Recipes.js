const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeName: { type: String, required: true },
  ingredients: [{ type: String, required: true }], // Store ingredients as an array
  cookingTime: { type: Number, required: true }, // In minutes
  difficulty: { type: String, required: true, enum: ['Easy', 'Medium', 'Hard'] },
  cuisine: { type: String, required: true },
  description: { type: String, required: true },
  photoLink: { type: String, required: true },
  averageRating: { type: Number, min: 0, max: 5 }
});

// Create the model
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

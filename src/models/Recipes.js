const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RecipeSchema = new Schema({
    recipeName : {type: String},
    ingredients : [{type: String}],
    cookingTime : {type: Number},
    difficulty : {type: String},
    cuisine : {type: String},
    description : {type : String},
    photoLink : {type: String},
    averageRating: {type: Number}
});

const Recipe = mongoose.model('Recipes', RecipeSchema);
module.exports = Recipe;
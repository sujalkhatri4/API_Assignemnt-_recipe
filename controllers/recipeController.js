
const Recipe = require('../models/recipeModel');
const fs = require("fs");


exports.importRecipes = async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./recipes_list.json", "utf-8"));
    await Recipe.insertMany(data); 
    res.status(200).send("Recipes imported to database successfully");
  } catch (e) {
    console.error(e);
    res.status(500).send("Error Importing Recipes to database");
  }
};



exports.createRecipes = async (req, res) => {
  try {
    const createRecipes = new Recipe(req.body); 
    await createRecipes.save();
    res
      .status(201)
      .json({ message: "Recipe created successfully", recipe: createRecipes });
    console.log("recipe successfully created");
  } catch (e) {
    console.error(e);
    res.status(500).send("Error creating recipe");
  }
};


exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); 
    res.status(200).json(recipes);
    console.log("Recipes retrived Successfully");
  } catch (e) {
    console.error(e);
    res.status(500).send("Error retreving recipes");
  }
};



exports.getRecipeById = async (req, res) => {
  try {
    const recipeById = await Recipe.findById(req.params.id);
    if (!recipeById) {
      return res.status(404).send("Recipe is not found");
    }
    res.status(200).json({
      message: "Recipe Found successfully",
      recipe: recipeById,
    });
    console.log("Recipes is found by ID");
  } catch (e) {
    console.error(e);
    res.status(500).send("Error retreving recipes by id");
  }
};



exports.updateRecipe = async (req, res) => {
  try {
    const updateRecipe = await Recipe.findByIdAndUpdate(

      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateRecipe) {
      return res.status(404).send("Recipes is not Update and has a error");
    }
    res
      .status(201)
      .json({ message: "Recipe Updated successfully", recipe: updateRecipe });
    console.log("Recipe is updated", updateRecipe);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error updating recipe");
  }
};



exports.deleteRecipe = async (req, res) => {
  try {
    const deleteRecipes = await Recipe.findByIdAndDelete(req.params.id); 
    if (!deleteRecipes) {
      return res.status(404).send("Recipe is not deleted");
    }
    res
      .status(201)
      .json({ message: "Recipe Deleted successfully", recipe: deleteRecipes });
    console.log("Recipe is deleted", deleteRecipes);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error deleting a recipe");
  }
};

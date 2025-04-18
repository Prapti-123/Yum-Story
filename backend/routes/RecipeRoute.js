const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares/authMiddleware');
const recipeController=require('../controllers/recipeController')

router.get('/',verifyToken,recipeController.getAllRecipes);

router.get('/:id', recipeController.getClickedRecipe);

    router.post('/create-recipe',verifyToken,recipeController.createRecipe); 

    module.exports = router;
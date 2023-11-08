import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
// imported recipes show component
import { RecipesShow } from "./RecipesShow";
import { Modal } from "./Modal";

export function Content() {
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [recipes, setRecipes] = useState([]);
  //giving react the variable and the ability to set that variable
  const [currentRecipe, setCurrentRecipe] = useState({});

  console.log("current recipe =", currentRecipe);

  // a function to make web request to index recipe data
  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  //a function to toggle modal show on, now also setting the currentRecipe variable
  const handleShowRecipe = (recipe) => {
    setIsRecipesShowVisible(true);
    setCurrentRecipe(recipe);
  };

  //a function to toggle modal shoff to false, closes modal
  const handleClose = () => {
    setIsRecipesShowVisible(false);
  };

  //react hook that calls a function on page load ONCE
  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />
      {/* changes modal to display currentRecipe data */}
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        {/* replaced data with a component */}
        <RecipesShow recipe={currentRecipe} />
      </Modal>
    </div>
  );
}

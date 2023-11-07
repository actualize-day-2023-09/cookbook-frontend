//imports axios to make web requests
import axios from "axios";
import { useState } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";

export function Content() {
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  //giving react the variable and the ability to set that variable
  const [recipes, setRecipes] = useState([]);

  //
  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  //a function to toggle modal show on
  const handleShowRecipe = () => {
    setIsRecipesShowVisible(true);
  };

  //a function to toggle modal shoff to false, closes modal
  const handleClose = () => {
    setIsRecipesShowVisible(false);
  };

  return (
    <div>
      <RecipesNew />
      <button onClick={handleIndexRecipes}>LOAD RECIPES</button>
      <RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <p>HELLO</p>
      </Modal>
    </div>
  );
}

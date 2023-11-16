import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
// imported recipes show component
import { RecipesShow } from "./RecipesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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

  const handleCreateRecipe = (params) => {
    axios.post("http://localhost:3000/recipes.json", params).then((response) => {
      setRecipes([...recipes, response.data]);
    });
  };

  const handleUpdateRecipe = (id, params) => {
    axios.patch(`http://localhost:3000/recipes/${id}.json`, params).then((response) => {
      setRecipes(
        recipes.map((recipe) => {
          if (recipe.id === response.data.id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
      setCurrentRecipe(response.data);
      setIsRecipesShowVisible(false);
    });
  };

  const handleDestroyRecipe = (recipe) => {
    axios.delete(`http://localhost:3000/recipes/${recipe.id}.json`).then((response) => {
      setRecipes(recipes.filter((r) => r.id !== recipe.id));
      handleClose();
    });
  };

  //react hook that calls a function on page load ONCE
  useEffect(handleIndexRecipes, []);

  return (
    <div className="container">
      <h3>Signup!</h3>
      <Signup />
      <Login />
      <LogoutLink />
      <RecipesNew onCreateRecipe={handleCreateRecipe} />
      <RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />
      {/* changes modal to display currentRecipe data */}
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        {/* replaced data with a component */}
        <RecipesShow recipe={currentRecipe} onUpdateRecipe={handleUpdateRecipe} onDestroyRecipe={handleDestroyRecipe} />
      </Modal>
    </div>
  );
}

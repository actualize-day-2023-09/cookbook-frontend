import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { RecipesShow } from "./RecipesShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { RecipesShowPage } from "./RecipesShowPage";

export function Content() {
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [recipes, setRecipes] = useState([]);
  //giving react the variable and the ability to set that variable
  const [currentRecipe, setCurrentRecipe] = useState({});

  console.log("current recipe =", currentRecipe);

  // a function to make web request to index recipe data
  const handleIndexRecipes = () => {
    axios.get("https://cookbook-api-m4pc.onrender.com/recipes.json").then((response) => {
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
    axios.post("https://cookbook-api-m4pc.onrender.com/recipes.json", params).then((response) => {
      setRecipes([...recipes, response.data]);
    });
  };

  const handleUpdateRecipe = (id, params) => {
    axios.patch(`https://cookbook-api-m4pc.onrender.com/recipes/${id}.json`, params).then((response) => {
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
    axios.delete(`https://cookbook-api-m4pc.onrender.com/recipes/${recipe.id}.json`).then((response) => {
      setRecipes(recipes.filter((r) => r.id !== recipe.id));
      handleClose();
    });
  };

  //react hook that calls a function on page load ONCE
  useEffect(handleIndexRecipes, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipes/new" element={<RecipesNew onCreateRecipe={handleCreateRecipe} />} />
        <Route path="/recipes" element={<RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />} />
        <Route path="/recipes/:id" element={<RecipesShowPage />} />
      </Routes>

      <h1>Welcome to COOKR! We're happy you're here!</h1>
      <LogoutLink />

      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <RecipesShow recipe={currentRecipe} onUpdateRecipe={handleUpdateRecipe} onDestroyRecipe={handleDestroyRecipe} />
      </Modal>
    </div>
  );
}

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function RecipesShowPage() {
  const [recipe, setRecipe] = useState({});
  const params = useParams();

  const handleShowRecipe = () => {
    axios.get(`http://localhost:3000/recipes/${params.id}.json`).then((response) => {
      setRecipe(response.data);
    });
  };

  useEffect(handleShowRecipe, []);

  return (
    <div id="recipes-show">
      <h1> Recipe Info</h1>
      <h2>{recipe.title}</h2>
      <p>{recipe.chef}</p>
      <p>{recipe.ingredients}</p>
      <p>{recipe.directions}</p>
    </div>
  );
}

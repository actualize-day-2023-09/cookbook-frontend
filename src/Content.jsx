//imports useState Hook to keep track of data
import { useState } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";

export function Content() {
  //giving react the variable and the ability to set that variable
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);

  //a function to toggle modal show on
  const handleShowRecipe = () => {
    setIsRecipesShowVisible(true);
  };

  //a function to toggle modal shoff to false, closes modal
  const handleClose = () => {
    setIsRecipesShowVisible(false);
  };

  let recipes = [
    {
      id: 1,
      title: "Raw Eggs",
      chef: "Peter Jang",
      image_url: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
    },
    {
      id: 2,
      title: "Mud Pie",
      chef: "Jay Wengrow",
      image_url: "https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg",
    },
    {
      id: 3,
      title: "Pizza",
      chef: "Jay Wengrow",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    },
  ];

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <p>HELLO</p>
      </Modal>
    </div>
  );
}

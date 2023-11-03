/* eslint-disable react/prop-types */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// header moved into a function of it's own
function Header() {
  return (
    <header>
      <a href="#">Home</a> |<a href="#recipes-index">All Recipes</a> | <a href="#recipes-new"> New Recipe</a>
    </header>
  );
}

// new form moved into a function of it's own
function RecipesNew() {
  return (
    /* new recipe form */
    <div id="recipes-new">
      <h3>Make a new Recipe!</h3>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Chef:
          <input type="text" />
        </div>
        <button type="submit">Create the recipe</button>
      </form>
    </div>
  );
}

// index moved into it's own function
function RecipesIndex(props) {
  console.log(props);

  return (
    <div id="recipes-index">
      <h3>All the Recipes!</h3>
      {/* loop of defined recipe data props from the parent component */}
      {props.recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} alt="food pics" />
          <p>Chef: {recipe.chef} </p>
          <button>More info!</button>
        </div>
      ))}
    </div>
  );
}

// footer moved into it's own function
function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

// creates a content function to import recipe components
function Content() {
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
      <RecipesIndex recipes={recipes} />
    </div>
  );
}

// imports components into the app function to be loaded in the browser
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

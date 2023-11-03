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
function RecipesIndex() {
  return (
    <div id="recipes-index">
      <h3>All the Recipes!</h3>
      {/* first recipe */}
      <div className="recipes">
        <h2>Raw Eggs</h2>
        <img src="https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" alt="photo of eggs" />
        <p>Chef: Peter Jang</p>
        <button>more info</button>
      </div>
      {/* second recipe */}
      <div className="recipes">
        <h2>Mud Pie</h2>
        <img
          src="https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg"
          alt="photo of eggs"
        />
        <p>Chef: Jay Wengrow</p>
        <button>more info</button>
      </div>
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
  return (
    <div>
      <RecipesNew />
      <RecipesIndex />
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

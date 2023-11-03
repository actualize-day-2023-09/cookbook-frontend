import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      {/* header */}
      <header>
        <a href="#">Home</a> |<a href="#recipes-index">All Recipes</a> | <a href="#recipes-new"> New Recipe</a>
      </header>

      {/* new recipe form */}
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

      {/* index of recipes */}
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

      {/* footer */}
      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );
}

export default App;

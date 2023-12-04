import { useState } from "react";

export function RecipesIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="recipes-index">
      <h3>All the Recipes!</h3>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.recipes
          .filter((recipe) => recipe.title.includes(searchFilter))
          .map((recipe) => (
            <div key={recipe.id} className="col">
              <div className="card">
                <img src={recipe.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.chef}</p>
                  <button onClick={() => props.onShowRecipe(recipe)}>More info!</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

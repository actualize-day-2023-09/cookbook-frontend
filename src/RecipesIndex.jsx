// index moved into it's own file
export function RecipesIndex(props) {
  console.log(props);

  return (
    <div id="recipes-index">
      <h3>All the Recipes!</h3>
      {/* loop of defined recipe data props from the parent component */}
      <div className="cards">
        {props.recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <h2>{recipe.title}</h2>
            <img src={recipe.image_url} alt="food pics" />
            <p>Chef: {recipe.chef} </p>
            <button onClick={props.onShowRecipe}>More info!</button>
          </div>
        ))}
      </div>
    </div>
  );
}

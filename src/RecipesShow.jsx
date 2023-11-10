export function RecipesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRecipe(props.recipe.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyRecipe(props.recipe);
  };

  console.log(props);
  return (
    <div id="recipes-show">
      <h1> Recipe Info</h1>
      <img src={props.recipe.image_url} alt="" />
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.recipe.title} name="title" type="text" />
        </div>
        <div>
          Chef: <input defaultValue={props.recipe.chef} name="chef" type="text" />
        </div>
        <div>
          Ingredients: <input defaultValue={props.recipe.ingredients} name="ingredients" type="text" />
        </div>
        <div>
          Directions: <input defaultValue={props.recipe.directions} name="directions" type="text" />
        </div>
        <div>
          Prep time: <input defaultValue={props.recipe.prep_time} name="prep_time" type="text" />
        </div>
        <div>
          Image_url: <input defaultValue={props.recipe.image_url} name="image_url" type="text" />
        </div>
        <button type="submit">Update recipe</button>
      </form>
      <button onClick={handleClick}>Delete Recipe</button>
    </div>
  );
}

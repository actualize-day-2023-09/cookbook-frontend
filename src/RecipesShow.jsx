//create a component to hold recipe show functionality

export function RecipesShow(props) {
  console.log(props);
  return (
    <div id="recipes-show">
      <h1> Recipe Info</h1>
      <h2>{props.recipe.title}</h2>
      <p>{props.recipe.chef}</p>
      <p>{props.recipe.ingredients}</p>
      <p>{props.recipe.directions}</p>
      <p>{props.recipe.prep_time}</p>
    </div>
  );
}

export function RecipesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit", params);
    props.onCreateRecipe(params);
    event.target.reset();
    window.location.href = "/recipes";
  };

  return (
    <div id="recipes-new">
      <h3>Make a new Recipe!</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Chef
          </label>
          <input
            name="chef"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Ingredients
          </label>
          <input
            name="ingredients"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Prep time
          </label>
          <input
            name="prep_time"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Directions
          </label>
          <input
            name="directions"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Image URL
          </label>
          <input
            name="image_url"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <button type="submit">Create the recipe</button>
      </form>
    </div>
  );
}

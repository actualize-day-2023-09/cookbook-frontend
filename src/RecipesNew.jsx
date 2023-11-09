// new form moved into a file of it's own
export function RecipesNew() {
  return (
    /* new recipe form */
    <div id="recipes-new">
      <h3>Make a new Recipe!</h3>
      <form method="POST" action="http://localhost:3000/recipes.json">
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

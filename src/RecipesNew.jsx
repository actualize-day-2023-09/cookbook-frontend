// new form moved into a file of it's own
export function RecipesNew() {
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

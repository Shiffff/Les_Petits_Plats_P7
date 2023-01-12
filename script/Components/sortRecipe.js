let filterArray = [];

class Recette {
  static supports(field) {
    return field === "mainSearch";
  }
  static order(filterRecipes, value) {
    let result = [];
    filterRecipes.forEach((recipe) => {
      if (
        recipe.name.toLowerCase().includes(value.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(value.toLowerCase())
        ) ||
        recipe.description.toLowerCase().includes(value.toLowerCase())
      ) {
        result.push(recipe);
      }
    });
    return result;
  }
}

class Ingredient {
  static supports(field) {
    return field === "ingrediantSearch";
  }
  static order(filterRecipes, value) {
    let newRecipes = [];
    filterRecipes.forEach((recipe) => {
      if (
        recipe.name.toLowerCase().includes(value.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(value.toLowerCase())
        ) ||
        recipe.description.toLowerCase().includes(value.toLowerCase())
      ) {
        newRecipes.push(recipe);
      }
    });
    return newRecipes;
  }
}

const filters = [Recette, Ingredient];

const sortMedia = (filterRecipes, value, field) => {
  for (const filter of filters)
    if (filter.supports(field)) {
      filterRecipes = filter.order(filterRecipes, value);
    }
  return filterRecipes;
};

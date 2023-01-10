let filterArray = [];

class Recette {
  static supports(field) {
    return field === "mainSearch";
  }
  static order(filterRecipes, value) {
    return filterRecipes.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(value.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(value.toLowerCase())
        ) ||
        recipe.description.toLowerCase().includes(value.toLowerCase())
      );
    });
  }
}

class Ingredient {
  static supports(field) {
    return field === "ingrediantSearch";
  }
  static order(filterRecipes, value) {
    let found = false;
    filterArray.forEach((ingredient) => {
      if (ingredient == value) {
        filterArray = filterArray.filter((ingredient) => ingredient != value);
        found = true;
      }
    });
    if (!found) {
      filterArray.push(value);
    }
    console.log(filterArray);
    filterArray.forEach((ingredient) => {
      console.log(ingredient);
    });
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

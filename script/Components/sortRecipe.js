class Recette {
  static supports(field) {
    return field === "mainSearch";
  }
  static order(filterRecipes, value) {
    return filterRecipes.filter((recette) =>
      Recette.filterArray(recette, value)
    );
  }
  static filterArray(recette, value) {
    return (
      recette.name.toLowerCase().includes(value.toLowerCase()) ||
      recette.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(value.toLowerCase())
      ) ||
      recette.description.toLowerCase().includes(value.toLowerCase())
    );
  }
}

class Ingredient {
  static supports(field) {
    return field === "ingrediantSearch";
  }
  static order(filterRecipes, value) {
    const filterArray = (recipe) => {
      return recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(value.toLowerCase())
      );
    };
    return filterRecipes.filter((recipe) => filterArray(recipe));
  }
}

class Appareil {
  static supports(field) {
    return field === "appareilSearch";
  }
  static order(filterRecipes, value) {
    const filterArray = (recipe) => {
      return recipe.appliance == value;
    };
    return filterRecipes.filter((recipe) => filterArray(recipe));
  }
}
class Ustensil {
  static supports(field) {
    return field === "ustensilSearch";
  }
  static order(filterRecipes, value) {
    const filterArray = (recipe) => {
      return recipe.ustensils.some((ustensil) =>
        ustensil.toLowerCase().includes(value.toLowerCase())
      );
    };
    return filterRecipes.filter((recipe) => filterArray(recipe));
  }
}

const filters = [Recette, Ingredient, Appareil, Ustensil];

const sortMedia = (filterRecipes, value, field) => {
  for (const filter of filters)
    if (filter.supports(field)) {
      filterRecipes = filter.order(filterRecipes, value);
    }
  return filterRecipes;
};

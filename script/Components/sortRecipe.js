class Recette {
  static supports(field) {
    return field === "mainSearch";
  }
  static order(filterRecipes, value) {
    let result = [];
    for (let i = 0; i < filterRecipes.length; i++) {
      if (
        filterRecipes[i].name.toLowerCase().includes(value.toLowerCase()) ||
        filterRecipes[i].ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(value.toLowerCase())
        ) ||
        filterRecipes[i].description.toLowerCase().includes(value.toLowerCase())
      ) {
        result.push(filterRecipes[i]);
      }
    }
    return result;
  }
}

class Ingredient {
  static supports(field) {
    return field === "ingrediantSearch";
  }
  static order(filterRecipes, value) {
    let newRecipes = [];
    for (let i = 0; i < filterRecipes.length; i++) {
      if (
        filterRecipes[i].ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(value.toLowerCase())
        )
      ) {
        newRecipes.push(filterRecipes[i]);
      }
    }
    return newRecipes;
  }
}
class Appareil {
  static supports(field) {
    return field === "appareilSearch";
  }
  static order(filterRecipes, value) {
    let newRecipes = [];
    for (let i = 0; i < filterRecipes.length; i++) {
      if (filterRecipes[i].appliance == value) {
        newRecipes.push(filterRecipes[i]);
      }
    }
    return newRecipes;
  }
}
class Ustensil {
  static supports(field) {
    return field === "ustensilSearch";
  }
  static order(filterRecipes, value) {
    let newRecipes = [];
    for (let i = 0; i < filterRecipes.length; i++) {
      if (
        filterRecipes[i].ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(value.toLowerCase())
        )
      ) {
        newRecipes.push(filterRecipes[i]);
      }
    }
    return newRecipes;
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

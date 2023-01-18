class Recette {
  static supports(field) {
    return field === "mainSearch";
  }
  static order(filterRecipes, value) {
    let result = [];
    let i = 0;
    while (i < filterRecipes.length) {
      let j = 0;
      let match = false;
      while (j < filterRecipes[i].ingredients.length && !match) {
        let ingredient =
          filterRecipes[i].ingredients[j].ingredient.toLowerCase();
        let k = 0;
        let found = true;
        while (k < value.length && found) {
          if (ingredient[k] !== value[k]) {
            found = false;
          }
          k++;
        }
        if (found) {
          match = true;
        }
        j++;
      }
      let name = filterRecipes[i].name.toLowerCase();
      let k = 0;
      let found = true;
      while (k < value.length && found) {
        if (name[k] !== value[k]) {
          found = false;
        }
        k++;
      }
      let description = filterRecipes[i].description.toLowerCase();
      k = 0;
      let foundDescription = true;
      while (k < value.length && foundDescription) {
        if (description[k] !== value[k]) {
          foundDescription = false;
        }
        k++;
      }
      if (match || found || foundDescription) {
        result.push(filterRecipes[i]);
      }
      i++;
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
    let i = 0;
    value = value.toLowerCase();
    while (i < filterRecipes.length) {
      let j = 0;
      while (j < filterRecipes[i].ingredients.length) {
        let ingredient =
          filterRecipes[i].ingredients[j].ingredient.toLowerCase();
        let k = 0;
        while (k < value.length) {
          if (ingredient[k] != value[k]) break;
          if (k == value.length - 1) {
            newRecipes.push(filterRecipes[i]);
            break;
          }
          k++;
        }
        j++;
      }
      i++;
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
    let i = 0;
    value = value.toLowerCase();
    while (i < filterRecipes.length) {
      let j = 0;
      while (j < filterRecipes[i].ustensils.length) {
        let ustensil = filterRecipes[i].ustensils[j].toLowerCase();
        let k = 0;
        while (k < value.length) {
          if (ustensil[k] != value[k]) break;
          if (k == value.length - 1) {
            newRecipes.push(filterRecipes[i]);
            break;
          }
          k++;
        }
        j++;
      }
      i++;
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

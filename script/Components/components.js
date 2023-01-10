const sortData = (recipes) => {
  const ingredientsList = [];
  const appliancesList = [];
  const ustensilsList = [];
  for (const recipe of recipes) {
    ingredientsList.push(...recipe.ingredients);
    appliancesList.push(recipe.appliance);
    ustensilsList.push(...recipe.ustensils);
  }
  const ingredientNames = ingredientsList.map(
    (ingredient) => ingredient.ingredient
  );
  const uniqueIngredientArray = [...new Set(ingredientNames)];
  const uniqueApplianceArray = [...new Set(appliancesList)];
  const uniqueUstensilArray = [...new Set(ustensilsList)];

  ingredientFactory(uniqueIngredientArray);
  applianceFactory(uniqueApplianceArray);
  ustensilFactory(uniqueUstensilArray);
};
sortData(recipes);

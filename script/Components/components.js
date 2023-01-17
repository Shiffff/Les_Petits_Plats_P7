const ustensilesSearch = document.querySelector(".filtersOpen.red input");
const appareilSearch = document.querySelector(".filtersOpen.green input");
const ingredientSearch = document.querySelector(".filtersOpen.blue input");

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
  return {
    ingredientNames: uniqueIngredientArray,
    appliances: uniqueApplianceArray,
    ustensils: uniqueUstensilArray,
  };
};

const selectIngredientListenner = (ingredientsList) => {
  document.addEventListener("click", function (e) {
    ingredientSearch.addEventListener("input", (e) => {
      let newIngredientsList = sortLittleFilter(
        ingredientsList,
        ingredientSearch.value,
        "ingredient"
      );
      console.log(newIngredientsList);
      ingredientFactory(newIngredientsList);
    });
  });
};
const selectAppareilListenner = (appareilList) => {
  document.addEventListener("click", function (e) {
    appareilSearch.addEventListener("input", (e) => {
      let newAppreilList = sortLittleFilter(
        appareilList,
        appareilSearch.value,
        "appareil"
      );
      applianceFactory(newAppreilList);
    });
  });
};
const selectUstensilesListenner = (ustensilesList) => {
  document.addEventListener("click", function (e) {
    ustensilesSearch.addEventListener("input", (e) => {
      let newUstensilesList = sortLittleFilter(
        ustensilesList,
        ustensilesSearch.value,
        "ustensile"
      );
      ustensilFactory(newUstensilesList);
    });
  });
};
const arrayData = sortData(recipes);
selectIngredientListenner(arrayData.ingredientNames);
selectAppareilListenner(arrayData.appliances);
selectUstensilesListenner(arrayData.ustensils);

const copyArray = (originalArray) => {
  return JSON.parse(JSON.stringify(originalArray));
};

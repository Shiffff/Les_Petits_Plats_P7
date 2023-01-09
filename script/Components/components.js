const ingredientsList = [];
const appliancesList = [];
const ustensilsList = [];

const sortData = () => {
  for (const recipe of recipes) {
    ingredientsList.push(...recipe.ingredients);
    appliancesList.push(recipe.appliance);
    ustensilsList.push(...recipe.ustensils);
  }
};
sortData();

const ingredientNames = ingredientsList.map(
  (ingredient) => ingredient.ingredient
);

const uniqueIngredientArray = [...new Set(ingredientNames)];
const uniqueApplianceArray = [...new Set(appliancesList)];
const uniqueUstensilArray = [...new Set(ustensilsList)];

const ingrediantListContainer = document.querySelector(
  ".ingrediantContainer ul"
);
uniqueIngredientArray.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ingrediantListContainer.appendChild(li);
});

const appareilsListContainer = document.querySelector(".appareilsContainer ul");
uniqueApplianceArray.forEach((appliance) => {
  const li = document.createElement("li");
  li.textContent = appliance;
  appareilsListContainer.appendChild(li);
});

const ustensilesListContainer = document.querySelector(
  ".ustensilesContainer ul"
);
uniqueUstensilArray.forEach((ustensile) => {
  const li = document.createElement("li");
  li.textContent = ustensile;
  ustensilesListContainer.appendChild(li);
});

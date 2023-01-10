const ingredientFactory = (uniqueIngredientArray) => {
  const ingrediantListContainer = document.querySelector(
    ".ingrediantContainer ul"
  );
  ingrediantListContainer.innerText = "";

  uniqueIngredientArray.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingrediantListContainer.appendChild(li);
  });
};

const applianceFactory = (uniqueApplianceArray) => {
  const appareilsListContainer = document.querySelector(
    ".appareilsContainer ul"
  );
  appareilsListContainer.innerText = "";
  uniqueApplianceArray.forEach((appliance) => {
    const li = document.createElement("li");
    li.textContent = appliance;
    appareilsListContainer.appendChild(li);
  });
};

const ustensilFactory = (uniqueUstensilArray) => {
  const ustensilesListContainer = document.querySelector(
    ".ustensilesContainer ul"
  );
  ustensilesListContainer.innerText = "";

  uniqueUstensilArray.forEach((ustensile) => {
    const li = document.createElement("li");
    li.textContent = ustensile;
    ustensilesListContainer.appendChild(li);
  });
};

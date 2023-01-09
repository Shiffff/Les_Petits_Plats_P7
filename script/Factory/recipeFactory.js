const recipeContainer = document.querySelector(".recipeContainer");
const recipeFactory = (recipe) => {
  const cardOne = document.createElement("div");
  cardOne.classList.add("cardOne");
  const bgimg = document.createElement("div");
  bgimg.classList.add("bgimg");
  const cardBottom = document.createElement("div");
  cardBottom.classList.add("cardBottom");
  const cardBottomTop = document.createElement("div");
  cardBottomTop.classList.add("cardBottomTop");
  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = recipe.name;
  const timecontainer = document.createElement("div");
  timecontainer.classList.add("timecontainer");
  const oclockicon = document.createElement("img");
  oclockicon.setAttribute("src", "./assets/pictures/oclock.svg");
  oclockicon.setAttribute("alt", "Horloge");
  const timeText = document.createElement("p");
  timeText.innerText = recipe.time + " min";
  const cardBottomBack = document.createElement("div");
  cardBottomBack.classList.add("cardBottomBack");
  const ingredientList = document.createElement("div");
  ingredientList.classList.add("ingredientList");
  const ulList = document.createElement("ul");

  const descriptionCard = document.createElement("div");
  descriptionCard.classList.add("descriptionCard");
  const descriptionP = document.createElement("p");
  descriptionP.innerText = recipe.description;

  recipe.ingredients.forEach((ingredient) => {
    let ingredientstr = `${ingredient.ingredient}`;
    if (ingredient.quantity) {
      ingredientstr += `: ${ingredient.quantity}`;
    }
    if (ingredient.unit) {
      ingredientstr += ` ${ingredient.unit}`;
    }
    const ingredientLi = document.createElement("li");
    ingredientLi.innerText = ingredientstr;
    ulList.appendChild(ingredientLi);
  });

  timecontainer.appendChild(oclockicon);
  timecontainer.appendChild(timeText);
  cardBottomTop.appendChild(title);
  cardBottomTop.appendChild(timecontainer);
  cardBottomBack.appendChild(ingredientList);
  ingredientList.appendChild(ulList);
  cardBottomBack.appendChild(descriptionCard);

  cardBottom.appendChild(cardBottomTop);

  cardBottom.appendChild(cardBottomBack);

  descriptionCard.appendChild(descriptionP);

  recipeContainer.appendChild(cardOne);
  cardOne.appendChild(bgimg);
  cardOne.appendChild(cardBottom);
};

// ulList.appendChild(ingredientLi);
/*  recipe.ingredients.forEach((ingredient) => {
    const ingredientLi = document.createElement("li");
    ingredientLi.innerText = ingredient;
  });
*/

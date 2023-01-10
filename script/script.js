document.querySelectorAll(".filterContainer button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const parentDiv = button.parentNode.parentNode;
    checkOtherFilter();
    openFilter(parentDiv);
  });
});
document.querySelectorAll(".filtersOpen img").forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.preventDefault();
    checkOtherFilter();
  });
});
const openFilter = (parentDiv) => {
  parentDiv.querySelector(".filtersClose").style.display = "none";
  parentDiv.querySelector(".filtersOpen").style.display = "block";
};
const checkOtherFilter = () => {
  const filterEl = document.querySelectorAll(".filtersOpen");
  filterEl.forEach((el) => {
    if (el.style.display === "block") {
      el.style.display = "none";
      el.parentNode.querySelector(".filtersClose").style.display = "block";
    }
  });
};
const closeFilter = () => {
  window.addEventListener("click", function (event) {
    const filterEl = document.querySelectorAll(".filtersOpen");
    filterEl.forEach((el) => {
      if (el.style.display === "block") {
        const parentEl = el.parentNode;
        if (!parentEl.contains(event.target)) {
          checkOtherFilter();
        }
      }
    });
  });
};
closeFilter();

recipes.forEach((recipe) => {
  recipeFactory(recipe);
});

let filterRecipes = recipes;
let newRecipesList;

const mainSearchListener = () => {
  const mainSearch = document.querySelector(".rounded input");
  mainSearch.addEventListener("input", (e) => {
    if (mainSearch.value.length > 2) {
      newRecipesList = sortMedia(filterRecipes, mainSearch.value, "mainSearch");
      const recipeContainer = document.querySelector(".recipeContainer");
      recipeContainer.innerText = "";
      newRecipesList.forEach((recipe) => {
        recipeFactory(recipe);
      });
      sortData(newRecipesList);
    } else {
      recipeContainer.innerText = "";
      filterRecipes.forEach((recipe) => {
        recipeFactory(recipe);
      });
      sortData(filterRecipes);
    }
  });
};
mainSearchListener();

const ingredientsListener = () => {
  document.querySelectorAll(".ingrediantContainer li").forEach((ingredient) => {
    ingredient.addEventListener("click", (e) => {
      newRecipesList = sortMedia(
        filterRecipes,
        e.target.textContent,
        "ingrediantSearch"
      );
    });
  });
};
ingredientsListener();

const appareilsListener = () => {
  document.querySelectorAll(".appareilsContainer li").forEach((appareil) => {
    appareil.addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
};
appareilsListener();

const ustensileListener = () => {
  document.querySelectorAll(".ustensilesContainer li").forEach((ustensile) => {
    ustensile.addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
};
ustensileListener();

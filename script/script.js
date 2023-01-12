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

let filterRecipes = copyArray(recipes);

recipes.forEach((recipe) => {
  recipeFactory(recipe);
});

const mainSearchListener = () => {
  const mainSearch = document.querySelector(".rounded input");
  mainSearch.addEventListener("input", (e) => {
    filterRecipes = copyArray(recipes);
    if (mainSearch.value.length > 2) {
      filterRecipes = sortMedia(filterRecipes, mainSearch.value, "mainSearch");
      const recipeContainer = document.querySelector(".recipeContainer");
      recipeContainer.innerText = "";
      filterRecipes.forEach((recipe) => {
        recipeFactory(recipe);
      });
      sortData(filterRecipes);
    } else {
      recipeContainer.innerText = "";
      recipes.forEach((recipe) => {
        recipeFactory(recipe);
      });
      sortData(recipes);
    }
  });
};
mainSearchListener();

const ingredientsListener = () => {
  let filterActiveArray = [];
  document.querySelectorAll(".ingrediantContainer li").forEach((ingredient) => {
    ingredient.addEventListener("click", (e) => {
      const recipeContainer = document.querySelector(".recipeContainer ");
      recipeContainer.innerText = "";
      cliquedFilter = e.target.textContent;
      let found = false;
      filterActiveArray.forEach((ingredient) => {
        if (ingredient == cliquedFilter) {
          filterActiveArray = filterActiveArray.filter(
            (ingredient) => ingredient != cliquedFilter
          );
          found = true;
          filterActiveArray.forEach((eachFilter) => {
            filterRecipes = sortMedia(recipes, eachFilter, "ingrediantSearch");
          });
        }
      });
      if (!found) {
        filterActiveArray.push(cliquedFilter);
        filterActiveArray.forEach((eachFilter) => {
          filterRecipes = sortMedia(
            filterRecipes,
            eachFilter,
            "ingrediantSearch"
          );
        });
      }

      console.log(filterRecipes);
    });
  });
};
ingredientsListener();

/*
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

/*    ingredient.addEventListener("click", (e) => {
      newRecipesList = sortMedia(
        filterRecipes,
        e.target.textContent,
        "ingrediantSearch"
      );
    });*/

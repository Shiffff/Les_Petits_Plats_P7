let ingredientFilterActiveArray = [];
let appareilsFilterActiveArray = [];
let ustensilsFilterActiveArray = [];
let filterActiveArray = [];

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
// FilterSort *************************************************

const sortFilter = () => {
  recipeContainer.innerText = "";
  let filterRecipes = copyArray(recipes);
  filterActiveArray.forEach((filter) => {
    if (filter.mainSearchValue) {
      filterRecipes = sortMedia(
        filterRecipes,
        filter.mainSearchValue,
        "mainSearch"
      );
    } else if (filter.ingredientsFilters) {
      filter.ingredientsFilters.forEach((filterOne) => {
        filterRecipes = sortMedia(filterRecipes, filterOne, "ingrediantSearch");
      });
    } else if (filter.appareilsFilters) {
      filter.appareilsFilters.forEach((filterOne) => {
        filterRecipes = sortMedia(filterRecipes, filterOne, "appareilSearch");
      });
    } else if (filter.ustensilsFilters) {
      filter.ustensilsFilters.forEach((filterOne) => {
        filterRecipes = sortMedia(filterRecipes, filterOne, "ustensilSearch");
      });
    }
  });
  if (filterRecipes[0]) {
    filterRecipes.forEach((recipe) => {
      recipeFactory(recipe);
    });
    sortData(filterRecipes);
  } else {
    recipeContainer.innerText = `Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc.`;
  }
};
sortFilter();

// MAIN SEARCH *************************************************

const mainSearchListener = () => {
  const mainSearch = document.querySelector(".rounded input");
  mainSearch.addEventListener("input", (e) => {
    if (mainSearch.value.length > 2) {
      let mainSearchValue = { mainSearchValue: mainSearch.value };
      let existing = filterActiveArray.find((item) => item.mainSearchValue);
      if (existing) {
        existing.mainSearchValue = mainSearchValue.mainSearchValue;
      } else {
        filterActiveArray.push(mainSearchValue);
      }
    } else {
      let existing = filterActiveArray.find((item) => item.mainSearchValue);
      if (existing) {
        filterActiveArray = filterActiveArray.filter(
          (item) => item !== existing
        );
      }
    }
    sortFilter();
  });
};
mainSearchListener();

// INGREDIENTS *************************************************

const ingredientsListener = () => {
  document.addEventListener("click", function (e) {
    if (
      e.target.tagName === "LI" &&
      e.target.closest(".filtersOpen.blue ul li")
    ) {
      cliquedFilter = e.target.textContent;
      newIngredientFilter(cliquedFilter);
    }
  });
};
ingredientsListener();

newIngredientFilter = (cliquedFilter) => {
  let found = false;
  ingredientFilterActiveArray.forEach((ingredient) => {
    if (ingredient == cliquedFilter) {
      ingredientFilterActiveArray = ingredientFilterActiveArray.filter(
        (ingredient) => ingredient != cliquedFilter
      );
      const deleteLi = document.querySelectorAll(".activeFilter li");
      deleteLi.forEach((deleteLiOne) => {
        if (deleteLiOne.querySelector("p").innerText == ingredient) {
          deleteLiOne.remove();
        }
      });
      found = true;
    }
  });
  if (!found) {
    ingredientFilterActiveArray.push(cliquedFilter);
    const activeFilter = document.querySelector(".activeFilter ul");
    const newLi = activeFilterfct(cliquedFilter, "blue");
    activeFilter.appendChild(newLi);
  }
  let ingredientsActiveArray = {
    ingredientsFilters: ingredientFilterActiveArray,
  };
  let existing = filterActiveArray.find((item) => item.ingredientsFilters);
  if (existing) {
    filterActiveArray = filterActiveArray.filter((item) => item !== existing);
    filterActiveArray.push(ingredientsActiveArray);
  } else {
    filterActiveArray.push(ingredientsActiveArray);
  }
  sortFilter();
};
document.addEventListener("click", function (e) {
  if (
    e.target.tagName === "IMG" &&
    e.target.closest(".activeFilter ul .liFilter.blue")
  ) {
    newIngredientFilter(e.target.parentNode.querySelector("p").textContent);
  }
});

// APPAREILS *************************************************

const appareilsListener = () => {
  document.addEventListener("click", function (e) {
    if (
      e.target.tagName === "LI" &&
      e.target.closest(".filtersOpen.green ul li")
    ) {
      cliquedFilter = e.target.textContent;
      newAppareilsFilter(cliquedFilter);
    }
  });
};
appareilsListener();

newAppareilsFilter = (cliquedFilter) => {
  let found = false;
  appareilsFilterActiveArray.forEach((appareil) => {
    if (appareil == cliquedFilter) {
      appareilsFilterActiveArray = appareilsFilterActiveArray.filter(
        (appareil) => appareil != cliquedFilter
      );
      const deleteLi = document.querySelectorAll(".activeFilter li");
      deleteLi.forEach((deleteLiOne) => {
        if (deleteLiOne.querySelector("p").innerText == appareil) {
          deleteLiOne.remove();
        }
      });
      found = true;
    }
  });
  if (!found) {
    appareilsFilterActiveArray.push(cliquedFilter);
    const activeFilter = document.querySelector(".activeFilter ul");
    const newLi = activeFilterfct(cliquedFilter, "green");
    activeFilter.appendChild(newLi);
  }
  let appareilsActiveArray = {
    appareilsFilters: appareilsFilterActiveArray,
  };
  let existing = filterActiveArray.find((item) => item.appareilsFilters);
  if (existing) {
    filterActiveArray = filterActiveArray.filter((item) => item !== existing);
    filterActiveArray.push(appareilsActiveArray);
  } else {
    filterActiveArray.push(appareilsActiveArray);
  }
  sortFilter();
};
document.addEventListener("click", function (e) {
  if (
    e.target.tagName === "IMG" &&
    e.target.closest(".activeFilter ul .liFilter.green")
  ) {
    newAppareilsFilter(e.target.parentNode.querySelector("p").textContent);
  }
});

// Ustensiles *************************************************
const ustensilesListener = () => {
  document.addEventListener("click", function (e) {
    if (
      e.target.tagName === "LI" &&
      e.target.closest(".filtersOpen.red ul li")
    ) {
      cliquedFilter = e.target.textContent;
      newUstensilsFilter(cliquedFilter);
    }
  });
};
ustensilesListener();

newUstensilsFilter = (cliquedFilter) => {
  let found = false;
  ustensilsFilterActiveArray.forEach((ustensils) => {
    if (ustensils == cliquedFilter) {
      ustensilsFilterActiveArray = ustensilsFilterActiveArray.filter(
        (ustensils) => ustensils != cliquedFilter
      );
      const deleteLi = document.querySelectorAll(".activeFilter li");
      deleteLi.forEach((deleteLiOne) => {
        if (deleteLiOne.querySelector("p").innerText == ustensils) {
          deleteLiOne.remove();
        }
      });
      found = true;
    }
  });
  if (!found) {
    ustensilsFilterActiveArray.push(cliquedFilter);
    const activeFilter = document.querySelector(".activeFilter ul");
    const newLi = activeFilterfct(cliquedFilter, "red");
    activeFilter.appendChild(newLi);
  }
  let ustensilsActiveArray = {
    ustensilsFilters: ustensilsFilterActiveArray,
  };
  let existing = filterActiveArray.find((item) => item.ustensilsFilters);
  if (existing) {
    filterActiveArray = filterActiveArray.filter((item) => item !== existing);
    filterActiveArray.push(ustensilsActiveArray);
  } else {
    filterActiveArray.push(ustensilsActiveArray);
  }

  sortFilter();
};
document.addEventListener("click", function (e) {
  if (
    e.target.tagName === "IMG" &&
    e.target.closest(".activeFilter ul .liFilter.red")
  ) {
    newUstensilsFilter(e.target.parentNode.querySelector("p").textContent);
  }
});

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

const mainSearchListener = () => {
  const mainSearch = document.querySelector(".rounded input");
  mainSearch.addEventListener("input", (e) => {
    if (mainSearch.value.length > 2) {
      filterRecipes = sortMedia(recipes, mainSearch.value, "mainSearch");
      const recipeContainer = document.querySelector(".recipeContainer");
      recipeContainer.innerText = "";
      filterRecipes.forEach((recipe) => {
        recipeFactory(recipe);
      });
      sortData(filterRecipes);
    } else {
      recipeContainer.innerText = "";
      filterRecipes = sortMedia(recipes, mainSearch.value, "mainSearch");
      recipes.forEach((recipe) => {
        recipeFactory(recipe);
      });
      sortData(filterRecipes);
    }
    console.log(filterRecipes)
  });
};
mainSearchListener();


const ingredientsListener = () => {

document.addEventListener("click", function(e) {
  if (e.target.tagName === "LI" && e.target.closest(".filtersOpen.blue ul li")) {
    cliquedFilter = e.target.textContent;
    newIngredientFilter(cliquedFilter)
}
});
};
ingredientsListener();

newIngredientFilter = (cliquedFilter) => {
  ingredientFilterRecipes = copyArray(filterRecipes);
  const recipeContainer = document.querySelector(".recipeContainer ");
  recipeContainer.innerText = "";
  let found = false;
  filterActiveArray.forEach((ingredient) => {
    if (ingredient == cliquedFilter) {
      filterActiveArray = filterActiveArray.filter(
        (ingredient) => ingredient != cliquedFilter
      );
      const deleteLi = document.querySelectorAll(".activeFilter li")
      deleteLi.forEach((deleteLiOne) => {
        if(deleteLiOne.querySelector("p").innerText == ingredient){
          deleteLiOne.remove()
        }
      })
      found = true;
      filterActiveArray.forEach((eachFilter) => {
        ingredientFilterRecipes = sortMedia(recipes, eachFilter, "ingrediantSearch");
      });
    }
  });
  if (!found) {
    filterActiveArray.push(cliquedFilter);
    const activeFilter = document.querySelector(".activeFilter ul")
    const newLi = activeFilterfct(cliquedFilter)
    activeFilter.appendChild(newLi)
    filterActiveArray.forEach((eachFilter) => {
      ingredientFilterRecipes = sortMedia(
        ingredientFilterRecipes,
        eachFilter,
        "ingrediantSearch"
      );
    });
  }
  ingredientFilterRecipes.forEach((recipe) => {
    recipeFactory(recipe);
  });
  sortData(ingredientFilterRecipes)
}

document.addEventListener("click", function(e) {
  if (e.target.tagName === "IMG" && e.target.closest(".activeFilter ul li")) {
    newIngredientFilter(e.target.parentNode.querySelector("p").textContent)
  }
});


//     newIngredientFilter(e.target.parentNode.querySelector("p").textContent)

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

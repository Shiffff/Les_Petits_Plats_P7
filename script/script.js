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

console.log(recipes);
recipes.forEach((recipe) => {
  recipeFactory(recipe);
});

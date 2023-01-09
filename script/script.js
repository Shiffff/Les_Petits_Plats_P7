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

/*



document.querySelectorAll(".filterContainer button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openCloseFilter(event.target);
    changeStyle(event.target);
  });
});

const changeStyle = (e) => {
  let parentDiv = e;
  while (parentDiv.tagName !== "DIV") {
    parentDiv = parentDiv.parentNode;
  }
};

const openCloseFilter = (event) => {
  let parentDiv = event;
  if (parentDiv.tagName === "BUTTON") {
    parentDiv = parentDiv.parentNode;
    openFilter(parentDiv);
  } else if (parentDiv.tagName === "INPUT") {
    parentDiv = parentDiv.parentNode.parentNode;
    openFilter(parentDiv);
  } else if (parentDiv.tagName === "IMG") {
    parentDiv = parentDiv.parentNode.parentNode;
    openFilterByArrow(parentDiv);
  }
};

const checkOpenFilter = () => {
  const ulElements = document.querySelectorAll("ul");
  ulElements.forEach((ul) => {
    if (ul.style.display === "block") {
      const newPlaceHolder = closePlaceholder(
        ul.parentNode.querySelector("input").placeholder
      );
      ul.parentNode.querySelector("IMG").style.transform = "rotate(0deg)";

      ul.parentNode.querySelector("input").placeholder = newPlaceHolder;

      ul.style.display = "none";
    }
  });
};

const openPlaceholder = (placeHolder) => {
  if (placeHolder == "Ingredients") {
    return "Rechercher un ingredient";
  } else if (placeHolder == "Appareils") {
    return "Rechercher un appareil";
  } else if (placeHolder == "Ustensiles") {
    return "Rechercher un ustensile";
  }
};

const closePlaceholder = (placeHolder) => {
  if (placeHolder == "Rechercher un ingredient") {
    return "Ingredients";
  } else if (placeHolder == "Rechercher un appareil") {
    return "Appareils";
  } else if (placeHolder == "Rechercher un ustensile") {
    return "Ustensiles";
  }
};
const closeOnClique = () => {
  window.addEventListener("click", function (event) {
    const ulElements = document.querySelectorAll("ul");
    ulElements.forEach((ul) => {
      if (ul.style.display === "block") {
        const form = ul.parentNode;
        if (!form.contains(event.target)) {
          checkOpenFilter();
        }
      }
    });
  });
};
closeOnClique();

// Remonte a l'élément DIV selon l'élément cliqué
const openFilter = (parentDiv) => {
  const filterList = parentDiv.querySelector("ul");
  let placeholder = parentDiv.querySelector("input").placeholder;

  if (filterList.style.display === "block") {
  } else {
    checkOpenFilter();
    // Vérifie si l'un des éléments est ouvert si oui le ferme

    filterList.style.display = "block";
    const newPlaceHolder = openPlaceholder(placeholder);
    parentDiv.querySelector("input").placeholder = newPlaceHolder;
    parentDiv.querySelector("IMG").style.transform = "rotate(180deg)";
    // ouvre le bon élément
  }
};

const openFilterByArrow = (parentDiv) => {
  const filterList = parentDiv.querySelector("ul");
  let placeholder = parentDiv.querySelector("input").placeholder;

  if (filterList.style.display === "block") {
    filterList.style.display = "none";
    const newPlaceHolder = closePlaceholder(
      parentDiv.querySelector("INPUT").placeholder
    );
    parentDiv.querySelector("INPUT").placeholder = newPlaceHolder;
    parentDiv.querySelector("img").style.transform = "rotate(0deg)";
  } else {
    checkOpenFilter();
    // Vérifie si l'un des éléments est ouvert si oui le ferme

    filterList.style.display = "block";
    const newPlaceHolder = openPlaceholder(placeholder);
    parentDiv.querySelector("input").placeholder = newPlaceHolder;
    parentDiv.querySelector("IMG").style.transform = "rotate(180deg)";
    // ouvre le bon élément
  }
};

/*
const closeOnClique = () => {
  window.addEventListener("click", function (event) {
    const form = document.querySelector("form");
    if (!form.contains(event.target)) {
      checkOpenFilter();
    }
  });
};
closeOnClique();
*/

document.querySelectorAll(".filterContainer button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let targetEl = event.target;
    if (targetEl.tagName === "BUTTON") {
      const inputEl = targetEl.querySelector("input");
      inputEl.placeholder =
        "Rechercher un " + inputEl.placeholder.toLowerCase();
      targetEl = targetEl.nextElementSibling;
    } else if (targetEl.tagName === "INPUT") {
      targetEl.placeholder =
        "Rechercher un " + targetEl.placeholder.toLowerCase();
      targetEl = targetEl.parentElement.nextElementSibling;
    } else if (targetEl.tagName === "IMG") {
      targetEl.parentElement.querySelector("input").placeholder =
        "Rechercher un " +
        targetEl.parentElement.querySelector("input").placeholder.toLowerCase();
      targetEl = targetEl.parentElement.nextElementSibling;
    }

    if (targetEl.style.display === "block") {
      let targetElPlaceholder =
        targetEl.parentNode.querySelector("input").placeholder;
      let arrayPlaceholder = targetElPlaceholder.match(/\b\w+\b$/);
      let lastWord = arrayPlaceholder[0];
      targetEl.parentNode.querySelector("input").placeholder = lastWord;
      targetEl.style.display = "none";
    } else {
      const ulElements = document.querySelectorAll("ul");
      ulElements.forEach((ul) => {
        if (ul.style.display === "block") {
          ul.style.display = "none";
          console.log(ul);
        }
      });
      targetEl.style.display = "block";
    }
  });
});

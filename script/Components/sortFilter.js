class IngredientFilter {
  static supports(field) {
    return field === "ingredient";
  }
  static order(elListe, value) {
    let result = [];
    elListe.forEach((ingredient) => {
      if (ingredient.toLowerCase().startsWith(value.toLowerCase())) {
        result.push(ingredient);
      }
    });
    return result;
  }
}

class AppareilsFilter {
  static supports(field) {
    return field === "appareil";
  }
  static order(elListe, value) {
    let result = [];
    elListe.forEach((appareil) => {
      if (appareil.toLowerCase().startsWith(value.toLowerCase())) {
        result.push(appareil);
      }
    });
    return result;
  }
}

class UstensilesFilter {
  static supports(field) {
    return field === "ustensile";
  }
  static order(elListe, value) {
    let result = [];
    elListe.forEach((ustensile) => {
      if (ustensile.toLowerCase().startsWith(value.toLowerCase())) {
        result.push(ustensile);
      }
    });
    return result;
  }
}
const filtersChoice = [IngredientFilter, AppareilsFilter, UstensilesFilter];

sortLittleFilter = (elListe, value, field) => {
  for (const filter of filtersChoice)
    if (filter.supports(field)) {
      elListe = filter.order(elListe, value);
    }
  return elListe;
};

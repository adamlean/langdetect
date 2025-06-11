(async function () {
  try {
    const res = await fetch("https://api.country.is/");
    const data = await res.json();
    const country = data.country.toLowerCase();

    // Список стран, где карточка показывается
    const visibleCountries = ["us", "gb", "de", "fr", "ca", "es", "it"];

    if (!visibleCountries.includes(country)) {
      const element = document.getElementById("only-west");
      if (element) element.style.display = "none";
    }
  } catch (e) {
    // если не удалось определить страну — по умолчанию скрываем
    const element = document.getElementById("only-west");
    if (element) element.style.display = "none";
  }
})();
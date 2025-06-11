"use strict";

(function () {
  var supportedLangs = ['en', 'ru', 'fr']; // Сначала проверяем, сохранял ли пользователь язык вручную

  var savedLang = localStorage.getItem('lang'); // Берем язык из браузера, например "ru-RU"

  var browserLang = navigator.language.split('-')[0]; // "ru"
  // Определяем язык: приоритет сохранённый → браузерный → en

  var lang = supportedLangs.includes(savedLang) ? savedLang : supportedLangs.includes(browserLang) ? browserLang : 'en'; // Перенаправляем на нужный язык

  window.location.replace("/".concat(lang, "/"));
})();
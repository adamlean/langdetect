(function() {
  const supportedLangs = ['en', 'ru', 'fr'];

  // Сначала проверяем, сохранял ли пользователь язык вручную
  const savedLang = localStorage.getItem('lang');

  // Берем язык из браузера, например "ru-RU"
  const browserLang = navigator.language.split('-')[0]; // "ru"

  // Определяем язык: приоритет сохранённый → браузерный → en
  const lang = supportedLangs.includes(savedLang)
    ? savedLang
    : supportedLangs.includes(browserLang)
      ? browserLang
      : 'en';

  // Перенаправляем на нужный язык
  window.location.replace(`/${lang}/`);
})();
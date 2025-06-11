"use strict";

(function _callee() {
  var res, data, country, visibleCountries, element, _element;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.country.is/"));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;
          country = data.country.toLowerCase(); // Список стран, где карточка показывается

          visibleCountries = ["us", "gb", "de", "fr", "ca", "es", "it"];

          if (!visibleCountries.includes(country)) {
            element = document.getElementById("only-west");
            if (element) element.style.display = "none";
          }

          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          // если не удалось определить страну — по умолчанию скрываем
          _element = document.getElementById("only-west");
          if (_element) _element.style.display = "none";

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
})();
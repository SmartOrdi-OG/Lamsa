// Nearby furniture stores — Gulf + Europe. No paid APIs: just Google Maps
// search links built from a static store list (data/furniture-stores.json).
(function () {
  var DATA_URL = 'data/furniture-stores.json';
  var dataPromise = null;

  function loadStoreData() {
    if (!dataPromise) {
      dataPromise = fetch(DATA_URL)
        .then(function (res) { return res.json(); })
        .catch(function (err) {
          console.error('[nearby-stores] failed to load store data:', err);
          return {};
        });
    }
    return dataPromise;
  }

  var CURRENCY_TO_COUNTRY = {
    'ر.س': 'SA', 'د.إ': 'AE', 'د.ك': 'KW', 'ر.ق': 'QA', 'ر.ع': 'OM', 'د.ب': 'BH', '£': 'GB'
  };
  var LANG_TO_EU_COUNTRY = { de: 'DE', fr: 'FR', es: 'ES', it: 'IT' };

  // Lamsa doesn't collect a separate location field, so reuse the currency the
  // user already picked in the designer as a proxy for their country/region.
  function countryFromCurrency(currencySymbol, lang) {
    if (CURRENCY_TO_COUNTRY[currencySymbol]) return CURRENCY_TO_COUNTRY[currencySymbol];
    if (currencySymbol === '€') return LANG_TO_EU_COUNTRY[lang] || 'EU';
    return 'EU';
  }

  // Lamsa's pages have no currency selector, only the in-app language picker
  // (flag dropdown) — the device/browser locale a phone reports often doesn't
  // match the language the person actually chose in the app (e.g. an Arabic
  // speaker whose phone's OS region is set to a European country), which was
  // showing German/EU stores to Arabic-language users. So the device locale
  // is only the first guess; when it doesn't resolve to a known country, fall
  // back to the app's own selected language instead of a generic EU default.
  var LANG_FALLBACK_COUNTRY = { ar: 'SA', en: 'GB', de: 'DE', es: 'ES', fr: 'FR', it: 'IT' };

  function countryFromLocale(appLang) {
    var locale = navigator.language || navigator.userLanguage || 'en-US';
    var region = (locale.split('-')[1] || '').toUpperCase();
    var known = ['AE', 'SA', 'KW', 'QA', 'OM', 'BH', 'GB', 'DE', 'FR', 'ES', 'IT'];
    if (known.indexOf(region) !== -1) return region;
    return LANG_FALLBACK_COUNTRY[appLang] || 'EU';
  }

  function mapsSearchUrl(storeName, place) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(storeName + ' ' + place);
  }

  // Renders the "Shop similar pieces" panel into containerId.
  // options: { countryCode, lang }
  // A `furnitureType` option is intentionally not used yet — once Claude
  // Vision furniture detection is wired back up, this is where it would
  // narrow/reorder the store list instead of always showing the general
  // per-country list.
  function render(containerId, options) {
    options = options || {};
    var container = document.getElementById(containerId);
    if (!container) return;

    loadStoreData().then(function (data) {
      var countryCode = options.countryCode || 'EU';
      var entry = data[countryCode] || data.EU;
      if (!entry || !entry.stores || entry.stores.length === 0) {
        container.innerHTML = '';
        return;
      }

      var isAr = options.lang === 'ar';
      var sofaIcon = window.icon ? window.icon('sofa') : '';
      var pinIcon = window.icon ? window.icon('pin') : '';
      var title = sofaIcon + ' ' + (isAr ? 'تسوق قطع مشابهة' : 'Shop similar pieces');
      var sub = isAr ? 'محلات أثاث في ' + (entry.nameAr || entry.name) : 'Furniture stores in ' + entry.name;
      var btnLabel = isAr ? 'عرض على الخريطة' : 'View on map';

      var itemsHtml = entry.stores.map(function (storeName) {
        var url = mapsSearchUrl(storeName, entry.name);
        return '<div class="nearby-store-item">' +
          '<span class="nearby-store-name">' + storeName + '</span>' +
          '<a class="nearby-store-btn" href="' + url + '" target="_blank" rel="noopener noreferrer">' + pinIcon + ' ' + btnLabel + '</a>' +
          '</div>';
      }).join('');

      container.innerHTML =
        '<div class="nearby-stores">' +
          '<div class="nearby-stores-title">' + title + '</div>' +
          '<div class="nearby-stores-sub">' + sub + '</div>' +
          '<div class="nearby-stores-list">' + itemsHtml + '</div>' +
        '</div>';
    });
  }

  window.NearbyStores = {
    render: render,
    countryFromCurrency: countryFromCurrency,
    countryFromLocale: countryFromLocale
  };
})();

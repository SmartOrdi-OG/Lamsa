// Shared 8-language switcher for the standalone info pages (Settings,
// About, FAQ, Terms of Use, Privacy Policy) — the main app
// (lamsa-bilingual.html) has its own richer flag-menu version of this same
// idea; this is the lightweight equivalent so these simpler pages match
// the site's actual "8 languages" claim instead of only offering AR/EN.
(function (global) {
  var LANGS = [
    { code: 'ar', flag: '🇸🇦', name: 'العربية', dir: 'rtl' },
    { code: 'en', flag: '🇬🇧', name: 'English', dir: 'ltr' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch', dir: 'ltr' },
    { code: 'es', flag: '🇪🇸', name: 'Español', dir: 'ltr' },
    { code: 'tr', flag: '🇹🇷', name: 'Türkçe', dir: 'ltr' },
    { code: 'fr', flag: '🇫🇷', name: 'Français', dir: 'ltr' },
    { code: 'it', flag: '🇮🇹', name: 'Italiano', dir: 'ltr' },
    { code: 'ru', flag: '🇷🇺', name: 'Русский', dir: 'ltr' }
  ];

  function configFor(lang) {
    var found = LANGS.filter(function (l) { return l.code === lang; })[0];
    return found || LANGS[1];
  }

  global.Lang8 = {
    LANGS: LANGS,
    configFor: configFor,

    // Fills a <select> with all 8 options and wires it to call `onChange`
    // with the picked language code.
    buildSelect: function (selectEl, onChange) {
      if (!selectEl) return;
      selectEl.innerHTML = LANGS.map(function (l) {
        return '<option value="' + l.code + '">' + l.flag + ' ' + l.name + '</option>';
      }).join('');
      selectEl.addEventListener('change', function () { onChange(selectEl.value); });
    },

    // Applies `lang` to every [data-en][data-ar] element on the page:
    // Arabic uses its own data-ar attribute (as elsewhere on the site),
    // English uses data-en as-is, and the other 6 languages look up the
    // data-en value in the page's own translation table `T` (falling back
    // to the English text for any string not yet translated there).
    apply: function (lang, T) {
      var cfg = configFor(lang);
      document.documentElement.setAttribute('lang', cfg.code);
      document.documentElement.setAttribute('dir', cfg.dir);
      try { localStorage.setItem('lamsa_lang', cfg.code); } catch (e) {}

      document.querySelectorAll('[data-en][data-ar]').forEach(function (el) {
        var enVal = el.getAttribute('data-en');
        var text;
        if (cfg.code === 'ar') text = el.getAttribute('data-ar');
        else if (cfg.code === 'en') text = enVal;
        else text = (T && T[cfg.code] && T[cfg.code][enVal]) || enVal;
        el.innerHTML = text;
      });

      document.querySelectorAll('select[data-lang-select]').forEach(function (sel) { sel.value = cfg.code; });
      return cfg;
    }
  };
})(window);

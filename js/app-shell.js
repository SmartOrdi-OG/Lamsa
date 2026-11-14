// Shared bottom tab bar used across every logged-in page (Home, Explore,
// History, Settings). Reads the language the user already picked — stored
// under 'lamsa_lang' by lamsa-bilingual.html/design-3d.html — rather than
// each page tracking its own; rearrange.html/inspirations.html are
// English-only pages today, so this just renders English labels there,
// same as the rest of their content.
(function (global) {
  var TABS = [
    { id: 'home', href: 'lamsa-bilingual.html', icon: 'home', ar: 'الرئيسية', en: 'Home' },
    { id: 'explore', href: 'inspirations.html', icon: 'compass', ar: 'استكشف', en: 'Explore' },
    { id: 'history', href: 'history.html', icon: 'clock', ar: 'السجل', en: 'History' },
    { id: 'settings', href: 'settings.html', icon: 'gear', ar: 'الإعدادات', en: 'Settings' }
  ];

  function shellLang() {
    try { return localStorage.getItem('lamsa_lang') || 'en'; } catch (e) { return 'en'; }
  }

  var STYLE_ID = 'app-shell-tabbar-style';
  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent =
      '.app-tabbar { position: fixed; left: 0; right: 0; bottom: 0; z-index: 500;' +
      ' display: flex; background: rgba(255,255,255,0.92); backdrop-filter: blur(20px);' +
      ' border-top: 1px solid var(--border, #dfe2e6); padding: 6px 4px calc(6px + env(safe-area-inset-bottom)); }' +
      '.app-tabbar a { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px;' +
      ' padding: 6px 2px; text-decoration: none; color: var(--gray, #767d86); font-size: 10.5px; font-weight: 700;' +
      ' font-family: "Tajawal", sans-serif; }' +
      '.app-tabbar a .icon-svg { width: 21px; height: 21px; }' +
      '.app-tabbar a.active { color: var(--gold-deep, var(--gold, #6b7480)); }' +
      ' body.has-app-tabbar { padding-bottom: 64px; }';
    document.head.appendChild(style);
  }

  // Appends the bar once (idempotent) and pads the body so it never covers
  // page content. activeId matches one of TABS[].id.
  global.AppShell = global.AppShell || {};
  global.AppShell.renderTabBar = function (activeId) {
    ensureStyle();
    // Rebuilt (not skipped) on repeat calls so a language switch after
    // mount re-renders the labels — cheap since it's 4 tiny <a> tags.
    var existing = document.getElementById('appTabBar');
    var wasHidden = existing && existing.style.display === 'none';
    if (existing) existing.remove();

    var isAr = shellLang() === 'ar';
    // A plain div, not a <nav> — every page that mounts this already has
    // its own `nav { position:fixed; top:0; backdrop-filter:blur(20px); ...}`
    // tag-selector rule for its header bar, which would otherwise apply
    // here too (tag selectors still match regardless of class) and stretch
    // this element from top:0 to my bottom:0, blurring out the whole page.
    var bar = document.createElement('div');
    bar.id = 'appTabBar';
    bar.setAttribute('role', 'navigation');
    bar.className = 'app-tabbar';
    if (wasHidden) bar.style.display = 'none';
    bar.innerHTML = TABS.map(function (t) {
      var label = isAr ? t.ar : t.en;
      var iconMarkup = (global.icon ? global.icon(t.icon) : '');
      return '<a href="' + t.href + '" class="' + (t.id === activeId ? 'active' : '') + '">' + iconMarkup + '<span>' + label + '</span></a>';
    }).join('');
    document.body.appendChild(bar);
    if (!wasHidden) document.body.classList.add('has-app-tabbar');
  };
})(window);

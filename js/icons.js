// Shared line-style SVG icon set used to replace emoji glyphs across the app.
// Every icon is a self-contained <svg> string sized via CSS (currentColor +
// em-based width/height), so it drops into text flow like an emoji would.
// Country/language flag emoji are intentionally NOT covered here — those stay
// as emoji since accurate flag artwork is out of scope.
(function (global) {
  function svg(inner, viewBox) {
    return '<svg class="icon-svg" viewBox="' + (viewBox || '0 0 24 24') + '" fill="none" ' +
      'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ' +
      'xmlns="http://www.w3.org/2000/svg">' + inner + '</svg>';
  }

  var ICONS = {
    sparkle: svg('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill="currentColor" stroke="none"/>'),
    sparkles: svg('<path d="M12 3l1.4 4 4 1.4-4 1.4L12 14l-1.4-4.2-4-1.4 4-1.4L12 3z" fill="currentColor" stroke="none"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" fill="currentColor" stroke="none"/>'),
    robot: svg('<rect x="5" y="9" width="14" height="10" rx="2.5"/><path d="M12 9V5"/><circle cx="12" cy="3.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.2" fill="currentColor" stroke="none"/><path d="M2 13h3M19 13h3"/>'),
    globe: svg('<circle cx="12" cy="12" r="8.2"/><path d="M4 12h16M12 3.8c2.6 2.4 2.6 14 0 16.4M12 3.8c-2.6 2.4-2.6 14 0 16.4" /><path d="M5.5 7h13M5.5 17h13"/>'),
    sofa: svg('<path d="M5 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><rect x="3.5" y="12" width="17" height="6" rx="1.6"/><path d="M4 18v2M20 18v2"/>'),
    money: svg('<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6.5 9v.01M17.5 15v.01"/>'),
    camera: svg('<path d="M4 8.5A1.5 1.5 0 0 1 5.5 7H8l1-2h6l1 2h2.5A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9z"/><circle cx="12" cy="13" r="3.4"/>'),
    ruler: svg('<rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(0 12 12)"/><path d="M7 8v3M11 8v2M15 8v3M19 8v2"/>'),
    palette: svg('<path d="M12 3.5c-4.9 0-8.5 3.7-8.5 8.2 0 3.8 2.8 5.8 5.2 5.8.9 0 1.1-.5.6-1.2-.6-.9.1-1.6 1.1-1.6h2c3 0 6.1-2 6.1-6C18.5 5.8 15.6 3.5 12 3.5z"/><circle cx="8.3" cy="10.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="12" cy="8" r="1.1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="10.3" r="1.1" fill="currentColor" stroke="none"/>'),
    chair: svg('<path d="M6 4v9M18 4v16M6 13h9.5c1.4 0 2.5 1.1 2.5 2.5V20"/><path d="M4 20h4M4 4h4"/>'),
    refresh: svg('<path d="M4 12a8 8 0 0 1 13.8-5.6L20 8.5"/><path d="M20 4v4.5h-4.5"/><path d="M20 12a8 8 0 0 1-13.8 5.6L4 15.5"/><path d="M4 20v-4.5h4.5"/>'),
    swap: svg('<path d="M7 8h11l-3-3M17 16H6l3 3"/>'),
    windowIcon: svg('<rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M12 4v16M4 12h16"/>'),
    door: svg('<rect x="6" y="3" width="12" height="18" rx="1"/><circle cx="14.5" cy="12" r="1" fill="currentColor" stroke="none"/>'),
    trash: svg('<path d="M4 7h16"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M6.5 7l1 12.5a2 2 0 0 0 2 1.9h5a2 2 0 0 0 2-1.9L17.5 7"/><path d="M10 11v6M14 11v6"/>'),
    gear: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.4-2-3.4-2.3.9a7.7 7.7 0 0 0-2.6-1.5L14 2h-4l-.5 2.4a7.7 7.7 0 0 0-2.6 1.5l-2.3-.9-2 3.4 2 1.4a7.6 7.6 0 0 0 0 3l-2 1.4 2 3.4 2.3-.9c.8.7 1.6 1.2 2.6 1.5L10 22h4l.5-2.6a7.7 7.7 0 0 0 2.6-1.5l2.3.9 2-3.4-2-1.4z"/>'),
    cube: svg('<path d="M21 7.5 12 3 3 7.5l9 4.5 9-4.5z"/><path d="M3 7.5v9l9 4.5 9-4.5v-9"/><path d="M12 12v9"/>'),
    home: svg('<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/><path d="M10 20v-5h4v5"/>'),
    pin: svg('<path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/>'),
    lock: svg('<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"/>'),
    envelope: svg('<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 6.5l8 6.5 8-6.5"/>'),
    user: svg('<circle cx="12" cy="8.3" r="3.4"/><path d="M5 20c.7-3.8 3.7-6 7-6s6.3 2.2 7 6"/>'),
    eye: svg('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.7"/>'),
    eyeOff: svg('<path d="M3.5 3.5l17 17"/><path d="M9.9 5.6C10.6 5.5 11.3 5.5 12 5.5c6 0 9.5 6.5 9.5 6.5a15.6 15.6 0 0 1-3.2 4M6.5 7.3A15.9 15.9 0 0 0 2.5 12S6 18.5 12 18.5c1.2 0 2.3-.2 3.3-.6"/><path d="M9.9 10a2.7 2.7 0 0 0 3.9 3.7"/>'),
    check: svg('<path d="M4.5 12.5l5 5 10-11"/>'),
    close: svg('<path d="M5 5l14 14M19 5L5 19"/>'),
    wave: svg('<path d="M8.5 12.5c-1-2-.6-4.3.6-5.6 1.2 1 1.6 2.8 1.2 4.3M11.4 11c-.6-2.2 0-4.6 1.6-5.8 1.2 1.3 1.4 3.4.6 5.2"/><path d="M6.5 13.5c-1.8 1.6-2.4 4.4-.6 7 2 2.9 6 3.7 9 2 2.6-1.5 4-4 4.3-6.4.2-1.7-.3-3-1.4-3.7-1.1-.7-2.3-.4-3 .5"/>'),
    download: svg('<path d="M12 4v11.5M8 12l4 4 4-4"/><path d="M4.5 18v1.5A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5V18"/>'),
    share: svg('<circle cx="18" cy="6" r="2.3"/><circle cx="6" cy="12" r="2.3"/><circle cx="18" cy="18" r="2.3"/><path d="M8.1 10.8l7.8-3.6M8.1 13.2l7.8 3.6"/>'),
    bed: svg('<path d="M3.5 19v-8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8"/><path d="M3.5 16h17"/><path d="M6.5 12V9a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 11.5 9v3"/><path d="M3.5 19v2M20.5 19v2"/>'),
    cabinet: svg('<rect x="4.5" y="3.5" width="15" height="17" rx="1.5"/><path d="M12 3.5v17"/><circle cx="9.7" cy="10" r="0.6" fill="currentColor" stroke="none"/><circle cx="14.3" cy="10" r="0.6" fill="currentColor" stroke="none"/>'),
    books: svg('<path d="M4 4.5h4v15H4z"/><path d="M9.5 4.5h4v15h-4z"/><path d="M15.3 5.1l3.7-.7 2.6 14.8-3.7.7z"/>'),
    mirror: svg('<ellipse cx="12" cy="10" rx="6" ry="7.5"/><path d="M9.5 21h5M12 17.5V21"/>'),
    teddy: svg('<circle cx="12" cy="13" r="6"/><circle cx="7" cy="6.3" r="2.3"/><circle cx="17" cy="6.3" r="2.3"/><circle cx="9.6" cy="12" r="0.9" fill="currentColor" stroke="none"/><circle cx="14.4" cy="12" r="0.9" fill="currentColor" stroke="none"/><path d="M10 15.3c.7.6 1.3.6 2 0"/>'),
    bulb: svg('<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.4 10.9c.6.4.9 1 .9 1.7V16h5v-.4c0-.7.3-1.3.9-1.7A6 6 0 0 0 12 3z"/>'),
    table: svg('<path d="M3.5 7h17M5 7v13M19 7v13"/>'),
    tv: svg('<rect x="3.5" y="5" width="17" height="11" rx="1.5"/><path d="M9 20h6M12 16v4"/>'),
    sink: svg('<path d="M4 10h16M6 10V6.5A1.5 1.5 0 0 1 7.5 5h2M12 7v3"/><path d="M5 10v3a7 7 0 0 0 14 0v-3"/>'),
    bathtub: svg('<path d="M3.5 12h17v2a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-2z"/><path d="M5.5 12V8a2 2 0 0 1 2-2c1.2 0 2 .8 2 2"/><path d="M4 18v2M20 18v2"/>'),
    shower: svg('<path d="M7 4a4 4 0 0 1 8 0"/><path d="M5 8h14"/><path d="M9 12v.01M12 12v.01M15 12v.01M9 16v.01M12 16v.01M15 16v.01M9 20v.01M12 20v.01M15 20v.01"/>'),
    toilet: svg('<path d="M6 10h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5v-2z"/><path d="M6.5 10V5a1.5 1.5 0 0 1 1.5-1.5h6A1.5 1.5 0 0 1 15.5 5v2"/><path d="M8 17l-1 4h8l-1-4"/>'),
    switchPlate: svg('<rect x="6" y="3" width="12" height="18" rx="1.5"/><circle cx="12" cy="9" r="1.4" fill="currentColor" stroke="none"/><path d="M12 13v4"/>'),
    arrowLeft: svg('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
    arrowRight: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    arrowUpRight: svg('<path d="M7 17L17 7M9 7h8v8"/>'),
    leaf: svg('<path d="M5 19c8-1 13-6 14-14-8 1-13 6-14 14z"/><path d="M6 18c3-3 6-6 12-12"/>'),
    castle: svg('<path d="M4 21V10l2-2V6h2v2l2-2V4h4v2l2-2v2h2v2l2 2v11z"/><path d="M4 21h16M9 21v-5h6v5"/>'),
    mosque: svg('<path d="M12 3c-1.6 1.4-1.6 3.6 0 5 1.6-1.4 1.6-3.6 0-5z"/><path d="M4 21V13a8 8 0 0 1 16 0v8"/><path d="M4 21h16M10 21v-6h4v6"/><path d="M4 13h3M17 13h3"/>'),
    amphora: svg('<path d="M9 3h6M10 3v3.5c0 1-3 2-3 5.5a5 5 0 0 0 10 0c0-3.5-3-4.5-3-5.5V3"/><path d="M7 21h10"/><path d="M8.5 21c-.6-2 .5-4 3.5-4s4.1 2 3.5 4"/>'),
    person1: svg('<circle cx="12" cy="7" r="2.6"/><path d="M6.5 20c.8-4.3 3-6 5.5-6s4.7 1.7 5.5 6"/>'),
    person2: svg('<circle cx="8" cy="8" r="2.3"/><circle cx="16" cy="8" r="2.3"/><path d="M3.5 20c.6-3.6 2.3-5.3 4.5-5.3S12 16.4 12.5 20"/><path d="M11.5 20c.6-3.6 2.3-5.3 4.5-5.3s3.9 1.7 4.5 5.3"/>'),
    swatch: svg('<circle cx="12" cy="12" r="8"/>'),
    swatchNeutral: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#5c6570" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchWarm: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#8b5e34" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchCool: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#7ec8e3" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchPink: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#e8b4c0" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchGreen: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#4a9c73" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchBlackGold: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#161513" stroke="#a3abb5" stroke-width="1.4"/></svg>',
    swatchWhite: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#ffffff" stroke="#c3c8ce" stroke-width="1.4"/></svg>',
    swatchNavy: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#2e4057" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchTerracotta: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#c57a58" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchSage: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#afc3a6" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchCharcoal: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#4a4d52" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchMustard: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#c9a23c" stroke="#dfe2e6" stroke-width="1.2"/></svg>',
    swatchPurple: '<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" fill="#a591b5" stroke="#dfe2e6" stroke-width="1.2"/></svg>'
  };

  global.ICONS = ICONS;
  // icon(name, extraClass) -> markup string; falls back to a blank sparkle if unknown
  global.icon = function (name, extraClass) {
    var markup = ICONS[name] || ICONS.sparkle;
    if (extraClass) markup = markup.replace('class="icon-svg"', 'class="icon-svg ' + extraClass + '"');
    return markup;
  };
})(window);

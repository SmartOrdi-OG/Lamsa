// Detects "running inside the installed Android TWA (Google Play app)".
//
// The OS sets document.referrer to android-app://<package> only on the
// FIRST page the TWA opens (lamsa-auth.html). Every in-app navigation after
// that (auth -> designer -> rearrange) replaces the referrer with the
// previous page's URL, so checking the referrer alone on later pages says
// "not the app" and would show the Stripe purchase flow inside the Play
// app, which Google Play forbids for digital goods.
//
// So the first page remembers it in sessionStorage, which survives
// navigations within the same tab but, unlike localStorage, is not shared
// with the user's normal Chrome tabs on the same phone (Brifo hit exactly
// that leak: the flag "stuck" to regular browser tabs).
(function () {
  var KEY = 'lamsa_android_twa';
  var isTwa = document.referrer.indexOf('android-app://') === 0;
  try {
    if (isTwa) sessionStorage.setItem(KEY, '1');
    else isTwa = sessionStorage.getItem(KEY) === '1';
  } catch (e) {}
  window.isAndroidTWA = isTwa;
})();

// Opens a URL in Chrome itself, outside the TWA. A plain link or
// window.location to lamsa-ten.vercel.app would be caught by Android App
// Links and land straight back in this app; an intent addressed to Chrome by
// package name skips that resolution (same approach as Brifo PR #127/#128).
// Intent URLs drop the target's #fragment (Stripe Checkout needs it), so a
// URL with a fragment is routed through /checkout-redirect.html?u=<full url>,
// which forwards to it from inside Chrome.
// Returns false outside the TWA so the caller can navigate normally.
window.openOutsideAndroidTWA = function (url) {
  if (!window.isAndroidTWA) return false;
  try {
    if (url.indexOf('#') !== -1) {
      url = window.location.origin + '/checkout-redirect.html?u=' + encodeURIComponent(url);
    }
    var u = new URL(url);
    window.location.href = 'intent://' + u.host + u.pathname + u.search +
      '#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=' +
      encodeURIComponent(url) + ';end';
    return true;
  } catch (e) {
    return false;
  }
};

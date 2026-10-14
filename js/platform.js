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

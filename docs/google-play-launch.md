# نشر Lamsa على Google Play — خطة وسجل التقدّم

الملف ده بيوثّق خطوات نشر لمسة (PWA) على Google Play، ومبني على التجربة الكاملة اللي اتعملت قبل كده مع Brifo (`smartordi-og/brifo` → `docs/google-play-launch.md`). أي حد يكمل بعد كده (حتى لو من جلسة Claude Code تانية) يحدّث الملف ده بالحالة الفعلية.

**آخر تحديث**: 2026-10-14 (versionCode 2 اترفع بنجاح على Internal testing)

## الطريقة: PWA → TWA عبر PWABuilder

لمسة صفحات HTML + JS عادية على Vercel، مش تطبيق native. هننشرها زي Brifo بالظبط: **Trusted Web Activity (TWA)** — غلاف أندرويد بيفتح الموقع الحقيقي جوه Chrome من غير شريط العنوان. الأداة: **[PWABuilder.com](https://www.pwabuilder.com/)**.

## قيم أساسية

| العنصر | القيمة |
|---|---|
| Domain | `lamsa-ten.vercel.app` |
| Package name | `com.lamsa` (هو اللي موجود في `.well-known/assetlinks.json` حاليًا) |
| Start URL | `/` (Vercel بيحوّله لـ `lamsa-auth.html`) |
| Privacy policy | `https://lamsa-ten.vercel.app/privacy-policy.html` |
| حذف الحساب (web URL) | `https://lamsa-ten.vercel.app/privacy-policy.html` (القسم 6) |
| App name | `Lamsa` |
| الفئة المقترحة | House & Home (أو Art & Design) |
| نوع النشر | Free |

> ⚠️ **حساس — بره الريبو**: ملف الـ signing keystore اللي PWABuilder هيولّده + الباسورد بتاعه. لو ضاع مش هتقدر تحدّث التطبيق تاني. خد نسخة احتياطية آمنة فورًا. نفس الكلام لبيانات حساب المراجعين التجريبي.

> ❓ **سؤال مفتوح**: `assetlinks.json` فيه بالفعل 4 fingerprints لـ `com.lamsa` — مش معروف هما جايين منين (محاولة قديمة؟). لو هتبني AAB جديد بمفتاح جديد، لازم تضيف الـ fingerprints الجديدة (شوف خطوة 4 و 8 تحت). لو `com.lamsa` طلع محجوز على Play، غيّر الـ package name في PWABuilder وفي `assetlinks.json` مع بعض.

## سجل الباندلز (مهم — اقراه قبل أي رفع جديد)

اتعمل 3 باندلز من PWABuilder قبل كده، **كل واحد بمفتاح مختلف** (عشان "Create new" كانت مختارة كل مرة):

| الباندل | التاريخ | versionCode | SHA1 بتاع المفتاح | الحالة |
|---|---|---|---|---|
| الأول | 22 أغسطس | 1 | `0C:DA:2A:9E:…:08:31` | ✅ اترفع — **ده الـ Upload key الرسمي** |
| التاني | 23 أغسطس | 1 | `74:34:D5:54:…:70:E6` | ❌ مفتاح غلط — متستخدمهوش |
| التالت | 23 أغسطس | 2 | `51:A4:2A:8E:…:CF:A9` | ❌ اترفض: "signed with the wrong key" |
| الرابع | 14 أكتوبر | 2 | `0C:DA:2A:9E:…` (keystore الأول) | ✅ اترفع على Internal testing |

**القاعدة لأي تحديث جاي**: في PWABuilder → All Settings:
- Package ID: `com.lamsa` (PWABuilder بيقترح `app.vercel.lamsa_ten.twa` — غلط، غيّره)
- Signing key: **Use mine** + `signing.keystore` بتاع **الـ zip الأول** (22 أغسطس، alias `my-key-alias`) — الباسورد في `signing-key-info.txt` بتاعه، محفوظ عند صاحب المشروع بره الريبو
- App version code: آخر رقم اترفع + 1 (آخر رقم حاليًا: **2** → الجاي **3**)

## اللي اتعمل في الكود (جاهز قبل الرفع)

### 1. إخفاء الشراء (Stripe) جوه تطبيق أندرويد — كان فيه bug واتصلح
Google Play بيمنع بيع منتجات رقمية (الكريدت) جوه التطبيق بأي طريقة غير Google Play Billing. الكود كان أصلًا بيخفي زرار "Buy more" لما يكتشف إنه جوه TWA، **بس الاكتشاف كان بيبوظ**: كان بيعتمد على `document.referrer` في كل صفحة، والـ referrer ده بيبقى `android-app://...` في **أول صفحة بس** (`lamsa-auth.html`). أول ما المستخدم يسجّل دخول ويتنقل لـ `lamsa-bilingual.html`، الـ referrer بيتغير وزرار الشراء بيرجع يظهر جوه التطبيق → **رفض من Google**.

**الحل**: `js/platform.js` (جديد، متضاف في كل الصفحات) — بيكتشف الـ TWA في أول صفحة ويحفظها في `sessionStorage` عشان تفضل طول الجلسة. استخدمنا `sessionStorage` مش `localStorage` عشان منكررش غلطة Brifo (PR #105): الـ `localStorage` بيتشارك مع تابات Chrome العادية فالعلامة بتتسرّب للمتصفح.

> **تحديث (14 أكتوبر)**: بناءً على طلب صاحب المشروع، اتعمل زي Brifo (PR #127/#128): زرار "Buy more" وباقات الشراء ظاهرين جوه التطبيق، واختيار باقة بيجيب لينك Stripe Checkout ويفتحه **في Chrome بره التطبيق** عن طريق `window.openOutsideAndroidTWA` في `js/platform.js` (intent موجّه لـ `com.android.chrome` بالاسم، عشان الـ verified App Link ميرجّعش للتطبيق). اكتشاف الـ TWA لسه مستخدم عشان نحدد نفتح بره ولا لأ، وعشان الـ paywall بتاع أول تشغيل ميظهرش جوه التطبيق.
> ⚠️ مخاطرة معروفة ومقبولة: سياسة Google Play بتمنع توجيه المستخدم لدفع خارجي لمنتجات رقمية (إلا في برامج زي External offers في EEA). لو المراجعة رفضت بسبب "Payments policy"، الحل الأسرع إننا نرجّع إخفاء الشراء جوه التطبيق (الكود القديم موجود في تاريخ git قبل الـ PR ده).

### 2. حذف الحساب من جوه التطبيق (إجباري على Google Play)
أي تطبيق فيه تسجيل حساب لازم يسمح بحذف الحساب **من جوه التطبيق** + لينك ويب.
- `DELETE /api/me` (في `api/me.js` — مش ملف جديد عشان حد الـ 12 function في خطة Vercel Hobby): بيمسح الحساب، اسم المستخدم، الرصيد، كود الدعوة، ويقفل الجلسة.
- زرار **"Delete Account" / "حذف الحساب"** جنب "Log Out" في `lamsa-bilingual.html` (مع رسالة تأكيد).
- `privacy-policy.html` قسم 6: اتضاف شرح الحذف الذاتي جنب الإيميل.

## الخطوات المتبقية (يدوي من صاحب المشروع)

1. **تأكد إن الملفات دي شغالة على الموقع اللايف** (افتحها من المتصفح):
   - `https://lamsa-ten.vercel.app/.well-known/assetlinks.json` → لازم يرجع JSON
   - `https://lamsa-ten.vercel.app/manifest.json`
   - `https://lamsa-ten.vercel.app/privacy-policy.html`
2. **PWABuilder**: حط `https://lamsa-ten.vercel.app` → Package for stores → **Android** → Google Play:
   - Package ID: `com.lamsa`
   - App name: `Lamsa` · Launcher name: `Lamsa`
   - Signing key: **Create new** (أو استخدم القديم لو عندك الـ keystore اللي طلّع الـ fingerprints الموجودة)
   - نزّل الـ zip — فيه `.aab` + `signing.keystore` + `signing-key-info.txt` + `assetlinks.json`
3. **احفظ الـ keystore والباسورد** في مكان آمن (Drive خاص / password manager).
4. **ضيف الـ SHA-256 بتاع الـ upload key** (من `assetlinks.json` اللي في الـ zip) لـ `.well-known/assetlinks.json` في الريبو — ابعتهولي وأنا أضيفه.
5. **Play Console → Create app**: Name `Lamsa`، Default language: Arabic أو English، App، Free.
6. **Set up your app** (نفس اللي اتعمل في Brifo):
   - Privacy policy: `https://lamsa-ten.vercel.app/privacy-policy.html`
   - App access / Sign in details: اعمل حساب تجريبي على لمسة (إيميل + باسورد) وفيه كريدت كفاية عشان المراجع يجرب التوليد.
   - Ads: **No**
   - Content rating: استبيان IARC (المتوقع Everyone/3+)
   - Target audience: **18+** (زي Brifo — أبسط وأسلم)
   - Data safety (اقتراح، راجعه):
     - Email address, Name (username), User IDs → Collected (Account management)
     - Photos → Collected + **Shared** مع fal.ai (توليد الصور)
     - Purchase history → Collected (Stripe، من الموقع)
     - Approximate location: الدولة اللي بيختارها وقت التسجيل → Collected
     - Data encrypted in transit: Yes · Users can request deletion: Yes · Delete URL: لينك الـ privacy policy
   - Government apps: No · Financial features: None · Health: None
   - Advertising ID: **No**
   - Category: House & Home
7. **Store listing**: Short description + Full description (عربي/إنجليزي)، أيقونة 512×512 (`assets/icon-512-any.png`)، Feature graphic 1024×500، و 2–8 screenshots للموبايل (يفضّل صور حقيقية من جهاز، مش mockups — ملاحظة Brifo). أقدر أجهّز الـ feature graphic والـ screenshots لو حبيت.
8. **Internal testing**: ارفع الـ `.aab` → أضف testers → Start rollout. بعد كده **مهم جدًا** (درس Brifo #2): روح Play Console → ابحث عن "App signing" (`/keymanagement`) → انسخ SHA-256 بتاع **App signing key certificate** (مش الـ Upload key) → ابعتهولي أضيفه في `assetlinks.json`. من غيره التطبيق هيفتح وفوقه شريط Chrome.
9. **اختبار على جهاز أندرويد حقيقي** — checklist:
   - [ ] بيفتح full-screen من غير شريط Chrome
   - [ ] تسجيل الدخول شغال وبيفضل مسجّل بعد قفل وفتح التطبيق
   - [ ] "Buy more" → اختيار باقة → **صفحة Stripe بتفتح في Chrome** (مش جوه التطبيق) في الـ Designer و Quick Rearrange و Inspirations
   - [ ] بعد الدفع، الرصيد بيزيد لما ترجع للتطبيق (الـ webhook هو اللي بيضيف الكريدت)
   - [ ] رفع الصور من الكاميرا/المعرض شغال والتوليد بيرجع نتيجة
   - [ ] "Delete Account" شغال
10. **Promote** من Internal testing لـ Production → اختار الدول → Submit for review.
    - ⚠️ لو حساب المطوّر **شخصي** واتعمل بعد نوفمبر 2023، Google بتطلب **Closed testing بـ 12 tester لمدة 14 يوم** قبل ما تسمح بـ Production. حسابك عدّى من غير ده في Brifo، فغالبًا مش هيتطلب تاني.

## 🐛 مشاكل اتلاقت أثناء الاختبار الحقيقي

#### 1. Stripe: "This link is incomplete" (14 أكتوبر)
لينك Stripe Checkout فيه جزء بعد `#` لازم يوصل، وصيغة `intent://` (اللي بنفتح بيها Chrome) مبتقدرش تحمل الجزء ده، فكان بيتشال.
**الحل**: `openOutsideAndroidTWA` بقى يفتح في Chrome صفحة `checkout-redirect.html?u=<لينك Stripe كامل>` على دومين لمسة، وهي بتحوّل على اللينك الكامل بالـ `#`. الصفحة بتقبل بس `https://checkout.stripe.com` (مش open redirect).

## مرجع: دروس Brifo اللي اتطبقت هنا
1. `isAndroidTwa` بـ `localStorage` اتسرّب لتابات Chrome → استخدمنا `sessionStorage` من الأول.
2. شريط Chrome ظاهر = ناقص fingerprint الـ **App signing key** من Play في `assetlinks.json` (خطوة 8).
3. لينكات الدومين جوه التطبيق بترجع للتطبيق نفسه (verified App Link) — عشان كده الدفع بيتفتح بـ intent موجّه لـ Chrome بالاسم.

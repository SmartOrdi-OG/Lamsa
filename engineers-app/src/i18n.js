import { useEffect, useState, useCallback } from 'react';

// Same convention as the rest of the site: Arabic is always the literal
// translation (never looked up through T), English is the string itself,
// and the other 6 languages look up the English string in T[lang],
// falling back to the English string if a key is ever missing so a gap
// here degrades gracefully instead of rendering blank or throwing.
//
// Reads the same 'lamsa_lang' localStorage key the static HTML pages
// already write (lamsa-bilingual.html, settings.html, etc.) — this app
// has no language picker of its own, it just follows whatever language
// the user already picked in the main app.

export const AR = {
  'Lamsa Engineers': 'لمسة للمهندسين',
  'Please sign in to continue.': 'الرجاء تسجيل الدخول للمتابعة.',
  'Sign in': 'تسجيل الدخول',
  'Design complete floor plans, preview them in 3D, and export real architectural deliverables.':
    'صمّم مخططات أرضية كاملة، عاينها ثلاثي الأبعاد، وصدّر مستندات هندسية حقيقية.',
  'Your Engineers access has ended. Subscribe again to continue designing full floor plans.':
    'انتهى اشتراكك بقسم المهندسين. جدّد الاشتراك لمتابعة تصميم المخططات الكاملة.',
  'Rectangular rooms, doors & windows, single-floor plans': 'غرف مستطيلة، أبواب ونوافذ، مخططات بطابق واحد',
  'Live 3D preview of your design': 'معاينة ثلاثية الأبعاد حية لتصميمك',
  'Printable floor plan export': 'تصدير مخطط قابل للطباعة',
  "Use Lamsa's existing furniture-styling tools per room": 'استخدم أدوات تنسيق الأثاث الموجودة بلمسة لكل غرفة',
  '/ year': '/ سنوياً',
  '14-day free trial, cancel anytime': 'تجربة مجانية لمدة 14 يوم، إلغاء بأي وقت',
  'Starting…': 'جارٍ البدء…',
  'Start free trial': 'ابدأ التجربة المجانية',
  'Something went wrong, please try again': 'حدث خطأ ما، حاول مرة أخرى',
  'Your Projects': 'مشاريعك',
  'New Project': 'مشروع جديد',
  'No projects yet — create your first one.': 'لا يوجد مشاريع بعد — أنشئ أول مشروع.',
  'Delete': 'حذف',
  'Projects': 'المشاريع',
  'Saved': 'تم الحفظ',
  'Save failed': 'فشل الحفظ',
  'Export plan': 'تصدير المخطط',
  'Saving…': 'جارٍ الحفظ…',
  'Save': 'حفظ',
  'Select': 'تحديد',
  'Add Room': 'إضافة غرفة',
  'Add Door': 'إضافة باب',
  'Add Window': 'إضافة نافذة',
  'Delete Room': 'حذف الغرفة',
  'Delete Opening': 'حذف الفتحة',
  'W': 'عرض',
  'H': 'ارتفاع',
  'Reset camera': 'إعادة ضبط الكاميرا',
  'Untitled Project': 'مشروع بدون اسم',
  'Add Polygon Room': 'إضافة غرفة بشكل حر',
  'Add Stairs': 'إضافة سلالم',
  'Delete Stairs': 'حذف السلالم',
  'Ground Floor': 'الطابق الأرضي',
  'Floor': 'الطابق',
  'Add Floor': 'إضافة طابق',
  'Dollhouse view': 'عرض مقطعي',
  'Export DXF': 'تصدير DXF'
};

export const T = {
  de: {
    'Lamsa Engineers': 'Lamsa Ingenieure',
    'Please sign in to continue.': 'Bitte melde dich an, um fortzufahren.',
    'Sign in': 'Anmelden',
    'Design complete floor plans, preview them in 3D, and export real architectural deliverables.':
      'Entwirf komplette Grundrisse, sieh sie in 3D in der Vorschau und exportiere echte Architekturunterlagen.',
    'Your Engineers access has ended. Subscribe again to continue designing full floor plans.':
      'Dein Zugang zu Engineers ist abgelaufen. Abonniere erneut, um weiter vollständige Grundrisse zu gestalten.',
    'Rectangular rooms, doors & windows, single-floor plans': 'Rechteckige Räume, Türen & Fenster, einstöckige Grundrisse',
    'Live 3D preview of your design': 'Live-3D-Vorschau deines Entwurfs',
    'Printable floor plan export': 'Druckbarer Grundriss-Export',
    "Use Lamsa's existing furniture-styling tools per room": "Nutze Lamsas vorhandene Möbel-Styling-Tools für jeden Raum",
    '/ year': '/ Jahr',
    '14-day free trial, cancel anytime': '14 Tage kostenlos testen, jederzeit kündbar',
    'Starting…': 'Wird gestartet…',
    'Start free trial': 'Kostenlose Testphase starten',
    'Something went wrong, please try again': 'Etwas ist schiefgelaufen, bitte versuche es erneut',
    'Your Projects': 'Deine Projekte',
    'New Project': 'Neues Projekt',
    'No projects yet — create your first one.': 'Noch keine Projekte — erstelle dein erstes.',
    'Delete': 'Löschen',
    'Projects': 'Projekte',
    'Saved': 'Gespeichert',
    'Save failed': 'Speichern fehlgeschlagen',
    'Export plan': 'Plan exportieren',
    'Saving…': 'Wird gespeichert…',
    'Save': 'Speichern',
    'Select': 'Auswählen',
    'Add Room': 'Raum hinzufügen',
    'Add Door': 'Tür hinzufügen',
    'Add Window': 'Fenster hinzufügen',
    'Delete Room': 'Raum löschen',
    'Delete Opening': 'Öffnung löschen',
    'W': 'B',
    'H': 'H',
    'Reset camera': 'Kamera zurücksetzen',
    'Untitled Project': 'Unbenanntes Projekt',
    'Add Polygon Room': 'Freiform-Raum hinzufügen',
    'Add Stairs': 'Treppe hinzufügen',
    'Delete Stairs': 'Treppe löschen',
    'Ground Floor': 'Erdgeschoss',
    'Floor': 'Stockwerk',
    'Add Floor': 'Stockwerk hinzufügen',
    'Dollhouse view': 'Schnittansicht',
    'Export DXF': 'DXF exportieren'
  },
  es: {
    'Lamsa Engineers': 'Lamsa Ingenieros',
    'Please sign in to continue.': 'Inicia sesión para continuar.',
    'Sign in': 'Iniciar sesión',
    'Design complete floor plans, preview them in 3D, and export real architectural deliverables.':
      'Diseña planos completos, previsualízalos en 3D y exporta documentos arquitectónicos reales.',
    'Your Engineers access has ended. Subscribe again to continue designing full floor plans.':
      'Tu acceso a Engineers ha terminado. Suscríbete de nuevo para seguir diseñando planos completos.',
    'Rectangular rooms, doors & windows, single-floor plans': 'Habitaciones rectangulares, puertas y ventanas, planos de una sola planta',
    'Live 3D preview of your design': 'Vista previa 3D en vivo de tu diseño',
    'Printable floor plan export': 'Exportación de plano imprimible',
    "Use Lamsa's existing furniture-styling tools per room": 'Usa las herramientas de estilismo de muebles de Lamsa en cada habitación',
    '/ year': '/ año',
    '14-day free trial, cancel anytime': '14 días de prueba gratis, cancela cuando quieras',
    'Starting…': 'Iniciando…',
    'Start free trial': 'Iniciar prueba gratuita',
    'Something went wrong, please try again': 'Algo salió mal, inténtalo de nuevo',
    'Your Projects': 'Tus Proyectos',
    'New Project': 'Nuevo Proyecto',
    'No projects yet — create your first one.': 'Aún no hay proyectos — crea el primero.',
    'Delete': 'Eliminar',
    'Projects': 'Proyectos',
    'Saved': 'Guardado',
    'Save failed': 'Error al guardar',
    'Export plan': 'Exportar plano',
    'Saving…': 'Guardando…',
    'Save': 'Guardar',
    'Select': 'Seleccionar',
    'Add Room': 'Añadir Habitación',
    'Add Door': 'Añadir Puerta',
    'Add Window': 'Añadir Ventana',
    'Delete Room': 'Eliminar Habitación',
    'Delete Opening': 'Eliminar Apertura',
    'W': 'An',
    'H': 'Al',
    'Reset camera': 'Restablecer cámara',
    'Untitled Project': 'Proyecto sin título',
    'Add Polygon Room': 'Añadir Habitación de Forma Libre',
    'Add Stairs': 'Añadir Escaleras',
    'Delete Stairs': 'Eliminar Escaleras',
    'Ground Floor': 'Planta Baja',
    'Floor': 'Planta',
    'Add Floor': 'Añadir Planta',
    'Dollhouse view': 'Vista seccionada',
    'Export DXF': 'Exportar DXF'
  },
  tr: {
    'Lamsa Engineers': 'Lamsa Muhendisler',
    'Please sign in to continue.': 'Devam etmek icin giris yapin.',
    'Sign in': 'Giris Yap',
    'Design complete floor plans, preview them in 3D, and export real architectural deliverables.':
      'Tam kat planlari tasarlayin, 3D onizleme yapin ve gercek mimari belgeler disa aktarin.',
    'Your Engineers access has ended. Subscribe again to continue designing full floor plans.':
      'Engineers erisiminiz sona erdi. Tam kat planlari tasarlamaya devam etmek icin tekrar abone olun.',
    'Rectangular rooms, doors & windows, single-floor plans': 'Dikdortgen odalar, kapilar ve pencereler, tek katli planlar',
    'Live 3D preview of your design': 'Tasariminizin canli 3D onizlemesi',
    'Printable floor plan export': 'Yazdirilabilir kat plani disa aktarma',
    "Use Lamsa's existing furniture-styling tools per room": "Lamsa'nin mevcut mobilya stilizasyon araclarini her oda icin kullanin",
    '/ year': '/ yil',
    '14-day free trial, cancel anytime': '14 gunluk ucretsiz deneme, istediginiz zaman iptal edin',
    'Starting…': 'Basliyor…',
    'Start free trial': 'Ucretsiz denemeyi baslat',
    'Something went wrong, please try again': 'Bir sorun olustu, lutfen tekrar deneyin',
    'Your Projects': 'Projeleriniz',
    'New Project': 'Yeni Proje',
    'No projects yet — create your first one.': 'Henuz proje yok — ilkini olusturun.',
    'Delete': 'Sil',
    'Projects': 'Projeler',
    'Saved': 'Kaydedildi',
    'Save failed': 'Kaydetme basarisiz',
    'Export plan': 'Plani disa aktar',
    'Saving…': 'Kaydediliyor…',
    'Save': 'Kaydet',
    'Select': 'Sec',
    'Add Room': 'Oda Ekle',
    'Add Door': 'Kapi Ekle',
    'Add Window': 'Pencere Ekle',
    'Delete Room': 'Odayi Sil',
    'Delete Opening': 'Acikligi Sil',
    'W': 'G',
    'H': 'Y',
    'Reset camera': 'Kamerayi sifirla',
    'Untitled Project': 'Isimsiz Proje',
    'Add Polygon Room': 'Serbest Sekilli Oda Ekle',
    'Add Stairs': 'Merdiven Ekle',
    'Delete Stairs': 'Merdiveni Sil',
    'Ground Floor': 'Zemin Kat',
    'Floor': 'Kat',
    'Add Floor': 'Kat Ekle',
    'Dollhouse view': 'Kesit Gorunumu',
    'Export DXF': 'DXF Disa Aktar'
  },
  fr: {
    'Lamsa Engineers': 'Lamsa Ingénieurs',
    'Please sign in to continue.': 'Veuillez vous connecter pour continuer.',
    'Sign in': 'Connexion',
    'Design complete floor plans, preview them in 3D, and export real architectural deliverables.':
      'Concevez des plans complets, prévisualisez-les en 3D et exportez de vrais documents architecturaux.',
    'Your Engineers access has ended. Subscribe again to continue designing full floor plans.':
      'Votre accès à Engineers a expiré. Réabonnez-vous pour continuer à concevoir des plans complets.',
    'Rectangular rooms, doors & windows, single-floor plans': 'Pièces rectangulaires, portes et fenêtres, plans à un seul niveau',
    'Live 3D preview of your design': 'Aperçu 3D en direct de votre conception',
    'Printable floor plan export': 'Export de plan imprimable',
    "Use Lamsa's existing furniture-styling tools per room": "Utilisez les outils de style de meubles existants de Lamsa pour chaque pièce",
    '/ year': '/ an',
    '14-day free trial, cancel anytime': 'Essai gratuit de 14 jours, annulez à tout moment',
    'Starting…': 'Démarrage…',
    'Start free trial': "Démarrer l'essai gratuit",
    'Something went wrong, please try again': 'Un problème est survenu, veuillez réessayer',
    'Your Projects': 'Vos Projets',
    'New Project': 'Nouveau Projet',
    'No projects yet — create your first one.': "Aucun projet pour l'instant — créez le premier.",
    'Delete': 'Supprimer',
    'Projects': 'Projets',
    'Saved': 'Enregistré',
    'Save failed': "Échec de l'enregistrement",
    'Export plan': 'Exporter le plan',
    'Saving…': 'Enregistrement…',
    'Save': 'Enregistrer',
    'Select': 'Sélectionner',
    'Add Room': 'Ajouter une pièce',
    'Add Door': 'Ajouter une porte',
    'Add Window': 'Ajouter une fenêtre',
    'Delete Room': 'Supprimer la pièce',
    'Delete Opening': "Supprimer l'ouverture",
    'W': 'L',
    'H': 'H',
    'Reset camera': 'Réinitialiser la caméra',
    'Untitled Project': 'Projet sans titre',
    'Add Polygon Room': 'Ajouter une pièce de forme libre',
    'Add Stairs': 'Ajouter un escalier',
    'Delete Stairs': "Supprimer l'escalier",
    'Ground Floor': 'Rez-de-chaussée',
    'Floor': 'Étage',
    'Add Floor': 'Ajouter un étage',
    'Dollhouse view': 'Vue en coupe',
    'Export DXF': 'Exporter en DXF'
  },
  it: {
    'Lamsa Engineers': 'Lamsa Ingegneri',
    'Please sign in to continue.': 'Accedi per continuare.',
    'Sign in': 'Accedi',
    'Design complete floor plans, preview them in 3D, and export real architectural deliverables.':
      'Progetta planimetrie complete, visualizzale in anteprima 3D ed esporta veri documenti architettonici.',
    'Your Engineers access has ended. Subscribe again to continue designing full floor plans.':
      'Il tuo accesso a Engineers è scaduto. Abbonati di nuovo per continuare a progettare planimetrie complete.',
    'Rectangular rooms, doors & windows, single-floor plans': 'Stanze rettangolari, porte e finestre, planimetrie a un piano',
    'Live 3D preview of your design': 'Anteprima 3D dal vivo del tuo progetto',
    'Printable floor plan export': 'Esportazione planimetria stampabile',
    "Use Lamsa's existing furniture-styling tools per room": 'Usa gli strumenti di stile mobili di Lamsa per ogni stanza',
    '/ year': '/ anno',
    '14-day free trial, cancel anytime': 'Prova gratuita di 14 giorni, annulla quando vuoi',
    'Starting…': 'Avvio…',
    'Start free trial': 'Avvia la prova gratuita',
    'Something went wrong, please try again': 'Qualcosa è andato storto, riprova',
    'Your Projects': 'I Tuoi Progetti',
    'New Project': 'Nuovo Progetto',
    'No projects yet — create your first one.': 'Nessun progetto ancora — crea il primo.',
    'Delete': 'Elimina',
    'Projects': 'Progetti',
    'Saved': 'Salvato',
    'Save failed': 'Salvataggio non riuscito',
    'Export plan': 'Esporta planimetria',
    'Saving…': 'Salvataggio…',
    'Save': 'Salva',
    'Select': 'Seleziona',
    'Add Room': 'Aggiungi Stanza',
    'Add Door': 'Aggiungi Porta',
    'Add Window': 'Aggiungi Finestra',
    'Delete Room': 'Elimina Stanza',
    'Delete Opening': 'Elimina Apertura',
    'W': 'L',
    'H': 'A',
    'Reset camera': 'Reimposta fotocamera',
    'Untitled Project': 'Progetto senza titolo',
    'Add Polygon Room': 'Aggiungi Stanza a Forma Libera',
    'Add Stairs': 'Aggiungi Scale',
    'Delete Stairs': 'Elimina Scale',
    'Ground Floor': 'Piano Terra',
    'Floor': 'Piano',
    'Add Floor': 'Aggiungi Piano',
    'Dollhouse view': 'Vista in sezione',
    'Export DXF': 'Esporta DXF'
  },
  ru: {
    'Lamsa Engineers': 'Lamsa Inzhenery',
    'Please sign in to continue.': 'Voydite, chtoby prodolzhit.',
    'Sign in': 'Vkhod',
    'Design complete floor plans, preview them in 3D, and export real architectural deliverables.':
      'Proektiruyte polnotsennye plany pomeshcheniy, prosmatrivayte ikh v 3D i eksportiruyte nastoyashchie arkhitekturnye dokumenty.',
    'Your Engineers access has ended. Subscribe again to continue designing full floor plans.':
      'Vash dostup k Engineers zavershilsya. Oformite podpisku snova, chtoby prodolzhit proektirovat polnye plany.',
    'Rectangular rooms, doors & windows, single-floor plans': 'Pryamougolnye komnaty, dveri i okna, odnoetazhnye plany',
    'Live 3D preview of your design': 'Zhivoy 3D-predprosmotr vashego proekta',
    'Printable floor plan export': 'Eksport plana dlya pechati',
    "Use Lamsa's existing furniture-styling tools per room": 'Ispolzuyte sushchestvuyushchie instrumenty stilizatsii mebeli Lamsa dlya kazhdoy komnaty',
    '/ year': '/ god',
    '14-day free trial, cancel anytime': '14-dnevnyy besplatnyy probnyy period, otmena v lyuboy moment',
    'Starting…': 'Zapusk…',
    'Start free trial': 'Nachat besplatnyy probnyy period',
    'Something went wrong, please try again': 'Chto-to poshlo ne tak, poprobuyte snova',
    'Your Projects': 'Vashi Proekty',
    'New Project': 'Novyy Proekt',
    'No projects yet — create your first one.': 'Poka net proektov — sozdayte pervyy.',
    'Delete': 'Udalit',
    'Projects': 'Proekty',
    'Saved': 'Sokhraneno',
    'Save failed': 'Oshibka sokhraneniya',
    'Export plan': 'Eksportirovat plan',
    'Saving…': 'Sokhranenie…',
    'Save': 'Sokhranit',
    'Select': 'Vybrat',
    'Add Room': 'Dobavit Komnatu',
    'Add Door': 'Dobavit Dver',
    'Add Window': 'Dobavit Okno',
    'Delete Room': 'Udalit Komnatu',
    'Delete Opening': 'Udalit Proyom',
    'W': 'Sh',
    'H': 'V',
    'Reset camera': 'Sbrosit kameru',
    'Untitled Project': 'Proekt bez nazvaniya',
    'Add Polygon Room': 'Dobavit Komnatu Svobodnoy Formy',
    'Add Stairs': 'Dobavit Lestnitsu',
    'Delete Stairs': 'Udalit Lestnitsu',
    'Ground Floor': 'Pervyy Etazh',
    'Floor': 'Etazh',
    'Add Floor': 'Dobavit Etazh',
    'Dollhouse view': 'Razrez doma',
    'Export DXF': 'Eksportirovat DXF'
  }
};

function readLang() {
  try {
    return localStorage.getItem('lamsa_lang') || 'en';
  } catch (e) {
    return 'en';
  }
}

// Reads the shared 'lamsa_lang' signal and exposes { lang, t }. No
// language picker lives in this app — it just follows whatever the user
// already chose in the main Lamsa app before landing here.
export function useLang() {
  const [lang, setLang] = useState(readLang);

  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  useEffect(() => {
    function onStorage(e) {
      if (e.key === 'lamsa_lang') setLang(e.newValue || 'en');
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const t = useCallback(
    (en) => {
      if (lang === 'ar') return AR[en] || en;
      if (lang === 'en') return en;
      return (T[lang] && T[lang][en]) || en;
    },
    [lang]
  );

  return { lang, t };
}

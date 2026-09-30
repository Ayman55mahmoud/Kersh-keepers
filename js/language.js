/* ============================================================
   Language System — Arabic (default) / English
   Saves choice in localStorage, applies RTL/LTR
   ============================================================ */

const translations = {
  /* Navigation */
  "nav.home": { ar: "الرئيسية", en: "Home" },
  "nav.menu": { ar: "المنيو", en: "Menu" },
  "nav.offers": { ar: "العروض", en: "Offers" },
  "nav.cart": { ar: "السلة", en: "Cart" },
  "nav.complaints": { ar: "الشكاوى", en: "Complaints" },
  "nav.contact": { ar: "تواصل معنا", en: "Contact" },

  /* Home */
  "home.headline": { ar: "كل اللي نفسك فيه في مكان واحد", en: "Everything you crave in one place" },
  "home.viewMenu": { ar: "شوف المنيو", en: "View Menu" },
  "home.orderNow": { ar: "اطلب الآن", en: "Order Now" },
  "home.popularCategories": { ar: "أشهر الأقسام", en: "Popular Categories" },
  "home.featuredProducts": { ar: "أطباق مميزة", en: "Featured Dishes" },
  "home.offers": { ar: "عروضنا", en: "Our Offers" },
  "home.whyUs": { ar: "ليه كرش كيبرز؟", en: "Why Kersh Keepers?" },
  "home.whyUs1": { ar: "أكل طازة مشوي على الفحم", en: "Fresh charcoal-grilled food" },
  "home.whyUs2": { ar: "أسعار تناسب الجميع", en: "Prices for everyone" },
  "home.whyUs3": { ar: "توصيل سريع لكل المنطقة", en: "Fast delivery across the area" },
  "home.whyUs4": { ar: "جودة و نظافة مضمونة", en: "Guaranteed quality & hygiene" },
  "home.whatsappCTA": { ar: "اطلب عبر واتساب", en: "Order via WhatsApp" },
  "home.contactInfo": { ar: "معلومات التواصل", en: "Contact Information" },

  /* Menu */
  "menu.title": { ar: "المنيو", en: "Menu" },
  "menu.search": { ar: "ابحث عن طبق... (عربي / English)", en: "Search for a dish... (Arabic / English)" },
  "menu.allCategories": { ar: "كل الأقسام", en: "All Categories" },
  "menu.addToCart": { ar: "أضف للسلة", en: "Add to Cart" },
  "menu.chooseSize": { ar: "اختر الحجم", en: "Choose Size" },
  "menu.extras": { ar: "إضافات", en: "Extras" },
  "menu.wouldYouLikeExtras": { ar: "هل تريد إضافات؟", en: "Would you like any extras?" },
  "menu.chooseSauce": { ar: "اختر الصوص", en: "Choose Sauce" },
  "menu.quantity": { ar: "الكمية", en: "Quantity" },
  "menu.noResults": { ar: "لا توجد نتائج", en: "No results found" },
  "menu.itemTotal": { ar: "إجمالي الصنف", en: "Item Total" },
  "menu.confirm": { ar: "تأكيد الإضافة", en: "Confirm Add" },
  "menu.cancel": { ar: "إلغاء", en: "Cancel" },
  "menu.available": { ar: "متاح", en: "Available" },
  "menu.notAvailable": { ar: "غير متاح", en: "Not Available" },
  "menu.from": { ar: "من", en: "from" },
  "menu.egp": { ar: "ج.م", en: "EGP" },

  /* Cart */
  "cart.title": { ar: "سلة المشتريات", en: "Shopping Cart" },
  "cart.empty": { ar: "سلتك فارغة", en: "Your cart is empty" },
  "cart.emptyHint": { ar: "تصفح المنيو وأضف أطباقك المفضلة", en: "Browse the menu and add your favorite dishes" },
  "cart.browseMenu": { ar: "تصفح المنيو", en: "Browse Menu" },
  "cart.subtotal": { ar: "المجموع الفرعي", en: "Subtotal" },
  "cart.addonsTotal": { ar: "الإضافات", en: "Add-ons" },
  "cart.grandTotal": { ar: "الإجمالي الكلي", en: "Grand Total" },
  "cart.checkout": { ar: "إتمام الطلب", en: "Checkout" },
  "cart.removeItem": { ar: "حذف", en: "Remove" },
  "cart.clear": { ar: "تفريغ السلة", en: "Clear Cart" },

  /* Checkout */
  "checkout.title": { ar: "بيانات الطلب", en: "Order Details" },
  "checkout.name": { ar: "الاسم", en: "Name" },
  "checkout.phone": { ar: "رقم الهاتف", en: "Phone Number" },
  "checkout.address": { ar: "العنوان", en: "Address" },
  "checkout.deliveryType": { ar: "طريقة الاستلام", en: "Delivery Type" },
  "checkout.delivery": { ar: "توصيل", en: "Delivery" },
  "checkout.pickup": { ar: "استلام من المطعم", en: "Pickup" },
  "checkout.notes": { ar: "ملاحظات", en: "Notes" },
  "checkout.notesPlaceholder": { ar: "أي ملاحظات إضافية...", en: "Any additional notes..." },
  "checkout.sendWhatsapp": { ar: "إرسال الطلب عبر واتساب", en: "Send Order via WhatsApp" },
  "checkout.nameRequired": { ar: "الاسم مطلوب", en: "Name is required" },
  "checkout.phoneRequired": { ar: "رقم الهاتف مطلوب", en: "Phone is required" },
  "checkout.addressRequired": { ar: "العنوان مطلوب للتوصيل", en: "Address is required for delivery" },

  /* Offers */
  "offers.title": { ar: "العروض", en: "Offers" },
  "offers.noOffers": { ar: "لا توجد عروض حالياً", en: "No current offers" },
  "offers.noOffersHint": { ar: "تابعنا لأحدث العروض والخصومات", en: "Follow us for the latest offers and discounts" },
  "offers.oldPrice": { ar: "السعر القديم", en: "Old Price" },
  "offers.newPrice": { ar: "السعر الجديد", en: "New Price" },

  /* Complaints */
  "complaints.title": { ar: "الشكاوى والمقترحات", en: "Complaints & Feedback" },
  "complaints.name": { ar: "الاسم", en: "Name" },
  "complaints.phone": { ar: "رقم الهاتف", en: "Phone Number" },
  "complaints.orderNum": { ar: "رقم الطلب - اختياري", en: "Order Number - Optional" },
  "complaints.message": { ar: "الشكوى / الملاحظة", en: "Complaint / Feedback" },
  "complaints.send": { ar: "إرسال الشكوى عبر واتساب", en: "Send Complaint via WhatsApp" },
  "complaints.nameRequired": { ar: "الاسم مطلوب", en: "Name is required" },
  "complaints.phoneRequired": { ar: "رقم الهاتف مطلوب", en: "Phone is required" },
  "complaints.messageRequired": { ar: "الشكوى مطلوبة", en: "Complaint is required" },

  /* Contact */
  "contact.title": { ar: "تواصل معنا", en: "Contact Us" },
  "contact.address": { ar: "العنوان", en: "Address" },
  "contact.phone": { ar: "الهاتف", en: "Phone" },
  "contact.whatsapp": { ar: "واتساب", en: "WhatsApp" },
  "contact.mobile": { ar: "موبايل", en: "Mobile" },
  "contact.call": { ar: "اتصال", en: "Call" },
  "contact.whatsappChat": { ar: "محادثة واتساب", en: "WhatsApp Chat" },
  "contact.googleMaps": { ar: "موقع على الخريطة", en: "Google Maps" },
  "contact.hours": { ar: "مفتوح يومياً", en: "Open Daily" },

  /* Cart badge */
  "cart.items": { ar: "منتجات", en: "items" },
  "cart.item": { ar: "منتج", en: "item" },

  /* Footer */
  "footer.rights": { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },

  /* Misc */
  "lang.switch": { ar: "English", en: "العربية" }
};

function getLang() {
  return localStorage.getItem("kersh-lang") || "ar";
}

function setLang(lang) {
  localStorage.setItem("kersh-lang", lang);
  applyLang();
}

function t(key) {
  const entry = translations[key];
  if (!entry) return key;
  const lang = getLang();
  return entry[lang] || entry.ar || key;
}

function applyLang() {
  const lang = getLang();
  const isRTL = lang === "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", isRTL);
  document.body.classList.toggle("ltr", !isRTL);

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });

  const switchBtn = document.getElementById("lang-switch");
  if (switchBtn) {
    switchBtn.textContent = t("lang.switch");
  }

  document.dispatchEvent(new CustomEvent("langChanged", { detail: { lang: lang } }));
}

function toggleLang() {
  const current = getLang();
  setLang(current === "ar" ? "en" : "ar");
}

if (typeof window !== "undefined") {
  window.getLang = getLang;
  window.setLang = setLang;
  window.t = t;
  window.applyLang = applyLang;
  window.toggleLang = toggleLang;
}

/* ============================================================
   App.js — Shared logic: nav, rendering, product modal, search
   ============================================================ */

function getProductById(id) {
  return products.find(function (p) { return p.id === id; });
}

function getProductsByCategory(catId) {
  return products.filter(function (p) { return p.category === catId && p.available; });
}

function getFeaturedProducts() {
  return products.filter(function (p) { return p.featured && p.available; });
}

function getOfferProducts() {
  return products.filter(function (p) { return p.offer && p.available; });
}

function searchProducts(query) {
  if (!query || query.trim() === "") return products.filter(function (p) { return p.available; });
  var q = query.trim().toLowerCase();
  return products.filter(function (p) {
    return (
      p.nameAr.toLowerCase().indexOf(q) !== -1 ||
      p.nameEn.toLowerCase().indexOf(q) !== -1 ||
      (p.descAr && p.descAr.toLowerCase().indexOf(q) !== -1) ||
      (p.descEn && p.descEn.toLowerCase().indexOf(q) !== -1)
    );
  });
}

function productName(p) {
  return getLang() === "ar" ? p.nameAr : p.nameEn;
}

function productDesc(p) {
  if (!p.descAr && !p.descEn) return "";
  return getLang() === "ar" ? (p.descAr || p.descEn || "") : (p.descEn || p.descAr || "");
}

function formatPrice(price) {
  return price + " " + t("menu.egp");
}

function getPriceDisplay(p) {
  if (p.sizes && p.sizes.length > 0) {
    var minPrice = Math.min.apply(null, p.sizes.map(function (s) { return s.price; }));
    return t("menu.from") + " " + minPrice + " " + t("menu.egp");
  }
  if (p.price2) {
    return p.price + " / " + p.price2 + " " + t("menu.egp");
  }
  return (p.price || 0) + " " + t("menu.egp");
}

/* ========== Product Card Rendering ========== */
function renderProductCard(p) {
  var name = productName(p);
  var desc = productDesc(p);
  var priceStr = getPriceDisplay(p);
  var hasSizes = p.sizes && p.sizes.length > 0;

  var card = document.createElement("div");
  card.className = "product-card";
  card.setAttribute("data-product-id", p.id);

  var imgDiv = document.createElement("div");
  imgDiv.className = "product-img-wrap";
  imgDiv.innerHTML =
    '<img src="' + p.image + '" alt="' + name + '" loading="lazy" ' +
    'onerror="this.src=\'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=350&w=350\'" />';

  if (p.offer) {
    var badge = document.createElement("span");
    badge.className = "offer-badge";
    badge.textContent = getLang() === "ar" ? "عرض" : "OFFER";
    imgDiv.appendChild(badge);
  }

  card.appendChild(imgDiv);

  var body = document.createElement("div");
  body.className = "product-body";

  var nameEl = document.createElement("h3");
  nameEl.className = "product-name";
  nameEl.textContent = name;
  body.appendChild(nameEl);

  if (desc) {
    var descEl = document.createElement("p");
    descEl.className = "product-desc";
    descEl.textContent = desc;
    body.appendChild(descEl);
  }

  var priceEl = document.createElement("div");
  priceEl.className = "product-price";
  if (p.offer && p.oldPrice) {
    priceEl.innerHTML = '<span class="offer-old-price">' + p.oldPrice + '</span> <span class="offer-new-price">' + getPriceDisplay(p) + '</span>';
  } else {
    priceEl.textContent = priceStr;
  }
  body.appendChild(priceEl);

  var btn = document.createElement("button");
  btn.className = "btn btn-gold btn-add";
  btn.textContent = t("menu.addToCart");
  btn.addEventListener("click", function () { openProductModal(p.id); });
  body.appendChild(btn);

  card.appendChild(body);
  return card;
}

/* ========== Product Modal (size + addons selection) ========== */
function openProductModal(productId) {
  var p = getProductById(productId);
  if (!p) return;

  var lang = getLang();
  var isAr = lang === "ar";
  var hasSizes = p.sizes && p.sizes.length > 0;
  var hasPrice2 = p.price2;

  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = "";

  var modal = document.createElement("div");
  modal.className = "product-modal";

  /* Header */
  var header = document.createElement("div");
  header.className = "modal-header";
  header.innerHTML =
    '<img src="' + p.image + '" alt="' + productName(p) + '" loading="lazy" ' +
    'onerror="this.src=\'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=350&w=350\'" />' +
    '<div class="modal-title"><h3>' + productName(p) + '</h3>' +
    (productDesc(p) ? '<p>' + productDesc(p) + '</p>' : '') + '</div>' +
    '<button class="modal-close" aria-label="Close">&times;</button>';
  modal.appendChild(header);

  var content = document.createElement("div");
  content.className = "modal-content";

  var selected = {
    size: null,
    sizeName: null,
    addons: [],
    sauce: null,
    qty: 1
  };

  var addonList = null;

  /* Size selector */
  if (hasSizes) {
    var sizeSection = document.createElement("div");
    sizeSection.className = "modal-section";
    sizeSection.innerHTML = '<h4>' + t("menu.chooseSize") + '</h4>';

    var sizeGrid = document.createElement("div");
    sizeGrid.className = "size-grid";

    p.sizes.forEach(function (sz, i) {
      var btn = document.createElement("button");
      btn.className = "size-btn" + (i === 0 ? " active" : "");
      btn.innerHTML = '<span class="size-name">' + (isAr ? sz.nameAr : sz.nameEn) + '</span><span class="size-price">' + sz.price + ' ' + t("menu.egp") + '</span>';
      btn.addEventListener("click", function () {
        sizeGrid.querySelectorAll(".size-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        selected.size = sz.price;
        selected.sizeName = isAr ? sz.nameAr : sz.nameEn;
        updateTotal();
      });
      sizeGrid.appendChild(btn);
    });

    selected.size = p.sizes[0].price;
    selected.sizeName = isAr ? p.sizes[0].nameAr : p.sizes[0].nameEn;

    sizeSection.appendChild(sizeGrid);
    content.appendChild(sizeSection);
  } else if (hasPrice2) {
    var sizeSection2 = document.createElement("div");
    sizeSection2.className = "modal-section";
    sizeSection2.innerHTML = '<h4>' + t("menu.chooseSize") + '</h4>';
    var sizeGrid2 = document.createElement("div");
    sizeGrid2.className = "size-grid";

    var btn1 = document.createElement("button");
    btn1.className = "size-btn active";
    btn1.innerHTML = '<span class="size-name">' + (isAr ? "صغير" : "Small") + '</span><span class="size-price">' + p.price + ' ' + t("menu.egp") + '</span>';
    btn1.addEventListener("click", function () {
      sizeGrid2.querySelectorAll(".size-btn").forEach(function (b) { b.classList.remove("active"); });
      btn1.classList.add("active");
      selected.size = p.price;
      selected.sizeName = isAr ? "صغير" : "Small";
      updateTotal();
    });
    sizeGrid2.appendChild(btn1);

    var btn2 = document.createElement("button");
    btn2.className = "size-btn";
    btn2.innerHTML = '<span class="size-name">' + (isAr ? "كبير" : "Large") + '</span><span class="size-price">' + p.price2 + ' ' + t("menu.egp") + '</span>';
    btn2.addEventListener("click", function () {
      sizeGrid2.querySelectorAll(".size-btn").forEach(function (b) { b.classList.remove("active"); });
      btn2.classList.add("active");
      selected.size = p.price2;
      selected.sizeName = isAr ? "كبير" : "Large";
      updateTotal();
    });
    sizeGrid2.appendChild(btn2);

    selected.size = p.price;
    selected.sizeName = isAr ? "صغير" : "Small";

    sizeSection2.appendChild(sizeGrid2);
    content.appendChild(sizeSection2);
  } else {
    selected.size = p.price;
  }

  /* Add-ons section */
  var addonTypes = p.addons || [];
  if (addonTypes.length > 0) {
    var addonSection = document.createElement("div");
    addonSection.className = "modal-section";
    addonSection.innerHTML = '<h4>' + t("menu.wouldYouLikeExtras") + '</h4>';

    addonList = document.createElement("div");
    addonList.className = "addon-list";

    /* Pizza-specific extras */
    if (addonTypes.indexOf("pizza") !== -1) {
      PIZZA_EXTRA.forEach(function (extra) {
        var item = document.createElement("label");
        item.className = "addon-item";
        item.innerHTML =
          '<input type="checkbox" data-addon-id="' + extra.id + '" />' +
          '<span class="addon-check"></span>' +
          '<span class="addon-name">' + (isAr ? extra.nameAr : extra.nameEn) + '</span>' +
          '<span class="addon-price">+' + extra.price + '</span>';
        addonList.appendChild(item);
      });
    }

    /* General add-ons */
    if (addonTypes.indexOf("general") !== -1 || addonTypes.indexOf("pizza") !== -1) {
      GENERAL_ADDONS.forEach(function (addon) {
        var item = document.createElement("label");
        item.className = "addon-item";
        item.innerHTML =
          '<input type="checkbox" data-addon-id="' + addon.id + '" />' +
          '<span class="addon-check"></span>' +
          '<span class="addon-name">' + (isAr ? addon.nameAr : addon.nameEn) + '</span>' +
          '<span class="addon-price">+' + addon.price + '</span>';
        addonList.appendChild(item);
      });
    }

    /* Sauce selector (only for general and pizza addons) */
    if (addonTypes.indexOf("general") !== -1 || addonTypes.indexOf("pizza") !== -1) {
      var sauceWrap = document.createElement("div");
      sauceWrap.className = "sauce-section";
      sauceWrap.innerHTML = '<p class="sauce-label">' + t("menu.chooseSauce") + '</p>';
      var sauceGrid = document.createElement("div");
      sauceGrid.className = "sauce-grid";

      SAUCES.forEach(function (sauce) {
        var btn = document.createElement("button");
        btn.className = "sauce-btn";
        btn.textContent = isAr ? sauce.nameAr : sauce.nameEn;
        btn.addEventListener("click", function () {
          if (selected.sauce === (isAr ? sauce.nameAr : sauce.nameEn)) {
            selected.sauce = null;
            sauceGrid.querySelectorAll(".sauce-btn").forEach(function (b) { b.classList.remove("active"); });
          } else {
            sauceGrid.querySelectorAll(".sauce-btn").forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            selected.sauce = isAr ? sauce.nameAr : sauce.nameEn;
          }
          updateTotal();
        });
        sauceGrid.appendChild(btn);
      });

      sauceWrap.appendChild(sauceGrid);
      addonList.appendChild(sauceWrap);
    }

    addonSection.appendChild(addonList);
    content.appendChild(addonSection);
  }

  /* Quantity */
  var qtySection = document.createElement("div");
  qtySection.className = "modal-section";
  qtySection.innerHTML = '<h4>' + t("menu.quantity") + '</h4>';
  var qtyCtrl = document.createElement("div");
  qtyCtrl.className = "qty-control";
  qtyCtrl.innerHTML =
    '<button class="qty-btn qty-minus">-</button>' +
    '<span class="qty-display">1</span>' +
    '<button class="qty-btn qty-plus">+</button>';
  qtySection.appendChild(qtyCtrl);
  content.appendChild(qtySection);

  qtyCtrl.querySelector(".qty-minus").addEventListener("click", function () {
    if (selected.qty > 1) {
      selected.qty--;
      qtyCtrl.querySelector(".qty-display").textContent = selected.qty;
      updateTotal();
    }
  });
  qtyCtrl.querySelector(".qty-plus").addEventListener("click", function () {
    selected.qty++;
    qtyCtrl.querySelector(".qty-display").textContent = selected.qty;
    updateTotal();
  });

  /* Total + confirm */
  var footer = document.createElement("div");
  footer.className = "modal-footer";
  footer.innerHTML =
    '<div class="modal-total"><span>' + t("menu.itemTotal") + '</span><span class="total-amount">0 ' + t("menu.egp") + '</span></div>' +
    '<div class="modal-actions">' +
    '<button class="btn btn-gold btn-confirm">' + t("menu.confirm") + '</button>' +
    '<button class="btn btn-gold btn-order-now">' + (isAr ? "اطلب الآن" : "Order Now") + '</button>' +
    '</div>' +
    '<button class="btn btn-outline btn-cancel">' + t("menu.cancel") + '</button>';
  modal.appendChild(content);
  modal.appendChild(footer);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  /* Close handlers */
  header.querySelector(".modal-close").addEventListener("click", closeModal);
  footer.querySelector(".btn-cancel").addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });

  function closeModal() {
    overlay.remove();
    document.body.style.overflow = "";
  }

  function updateTotal() {
    var base = selected.size || p.price || 0;
    var addonTotal = 0;
    var chosenAddons = [];

    if (addonList) {
      addonList.querySelectorAll('input[type="checkbox"]:checked').forEach(function (cb) {
        var addonId = cb.getAttribute("data-addon-id");
        var allAddons = GENERAL_ADDONS.concat(PIZZA_EXTRA);
        var found = allAddons.find(function (a) { return a.id === addonId; });
        if (found) {
          addonTotal += found.price;
          chosenAddons.push({
            id: found.id,
            name: isAr ? found.nameAr : found.nameEn,
            price: found.price
          });
        }
      });
    }

    selected.addons = chosenAddons;
    var total = (base + addonTotal) * selected.qty;
    footer.querySelector(".total-amount").textContent = total + " " + t("menu.egp");
  }

  updateTotal();

  footer.querySelector(".btn-confirm").addEventListener("click", function () {
    var cartItem = {
      id: p.id,
      name: productName(p),
      image: p.image,
      unitPrice: selected.size || p.price,
      sizeName: selected.sizeName,
      addons: selected.addons,
      sauce: selected.sauce,
      qty: selected.qty
    };
    addToCart(cartItem);
    closeModal();

    /* Show toast */
    showToast(isAr ? "تمت الإضافة للسلة" : "Added to cart");
  });

  footer.querySelector(".btn-order-now").addEventListener("click", function () {
    var cartItem = {
      id: p.id,
      name: productName(p),
      image: p.image,
      unitPrice: selected.size || p.price,
      sizeName: selected.sizeName,
      addons: selected.addons,
      sauce: selected.sauce,
      qty: selected.qty
    };
    addToCart(cartItem);
    closeModal();
    window.location.href = "cart.html";
  });
}

/* ========== Toast notification ========== */
function showToast(msg) {
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(function () { toast.classList.add("show"); }, 10);
  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () { toast.remove(); }, 300);
  }, 2000);
}

/* ========== Navigation ========== */
function buildNav() {
  var navLinks = document.querySelector(".nav-links");
  if (!navLinks) return;

  var links = [
    { href: "index.html", key: "nav.home" },
    { href: "menu.html", key: "nav.menu" },
    { href: "offers.html", key: "nav.offers" },
    { href: "cart.html", key: "nav.cart" },
    { href: "complaints.html", key: "nav.complaints" },
    { href: "contact.html", key: "nav.contact" }
  ];

  navLinks.innerHTML = "";
  links.forEach(function (link) {
    var a = document.createElement("a");
    a.href = link.href;
    a.setAttribute("data-i18n", link.key);
    a.textContent = t(link.key);
    var path = window.location.pathname.split("/").pop() || "index.html";
    if (path === link.href) a.classList.add("active");
    navLinks.appendChild(a);
  });

  /* Add cart badge to cart link */
  var cartLink = navLinks.querySelector('a[href="cart.html"]');
  if (cartLink) {
    var badge = document.createElement("span");
    badge.className = "cart-badge";
    badge.style.display = "none";
    cartLink.appendChild(badge);
  }
}

/* ========== Mobile nav toggle ========== */
function initMobileNav() {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    links.classList.toggle("open");
    toggle.classList.toggle("active");
  });

  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.classList.remove("active");
    });
  });
}

/* ========== Category pills (for menu page) ========== */
function renderCategoryNav(container, activeCat, onSelect) {
  if (!container) return;
  container.innerHTML = "";

  var allBtn = document.createElement("button");
  allBtn.className = "cat-pill" + (activeCat === "all" ? " active" : "");
  allBtn.textContent = t("menu.allCategories");
  allBtn.addEventListener("click", function () { onSelect("all"); });
  container.appendChild(allBtn);

  categories.forEach(function (cat) {
    var btn = document.createElement("button");
    btn.className = "cat-pill" + (activeCat === cat.id ? " active" : "");
    btn.textContent = (getLang() === "ar" ? cat.nameAr : cat.nameEn) + " " + cat.icon;
    btn.addEventListener("click", function () { onSelect(cat.id); });
    container.appendChild(btn);
  });
}

/* ========== Init on every page ========== */
document.addEventListener("DOMContentLoaded", function () {
  applyLang();
  buildNav();
  initMobileNav();
  updateCartBadge();

  var langSwitch = document.getElementById("lang-switch");
  if (langSwitch) {
    langSwitch.addEventListener("click", toggleLang);
  }

  /* Re-render dynamic content on lang change */
  document.addEventListener("langChanged", function () {
    buildNav();
    updateCartBadge();
  });
});

if (typeof window !== "undefined") {
  window.getProductById = getProductById;
  window.getProductsByCategory = getProductsByCategory;
  window.getFeaturedProducts = getFeaturedProducts;
  window.getOfferProducts = getOfferProducts;
  window.searchProducts = searchProducts;
  window.productName = productName;
  window.productDesc = productDesc;
  window.formatPrice = formatPrice;
  window.getPriceDisplay = getPriceDisplay;
  window.renderProductCard = renderProductCard;
  window.openProductModal = openProductModal;
  window.renderCategoryNav = renderCategoryNav;
  window.showToast = showToast;
}

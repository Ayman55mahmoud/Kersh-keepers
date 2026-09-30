/* ============================================================
   Cart System — localStorage based
   ============================================================ */

const CART_KEY = "kersh-cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
  document.dispatchEvent(new CustomEvent("cartChanged", { detail: { cart: cart } }));
}

function addToCart(item) {
  var cart = getCart();
  var key = item.id + "|" + (item.sizeName || "") + "|" + JSON.stringify(item.addons || []) + "|" + (item.sauce || "");
  var existing = cart.find(function (c) {
    return c.id === item.id &&
      (c.sizeName || "") === (item.sizeName || "") &&
      JSON.stringify(c.addons || []) === JSON.stringify(item.addons || []) &&
      (c.sauce || "") === (item.sauce || "");
  });

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  saveCart(cart);
}

function removeFromCart(index) {
  var cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function changeQty(index, delta) {
  var cart = getCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getCartCount() {
  return getCart().reduce(function (sum, item) { return sum + item.qty; }, 0);
}

function getCartTotals() {
  var cart = getCart();
  var subtotal = 0;
  var addonsTotal = 0;

  cart.forEach(function (item) {
    var base = item.unitPrice * item.qty;
    subtotal += base;
    if (item.addons) {
      item.addons.forEach(function (a) {
        addonsTotal += a.price * item.qty;
      });
    }
  });

  return {
    subtotal: subtotal,
    addons: addonsTotal,
    grand: subtotal + addonsTotal
  };
}

function updateCartBadge() {
  var count = getCartCount();
  var badges = document.querySelectorAll(".cart-badge");
  badges.forEach(function (b) {
    b.textContent = count;
    b.style.display = count > 0 ? "flex" : "none";
  });
}

if (typeof window !== "undefined") {
  window.getCart = getCart;
  window.saveCart = saveCart;
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.changeQty = changeQty;
  window.clearCart = clearCart;
  window.getCartCount = getCartCount;
  window.getCartTotals = getCartTotals;
  window.updateCartBadge = updateCartBadge;
}

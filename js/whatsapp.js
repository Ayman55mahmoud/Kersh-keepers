/* ============================================================
   WhatsApp Integration — Order + Complaint messages
   Uses click-to-chat (no backend needed)
   ============================================================ */

function openWhatsApp(message) {
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function buildOrderMessage(customer, cartItems, totals) {
  const lang = getLang();
  const isAr = lang === "ar";
  let msg = isAr
    ? "مرحباً كرش كيبرز 👋\n\nأريد عمل طلب جديد:\n\n"
    : "Hello Kersh Keepers 👋\n\nI would like to place a new order:\n\n";

  msg += isAr ? "👤 الاسم: " : "👤 Name: ";
  msg += customer.name + "\n";

  msg += isAr ? "📱 رقم الهاتف: " : "📱 Phone: ";
  msg += customer.phone + "\n";

  if (customer.type === "delivery") {
    msg += isAr ? "📍 العنوان: " : "📍 Address: ";
    msg += customer.address + "\n";
  }

  msg += isAr ? "\n🍔 الطلب:\n" : "\n🍔 Order:\n";

  cartItems.forEach(function (item, i) {
    msg += (i + 1) + " × " + item.name + "\n";
    if (item.sizeName) {
      msg += (isAr ? "الحجم: " : "Size: ") + item.sizeName + "\n";
    }
    if (item.addons && item.addons.length > 0) {
      msg += (isAr ? "الإضافات:\n" : "Extras:\n");
      item.addons.forEach(function (a) {
        msg += "- " + a.name + " (+" + a.price + ")\n";
      });
    }
    if (item.sauce) {
      msg += (isAr ? "الصوص: " : "Sauce: ") + item.sauce + "\n";
    }
    msg += (isAr ? "السعر: " : "Price: ") + item.unitPrice + " × " + item.qty + " = " + (item.unitPrice * item.qty) + " ج.م\n";
    msg += "------------------\n";
  });

  msg += "\n💰 " + (isAr ? "الإجمالي: " : "Total: ") + totals.grand + " " + (isAr ? "ج.م" : "EGP") + "\n";
  msg += (isAr ? "طريقة الطلب: " : "Order Type: ") + (customer.type === "delivery" ? (isAr ? "توصيل" : "Delivery") : (isAr ? "استلام من المطعم" : "Pickup")) + "\n";

  if (customer.notes) {
    msg += (isAr ? "📝 ملاحظات: " : "📝 Notes: ") + customer.notes + "\n";
  }

  return msg;
}

function buildComplaintMessage(data) {
  const lang = getLang();
  const isAr = lang === "ar";
  let msg = isAr
    ? "مرحباً كرش كيبرز،\n\nلدي شكوى / ملاحظة:\n\n"
    : "Hello Kersh Keepers,\n\nI have a complaint / feedback:\n\n";

  msg += (isAr ? "الاسم: " : "Name: ") + data.name + "\n";
  msg += (isAr ? "رقم الهاتف: " : "Phone: ") + data.phone + "\n";
  if (data.orderNum) {
    msg += (isAr ? "رقم الطلب: " : "Order Number: ") + data.orderNum + "\n";
  }
  msg += (isAr ? "الشكوى: " : "Complaint: ") + data.message + "\n";
  msg += isAr ? "\nيرجى مراجعة المشكلة والتواصل معي." : "\nPlease review the issue and contact me.";

  return msg;
}

if (typeof window !== "undefined") {
  window.openWhatsApp = openWhatsApp;
  window.buildOrderMessage = buildOrderMessage;
  window.buildComplaintMessage = buildComplaintMessage;
}

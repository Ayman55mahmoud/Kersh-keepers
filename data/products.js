/* ============================================================
   KERSH KEEPERS — Product Data
   This is the ONLY place to edit products, prices, images, etc.
   ============================================================ */

const WHATSAPP_NUMBER = "201220776716";

const SAUCES = [
  { id: "thomiah", nameAr: "ثومية", nameEn: "Garlic Sauce" },
  { id: "texas", nameAr: "تكساس", nameEn: "Texas Sauce" },
  { id: "bbq", nameAr: "باربكيو", nameEn: "BBQ Sauce" },
  { id: "ranch", nameAr: "رانش", nameEn: "Ranch Sauce" },
  { id: "cheddar", nameAr: "شيدر", nameEn: "Cheddar Sauce" },
  { id: "harissa", nameAr: "هريسة اسبايسي", nameEn: "Spicy Harissa" }
];

/* General add-ons available for many products */
const GENERAL_ADDONS = [
  { id: "cheese-cone", nameAr: "إضافة وش جبن كونو", nameEn: "Add Cheese Cone Crust", price: 15 },
  { id: "stuffed-meats", nameAr: "إضافة حشو (فراخ / لحوم)", nameEn: "Add Stuffing (Chicken / Meat)", price: 20 },
  { id: "extra-sauce", nameAr: "إضافة عليه صوص", nameEn: "Add Extra Sauce", price: 10 }
];

/* Pizza-specific extra */
const PIZZA_EXTRA = [
  { id: "cheese-crust", nameAr: "إضافة حشو أطراف كيري", nameEn: "Add Cheese-Stuffed Crust", price: 20 }
];

const products = [

  /* ===================== PIZZA ===================== */
  { id: "pizza-margherita", category: "pizza", nameAr: "مرجريتا", nameEn: "Margherita",
    image: "https://images.pexels.com/photos/28945103/pexels-photo-28945103.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 110 }, { nameAr: "كبير", nameEn: "Large", price: 150 }],
    addons: ["pizza"], available: true, featured: true, offer: true, oldPrice: 130 },

  { id: "pizza-mix-cheese", category: "pizza", nameAr: "مكس جبن", nameEn: "Mix Cheese",
    image: "https://images.pexels.com/photos/15550301/pexels-photo-15550301.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 115 }, { nameAr: "كبير", nameEn: "Large", price: 160 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-chicken-shawarma", category: "pizza", nameAr: "شاورما فراخ", nameEn: "Chicken Shawarma Pizza",
    image: "https://images.pexels.com/photos/29021734/pexels-photo-29021734.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 120 }, { nameAr: "كبير", nameEn: "Large", price: 170 }],
    addons: ["pizza"], available: true, featured: true, offer: false },

  { id: "pizza-shish-tawook", category: "pizza", nameAr: "شيش طاووق", nameEn: "Shish Tawook",
    image: "https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 120 }, { nameAr: "كبير", nameEn: "Large", price: 170 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-chicken-bbq", category: "pizza", nameAr: "تشيكن باربكيو", nameEn: "Chicken BBQ",
    image: "https://images.pexels.com/photos/29039067/pexels-photo-29039067.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 125 }, { nameAr: "كبير", nameEn: "Large", price: 175 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-chicken-ranch", category: "pizza", nameAr: "تشيكن رانش", nameEn: "Chicken Ranch",
    image: "https://images.pexels.com/photos/29039072/pexels-photo-29039072.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 125 }, { nameAr: "كبير", nameEn: "Large", price: 175 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-strips", category: "pizza", nameAr: "استربس", nameEn: "Strips",
    image: "https://images.pexels.com/photos/27352273/pexels-photo-27352273.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 120 }, { nameAr: "كبير", nameEn: "Large", price: 170 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-panee", category: "pizza", nameAr: "بانية", nameEn: "Panee",
    image: "https://images.pexels.com/photos/14686443/pexels-photo-14686443.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 120 }, { nameAr: "كبير", nameEn: "Large", price: 160 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-mix-chicken", category: "pizza", nameAr: "مكس فراخ", nameEn: "Mix Chicken",
    image: "https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 130 }, { nameAr: "كبير", nameEn: "Large", price: 190 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-minced-meat", category: "pizza", nameAr: "لحم مفروم", nameEn: "Minced Meat",
    image: "https://images.pexels.com/photos/29039072/pexels-photo-29039072.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 120 }, { nameAr: "كبير", nameEn: "Large", price: 170 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-sujuk", category: "pizza", nameAr: "سجق شرقي", nameEn: "Oriental Sausage",
    image: "https://images.pexels.com/photos/29021734/pexels-photo-29021734.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 120 }, { nameAr: "كبير", nameEn: "Large", price: 160 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-sausage", category: "pizza", nameAr: "سوسيس", nameEn: "Sausage",
    image: "https://images.pexels.com/photos/29039067/pexels-photo-29039067.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 120 }, { nameAr: "كبير", nameEn: "Large", price: 160 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-salami", category: "pizza", nameAr: "سلامي", nameEn: "Salami",
    image: "https://images.pexels.com/photos/15550301/pexels-photo-15550301.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "سجق شرقي - سوسيس - لحم مفروم", descEn: "Oriental sausage, sausage, minced meat",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 130 }, { nameAr: "كبير", nameEn: "Large", price: 180 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-mix-meat", category: "pizza", nameAr: "مكس لحوم", nameEn: "Mix Meat",
    image: "https://images.pexels.com/photos/29039072/pexels-photo-29039072.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "سجق شرقي - سوسيس - لحم مفروم", descEn: "Oriental sausage, sausage, minced meat",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 130 }, { nameAr: "كبير", nameEn: "Large", price: 190 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-tuna", category: "pizza", nameAr: "تونة", nameEn: "Tuna",
    image: "https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 130 }, { nameAr: "كبير", nameEn: "Large", price: 180 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-chicken-turkey", category: "pizza", nameAr: "تشيكن تركي", nameEn: "Chicken Turkey",
    image: "https://images.pexels.com/photos/29021734/pexels-photo-29021734.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "تركي - استربس - تشيدر", descEn: "Turkey, strips, cheddar",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 135 }, { nameAr: "كبير", nameEn: "Large", price: 180 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-sweet-chili", category: "pizza", nameAr: "سويت تشيلي", nameEn: "Sweet Chili",
    image: "https://images.pexels.com/photos/28945103/pexels-photo-28945103.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "استربس - هالبينو - صوص سويت تشيلي - سوسيس", descEn: "Strips, jalapeno, sweet chili sauce, sausage",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 135 }, { nameAr: "كبير", nameEn: "Large", price: 190 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-basterma", category: "pizza", nameAr: "بسترمة", nameEn: "Basterma",
    image: "https://images.pexels.com/photos/15550301/pexels-photo-15550301.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 140 }, { nameAr: "كبير", nameEn: "Large", price: 190 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-galador", category: "pizza", nameAr: "جلادور (L فقط)", nameEn: "Galador (Large Only)",
    image: "https://images.pexels.com/photos/29039067/pexels-photo-29039067.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "كبير", nameEn: "Large", price: 220 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  { id: "pizza-shrimp", category: "pizza", nameAr: "جمبري", nameEn: "Shrimp",
    image: "https://images.pexels.com/photos/29039072/pexels-photo-29039072.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 160 }, { nameAr: "كبير", nameEn: "Large", price: 220 }],
    addons: ["pizza"], available: true, featured: false, offer: false },

  /* ===================== الفطير الشرقي ===================== */
  { id: "fateer-mix-cheese", category: "fateer", nameAr: "مكس جبن", nameEn: "Mix Cheese Flatbread",
    image: "https://images.pexels.com/photos/16423837/pexels-photo-16423837.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 140, addons: ["general"], available: true, featured: false, offer: false },

  { id: "fateer-chicken-shawarma", category: "fateer", nameAr: "شاورما فراخ", nameEn: "Chicken Shawarma Flatbread",
    image: "https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 185, addons: ["general"], available: true, featured: true, offer: true, oldPrice: 200 },

  { id: "fateer-sujuk", category: "fateer", nameAr: "سجق شرقي", nameEn: "Oriental Sausage Flatbread",
    image: "https://images.pexels.com/photos/16423837/pexels-photo-16423837.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 170, addons: ["general"], available: true, featured: false, offer: false },

  { id: "fateer-meat", category: "fateer", nameAr: "لحمة", nameEn: "Meat Flatbread",
    image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 185, addons: ["general"], available: true, featured: false, offer: false },

  { id: "fateer-chicken-ranch", category: "fateer", nameAr: "تشيكن رانش", nameEn: "Chicken Ranch Flatbread",
    image: "https://images.pexels.com/photos/16423837/pexels-photo-16423837.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 190, addons: ["general"], available: true, featured: false, offer: false },

  { id: "fateer-chicken-bbq", category: "fateer", nameAr: "تشيكن باربكيو", nameEn: "Chicken BBQ Flatbread",
    image: "https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 190, addons: ["general"], available: true, featured: false, offer: false },

  { id: "fateer-kersh-keepers", category: "fateer", nameAr: "فطيرة كرش كيبرز", nameEn: "Kersh Keepers Flatbread",
    image: "https://images.pexels.com/photos/16423837/pexels-photo-16423837.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 230, addons: ["general"], available: true, featured: true, offer: false },

  /* ===================== ماريا شامي ===================== */
  { id: "maria-shawarma", category: "maria", nameAr: "ماريا شاورما فراخ", nameEn: "Maria Chicken Shawarma",
    image: "https://images.pexels.com/photos/29306506/pexels-photo-29306506.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "تقدم مع بطاطس + ثومية", descEn: "Served with fries + garlic sauce",
    price: 135, addons: [], available: true, featured: false, offer: false },

  { id: "maria-meat", category: "maria", nameAr: "ماريا لحم", nameEn: "Maria Meat",
    image: "https://images.pexels.com/photos/29306507/pexels-photo-29306507.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "تقدم مع بطاطس + ثومية", descEn: "Served with fries + garlic sauce",
    price: 135, addons: [], available: true, featured: false, offer: false },

  /* ===================== ركن القنبلة ===================== */
  { id: "bomb-mix-chicken", category: "bomb", nameAr: "مكس فراخ", nameEn: "Mix Chicken Bomb",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 140 }, { nameAr: "كبير", nameEn: "Large", price: 200 }],
    addons: ["general"], available: true, featured: false, offer: false },

  { id: "bomb-mix-meat", category: "bomb", nameAr: "مكس لحم", nameEn: "Mix Meat Bomb",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "وسط", nameEn: "Medium", price: 140 }, { nameAr: "كبير", nameEn: "Large", price: 200 }],
    addons: ["general"], available: true, featured: false, offer: false },

  /* ===================== حواوشي الملوك ===================== */
  { id: "hawashi-plain", category: "hawashi", nameAr: "حواوشي سادة", nameEn: "Plain Hawashi",
    image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 35, addons: [], available: true, featured: false, offer: false },

  { id: "hawashi-mozzarella", category: "hawashi", nameAr: "حواوشي موتزاريلا", nameEn: "Mozzarella Hawashi",
    image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 40, addons: [], available: true, featured: false, offer: false },

  { id: "hawashi-alexandrian", category: "hawashi", nameAr: "حواوشي إسكندراني", nameEn: "Alexandrian Hawashi",
    image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 85, addons: [], available: true, featured: true, offer: false },

  { id: "hawashi-alex-mozzarella", category: "hawashi", nameAr: "حواوشي إسكندراني موتزاريلا", nameEn: "Alexandrian Mozzarella Hawashi",
    image: "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 100, addons: [], available: true, featured: false, offer: false },

  /* ===================== المكرونة ===================== */
  { id: "pasta-negresco", category: "pasta", nameAr: "مكرونة نجرسكو", nameEn: "Negresco Pasta",
    image: "https://images.pexels.com/photos/15820588/pexels-photo-15820588.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 90, addons: [], available: true, featured: false, offer: false },

  { id: "pasta-bechamel", category: "pasta", nameAr: "مكرونة بشاميل", nameEn: "Bechamel Pasta",
    image: "https://images.pexels.com/photos/34363091/pexels-photo-34363091.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 90, addons: [], available: true, featured: false, offer: false },

  { id: "pasta-zangari", category: "pasta", nameAr: "مكرونة زنجري", nameEn: "Zangari Pasta",
    image: "https://images.pexels.com/photos/29039082/pexels-photo-29039082.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 90, addons: [], available: true, featured: false, offer: false },

  { id: "pasta-sujuk", category: "pasta", nameAr: "سجق شرقي", nameEn: "Oriental Sausage Pasta",
    image: "https://images.pexels.com/photos/15820588/pexels-photo-15820588.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 80, addons: [], available: true, featured: false, offer: false },

  /* ===================== الريزو ===================== */
  { id: "rizo-meat", category: "rizo", nameAr: "ريزو لحم", nameEn: "Meat Rizo",
    image: "https://images.pexels.com/photos/23106717/pexels-photo-23106717.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 80, addons: [], available: true, featured: false, offer: false },

  { id: "rizo-kofta", category: "rizo", nameAr: "ريزو كفتة مشوي", nameEn: "Grilled Kofta Rizo",
    image: "https://images.pexels.com/photos/26341210/pexels-photo-26341210.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 80, addons: [], available: true, featured: false, offer: false },

  { id: "rizo-shish", category: "rizo", nameAr: "ريزو شيش", nameEn: "Shish Rizo",
    image: "https://images.pexels.com/photos/23106717/pexels-photo-23106717.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 80, addons: [], available: true, featured: false, offer: false },

  { id: "rizo-chicken", category: "rizo", nameAr: "ريزو تشيكن", nameEn: "Chicken Rizo",
    image: "https://images.pexels.com/photos/23106717/pexels-photo-23106717.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 80, addons: [], available: true, featured: false, offer: false },

  /* ===================== الوجبات ===================== */
  { id: "meal-shish", category: "meals", nameAr: "شيش", nameEn: "Shish Meal",
    image: "https://images.pexels.com/photos/37198642/pexels-photo-37198642.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 100, addons: [], available: true, featured: false, offer: false },

  { id: "meal-kofta", category: "meals", nameAr: "كفتة مشوي", nameEn: "Grilled Kofta Meal",
    image: "https://images.pexels.com/photos/26341210/pexels-photo-26341210.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 100, addons: [], available: true, featured: false, offer: false },

  { id: "meal-strips", category: "meals", nameAr: "استربس", nameEn: "Strips Meal",
    image: "https://images.pexels.com/photos/27352273/pexels-photo-27352273.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 100, addons: [], available: true, featured: false, offer: false },

  { id: "meal-shish-kofta", category: "meals", nameAr: "وجبة شيش + كفتة", nameEn: "Shish + Kofta Meal",
    image: "https://images.pexels.com/photos/32986489/pexels-photo-32986489.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "تقدم مع أرز بسمتي + بطاطس + ثومية + مخلل", descEn: "Served with basmati rice, fries, garlic sauce, pickles",
    price: 130, addons: [], available: true, featured: true, offer: true, oldPrice: 150 },

  /* ===================== الكالزون ===================== */
  { id: "calzone-chicken-shawarma", category: "calzone", nameAr: "شاورما فراخ", nameEn: "Chicken Shawarma Calzone",
    image: "https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 160, addons: ["general"], available: true, featured: false, offer: false },

  { id: "calzone-zaatar-syrian", category: "calzone", nameAr: "زعتر سوري", nameEn: "Syrian Thyme Calzone",
    image: "https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 160, addons: [], available: true, featured: false, offer: false },

  { id: "calzone-meat", category: "calzone", nameAr: "لحمة", nameEn: "Meat Calzone",
    image: "https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 150, addons: ["general"], available: true, featured: false, offer: false },

  /* ===================== كريبات المكس ===================== */
  { id: "crepe-qadia", category: "crepe-mix", nameAr: "القاضية", nameEn: "The Judge",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "استربس - برجر لحم - تركي مدخن - هالبينو - صوص تشيلي", descEn: "Strips, beef burger, smoked turkey, jalapeno, chili sauce",
    price: 150, addons: [], available: true, featured: true, offer: true, oldPrice: 170 },

  { id: "crepe-f16", category: "crepe-mix", nameAr: "F16", nameEn: "F16",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "شاورما فراخ - كفتة مشوي - زنجري - سلامي - باربكيو", descEn: "Chicken shawarma, grilled kofta, zangari, salami, BBQ",
    price: 135, addons: [], available: true, featured: false, offer: false },

  { id: "crepe-kersh-keepers", category: "crepe-mix", nameAr: "كرش كيبرز", nameEn: "Kersh Keepers",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "شيش - كرسبي - استربس - سوسيس - رومي مدخن - جبنة رومي", descEn: "Shish, crispy, strips, sausage, smoked pastrami, romi cheese",
    price: 130, addons: [], available: true, featured: false, offer: false },

  { id: "crepe-mix-crispy", category: "crepe-mix", nameAr: "ميكس كرسبي", nameEn: "Mix Crispy",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "كوردن بلو - استربس - بانية", descEn: "Cordon bleu, strips, panee",
    price: 110, addons: [], available: true, featured: false, offer: false },

  { id: "crepe-mix-chicken", category: "crepe-mix", nameAr: "ميكس فراخ", nameEn: "Mix Chicken",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "شيش - زنجري - بانية", descEn: "Shish, zangari, panee",
    price: 110, addons: [], available: true, featured: false, offer: false },

  { id: "crepe-mix-meat", category: "crepe-mix", nameAr: "ميكس لحوم", nameEn: "Mix Meat",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "كفتة - سجق - سوسيس - سلامي", descEn: "Kofta, sujuk, sausage, salami",
    price: 110, addons: [], available: true, featured: false, offer: false },

  /* ===================== كريبات الفراخ ===================== */
  { id: "crepe-chicken-panee", category: "crepe-chicken", nameAr: "بانية كرسبي", nameEn: "Crispy Panee",
    image: "https://images.pexels.com/photos/23106705/pexels-photo-23106705.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "رول", nameEn: "Roll", price: 85 }, { nameAr: "مثلث", nameEn: "Triangle", price: 70 }],
    addons: [], available: true, featured: false, offer: false },

  { id: "crepe-chicken-super-crunchy", category: "crepe-chicken", nameAr: "سوبر كرانشي", nameEn: "Super Crunchy",
    image: "https://images.pexels.com/photos/23106705/pexels-photo-23106705.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "استربس - لحم مدخن", descEn: "Strips, smoked meat",
    sizes: [{ nameAr: "رول", nameEn: "Roll", price: 115 }, { nameAr: "مثلث", nameEn: "Triangle", price: 100 }],
    addons: [], available: true, featured: false, offer: false },

  { id: "crepe-chicken-ranch", category: "crepe-chicken", nameAr: "تشيكن رانش", nameEn: "Chicken Ranch",
    image: "https://images.pexels.com/photos/23106705/pexels-photo-23106705.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "استربس - تركي - صوص رانش", descEn: "Strips, turkey, ranch sauce",
    sizes: [{ nameAr: "رول", nameEn: "Roll", price: 115 }, { nameAr: "مثلث", nameEn: "Triangle", price: 100 }],
    addons: [], available: true, featured: false, offer: false },

  { id: "crepe-chicken-super-spicy", category: "crepe-chicken", nameAr: "سوبر اسبايسي", nameEn: "Super Spicy",
    image: "https://images.pexels.com/photos/23106705/pexels-photo-23106705.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "استربس - لحم مدخن - صوص تشيلي - هالبينو", descEn: "Strips, smoked meat, chili sauce, jalapeno",
    sizes: [{ nameAr: "رول", nameEn: "Roll", price: 115 }, { nameAr: "مثلث", nameEn: "Triangle", price: 100 }],
    addons: [], available: true, featured: false, offer: false },

  { id: "crepe-chicken-shawarma", category: "crepe-chicken", nameAr: "شاورما فراخ", nameEn: "Chicken Shawarma Crepe",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "رول", nameEn: "Roll", price: 115 }, { nameAr: "مثلث", nameEn: "Triangle", price: 100 }],
    addons: [], available: true, featured: true, offer: false },

  { id: "crepe-chicken-fahita", category: "crepe-chicken", nameAr: "فاهيتا فراخ", nameEn: "Chicken Fajita",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "قطع فراخ - بصل - فلفل - زيتون", descEn: "Chicken pieces, onion, pepper, olives",
    sizes: [{ nameAr: "رول", nameEn: "Roll", price: 115 }, { nameAr: "مثلث", nameEn: "Triangle", price: 100 }],
    addons: [], available: true, featured: false, offer: false },

  { id: "crepe-chicken-cordon", category: "crepe-chicken", nameAr: "كوردن بلو", nameEn: "Cordon Bleu",
    image: "https://images.pexels.com/photos/23106705/pexels-photo-23106705.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    sizes: [{ nameAr: "رول", nameEn: "Roll", price: 115 }, { nameAr: "مثلث", nameEn: "Triangle", price: 100 }],
    addons: [], available: true, featured: false, offer: false },

  /* ===================== كريبات اللحوم ===================== */
  { id: "crepe-meat-sujuk", category: "crepe-meat", nameAr: "سجق شرقي", nameEn: "Oriental Sausage Crepe",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 80, addons: [], available: true, featured: false, offer: false },

  { id: "crepe-meat-sausage", category: "crepe-meat", nameAr: "سوسيس", nameEn: "Sausage Crepe",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 80, addons: [], available: true, featured: false, offer: false },

  { id: "crepe-meat-cheese-burger", category: "crepe-meat", nameAr: "تشيز برجر", nameEn: "Cheese Burger Crepe",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 85, addons: [], available: true, featured: false, offer: false },

  { id: "crepe-meat-kofta", category: "crepe-meat", nameAr: "كفتة مشوي", nameEn: "Grilled Kofta Crepe",
    image: "https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 90, addons: [], available: true, featured: false, offer: false },

  /* ===================== الركن السوري ===================== */
  { id: "syrian-panee", category: "syrian", nameAr: "بانية كرسبي", nameEn: "Crispy Panee",
    image: "https://images.pexels.com/photos/23106705/pexels-photo-23106705.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 50, addons: [], available: true, featured: false, offer: false },

  { id: "syrian-strips", category: "syrian", nameAr: "استربس", nameEn: "Strips",
    image: "https://images.pexels.com/photos/27352273/pexels-photo-27352273.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 70, addons: [], available: true, featured: false, offer: false },

  { id: "syrian-shawarma", category: "syrian", nameAr: "شاورما فراخ", nameEn: "Chicken Shawarma",
    image: "https://images.pexels.com/photos/29306506/pexels-photo-29306506.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 70, addons: [], available: true, featured: false, offer: false },

  { id: "syrian-potato", category: "syrian", nameAr: "بطاطس سوري", nameEn: "Syrian Fries",
    image: "https://images.pexels.com/photos/15801054/pexels-photo-15801054.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 35, addons: [], available: true, featured: false, offer: false },

  { id: "syrian-potato-mozzarella", category: "syrian", nameAr: "بطاطس موتزاريلا", nameEn: "Mozzarella Fries",
    image: "https://images.pexels.com/photos/15801054/pexels-photo-15801054.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 40, addons: [], available: true, featured: false, offer: false },

  { id: "syrian-kofta", category: "syrian", nameAr: "كفتة مشوي", nameEn: "Grilled Kofta",
    image: "https://images.pexels.com/photos/26341210/pexels-photo-26341210.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 60, addons: [], available: true, featured: false, offer: false },

  /* ===================== شاورما عربي ===================== */
  { id: "arabic-shawarma-chicken", category: "arabic-shawarma", nameAr: "وجبة شاورما فراخ عربي", nameEn: "Arabic Chicken Shawarma Meal",
    image: "https://images.pexels.com/photos/29306506/pexels-photo-29306506.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "تقدم مع بطاطس - ثومية - مخلل", descEn: "Served with fries, garlic sauce, pickles",
    price: 145, price2: 190, addons: [], available: true, featured: false, offer: false },

  { id: "arabic-shawarma-meat", category: "arabic-shawarma", nameAr: "وجبة شاورما لحم عربي", nameEn: "Arabic Meat Shawarma Meal",
    image: "https://images.pexels.com/photos/29306507/pexels-photo-29306507.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "تقدم مع بطاطس - ثومية - مخلل", descEn: "Served with fries, garlic sauce, pickles",
    price: 145, price2: 190, addons: [], available: true, featured: false, offer: false },

  /* ===================== البرجر ===================== */
  { id: "burger-single", category: "burger", nameAr: "سنجل برجر", nameEn: "Single Burger",
    image: "https://images.pexels.com/photos/18867543/pexels-photo-18867543.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 75, addons: [], available: true, featured: false, offer: false },

  { id: "burger-double", category: "burger", nameAr: "دبل برجر", nameEn: "Double Burger",
    image: "https://images.pexels.com/photos/20722047/pexels-photo-20722047.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 100, addons: [], available: true, featured: true, offer: true, oldPrice: 120 },

  { id: "burger-zinger", category: "burger", nameAr: "برجر زنجر", nameEn: "Zinger Burger",
    image: "https://images.pexels.com/photos/14701530/pexels-photo-14701530.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 95, addons: [], available: true, featured: false, offer: false },

  { id: "burger-max-cheese", category: "burger", nameAr: "برجر ماكس تشيز", nameEn: "Max Cheese Burger",
    image: "https://images.pexels.com/photos/20722047/pexels-photo-20722047.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    descAr: "يقدم مع بطاطس", descEn: "Served with fries",
    price: 110, addons: [], available: true, featured: false, offer: false },

  /* ===================== ركن البطاطس ===================== */
  { id: "potato-bucket", category: "potato", nameAr: "باكت بطاطس", nameEn: "Potato Bucket",
    image: "https://images.pexels.com/photos/15801054/pexels-photo-15801054.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 25, addons: [], available: true, featured: false, offer: false },

  { id: "potato-cheddar", category: "potato", nameAr: "بطاطس شيدر", nameEn: "Cheddar Fries",
    image: "https://images.pexels.com/photos/15801066/pexels-photo-15801066.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 35, addons: [], available: true, featured: false, offer: false },

  { id: "potato-crunchy", category: "potato", nameAr: "بطاطس كرانشي", nameEn: "Crunchy Fries",
    image: "https://images.pexels.com/photos/15801054/pexels-photo-15801054.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 50, addons: [], available: true, featured: false, offer: false },

  { id: "potato-kofta", category: "potato", nameAr: "بطاطس كفتة", nameEn: "Kofta Fries",
    image: "https://images.pexels.com/photos/15801066/pexels-photo-15801066.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 50, addons: [], available: true, featured: false, offer: false },

  { id: "potato-crepe", category: "potato", nameAr: "كريب بطاطس", nameEn: "Potato Crepe",
    image: "https://images.pexels.com/photos/15801066/pexels-photo-15801066.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 65, addons: [], available: true, featured: false, offer: false },

  { id: "potato-crepe-panee", category: "potato", nameAr: "كريب بانية بطاطس", nameEn: "Panee Potato Crepe",
    image: "https://images.pexels.com/photos/15801066/pexels-photo-15801066.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 80, addons: [], available: true, featured: false, offer: false },

  { id: "potato-crepe-crunchy", category: "potato", nameAr: "كريب بطاطس كرانشي", nameEn: "Crunchy Potato Crepe",
    image: "https://images.pexels.com/photos/15801066/pexels-photo-15801066.jpeg?auto=compress&cs=tinysrgb&h=350&w=350",
    price: 90, addons: [], available: true, featured: false, offer: false }

];

/* Category metadata */
const categories = [
  { id: "pizza", nameAr: "بيتزا", nameEn: "Pizza", icon: "🍕" },
  { id: "fateer", nameAr: "الفطير الشرقي", nameEn: "Oriental Flatbread", icon: "🫓" },
  { id: "maria", nameAr: "ماريا شامي", nameEn: "Maria Shami", icon: "🌯" },
  { id: "bomb", nameAr: "ركن القنبلة", nameEn: "Bomb Corner", icon: "💥" },
  { id: "hawashi", nameAr: "حواوشي الملوك", nameEn: "Royal Hawashi", icon: "🥙" },
  { id: "pasta", nameAr: "المكرونة", nameEn: "Pasta", icon: "🍝" },
  { id: "rizo", nameAr: "الريزو", nameEn: "Rizo", icon: "🍚" },
  { id: "meals", nameAr: "الوجبات", nameEn: "Meals", icon: "🍽️" },
  { id: "calzone", nameAr: "الكالزون", nameEn: "Calzone", icon: "🥟" },
  { id: "crepe-mix", nameAr: "كريبات المكس", nameEn: "Mix Crepes", icon: "🌯" },
  { id: "crepe-chicken", nameAr: "كريبات الفراخ", nameEn: "Chicken Crepes", icon: "🍗" },
  { id: "crepe-meat", nameAr: "كريبات اللحوم", nameEn: "Meat Crepes", icon: "🥩" },
  { id: "syrian", nameAr: "الركن السوري", nameEn: "Syrian Corner", icon: "🧆" },
  { id: "arabic-shawarma", nameAr: "شاورما عربي", nameEn: "Arabic Shawarma", icon: "🌯" },
  { id: "burger", nameAr: "البرجر", nameEn: "Burgers", icon: "🍔" },
  { id: "potato", nameAr: "ركن البطاطس", nameEn: "Potato Corner", icon: "🍟" }
];

/* Restaurant info */
const restaurantInfo = {
  nameEn: "KERSh KEEPERS",
  nameAr: "كرش كيبرز",
  sloganEn: "Shawarma & Grill",
  sloganAr: "شاورما و جريل",
  addressAr: "اتميدة - ميت غمر - الدقهلية",
  addressEn: "Atmida - Mit Ghamr - Dakahlia",
  addressDetailAr: "بجوار عيادة د. عبدالعاطي أبوخشبة",
  addressDetailEn: "Near Dr. Abdelaaty Aboukhashba Clinic",
  phone: "0504802787",
  whatsapp: "01220776716",
  mobile: "01272501095",
  mapsQuery: "ميت غمر الدقهلية اتميدة"
};

/* Make available globally */
if (typeof window !== "undefined") {
  window.WHATSAPP_NUMBER = WHATSAPP_NUMBER;
  window.SAUCES = SAUCES;
  window.GENERAL_ADDONS = GENERAL_ADDONS;
  window.PIZZA_EXTRA = PIZZA_EXTRA;
  window.products = products;
  window.categories = categories;
  window.restaurantInfo = restaurantInfo;
}

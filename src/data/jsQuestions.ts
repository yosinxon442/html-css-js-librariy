import { Question } from './htmlQuestions';

export const jsQuestions: Question[] = [
  {
    id: 1,
    question: "JavaScript kim tomonidan yaratilgan?",
    options: ["Brendan Eich", "Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "JavaScript da o'zgaruvchi e'lon qilish uchun?",
    options: ["int, float, string", "var, let, const", "define, declare, set", "variable, constant"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "let va const farqi nimada?",
    options: ["Farqi yo'q", "const - qayta tayinlash mumkin", "let - qayta tayinlash mumkin, const - yo'q", "Ikkalasi ham qayta tayinlash mumkin"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "var va let farqi nimada?",
    options: ["Farqi yo'q", "let - function scope", "Ikkalasi ham global scope", "var - function, let - block scope"],
    correctAnswer: 3
  },
  {
    id: 5,
    question: "typeof operatori nima qaytaradi?",
    options: ["Ma'lumot turini string sifatida", "Qiymatni", "O'zgaruvchi nomini", "Xatolikni"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "null va undefined farqi nimada?",
    options: ["Farqi yo'q", "null - qo'lda tayinlangan bo'sh, undefined - qiymat berilmagan", "Ikkalasi ham xatolik", "undefined - bo'sh qiymat"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "== va === farqi nimada?",
    options: ["Farqi yo'q", "=== faqat qiymatni", "== faqat qiymatni, === qiymat va turni", "Ikkalasi ham turni solishtiradi"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Array yaratishning to'g'ri usuli qaysi?",
    options: ["let arr = (1, 2, 3)", "let arr = {1, 2, 3}", "let arr = <1, 2, 3>", "let arr = [1, 2, 3]"],
    correctAnswer: 3
  },
  {
    id: 9,
    question: "Object yaratishning to'g'ri usuli qaysi?",
    options: ["let obj = {name: 'Ali'}", "let obj = [name: 'Ali']", "let obj = (name: 'Ali')", "let obj = <name: 'Ali'>"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "console.log() nima qiladi?",
    options: ["Xatolik chiqaradi", "Konsolga ma'lumot chiqaradi", "Oynani yopadi", "Sahifani yangilaydi"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "if-else operatori nima uchun ishlatiladi?",
    options: ["Loop yaratish", "Funksiya e'lon qilish", "Shartli bajarish", "O'zgaruvchi yaratish"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "for tsikli qanday yoziladi?",
    options: ["for i = 0 to 10", "for i in range(10)", "loop (i = 0; i < 10)", "for (let i = 0; i < 10; i++)"],
    correctAnswer: 3
  },
  {
    id: 13,
    question: "while tsikli qachon to'xtaydi?",
    options: ["Shart false bo'lganda", "Doim ishlaydi", "Shart true bo'lganda", "Hech qachon to'xtamaydi"],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "break kalit so'zi nima qiladi?",
    options: ["Tsiklni davom ettiradi", "Tsiklni to'xtatadi", "Funksiyani yaratadi", "Xatolik chiqaradi"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "continue kalit so'zi nima qiladi?",
    options: ["Tsiklni to'xtatadi", "Funksiyani yaratadi", "Joriy iteratsiyani o'tkazib yuboradi", "Xatolik chiqaradi"],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "function kalit so'zi nima uchun ishlatiladi?",
    options: ["O'zgaruvchi yaratish", "Tsikl yaratish", "Shart yaratish", "Funksiya e'lon qilish"],
    correctAnswer: 3
  },
  {
    id: 17,
    question: "Arrow function qanday yoziladi?",
    options: ["() => {}", "function() => {}", "() -> {}", "=> () {}"],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "return kalit so'zi nima qiladi?",
    options: ["Funksiyani boshlashtiradi", "Funksiyadan qiymat qaytaradi", "Tsikl yaratadi", "Xatolik chiqaradi"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Array.push() metodi nima qiladi?",
    options: ["Oxirgi elementni o'chiradi", "Birinchi elementni o'chiradi", "Oxiriga element qo'shadi", "Massivni tozalaydi"],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "Array.pop() metodi nima qiladi?",
    options: ["Oxiriga element qo'shadi", "Birinchi elementni o'chiradi", "Massivni tozalaydi", "Oxirgi elementni o'chiradi"],
    correctAnswer: 3
  },
  {
    id: 21,
    question: "Array.shift() metodi nima qiladi?",
    options: ["Birinchi elementni o'chiradi", "Oxirgi elementni o'chiradi", "Oxiriga element qo'shadi", "Boshiga element qo'shadi"],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "Array.unshift() metodi nima qiladi?",
    options: ["Oxirgi elementni o'chiradi", "Boshiga element qo'shadi", "Birinchi elementni o'chiradi", "Oxiriga element qo'shadi"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "Array.map() metodi nima qiladi?",
    options: ["Massivni filtrlaydi", "Massivni saralaydi", "Har bir elementda funksiya bajarib yangi massiv", "Bitta qiymat qaytaradi"],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Array.filter() metodi nima qiladi?",
    options: ["Har bir elementni o'zgartiradi", "Massivni saralaydi", "Bitta qiymat qaytaradi", "Shartga mos elementlardan yangi massiv"],
    correctAnswer: 3
  },
  {
    id: 25,
    question: "Array.reduce() metodi nima qiladi?",
    options: ["Massivni bitta qiymatga kamaytiradi", "Massivni filtrlaydi", "Massivni saralaydi", "Yangi massiv yaratadi"],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "Array.find() metodi nima qaytaradi?",
    options: ["Shartga mos barcha elementlar", "Shartga mos birinchi element", "Element indeksi", "Boolean qiymat"],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Array.findIndex() metodi nima qaytaradi?",
    options: ["Shartga mos element", "Barcha indekslar", "Shartga mos birinchi element indeksi", "Boolean qiymat"],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "Array.includes() metodi nima qaytaradi?",
    options: ["Element", "Indeks", "Yangi massiv", "Boolean (true/false)"],
    correctAnswer: 3
  },
  {
    id: 29,
    question: "Array.sort() metodi nima qiladi?",
    options: ["Massivni saralaydi", "Massivni filtrlaydi", "Massivni teskari qiladi", "Massivni tozalaydi"],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "Array.reverse() metodi nima qiladi?",
    options: ["Massivni saralaydi", "Massiv tartibini teskari qiladi", "Massivni filtrlaydi", "Massivni tozalaydi"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "String.split() metodi nima qiladi?",
    options: ["Stringlarni birlashtiradi", "Stringni o'zgartiradi", "Stringni massivga bo'ladi", "Stringni o'chiradi"],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "Array.join() metodi nima qiladi?",
    options: ["Massivni bo'ladi", "Massivni filtrlaydi", "Massivni saralaydi", "Massiv elementlarini stringga birlashtiradi"],
    correctAnswer: 3
  },
  {
    id: 33,
    question: "String.toUpperCase() nima qiladi?",
    options: ["Katta harflarga o'zgartiradi", "Kichik harflarga", "Birinchi harfni kattalashtiradi", "Stringni o'chiradi"],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "String.toLowerCase() nima qiladi?",
    options: ["Katta harflarga", "Kichik harflarga o'zgartiradi", "Birinchi harfni kattalashtiradi", "Stringni o'chiradi"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "String.trim() metodi nima qiladi?",
    options: ["Stringni kesadi", "Stringni kattalashtiradi", "Boshi va oxiridagi bo'shliqlarni olib tashlaydi", "Stringni o'chiradi"],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "String.slice() metodi nima qiladi?",
    options: ["Stringni to'liq qaytaradi", "Stringni o'zgartiradi", "Stringni o'chiradi", "String qismini qaytaradi"],
    correctAnswer: 3
  },
  {
    id: 37,
    question: "String.replace() metodi nima qiladi?",
    options: ["Qismni almashtiradi", "Stringni o'chiradi", "Stringni kattalashtiradi", "Stringni bo'ladi"],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "Template literals qanday yoziladi?",
    options: ["'string'", "`string ${variable}`", "\"string\"", "(string)"],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "Object.keys() metodi nima qaytaradi?",
    options: ["Qiymatlar massivi", "Juftliklar massivi", "Kalitlar massivi", "Bo'sh massiv"],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "Object.values() metodi nima qaytaradi?",
    options: ["Kalitlar massivi", "Juftliklar massivi", "Bo'sh massiv", "Qiymatlar massivi"],
    correctAnswer: 3
  },
  {
    id: 41,
    question: "Object.entries() metodi nima qaytaradi?",
    options: ["[kalit, qiymat] juftliklar massivi", "Kalitlar massivi", "Qiymatlar massivi", "Bo'sh massiv"],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "Spread operatori (...) nima uchun ishlatiladi?",
    options: ["Faqat raqamlar uchun", "Massiv/objektni yoyish uchun", "Faqat stringlar uchun", "Faqat funksiyalar uchun"],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "Rest parametri (...args) nima qiladi?",
    options: ["Bitta argumentni oladi", "Argumentlarni o'chiradi", "Qolgan barcha argumentlarni massivga yig'adi", "Argumentlarni tekshiradi"],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "Destructuring nima?",
    options: ["Objektni o'chirish", "Funksiya yaratish", "Tsikl yaratish", "Massiv/objektdan qiymatlarni ajratib olish"],
    correctAnswer: 3
  },
  {
    id: 45,
    question: "Promise nima?",
    options: ["Asinxron operatsiya natijasini ifodalovchi objekt", "O'zgaruvchi turi", "Tsikl turi", "Funksiya turi"],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "Promise ning uchta holati qaysilar?",
    options: ["start, middle, end", "pending, fulfilled, rejected", "open, closed, error", "begin, process, finish"],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "async/await nima uchun ishlatiladi?",
    options: ["Sinxron kod yozish", "Xatoliklarni yashirish", "Asinxron kodni sinxron ko'rinishda yozish", "Tsikl yaratish"],
    correctAnswer: 2
  },
  {
    id: 48,
    question: "try-catch bloki nima uchun ishlatiladi?",
    options: ["Tsikl yaratish", "Funksiya yaratish", "O'zgaruvchi yaratish", "Xatoliklarni ushlash va boshqarish"],
    correctAnswer: 3
  },
  {
    id: 49,
    question: "fetch() API nima uchun ishlatiladi?",
    options: ["HTTP so'rovlar yuborish", "DOM bilan ishlash", "Stillar o'zgartirish", "Animatsiya yaratish"],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "JSON.parse() nima qiladi?",
    options: ["Objektni JSON stringga", "JSON stringni JavaScript objektga", "Stringni raqamga", "Massivni stringga"],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "JSON.stringify() nima qiladi?",
    options: ["JSON stringni objektga", "Raqamni stringga", "JavaScript objektni JSON stringga", "Massivni objektga"],
    correctAnswer: 2
  },
  {
    id: 52,
    question: "localStorage nima?",
    options: ["Vaqtinchalik xotira", "Server xotirasi", "O'zgaruvchi turi", "Brauzerda doimiy ma'lumot saqlash joyi"],
    correctAnswer: 3
  },
  {
    id: 53,
    question: "sessionStorage va localStorage farqi?",
    options: ["sessionStorage - tab yopilganda o'chadi", "Farqi yo'q", "localStorage - tab yopilganda o'chadi", "Ikkalasi ham doimiy"],
    correctAnswer: 0
  },
  {
    id: 54,
    question: "document.getElementById() nima qaytaradi?",
    options: ["Elementlar to'plami", "Bitta element yoki null", "Boolean qiymat", "String"],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "document.querySelector() nima qaytaradi?",
    options: ["Barcha mos elementlar", "Boolean qiymat", "Birinchi mos element yoki null", "String"],
    correctAnswer: 2
  },
  {
    id: 56,
    question: "document.querySelectorAll() nima qaytaradi?",
    options: ["Birinchi mos element", "Boolean qiymat", "String", "Barcha mos elementlar NodeList"],
    correctAnswer: 3
  },
  {
    id: 57,
    question: "addEventListener() nima uchun ishlatiladi?",
    options: ["Hodisa tinglovchi qo'shish", "Element yaratish", "Element o'chirish", "Stil o'zgartirish"],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "event.preventDefault() nima qiladi?",
    options: ["Hodisani to'xtatadi", "Standart xatti-harakatni bekor qiladi", "Elementni o'chiradi", "Sahifani yangilaydi"],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "event.stopPropagation() nima qiladi?",
    options: ["Standart xatti-harakatni bekor", "Elementni o'chiradi", "Hodisa tarqalishini to'xtatadi", "Sahifani yangilaydi"],
    correctAnswer: 2
  },
  {
    id: 60,
    question: "innerHTML xossasi nima qiladi?",
    options: ["Faqat matnni o'zgartiradi", "Elementni o'chiradi", "Stilni o'zgartiradi", "Element ichidagi HTMLni o'qish/o'zgartirish"],
    correctAnswer: 3
  },
  {
    id: 61,
    question: "textContent xossasi nima qiladi?",
    options: ["Faqat matnni o'qish/o'zgartirish", "HTMLni o'zgartiradi", "Stilni o'zgartiradi", "Elementni o'chiradi"],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "classList.add() nima qiladi?",
    options: ["Klassni o'chiradi", "Klass qo'shadi", "Klassni almashtiradi", "Klassni tekshiradi"],
    correctAnswer: 1
  },
  {
    id: 63,
    question: "classList.remove() nima qiladi?",
    options: ["Klass qo'shadi", "Klassni almashtiradi", "Klassni o'chiradi", "Klassni tekshiradi"],
    correctAnswer: 2
  },
  {
    id: 64,
    question: "classList.toggle() nima qiladi?",
    options: ["Klass qo'shadi", "Klassni o'chiradi", "Klassni tekshiradi", "Klassni qo'shadi/o'chiradi"],
    correctAnswer: 3
  },
  {
    id: 65,
    question: "setAttribute() metodi nima qiladi?",
    options: ["Atribut qiymatini o'rnatadi", "Atributni o'chiradi", "Atributni oladi", "Atributni tekshiradi"],
    correctAnswer: 0
  },
  {
    id: 66,
    question: "getAttribute() metodi nima qiladi?",
    options: ["Atribut qiymatini o'rnatadi", "Atribut qiymatini oladi", "Atributni o'chiradi", "Atributni tekshiradi"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "removeAttribute() metodi nima qiladi?",
    options: ["Atribut qiymatini o'rnatadi", "Atributni oladi", "Atributni o'chiradi", "Atributni tekshiradi"],
    correctAnswer: 2
  },
  {
    id: 68,
    question: "createElement() metodi nima qiladi?",
    options: ["Elementni o'chiradi", "Elementni tanlaydi", "Elementni o'zgartiradi", "Yangi element yaratadi"],
    correctAnswer: 3
  },
  {
    id: 69,
    question: "appendChild() metodi nima qiladi?",
    options: ["Bola element qo'shadi", "Elementni o'chiradi", "Elementni tanlaydi", "Elementni o'zgartiradi"],
    correctAnswer: 0
  },
  {
    id: 70,
    question: "removeChild() metodi nima qiladi?",
    options: ["Bola element qo'shadi", "Bola elementni o'chiradi", "Elementni tanlaydi", "Elementni o'zgartiradi"],
    correctAnswer: 1
  },
  {
    id: 71,
    question: "insertBefore() metodi nima qiladi?",
    options: ["Elementdan keyin qo'shadi", "Elementni o'chiradi", "Element oldiga qo'shadi", "Elementni tanlaydi"],
    correctAnswer: 2
  },
  {
    id: 72,
    question: "cloneNode() metodi nima qiladi?",
    options: ["Elementni o'chiradi", "Elementni tanlaydi", "Elementni o'zgartiradi", "Elementni nusxalaydi"],
    correctAnswer: 3
  },
  {
    id: 73,
    question: "setTimeout() nima qiladi?",
    options: ["Kodni kechiktirib bajaradi", "Kodni darhol bajaradi", "Kodni to'xtatadi", "Kodni takrorlaydi"],
    correctAnswer: 0
  },
  {
    id: 74,
    question: "setInterval() nima qiladi?",
    options: ["Kodni bir marta bajaradi", "Kodni ma'lum vaqt oralig'ida takrorlaydi", "Kodni to'xtatadi", "Kodni o'chiradi"],
    correctAnswer: 1
  },
  {
    id: 75,
    question: "clearTimeout() nima qiladi?",
    options: ["setTimeout ni boshlaydi", "setInterval ni to'xtatadi", "setTimeout ni bekor qiladi", "Barcha taymerlarni o'chiradi"],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "clearInterval() nima qiladi?",
    options: ["setTimeout ni bekor qiladi", "Barcha taymerlarni o'chiradi", "setInterval ni boshlaydi", "setInterval ni to'xtatadi"],
    correctAnswer: 3
  },
  {
    id: 77,
    question: "Math.random() nima qaytaradi?",
    options: ["0 dan 1 gacha tasodifiy son", "1 dan 100 gacha son", "Butun son", "Manfiy son"],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "Math.floor() nima qiladi?",
    options: ["Yuqoriga yaxlitlaydi", "Pastga yaxlitlaydi", "Eng yaqin songa yaxlitlaydi", "Sonni o'zgartirmaydi"],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "Math.ceil() nima qiladi?",
    options: ["Pastga yaxlitlaydi", "Eng yaqin songa", "Yuqoriga yaxlitlaydi", "Sonni o'zgartirmaydi"],
    correctAnswer: 2
  },
  {
    id: 80,
    question: "Math.round() nima qiladi?",
    options: ["Pastga yaxlitlaydi", "Yuqoriga yaxlitlaydi", "Sonni o'zgartirmaydi", "Eng yaqin butun songa"],
    correctAnswer: 3
  },
  {
    id: 81,
    question: "Math.max() nima qaytaradi?",
    options: ["Eng katta qiymatni", "Eng kichik qiymatni", "O'rtacha qiymatni", "Birinchi qiymatni"],
    correctAnswer: 0
  },
  {
    id: 82,
    question: "Math.min() nima qaytaradi?",
    options: ["Eng katta qiymatni", "Eng kichik qiymatni", "O'rtacha qiymatni", "Oxirgi qiymatni"],
    correctAnswer: 1
  },
  {
    id: 83,
    question: "Math.abs() nima qaytaradi?",
    options: ["Manfiy son", "Nol", "Absolut qiymatni", "O'zgarmagan son"],
    correctAnswer: 2
  },
  {
    id: 84,
    question: "Math.pow(2, 3) nima qaytaradi?",
    options: ["5", "6", "9", "8"],
    correctAnswer: 3
  },
  {
    id: 85,
    question: "Math.sqrt(16) nima qaytaradi?",
    options: ["4", "8", "16", "2"],
    correctAnswer: 0
  },
  {
    id: 86,
    question: "parseInt('42px') nima qaytaradi?",
    options: ["'42px'", "42", "NaN", "null"],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "parseFloat('3.14abc') nima qaytaradi?",
    options: ["'3.14abc'", "NaN", "3.14", "3"],
    correctAnswer: 2
  },
  {
    id: 88,
    question: "isNaN('hello') nima qaytaradi?",
    options: ["false", "undefined", "null", "true"],
    correctAnswer: 3
  },
  {
    id: 89,
    question: "Number.isInteger(5.0) nima qaytaradi?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: 0
  },
  {
    id: 90,
    question: "Date.now() nima qaytaradi?",
    options: ["Hozirgi sana", "Joriy millisoniyalar", "Hozirgi yil", "Hozirgi oy"],
    correctAnswer: 1
  },
  {
    id: 91,
    question: "new Date().getFullYear() nima qaytaradi?",
    options: ["Hozirgi oy", "Hozirgi kun", "Joriy yil", "Hozirgi soat"],
    correctAnswer: 2
  },
  {
    id: 92,
    question: "new Date().getMonth() qanday qiymat qaytaradi?",
    options: ["1 dan 12 gacha", "Oy nomi", "Millisoniyalar", "0 dan 11 gacha"],
    correctAnswer: 3
  },
  {
    id: 93,
    question: "this kalit so'zi nima?",
    options: ["Joriy kontekst objekti", "Global o'zgaruvchi", "Funksiya nomi", "Massiv"],
    correctAnswer: 0
  },
  {
    id: 94,
    question: "class kalit so'zi nima uchun ishlatiladi?",
    options: ["O'zgaruvchi yaratish", "Klass (shablon) yaratish", "Funksiya yaratish", "Tsikl yaratish"],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "constructor metodi nima qiladi?",
    options: ["Klassni o'chiradi", "Klassni tanlaydi", "Klass yaratilganda ishga tushadi", "Klassni nusxalaydi"],
    correctAnswer: 2
  },
  {
    id: 96,
    question: "extends kalit so'zi nima qiladi?",
    options: ["Klassni o'chiradi", "Klassni tanlaydi", "Klassni nusxalaydi", "Klassdan meros oladi"],
    correctAnswer: 3
  },
  {
    id: 97,
    question: "super() nima uchun ishlatiladi?",
    options: ["Ota klass konstruktorini chaqiradi", "Klassni o'chiradi", "Klassni yaratadi", "Klassni tanlaydi"],
    correctAnswer: 0
  },
  {
    id: 98,
    question: "static metod nima?",
    options: ["Instance metodi", "Klassga tegishli metod", "Private metod", "Public metod"],
    correctAnswer: 1
  },
  {
    id: 99,
    question: "get va set kalit so'zlari nima uchun?",
    options: ["Tsikl yaratish", "Funksiya yaratish", "Getter va setter metodlar", "O'zgaruvchi yaratish"],
    correctAnswer: 2
  },
  {
    id: 100,
    question: "Symbol nima?",
    options: ["String turi", "Number turi", "Boolean turi", "Noyob identifikator turi"],
    correctAnswer: 3
  }
];

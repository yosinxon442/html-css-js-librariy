export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const htmlQuestions: Question[] = [
  {
    id: 1,
    question: "HTML ning to'liq nomi nima?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Qaysi teg sarlavha uchun ishlatiladi?",
    options: ["<head>", "<header>", "<title>", "<h1>"],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "Inline va Block elementlar farqi nimada?",
    options: [
      "Inline yangi qatordan boshlanadi, Block esa yo'q",
      "Block yangi qatordan boshlanadi, Inline esa yo'q",
      "Farqi yo'q",
      "Ikkalasi ham yangi qatordan boshlanadi"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "<a> tegining href atributi nima uchun ishlatiladi?",
    options: ["Rasmni ko'rsatish uchun", "Matn rangini o'zgartirish uchun", "Havola manzilini ko'rsatish uchun", "Jadval yaratish uchun"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Qaysi teg rasm joylashtirish uchun ishlatiladi?",
    options: ["<img>", "<picture>", "<image>", "<photo>"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "HTML hujjatning tuzilishi qanday boshlanadi?",
    options: ["<html>", "<head>", "<body>", "<!DOCTYPE html>"],
    correctAnswer: 3
  },
  {
    id: 7,
    question: "Qaysi teg tartibsiz ro'yxat yaratadi?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Qaysi teg jadval qatori yaratadi?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "<br> tegi nima uchun ishlatiladi?",
    options: ["Yangi qatorga o'tish", "Bo'sh joy qo'shish", "Qalin matn", "Havola yaratish"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Qaysi atribut rasmga alternativ matn qo'shadi?",
    options: ["src", "title", "href", "alt"],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "Forma yaratish uchun qaysi teg ishlatiladi?",
    options: ["<input>", "<form>", "<button>", "<select>"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "<div> tegi qanday element?",
    options: ["Inline", "Inline-block", "Block", "Flex"],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "<span> tegi qanday element?",
    options: ["Inline", "Block", "Table", "List"],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "Qaysi teg qalin matn yaratadi?",
    options: ["<i>", "<u>", "<s>", "<b>"],
    correctAnswer: 3
  },
  {
    id: 15,
    question: "Qaysi teg kursiv matn yaratadi?",
    options: ["<b>", "<i>", "<u>", "<em>"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "HTML5 da yangi semantik teglar qaysilar?",
    options: ["<div>, <span>", "<table>, <tr>", "<header>, <footer>, <nav>", "<p>, <br>"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "<meta> tegi qayerda joylashadi?",
    options: ["<head> ichida", "<body> ichida", "<footer> ichida", "<div> ichida"],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Qaysi teg video joylashtirish uchun ishlatiladi?",
    options: ["<media>", "<movie>", "<film>", "<video>"],
    correctAnswer: 3
  },
  {
    id: 19,
    question: "Qaysi teg audio joylashtirish uchun ishlatiladi?",
    options: ["<sound>", "<audio>", "<music>", "<mp3>"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "<input type='text'> nima yaratadi?",
    options: ["Tugma", "Havola", "Matn kiritish maydoni", "Rasm"],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "Qaysi atribut forma yuborilganda ma'lumot nomini belgilaydi?",
    options: ["name", "id", "class", "value"],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "<select> tegi nima yaratadi?",
    options: ["Matn maydoni", "Tugma", "Jadval", "Tanlash ro'yxati"],
    correctAnswer: 3
  },
  {
    id: 23,
    question: "Qaysi teg HTML izohlarini yaratadi?",
    options: ["// izoh", "<!-- izoh -->", "/* izoh */", "# izoh"],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "<textarea> tegi nima uchun ishlatiladi?",
    options: ["Ko'p qatorli matn kiritish", "Bir qatorli matn kiritish", "Havola yaratish", "Rasm joylashtirish"],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "Qaysi atribut havolani yangi oynada ochadi?",
    options: ["target='_self'", "target='_new'", "target='_blank'", "target='_open'"],
    correctAnswer: 2
  },
  {
    id: 26,
    question: "<hr> tegi nima qiladi?",
    options: ["Sarlavha yaratadi", "Havola yaratadi", "Ro'yxat yaratadi", "Gorizontal chiziq chizadi"],
    correctAnswer: 3
  },
  {
    id: 27,
    question: "Qaysi teg asosiy kontentni bildiradi?",
    options: ["<main>", "<div>", "<section>", "<article>"],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "<nav> tegi nima uchun ishlatiladi?",
    options: ["Jadval uchun", "Navigatsiya uchun", "Rasm uchun", "Video uchun"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "<article> tegi qachon ishlatiladi?",
    options: ["Faqat jadvallar uchun", "Faqat ro'yxatlar uchun", "Mustaqil kontent uchun", "Faqat rasmlar uchun"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Qaysi teg qo'shimcha ma'lumot uchun ishlatiladi?",
    options: ["<main>", "<header>", "<footer>", "<aside>"],
    correctAnswer: 3
  },
  {
    id: 31,
    question: "<figure> tegi nima uchun ishlatiladi?",
    options: ["Rasm va uning tavsifi uchun", "Faqat matn uchun", "Faqat jadval uchun", "Faqat havola uchun"],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "<figcaption> tegi qayerda ishlatiladi?",
    options: ["<div> ichida", "<figure> ichida", "<table> ichida", "<form> ichida"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "Qaysi input turi parol uchun ishlatiladi?",
    options: ["text", "hidden", "password", "secret"],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "Qaysi input turi email uchun ishlatiladi?",
    options: ["email", "text", "mail", "e-mail"],
    correctAnswer: 0
  },
  {
    id: 35,
    question: "Qaysi input turi raqam uchun ishlatiladi?",
    options: ["digit", "num", "integer", "number"],
    correctAnswer: 3
  },
  {
    id: 36,
    question: "<label> tegi nima uchun ishlatiladi?",
    options: ["Tugma yaratish", "Input uchun yorliq", "Havola yaratish", "Jadval yaratish"],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "Qaysi atribut inputni majburiy qiladi?",
    options: ["must", "needed", "required", "mandatory"],
    correctAnswer: 2
  },
  {
    id: 38,
    question: "<button type='submit'> nima qiladi?",
    options: ["Formani yuboradi", "Formani tozalaydi", "Sahifani yangilaydi", "Oynani yopadi"],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "Qaysi teg tartibli ro'yxat yaratadi?",
    options: ["<ul>", "<dl>", "<li>", "<ol>"],
    correctAnswer: 3
  },
  {
    id: 40,
    question: "<dl> tegi nima yaratadi?",
    options: ["Tartibli ro'yxat", "Ta'riflar ro'yxati", "Tartibsiz ro'yxat", "Jadval"],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "<dt> va <dd> teglari qayerda ishlatiladi?",
    options: ["<ul> ichida", "<ol> ichida", "<dl> ichida", "<table> ichida"],
    correctAnswer: 2
  },
  {
    id: 42,
    question: "Qaysi teg jadval sarlavhasini yaratadi?",
    options: ["<th>", "<td>", "<tr>", "<thead>"],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "<thead>, <tbody>, <tfoot> nima uchun ishlatiladi?",
    options: ["Formalar uchun", "Ro'yxatlar uchun", "Havolalar uchun", "Jadval tuzilishi uchun"],
    correctAnswer: 3
  },
  {
    id: 44,
    question: "colspan atributi nima qiladi?",
    options: ["Qatorlarni birlashtiradi", "Ustunlarni birlashtiradi", "Jadval yaratadi", "Rang o'zgartiradi"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "rowspan atributi nima qiladi?",
    options: ["Ustunlarni birlashtiradi", "Jadval yaratadi", "Qatorlarni birlashtiradi", "Rang o'zgartiradi"],
    correctAnswer: 2
  },
  {
    id: 46,
    question: "<iframe> tegi nima uchun ishlatiladi?",
    options: ["Boshqa sahifani joylashtirish uchun", "Rasm uchun", "Video uchun", "Audio uchun"],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "Qaysi atribut elementga noyob identifikator beradi?",
    options: ["class", "name", "style", "id"],
    correctAnswer: 3
  },
  {
    id: 48,
    question: "Qaysi atribut elementga CSS klassi beradi?",
    options: ["id", "class", "style", "name"],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "style atributi nima uchun ishlatiladi?",
    options: ["JavaScript uchun", "Havola uchun", "Inline CSS uchun", "Rasm uchun"],
    correctAnswer: 2
  },
  {
    id: 50,
    question: "Qaysi teg CSS faylini ulash uchun ishlatiladi?",
    options: ["<link>", "<style>", "<css>", "<script>"],
    correctAnswer: 0
  },
  {
    id: 51,
    question: "<script> tegi nima uchun ishlatiladi?",
    options: ["CSS uchun", "Rasm uchun", "Video uchun", "JavaScript uchun"],
    correctAnswer: 3
  },
  {
    id: 52,
    question: "defer atributi <script> tegida nima qiladi?",
    options: ["Skriptni bloklab qo'yadi", "Skriptni DOM yuklangandan keyin bajaradi", "Skriptni o'chiradi", "Skriptni takrorlaydi"],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "async atributi <script> tegida nima qiladi?",
    options: ["Skriptni sinxron yuklaydi", "Skriptni o'chiradi", "Skriptni asinxron yuklaydi", "Skriptni kechiktiradi"],
    correctAnswer: 2
  },
  {
    id: 54,
    question: "<noscript> tegi qachon ko'rsatiladi?",
    options: ["JavaScript o'chirilganda", "Doim", "CSS o'chirilganda", "Hech qachon"],
    correctAnswer: 0
  },
  {
    id: 55,
    question: "Qaysi teg matnni belgilash (highlight) uchun ishlatiladi?",
    options: ["<highlight>", "<em>", "<strong>", "<mark>"],
    correctAnswer: 3
  },
  {
    id: 56,
    question: "<time> tegi nima uchun ishlatiladi?",
    options: ["Vaqt ko'rsatish uchun", "Sana va vaqtni semantik belgilash uchun", "Timer yaratish uchun", "Soat yaratish uchun"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "<progress> tegi nima yaratadi?",
    options: ["Jadval", "Havola", "Progress bar", "Tugma"],
    correctAnswer: 2
  },
  {
    id: 58,
    question: "<meter> tegi nima uchun ishlatiladi?",
    options: ["O'lchov ko'rsatish uchun", "Vaqt uchun", "Rasm uchun", "Video uchun"],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "<details> va <summary> teglari nima yaratadi?",
    options: ["Jadval", "Ro'yxat", "Forma", "Yopiluvchi kontent"],
    correctAnswer: 3
  },
  {
    id: 60,
    question: "<datalist> tegi nima uchun ishlatiladi?",
    options: ["Ma'lumotlar bazasi uchun", "Input uchun taklif ro'yxati", "Jadval uchun", "Ro'yxat uchun"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: "Qaysi input turi rang tanlash uchun ishlatiladi?",
    options: ["rgb", "hex", "color", "palette"],
    correctAnswer: 2
  },
  {
    id: 62,
    question: "Qaysi input turi sana tanlash uchun ishlatiladi?",
    options: ["date", "calendar", "day", "time"],
    correctAnswer: 0
  },
  {
    id: 63,
    question: "Qaysi input turi diapazon (slider) yaratadi?",
    options: ["slider", "scale", "bar", "range"],
    correctAnswer: 3
  },
  {
    id: 64,
    question: "Qaysi input turi fayl yuklash uchun ishlatiladi?",
    options: ["upload", "file", "document", "attach"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "accept atributi <input type='file'> da nima qiladi?",
    options: ["Faylni yuboradi", "Faylni o'chiradi", "Qabul qilinadigan fayl turlarini belgilaydi", "Fayl nomini o'zgartiradi"],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "multiple atributi nima qiladi?",
    options: ["Bir nechta qiymat tanlashga ruxsat beradi", "Faqat bitta qiymat", "Formani yuboradi", "Maydonni tozalaydi"],
    correctAnswer: 0
  },
  {
    id: 67,
    question: "placeholder atributi nima qiladi?",
    options: ["Maydonni to'ldiradi", "Maydonni bloklaydi", "Qiymatni saqlaydi", "Ko'rsatma matnini ko'rsatadi"],
    correctAnswer: 3
  },
  {
    id: 68,
    question: "autofocus atributi nima qiladi?",
    options: ["Maydonni yashiradi", "Sahifa yuklanganda fokus beradi", "Maydonni o'chiradi", "Maydonni kattalashtiradi"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "disabled atributi nima qiladi?",
    options: ["Elementni faollashtiradi", "Elementni yashiradi", "Elementni nofaol qiladi", "Elementni o'chiradi"],
    correctAnswer: 2
  },
  {
    id: 70,
    question: "readonly atributi nima qiladi?",
    options: ["Faqat o'qish rejimini yoqadi", "Elementni yashiradi", "Elementni o'chiradi", "Elementni kattalashtiradi"],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "maxlength atributi nima qiladi?",
    options: ["Minimal uzunlikni belgilaydi", "Matn o'lchamini belgilaydi", "Shrift o'lchamini belgilaydi", "Maksimal uzunlikni belgilaydi"],
    correctAnswer: 3
  },
  {
    id: 72,
    question: "min va max atributlari qayerda ishlatiladi?",
    options: ["Matn maydonida", "Raqam/sana inputlarida", "Havolalarda", "Rasmlarda"],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "pattern atributi nima uchun ishlatiladi?",
    options: ["Rang uchun", "Hajm uchun", "Regex validatsiya uchun", "Pozitsiya uchun"],
    correctAnswer: 2
  },
  {
    id: 74,
    question: "<fieldset> tegi nima uchun ishlatiladi?",
    options: ["Forma elementlarini guruhlash", "Jadval yaratish", "Rasm joylashtirish", "Havola yaratish"],
    correctAnswer: 0
  },
  {
    id: 75,
    question: "<legend> tegi qayerda ishlatiladi?",
    options: ["<table> ichida", "<div> ichida", "<form> ichida", "<fieldset> ichida"],
    correctAnswer: 3
  },
  {
    id: 76,
    question: "<optgroup> tegi nima uchun ishlatiladi?",
    options: ["Input guruhlash", "<select> variantlarini guruhlash", "Tugmalarni guruhlash", "Havolalarni guruhlash"],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "Qaysi teg dialogbox yaratish uchun ishlatiladi?",
    options: ["<modal>", "<popup>", "<dialog>", "<window>"],
    correctAnswer: 2
  },
  {
    id: 78,
    question: "<canvas> tegi nima uchun ishlatiladi?",
    options: ["Grafika chizish uchun", "Matn uchun", "Video uchun", "Audio uchun"],
    correctAnswer: 0
  },
  {
    id: 79,
    question: "<svg> tegi nima uchun ishlatiladi?",
    options: ["Video uchun", "Audio uchun", "Matn uchun", "Vektor grafika uchun"],
    correctAnswer: 3
  },
  {
    id: 80,
    question: "data-* atributlari nima uchun ishlatiladi?",
    options: ["CSS uchun", "Maxsus ma'lumot saqlash uchun", "Video uchun", "Audio uchun"],
    correctAnswer: 1
  },
  {
    id: 81,
    question: "contenteditable atributi nima qiladi?",
    options: ["Kontentni o'chirib qo'yadi", "Kontentni yashiradi", "Kontentni tahrirlash mumkin qiladi", "Kontentni ko'chiradi"],
    correctAnswer: 2
  },
  {
    id: 82,
    question: "draggable atributi nima qiladi?",
    options: ["Elementni sudrab olib o'tish mumkin qiladi", "Elementni aylantirib qo'yadi", "Elementni yashiradi", "Elementni o'chiradi"],
    correctAnswer: 0
  },
  {
    id: 83,
    question: "hidden atributi nima qiladi?",
    options: ["Elementni ko'rsatadi", "Elementni o'zgartiradi", "Elementni ko'chiradi", "Elementni yashiradi"],
    correctAnswer: 3
  },
  {
    id: 84,
    question: "spellcheck atributi nima qiladi?",
    options: ["Imlo tekshiruvini yoqadi/o'chiradi", "Shriftni o'zgartiradi", "Rangni o'zgartiradi", "Hajmni o'zgartiradi"],
    correctAnswer: 0
  },
  {
    id: 85,
    question: "tabindex atributi nima uchun ishlatiladi?",
    options: ["Jadval indeksi", "Tab tartibini belgilash", "Rang indeksi", "Shrift indeksi"],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "accesskey atributi nima qiladi?",
    options: ["Kalit so'z beradi", "Parol beradi", "Klaviatura yorlig'i beradi", "ID beradi"],
    correctAnswer: 2
  },
  {
    id: 87,
    question: "<abbr> tegi nima uchun ishlatiladi?",
    options: ["Qisqartma uchun", "Havola uchun", "Rasm uchun", "Video uchun"],
    correctAnswer: 0
  },
  {
    id: 88,
    question: "<address> tegi nima uchun ishlatiladi?",
    options: ["Jadval uchun", "Ro'yxat uchun", "Forma uchun", "Manzil ma'lumotlari uchun"],
    correctAnswer: 3
  },
  {
    id: 89,
    question: "<blockquote> tegi nima uchun ishlatiladi?",
    options: ["Kod uchun", "Iqtibos uchun", "Havola uchun", "Rasm uchun"],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "<cite> tegi nima uchun ishlatiladi?",
    options: ["Kod uchun", "Rasm uchun", "Manba nomi uchun", "Havola uchun"],
    correctAnswer: 2
  },
  {
    id: 91,
    question: "<code> tegi nima uchun ishlatiladi?",
    options: ["Kompyuter kodi uchun", "Matn uchun", "Havola uchun", "Rasm uchun"],
    correctAnswer: 0
  },
  {
    id: 92,
    question: "<pre> tegi nima qiladi?",
    options: ["Matnni formatlaydi", "Rasmni ko'rsatadi", "Havola yaratadi", "Oldindan formatlangan matnni saqlaydi"],
    correctAnswer: 3
  },
  {
    id: 93,
    question: "<kbd> tegi nima uchun ishlatiladi?",
    options: ["Kod uchun", "Klaviatura kiritishi uchun", "Havola uchun", "Rasm uchun"],
    correctAnswer: 1
  },
  {
    id: 94,
    question: "<samp> tegi nima uchun ishlatiladi?",
    options: ["Kod uchun", "Havola uchun", "Dastur chiqishi uchun", "Rasm uchun"],
    correctAnswer: 2
  },
  {
    id: 95,
    question: "<var> tegi nima uchun ishlatiladi?",
    options: ["O'zgaruvchi uchun", "Havola uchun", "Rasm uchun", "Audio uchun"],
    correctAnswer: 0
  },
  {
    id: 96,
    question: "<wbr> tegi nima qiladi?",
    options: ["Havola yaratadi", "Rasm ko'rsatadi", "Audio o'ynaydi", "So'z uzilish nuqtasini bildiradi"],
    correctAnswer: 3
  },
  {
    id: 97,
    question: "<bdi> tegi nima uchun ishlatiladi?",
    options: ["Matn yo'nalishini izolyatsiya qilish", "Havola uchun", "Rasm uchun", "Audio uchun"],
    correctAnswer: 0
  },
  {
    id: 98,
    question: "<bdo> tegi nima uchun ishlatiladi?",
    options: ["Havola uchun", "Matn yo'nalishini o'zgartirish", "Rasm uchun", "Audio uchun"],
    correctAnswer: 1
  },
  {
    id: 99,
    question: "dir atributi nima qiladi?",
    options: ["Rang beradi", "Hajm beradi", "Matn yo'nalishini belgilaydi", "Shrift beradi"],
    correctAnswer: 2
  },
  {
    id: 100,
    question: "lang atributi nima uchun ishlatiladi?",
    options: ["Tilni belgilash uchun", "Rangni belgilash uchun", "Hajmni belgilash uchun", "Shriftni belgilash uchun"],
    correctAnswer: 0
  }
];

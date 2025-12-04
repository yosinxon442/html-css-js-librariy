import { Question } from './htmlQuestions';

export const cssQuestions: Question[] = [
  {
    id: 1,
    question: "CSS ning to'liq nomi nima?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "CSS ni HTML ga qanday ulash mumkin?",
    options: ["Faqat inline", "Faqat internal", "Faqat external", "Inline, internal va external"],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "Qaysi CSS selektori ID ni tanlaydi?",
    options: [".myid", "*myid", "#myid", "myid"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Qaysi CSS selektori klassni tanlaydi?",
    options: [".myclass", "#myclass", "*myclass", "myclass"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "CSS da rang qanday belgilanadi?",
    options: ["Faqat nom bilan", "Faqat hex bilan", "Faqat RGB bilan", "Nom, hex, RGB, HSL"],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "margin xossasi nima qiladi?",
    options: ["Ichki bo'shliq", "Chegara", "Tashqi bo'shliq", "Rang"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "padding xossasi nima qiladi?",
    options: ["Ichki bo'shliq", "Tashqi bo'shliq", "Chegara", "Rang"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "border xossasi nima yaratadi?",
    options: ["Bo'shliq", "Chegara", "Fon", "Matn"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "display: none va visibility: hidden farqi?",
    options: ["Farqi yo'q", "Ikkalasi ham joy egallaydi", "none - joy egallamas, hidden - egallaydi", "hidden - joy egallamas"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "position: relative nima qiladi?",
    options: ["Oqimdan chiqaradi", "Ekranga nisbatan", "Ota elementga nisbatan", "O'z joyiga nisbatan siljitadi"],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "position: absolute nima qiladi?",
    options: ["Positioned ota elementga nisbatan", "O'z joyiga nisbatan", "Ekranga nisbatan", "Statik qiladi"],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "position: fixed nima qiladi?",
    options: ["Ota elementga nisbatan", "Viewport (ekran)ga nisbatan", "O'z joyiga nisbatan", "Statik qiladi"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "z-index xossasi nima belgilaydi?",
    options: ["Balandlik", "Kenglik", "Qatlam tartibini", "Rang"],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Flexbox ni yoqish uchun qaysi xossa?",
    options: ["display: block", "display: inline", "display: grid", "display: flex"],
    correctAnswer: 3
  },
  {
    id: 15,
    question: "justify-content xossasi nima qiladi?",
    options: ["Gorizontal joylashishni boshqaradi", "Vertikal joylashish", "Rangni o'zgartiradi", "O'lchamni o'zgartiradi"],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "align-items xossasi nima qiladi?",
    options: ["Gorizontal joylashish", "Vertikal joylashishni boshqaradi", "Rangni o'zgartiradi", "O'lchamni o'zgartiradi"],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "flex-direction: row nima qiladi?",
    options: ["Vertikal joylashtiradi", "Yashiradi", "Gorizontal joylashtiradi", "O'chiradi"],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "flex-wrap xossasi nima qiladi?",
    options: ["Rangni o'zgartiradi", "O'lchamni o'zgartiradi", "Pozitsiyani o'zgartiradi", "Yangi qatorga o'tkazishni boshqaradi"],
    correctAnswer: 3
  },
  {
    id: 19,
    question: "CSS Grid ni yoqish uchun qaysi xossa?",
    options: ["display: grid", "display: flex", "display: block", "display: table"],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "grid-template-columns nima belgilaydi?",
    options: ["Qator sonini", "Ustun sonini va o'lchamlarini", "Rangni", "Bo'shliqni"],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "grid-template-rows nima belgilaydi?",
    options: ["Ustun sonini", "Rangni", "Qator sonini va o'lchamlarini", "Bo'shliqni"],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "gap xossasi Grid/Flexbox da nima qiladi?",
    options: ["Rang beradi", "O'lchamni belgilaydi", "Pozitsiyani belgilaydi", "Elementlar orasidagi bo'shliq"],
    correctAnswer: 3
  },
  {
    id: 23,
    question: "background-color xossasi nima o'zgartiradi?",
    options: ["Fon rangini", "Matn rangini", "Chegara rangini", "Soya rangini"],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "background-image xossasi nima uchun?",
    options: ["Matn qo'shish", "Fon rasmini qo'shish", "Chegara qo'shish", "Soya qo'shish"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "background-size: cover nima qiladi?",
    options: ["Rasmni takrorlaydi", "Rasmni kichraytiradi", "Butun konteynerga moslashtiradi", "Rasmni o'chiradi"],
    correctAnswer: 2
  },
  {
    id: 26,
    question: "font-family xossasi nima o'zgartiradi?",
    options: ["Shrift hajmini", "Shrift rangini", "Shrift qalinligini", "Shrift turini"],
    correctAnswer: 3
  },
  {
    id: 27,
    question: "font-size xossasi nima o'zgartiradi?",
    options: ["Shrift hajmini", "Shrift turini", "Shrift rangini", "Shrift uslubini"],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "font-weight xossasi nima o'zgartiradi?",
    options: ["Shrift hajmini", "Shrift qalinligini", "Shrift rangini", "Shrift turini"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "text-align xossasi nima qiladi?",
    options: ["Vertikal tekislash", "Rang o'zgartirish", "Gorizontal tekislash", "Hajm o'zgartirish"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "text-decoration xossasi nima uchun?",
    options: ["Rangni o'zgartirish", "Hajmni o'zgartirish", "Shriftni o'zgartirish", "Chiziqlar qo'shish (tag, ust)"],
    correctAnswer: 3
  },
  {
    id: 31,
    question: "line-height xossasi nima belgilaydi?",
    options: ["Qator balandligini", "Matn rangini", "Matn hajmini", "Matn kengligini"],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "letter-spacing xossasi nima qiladi?",
    options: ["Qator oralig'ini", "Harflar oralig'ini", "So'zlar oralig'ini", "Paragraf oralig'ini"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "word-spacing xossasi nima qiladi?",
    options: ["Harflar oralig'ini", "Qator oralig'ini", "So'zlar oralig'ini", "Paragraf oralig'ini"],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "text-transform: uppercase nima qiladi?",
    options: ["Kichik harflarga", "Birinchi harfni kattalashtiradi", "Matnni o'chiradi", "Katta harflarga"],
    correctAnswer: 3
  },
  {
    id: 35,
    question: "width va max-width farqi nimada?",
    options: ["width - aniq, max-width - maksimal chegara", "Farqi yo'q", "max-width - aniq o'lcham", "Ikkalasi ham aniq"],
    correctAnswer: 0
  },
  {
    id: 36,
    question: "height va min-height farqi nimada?",
    options: ["Farqi yo'q", "height - aniq, min-height - minimal", "min-height - aniq o'lcham", "Ikkalasi ham aniq"],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "box-sizing: border-box nima qiladi?",
    options: ["Padding va borderni qo'shadi", "Faqat borderni hisobga oladi", "Padding va borderni ichiga kiritadi", "Faqat paddingni hisobga oladi"],
    correctAnswer: 2
  },
  {
    id: 38,
    question: "overflow: hidden nima qiladi?",
    options: ["Toshgan kontentni ko'rsatadi", "Skroll qo'shadi", "Kontentni kengaytiradi", "Toshgan kontentni yashiradi"],
    correctAnswer: 3
  },
  {
    id: 39,
    question: "overflow: scroll nima qiladi?",
    options: ["Doim skroll qo'shadi", "Kontentni yashiradi", "Kerak bo'lganda skroll", "Kontentni o'chiradi"],
    correctAnswer: 0
  },
  {
    id: 40,
    question: "overflow: auto nima qiladi?",
    options: ["Doim skroll qo'shadi", "Kerak bo'lganda skroll qo'shadi", "Kontentni yashiradi", "Kontentni o'chiradi"],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "border-radius xossasi nima yaratadi?",
    options: ["To'g'ri burchaklar", "Chegara rangi", "Yumaloq burchaklar", "Chegara qalinligi"],
    correctAnswer: 2
  },
  {
    id: 42,
    question: "box-shadow xossasi nima qo'shadi?",
    options: ["Matn soyasi", "Chegara", "Fon rangi", "Element soyasi"],
    correctAnswer: 3
  },
  {
    id: 43,
    question: "text-shadow xossasi nima qo'shadi?",
    options: ["Matn soyasi", "Element soyasi", "Chegara", "Fon rangi"],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "opacity xossasi nima belgilaydi?",
    options: ["Rangni", "Shaffoflikni", "Hajmni", "Pozitsiyani"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "transition xossasi nima uchun ishlatiladi?",
    options: ["Animatsiya yaratish", "Rang o'zgartirish", "Silliq o'tish effekti", "Pozitsiya o'zgartirish"],
    correctAnswer: 2
  },
  {
    id: 46,
    question: "animation xossasi nima uchun ishlatiladi?",
    options: ["Silliq o'tish uchun", "Rang o'zgartirish", "Hajm o'zgartirish", "Murakkab animatsiyalar"],
    correctAnswer: 3
  },
  {
    id: 47,
    question: "@keyframes nima uchun ishlatiladi?",
    options: ["Animatsiya bosqichlarini belgilash", "Shrift ulash", "Media query", "Import qilish"],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "transform: rotate() nima qiladi?",
    options: ["Elementni siljitadi", "Elementni aylantiradi", "Kattalashtiradi", "Yashiradi"],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "transform: scale() nima qiladi?",
    options: ["Aylantiradi", "Siljitadi", "Kattalashtiradi/kichraytiradi", "Yashiradi"],
    correctAnswer: 2
  },
  {
    id: 50,
    question: "transform: translate() nima qiladi?",
    options: ["Aylantiradi", "Kattalashtiradi", "Yashiradi", "Siljitadi"],
    correctAnswer: 3
  },
  {
    id: 51,
    question: "transform: skew() nima qiladi?",
    options: ["Qiyshaytirib qo'yadi", "Aylantiradi", "Siljitadi", "Kattalashtiradi"],
    correctAnswer: 0
  },
  {
    id: 52,
    question: ":hover pseudo-klassi qachon ishlatiladi?",
    options: ["Bosilganda", "Sichqoncha ustiga kelganda", "Fokus olganda", "Yuklanganda"],
    correctAnswer: 1
  },
  {
    id: 53,
    question: ":active pseudo-klassi qachon ishlatiladi?",
    options: ["Sichqoncha ustiga kelganda", "Fokus olganda", "Bosilganda", "Yuklanganda"],
    correctAnswer: 2
  },
  {
    id: 54,
    question: ":focus pseudo-klassi qachon ishlatiladi?",
    options: ["Sichqoncha ustiga kelganda", "Bosilganda", "Yuklanganda", "Element fokus olganda"],
    correctAnswer: 3
  },
  {
    id: 55,
    question: ":first-child pseudo-klassi nimani tanlaydi?",
    options: ["Birinchi bolani", "Oxirgi bolani", "Barcha bolalarni", "Ota elementni"],
    correctAnswer: 0
  },
  {
    id: 56,
    question: ":last-child pseudo-klassi nimani tanlaydi?",
    options: ["Birinchi bolani", "Oxirgi bolani", "Barcha bolalarni", "Ota elementni"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: ":nth-child(odd) nimani tanlaydi?",
    options: ["Juft elementlarni", "Birinchi elementni", "Toq elementlarni", "Oxirgi elementni"],
    correctAnswer: 2
  },
  {
    id: 58,
    question: "::before pseudo-elementi nima qiladi?",
    options: ["Elementdan keyin kontent", "Elementni yashiradi", "Elementni o'chiradi", "Elementdan oldin kontent"],
    correctAnswer: 3
  },
  {
    id: 59,
    question: "::after pseudo-elementi nima qiladi?",
    options: ["Elementdan keyin kontent qo'shadi", "Elementdan oldin kontent", "Elementni yashiradi", "Elementni o'chiradi"],
    correctAnswer: 0
  },
  {
    id: 60,
    question: "content xossasi qayerda ishlatiladi?",
    options: ["Har qanday elementda", "Faqat ::before va ::after da", "Faqat div da", "Faqat span da"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: "@media query nima uchun ishlatiladi?",
    options: ["Shrift ulash", "Animatsiya uchun", "Responsive dizayn uchun", "Rang o'zgartirish"],
    correctAnswer: 2
  },
  {
    id: 62,
    question: "@media (max-width: 768px) qachon ishlaydi?",
    options: ["Ekran 768px dan katta", "Doim ishlaydi", "Hech qachon ishlamaydi", "Ekran 768px dan kichik"],
    correctAnswer: 3
  },
  {
    id: 63,
    question: "@media (min-width: 768px) qachon ishlaydi?",
    options: ["Ekran 768px dan katta bo'lganda", "Ekran 768px dan kichik", "Doim ishlaydi", "Hech qachon"],
    correctAnswer: 0
  },
  {
    id: 64,
    question: "vw birligi nimani bildiradi?",
    options: ["Viewport height", "Viewport width", "Em", "Rem"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "vh birligi nimani bildiradi?",
    options: ["Viewport width", "Em", "Viewport height", "Rem"],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "rem birligi nimaga nisbatan hisoblanadi?",
    options: ["Ota elementga", "Body ga", "Viewport ga", "Root elementga (html)"],
    correctAnswer: 3
  },
  {
    id: 67,
    question: "em birligi nimaga nisbatan hisoblanadi?",
    options: ["Ota elementga", "Root elementga", "Viewport ga", "Body ga"],
    correctAnswer: 0
  },
  {
    id: 68,
    question: "calc() funksiyasi nima uchun ishlatiladi?",
    options: ["Rang hisoblash", "CSS da matematik hisob-kitob", "Animatsiya", "Shrift tanlash"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "var() funksiyasi nima uchun ishlatiladi?",
    options: ["Rang hisoblash", "Animatsiya yaratish", "O'zgaruvchi qiymatini olish", "Shrift tanlash"],
    correctAnswer: 2
  },
  {
    id: 70,
    question: "CSS o'zgaruvchilari qanday e'lon qilinadi?",
    options: ["$variable", "@variable", "var-variable", "--variable"],
    correctAnswer: 3
  },
  {
    id: 71,
    question: ":root pseudo-klassi nimani tanlaydi?",
    options: ["HTML elementini (eng yuqori)", "Body elementini", "Head elementini", "Div elementini"],
    correctAnswer: 0
  },
  {
    id: 72,
    question: "Specificity tartibida qaysi eng kuchli?",
    options: ["Class", "ID", "Element", "Universal"],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "!important nima qiladi?",
    options: ["Xossani o'chiradi", "Xossani yashiradi", "Eng yuqori prioritet beradi", "Xossani ikkilantiradi"],
    correctAnswer: 2
  },
  {
    id: 74,
    question: "Cascading CSS da nimani bildiradi?",
    options: ["Ranglarni", "Animatsiyalarni", "Shriftlarni", "Uslublar ierarxiyasi"],
    correctAnswer: 3
  },
  {
    id: 75,
    question: "inherit qiymati nima qiladi?",
    options: ["Ota elementdan meros oladi", "Xossani o'chiradi", "Standart qiymatni qo'yadi", "Xossani yashiradi"],
    correctAnswer: 0
  },
  {
    id: 76,
    question: "initial qiymati nima qiladi?",
    options: ["Ota elementdan meros oladi", "Standart qiymatni qaytaradi", "Xossani o'chiradi", "Xossani yashiradi"],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "cursor: pointer nima qiladi?",
    options: ["Kursorni yashiradi", "Kursorni kattalashtiradi", "Kursorni qo'l shaklida ko'rsatadi", "Kursorni o'chiradi"],
    correctAnswer: 2
  },
  {
    id: 78,
    question: "pointer-events: none nima qiladi?",
    options: ["Kursorni o'zgartiradi", "Rangni o'zgartiradi", "Hajmni o'zgartiradi", "Sichqoncha hodisalarini o'chiradi"],
    correctAnswer: 3
  },
  {
    id: 79,
    question: "user-select: none nima qiladi?",
    options: ["Matn tanlashni bloklaydi", "Elementni yashiradi", "Elementni o'chiradi", "Elementni kattalashtiradi"],
    correctAnswer: 0
  },
  {
    id: 80,
    question: "filter: blur() nima qiladi?",
    options: ["Rangni o'zgartiradi", "Elementni xiralash", "Hajmni o'zgartiradi", "Pozitsiyani o'zgartiradi"],
    correctAnswer: 1
  },
  {
    id: 81,
    question: "filter: grayscale() nima qiladi?",
    options: ["Rangni o'zgartiradi", "Xiralash qiladi", "Oq-qora qiladi", "Hajmni o'zgartiradi"],
    correctAnswer: 2
  },
  {
    id: 82,
    question: "mix-blend-mode nima uchun ishlatiladi?",
    options: ["Animatsiya uchun", "Shrift uchun", "Hajm uchun", "Ranglarni aralashtirish"],
    correctAnswer: 3
  },
  {
    id: 83,
    question: "backdrop-filter nima qiladi?",
    options: ["Orqa fonni filtrlaydi", "Matnni filtrlaydi", "Rasmni filtrlaydi", "Chegarani filtrlaydi"],
    correctAnswer: 0
  },
  {
    id: 84,
    question: "clip-path nima uchun ishlatiladi?",
    options: ["Rang uchun", "Elementni kesish/shakllash", "Animatsiya uchun", "Shrift uchun"],
    correctAnswer: 1
  },
  {
    id: 85,
    question: "object-fit: cover nima qiladi?",
    options: ["Rasmni takrorlaydi", "Rasmni o'chiradi", "Rasmni konteynerga moslashtiradi", "Rasmni kichraytiradi"],
    correctAnswer: 2
  },
  {
    id: 86,
    question: "aspect-ratio xossasi nima belgilaydi?",
    options: ["Rangni", "Hajmni", "Pozitsiyani", "Tomonlar nisbatini"],
    correctAnswer: 3
  },
  {
    id: 87,
    question: "writing-mode xossasi nima qiladi?",
    options: ["Matn yo'nalishini o'zgartiradi", "Matn rangini o'zgartiradi", "Matn hajmini o'zgartiradi", "Matn shriftini o'zgartiradi"],
    correctAnswer: 0
  },
  {
    id: 88,
    question: "scroll-behavior: smooth nima qiladi?",
    options: ["Skrollni bloklaydi", "Silliq skroll qiladi", "Skrollni tezlashtiradi", "Skrollni sekinlashtiradi"],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "scroll-snap-type nima uchun ishlatiladi?",
    options: ["Rang uchun", "Hajm uchun", "Skroll yopishishi uchun", "Pozitsiya uchun"],
    correctAnswer: 2
  },
  {
    id: 90,
    question: "place-items xossasi nima qiladi?",
    options: ["Rang beradi", "Hajm beradi", "Pozitsiya beradi", "align va justify ni birgalikda"],
    correctAnswer: 3
  },
  {
    id: 91,
    question: "gap xossasi margin dan qanday farq qiladi?",
    options: ["Faqat ichki bo'shliq beradi", "Tashqi bo'shliq beradi", "Farqi yo'q", "Ikkalasi ham bir xil"],
    correctAnswer: 0
  },
  {
    id: 92,
    question: "flex: 1 nima bildiradi?",
    options: ["flex-shrink: 1", "flex-grow: 1, flex-shrink: 1, flex-basis: 0", "flex-basis: 1", "flex-grow: 0"],
    correctAnswer: 1
  },
  {
    id: 93,
    question: "order xossasi Flexbox da nima qiladi?",
    options: ["Rangni o'zgartiradi", "Hajmni o'zgartiradi", "Element tartibini o'zgartiradi", "Pozitsiyani o'zgartiradi"],
    correctAnswer: 2
  },
  {
    id: 94,
    question: "align-self xossasi nima qiladi?",
    options: ["Barcha elementlarni tekislaydi", "Rang beradi", "Hajm beradi", "Bitta elementni tekislaydi"],
    correctAnswer: 3
  },
  {
    id: 95,
    question: "grid-area xossasi nima uchun ishlatiladi?",
    options: ["Element joyini belgilash", "Rang berish", "Hajm berish", "Animatsiya qilish"],
    correctAnswer: 0
  },
  {
    id: 96,
    question: "minmax() funksiyasi Grid da nima qiladi?",
    options: ["Rang beradi", "Min va max o'lcham belgilaydi", "Animatsiya qiladi", "Pozitsiya beradi"],
    correctAnswer: 1
  },
  {
    id: 97,
    question: "auto-fit va auto-fill farqi nimada?",
    options: ["Farqi yo'q", "Ikkalasi ham bir xil", "auto-fit bo'sh joyni to'ldiradi", "auto-fill bo'sh joyni to'ldiradi"],
    correctAnswer: 2
  },
  {
    id: 98,
    question: "repeat() funksiyasi Grid da nima qiladi?",
    options: ["Rangni takrorlaydi", "Animatsiyani takrorlaydi", "Pozitsiyani takrorlaydi", "Qator/ustunlarni takrorlaydi"],
    correctAnswer: 3
  },
  {
    id: 99,
    question: "fr birligi Grid da nimani bildiradi?",
    options: ["Fraction (qism) birligi", "Font ratio", "Flex ratio", "Fixed ratio"],
    correctAnswer: 0
  },
  {
    id: 100,
    question: "subgrid nima uchun ishlatiladi?",
    options: ["Rang uchun", "Ichki grid ota grid ga moslash", "Animatsiya uchun", "Hajm uchun"],
    correctAnswer: 1
  }
];

import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { Palette, ArrowLeft, BookOpen, Paintbrush, Box, Layout as LayoutIcon, Move, Sparkles, Type, Layers, Smartphone, Search, Eye, Blend, Grid3X3, Waves, MousePointer2, Shapes, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const topics = [
  {
    id: 'css-asoslari',
    title: "CSS asoslari",
    icon: Paintbrush,
    keywords: ['css', 'asoslar', 'kirish', 'syntax', 'stillar', 'style'],
    content: `CSS (Cascading Style Sheets) - HTML elementlarini bezash uchun ishlatiladi.

CSS qo'shish usullari:

1. Inline (elementda):
<p style="color: red; font-size: 16px;">Matn</p>

2. Internal (head ichida):
<style>
    p { color: red; }
</style>

3. External (alohida fayl):
<link rel="stylesheet" href="style.css">

Sintaksis:
selector {
    property: value;
    property2: value2;
}

Misol:
h1 {
    color: blue;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

Izohlar:
/* Bu izoh */

/* Ko'p qatorli
   izoh */

Muhimlik tartibi (Cascading):
1. !important (eng kuchli)
2. Inline stillar
3. ID selektorlar
4. Class selektorlar
5. Element selektorlar
6. Inherited (meros)`
  },
  {
    id: 'selektorlar',
    title: "Selektorlar",
    icon: Layers,
    keywords: ['selektor', 'selector', 'class', 'id', 'pseudo', 'hover', 'tanlash'],
    content: `Selektorlar - qaysi elementni stillash kerakligini bildiradi.

Asosiy selektorlar:
* { }              - barcha elementlar
p { }              - element selektori
.class-name { }    - klass selektori
#id-name { }       - ID selektori
[type="text"] { }  - atribut selektori

Kombinatsiyalar:
div p { }     - div ichidagi barcha p (descendant)
div > p { }   - faqat bevosita p bolalar (child)
div + p { }   - divdan keyingi birinchi p (adjacent)
div ~ p { }   - divdan keyingi barcha p (general)

Ko'p selektor:
h1, h2, h3 { color: blue; }

Pseudo-klasslar:
:hover      - ustiga kelganda
:active     - bosilganda
:focus      - fokus olganda
:visited    - tashrif buyurilgan havola
:first-child - birinchi bola
:last-child  - oxirgi bola
:nth-child(n)    - n-chi bola
:nth-child(odd)  - toq bolalar
:nth-child(even) - juft bolalar
:nth-child(3n)   - har 3-chi
:not(.class)     - classdan tashqari

Pseudo-elementlar:
::before    - oldin kontent
::after     - keyin kontent
::first-line - birinchi qator
::first-letter - birinchi harf
::selection - tanlangan matn
::placeholder - input placeholder

Misol:
.button:hover::after {
    content: ' →';
}`
  },
  {
    id: 'box-model',
    title: "Box Model",
    icon: Box,
    keywords: ['box', 'model', 'margin', 'padding', 'border', 'width', 'height', 'quti'],
    content: `Har bir element to'rtburchak quti sifatida ko'riladi.

Box Model qismlari (ichdan tashqariga):
1. content - kontent maydoni
2. padding - ichki bo'shliq
3. border - chegara
4. margin - tashqi bo'shliq

.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}

Padding/Margin shorthand:
padding: 10px;                /* barcha tomoni */
padding: 10px 20px;           /* yuqori-past, chap-o'ng */
padding: 10px 20px 15px;      /* yuqori, chap-o'ng, past */
padding: 10px 20px 15px 25px; /* yuqori, o'ng, past, chap */

Alohida:
padding-top: 10px;
padding-right: 20px;
padding-bottom: 15px;
padding-left: 25px;

Border:
border: 2px solid red;
border-width: 2px;
border-style: solid | dashed | dotted | double | none;
border-color: red;
border-radius: 10px; /* yumaloq burchaklar */

box-sizing (MUHIM!):
/* content-box (standart) - width faqat contentga */
/* border-box - width padding va border bilan */

* {
    box-sizing: border-box; /* tavsiya etiladi */
}

Outline (border tashqarisida):
outline: 2px solid blue;
outline-offset: 5px;`
  },
  {
    id: 'ranglar',
    title: "Ranglar",
    icon: Blend,
    keywords: ['rang', 'color', 'background', 'gradient', 'rgb', 'hex', 'hsl'],
    content: `CSS'da rang berish usullari.

Rang nomlari:
color: red;
color: blue;
color: transparent;

HEX (eng ko'p ishlatiladigan):
color: #ff0000;   /* qizil */
color: #f00;      /* qisqa */
color: #ff000080; /* shaffoflik bilan */

RGB:
color: rgb(255, 0, 0);         /* qizil */
color: rgba(255, 0, 0, 0.5);   /* 50% shaffof */

HSL (rang, to'yinganlik, yorug'lik):
color: hsl(0, 100%, 50%);      /* qizil */
color: hsla(0, 100%, 50%, 0.5);

Background:
background-color: #f5f5f5;
background-image: url('image.jpg');
background-size: cover | contain | 100% | 200px;
background-position: center | top left | 50% 50%;
background-repeat: no-repeat | repeat | repeat-x;
background-attachment: fixed | scroll;

Shorthand:
background: #f5f5f5 url('img.jpg') center/cover no-repeat;

Gradientlar:
/* Linear */
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, #ff0000, #0000ff);
background: linear-gradient(to bottom, red 0%, blue 50%, green 100%);

/* Radial */
background: radial-gradient(circle, red, blue);
background: radial-gradient(ellipse at center, red, blue);

/* Conic */
background: conic-gradient(red, yellow, green, blue, red);

Ko'p background:
background: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('image.jpg') center/cover;`
  },
  {
    id: 'flexbox',
    title: "Flexbox",
    icon: LayoutIcon,
    keywords: ['flex', 'flexbox', 'layout', 'joylashuv', 'align', 'justify'],
    content: `Flexbox - bir o'lchamli joylashuv tizimi.

Container xususiyatlari:
.container {
    display: flex;
    
    /* Yo'nalish */
    flex-direction: row;        /* chapdan o'ngga (standart) */
    flex-direction: row-reverse;
    flex-direction: column;     /* yuqoridan pastga */
    flex-direction: column-reverse;
    
    /* Asosiy o'q bo'ylab */
    justify-content: flex-start;   /* boshi */
    justify-content: flex-end;     /* oxiri */
    justify-content: center;       /* markaz */
    justify-content: space-between;/* orasida */
    justify-content: space-around; /* atrofida */
    justify-content: space-evenly; /* teng */
    
    /* Kesishma o'q bo'ylab */
    align-items: stretch;    /* cho'zilgan (standart) */
    align-items: flex-start;
    align-items: flex-end;
    align-items: center;
    align-items: baseline;
    
    /* Ko'p qatorli */
    flex-wrap: nowrap;  /* bir qatorda */
    flex-wrap: wrap;    /* keyingi qatorga */
    flex-wrap: wrap-reverse;
    
    /* Qatorlar orasida */
    align-content: flex-start;
    align-content: center;
    align-content: space-between;
    
    /* Oraliq */
    gap: 20px;      /* barcha */
    row-gap: 10px;
    column-gap: 20px;
}

Item xususiyatlari:
.item {
    flex-grow: 1;    /* o'sish koeffitsienti */
    flex-shrink: 0;  /* kichrayish koeffitsienti */
    flex-basis: 200px; /* boshlang'ich o'lcham */
    
    /* Shorthand */
    flex: 1;           /* flex-grow: 1 */
    flex: 1 0 200px;   /* grow shrink basis */
    
    /* Alohida joylashuv */
    align-self: center;
    
    /* Tartib */
    order: 2;  /* katta = oxirida */
}

Markazlashtirish:
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}`
  },
  {
    id: 'grid',
    title: "CSS Grid",
    icon: Grid3X3,
    keywords: ['grid', 'layout', 'joylashuv', 'ustun', 'qator', 'column', 'row'],
    content: `CSS Grid - ikki o'lchamli joylashuv tizimi.

Container xususiyatlari:
.container {
    display: grid;
    
    /* Ustunlar */
    grid-template-columns: 200px 200px 200px;
    grid-template-columns: 1fr 1fr 1fr;  /* teng */
    grid-template-columns: 1fr 2fr 1fr;  /* nisbat */
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    
    /* Qatorlar */
    grid-template-rows: 100px auto 100px;
    grid-template-rows: repeat(3, 1fr);
    
    /* Oraliq */
    gap: 20px;
    row-gap: 10px;
    column-gap: 20px;
    
    /* Joylashuv */
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
    
    /* Kontent */
    justify-content: start | end | center | space-between;
    align-content: start | end | center | space-between;
}

Grid funksiyalari:
repeat(3, 1fr)          - 3 ta teng ustun
minmax(200px, 1fr)      - min va max
auto-fill               - avtomatik to'ldirish
auto-fit                - avtomatik moslashtirish

Item joylashuvi:
.item {
    grid-column: 1 / 3;      /* 1-dan 3-gacha */
    grid-column: span 2;     /* 2 ta ustun egallash */
    grid-row: 1 / 2;
    
    /* yoki */
    grid-area: 1 / 1 / 2 / 3; /* row-start / col-start / row-end / col-end */
}

Nomlangan maydonlar:
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`
  },
  {
    id: 'pozitsiyalash',
    title: "Pozitsiyalash",
    icon: Move,
    keywords: ['position', 'pozitsiya', 'relative', 'absolute', 'fixed', 'sticky', 'z-index'],
    content: `position xususiyati elementning joylashuvini boshqaradi.

Position qiymatlari:

static (standart):
- Normal oqimda
- top, right, bottom, left ishlamaydi

relative:
- O'z joyiga nisbatan siljiydi
- Asl joyi saqlanadi

.relative {
    position: relative;
    top: 20px;    /* pastga 20px */
    left: 30px;   /* o'ngga 30px */
}

absolute:
- Eng yaqin positioned otaga nisbatan
- Oqimdan chiqadi

.parent {
    position: relative;
}
.absolute {
    position: absolute;
    top: 0;
    right: 0;
}

fixed:
- Ekranga (viewport) nisbatan
- Scroll qilganda qimirlamaydi

.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}

sticky:
- Scroll bo'yicha yopishadi
- Normal va fixed kombinatsiyasi

.sticky-nav {
    position: sticky;
    top: 0;
}

z-index - qatlamlar tartibi:
.modal {
    position: fixed;
    z-index: 1000;  /* katta = oldinda */
}
.overlay {
    z-index: 999;   /* modal orqasida */
}

/* z-index faqat positioned elementlarga ishlaydi */

Markazlashtirish (absolute):
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`
  },
  {
    id: 'animatsiyalar',
    title: "Animatsiyalar",
    icon: Sparkles,
    keywords: ['animation', 'animatsiya', 'transition', 'transform', 'keyframes', 'harakat'],
    content: `CSS bilan animatsiya yaratish.

Transition - o'tish effektlari:
.button {
    background: blue;
    transition: all 0.3s ease;
    /* yoki */
    transition: background 0.3s, transform 0.2s;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0.1s;
}
.button:hover {
    background: darkblue;
    transform: scale(1.1);
}

Timing functions:
ease        - sekin boshlaydi, tezlashadi, sekinlashadi
ease-in     - sekin boshlaydi
ease-out    - sekin tugaydi
ease-in-out - sekin boshlanib, sekin tugaydi
linear      - teng tezlik
cubic-bezier(0.4, 0, 0.2, 1) - maxsus

Transform funksiyalari:
transform: translateX(100px);
transform: translateY(-50px);
transform: translate(100px, 50px);
transform: rotate(45deg);
transform: scale(1.5);
transform: scale(1.5, 2);
transform: skew(10deg, 5deg);

/* Kombinatsiya */
transform: translateX(100px) rotate(45deg) scale(1.2);

transform-origin: center; /* standart */
transform-origin: top left;

Animation - keyframes:
@keyframes slide {
    0% { transform: translateX(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100px); opacity: 1; }
}

/* yoki */
@keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
}

.animated {
    animation: slide 2s ease infinite;
    /* yoki */
    animation-name: slide;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite; /* yoki raqam */
    animation-direction: normal | reverse | alternate;
    animation-fill-mode: forwards | backwards | both;
    animation-play-state: running | paused;
}`
  },
  {
    id: 'tipografiya',
    title: "Tipografiya",
    icon: Type,
    keywords: ['font', 'matn', 'text', 'shrift', 'typography', 'yozuv'],
    content: `Matn stillari.

Font xususiyatlari:
font-family: 'Arial', sans-serif;
font-family: 'Times New Roman', serif;
font-family: 'Courier New', monospace;

font-size: 16px;
font-size: 1rem;
font-size: 1.2em;

font-weight: normal;    /* 400 */
font-weight: bold;      /* 700 */
font-weight: 100 - 900;

font-style: normal | italic | oblique;

/* Shorthand */
font: italic bold 16px/1.5 'Arial', sans-serif;
/* style weight size/line-height family */

Matn stillari:
color: #333;
line-height: 1.5;      /* qator balandligi */
letter-spacing: 2px;   /* harf oralig'i */
word-spacing: 5px;     /* so'z oralig'i */
text-align: left | center | right | justify;
text-decoration: none | underline | line-through | overline;
text-transform: uppercase | lowercase | capitalize;
text-indent: 20px;     /* birinchi qator chekinishi */
white-space: nowrap | pre | pre-wrap;
word-break: break-all;
overflow-wrap: break-word;

text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
/* x y blur color */

Google Fonts import:
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}

/* yoki HTML'da */
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

@font-face (maxsus shrift):
@font-face {
    font-family: 'MyFont';
    src: url('font.woff2') format('woff2'),
         url('font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}`
  },
  {
    id: 'responsive',
    title: "Responsive dizayn",
    icon: Smartphone,
    keywords: ['responsive', 'mobile', 'media', 'query', 'viewport', 'telefon', 'planshet'],
    content: `Turli ekran o'lchamlariga moslashish.

Viewport meta tegi (HTML'da):
<meta name="viewport" content="width=device-width, initial-scale=1">

Media Queries:
/* Kichik ekranlar */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        padding: 10px;
    }
}

/* Katta ekranlar */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}

/* Diapazonda */
@media (min-width: 768px) and (max-width: 1024px) {
    /* tablet stillar */
}

Breakpoints (mashhur):
320px  - kichik telefonlar
480px  - telefonlar
768px  - planshetlar
1024px - kichik laptoplar
1200px - desktop
1440px - katta ekranlar

Mobile First yondashuvi:
/* Avval mobil stillar */
.card {
    width: 100%;
    padding: 10px;
}

/* Keyin katta ekranlar */
@media (min-width: 768px) {
    .card {
        width: 50%;
        padding: 20px;
    }
}

Responsive birliklar:
% - foiz (ota elementga nisbatan)
vw - viewport width (1vw = 1% ekran kengligi)
vh - viewport height (1vh = 1% ekran balandligi)
rem - root font-size ga nisbatan
em - ota font-size ga nisbatan

clamp() funksiyasi:
font-size: clamp(1rem, 2vw, 2rem);
/* min, preferred, max */

width: clamp(300px, 50%, 600px);

Responsive images:
img {
    max-width: 100%;
    height: auto;
}

Responsive video:
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
}
.video-container iframe {
    position: absolute;
    width: 100%;
    height: 100%;
}`
  },
  {
    id: 'pseudo-elementlar',
    title: "Pseudo-elementlar",
    icon: Shapes,
    keywords: ['pseudo', 'before', 'after', 'first', 'last', 'content'],
    content: `Pseudo-elementlar virtual elementlar yaratadi.

::before va ::after:
.element::before {
    content: '';  /* MAJBURIY! */
    display: block;
    width: 20px;
    height: 20px;
    background: red;
}

.element::after {
    content: ' →';
}

/* Icon qo'shish */
.link::before {
    content: '🔗 ';
}

/* Rasm qo'shish */
.decorated::before {
    content: url('icon.png');
}

/* Atribut qiymatini olish */
a::after {
    content: ' (' attr(href) ')';
}

/* Hisoblagich */
.list {
    counter-reset: item;
}
.list li::before {
    counter-increment: item;
    content: counter(item) '. ';
}

::first-line va ::first-letter:
p::first-line {
    font-weight: bold;
    color: blue;
}

p::first-letter {
    font-size: 3em;
    float: left;
    line-height: 1;
}

::selection (tanlangan matn):
::selection {
    background: yellow;
    color: black;
}

::placeholder:
input::placeholder {
    color: #999;
    font-style: italic;
}

Tooltip yasash:
.tooltip {
    position: relative;
}
.tooltip::after {
    content: attr(data-tip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s;
}
.tooltip:hover::after {
    opacity: 1;
}`
  },
  {
    id: 'variables',
    title: "CSS Variables",
    icon: Scan,
    keywords: ['variable', 'ozgaruvchi', 'var', 'custom', 'property', 'tema'],
    content: `CSS o'zgaruvchilar (Custom Properties).

E'lon qilish:
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --font-size-base: 16px;
    --spacing: 8px;
    --border-radius: 4px;
    --shadow: 0 2px 10px rgba(0,0,0,0.1);
}

Ishlatish:
.button {
    background: var(--primary-color);
    padding: var(--spacing);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

Default qiymat:
color: var(--text-color, black);

Scope (ko'rinish doirasi):
/* Global */
:root {
    --color: blue;
}

/* Local */
.card {
    --color: red; /* faqat .card ichida */
}

Dark mode:
:root {
    --bg-color: white;
    --text-color: black;
}

@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #1a1a1a;
        --text-color: white;
    }
}

/* yoki class bilan */
.dark-theme {
    --bg-color: #1a1a1a;
    --text-color: white;
}

body {
    background: var(--bg-color);
    color: var(--text-color);
}

JavaScript bilan boshqarish:
// O'qish
getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color');

// Yozish
document.documentElement.style
    .setProperty('--primary-color', 'red');

Hisoblash:
:root {
    --base-size: 16px;
}
.large {
    font-size: calc(var(--base-size) * 1.5);
}`
  },
  {
    id: 'effektlar',
    title: "Vizual effektlar",
    icon: Eye,
    keywords: ['shadow', 'filter', 'blur', 'opacity', 'soya', 'effekt'],
    content: `Vizual effektlar yaratish.

Box Shadow:
box-shadow: 2px 4px 10px rgba(0,0,0,0.2);
/* x y blur color */

box-shadow: 2px 4px 10px 5px rgba(0,0,0,0.2);
/* x y blur spread color */

/* Ichki soya */
box-shadow: inset 0 2px 5px rgba(0,0,0,0.2);

/* Ko'p soya */
box-shadow: 
    0 2px 5px rgba(0,0,0,0.1),
    0 10px 20px rgba(0,0,0,0.2);

Text Shadow:
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

Filter:
filter: blur(5px);          /* xiralashtirish */
filter: brightness(1.2);    /* yorug'lik */
filter: contrast(1.5);      /* kontrast */
filter: grayscale(100%);    /* oq-qora */
filter: sepia(100%);        /* sepiya */
filter: saturate(2);        /* to'yinganlik */
filter: hue-rotate(90deg);  /* rang aylantirish */
filter: invert(100%);       /* teskari rang */
filter: drop-shadow(2px 2px 5px black);

/* Kombinatsiya */
filter: brightness(1.1) contrast(1.2);

Backdrop Filter (orqa fon):
.glass {
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.3);
}

Opacity:
opacity: 0.5;  /* 0 = ko'rinmas, 1 = to'liq */

Mix Blend Mode:
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: difference;

Background Blend Mode:
.blended {
    background: 
        linear-gradient(blue, red),
        url('image.jpg');
    background-blend-mode: overlay;
}

Object Fit (rasm/video):
img {
    object-fit: cover;    /* kesib moslash */
    object-fit: contain;  /* to'liq ko'rsatish */
    object-fit: fill;     /* cho'zish */
    object-position: center top;
}

Clip Path:
clip-path: circle(50%);
clip-path: ellipse(50% 30%);
clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
clip-path: inset(10px 20px 30px 40px);`
  },
  {
    id: 'cursor',
    title: "Cursor va interaktivlik",
    icon: MousePointer2,
    keywords: ['cursor', 'pointer', 'scroll', 'user-select', 'sichqoncha'],
    content: `Foydalanuvchi interaksiyasi stillari.

Cursor turlari:
cursor: default;     /* standart o'q */
cursor: pointer;     /* qo'l (havola) */
cursor: text;        /* matn */
cursor: move;        /* ko'chirish */
cursor: not-allowed; /* taqiqlangan */
cursor: wait;        /* kutish */
cursor: help;        /* yordam */
cursor: crosshair;   /* nishon */
cursor: grab;        /* ushlab olish */
cursor: grabbing;    /* ushlab turish */
cursor: zoom-in;
cursor: zoom-out;
cursor: none;        /* yashirish */

Maxsus cursor:
cursor: url('cursor.png'), auto;

User Select:
user-select: none;   /* tanlab bo'lmaydi */
user-select: all;    /* hammasi tanlanadi */
user-select: text;   /* faqat matn */

Pointer Events:
pointer-events: none;  /* click ishlamaydi */
pointer-events: auto;  /* normal */

Scroll Behavior:
html {
    scroll-behavior: smooth; /* silliq scroll */
}

Scroll Snap:
.container {
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
}
.item {
    scroll-snap-align: start;
}

Overscroll:
overscroll-behavior: contain;

Scrollbar styling:
/* WebKit (Chrome, Safari) */
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
}

Resize:
resize: both;       /* ikki tomonga */
resize: horizontal;
resize: vertical;
resize: none;

Touch Action:
touch-action: none;        /* touch ishlamaydi */
touch-action: pan-x;       /* faqat gorizontal */
touch-action: manipulation;`
  },
  {
    id: 'waves',
    title: "Yaxshi amaliyotlar",
    icon: Waves,
    keywords: ['best', 'practice', 'yaxshi', 'amaliyot', 'tavsiya', 'metodologiya'],
    content: `CSS yozishda yaxshi amaliyotlar.

Tashkillashtirish:
/* 1. Reset/Normalize */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 2. Variables */
:root {
    --primary: #3498db;
}

/* 3. Base styles */
body { }

/* 4. Components */
.button { }
.card { }

/* 5. Utilities */
.mt-2 { margin-top: 0.5rem; }

Nomlash (BEM metodologiyasi):
/* Block */
.card { }

/* Element */
.card__title { }
.card__content { }
.card__footer { }

/* Modifier */
.card--featured { }
.card--small { }
.button--primary { }
.button--disabled { }

/* Misol */
<div class="card card--featured">
    <h2 class="card__title">Sarlavha</h2>
    <p class="card__content">Matn</p>
</div>

Qoidalar:
✅ Mobile-first yondashuv
✅ CSS variables ishlatish
✅ Specificity'ni past tuting
✅ !important dan qoching
✅ Shorthand xususiyatlardan foydalaning
✅ Kodni guruhlang va izohlang

Performance:
✅ Keraksiz selektorlardan qoching
✅ will-change ehtiyotkorlik bilan
✅ CSS fayllarni minify qiling
✅ Critical CSS inline qiling

will-change:
.animated {
    will-change: transform, opacity;
    /* Animatsiya tugagach olib tashlang */
}

Accessibility:
✅ Yetarli kontrast (4.5:1)
✅ Focus stillari
✅ prefers-reduced-motion

@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}`
  }
];

const KutubxonaCss = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return topics;
    
    const query = searchQuery.toLowerCase();
    return topics.filter(topic => 
      topic.title.toLowerCase().includes(query) ||
      topic.keywords.some(k => k.includes(query)) ||
      topic.content.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <Layout>
      <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-12 pt-14 sm:pt-16 md:pt-12">
        {/* Header */}
        <header className="mb-4 sm:mb-6 animate-fade-in">
          <Link to="/kutubxona" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-3 sm:mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Kutubxonaga qaytish</span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl gradient-css flex items-center justify-center glow-css flex-shrink-0">
              <Palette className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">CSS Qo'llanma</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">Stillar, animatsiyalar va boshqalar</p>
            </div>
          </div>
        </header>

        {/* Search */}
        <div className="relative mb-4 sm:mb-6 animate-slide-up">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Mavzuni qidirish... (masalan: flexbox, animation, color)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 sm:h-11 text-sm sm:text-base"
          />
        </div>

        {/* Results count */}
        {searchQuery && (
          <p className="text-sm text-muted-foreground mb-4">
            {filteredTopics.length} ta mavzu topildi
          </p>
        )}

        {/* Topics */}
        <div className="space-y-3 sm:space-y-4">
          {filteredTopics.map((topic, index) => (
            <div 
              key={topic.id}
              className="card-glass rounded-xl sm:rounded-2xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <button
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                className="w-full flex items-center gap-3 p-3 sm:p-4 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-css flex items-center justify-center flex-shrink-0">
                  <topic.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-css flex-1">{topic.title}</h2>
                <div className={`transform transition-transform ${expandedTopic === topic.id ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {expandedTopic === topic.id && (
                <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                  <pre className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap font-mono bg-background/50 rounded-lg p-3 sm:p-4 overflow-x-auto">
                    {topic.content}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-muted-foreground">"{searchQuery}" bo'yicha hech narsa topilmadi</p>
          </div>
        )}

        {/* Test Link */}
        <div className="mt-6 sm:mt-8 card-glass rounded-xl sm:rounded-2xl p-4 sm:p-6 animate-slide-up">
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">Bilimingizni sinab ko'ring!</h3>
          <p className="text-sm text-muted-foreground mb-3 sm:mb-4">CSS bo'yicha 100 ta savol-javob testlarini yeching</p>
          <Link 
            to="/css"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg gradient-css text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <BookOpen className="w-4 h-4" />
            <span>Testlarni boshlash</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default KutubxonaCss;
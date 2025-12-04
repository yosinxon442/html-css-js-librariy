import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { Code2, ArrowLeft, BookOpen, FileCode, Layout as LayoutIcon, FormInput, Table, List, Image, Link as LinkIcon, Video, Search, Type, Globe, Box, Layers, FileText, Settings, Zap, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const topics = [
  {
    id: 'html-asoslari',
    title: "HTML asoslari",
    icon: FileCode,
    keywords: ['html', 'asoslar', 'kirish', 'boshlanish', 'doctype', 'struktura'],
    content: `HTML (HyperText Markup Language) - bu veb-sahifalar yaratish uchun ishlatiladigan standart belgilash tili.

HTML hujjatning asosiy tuzilishi:
<!DOCTYPE html> - HTML5 hujjat ekanligini bildiradi
<html> - hujjatning bosh elementi
<head> - meta ma'lumotlar joylashadigan qism
<body> - sahifa kontenti joylashadigan qism

Misol:
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sahifa sarlavhasi</title>
</head>
<body>
    <h1>Salom, dunyo!</h1>
    <p>Bu mening birinchi veb-sahifam.</p>
</body>
</html>

HTML fayllarini .html kengaytmasi bilan saqlang.
Brauzerda ochish uchun faylni ikki marta bosing.`
  },
  {
    id: 'teglar',
    title: "Teglar va atributlar",
    icon: Code2,
    keywords: ['teg', 'tag', 'atribut', 'attribute', 'id', 'class', 'style'],
    content: `Teglar - HTML elementlarini belgilash uchun ishlatiladi.

Asosiy teglar:
<h1> - <h6> - sarlavhalar (h1 eng katta, h6 eng kichik)
<p> - paragraf (matn bloki)
<br> - yangi qator (yopilmaydigan teg)
<hr> - gorizontal chiziq
<span> - inline matn
<div> - blok konteyner

Atributlar - teglarga qo'shimcha ma'lumot beradi:
<tag attribut="qiymat">Kontent</tag>
Misol: <a href="https://example.com">Havola</a>

Ko'p ishlatiladigan atributlar:
- id - noyob identifikator (sahifada bir marta)
- class - CSS klassi (bir nechta bo'lishi mumkin)
- style - inline stillar
- title - tooltip matn (ustiga kelganda chiqadi)
- lang - til kodi
- data-* - maxsus ma'lumotlar

Misol:
<div id="container" class="box large" title="Ma'lumot">
    <p style="color: blue;">Ko'k rangli matn</p>
</div>`
  },
  {
    id: 'matn-formatlash',
    title: "Matn formatlash",
    icon: Type,
    keywords: ['matn', 'text', 'bold', 'italic', 'format', 'strong', 'em', 'qalin', 'yotiq'],
    content: `Matnni formatlash uchun teglar.

Qalin matn:
<strong>Muhim matn</strong> - semantik qalin
<b>Qalin matn</b> - vizual qalin

Yotiq matn:
<em>Ta'kidlangan matn</em> - semantik yotiq
<i>Yotiq matn</i> - vizual yotiq

Boshqa formatlash teglari:
<u>Tagiga chizilgan</u>
<s>O'chirilgan matn</s>
<mark>Ajratilgan matn</mark>
<small>Kichik matn</small>
<sub>Pastki indeks H<sub>2</sub>O</sub>
<sup>Yuqori indeks x<sup>2</sup></sup>

Kod va maxsus matnlar:
<code>console.log('Salom')</code> - kod
<pre>Formatlangan matn</pre> - bo'shliqlar saqlanadi
<kbd>Ctrl + C</kbd> - klaviatura tugmasi
<blockquote>Iqtibos</blockquote>
<q>Qisqa iqtibos</q>
<abbr title="HyperText Markup Language">HTML</abbr>`
  },
  {
    id: 'semantik',
    title: "Semantik HTML",
    icon: LayoutIcon,
    keywords: ['semantik', 'semantic', 'header', 'footer', 'nav', 'main', 'article', 'section', 'aside'],
    content: `Semantik teglar - sahifa tuzilishini aniq bildiradi.

Asosiy semantik teglar:
<header> - sahifa yoki bo'lim sarlavhasi
<nav> - navigatsiya havolalari
<main> - asosiy kontent (sahifada faqat bitta)
<article> - mustaqil maqola/kontent
<section> - tematik bo'lim
<aside> - yon panel, qo'shimcha ma'lumot
<footer> - pastki qism

Misol struktura:
<body>
    <header>
        <nav>Navigatsiya</nav>
    </header>
    <main>
        <article>
            <header><h1>Maqola sarlavhasi</h1></header>
            <section>Bo'lim 1</section>
            <section>Bo'lim 2</section>
            <footer>Maqola pastki qismi</footer>
        </article>
        <aside>Yon panel</aside>
    </main>
    <footer>Sahifa pastki qismi</footer>
</body>

Afzalliklari:
- SEO uchun yaxshi (qidiruv tizimlari tushunadi)
- Ekran o'quvchilar uchun qulay (accessibility)
- Kod o'qilishi va tushunilishi oson
- Jamoa bilan ishlash osonlashadi`
  },
  {
    id: 'formalar',
    title: "Formalar",
    icon: FormInput,
    keywords: ['form', 'forma', 'input', 'button', 'select', 'textarea', 'checkbox', 'radio', 'submit'],
    content: `Formalar - foydalanuvchidan ma'lumot olish uchun ishlatiladi.

Asosiy forma strukturasi:
<form action="/submit" method="POST">
    <label for="name">Ism:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="email@example.com">
    
    <button type="submit">Yuborish</button>
</form>

Input turlari:
- text - oddiy matn
- password - parol (yashirin)
- email - email manzil (tekshiradi)
- number - raqam
- tel - telefon raqam
- url - veb manzil
- date - sana tanlash
- time - vaqt tanlash
- datetime-local - sana va vaqt
- color - rang tanlash
- range - slider
- file - fayl yuklash
- hidden - yashirin maydon

Checkbox va Radio:
<input type="checkbox" id="agree" name="agree">
<label for="agree">Rozilik</label>

<input type="radio" name="gender" value="male"> Erkak
<input type="radio" name="gender" value="female"> Ayol

Select (tanlash):
<select name="city">
    <option value="">Tanlang</option>
    <option value="tashkent">Toshkent</option>
    <option value="samarkand">Samarqand</option>
</select>

Textarea (ko'p qatorli matn):
<textarea name="message" rows="4" cols="50"></textarea>

Atributlar:
- required - majburiy maydon
- disabled - o'chirilgan
- readonly - faqat o'qish
- placeholder - maslahat matni
- value - boshlang'ich qiymat
- min, max - chegaralar
- pattern - regex tekshiruvi`
  },
  {
    id: 'jadvallar',
    title: "Jadvallar",
    icon: Table,
    keywords: ['jadval', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'tfoot'],
    content: `Jadvallar - ma'lumotlarni tartibli ko'rsatish uchun.

Asosiy jadval strukturasi:
<table>
    <caption>Jadval sarlavhasi</caption>
    <thead>
        <tr>
            <th>Ism</th>
            <th>Yosh</th>
            <th>Shahar</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ali</td>
            <td>25</td>
            <td>Toshkent</td>
        </tr>
        <tr>
            <td>Vali</td>
            <td>30</td>
            <td>Samarqand</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">Jami: 2 ta odam</td>
        </tr>
    </tfoot>
</table>

Jadval teglari:
<table> - jadval konteyner
<caption> - jadval sarlavhasi
<tr> - qator (table row)
<th> - sarlavha katagi (qalin, markazda)
<td> - oddiy katak (table data)
<thead> - sarlavha qismi
<tbody> - asosiy qism
<tfoot> - pastki qism

Kataklar birlashtirish:
colspan="2" - 2 ta ustunni birlashtirish
rowspan="3" - 3 ta qatorni birlashtirish

<tr>
    <td colspan="2">Ikki ustunli katak</td>
</tr>
<tr>
    <td rowspan="2">Ikki qatorli</td>
    <td>Normal</td>
</tr>`
  },
  {
    id: 'royxatlar',
    title: "Ro'yxatlar",
    icon: List,
    keywords: ['royxat', 'list', 'ul', 'ol', 'li', 'dl', 'dt', 'dd'],
    content: `Ro'yxatlar - elementlarni tartibli yoki tartibsiz ko'rsatish.

Tartibsiz ro'yxat (nuqtalar bilan):
<ul>
    <li>Birinchi element</li>
    <li>Ikkinchi element</li>
    <li>Uchinchi element</li>
</ul>

Tartibli ro'yxat (raqamlar bilan):
<ol>
    <li>Birinchi qadam</li>
    <li>Ikkinchi qadam</li>
    <li>Uchinchi qadam</li>
</ol>

Tartibli ro'yxat atributlari:
<ol type="A"> - A, B, C...
<ol type="a"> - a, b, c...
<ol type="I"> - I, II, III...
<ol type="i"> - i, ii, iii...
<ol start="5"> - 5 dan boshlash
<ol reversed> - teskari tartib

Ichma-ich ro'yxatlar:
<ul>
    <li>Mevalar
        <ul>
            <li>Olma</li>
            <li>Banan</li>
        </ul>
    </li>
    <li>Sabzavotlar</li>
</ul>

Ta'riflar ro'yxati:
<dl>
    <dt>HTML</dt>
    <dd>Belgilash tili - sahifa strukturasi</dd>
    <dt>CSS</dt>
    <dd>Stillar tili - dizayn va ko'rinish</dd>
    <dt>JavaScript</dt>
    <dd>Dasturlash tili - interaktivlik</dd>
</dl>`
  },
  {
    id: 'rasmlar',
    title: "Rasmlar",
    icon: Image,
    keywords: ['rasm', 'image', 'img', 'picture', 'figure', 'alt', 'src'],
    content: `Rasmlarni joylashtirish uchun teglar.

Oddiy rasm:
<img src="rasm.jpg" alt="Rasm tavsifi" width="300" height="200">

Muhim atributlar:
- src - rasm manzili (yo'l)
- alt - alternativ matn (MAJBURIY!)
- width/height - o'lchamlar (piksel)
- loading="lazy" - sekin yuklash

Rasm manzillari:
<img src="images/photo.jpg"> - lokal fayl
<img src="/assets/logo.png"> - root dan
<img src="https://example.com/image.jpg"> - tashqi havola

<figure> va <figcaption>:
<figure>
    <img src="rasm.jpg" alt="Tog' manzarasi">
    <figcaption>Tog'lar - 2024 yil, Toshkent</figcaption>
</figure>

Responsive rasmlar:
<picture>
    <source media="(min-width: 1200px)" srcset="katta.jpg">
    <source media="(min-width: 768px)" srcset="orta.jpg">
    <img src="kichik.jpg" alt="Responsive rasm">
</picture>

srcset bilan:
<img src="small.jpg"
     srcset="small.jpg 300w,
             medium.jpg 600w,
             large.jpg 1200w"
     sizes="(max-width: 600px) 300px, 50vw"
     alt="Responsive rasm">

Rasm formatlari:
- JPEG (.jpg) - fotografiyalar
- PNG (.png) - shaffoflik kerak bo'lganda
- GIF (.gif) - animatsiyalar
- SVG (.svg) - vektor grafikalar
- WebP (.webp) - zamonaviy, siqilgan`
  },
  {
    id: 'havolalar',
    title: "Havolalar",
    icon: LinkIcon,
    keywords: ['havola', 'link', 'a', 'href', 'target', 'anchor'],
    content: `Havolalar - sahifalar orasida bog'lanish yaratadi.

Asosiy havola:
<a href="https://example.com">Tashqi havola</a>
<a href="/sahifa.html">Ichki havola</a>
<a href="page.html">Nisbiy havola</a>
<a href="#bolim">Sahifa ichida (anchor)</a>

Target atributi:
<a href="url" target="_self">Joriy oynada (standart)</a>
<a href="url" target="_blank">Yangi oynada</a>
<a href="url" target="_parent">Ota freymda</a>
<a href="url" target="_top">To'liq oynada</a>

Xavfsizlik (yangi oynada):
<a href="url" target="_blank" rel="noopener noreferrer">
    Xavfsiz tashqi havola
</a>

Email va telefon:
<a href="mailto:email@example.com">Email yuborish</a>
<a href="mailto:email@example.com?subject=Mavzu&body=Matn">
    Email mavzu bilan
</a>
<a href="tel:+998901234567">Telefon qilish</a>
<a href="sms:+998901234567">SMS yuborish</a>

Fayl yuklab olish:
<a href="document.pdf" download>PDF yuklab olish</a>
<a href="image.jpg" download="yangi-nom.jpg">
    Boshqa nom bilan yuklash
</a>

Sahifa ichida navigatsiya:
<h2 id="bolim1">Birinchi bo'lim</h2>
...
<a href="#bolim1">Birinchi bo'limga o'tish</a>
<a href="#">Sahifa boshiga</a>`
  },
  {
    id: 'media',
    title: "Media elementlar",
    icon: Video,
    keywords: ['video', 'audio', 'media', 'iframe', 'embed', 'youtube'],
    content: `Video va audio kontentni joylashtirish.

Video:
<video width="640" height="360" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Brauzeringiz video qo'llab-quvvatlamaydi.
</video>

Audio:
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Brauzeringiz audio qo'llab-quvvatlamaydi.
</audio>

Video/Audio atributlari:
- controls - boshqaruv paneli
- autoplay - avtomatik o'ynash
- loop - takrorlash
- muted - ovozsiz
- poster="preview.jpg" - oldindan ko'rsatiladigan rasm
- preload="auto|metadata|none"

YouTube embed qilish:
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Video sarlavhasi"
    frameborder="0" 
    allowfullscreen>
</iframe>

iframe - boshqa sahifani joylashtirish:
<iframe 
    src="https://example.com" 
    width="600" 
    height="400"
    loading="lazy"
    sandbox="allow-scripts">
</iframe>

Google Maps embed:
<iframe 
    src="https://www.google.com/maps/embed?..." 
    width="600" 
    height="450"
    allowfullscreen 
    loading="lazy">
</iframe>`
  },
  {
    id: 'meta-teglar',
    title: "Meta teglar",
    icon: Settings,
    keywords: ['meta', 'head', 'seo', 'title', 'description', 'viewport', 'charset'],
    content: `Meta teglar - sahifa haqida ma'lumot beradi.

Asosiy meta teglar:
<head>
    <!-- Kodlash -->
    <meta charset="UTF-8">
    
    <!-- Responsive dizayn -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Sahifa tavsifi (SEO) -->
    <meta name="description" content="Sahifa haqida qisqa tavsif, 150-160 belgi">
    
    <!-- Kalit so'zlar -->
    <meta name="keywords" content="html, css, javascript, veb">
    
    <!-- Muallif -->
    <meta name="author" content="Ism Familiya">
    
    <!-- Robot ko'rsatmalari -->
    <meta name="robots" content="index, follow">
    
    <!-- Sahifa sarlavhasi -->
    <title>Sahifa nomi | Sayt nomi</title>
</head>

Open Graph (ijtimoiy tarmoqlar):
<meta property="og:title" content="Sahifa sarlavhasi">
<meta property="og:description" content="Tavsif">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">

Twitter Cards:
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sarlavha">
<meta name="twitter:description" content="Tavsif">
<meta name="twitter:image" content="image.jpg">

Favicon:
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

CSS va JS ulash:
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>`
  },
  {
    id: 'block-inline',
    title: "Block va Inline",
    icon: Box,
    keywords: ['block', 'inline', 'display', 'div', 'span', 'element'],
    content: `Block va Inline elementlar orasidagi farq.

Block elementlar:
- Yangi qatordan boshlanadi
- Butun kenglikni egallaydi
- Width va height o'rnatish mumkin
- Margin va padding to'liq ishlaydi

Block elementlar:
<div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>,
<table>, <form>, <header>, <footer>,
<section>, <article>, <nav>, <aside>

Inline elementlar:
- Qator ichida joylashadi
- Faqat kontent kengligini egallaydi
- Width va height ishlamaydi
- Faqat chap-o'ng margin/padding ishlaydi

Inline elementlar:
<span>, <a>, <strong>, <em>, <img>,
<input>, <button>, <label>, <br>

Inline-block:
- Qatorda, lekin width/height ishlaydi
<img>, <button>, <input>

Misol:
<div style="background: red;">
    Block element - butun qator
</div>

<span style="background: blue;">Inline</span>
<span style="background: green;">Inline</span>

CSS bilan o'zgartirish:
display: block;
display: inline;
display: inline-block;
display: none; /* yashirish */`
  },
  {
    id: 'global-atributlar',
    title: "Global atributlar",
    icon: Globe,
    keywords: ['global', 'atribut', 'attribute', 'id', 'class', 'style', 'data', 'hidden', 'tabindex'],
    content: `Barcha HTML elementlarida ishlatiladigan atributlar.

Identifikatsiya:
id="unique-id" - noyob identifikator
class="class1 class2" - CSS klasslari

Stillar:
style="color: red; font-size: 16px;"

Ma'lumot saqlash:
data-id="123"
data-user-name="Ali"
data-active="true"

JavaScript'da olish:
element.dataset.id // "123"
element.dataset.userName // "Ali"

Ko'rinish:
hidden - elementni yashirish
title="Maslahat matni" - tooltip

Accessibility:
tabindex="0" - Tab bilan fokuslanadi
tabindex="-1" - fokuslanmaydi
role="button" - element roli
aria-label="Tavsif" - ekran o'quvchilar uchun
aria-hidden="true" - yashirish

Til va yo'nalish:
lang="uz" - til
dir="rtl" - o'ngdan chapga

Tahrirlash:
contenteditable="true" - tahrirlash mumkin
draggable="true" - sudrab olish mumkin
spellcheck="true" - imlo tekshiruvi

Misol:
<div 
    id="card-1"
    class="card featured"
    data-product-id="abc123"
    data-price="50000"
    title="Mahsulot kartasi"
    lang="uz">
    Kontent
</div>`
  },
  {
    id: 'maxsus-belgilar',
    title: "Maxsus belgilar",
    icon: FileText,
    keywords: ['entity', 'belgi', 'symbol', 'special', 'html entity', 'escape'],
    content: `HTML maxsus belgilari (entities).

Zarur bo'lgan belgilar:
&lt; - < (less than)
&gt; - > (greater than)  
&amp; - & (ampersand)
&quot; - " (qo'shtirnoq)
&apos; - ' (apostrof)

Bo'shliqlar:
&nbsp; - bo'sh joy (non-breaking space)
&ensp; - en bo'shliq
&emsp; - em bo'shliq

Valyutalar:
&dollar; - $
&euro; - €
&pound; - £
&yen; - ¥

Matematik:
&plus; - +
&minus; - −
&times; - ×
&divide; - ÷
&equals; - =
&ne; - ≠
&le; - ≤
&ge; - ≥

O'qlar:
&larr; - ←
&rarr; - →
&uarr; - ↑
&darr; - ↓

Boshqa:
&copy; - ©
&reg; - ®
&trade; - ™
&deg; - °
&middot; - ·
&bull; - •
&hellip; - …
&hearts; - ♥
&spades; - ♠

Emoji ham ishlatish mumkin:
😀 🎉 ✅ ❌ 💡

Raqamli kodlar:
&#60; - <
&#x3C; - < (hex)
&#128512; - 😀`
  },
  {
    id: 'best-practices',
    title: "Yaxshi amaliyotlar",
    icon: Zap,
    keywords: ['best practice', 'yaxshi', 'amaliyot', 'tavsiya', 'seo', 'accessibility'],
    content: `HTML yozishda yaxshi amaliyotlar.

Struktura:
✅ Har doim DOCTYPE e'lon qiling
✅ Semantik teglardan foydalaning
✅ Kodni indentatsiya qiling
✅ Teglarni to'g'ri yoping

Rasmlar:
✅ Har doim alt atributi qo'shing
✅ O'lchamlarni belgilang (width, height)
✅ Lazy loading ishlataning

Formalar:
✅ Label bilan input bog'lang
✅ Required va validation ishlatang
✅ Placeholder va maslahatlar qo'shing

SEO:
✅ Title va description meta qo'shing
✅ Faqat bitta h1 bo'lsin
✅ Sarlavhalar tartibli bo'lsin (h1, h2, h3...)

Accessibility:
✅ Semantik teglar ishlatang
✅ Alt matnlar yozing
✅ Kontrast yetarli bo'lsin
✅ Klaviatura navigatsiyasi ishlashi

Performance:
✅ CSS va JS fayllarni optimallashtiring
✅ Rasmlarni siqing
✅ Lazy loading ishlatang

Yomon amaliyotlar:
❌ Inline stillar (style=...)
❌ Deprecated teglar (<font>, <center>)
❌ Table layoutlar
❌ Alt atributisiz rasmlar
❌ Bo'sh teglar (<div><div></div></div>)

Validator:
HTML'ni tekshirish: https://validator.w3.org/`
  },
  {
    id: 'html5-api',
    title: "HTML5 API'lar",
    icon: Database,
    keywords: ['html5', 'api', 'localstorage', 'geolocation', 'canvas', 'drag', 'drop'],
    content: `HTML5 bilan kelgan yangi imkoniyatlar.

Local Storage:
<script>
// Saqlash
localStorage.setItem('name', 'Ali');

// Olish
const name = localStorage.getItem('name');

// O'chirish
localStorage.removeItem('name');

// Hammasini o'chirish
localStorage.clear();
</script>

Session Storage:
sessionStorage.setItem('key', 'value');
// Tab yopilganda o'chadi

Geolocation:
<script>
navigator.geolocation.getCurrentPosition(
    (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
    },
    (error) => console.error(error)
);
</script>

Canvas:
<canvas id="myCanvas" width="400" height="200"></canvas>
<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 50);
</script>

Drag and Drop:
<div draggable="true" 
     ondragstart="drag(event)" 
     id="drag1">
    Sudrab oling
</div>

<div ondrop="drop(event)" 
     ondragover="allowDrop(event)">
    Bu yerga tashlang
</div>

Content Editable:
<div contenteditable="true">
    Bu matnni tahrirlashingiz mumkin
</div>

Details/Summary:
<details>
    <summary>Ko'proq ma'lumot</summary>
    <p>Yashirin kontent bu yerda.</p>
</details>`
  }
];

const KutubxonaHtml = () => {
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
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl gradient-html flex items-center justify-center glow-html flex-shrink-0">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">HTML Qo'llanma</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">Teglar, atributlar va boshqalar</p>
            </div>
          </div>
        </header>

        {/* Search */}
        <div className="relative mb-4 sm:mb-6 animate-slide-up">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Mavzuni qidirish... (masalan: button, form, table)"
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
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-html flex items-center justify-center flex-shrink-0">
                  <topic.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-html flex-1">{topic.title}</h2>
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
          <p className="text-sm text-muted-foreground mb-3 sm:mb-4">HTML bo'yicha 100 ta savol-javob testlarini yeching</p>
          <Link 
            to="/html"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg gradient-html text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <BookOpen className="w-4 h-4" />
            <span>Testlarni boshlash</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default KutubxonaHtml;
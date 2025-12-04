import { useState, useMemo } from 'react';
import { Layout } from '@/components/Layout';
import { Braces, ArrowLeft, BookOpen, Variable, FunctionSquare, Repeat, Database, Layers, Zap, Globe, FileCode, Search, GitBranch, Package, Bug, Clock, Shield, Boxes, FileJson, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const topics = [
  {
    id: 'js-asoslari',
    title: "JavaScript asoslari",
    icon: FileCode,
    keywords: ['javascript', 'js', 'asoslar', 'kirish', 'console', 'script'],
    content: `JavaScript - interaktiv veb-sahifalar yaratish uchun ishlatiladigan dasturlash tili.

JS qo'shish usullari:

1. Internal (HTML ichida):
<script>
    console.log('Salom!');
</script>

2. External (alohida fayl):
<script src="script.js"></script>

3. Defer (HTML yuklangandan keyin):
<script src="script.js" defer></script>

4. Async (parallel yuklash):
<script src="script.js" async></script>

Console metodlari:
console.log('Oddiy xabar');
console.error('Xato xabari');
console.warn('Ogohlantirish');
console.info('Ma\'lumot');
console.table([{name: 'Ali', age: 25}]);
console.group('Guruh');
console.log('Guruh ichida');
console.groupEnd();
console.time('Timer');
// ... kod
console.timeEnd('Timer');
console.clear(); // Tozalash

Izohlar:
// Bir qatorli izoh

/* Ko'p qatorli
   izoh */

/**
 * JSDoc izoh
 * @param {string} name - Ism
 * @returns {string} - Salomlash
 */

"use strict"; // Qat'iy rejim`
  },
  {
    id: 'ozgaruvchilar',
    title: "O'zgaruvchilar",
    icon: Variable,
    keywords: ['var', 'let', 'const', 'ozgaruvchi', 'variable', 'tur', 'type'],
    content: `O'zgaruvchilar - ma'lumotlarni saqlash uchun.

E'lon qilish:
var name = 'Ali';    // eski usul (function scope)
let age = 25;        // o'zgaruvchan (block scope)
const PI = 3.14;     // o'zgarmas (block scope)

let vs const:
let counter = 0;
counter = 1;          // ✅ o'zgartirish mumkin

const MAX = 100;
MAX = 200;            // ❌ xato!

const user = { name: 'Ali' };
user.name = 'Vali';   // ✅ obyekt ichini o'zgartirish mumkin
user = {};            // ❌ obyektning o'zini o'zgartirib bo'lmaydi

Ma'lumot turlari (Primitives):
// String
let text = 'Salom';
let text2 = "Dunyo";
let text3 = \`Salom, \${name}!\`; // Template literal

// Number
let integer = 42;
let float = 3.14;
let infinity = Infinity;
let notANumber = NaN;

// Boolean
let isActive = true;
let isLoggedIn = false;

// Null va Undefined
let empty = null;        // bo'sh qiymat (ataylab)
let notDefined;          // undefined (aniqlanmagan)

// Symbol (noyob identifikator)
let id = Symbol('id');

// BigInt (katta raqamlar)
let bigNumber = 9007199254740991n;

typeof operatori:
typeof 'hello'    // 'string'
typeof 42         // 'number'
typeof true       // 'boolean'
typeof undefined  // 'undefined'
typeof null       // 'object' (tarixiy xato)
typeof {}         // 'object'
typeof []         // 'object'
typeof function(){} // 'function'

Tur o'zgartirish:
String(123)       // '123'
Number('42')      // 42
Boolean(1)        // true
parseInt('42px')  // 42
parseFloat('3.14') // 3.14`
  },
  {
    id: 'operatorlar',
    title: "Operatorlar",
    icon: GitBranch,
    keywords: ['operator', 'arifmetik', 'mantiqiy', 'taqqoslash', 'comparison'],
    content: `JavaScript operatorlari.

Arifmetik operatorlar:
let a = 10, b = 3;
a + b    // 13 (qo'shish)
a - b    // 7 (ayirish)
a * b    // 30 (ko'paytirish)
a / b    // 3.33... (bo'lish)
a % b    // 1 (qoldiq)
a ** b   // 1000 (daraja)

Qisqartmalar:
let x = 5;
x += 3;  // x = x + 3 = 8
x -= 2;  // x = x - 2 = 6
x *= 2;  // x = x * 2 = 12
x /= 3;  // x = x / 3 = 4
x++;     // x = x + 1 = 5
x--;     // x = x - 1 = 4
++x;     // oldin oshiradi
--x;     // oldin kamaytiradi

Taqqoslash operatorlari:
5 == '5'     // true (qiymat teng)
5 === '5'    // false (qiymat VA tur teng)
5 != '5'     // false
5 !== '5'    // true
5 > 3        // true
5 < 3        // false
5 >= 5       // true
5 <= 4       // false

MUHIM: Har doim === va !== ishlating!

Mantiqiy operatorlar:
true && true   // true (VA)
true || false  // true (YOKI)
!true          // false (EMAS)

// Short-circuit
let name = user && user.name;     // user bo'lsa, name
let value = input || 'default';   // input bo'sh bo'lsa, default

Nullish Coalescing:
let value = null ?? 'default';    // 'default'
let value = 0 ?? 'default';       // 0 (0 null emas)
let value = '' ?? 'default';      // '' ('' null emas)

Optional Chaining:
let city = user?.address?.city;   // xato chiqmaydi
let method = obj.method?.();      // metod bo'lsa chaqiradi

Ternary operator:
let result = age >= 18 ? 'Katta' : 'Kichik';

// Ichma-ich
let status = score >= 90 ? 'A' 
           : score >= 80 ? 'B'
           : score >= 70 ? 'C'
           : 'F';

Spread operator:
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

let obj1 = { a: 1 };
let obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }`
  },
  {
    id: 'funksiyalar',
    title: "Funksiyalar",
    icon: FunctionSquare,
    keywords: ['function', 'funksiya', 'arrow', 'callback', 'return', 'parametr'],
    content: `Funksiyalar - qayta ishlatiluvchi kod bloklari.

Function Declaration:
function greet(name) {
    return 'Salom, ' + name;
}
greet('Ali'); // 'Salom, Ali'

Function Expression:
const greet = function(name) {
    return 'Salom, ' + name;
};

Arrow Function:
const greet = (name) => 'Salom, ' + name;
const greet = name => 'Salom, ' + name; // bitta parametr
const add = (a, b) => a + b;

// Ko'p qatorli
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

Default parametrlar:
function greet(name = 'Mehmon', greeting = 'Salom') {
    return \`\${greeting}, \${name}!\`;
}
greet();           // 'Salom, Mehmon!'
greet('Ali');      // 'Salom, Ali!'
greet('Ali', 'Hi'); // 'Hi, Ali!'

Rest parametrlar:
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

Destructuring parametrlar:
function createUser({ name, age, city = 'Toshkent' }) {
    return { name, age, city };
}
createUser({ name: 'Ali', age: 25 });

Callback funksiyalar:
function doSomething(callback) {
    const result = 'Natija';
    callback(result);
}

doSomething(function(data) {
    console.log(data);
});

// Arrow bilan
doSomething((data) => console.log(data));

IIFE (Immediately Invoked Function Expression):
(function() {
    console.log('Darhol ishga tushdi!');
})();

// Arrow bilan
(() => {
    console.log('Arrow IIFE');
})();

Closure:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
c.increment(); // 1
c.increment(); // 2
c.getCount();  // 2`
  },
  {
    id: 'shartlar',
    title: "Shartlar va sikllar",
    icon: Repeat,
    keywords: ['if', 'else', 'switch', 'for', 'while', 'loop', 'sikl', 'shart'],
    content: `Shartli operatorlar va sikllar.

If...else:
if (age >= 18) {
    console.log('Katta');
} else if (age >= 13) {
    console.log("O'smir");
} else {
    console.log('Bola');
}

Switch:
switch (day) {
    case 1:
        console.log('Dushanba');
        break;
    case 2:
        console.log('Seshanba');
        break;
    default:
        console.log('Boshqa kun');
}

// Guruhlash
switch (fruit) {
    case 'olma':
    case 'banan':
        console.log('Meva');
        break;
    case 'sabzi':
        console.log('Sabzavot');
        break;
}

For sikli:
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Teskari
for (let i = 5; i > 0; i--) {
    console.log(i); // 5, 4, 3, 2, 1
}

While sikli:
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

Do...while:
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

For...of (massivlar uchun):
const fruits = ['olma', 'banan', 'uzum'];
for (const fruit of fruits) {
    console.log(fruit);
}

For...in (obyektlar uchun):
const person = { name: 'Ali', age: 25 };
for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

Break va Continue:
for (let i = 0; i < 10; i++) {
    if (i === 5) break;     // sikldan chiqish
    if (i % 2 === 0) continue; // keyingisiga o'tish
    console.log(i); // 1, 3
}

Label bilan:
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer;
        console.log(i, j);
    }
}`
  },
  {
    id: 'massivlar',
    title: "Massivlar",
    icon: Database,
    keywords: ['array', 'massiv', 'map', 'filter', 'reduce', 'push', 'pop'],
    content: `Massivlar - tartiblangan ma'lumotlar to'plami.

Yaratish:
const arr = [1, 2, 3];
const arr2 = new Array(5);     // [empty × 5]
const arr3 = Array.from('abc'); // ['a', 'b', 'c']
const arr4 = Array(5).fill(0);  // [0, 0, 0, 0, 0]

Kirish:
const fruits = ['olma', 'banan', 'uzum'];
fruits[0];        // 'olma'
fruits[fruits.length - 1]; // 'uzum' (oxirgi)
fruits.at(-1);    // 'uzum' (oxirgi, yangi usul)

Asosiy metodlar:
// Oxiriga qo'shish/olish
fruits.push('anor');   // qo'shadi, yangi length qaytaradi
fruits.pop();          // oxirgini olib tashlaydi va qaytaradi

// Boshiga qo'shish/olish
fruits.unshift('nok'); // boshiga qo'shadi
fruits.shift();        // birinchisini olib tashlaydi

// O'chirish/qo'shish
fruits.splice(1, 1);           // index 1 dan 1 ta o'chirish
fruits.splice(1, 0, 'nok');    // index 1 ga qo'shish
fruits.splice(1, 1, 'gilos');  // almashtirish

// Kesish (yangi massiv)
fruits.slice(1, 3);    // index 1 dan 3 gacha (3 kirmasin)
fruits.slice(-2);      // oxirgi 2 ta

// Birlashtirish
const all = fruits.concat(['anor', 'nok']);
// yoki
const all = [...fruits, 'anor', 'nok'];

Qidirish:
fruits.indexOf('banan');      // 1 (topilmasa -1)
fruits.lastIndexOf('banan');  // oxirgi indeksi
fruits.includes('banan');     // true
fruits.find(f => f.length > 4);     // 'banan' (birinchi mos)
fruits.findIndex(f => f.length > 4); // 1

Iteratsiya metodlari:
// forEach - har bir elementga
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// map - yangi massiv
const lengths = fruits.map(f => f.length);

// filter - filtrlash
const long = fruits.filter(f => f.length > 4);

// reduce - yig'ish
const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0);

// some - kamida bittasi
const hasLong = fruits.some(f => f.length > 5);

// every - hammasi
const allShort = fruits.every(f => f.length < 10);

Tartiblash:
const nums = [3, 1, 4, 1, 5];
nums.sort();                    // string bo'yicha!
nums.sort((a, b) => a - b);     // o'sish bo'yicha
nums.sort((a, b) => b - a);     // kamayish bo'yicha
nums.reverse();                 // teskari`
  },
  {
    id: 'obyektlar',
    title: "Obyektlar",
    icon: Layers,
    keywords: ['object', 'obyekt', 'property', 'method', 'this', 'json'],
    content: `Obyektlar - kalit-qiymat juftliklari.

Yaratish:
const person = {
    name: 'Ali',
    age: 25,
    city: 'Toshkent',
    isStudent: true,
    greet() {
        return \`Salom, men \${this.name}\`;
    }
};

// Boshqa usullar
const obj = new Object();
const obj2 = Object.create(null);

Kirish:
person.name;         // 'Ali'
person['age'];       // 25
person.greet();      // 'Salom, men Ali'

// Dinamik kalit
const key = 'city';
person[key];         // 'Toshkent'

Qo'shish/O'zgartirish:
person.email = 'ali@email.com';
person['phone'] = '+998901234567';
person.age = 26;

O'chirish:
delete person.phone;

Tekshirish:
'name' in person;              // true
person.hasOwnProperty('age');  // true

Destructuring:
const { name, age } = person;
const { name: userName, age: userAge } = person; // qayta nomlash
const { name, ...rest } = person; // qolganlarini olish

// Default qiymat
const { country = 'Uzbekistan' } = person;

Spread operator:
const newPerson = { ...person, email: 'new@email.com' };
const merged = { ...obj1, ...obj2 };

Object metodlari:
Object.keys(person);    // ['name', 'age', 'city', ...]
Object.values(person);  // ['Ali', 25, 'Toshkent', ...]
Object.entries(person); // [['name', 'Ali'], ['age', 25], ...]
Object.assign({}, person, { age: 30 }); // birlashtirish
Object.freeze(person);  // o'zgartirish mumkin emas
Object.seal(person);    // yangi property qo'shib bo'lmaydi

Qisqartma sintaksis:
const name = 'Ali';
const age = 25;
const person = { name, age }; // { name: 'Ali', age: 25 }

// Computed property
const prop = 'score';
const obj = { [prop]: 100 }; // { score: 100 }

this:
const obj = {
    name: 'Ali',
    greet: function() {
        return this.name; // 'Ali'
    },
    // Arrow function bilan this ishlamaydi!
    arrowGreet: () => {
        return this.name; // undefined
    }
};`
  },
  {
    id: 'stringlar',
    title: "String metodlari",
    icon: FileJson,
    keywords: ['string', 'matn', 'text', 'substring', 'split', 'trim'],
    content: `String - matnli ma'lumotlar.

Yaratish:
const str1 = 'Salom';
const str2 = "Dunyo";
const str3 = \`Salom, \${name}!\`; // Template literal

Xususiyatlar:
str.length;          // uzunlik
str[0];              // birinchi belgi
str.charAt(0);       // birinchi belgi
str.charCodeAt(0);   // ASCII kodi

Qidirish:
str.indexOf('a');       // birinchi 'a' indeksi
str.lastIndexOf('a');   // oxirgi 'a' indeksi
str.includes('alom');   // true
str.startsWith('Sal');  // true
str.endsWith('om');     // true
str.search(/regex/);    // regex bilan qidirish

Kesish:
str.slice(0, 3);        // 'Sal' (0 dan 3 gacha)
str.slice(-2);          // 'om' (oxirgi 2 ta)
str.substring(0, 3);    // 'Sal'
str.substr(0, 3);       // 'Sal' (eskirgan)

O'zgartirish:
str.toUpperCase();      // 'SALOM'
str.toLowerCase();      // 'salom'
str.trim();             // bo'sh joylarni olib tashlash
str.trimStart();        // boshidan
str.trimEnd();          // oxiridan
str.padStart(10, '0');  // '00000Salom'
str.padEnd(10, '-');    // 'Salom-----'

Almashtirish:
str.replace('a', 'o');      // 'Solom' (birinchisini)
str.replaceAll('a', 'o');   // hammasi
str.replace(/a/g, 'o');     // regex bilan hammasi

Bo'lish va birlashtirish:
'a,b,c'.split(',');         // ['a', 'b', 'c']
'hello'.split('');          // ['h', 'e', 'l', 'l', 'o']
['a', 'b', 'c'].join('-');  // 'a-b-c'

Takrorlash:
'abc'.repeat(3);            // 'abcabcabc'

Template Literals:
const name = 'Ali';
const age = 25;
const message = \`Salom, \${name}! 
Yosh: \${age}
Keyingi yil: \${age + 1}\`;

// Tagged template
function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => 
        acc + str + (values[i] ? \`<b>\${values[i]}</b>\` : ''), '');
}
const result = highlight\`\${name} is \${age} years old\`;`
  },
  {
    id: 'asinxron',
    title: "Asinxron JavaScript",
    icon: Zap,
    keywords: ['async', 'await', 'promise', 'callback', 'fetch', 'asinxron'],
    content: `Asinxron kod - kutish kerak bo'lgan operatsiyalar.

Callback:
function fetchData(callback) {
    setTimeout(() => {
        callback('Ma\'lumot');
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

Promise:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Muvaffaqiyat!');
        } else {
            reject('Xato!');
        }
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Tugadi'));

Promise metodlari:
// Hammasi tugaguncha kutish
Promise.all([promise1, promise2])
    .then(results => console.log(results));

// Birinchi tugagan
Promise.race([promise1, promise2])
    .then(result => console.log(result));

// Hech biri reject bo'lmasa
Promise.allSettled([promise1, promise2])
    .then(results => console.log(results));

// Birinchi resolved
Promise.any([promise1, promise2])
    .then(result => console.log(result));

Async/Await:
async function getData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Xato:', error);
    } finally {
        console.log('Tugadi');
    }
}

// Parallel so'rovlar
async function getMultiple() {
    const [users, posts] = await Promise.all([
        fetch('/users').then(r => r.json()),
        fetch('/posts').then(r => r.json())
    ]);
    return { users, posts };
}

Fetch API:
// GET
const response = await fetch('https://api.example.com/data');
const data = await response.json();

// POST
const response = await fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Ali' })
});

// PUT, DELETE, etc.
await fetch(url, { method: 'PUT', body: ... });
await fetch(url, { method: 'DELETE' });`
  },
  {
    id: 'dom',
    title: "DOM bilan ishlash",
    icon: Globe,
    keywords: ['dom', 'document', 'element', 'event', 'click', 'html'],
    content: `DOM - Document Object Model.

Element tanlash:
// Bitta element
document.getElementById('id');
document.querySelector('.class');
document.querySelector('#id');
document.querySelector('div.box');

// Ko'p element
document.getElementsByClassName('class');  // HTMLCollection
document.getElementsByTagName('div');       // HTMLCollection
document.querySelectorAll('.class');        // NodeList

// Nisbiy tanlash
element.closest('.parent');     // eng yaqin ota
element.parentElement;          // bevosita ota
element.children;               // bolalar
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;

Element yaratish:
const div = document.createElement('div');
div.textContent = 'Salom';
div.innerHTML = '<strong>Salom</strong>';
div.id = 'myDiv';
div.className = 'box large';
div.classList.add('active');
div.classList.remove('active');
div.classList.toggle('active');
div.classList.contains('active');
div.setAttribute('data-id', '123');
div.getAttribute('data-id');
div.style.color = 'red';
div.style.cssText = 'color: red; font-size: 16px;';

DOM'ga qo'shish:
parent.appendChild(div);
parent.append(div, text, ...);   // oxiriga
parent.prepend(div);             // boshiga
parent.insertBefore(new, ref);
element.before(new);
element.after(new);
parent.replaceChild(new, old);
element.replaceWith(new);
element.remove();
parent.removeChild(child);

// insertAdjacentHTML
element.insertAdjacentHTML('beforebegin', '<div>Oldin</div>');
element.insertAdjacentHTML('afterbegin', '<div>Boshi</div>');
element.insertAdjacentHTML('beforeend', '<div>Oxiri</div>');
element.insertAdjacentHTML('afterend', '<div>Keyin</div>');

Event listeners:
button.addEventListener('click', (e) => {
    console.log('Bosildi!');
    console.log(e.target);      // bosilgan element
    console.log(e.currentTarget); // listener ulangan element
});

// Event'ni olib tashlash
const handler = () => console.log('Click');
button.addEventListener('click', handler);
button.removeEventListener('click', handler);

// Event bubbling to'xtatish
e.stopPropagation();

// Default xatti-harakatni to'xtatish
e.preventDefault();

Keng tarqalgan eventlar:
click, dblclick, mousedown, mouseup, mousemove,
mouseenter, mouseleave, mouseover, mouseout,
keydown, keyup, keypress,
focus, blur, input, change, submit,
scroll, resize, load, DOMContentLoaded`
  },
  {
    id: 'classlar',
    title: "ES6 Class",
    icon: Boxes,
    keywords: ['class', 'klass', 'constructor', 'extends', 'oop', 'inheritance'],
    content: `ES6 Class - obyektga yo'naltirilgan dasturlash.

Class yaratish:
class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet() {
        return \`Salom, men \${this.name}\`;
    }
    
    // Getter
    get info() {
        return \`\${this.name}, \${this.age} yosh\`;
    }
    
    // Setter
    set info(value) {
        [this.name, this.age] = value.split(', ');
    }
    
    // Static method (instance yaratmasdan chaqirish)
    static createAnonymous() {
        return new Person('Anonim', 0);
    }
}

const ali = new Person('Ali', 25);
ali.greet();              // 'Salom, men Ali'
ali.info;                 // 'Ali, 25 yosh'
Person.createAnonymous(); // new Person('Anonim', 0)

Meros olish (Inheritance):
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Ota constructorni chaqirish
        this.grade = grade;
    }
    
    // Override method
    greet() {
        return \`\${super.greet()}, men \${this.grade}-sinf o'quvchisi\`;
    }
    
    study() {
        return \`\${this.name} o'qiyapti\`;
    }
}

const student = new Student('Vali', 15, 9);
student.greet();  // 'Salom, men Vali, men 9-sinf o'quvchisi'
student.study();  // 'Vali o'qiyapti'

Private fields (yangi):
class BankAccount {
    #balance = 0;  // Private field
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
account.getBalance(); // 100
account.#balance;     // Error! Private

Static fields:
class Counter {
    static count = 0;
    
    constructor() {
        Counter.count++;
    }
    
    static getCount() {
        return Counter.count;
    }
}

new Counter();
new Counter();
Counter.getCount(); // 2

instanceof:
ali instanceof Person;  // true
ali instanceof Student; // false`
  },
  {
    id: 'modullar',
    title: "Modullar",
    icon: Package,
    keywords: ['module', 'modul', 'import', 'export', 'esm'],
    content: `ES6 Modullar - kodni tashkillashtirish.

Export:
// utils.js

// Named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export class Calculator { }

// yoki guruhlab
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
export { subtract, multiply };

// Default export (faylda faqat bitta)
export default function main() { }

// yoki
function main() { }
export default main;

Import:
// main.js

// Named imports
import { PI, add, Calculator } from './utils.js';

// Qayta nomlash
import { add as sum } from './utils.js';

// Hammasi
import * as utils from './utils.js';
utils.PI;
utils.add(1, 2);

// Default import
import main from './utils.js';

// Aralash
import main, { PI, add } from './utils.js';

Dynamic import:
// Kerak bo'lganda yuklash
const module = await import('./utils.js');
module.add(1, 2);

// yoki
import('./utils.js')
    .then(module => {
        module.add(1, 2);
    });

HTML'da modul ishlatish:
<script type="module" src="main.js"></script>

<script type="module">
    import { add } from './utils.js';
    console.log(add(1, 2));
</script>

Re-export:
// index.js - barcha modullarni birlashtirish
export { add, subtract } from './math.js';
export { default as Logger } from './logger.js';
export * from './utils.js';`
  },
  {
    id: 'xatoliklar',
    title: "Xatolarni boshqarish",
    icon: Bug,
    keywords: ['error', 'xato', 'try', 'catch', 'throw', 'debug'],
    content: `Xatolarni ushlash va boshqarish.

Try...Catch:
try {
    // Xato chiqishi mumkin bo'lgan kod
    const data = JSON.parse(invalidJson);
} catch (error) {
    // Xato ushlanadi
    console.error('Xato:', error.message);
} finally {
    // Har doim bajariladi
    console.log('Tugadi');
}

Error obyekti:
catch (error) {
    console.log(error.name);    // Error turi
    console.log(error.message); // Xabar
    console.log(error.stack);   // Stack trace
}

Xato turlari:
Error           // Umumiy xato
SyntaxError     // Sintaksis xatosi
ReferenceError  // Aniqlanmagan o'zgaruvchi
TypeError       // Noto'g'ri tur
RangeError      // Diapazondan tashqari
URIError        // URI xatosi

Xato tashlash:
function divide(a, b) {
    if (b === 0) {
        throw new Error('Nolga bo\'lish mumkin emas!');
    }
    return a / b;
}

// Custom Error
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

throw new ValidationError('Email noto\'g\'ri');

Asinxron xatolar:
// Promise
fetchData()
    .then(data => processData(data))
    .catch(error => console.error(error));

// Async/Await
async function getData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`HTTP error: \${response.status}\`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch xatosi:', error);
        throw error; // Qayta tashlash
    }
}

// Global error handler
window.onerror = function(message, source, line, column, error) {
    console.log('Global xato:', message);
};

window.addEventListener('unhandledrejection', (event) => {
    console.log('Ushlanmagan Promise:', event.reason);
});`
  },
  {
    id: 'localstorage',
    title: "Local Storage",
    icon: Clock,
    keywords: ['storage', 'saqlash', 'local', 'session', 'cookie'],
    content: `Brauzerda ma'lumotlarni saqlash.

Local Storage (doimiy):
// Saqlash
localStorage.setItem('name', 'Ali');
localStorage.setItem('user', JSON.stringify({ name: 'Ali', age: 25 }));

// Olish
const name = localStorage.getItem('name');
const user = JSON.parse(localStorage.getItem('user'));

// O'chirish
localStorage.removeItem('name');

// Hammasini o'chirish
localStorage.clear();

// Uzunlik
localStorage.length;

// Kalit bo'yicha
localStorage.key(0);

Session Storage (tab yopilganda o'chadi):
sessionStorage.setItem('token', 'abc123');
sessionStorage.getItem('token');
sessionStorage.removeItem('token');
sessionStorage.clear();

Storage event (boshqa tab'larda):
window.addEventListener('storage', (e) => {
    console.log('Key:', e.key);
    console.log('Old:', e.oldValue);
    console.log('New:', e.newValue);
});

Cookies:
// O'rnatish
document.cookie = 'name=Ali';
document.cookie = 'name=Ali; expires=Fri, 31 Dec 2024 23:59:59 GMT';
document.cookie = 'name=Ali; max-age=86400'; // 1 kun
document.cookie = 'name=Ali; path=/; secure; SameSite=Strict';

// O'qish
const cookies = document.cookie; // 'name=Ali; age=25'

// O'chirish
document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 GMT';

// Cookie helper
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = \`\${name}=\${value}; expires=\${expires.toUTCString()}; path=/\`;
}

function getCookie(name) {
    const match = document.cookie.match(new RegExp(\`(^| )\${name}=([^;]+)\`));
    return match ? match[2] : null;
}

Storage hajmi:
// ~5MB Local/Session Storage
// ~4KB Cookies

IndexedDB (katta ma'lumotlar uchun):
// Murakkab, ko'p ma'lumotlar uchun
// Promise-based wrapper ishlatish tavsiya etiladi (idb, Dexie.js)`
  },
  {
    id: 'hodisalar',
    title: "Event Handling",
    icon: Workflow,
    keywords: ['event', 'hodisa', 'listener', 'click', 'keyboard', 'mouse'],
    content: `Hodisalarni boshqarish.

Event Listeners:
// Qo'shish
element.addEventListener('click', handleClick);
element.addEventListener('click', handleClick, { once: true }); // Bir marta

// Olib tashlash
element.removeEventListener('click', handleClick);

// Options
element.addEventListener('scroll', handler, { passive: true }); // Performance

Event Object:
element.addEventListener('click', (event) => {
    event.target;         // Bosilgan element
    event.currentTarget;  // Listener ulangan element
    event.type;           // 'click'
    event.timeStamp;      // Vaqt
    
    event.preventDefault();    // Default to'xtatish
    event.stopPropagation();   // Bubbling to'xtatish
    event.stopImmediatePropagation(); // Barcha handlerlarni to'xtatish
});

Mouse Events:
click, dblclick, contextmenu,
mousedown, mouseup, mousemove,
mouseenter, mouseleave, // bubbling yo'q
mouseover, mouseout     // bubbling bor

element.addEventListener('mousemove', (e) => {
    e.clientX, e.clientY; // Viewport'ga nisbatan
    e.pageX, e.pageY;     // Sahifaga nisbatan
    e.offsetX, e.offsetY; // Elementga nisbatan
    e.button;             // 0-chap, 1-o'rta, 2-o'ng
});

Keyboard Events:
keydown, keyup, keypress (eskirgan)

document.addEventListener('keydown', (e) => {
    e.key;        // 'a', 'Enter', 'ArrowUp'
    e.code;       // 'KeyA', 'Enter', 'ArrowUp'
    e.ctrlKey;    // Ctrl bosilganmi
    e.shiftKey;   // Shift bosilganmi
    e.altKey;     // Alt bosilganmi
    e.metaKey;    // Cmd/Win bosilganmi
    
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        console.log('Saqlash!');
    }
});

Form Events:
submit, reset, input, change, focus, blur

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // ... yuborish
});

input.addEventListener('input', (e) => {
    console.log(e.target.value); // Real-time
});

Event Delegation:
// Ko'p elementga bitta listener
document.addEventListener('click', (e) => {
    if (e.target.matches('.delete-btn')) {
        const item = e.target.closest('.item');
        item.remove();
    }
});

Custom Events:
// Yaratish va yuborish
const event = new CustomEvent('userLogin', {
    detail: { userId: 123, name: 'Ali' }
});
element.dispatchEvent(event);

// Ushlash
element.addEventListener('userLogin', (e) => {
    console.log(e.detail.name);
});`
  },
  {
    id: 'qollanma',
    title: "Foydali amaliyotlar",
    icon: Shield,
    keywords: ['best', 'practice', 'yaxshi', 'amaliyot', 'tavsiya', 'tip'],
    content: `JavaScript yozishda foydali amaliyotlar.

O'zgaruvchilar:
✅ const'dan foydalaning (o'zgartirmasangiz)
✅ let ishlatang (o'zgarishi kerak bo'lsa)
❌ var ishlatmang

Funksiyalar:
✅ Arrow function ishlatang (qisqa, this bilan muammo yo'q)
✅ Pure functions yozing (side effect yo'q)
✅ Early return ishlatang

// Yomon
function getStatus(age) {
    if (age >= 18) {
        return 'adult';
    } else {
        return 'minor';
    }
}

// Yaxshi
const getStatus = (age) => age >= 18 ? 'adult' : 'minor';

Massivlar:
✅ map, filter, reduce ishlatang
✅ Spread operator ishlatang
❌ for loop o'rniga metodlar

// Yomon
const doubled = [];
for (let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2);
}

// Yaxshi
const doubled = arr.map(n => n * 2);

Xatolarni tekshirish:
✅ Optional chaining (?.) ishlatang
✅ Nullish coalescing (??) ishlatang

// Yomon
const city = user && user.address && user.address.city;

// Yaxshi
const city = user?.address?.city;
const name = input ?? 'Default';

Asinxron kod:
✅ async/await ishlatang
✅ try/catch bilan xatolarni ushlang
❌ Callback hell'dan qoching

Nomlash:
✅ Tushunarli nomlar bering
✅ camelCase ishlatang (o'zgaruvchi, funksiya)
✅ PascalCase ishlatang (class)
✅ UPPER_SNAKE_CASE ishlatang (const)

const MAX_ITEMS = 100;
const getUserById = (id) => {};
class UserService {}

Koddan foydalanish:
✅ DRY (Don't Repeat Yourself)
✅ KISS (Keep It Simple, Stupid)
✅ Kichik funksiyalar yozing
✅ Izohlar yozing (murakkab joylar)
✅ ESLint va Prettier ishlatang`
  }
];

const KutubxonaJs = () => {
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
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl gradient-js flex items-center justify-center glow-js flex-shrink-0">
              <Braces className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">JavaScript Qo'llanma</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">Asoslardan ilg'or mavzulargacha</p>
            </div>
          </div>
        </header>

        {/* Search */}
        <div className="relative mb-4 sm:mb-6 animate-slide-up">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Mavzuni qidirish... (masalan: array, async, dom)"
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
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-js flex items-center justify-center flex-shrink-0">
                  <topic.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-js flex-1">{topic.title}</h2>
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
          <p className="text-sm text-muted-foreground mb-3 sm:mb-4">JavaScript bo'yicha 100 ta savol-javob testlarini yeching</p>
          <Link 
            to="/javascript"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg gradient-js text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <BookOpen className="w-4 h-4" />
            <span>Testlarni boshlash</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default KutubxonaJs;
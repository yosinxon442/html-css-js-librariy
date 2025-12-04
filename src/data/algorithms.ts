export interface Algorithm {
  id: number;
  title: string;
  description: string;
  difficulty: 'oson' | "o'rta" | 'qiyin';
  example: string;
  solution: string;
}

export const algorithms: Algorithm[] = [
  {
    id: 1,
    title: "3 xonali sonni teskari qilish",
    description: "3 xonali son kiritilganda, uni raqamlarini teskari tartibda chiqaring.",
    difficulty: 'oson',
    example: "Kirish: 123 → Chiqish: 321",
    solution: `function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}`
  },
  {
    id: 2,
    title: "Juft yoki toq",
    description: "Kiritilgan son juft yoki toq ekanligini aniqlang.",
    difficulty: 'oson',
    example: "Kirish: 4 → Chiqish: 'Juft'",
    solution: `function isEvenOrOdd(num) {
  return num % 2 === 0 ? 'Juft' : 'Toq';
}`
  },
  {
    id: 3,
    title: "Faktorial hisoblash",
    description: "Berilgan sonning faktorialini hisoblang (n!).",
    difficulty: 'oson',
    example: "Kirish: 5 → Chiqish: 120",
    solution: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`
  },
  {
    id: 4,
    title: "Fibonachchi ketma-ketligi",
    description: "n-chi Fibonachchi sonini toping.",
    difficulty: "o'rta",
    example: "Kirish: 7 → Chiqish: 13 (0,1,1,2,3,5,8,13)",
    solution: `function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}`
  },
  {
    id: 5,
    title: "Tub son tekshirish",
    description: "Berilgan son tub son ekanligini aniqlang.",
    difficulty: "o'rta",
    example: "Kirish: 17 → Chiqish: true",
    solution: `function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}`
  },
  {
    id: 6,
    title: "Massivdagi eng katta son",
    description: "Massivdagi eng katta elementni toping.",
    difficulty: 'oson',
    example: "Kirish: [3, 7, 2, 9, 1] → Chiqish: 9",
    solution: `function findMax(arr) {
  return Math.max(...arr);
}`
  },
  {
    id: 7,
    title: "Massivdagi eng kichik son",
    description: "Massivdagi eng kichik elementni toping.",
    difficulty: 'oson',
    example: "Kirish: [3, 7, 2, 9, 1] → Chiqish: 1",
    solution: `function findMin(arr) {
  return Math.min(...arr);
}`
  },
  {
    id: 8,
    title: "Massiv yig'indisi",
    description: "Massiv elementlari yig'indisini hisoblang.",
    difficulty: 'oson',
    example: "Kirish: [1, 2, 3, 4, 5] → Chiqish: 15",
    solution: `function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}`
  },
  {
    id: 9,
    title: "Massiv o'rtachasi",
    description: "Massiv elementlarining o'rtacha qiymatini toping.",
    difficulty: 'oson',
    example: "Kirish: [10, 20, 30] → Chiqish: 20",
    solution: `function average(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}`
  },
  {
    id: 10,
    title: "Palindrom tekshirish",
    description: "Stringning palindrom ekanligini tekshiring.",
    difficulty: "o'rta",
    example: "Kirish: 'radar' → Chiqish: true",
    solution: `function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}`
  },
  {
    id: 11,
    title: "Sonning raqamlari yig'indisi",
    description: "Berilgan sonning barcha raqamlari yig'indisini hisoblang.",
    difficulty: 'oson',
    example: "Kirish: 12345 → Chiqish: 15",
    solution: `function digitSum(num) {
  return num.toString().split('').reduce((sum, d) => sum + parseInt(d), 0);
}`
  },
  {
    id: 12,
    title: "Raqamlar soni",
    description: "Berilgan sondagi raqamlar sonini toping.",
    difficulty: 'oson',
    example: "Kirish: 12345 → Chiqish: 5",
    solution: `function countDigits(num) {
  return Math.abs(num).toString().length;
}`
  },
  {
    id: 13,
    title: "EKUB topish",
    description: "Ikki sonning eng katta umumiy bo'luvchisini toping.",
    difficulty: "o'rta",
    example: "Kirish: 48, 18 → Chiqish: 6",
    solution: `function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}`
  },
  {
    id: 14,
    title: "EKUK topish",
    description: "Ikki sonning eng kichik umumiy karralisini toping.",
    difficulty: "o'rta",
    example: "Kirish: 4, 6 → Chiqish: 12",
    solution: `function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}`
  },
  {
    id: 15,
    title: "Darajaga ko'tarish",
    description: "Sonni berilgan darajaga ko'taring (rekursiv).",
    difficulty: 'oson',
    example: "Kirish: 2, 10 → Chiqish: 1024",
    solution: `function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}`
  },
  {
    id: 16,
    title: "Massivni saralash (Bubble Sort)",
    description: "Bubble sort algoritmi yordamida massivni saralang.",
    difficulty: "o'rta",
    example: "Kirish: [64, 34, 25, 12] → Chiqish: [12, 25, 34, 64]",
    solution: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`
  },
  {
    id: 17,
    title: "Binary Search",
    description: "Saralangan massivda elementni binary search bilan toping.",
    difficulty: "o'rta",
    example: "Kirish: [1,3,5,7,9], 5 → Chiqish: 2 (indeks)",
    solution: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`
  },
  {
    id: 18,
    title: "Anagramma tekshirish",
    description: "Ikki string anagramma ekanligini tekshiring.",
    difficulty: "o'rta",
    example: "Kirish: 'listen', 'silent' → Chiqish: true",
    solution: `function isAnagram(str1, str2) {
  const clean = s => s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return clean(str1) === clean(str2);
}`
  },
  {
    id: 19,
    title: "FizzBuzz",
    description: "1 dan n gacha sonlar uchun FizzBuzz yozing.",
    difficulty: 'oson',
    example: "3 ga bo'linsa 'Fizz', 5 ga 'Buzz', ikkalasiga 'FizzBuzz'",
    solution: `function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(i);
  }
  return result;
}`
  },
  {
    id: 20,
    title: "Takrorlanuvchi elementlar",
    description: "Massivdagi takrorlanuvchi elementlarni toping.",
    difficulty: "o'rta",
    example: "Kirish: [1,2,3,2,4,3] → Chiqish: [2,3]",
    solution: `function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  arr.forEach(item => {
    if (seen.has(item)) duplicates.add(item);
    seen.add(item);
  });
  return [...duplicates];
}`
  },
  {
    id: 21,
    title: "Ikki sonning yig'indisi",
    description: "Massivdan yig'indisi berilgan songa teng bo'lgan juftlikni toping.",
    difficulty: "o'rta",
    example: "Kirish: [2,7,11,15], 9 → Chiqish: [0,1]",
    solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
  },
  {
    id: 22,
    title: "Stringni teskari qilish",
    description: "Berilgan stringni teskari qilib qaytaring.",
    difficulty: 'oson',
    example: "Kirish: 'hello' → Chiqish: 'olleh'",
    solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}`
  },
  {
    id: 23,
    title: "So'zlarni teskari qilish",
    description: "Gapning har bir so'zini teskari qiling.",
    difficulty: "o'rta",
    example: "Kirish: 'Hello World' → Chiqish: 'olleH dlroW'",
    solution: `function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}`
  },
  {
    id: 24,
    title: "Har xil elementlar",
    description: "Massivdagi takrorlanmas (noyob) elementlarni qaytaring.",
    difficulty: 'oson',
    example: "Kirish: [1,2,2,3,3,4] → Chiqish: [1,2,3,4]",
    solution: `function uniqueElements(arr) {
  return [...new Set(arr)];
}`
  },
  {
    id: 25,
    title: "Kichik harflarga o'tkazish",
    description: "Stringni kichik harflarga o'tkazing (o'zingiz yozing).",
    difficulty: 'oson',
    example: "Kirish: 'HELLO' → Chiqish: 'hello'",
    solution: `function toLowerCase(str) {
  let result = '';
  for (let char of str) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += char;
    }
  }
  return result;
}`
  },
  {
    id: 26,
    title: "Armstrong soni",
    description: "Son Armstrong soni ekanligini tekshiring.",
    difficulty: "o'rta",
    example: "153 = 1³ + 5³ + 3³ = 153 → true",
    solution: `function isArmstrong(num) {
  const digits = num.toString().split('');
  const n = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(parseInt(d), n), 0);
  return sum === num;
}`
  },
  {
    id: 27,
    title: "Kelsiy dan Farengeytga",
    description: "Kelsiy temperaturasini Farengeytga aylantiring.",
    difficulty: 'oson',
    example: "Kirish: 0°C → Chiqish: 32°F",
    solution: `function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}`
  },
  {
    id: 28,
    title: "Yosh hisoblash",
    description: "Tug'ilgan yildan yoshni hisoblang.",
    difficulty: 'oson',
    example: "Kirish: 2000 → Chiqish: 24 (2024 yilda)",
    solution: `function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}`
  },
  {
    id: 29,
    title: "Kabisa yili",
    description: "Yil kabisa ekanligini aniqlang.",
    difficulty: 'oson',
    example: "Kirish: 2024 → Chiqish: true",
    solution: `function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}`
  },
  {
    id: 30,
    title: "Mukammal son",
    description: "Son mukammal ekanligini tekshiring (bo'luvchilari yig'indisi o'ziga teng).",
    difficulty: "o'rta",
    example: "6 = 1 + 2 + 3 = 6 → true",
    solution: `function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}`
  },
  {
    id: 31,
    title: "Sonni so'zlarda ifodalash",
    description: "0-9 raqamlarini so'zlarda ifodalang.",
    difficulty: 'oson',
    example: "Kirish: 5 → Chiqish: 'besh'",
    solution: `function numberToWord(num) {
  const words = ['nol', 'bir', 'ikki', 'uch', 'to\\'rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to\\'qqiz'];
  return words[num] || 'noto\\'g\\'ri raqam';
}`
  },
  {
    id: 32,
    title: "Massivni aralashtirish",
    description: "Massiv elementlarini tasodifiy tartibda aralashtiring.",
    difficulty: 'oson',
    example: "Kirish: [1,2,3,4,5] → Chiqish: [3,1,5,2,4]",
    solution: `function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}`
  },
  {
    id: 33,
    title: "Harf soni",
    description: "Stringdagi har bir harfning necha marta uchrashini hisoblang.",
    difficulty: "o'rta",
    example: "Kirish: 'hello' → Chiqish: {h:1, e:1, l:2, o:1}",
    solution: `function countLetters(str) {
  const count = {};
  for (let char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      count[char] = (count[char] || 0) + 1;
    }
  }
  return count;
}`
  },
  {
    id: 34,
    title: "Eng ko'p takrorlangan element",
    description: "Massivda eng ko'p takrorlangan elementni toping.",
    difficulty: "o'rta",
    example: "Kirish: [1,2,2,3,3,3] → Chiqish: 3",
    solution: `function mostFrequent(arr) {
  const count = {};
  arr.forEach(item => count[item] = (count[item] || 0) + 1);
  return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
}`
  },
  {
    id: 35,
    title: "Ikki massivni birlashtirish",
    description: "Ikki saralangan massivni bitta saralangan massivga birlashtiring.",
    difficulty: "o'rta",
    example: "Kirish: [1,3,5], [2,4,6] → Chiqish: [1,2,3,4,5,6]",
    solution: `function mergeSorted(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}`
  },
  {
    id: 36,
    title: "Matritsa transpozitsiyasi",
    description: "2D massiv (matritsa) transpozitsiyasini bajaring.",
    difficulty: "o'rta",
    example: "[[1,2],[3,4]] → [[1,3],[2,4]]",
    solution: `function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map(row => row[i]));
}`
  },
  {
    id: 37,
    title: "Spiral matritsa",
    description: "n×n o'lchamli spiral matritsani yarating.",
    difficulty: 'qiyin',
    example: "n=3 → [[1,2,3],[8,9,4],[7,6,5]]",
    solution: `function spiralMatrix(n) {
  const matrix = Array(n).fill(null).map(() => Array(n).fill(0));
  let num = 1, top = 0, bottom = n - 1, left = 0, right = n - 1;
  while (num <= n * n) {
    for (let i = left; i <= right; i++) matrix[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
    right--;
    for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
    left++;
  }
  return matrix;
}`
  },
  {
    id: 38,
    title: "Stringdagi unli harflar",
    description: "Stringdagi unli harflar sonini hisoblang.",
    difficulty: 'oson',
    example: "Kirish: 'Hello World' → Chiqish: 3",
    solution: `function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}`
  },
  {
    id: 39,
    title: "Camel Case ga o'tkazish",
    description: "Stringni camelCase formatiga o'tkazing.",
    difficulty: "o'rta",
    example: "Kirish: 'hello world' → Chiqish: 'helloWorld'",
    solution: `function toCamelCase(str) {
  return str.split(' ').map((word, i) => 
    i === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');
}`
  },
  {
    id: 40,
    title: "Snake Case ga o'tkazish",
    description: "Stringni snake_case formatiga o'tkazing.",
    difficulty: 'oson',
    example: "Kirish: 'Hello World' → Chiqish: 'hello_world'",
    solution: `function toSnakeCase(str) {
  return str.toLowerCase().replace(/\\s+/g, '_');
}`
  },
  {
    id: 41,
    title: "Qavslar balansi",
    description: "Qavslar to'g'ri joylashganligini tekshiring.",
    difficulty: "o'rta",
    example: "Kirish: '({[]})' → Chiqish: true",
    solution: `function isBalanced(str) {
  const stack = [];
  const pairs = { '(': ')', '{': '}', '[': ']' };
  for (let char of str) {
    if (pairs[char]) stack.push(pairs[char]);
    else if (Object.values(pairs).includes(char)) {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
}`
  },
  {
    id: 42,
    title: "Ro'mcha raqamlarni o'girish",
    description: "Ro'mcha raqamlarni arab raqamlariga o'giring.",
    difficulty: "o'rta",
    example: "Kirish: 'XIV' → Chiqish: 14",
    solution: `function romanToInt(s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) result -= map[s[i]];
    else result += map[s[i]];
  }
  return result;
}`
  },
  {
    id: 43,
    title: "Arab raqamlarni Ro'mchaga",
    description: "Arab raqamlarni ro'mcha raqamlarga o'giring.",
    difficulty: "o'rta",
    example: "Kirish: 14 → Chiqish: 'XIV'",
    solution: `function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += numerals[i];
      num -= values[i];
    }
  }
  return result;
}`
  },
  {
    id: 44,
    title: "Eng uzun so'z",
    description: "Gapdagi eng uzun so'zni toping.",
    difficulty: 'oson',
    example: "Kirish: 'The quick brown fox' → Chiqish: 'quick'",
    solution: `function longestWord(str) {
  return str.split(' ').reduce((longest, word) => 
    word.length > longest.length ? word : longest, '');
}`
  },
  {
    id: 45,
    title: "So'zlarni hisoblash",
    description: "Gapdagi so'zlar sonini hisoblang.",
    difficulty: 'oson',
    example: "Kirish: 'Hello World' → Chiqish: 2",
    solution: `function countWords(str) {
  return str.trim().split(/\\s+/).filter(word => word.length > 0).length;
}`
  },
  {
    id: 46,
    title: "Ketma-ket raqamlar",
    description: "Massivda ketma-ket raqamlar borligini tekshiring.",
    difficulty: "o'rta",
    example: "Kirish: [1,2,3,5,6] → Chiqish: true (1,2,3 ketma-ket)",
    solution: `function hasConsecutive(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] + 1 === sorted[i+1] && sorted[i+1] + 1 === sorted[i+2]) {
      return true;
    }
  }
  return false;
}`
  },
  {
    id: 47,
    title: "Ikkilik sanoq sistemasi",
    description: "O'nlik sonni ikkilikka o'tkazing.",
    difficulty: 'oson',
    example: "Kirish: 10 → Chiqish: '1010'",
    solution: `function decimalToBinary(num) {
  return num.toString(2);
}`
  },
  {
    id: 48,
    title: "Ikkilikdan o'nlikka",
    description: "Ikkilik sonni o'nlikka o'tkazing.",
    difficulty: 'oson',
    example: "Kirish: '1010' → Chiqish: 10",
    solution: `function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}`
  },
  {
    id: 49,
    title: "Palindrom son",
    description: "Son palindrom ekanligini tekshiring.",
    difficulty: 'oson',
    example: "Kirish: 121 → Chiqish: true",
    solution: `function isPalindromeNumber(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}`
  },
  {
    id: 50,
    title: "Massivni tekislash",
    description: "Ko'p o'lchovli massivni bir o'lchovli qiling.",
    difficulty: "o'rta",
    example: "Kirish: [[1,2],[3,[4,5]]] → Chiqish: [1,2,3,4,5]",
    solution: `function flattenArray(arr) {
  return arr.flat(Infinity);
}`
  },
  {
    id: 51,
    title: "Birinchi takrorlanmas harf",
    description: "Stringdagi birinchi takrorlanmas harfni toping.",
    difficulty: "o'rta",
    example: "Kirish: 'leetcode' → Chiqish: 'l'",
    solution: `function firstUniqChar(s) {
  for (let char of s) {
    if (s.indexOf(char) === s.lastIndexOf(char)) return char;
  }
  return null;
}`
  },
  {
    id: 52,
    title: "Ikki massivning kesishishi",
    description: "Ikki massivning umumiy elementlarini toping.",
    difficulty: 'oson',
    example: "Kirish: [1,2,3], [2,3,4] → Chiqish: [2,3]",
    solution: `function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}`
  },
  {
    id: 53,
    title: "Ikki massivning birlashmasi",
    description: "Ikki massivning barcha noyob elementlarini toping.",
    difficulty: 'oson',
    example: "Kirish: [1,2,3], [2,3,4] → Chiqish: [1,2,3,4]",
    solution: `function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}`
  },
  {
    id: 54,
    title: "Massivning farqi",
    description: "Birinchi massivda bo'lib, ikkinchisida yo'q elementlarni toping.",
    difficulty: 'oson',
    example: "Kirish: [1,2,3], [2,3] → Chiqish: [1]",
    solution: `function difference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}`
  },
  {
    id: 55,
    title: "Massivni guruhlash",
    description: "Massivni berilgan o'lchamdagi guruxlarga bo'ling.",
    difficulty: "o'rta",
    example: "Kirish: [1,2,3,4,5], 2 → Chiqish: [[1,2],[3,4],[5]]",
    solution: `function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}`
  },
  {
    id: 56,
    title: "Massivni zip qilish",
    description: "Ikki massivni juftliklar massiviga birlashtiring.",
    difficulty: "o'rta",
    example: "Kirish: [1,2,3], ['a','b','c'] → Chiqish: [[1,'a'],[2,'b'],[3,'c']]",
    solution: `function zipArrays(arr1, arr2) {
  return arr1.map((item, i) => [item, arr2[i]]);
}`
  },
  {
    id: 57,
    title: "Range yaratish",
    description: "Start dan end gacha raqamlar massivini yarating.",
    difficulty: 'oson',
    example: "Kirish: 1, 5 → Chiqish: [1,2,3,4,5]",
    solution: `function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}`
  },
  {
    id: 58,
    title: "Tasodifiy son",
    description: "Berilgan oraliqda tasodifiy butun son yarating.",
    difficulty: 'oson',
    example: "Kirish: 1, 10 → Chiqish: 7 (tasodifiy)",
    solution: `function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}`
  },
  {
    id: 59,
    title: "Capitalize qilish",
    description: "Har bir so'zning birinchi harfini katta qiling.",
    difficulty: 'oson',
    example: "Kirish: 'hello world' → Chiqish: 'Hello World'",
    solution: `function capitalize(str) {
  return str.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}`
  },
  {
    id: 60,
    title: "Truncate string",
    description: "Stringni berilgan uzunlikda kesib, ... qo'shing.",
    difficulty: 'oson',
    example: "Kirish: 'Hello World', 5 → Chiqish: 'Hello...'",
    solution: `function truncate(str, length) {
  return str.length > length ? str.slice(0, length) + '...' : str;
}`
  },
  {
    id: 61,
    title: "Ketma-ket yig'indi",
    description: "Massivdan ketma-ket elementlarning eng katta yig'indisini toping.",
    difficulty: 'qiyin',
    example: "Kirish: [-2,1,-3,4,-1,2,1,-5,4] → Chiqish: 6 ([4,-1,2,1])",
    solution: `function maxSubArray(nums) {
  let maxSum = nums[0], currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`
  },
  {
    id: 62,
    title: "Eng uzun umumiy prefiks",
    description: "Stringlar massivining eng uzun umumiy prefiksini toping.",
    difficulty: "o'rta",
    example: "Kirish: ['flower','flow','flight'] → Chiqish: 'fl'",
    solution: `function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }
  return prefix;
}`
  },
  {
    id: 63,
    title: "Valid Email tekshirish",
    description: "Email manzili to'g'ri formatda ekanligini tekshiring.",
    difficulty: "o'rta",
    example: "Kirish: 'test@example.com' → Chiqish: true",
    solution: `function isValidEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}`
  },
  {
    id: 64,
    title: "Telefon raqami formatlash",
    description: "Telefon raqamini formatlang.",
    difficulty: 'oson',
    example: "Kirish: '998901234567' → Chiqish: '+998 90 123 45 67'",
    solution: `function formatPhone(phone) {
  const clean = phone.replace(/\\D/g, '');
  return '+' + clean.slice(0,3) + ' ' + clean.slice(3,5) + ' ' + 
         clean.slice(5,8) + ' ' + clean.slice(8,10) + ' ' + clean.slice(10);
}`
  },
  {
    id: 65,
    title: "Pul formatini yaratish",
    description: "Raqamni pul formatida ko'rsating.",
    difficulty: 'oson',
    example: "Kirish: 1234567 → Chiqish: '1,234,567'",
    solution: `function formatCurrency(num) {
  return num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',');
}`
  },
  {
    id: 66,
    title: "Vaqtni formatlash",
    description: "Sekundlarni soat:minut:sekund formatiga o'tkazing.",
    difficulty: 'oson',
    example: "Kirish: 3661 → Chiqish: '01:01:01'",
    solution: `function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}`
  },
  {
    id: 67,
    title: "Sanani formatlash",
    description: "Date objektini 'DD/MM/YYYY' formatida ko'rsating.",
    difficulty: 'oson',
    example: "Kirish: new Date() → Chiqish: '15/01/2024'",
    solution: `function formatDate(date) {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear();
  return d + '/' + m + '/' + y;
}`
  },
  {
    id: 68,
    title: "Kunlar farqi",
    description: "Ikki sana orasidagi kunlar sonini hisoblang.",
    difficulty: 'oson',
    example: "Kirish: '2024-01-01', '2024-01-15' → Chiqish: 14",
    solution: `function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diff = Math.abs(d2 - d1);
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}`
  },
  {
    id: 69,
    title: "Deep Clone",
    description: "Objektni chuqur nusxalang.",
    difficulty: "o'rta",
    example: "Kirish: {a: {b: 1}} → Chiqish: yangi mustaqil objekt",
    solution: `function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}`
  },
  {
    id: 70,
    title: "Objektlarni birlashtirish",
    description: "Ikki objektni chuqur birlashtirib, yangi objekt yarating.",
    difficulty: "o'rta",
    example: "Kirish: {a:1}, {b:2} → Chiqish: {a:1, b:2}",
    solution: `function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}`
  },
  {
    id: 71,
    title: "Debounce funksiyasi",
    description: "Debounce funksiyasini yarating.",
    difficulty: 'qiyin',
    example: "Funksiya faqat oxirgi chaqiriqdan keyin ishlaydi",
    solution: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}`
  },
  {
    id: 72,
    title: "Throttle funksiyasi",
    description: "Throttle funksiyasini yarating.",
    difficulty: 'qiyin',
    example: "Funksiya belgilangan vaqt ichida faqat bir marta ishlaydi",
    solution: `function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}`
  },
  {
    id: 73,
    title: "Memoization",
    description: "Funksiya natijalarini keshlash wrapper yarating.",
    difficulty: 'qiyin',
    example: "Bir xil argumentlar uchun qayta hisoblash yo'q",
    solution: `function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}`
  },
  {
    id: 74,
    title: "Curry funksiyasi",
    description: "Funksiyani curry qilish.",
    difficulty: 'qiyin',
    example: "add(1,2,3) → add(1)(2)(3)",
    solution: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}`
  },
  {
    id: 75,
    title: "Pipe funksiyasi",
    description: "Funksiyalarni ketma-ket bajaring.",
    difficulty: "o'rta",
    example: "pipe(fn1, fn2, fn3)(x) = fn3(fn2(fn1(x)))",
    solution: `function pipe(...fns) {
  return function(x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}`
  },
  {
    id: 76,
    title: "Compose funksiyasi",
    description: "Funksiyalarni teskari ketma-ketlikda bajaring.",
    difficulty: "o'rta",
    example: "compose(fn1, fn2, fn3)(x) = fn1(fn2(fn3(x)))",
    solution: `function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}`
  },
  {
    id: 77,
    title: "Promise.all amalga oshirish",
    description: "O'zingizning Promise.all versiyangizni yarating.",
    difficulty: 'qiyin',
    example: "Barcha promiselar bajarilganda resolve bo'ladi",
    solution: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(value => {
        results[index] = value;
        completed++;
        if (completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}`
  },
  {
    id: 78,
    title: "Retry funksiyasi",
    description: "Xatolik bo'lganda qayta urinish funksiyasini yarating.",
    difficulty: 'qiyin',
    example: "3 marta urinib ko'radi, keyin xatolik qaytaradi",
    solution: `async function retry(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay);
  }
}`
  },
  {
    id: 79,
    title: "Event Emitter",
    description: "Oddiy event emitter klassi yarating.",
    difficulty: 'qiyin',
    example: "on(), emit(), off() metodlari",
    solution: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(...args));
    }
  }
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}`
  },
  {
    id: 80,
    title: "LRU Cache",
    description: "LRU (Least Recently Used) cache yarating.",
    difficulty: 'qiyin',
    example: "Kamdan kam ishlatilganlarni o'chiradi",
    solution: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}`
  }
];

// Перенос строк и зеркаливание внутри ковычек
// - Did Joffrey agree?
// - He did. He also said "I love using \n".
// console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".')

// Преобразование чисел
// const value = '0';
// const number1 = parseInt(value);
// console.log(number1); // => 0
// // Или конкретное значение
// const number2 = parseInt('10');
// console.log(number2); // => 10
// // Если преобразуется число с плавающей точкой
// // то отбрасывается вся дробная часть
// const number5 = parseInt(3.5);
// console.log(number5); // => 3
// Точно так же можно преобразовать строку в число с плавающей точкой с помощью parseFloat():
// const value3 = parseFloat('0.5');
// console.log(value3); // 0.5

// Присвоение индекса
// const one = 'Naharis';
// const two = 'Mormont';
// const three = 'Sand';
// console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`)

// Вывод символа текста
// import {length} from './src/string.js';
// const text = 'Never forget what you are, for surely the world will not';
// const searchIndex = (`First: ${text[0]}\nLast: ${text[length(text) - 1]}`);
// console.log(searchIndex);

// 
// Функции
// Округление числа (Все математические функции есть в Math)
// const round = (number, precision = 0) => {
//     return Math.round( number * Math.pow(10, precision)) / Math.pow(10, precision);
//   };
//   console.log(round(2.49)); // 2
//   console.log(round(3.1231434, 2)); // 3.12
//   console.log(round(10.49, 1)); // 10.3
// Округление числа (Все математические функции есть в Math)
//   const number = 923.2238;
//   console.log(Math.ceil(number));
//   console.log(number)
// Поиск минимального числа 
// const res = Math.min(3, 10, 22, -3, 0);
// console.log(res);
// const res = Math.random() * 11;
// console.log(res);
// const fullAnswer = Math.floor(res); //Math.floor округление вниз
// console.log(fullAnswer);

// slice, replace, length!!!
// // Принимает на вход параметр любого типа
// console.log('я параметр');
// // Принимает на вход два строковых параметра
// // первый – что ищем, второй – на что меняем
// 'google'.replace('go', 'mo'); // moogle;
// // Принимает на вход два числовых параметра
// // первый – начальный индекс (включая), второй – конечный индекс (не включая)
// 'hexlet'.slice(1, 3); // ex 
// const text = 'When you play a game of thrones you win or you die.';
// const changedAnswerLenghth = text.slice(5, 14).replace(/you/i, 'someone').length;
// console.log(changedAnswerLenghth);

//Первый и последний символ текста
//const text = 'Never forget what you are, for surely the world will not';
//console.log(`First: ${text.charAt(0)}\nLast: ${text.at(-1)}`)

// Функции
// const getLastChar = (text) => {
//   // Вычисляем индекс последнего символа как длина строки - 1
//   return text[text.length - 1];
// };
//const text = 'Winter is coming';
//getLastChar(text); // выведет g
// truncate.js
// const truncate = (text, length) => {
// const index = length;
// const replaced = (text.slice(0, index) + "...");
// return replaced;
// };
// truncate('hello', 2);

// getHiddenCard.js
// function getHiddenCard(num, stars = 4) {
//   const hideNum = num.slice(12); // при таком slice, вырезается первых 12 символов, остальные остаются в переменной
//   return `${'*'.repeat(stars)}${hideNum}`;
// }
// getHiddenCard('1234567812345678', 2);

// Capitalize.JS (charAt)
// function capitalize(name) {
// const sliced1 = name.charAt(0).toUpperCase(); //charAt возвращает указанный символ из строки
// const sliced2 = name.slice(1);
// return sliced1 + sliced2;
// } 
// console.log(capitalize('maxim'));
// // ИЛИ // // 
// const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

// Логика
// < меньше
// <= меньше или равно
// > больше
// >= больше или равно
// === равно
// !== не равно

// const isEven = (number) => number % 2 === 0;
// isEven(10);  // true
// !isEven(10); // false // !isEven унарный оператор для 108 выражения!!!

// isLeapYear.js (Високосный год)
// const isLeapYear = (year) =>  year % 400 === 0 || year % 4 === 0 && year % 100 !== 0; // Год считается високосным, если он кратен (то есть делится без остатка) 400 или он одновременно кратен 4 и не кратен 100
// console.log(isLeapYear(2019))

// const isInternationalPhone = (number) => number[0] === "+";
// console.log(isInternationalPhone('+89602223423'));
// getLetter.js (Поиск символа в строке)
// const name = 'Hexlet';
// const getLetter = (name, item) => `${name[item -1] || ''}`;
// console.log(getLetter(name, 1)); // 'H'

// Тернарный оператор ? :
//<predicate> ? <expression on true> : <expression on false></expression>
/*
Проанализируйте следующий код:

// функция-предикат определяет, является ли число num четным
const isEven = (num) => {
  return num % 2 === 0;
}
 
// функция увеличивает полученное число num на 10
const increaseNum = (num) => {
  return num + 10;
}
 
const num = 6;
 
const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
Что будет находиться в переменной result после его выполнения?
*/
// convertText.js
// Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.
// Очень важно и очень интересно
// const reverse = (s) => s.split('').reverse().join('');
// const convertText = (text) => {
//   if (text === '') {
//     return '';
//   }
//   const reversable = text[0] !== text[0].toUpperCase();
//   return reversable ? reverse(text) : text;
// };
// console.log(convertText('Hello'))

// getNumberExplanation.js
// // switch case!!!
// function getNumberExplanation(num) {
//   switch (num) {
//   case 666:
//   return 'devil number'; 
//   case 42:
//   return 'answer for everything';
//   case 7:
//   return 'prime number';
//   default:
//   num
//   return 'just a number' 
// }
// }
// console.log(getNumberExplanation(666))

// увеличение числа до (lastnumber)
// const printNumbers = (lastNumber) => {
//   let i = 1;
//   while (i <= lastNumber) {
//     console.log(i);
//     i = i + 1;
//   }
//   console.log('finished!');
// };
// printNumbers(3);
// уменьшение числа от (initialNumber) до (1)
// const printNumbers = (initialNumber) => {
// let i = initialNumber;
//   while (i >= 1) {
//     console.log(i);
//     i -= 1;
//   }
//   console.log('finished!');
// }
// printNumbers(5);

// Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку и возвращает её:
// const joinNumbersFromRange = (start, finish) => {
//   let res = '';
//   let i = start;
//   while (i <= finish) {
//     res = `${res}${i}`
//     i = i + 1
//   }
// return res
// }
// console.log(joinNumbersFromRange(1, 1)); // '1'
// console.log(joinNumbersFromRange(2, 3)); // '23'
// console.log(joinNumbersFromRange(5, 10)); // '5678910'

// Слова по буквам в каждой строке
// const printNameBySymbol = (name) => {
//   let i = 0;
//   // Такая проверка будет выполняться до конца строки
//   // включая последний символ. Его индекс `length - 1`.
//   while (i < name.length) {
//     // Обращаемся к символу по индексу
//     console.log(name[i]);
//     i = i + 1;
//   }
// };

// const name = 'Arya';
// printNameBySymbol(name);
// => A
// => r
// => y
// => a

// Игра НАОБОРОТ
// const reverse = (str) => {
//   let i = 0;
//   // Нейтральный элемент для строк это пустая строка
//   let result = '';
//   while (i < str.length) {
//     // Соединяем в обратном порядке
//     result = `${str[i]}${result}`;
//     // То же самое через конкатенацию
//     // result = str[i] + result;
//     i = i + 1;
//   }
//   return result;
// };
// const name = 'Bran';
// console.log(reverse(name)); // narB
// // Проверка нейтрального элемента
// reverse(''); // ''

// solution.js
// const text = 'If I look back I am lost';
// function mySubstr(text, num) {
//   let i = 0;
//   let result = '';
//   while (i < num) {
//     result = `${result}${text[i]}`;
//     i = i + 1;
//   }
//   return result;
// }
// console.log(mySubstr(text, 1)); => I
// console.log(mySubstr(text, 7)); => If i lo
// 
// const getHalfString = (str) => {
//   let result = '';
//   for (let i = 0; i < str.length / 2; i += 1);
//  {
//     result += str[i];
//   }
//   return result;
// };
// getHalfString("12345"); // 123

// Наоборот слова (парамаетр)
// function encrypt(str) {
//   let i = 0;
//   let result = '';
//   for (i = 0; i < str.length; i = i + 2) {
//   const sym = str[i + 1] || '' ;
//   result = `${sym}${str[i]}${result}`;
//   }
//   return result;
// }
// console.log(encrypt('move'));   // 'omev'
// console.log(encrypt('attack')); // 'taatkc'
// console.log(encrypt('car!')); // 'ac!r'
// console.log(encrypt('go!')); // 'og!'

// encrypt.js
// Сэмвелл обнаружил, что его сообщения перехватываются и читаются в замке «Близнецы», поэтому его атаки перестали быть внезапными. 
// Немного подумав, он разработал программу, 
// которая будет шифровать передаваемые сообщения по следующему алгоритму: 
// программа получает на вход строку и меняет местами в ней каждые 2 подряд идущих символа. Если длина строки нечётная, то последний символ остаётся на своём месте.
// function encrypt(str) {
//   let i = 0;
//   let result = '';
//   for (i = 0; i < str.length; i = i + 2) {
//   const sym = str[i + 1] || '' ;
//   result = `${result}${sym}${str[i]}`;
//   }
//   return result;
// }
// console.log(encrypt('move'));   // 'omev'
// console.log(encrypt('attack')); // 'taatkc'
// console.log(encrypt('car!')); // 'ac!r'
// console.log(encrypt('go!')); // 'og!'
/*
// isHappyTicket
const isHappyTicket = (str) => {
  const num1 = Number(str.substr(0, str.length/2));
  const num2 = Number(str.slice(str.length/2));
  for(let i = 0; i <= num1.length; i = i + 1) {
    let sum = 0;
    sum = sum + i; 
  }
  for(let i = 0; i <= num2.length; i = i + 1) {
    let pum = 0;
    pum = pum + i; 
  }
  if(sum === pum) {
    return true
  }
    return false
  } 
console.log(isHappyTicket('385916')); // true
console.log(isHappyTicket('231002')); // false
console.log(isHappyTicket('1222'));   // false
console.log(isHappyTicket('054702')); // true
console.log(isHappyTicket('00'));     // true
*/
// ООП
// const getMiddlePoint = (p1, p2) => {
//     const x = (p1[0] + p2[0]) / 2;
//     const y = (p1[1] + p2[1]) / 2;
  
//     return [x, y];
//   };
  
//   const point1 = [2, 3];
//   const point2 = [-4, 0];
  
//   console.log(getMiddlePoint(point1, point2));

// Игры
// Fizz Buzz Game
// function findNumber(begin, end) {
//     let e = end
//     for (let i = begin; i <= e; i++) {
//       if (i % 3 === 0) {
//         console.log('Fizz')
//       } else if (i % 5 === 0) {
//         console.log('Buzz')
//       } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//       } else
//         console.log(i)
//     }
//   }
//   findNumber(11,20)

// switch case function (инструкция по switch)
// function getNumberExplanation(num) {
//   switch (num) {
//     case 0:
//       num = 'just a number';
//       break;
//     case 666:
//           num = 'devil number';
//       break;
//       case 42:
//           num = 'answer for everything';
//           break;
//       case 7:
//           num = 'prime number';
//   }
//   return num;
// };


// let amount = 22;
// let cookiePrice = 7;
// let candyPrice = 8;
// let rest = amount - cookiePrice;
// if (rest >= candyPrice) {
//   document.write("I have money");
// } else {
//   document.write("I havent money");
// }

// // -----numbers

// let a = 5;
// let b = 8;

// let square = a * b;

// console.log(square);

// -----Boolen

// const myAge = 19;
// const hasAccess = myAge !== 18;

// console.log(hasAccess);

// if (hasAccess) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }

// -----

// let cashInWallet = 50;
// let age = 18;

// const price = 40;
// const ageLimit = 18;

// const isAllowed = age >= ageLimit;
// const hasEnoughMoney = cashInWallet >= price;

// const canBuy = isAllowed && hasEnoughMoney;

// console.log(canBuy);

// ----

// let cashInWallet = 50;
// let cardAmount = 70;

// const price = 40;

// const canPayWithCard = cardAmount >= price;
// const hasEnoughCash = cashInWallet>= price;

// const canBuy = hasEnoughCash || canPayWithCard;

// console.log(canBuy);

// -----Function

// // Rectangle 5x8
// printRectangleInfo(5, 8);

// // Rectangle 3 x 10
// printRectangleInfo(3, 10);

// function printRectangleInfo(a, b) {
//   const perimeter = 2 * a + 2 * b;
//   const sqare = a * b;

//   console.log("Rectangle", a, "x", b);
//   console.log("perimeter is ", perimeter);
//   console.log("Square is ", sqare);
//   console.log("----------------");
// }

// ------

// function bildHouse(numberOfFloors, color) {
// 	const house = `${numberOfFloors} - floors house ${color} - color`;

// 	return house;
// }

// const smallHouse = bildHouse(5, 'blue');
// const bigHouse = bildHouse(25, 'green');

// console.log(smallHouse);
// console.log(bigHouse);

// ---------------

// const isEven2 = function(x) {
// 	return (x % 2) === 0;
// };

// console.log(
// 	isEven2(4)
// );

// function isEven(x) {
// 	return (x % 2) === 0;
// }

// console.log(
// 	isEven(5)
// );

// --------if, else if

// const x = 0;

// if (x > 5) {
//   console.log(1);
//   console.log(2);
//   console.log(3);
// }

// console.log(x);

// -------------------

// let age = 3;

// if (age > 18) {
//   console.log("Adult");
// } else if (age > 7) {
//   console.log("Child");
// } else if (age > 3) {
//   console.log("Toddler");
// } else {
//   console.log("Baby");
// }

// ------------------

// const shortTermCost = 50; // days 1-3
// const weekCoast = 40; // days 4-7
// const longTermCost = 30; // days 8-...

// console.log(getRentalPrice(2), getRentalPrice(5), getRentalPrice(10));

// function getRentalPrice(numberOfDays) {
//   if (numberOfDays <= 3) {
//     return numberOfDays * 50;
//   }
//   let daysLeft = numberOfDays - 3;

//   if (daysLeft <= 4) {
//     return 3 * 50 + daysLeft * 40;
//   }

//   daysLeft = numberOfDays - 7;

//   return 3 * 50 + 4 * 40 + daysLeft * 30;
// }

// -------------------------

// let age = 15;
// let massage = (age > 18) ? 'Adult' : 'Child';

// // if (age > 18) {
// // 	massage = 'Adult';
// // } else {
// // 	massage = 'Child';
// // }

// console.log(massage);

// ----- For loop

// for (let myAge = 0; myAge < 10; myAge++) {
//   console.log("Happy birthday!", myAge);
// }

//--------------------------

// // debugger;

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   console.log("Ok!");
// }
// console.log("---Done---");

//-------------------------

//sum 1 3 5 7

// let sum = 0;

// for (let i = 1; i <= 7; i += 2) {
//   console.log(i);
//   sum += i;
// }

// console.log(sum);

//----STRINGS-------------------------

// const a = 'Michael';
// const b = 'John asdasd';

// const shortest = (a.length < b.length) ? a : b;
// // длина строки, дальше сравнение какая строка больше

// console.log(shortest);

//-----------------------------

// 'use strict'; // строгий режим, если мы пытаемся изменить строку, в консоли выдаст ошибку

// let str = 'abcde';

// str[2] = 'Q'; // строки неизменны, нельзя переприсвоить или изменить строку
// console.log(str);

// console.log(
// 	str[0], // получим символ с индексом 0
// 	str.charAt(0) // получим символ с индексом 0
// );

// console.log(
// 	str[20], // получим АНДЕФАЙНД, так как символа не существует под индексом 0
// 	str.charAt(20) // получим пустую строку
// );

//-----------------------------------перебор строки посимвольно

// const word = 'Hello world';

// for (let i = 0; i < word.length; i++) { // проходит весь масив, но можно остановиться на какомто элементе
// 	console.log(word[i]);
// }

// for (const leter of word) { // переберет все символы, нельзя остановиться на какомто определенном
// 	console.log(leter);
// }

//-------------------------------- Поиск подстроки в строке

// const word = 'abcdebc';
// const part = 'bc';

// console.log(
// 	word.includes(part), // содержит ли строка ворд в себе символы подстроки парт выдаст тру. Можно поставить второй параметр, индекс, с которого будет начинаться проверка
// 	word.indexOf(part), // с какого индекса строки начинается совпадение подстроки выдаст 1 первое вхождение. Можно поставить второй параметр, индекс, с которого будет начинаться проверка
// 	word.lastIndexOf(part), // с какого индекса строки начинается совпадение подстроки выдаст 5 последнее вхождение
// 	word.startsWith(part), // проверяет начинается ли строка ворд с подстроки партс, вернет фолс
// 	word.endsWith(part) // проверяет заканчивается ли строка ворд на подстроку партс, вернет тру

// );

//--------------------------------Смена регистра в тексте

// let message = "Hello, Misha!";
// let upperMessage = message.toUpperCase(); //Приведет строку меседж в верхний регистр
// let lowerMessage = message.toLowerCase(); //Приведет строку меседж в нижний регистр

// console.log(upperMessage);
// console.log(lowerMessage);
// console.log(message);

//---------------------------------Регистронезависимый поиск

// const model = 'Apple iPhone 11';
// const search = 'iph';

// const condition = model.toLowerCase().includes(search.toLowerCase()); // сперва приводим строку модель к нижнему регистру, потом проверяем включают ли в себя строка символы поиска, приводим поисковые символы к нижнему регистру.

// if (condition) {
// 	console.log('Found');
// }

// ------------------------------Часть строки, срез строки

// const massage = "0123456789";

// console.log(
// 	massage.substr(3, 5), // вырезает часть строки, с третего символа начиная выведет пять символов
// 	massage.substring(3, 5), // вырезает с третьего по пятый символ, не работает с отрицательными числами
// 	massage.slice(3, 5) // вырезает с третьего по пятый символ, работает с отрицательными числами
// 	);

// 	let result = massage.slice(2, -1); //сделать срез строки с с второго символа до предпоследнего

// 	console.log(result);

//-------------------------------Превратить число в строку

// const x = 12345;

// console.log(x);

// console.log(
// 	String(x), // функция Стринг превращает любое значение в строку
// 	x.toString(), //метод туСтринг можно применить ко всем, кроме нал и андефайнд
// 	'' + x, //конкатинация прибавляем к пустой строке значение, оно будет автоматически переведено в строку
// 	`${x}`, // интерполяция также переменная х превратится в строку
// );

//-------------------------------------------

//Створи функцію countMs, яка приймає рядок text і повертає кількість літер m у ньому (як великих, так і маленьких разом).

// function countMs(text) {
//   let count = 0;
//   for (let word of text) {
//     if (word === "M") {
//        count += 1;
//     } else if ( word === "m") {
// 			count++
// 		}
//   }
//   console.log(count);
// }

// countMs("countMs");

//----------------------------------------------

//Наш новий бос, як виявилося, просто ненавидить голосні літери, тому нам потрібно прибрати їх з усієї документації.

// Напиши функцію removeVowels, яка приймає рядок doc і повертає рядок, де усі голосні з doc видалені.

// Голосними для цього завдання вважаються букви aeiouy в будь-якому регістрі.

// function removeVowels(doc) {
//   let result = '';
//   for (const word of doc) {
// 	if (!'aeiouy'.includes(word.toLowerCase())) {
//   result += word;
// }
// }
// return result;
// }

// function fakeBin(x) {
//   let string = '';
//   for (let i = 0; i < x.length; i++) {
//     if (i < 5) {
//       string += 0;
//     }
// 		 if (i >= 5) {
//       string += 1;
//     }
//   }
//   return string;
// }

// console.log(fakeBin('45385593107843568'));

// function fakeBin1(x) {
// 	let string = '';
// 	for (const i of x) {
// 		if (i < 5) {
// 			string += 0;
// 		}
// 			if (i >= 5) {
// 				string += 1;
// 			}
// 	}
// 	return string;
// }

// console.log(fakeBin1('45385593107843568'))

// Створи функцію makeAbbr, яка приймає рядок зі слів words і повертає абревіатуру з них у верхньому регістрі.

// Рядок words містить одне або декілька слів, розділених одним пробілом.

function makeAbbr(words) {
  let abbreviation = words[0];

  for (let i = 0; i < words.length; i++) {
    if ((i = " ")) {
      abbreviation += i[i + 1];
    }
  }
  return abbreviation.toUpperCase();
}

console.log(makeAbbr("national aeronautics space administration"));

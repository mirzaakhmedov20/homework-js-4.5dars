// 1. a dan b gacha bolgan sonlar kopaytmasini topuvchi algortim yozing
// let a = 5;
// let b = 10;
// let result = 1;
// while (a <= b) {
//   result *= a;
//   a++;
// }
// console.log(result);

// // 2. Berilgan sonning necha xonali ekanligini aniqlovchi algoritm yozing
// let number = 2345;
// let xonasi = 0;
// while (number != 0) {
//   number = Math.floor(number / 10);
//   xonasi++;
// }
// console.log(xonasi);

// 3. // berilgan sonning faktorialini topuvchi algoritm yozing
// let number = 4;
// let factorial = 1;
// let i = 1;
// while (i <= number) {
//   factorial *= i;
//   i++;
// }
// console.log(factorial);

// 4. Foydalanuvchidan parol kiritishni so'raydigan dastur yozing
// const password = "mr20";
// let inputPassword = "";
// while (inputPassword !== password) {
//   inputPassword = prompt("Parolni kiriting:");
// }
// alert("Parol to'g'ri!");

// // 5. Birinchin ta tub sonning yig'indisini while siklidan foydalanib hisoblaydigan dastur tuzing.
// let n = 10;
// let sum = 0;
// let currentNumber = 2;
// while (n > 0) {
//   let isPrime = true;
//   for (let j = 2; j < currentNumber; j++) {
//     if (currentNumber % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     sum += currentNumber;
//     n--;
//   }
//   currentNumber++;
// }
// console.log(sum);

// // 6. Berilgan sonni teskari tartibda yozuvchi algoritm yozing
// let originalNumber = 12345;
// let reverseNumber = 0;
// while (originalNumber !== 0) {
//   reverseNumber = (reverseNumber * 10) + (originalNumber % 10);
//   originalNumber = Math.floor(originalNumber / 10);
// }
// console.log(reverseNumber);

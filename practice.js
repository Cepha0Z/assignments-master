// function getLength(str) {
//   console.log("Original String:", str);
//   console.log("Length:", str.length);
// }
// let firstName = "Cepha Ganesh";
// const sen = "dam no way its so simple";

// function getIndexOf(str, target) {
//   console.log(str.indexOf(target));
// }

// console.log(sen.split(" "));

// function explainParseInt(value) {
//   console.log("Original Value:", value);
//   let result = parseInt(value);
//   console.log("After parseInt:", result);
// }

// explainParseInt("42");
// explainParseInt("42px");
// explainParseInt("3.14");

// const arr = [4, 5, 6, 7];

// function lame(item, index) {
//   console.log(item, index);
// }

// arr.forEach(lame);

// function isAnagram(str1, str2) {
//   let temp = false;
//   if (str1.length != str2.length) {
//     return false;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] == str2[j]) temp = true;
//     }
//     if (temp == false) {
//       return false;
//     }
//     temp = false;
//   }
//   return true;
// }

// console.log(isAnagram("slar", "rasp"));

// function promise() {
//   return new Promise(function (resolve) {
//     resolve(199);
//     console.log("promise just done boi");
//   });
// }

// function waste(data) {
//   console.log(data);
// }

// promise().then(waste);

// console.log("hmm what happenes here?");

// let firstName = 13;
// console.log(firstName);

// console.log(firstName + 10);

// function akfh(wer, wer) {}

// function Timeee() {
//   console.log("entered");

//   setTimeout(() => {
//     console.log("Boom");
//   }, 3000);

//   console.log("time");
//   console.log("time");
//   console.log("time");
//   console.log("time");
//   console.log("time");

//   setTimeout(() => {
//     console.log("Boom 2");
//   }, 1000);
// }

// Timeee();

// function call(a, b, c) {
//   const summ = a + b;
//   c(summ);
// }

// function sum(data) {
//   console.log(data);
// }

// const x = 1;
// const y = 1;
// call(x, y, sum);

// let counter = 0;

// function interval() {
//   counter++;
//   console.log(counter);
// }

// setInterval(interval, 1000);

// let counter = 0;

// function interval() {
//   counter++;
//   console.log(counter);
//   setTimeout(interval, 1000);
// }

// interval();

// const fs = require("fs");

// fs.readFile("b.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("done with filereading code");
// let a = 0;
// // for (let i = 0; i < 10000000000; i++) {
// //   a += i;
// // }
// fs.readFile("a.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log(a);

// const fs = require("fs");

// fs.writeFile("a.txt", "Cepha is here now", "utf-8", (err, data) => {
//   console.log("file changed");
// });

// const fs = require("fs");

// let sentence = [];
// let newSentence = "";
// fs.readFile("a.txt", "utf-8", (err, data) => {
//   sentence = data;
//   sentence = sentence.split(/\s+/);
//   for (let i = 0; i < sentence.length; i++) {
//     newSentence += sentence[i] + " ";
//   }
//   newSentence = newSentence.trim();
//   console.log(newSentence);
// });

// function Time() {
//   const time = new Date();

//   let seconds = time.getSeconds();
//   let miniutes = time.getMinutes();
//   let hours = time.getHours();
//   if (hours < 12) {
//     console.log(hours, ":", miniutes, ":", seconds, "AM");
//   } else {
//     hours = hours % 12;
//     console.log(hours, ":", miniutes, ":", seconds, "PM");
//   }
// }

// setInterval(Time, 1000);

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array then return value.
//--------------------------------------------------------------------------------------
// using map function to loop
// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//using traditional way of loop forEach
// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });
// console.log(newNumbers);

//or we can directly use anonymous function inside map
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);
//******************************************************************************************* */

//Filter - Create a new array by keeping the items that return true.
//----------------------------------------------------------------
//using filter get less 10 value inside array
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
// console.log(newNumbers);

//using traditional way of loop forEach to store an new array
// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })
// console.log(newNumbers);
//******************************************************************************************* */

//Reduce - Accumulate a value by doing something to each item in an array.
//-----------------------------------------------------------------------
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })
// console.log(newNumber);

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })
// console.log(newNumber);
//******************************************************************************************* */

//Find - find the first item that matches from an array.
//-----------------------------------------------------
// const newNumber = numbers.find(function (num) {
//   return num > 10;//once find the array greater than 10 loop will be stoped
// })
// console.log(newNumber);
//******************************************************************************************* */

//FindIndex - find the index of the first item that matches.
//---------------------------------------------------------
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
// console.log(newNumber);

//Challenge Solution
//---------------------
import emojipedia from "./emojipedia.js";
const newEmojipedia = emojipedia.map(function(emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);//here we are getting the meaning inside string between 0 to 100
});
console.log(newEmojipedia);

//Arraw Function:-
//**************** */

// var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map(x => x * x);

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map( x => x * 2);

////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(num => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
//const newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(num => num > 10);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(num => num > 10);
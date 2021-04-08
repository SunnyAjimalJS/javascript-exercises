// (* Write a JavaScript program that executes Math.sqrt() on an Array of numbers *)
// Example input: [4, 9, 16, 15]
// Example output: [2, 3, 4, 5]

// Using a for loop to modify the original array:
let arr = [4, 9, 16, 25];
for (let i = 0, len = arr.length; i < len; i++) {
  arr[i] = Math.sqrt(arr[i]);
}
// console.log(arr);

// Using a for loop to return a new array of square rooted values:
let arrTwo = [4, 9, 16, 25];
let newArr = [];
for (let i = 0, len = arrTwo.length; i < len; i++) {
  newArr.push(Math.sqrt(arrTwo[i]));
}
// console.log(newArr);

// Using a forEach loop to return a new array of square rooted values:
let arrThree = [4, 9, 16, 25];
let newArrTwo = [];
arrThree.forEach(function (val) {
  newArrTwo.push(Math.sqrt(val));
});
// console.log(newArrTwo);

// Using a for of loop to return a new array of square rooted values:
let arrFour = [4, 9, 16, 25];
let newArrThree = [];
for (let val of arrFour) {
  newArrThree.push(Math.sqrt(val));
}
// console.log(newArrThree);

// Using an iterator to return a new array of values:
let arrFive = [4, 9, 16, 25];
let newArrFour = [];
const it = arrFive.values();
let item;
while (!(item = it.next()).done) {
  newArrFour.push(Math.sqrt(item.value));
}
// console.log(newArrFour);

// Using a map function to return a new array of values:
let arrSix = [4, 9, 16, 25];
let newArrFive = arrSix.map(Math.sqrt);
// console.log(newArrFive);

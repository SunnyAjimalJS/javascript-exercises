// 1. (* Write a JavaScript program that executes Math.sqrt() on an Array of numbers *) //
// Example input: [4, 9, 16, 15]
// Example output: [2, 3, 4, 5]

// - Using a for loop to modify the original array:
let arr = [4, 9, 16, 25];
for (let i = 0, len = arr.length; i < len; i++) {
  arr[i] = Math.sqrt(arr[i]);
}
// console.log(arr);

// - Using a for loop to return a new array of square rooted values:
let arrTwo = [4, 9, 16, 25];
let newArr = [];
for (let i = 0, len = arrTwo.length; i < len; i++) {
  newArr.push(Math.sqrt(arrTwo[i]));
}
// console.log(newArr);

// - Using a forEach loop to return a new array of square rooted values:
let arrThree = [4, 9, 16, 25];
let newArrTwo = [];
arrThree.forEach(function (val) {
  newArrTwo.push(Math.sqrt(val));
});
// console.log(newArrTwo);

// - Using a for of loop to return a new array of square rooted values:
let arrFour = [4, 9, 16, 25];
let newArrThree = [];
for (let val of arrFour) {
  newArrThree.push(Math.sqrt(val));
}
// console.log(newArrThree);

// - Using an iterator to return a new array of values:
let arrFive = [4, 9, 16, 25];
let newArrFour = [];
const it = arrFive.values();
let item;
while (!(item = it.next()).done) {
  newArrFour.push(Math.sqrt(item.value));
}
// console.log(newArrFour);

// - Using a map function to return a new array of values:
let arrSix = [4, 9, 16, 25];
let newArrFive = arrSix.map(Math.sqrt);
// console.log(newArrFive);

// 2. (* Find duplicate numbers in an array including if it contains multiple duplicates - using forEach() *) //
// - The forEach will loop through each item from the numberArray and if there's no object items, set them to 0
// - Then add to the items in the object for every duplicate item found from the forEach using a for loop to push the properties in the object (if they're greater than 2) to the result array and return the result
function findDuplicateNumbers(numberArray) {
  let object = {};
  let result = [];

  numberArray.forEach(function (item) {
    if (!object[item]) object[item] = 0;
    object[item] += 1;
  });
  for (let prop in object) {
    if (object[prop] >= 2) {
      result.push(prop);
    }
  }
  return result;
}
// console.log(findDuplicateNumbers([1, 2, 3, 3, 4, 5, 5, 5, 5, 6, 6, 7, 8])); // Output: [ '3', '5', '6' ]
// console.log(findDuplicateNumbers([1, 2, 2, 3])); // Output: [ '2' ]
// console.log(findDuplicateNumbers([1, 2])); // Output: []

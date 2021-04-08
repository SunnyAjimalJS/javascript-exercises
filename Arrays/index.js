// (* ARRAY METHODS *) //
// 1. Removing Falsy Values:
let arr = ["0", "yellow", "", NaN, 1, true, undefined, "orange", false];
arr = arr.filter(Boolean);
arr = arr.filter((a) => Boolean(a));
arr = arr.filter((a) => !!a);
// console.log(arr);

// 2. Get random value from an Array:
const colors = ["yellow", "orange", "blue", "purple", "green"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
// console.log(randomColor);

// 3. Shuffle elements in an Array:
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const shuffled = list.sort(() => Math.random() - 0.5);
// console.log(shuffled); // Output: [1, 9, 8, 2, 6, 3, 7, 5, 4]

// 4. Find the intersection of two Arrays:
const numOne = [0, 2, 4, 6, 8, 8];
const numTwo = [1, 2, 3, 4, 5, 6];

const duplicatedValues = [...new Set(numOne)].filter((item) =>
  numTwo.includes(item)
);
// console.log(duplicatedValues); // Output: [ 2, 4, 6 ]

// 5. Swap Values with Array destructuring:
let a = 1,
  b = 2;

[a, b] = [b, a];
// console.log("a is now " + a); // Output: a is now 2
// console.log("b is now " + b); // Output: b is now 1

// 6. Slice - The slice() method selects a part of an array and returns the element/s in a new array:
const arrayToSlice = ["Array", "Slicing", "Example"];
let slicedArray = arrayToSlice.slice(1, 2);
// console.log(slicedArray); // Output: [ 'Slicing' ]

// 7. Map = The map() method creates a new array with the results of calling a function for every array element:
const arrayToMap = [1, 4, 9, 16];
let mappedArray = arrayToMap.map((x) => x * 2);
// console.log(mappedArray); // Output: [ 2, 8, 18, 32 ]

// 8. Tostring - the toString() method converts an array to a string and returns the result:
const arrayToBeConverted = ["Array", "To", "String"];
let arrayConvertedToString = arrayToBeConverted.toString();
// console.log(arrayConvertedToString); // Output: Array,To,String

// 9. Shift - the shift() method removes the first element of an array and returns that element:
const arrayToShift = ["Array", "To", "Shift"];
let shiftedArray = arrayToShift.shift();
// console.log(shiftedArray); // Output: Array

// 10. Push - the push() method adds new elements to the end of an array and returns the new array length:
const arrayToPush = ["Array", "To"];
let pushedArray = arrayToPush.push("Push");
// console.log(pushedArray); // Output: 3
// console.log(arrayToPush); // Output: [ 'Array', 'To', 'Push' ]

// 11. Assinging values from one array to another array //
let names = [];
let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" },
];
// Looping through the users array to destructure the name value from each object inside the users array and push to a new names array:
for (let { name, email } of users) {
  names.push(name);
}
// console.log(names); // Output: [ 'John', 'Jason', 'Jeremy', 'Jacob' ]

// 12.

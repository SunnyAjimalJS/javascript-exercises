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
let marks = [53, 29, 65, 22, 71];
let passedMarks = [];
marks.map((val) => {
  if (val > 30) passedMarks.push(val);
});
// console.log(passedMarks); // Output: [ 53, 65, 71]

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

// 12. Concat:
const concatArray = [1, 2];
let concatenatedArray = concatArray.concat([3], [4, 5]);
// console.log(concatenatedArray); // Output: [ 1, 2, 3, 4, 5 ]

// 13. CopyWithin:
const arrayToCopyFrom = [1, 2, 3, 4, 5];
let copiedArray = arrayToCopyFrom.copyWithin(0, 2);
// console.log(copiedArray); // Output: [ 3, 4, 5, 4, 5 ]

// 13. Every:
const arrayToCheck = [1, 30, 40];
const checkedArray = arrayToCheck.every((val) => val > 0);
// console.log(checkedArray); // Output: true

// 14. Fill:
const arrayToFill = [1, 2, 3, 4];
let filledArray = arrayToFill.fill("x", 1, 3);
// console.log(filledArray); // Output: [ 1, 'x', 'x', 4 ]

// 15. Filter:
const arrayToFiler = [1, 2, 5, 6, 7, 10];
let filteredArray = arrayToFiler.filter((val) => val >= 5);
// console.log(filteredArray); // Output: [ 5, 6, 7, 10 ]

// 16. Find:
const arrayToFindFrom = [1, 2, 5, 6, 7, 10];
let itemFromArrayUsingFind = arrayToFindFrom.find((val) => val > 7);
// console.log(itemFromArrayUsingFind); // Output: 10
let scoreArr = [55, 77, 82, 66, 48];
let value = scoreArr.find((val) => val > 75);
// console.log(value); // Output:

// 17. Flat & use Infinity:
const arrayToFlatten = [1, [2, [3, [4]]]];
let flatArray = arrayToFlatten.flat(Infinity);
// console.log(flatArray); // Output: [ 1, 2, 3, 4 ]

// 18. Using flatMap to flatten an array to single elements:
const input = ["blue, red, yellow", "apple, orange"];
const flattenedArray = input.flatMap((d) => d.split(","));
// console.log(flattenedArray); // Output: [ 'blue', ' red', ' yellow', 'apple', ' orange' ]

// 19. Includes:
const checkArrayUsingInclude = [1, 2, 3];
let arrayCheckedUsingInclude = checkArrayUsingInclude.includes(3);
// console.log(arrayCheckedUsingInclude); // Output: true

// 20. IndexOf:
const findIndexOfArray = [1, 2, 3, 4, 5];
let foundIndex = findIndexOfArray.indexOf(3);
let valueUsingFind = findIndexOfArray.findIndex((val) => val > 2);
// console.log(foundIndex); // Output: 2
// console.log(valueUsingFind); // Output: 2

// 21. Copy array using the spread operator:
let arrToBeCopied = [1, 2, 3];
let newCopiedArray = [...arrToBeCopied];
// console.log(newCopiedArray); // Output: [ 1, 2, 3 ]

// 22. Merge arrays using the spread operator:
let fruits = ["Strawberries", "Oranges"];
let vegetables = ["Broccoli", "Spinach"];
let fruitsAndVegetables = [...fruits, ...vegetables];
// console.log(fruitsAndVegetables); // Output: [ 'Strawberries', 'Oranges', 'Broccoli', 'Spinach' ]

// 23. Remove Duplicates in an array using the spread operator and Set:
let arrayWithDuplicates = [1, 2, 2, 2, 3, 4];
let arrWithNoDuplicates = [...new Set(arrayWithDuplicates)];
// console.log(arrWithNoDuplicates); // Output: [ 1, 2, 3, 4 ]

// 24. Spreading an array as an argument:
let numberArray = [1, 2, 3, 4, 5];
let minNumFromNumberArray = Math.min(...numberArray);
// console.log(minNumFromNumberArray); // Output: 1

// 25. Convert a string to characters using the spread operator:
let string = "Hello";
let stringConvertedToArr = [...string];
// console.log(stringConvertedToArr); // Output: [ 'H', 'e', 'l', 'l', 'o' ]

// 26. (* Find the largest and smallest number in an unsorted integer array*) //
// - Sort the numbers in order first using slice() and sort() on the array
// - The compare function can subtract b from a. This will sort the array in ascending order (if it doesn't contain Infinity and NaN)
// - Once the array is sorted, to find the smallest, need the 0 index - the first item in the array
// - For largest, use length -1 to get the last item in the array which will be the largest number when it's sorted
const unsortedNumberArray = [1, 3, 5, 12, 2, 4, 6, 8, 9, 7];

let sorted = unsortedNumberArray.slice().sort(function (a, b) {
  return a - b;
});

let smallest = sorted[0];
let largest = sorted[sorted.length - 1];
// console.log(sorted); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 12 ]
// console.log(smallest); // Output: 1
// console.log(largest); // Output: 12

// 27. Reverse an array in place:
const arrayToRev = [0, 1, 2, 3, 4];
const reveresedArr = arrayToRev.reverse();
// console.log(reveresedArr); // Output: [ 4, 3, 2, 1, 0 ]

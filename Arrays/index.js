// (* Assinging values from one array to another array *) //
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
// console.log(names);

// (* Array Tricks *) //
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
// console.log(shuffled);

// 4. Find the intersection of two Arrays:
const numOne = [0, 2, 4, 6, 8, 8];
const numTwo = [1, 2, 3, 4, 5, 6];

const duplicatedValues = [...new Set(numOne)].filter((item) =>
  numTwo.includes(item)
);
// console.log(duplicatedValues);

// 5. Swap Values with Array destructuring:
let a = 1,
  b = 2;

[a, b] = [b, a];
// console.log(a);
// console.log(b);

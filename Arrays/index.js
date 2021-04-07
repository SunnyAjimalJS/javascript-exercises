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
// Removing Falsy Values:
let arr = ["0", "yellow", "", NaN, 1, true, undefined, "orange", false];
arr = arr.filter(Boolean);
arr = arr.filter((a) => Boolean(a));
arr = arr.filter((a) => !!a);
// console.log(arr);

// Get random value from an array:
const colors = ["yellow", "orange", "blue", "purple", "green"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);

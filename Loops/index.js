// (* Write a JavaScript program that executes Math.sqrt() on an Array of numbers *)
// Example input: [4, 9, 16, 15]
// Example output: [2, 3, 4, 5]

// Using a for loop to modify the original array:
let arr = [4, 9, 16, 25];
for (let i = 0, len = arr.length; i < len; i++) {
  arr[i] = Math.sqrt(arr[i]);
}
console.log(arr);

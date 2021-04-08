// Using flatMap to flatten an array to single elements:
const input = ["blue, red, yellow", "apple, orange"];
const flattenedArray = input.flatMap((d) => d.split(","));
// console.log(flattenedArray); // Output: [ 'blue', ' red', ' yellow', 'apple', ' orange' ]

// (* Using JavaScript built-in Methods - split(), reverse() and join() *) //
// - split("") - It splits a string into an array of substrings using a separator, and returns the new array.
// - reverse() - This method reverses the order the elements in an array. The first element becomes the last and the element becomes the first.
// - join("") - It joins all elements of an array into a string, and returns the new string.
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
// console.log(reverseString("Hello world!")); // Output: !dlrow olleH

// (* Using a for Loop *) //
// - Using a decrementing or incrementing loop to iterate over each character of the given string and create a new reversed string
const stringToReverse = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
// console.log(stringToReverse("Hello world!")); // Output: !dlrow olleH

// 1. (* Using JavaScript built-in Methods - split(), reverse() and join() *) //
// - split("") - It splits a string into an array of substrings using a separator, and returns the new array.
// - reverse() - This method reverses the order the elements in an array. The first element becomes the last and the element becomes the first.
// - join("") - It joins all elements of an array into a string, and returns the new string.
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
// console.log(reverseString("Hello world!")); // Output: !dlrow olleH

// 2. (* Using a for Loop *) //
// - Using a decrementing or incrementing loop to iterate over each character of the given string and create a new reversed string
const stringToReverse = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
// console.log(stringToReverse("Hello world!")); // Output: !dlrow olleH

// 3. (* Using modern for loop syntax using ES6 for ... of *) //
const reversedString = (str) => {
  let newReversedString = "";
  for (const c of str) {
    newReversedString = c + newReversedString;
  }
  return newReversedString;
};
// console.log(reversedString("Hello world!")); // Output: !dlrow olleH

// 4. (* Using Recursion *) //
// - This involves two JavaScript functions: substr() and charAt(). The first method returns a substring of a string and the second method returns the specified character of a string
// Note - this way will become really slow if the string is very long so may not be the most efficient solution
const reverseStringUsingRecursion = (str) => {
  return str ? reverseStringUsingRecursion(str.substr(1)) + str[0] : str;
};
// console.log(reverseString("Hello World!")); // Output: !dlroW olleH

// 4. (* Using the reduce() Method for Arrays *) //
// - This method reduces the array to a single value. Since this function works for arrays, the string first needs to be split in to an array using the split("") method.
const reverseStringUsingReduce = (str) => {
  return str.split("").reduce((r, c) => c + r, "");
};
// console.log(reverseStringUsingReduce("Hello World!")); // Output: !dlroW olleH

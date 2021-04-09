// 1. (* Print the first non repeated character from a string *) //
// - Split the string in to characters
// - Loop through the string and check if the characters and the string's characters are duplicated more than once. Return the character.
const firstNonRepeatedCharacter = function (string) {
  let chars = string.split("");

  for (let i = 0; i < string.length; i++) {
    if (
      chars.filter(function (j) {
        return j == string.charAt(i);
      }).length == 1
    )
      return string.charAt(i);
  }
};
// console.log(firstNonRepeatedCharacter("aabbcddd")); // Output: c
// console.log(firstNonRepeatedCharacter("abbcddd")); // Output: a
// console.log(firstNonRepeatedCharacter("abcd")); // Output: a

// 2. (* Find the missing numbers in a given integer array *) //
// - Get min and max values using Math.min and .max by spreading the original array
// - Check the arrays and minus the max value from the min value, then filter out any missing numbers and assign the items equal to the numbers that the arr doesn't include
const arr = [1, 3, 5, 7, 9];
const [min, max] = [Math.min(...arr), Math.max(...arr)];
const missingNumber = Array.from(Array(max - min), (v, i) => i + min).filter(
  (i) => !arr.includes(i)
);
// console.log(missingNumber); // Output: [ 2, 4, 6, 8 ]

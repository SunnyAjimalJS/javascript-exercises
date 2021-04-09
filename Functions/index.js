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

// 3. (* Check if two strings are a rotation of each other *)
// - Using repeat to repeat the second string being passed as 'rotated' twice and checking if the first string passed as 'string' is included within this repetition
function checkRotationStrings(string, rotated) {
  return string.length === rotated.length && rotated.repeat(2).includes(string);
}
// console.log(checkRotationStrings("apple", "elppa")); // Output: false
// console.log(checkRotationStrings("apple", "leapp")); // Output: true
// console.log(checkRotationStrings("hello", "lohel")); // Output: true
// console.log(checkRotationStrings("hello", "ohell")); // Output: true

// 4. (* Generate all permutations of a string - ES6 *)
// - First check is the strings length
// - Then if it's greater than 2, then return an array with the string permutations
// - With the string being passed, use split("") then reduce() to pass acc, letter and i for concat to run stringPermutations on that string, slice it and map through each value and letter and create the permutations of that string
const stringPermutations = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};
// console.log(stringPermutations("abc"));
// console.log(stringPermutations("tree"));
// console.log(stringPermutations("ab"));
// console.log(stringPermutations("a"));

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

// 5. (* Check if a string contains only digits using Regex and prototype *) /
String.prototype.isNumber = function () {
  return /^\d+$/.test(this);
};
// console.log("123123".isNumber()); // Output: true
// console.log("ABC123".isNumber()); // Output: false

// 6. (* Check if two strings are anagrams of each other *) //
function isAnagram(stringA, stringB) {
  // Remove any non-alphabet character using regex and convert the strings to lowercase
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  // Get the character map of both strings
  const charMapA = getCharMap(stringA);
  const charMapB = getCharMap(stringB);
  // Next loop through each character in the charMapA, and check if it exists in charMapB and has the same value asin charMapA. If it does not, return false
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

function getCharMap(string) {
  // Define an empty object that will hold the key - value pairs.
  let charMap = {};
  //Loop through each character in the string. if the character already exists in the map, increase the value, otherwise add it to the map with a value of 1
  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
// console.log(isAnagram("dog", "god")); // Output: true
// console.log(isAnagram("silent", "listen")); // Output: true
// console.log(isAnagram("true", "tteur")); // Output: false

// 7. (* Find the position of a word in a given sentence *) //
function findWord(sentence) {
  let num = 0;
  let message = "";
  const arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Ferrari") {
      num = i + 1;
      break;
    }
  }
  message = num !== 0 ? `I found Ferrari at ${num}` : "I cant find Ferrari";
  return message;
}
// console.log(findWord("There's a Ferrari")); // Output: I found Ferrari at 3
// console.log(findWord("There's a Lamborghini")); // Output: I cant find Ferrari
// console.log(findWord("There's a convertible Ferrari")); // Output: I found Ferrari at 4

// 8. (* Write a function that creates an array of random, non-repeating numbers ordered randomly within a range of two stated numbers *) //

function randomIntArrGenerator() {
  let keys = {};
  while (Object.keys(keys).length < 10) {
    let num = Math.floor(Math.random() * (20 - 0) + 0);
    keys[num] = true;
  }
  let randomIntArr = Object.keys(keys).map((num) => parseInt(num));
  let shuffledArr = randomIntArr.sort(() => Math.random() - 0.5);
  return shuffledArr;
}
// console.log(randomIntArrGenerator()); // Output: [ 18, 9, 19, 1, 13, 15, 2, 10, 5, 17 ]

// (* One way *) //
// - Detect if string is a permutation of a palindrome
// - Palindrome (even) all letters have 2 iterations
// - Palindrome (odd) all letters have 2 iterations, only 1 letter has 1 iteration
function palindromePermutation(s) {
  let map = {};
  s = s.replace(/\s/g, "").toLowerCase();
  for (let letter of s) {
    map[letter] > 0 ? map[letter]++ : (map[letter] = 1);
  }
  var count = 0;
  for (let key in map) {
    if (map[key] % 2 !== 0) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}
// console.log(palindromePermutation("rcaerca")); // Output: true

// (* A different way *) //
// - Create a set to track characters
// - Iterate over each character by spitting into an array
// - Remove from set if previously added
// - Add to set if not already present in set
// - Set should have 0 or 1 entry if is a palindrome
function palindromePermutation(inputString) {
  const charSet = new Set();
  inputString.split("").forEach((char) => {
    if (charSet.has(char)) {
      charSet.delete(char);
    } else {
      charSet.add(char);
    }
  });
  return charSet.size <= 1;
}
// console.log(palindromePermutation("rcaerca")); // Output: true
// console.log(palindromePermutation("rcaercp")); // Output: false

// (* A different way *) //
// Using a for loop to compare the first character with the last character, and works its way inward. The loop breaks the moment the characters don't match, or half way in with a return statement because at half way, every character has been compared:
function isPalindrome(s) {
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - i - 1]) {
      return false;
    }
    return true;
  }
}
// console.log(isPalindrome("rcaerca")); // Output: false
// console.log(isPalindrome("level")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("pop")); // Output: true

// (* A different way using Regex *) //
// - Set regex pattern which will be used to check characters
// - Convert the string to lowercase and use replace to pass the regex pattern
// - Reverse the lowercase string using split(), reverse() and join("")
// - Return will check if the reversed string is the same as the original lowercase and return a boolean
function palindromeCheck(str) {
  re = /[^A-Za-z0-9]/g;
  let lowCaseRegStr = str.toLowerCase().replace(re, "");
  let reverseStr = lowCaseRegStr.split("").reverse().join("");
  return reverseStr === lowCaseRegStr;
}
console.log(palindromeCheck("Mary, Army")); // Output: false
console.log(palindromeCheck("Kayak")); // Output: true
console.log(palindromeCheck("8008, 8008")); // Output: true
console.log(palindromeCheck("8008, 8018")); // Output: false

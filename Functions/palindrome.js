function palindromePermutation(s) {
  // Detect if string is a permutation of a palindrome
  // palindrome (even) all letters have 2 iterations
  // palindrome (odd) all letters have 2 iterations, only 1 letter has 1 iteration
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
function palindromePermutation(inputString) {
  // create a set to track characters we've seen
  const charSet = new Set();

  // iterate over each character by spitting into an array
  inputString.split("").forEach((char) => {
    // remove from set if previously added
    if (charSet.has(char)) {
      charSet.delete(char);

      // add to set if not already present in set
    } else {
      charSet.add(char);
    }
  });

  // set should have 0 or 1 entry if is a palindrome
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

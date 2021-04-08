// (* Determine if the permutation is of a pallindrome *) //
function pallindromePermutation(s) {
  // Detect if string is a permutation of a pallindrome
  // Pallindrome (even) all letters have 2 iterations
  // Pallindrome (odd) all letters have 2 iterations, only 1 letter has 1 iteration
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
console.log(pallindromePermutation("rcaerca"));

// (* Determine if the permutation is of a pallindrome - a different way *) //
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
console.log(palindromePermutation("rcaerca"));

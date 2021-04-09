// 1. (* Print the first non repeated character from a string *) //
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
console.log(firstNonRepeatedCharacter("aabbcddd")); // Output: c
console.log(firstNonRepeatedCharacter("abbcddd")); // Output: a

// 2. (* Find the missing numbers in a given integer array *) //

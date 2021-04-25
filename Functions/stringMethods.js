const string = "JavaScript";

// 1. Slice:
let slicedString = string.slice(3, 5);
// console.log(slicedString); // Output: aS

// 2. Replace:
let replacedString = string.replace("JavaScript", "JAVASCRIPT");
// console.log(replacedString); // Output: JAVASCRIPT

// 3. Changing case:
let upperCaseString = string.toUpperCase();
let lowerCaseString = string.toLowerCase();
// console.log(upperCaseString); // Output: JAVASCRIPT
// console.log(lowerCaseString); // Output: javascript

// 4. Concat:
let concatString = string.concat(" is great!");
// console.log(concatString); // Output: JavaScript is great!

// 5. Trim:
let trimmedString = string.trim();
// console.log(trimmedString);

// 6. CharAt:
let charCheck = string.charAt(3);
// console.log(charCheck); // Output: a

// 7. Repeat:
let repeatedString = string.repeat(3);
// console.log(repeatedString); // Output: JavaScriptJavaScriptJavaScript

// 8. Split:
const msg = "lets, use, split";
let splitMsg = msg.split(",");
// console.log(splitMsg); // Output: [ 'lets', ' use', ' split' ]

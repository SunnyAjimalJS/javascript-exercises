// Copy the values of all enumerable own properties from one or more source objects to a target object using Object.assign():
const array = ["Allen", 24];
const object = Object.assign({}, array);
// console.log(object); // Output: { '0': 'Allen', '1': 24 }

// Add items to an object from an array using the spread operator:
const objectTwo = { ...array };
// console.log(objectTwo); // Output: { '0': 'Allen', '1': 24 }

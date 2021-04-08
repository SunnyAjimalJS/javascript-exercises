// (* Insertion Sort *) //
// 1. Compare the first element with the second element and swap if necessary.
// 2. Iterate through the rest of the array and for every element, iterate through the Sorted portion of the array and Insert where necessary
// 3. Repeat step 2 until all elements have been inserted into the correct order
function insertionSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    // Compare current element with past elements:
    for (let j = i - 1; j > -1; j--) {
      // Swap elements as needed:
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}
console.log(insertionSort([34, 7, 15, 9, 20]));
console.log(insertionSort([7, 9, 15, 34, 20]));

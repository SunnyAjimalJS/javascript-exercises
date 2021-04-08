// Using console.table() - takes an array or an object:
let carOne = { name: "Audi", model: "Q8" };
let carTwo = { name: "Volvo", model: "XC90" };
let carThree = { name: "BMW", model: "X5" };
console.table([carOne, carTwo, carThree]);
// Output:
// ┌─────────┬─────────┬────────┐
// │ (index) │  name   │ model  │
// ├─────────┼─────────┼────────┤
// │    0    │ 'Audi'  │  'Q8'  │
// │    1    │ 'Volvo' │ 'XC90' │
// │    2    │  'BMW'  │  'X5'  │
// └─────────┴─────────┴────────┘

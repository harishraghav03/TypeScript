import { calculateTax } from './tax'; // Compilation Error -> allowJS in TSconfig -> true
// We we set the module to ES2015, it will throw an error -> Cannot use import statement outside module (Default -> Common JS)
let tax = calculateTax(10_000);
console.log(tax);

/* If we pass nothing into the function call bydefault it passes undefined and as the function
parameter is of type any it does not throw any error and outputs NaN */

// TypeChecking -> checkJS - true

// Describing types using JSDocs
// Is is a special type of comment we can add
// Using JSDoc we can provide type information to the ts compiler, we can also provide description

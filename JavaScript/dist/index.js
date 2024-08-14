"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tax_1 = require("./tax"); // Compilation Error -> allowJS in TSconfig -> true
// We we set the module to ES2015, it will throw an error -> Cannot use import statement outside module (Default -> Common JS)
let tax = (0, tax_1.calculateTax)();
console.log(tax);
/* If we pass nothing into the function call bydefault it passes undefined and as the function
parameter is of type any it does not throw any error and outputs NaN */
// TypeChecking -> checkJS - true
// Describing types using JSDocs
// Is is a special type of comment we can add

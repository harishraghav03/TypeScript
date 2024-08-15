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

// Creating Declaration Files -> Another way of providing type information to the ts compiler -> using declaration or type definition files
// It is useful if we don't want to modify our JS code
// If we didn't provide any argument there will be compilation error

// When we see this approach we should describe all the features in the target module, anything we didn't describe it will be
// invisible to the module (No abe to import)

// Using definitely typed typed declaration files
// Third-party libraries

// import * as _ from 'lodash'; // Compilation error Cound not find declaration files
// Reason -> It is a pure JS library it doesn't have js.comment and declaration files
// GitHub Repo -> Definitely Typed
// npm i --save-dev or -D @types/lodash Only for Compile time

import * as _ from 'lodash';
_.clone
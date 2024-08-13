"use strict";
/* We should split our files into modules
From ES6, modules are natively supported in JS
Exporting and Importing -> ES6
*/
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = require("./shapes");
let circle = new shapes_1.Circle(1);
console.log(circle.radius);

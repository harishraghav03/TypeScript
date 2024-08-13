/* We should split our files into modules 
From ES6, modules are natively supported in JS
Exporting and Importing -> ES6
We can use various module formats
*/

import {Circle as MyCircle} from './shapes';

let circle = new MyCircle(1);
console.log(circle.radius);

// No braces needed after setting it to default
import Store, {Format}  from './storage';

// WildCard imports 

import * as Shapes from './shapes'; // We are putting everything inside a bucket or a container

// Re-exporting

/* If you have different classes like Square and Circle export in index.ts In Shapes Folder 

import { Circle } from './shapes/Circle';
import { Square } from './shapes/Circle';
export { Circle, Square };

We can do this in one go

export { Circle } from './shapes/Circle';
export { Square } from './shapes/Circle';

and then import in the index.ts in src folder
import { Cirlce, Square } from './shapes/index';
Nxt lvl remove index that is no needed
moduleResolution: node (Good Practice) -> Default is classic (Backward Compatability)
*/






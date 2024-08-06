// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = { 
//     id: 1, 
//     name: 'Harish',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };

/* There is problem in this structure, if we wanna create an another employee object, we have 
to repeat the structure and shape and the ends it is duplicating the code 
DRY -> Don't repeat yourself
The 2nd problem is another employee object can have other properties, but these 2 objects does not have
consistent shapes, because we don't have a single place to define the shape of the employee object
Also it is hard to read and understand
To tackle this we use type alis 
 */
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

// By defining this we can reuse this

let employee: Employee = {  // And the we annotate
    id: 1, 
    name: 'Harish',
    retire: (date: Date) => {
        console.log(date);
    }
 };

 // Union Types

 // We can give a variable or a function parameter more than one type

//  function kgToLbs(weight: number | string): number{
//     // weight.valueOf(); The methods will be displayed which common to each other
//     // Narrowing
//     if (typeof weight === 'number')
//         // weight.toString();
//         // Now we have all the methods related to number
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
//  }

// Intersection Types

let weight: number & string; // Just for Eg

type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

// In order to initialize this we have to implement all member of the above objects
let textBox : UIWidget = {
    drag: () => {},
    resize: () => {}
};

// Literal Types

// Sometimes we can limit the value we wanna ssign to a variable

let quantity = 100;


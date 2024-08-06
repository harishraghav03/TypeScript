"use strict";
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
// By defining this we can reuse this
let employee = {
    id: 1,
    name: 'Harish',
    retire: (date) => {
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
let weight; // Just for Eg
// In order to initialize this we have to implement all member of the above objects
let textBox = {
    drag: () => { },
    resize: () => { }
};
// Literal Types
// Sometimes we can limit the value we wanna ssign to a variable
let quantity = 100;

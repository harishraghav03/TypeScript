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

// Sometimes we can limit the value we wanna assign to a variable

// let quantity = 100;
// If we annotate this with the number, it may be any valid value, tot limit the value we use literal
// Literal (exact, specific)
// let quantity: 50 = 52;  // Error

// let quantity: 50 | 100 = 50; // We don't wanna hard code this

type Quantity = 50 | 100; // 50 | 100; -> Literal Type, it can also be strings
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';

// Nullable Types

// By default, TS is very strict about using null and undefined values

function greet(name: string | null | undefined){ // If we use union the error will be gone
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Holla');
}

greet(null); //  We cannot pass null Value
// If we give null or undefined in JS, it is totally valid
// StrictNullChecks, by default is is enabled in strict mode

// Optional Chaining

// When we work with nullable objects we have to do null checks

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }; 
}

let customer  = getCustomer(0); // undefined
// if (customer !== null && customer != undefined) We can use optional instead
    // console.log(customer?.birthday); // CE, customer may be null, so put conditional statements or Optional 
// ?. -> Optional Property access operator
    console.log(customer?.birthday?.getFullYear());

// Optional element access operator -> Useful (Arrays)

// customer?.[0]

// Optional call operator

let log: any = null;

log?.('a'); // It gonna crash if it is null
// The above call function will be executed only if log is referencing an actual function, otherwise undefined.

// Nullish Coaelscing Operator

// When we are working with null and undefined value sometimes we wanna fallback to the default value

let speed: number | null = null; // We assume that the user didn't gave any value
let ride = {
    // speed: speed || 30
    // What if the user gave 0 as input which is falsy and executes 30, the below is better way
    // speed: speed !== null ? speed : 30 // In TS, we have better way
    // Nullish Coaelscing Operator
    speed: speed ?? 30
}
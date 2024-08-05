// In TypeScript, we don't need to anotate the variable, it will auto-detect based on the value
let sales: number = 1_2_3;
let course = 'TypeScript';
let isPublished = true;
let level; // It assumes to be any -> Which kinda represents any kind of value
// level = 1;
// level = 'a'; // We should any as mush as possible

function render(document : any){  // Now we have a compilation error -> we can annotate
    console.log(document);
} // What if we have tons of error like this, don't do that -> NoImplicitAny (false)

// Arrays -> Each element can have diff type

// let number = [1, 2, 3];
// What if a func only accepts number, we can annotate
let numbers: number[] = [1, 2, 3];
// If the array is empty, it is any 
numbers.forEach(n => n.toString()); // We cannot find in JS

// Tuples

// 1, 'Harish'

let user: [number, string] = [1, 'Raghav'];
user[0].valueOf(); //  We can have no of methods related to its type
// Internally they are represented in plain JS arrays
// They are usefull when there are short, like key:value pairs
// Tuple is fixed length array

// Enums

// List of related constants

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalName

enum Size { Small = 1, Medium, Large };  // By default it assigns to 0, 1, 2 ...
// If we use string in first, we have to explicity set the value for each member
// Tip: set enum as const, it will give optimized JS code

let mySize: Size = Size.Large;
console.log(mySize);

// Functions

// function calculateTax(income: number) : number{ // If we set the body as blank, it tells it is void
//     return 0; // Now the type of the return value is number 
// } // The compiler inferred the type, which is great
// As a best practice, we should annotate (parameter and return type)
// NoUnusedParameters -> It will warn

function calculateTax (income :number, taxNumber = 2022) : number {
    let x;
    if (taxNumber < 50_000)
        return income * 0.25; // Now we have compilation error, if the above if is false, by default it returns undefined
    // If we remove the return type annotation, the error will be gone
    // NoImplicitReturns -> It will warn
    return 0.25;
    // Detecting unused variables -> NoUnusedLocals
}
// If we want to call this function, we should pass the only 2 args
// If you want to pass only 1 arg, use ?, but if we don't pass the args by default it is undefined Compilation error
// To tackle this we use or operator, but there will be different appraoch
// We give the default value in the parameter itself
"use strict";
/* Decorators
They are attributes that we apply to the classes and their members with this we can change
how they behave
Many frameworks and Libraries comes with built in Decorators Like angular and vue
It is just a function called by JS runtime
The JS compiler calls the function and passes the class to it, in that function have can modify our class
new properites, new methods or we can change the implementation of the existing methods
Before to create any decorator, we have to enable a special compiler option, they are experimental features
their standards and implementation features might change in the future
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class Decorators
// Depending on where we gonna apply this decorator the type of parameters will varies
// If we gonna apply to this class, here should have single parameter that represents our constructor function
// What matters is the type of the parameter, if it is function, the runtime assumes that we gonna applies this to the class
// function Component(constructor: Function) {
//     // No limitation
//     console.log('Component Decorator called');
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//         console.log('Inserting Component in the DOM');
//     }
// } // We can also solve this using inheritance
// @Component
// class ProfileComponent {
// }
// class Component {
//     insertInDOM() {}
// }
// class ProfileComponent extends Component {
// }
// Parameterized Decorators
// type ComponentOptions = {
//     selectors: string
// }
// // Decorator Factory
// function Component(options: ComponentOptions) {
//     return (constructor: Function) => {
//         console.log('Component Decorator called');
//         constructor.prototype.options = options;
//         constructor.prototype.uniqueId = Date.now();
//         constructor.prototype.insertInDOM = () => {
//             console.log('Inserting Component in the DOM');
//         }
//     } 
// }
// @Component({ selectors: '#my-profile' }) // It is going to be id of an element in the dom
// class ProfileComponent {
// }
// Decorator Composition
// type ComponentOptions = {
//     selectors: string
// }
// function Component(options: ComponentOptions) {
//     return (constructor: Function) => {
//         console.log('Component Decorator called');
//         constructor.prototype.options = options;
//         constructor.prototype.uniqueId = Date.now();
//         constructor.prototype.insertInDOM = () => {
//             console.log('Inserting Component in the DOM');
//         }
//     } 
// }
// function Pipe(constructor: Function) {
//     console.log('Pipe Decorator Called');
//     constructor.prototype.pipe = true;
// }
// @Component({ selectors: '#my-profile' })
// @Pipe
// class ProfileComponent {
// }
// Pipe Decorator Called
// Component Decorator called
// Method Decorators
// Instead of constructor, we need 3 parameters
// 1 -> Object that owns the target method -> any is the type that the compiler expects from us
// 2 -> Name of the target method
// 3 -> Descriptor object for the target method
// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) { // Refer Website 
//     descriptor.value = function() {
//         // console.log('New Implementation'); // This method gonna replay the say method
//         // It is an option, we don't wanna do this instead we can enhance our function 
//     }
// }
function Log(target, methodName, descriptor) {
    // const original = descriptor.value;
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Before');
        // Here, we gonna call the original method, before we gonna get the reference to the original method
        // We don't get any intellisense here, because the type of value is any
        // Here we need to use type assertion, and tell the ts compiler it is a function
        original.call(this, ...args); // Spread Operator // we can also hard code here withour parameter in the function
        console.log('After');
        // Note that we are using function expression not arrow function, if we use arrow we have a compilation error
        // in this beacuse arroe functions don't define their own this keyword, so we cannot use them as methods in the class
        // When redefining methods we always use function expression
    };
}
// class Person {
//     @Log
//     say(message: string) {
//         console.log('Person say ' + message);    
//     }
// }
// let person = new Person();
// person.say('Hello'); // This value will not be displayed, instead it will print the Blue Sky
// Now after having the parameter it will display the Hello
// With this implementaion, we can apply only in methods with this signature descriptor.value = function(message: string) -> Not flexible
// Assessor Decorators
// Decorators on Getters and Setters
// Access decorators are similar to method decorators
function Capitalize(target, methodName, descriptor) {
    // const original = descriptor.value; // It doesn't work for getters and setters 
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original.call(this); // Original maybe undefined (?), but I know that is not gonna be null or undefined to the compiler
        // if (original !== null && original !== undefined)
        //     original.call(this); Longhand for that call method
        // result is of type any
        // if (typeof result === 'string')
        //     return result.toUpperCase();
        // return result; Optimize
        return (typeof result === 'string') ? result.toUpperCase() : result;
    };
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person.prototype, "fullName", null);
let person = new Person('harish', 'raghav');
console.log(person.fullName);

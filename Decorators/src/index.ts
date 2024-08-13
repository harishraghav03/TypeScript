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

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) { // Refer Website 
    descriptor.value = function() {
        console.log('Before');

        console.log('After');
        
    }
}
class Person {
    @Log
    say(message) {
        console.log('Person say ' + message);    
    }
}
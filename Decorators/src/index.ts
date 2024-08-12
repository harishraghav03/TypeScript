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
// } We can also solve this using inheritance

// @Component
// class ProfileComponent {
// }


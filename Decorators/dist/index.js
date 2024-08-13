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
function Component(options) {
    return (constructor) => {
        console.log('Component Decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting Component in the DOM');
        };
    };
}
function Pipe(constructor) {
    console.log('Pipe Decorator Called');
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selectors: '#my-profile' }),
    Pipe
], ProfileComponent);

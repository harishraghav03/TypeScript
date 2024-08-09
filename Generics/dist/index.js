"use strict";
// Understanding the Problem
var _a;
// class KeyValuePair {
//     constructor(public key: number, public value: string) {}
// }
// class StringKeyValuePair {
//     constructor(public key: string, public value: string) {}
// }
// let pair = new KeyValuePair(1, 'Apple');
// let pair1 = new StringKeyValuePair('1', 'Apple');
/* What if you want to use string value for the key, in the current implementation we cannot do '1' like this.
One solution is changing the annotation any -> Should not use
pair.key. We don't have any properties and methods in the key object
Another is annotating with string
Another solution is duplicating the class and the problem with this implementation is it is redendunt
What if you want to use a person object in value -> You have to create yet another class */
// Generic Classes
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'a');
// pair.key.charAt(1); 
// Generic Functions
// function wrapInArray<T>(value: T) {
//     return [value];
// }
// let numbers = wrapInArray(1);
// It can be also method inside a class
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
// let utils = new ArrayUtils();
let numbers = ArrayUtils.wrapInArray(1);
// If you are returning a generic type parameter, we should also define it in the parameter initialization
function fetch(url) {
    return { data: null, error: null };
}
let result = fetch('url');
(_a = result.data) === null || _a === void 0 ? void 0 : _a.username;
// Generic Constraints
// function echo<T extends number | string>(value: T): T {
//     return value;
// } // We can only pass num or str
// echo(1);
// function echo<T extends { name: string }>(value: T): T {
//     return value;
// }
// echo({ name: 'a' });
// interface Person {
//     name: string
// }
// function echo<T extends Person>(value: T): T {
//     return value;
// }
// echo({ name: 'a' });
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
echo(new Person('a'));
// Extending Generic classes

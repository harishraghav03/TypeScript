// Understanding the Problem

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

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>('1', 'a');
// pair.key.charAt(1); 

// Generic Functions

// function wrapInArray<T>(value: T) {
//     return [value];
// }

// let numbers = wrapInArray(1);

// It can be also method inside a class

class ArrayUtils {
    
    static wrapInArray<T>(value: T) {
        return [value];
    }
}

// let utils = new ArrayUtils();
let numbers = ArrayUtils.wrapInArray(1);

// Generic Interfaces

// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
    data: T | null,
    error: string | null
}

// If you are returning a generic type parameter, we should also define it in the parameter initialization
function fetch<T>(url: string): Result<T> {
    return { data: null, error: null};
}

interface User {
    username: string;
}

// interface Product {
//     title: string;
// }

let result = fetch<User>('url');
result.data?.username;

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
    constructor(public name: string) {}
}

class Customer extends Person {
}

function echo<T extends Person>(value: T): T {
    return value;
}

echo(new Person('a'));

// Extending Generic classes

// interface Product {
//     name: string;
//     price: number;
// }

// class Store<T> {
//     protected _objects: T[] = []; // Error: Not initialized, so we not gonna create a constructor and it doesn't really make
//     // sense to create new instance of the class and give it an empty array -> Unnecessary, we will 
//     // give the responsibility to the call itself

//     add(obj: T): void {
//         this._objects.push(obj);
//     }
// }

// class CompressibleStore extends Store<T> {
//     Here the compiler doesn't know what T represents here
// }

// Passing the generic type parameter
// class CompressibleStore<T> extends Store<T> {
//     compress() {}
// }

// let store = new CompressibleStore<Product>() // Whatever we pass a generic here will be used as in the above class
// store.compress();
// The generic type parameter in the base class will be used in child class

// Restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store <T> {
//     find(name: string): T | undefined {
//         return this._objects.find(obj => obj.name === name); // Error: name does not exist on type T and you should extend it
//     }
// }

// Fixing the generic type parameter
// class ProductStore extends Store<Product> {
//     filterByCategory(category: string): Product[] {
//         return [];
//     }
// }

// keyof operator

interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = []; 

    add(obj: T): void {
        this._objects.push(obj);
    }

    // T is product 
    // keyof T => 'name' | 'price' (returns)

    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value); // While we using [] syntax the compiler things that
        // we are using a index signature property -> We use this to dynamically add the properties to an object
        // Change string to keyof T in property
    }
}

let store = new Store<Product>();
store.add({ name: 'a', price: 1 });
store.find('name', 'a');
store.find('price', 1);
// What if we are searching a non-existing property -> keyof

// Type Mapping

interface Prodcut {
    name: string;
    price: number;
} // I need products with read-only properties

// One option is duplicate

// interface ReadOnlyProdcut {
//     readonly name: string; // Not recommended
//     readonly price: number;
// }

// Now we gonna create a type based on the existing-type, add the properties dynamically and make them read-only
// We cannot use interface

// type ReadOnlyProdcut = {
    // Instead of hard coding the properties here
    // IndexSignature -> Dynamically add properties
    // keyof -> dynamically get the propertie of product type

//     readonly [K in keyof Prodcut]: Prodcut[K]  // We can make readonly in one go -> Type Mapping
    
// }

// let product: ReadOnlyProdcut = {
//     name: 'a',
//     price: 1
// }

// product.name = 'a'; // Compilation Error

// Nxt-Lvl -> Why just product? What if we need another type of readonly object -> Generic Type

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]  
}

type Optional <T> = {
    [K in keyof T]?: T[K]
}

type Nullable <T> = {
    [K in keyof T]: T[K] | null;
}

let product: ReadOnly<Prodcut> = {
    name: 'a',
    price: 1
}

// Navigate to Utility Types
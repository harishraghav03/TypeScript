/* 
Programming Paradigms
Procedural
Object-Oriented
Functional
Event-Driven
Aspect-oriented
...
These are styles or ways of writting code
Both JS and TS supports some functional and OOP paradigm
Objects are the building blocks of our application
Object is a unit that contains Data(state) and Operations (Behaviour)
*/

// Creating Classes -> blueprint for creating objects

// class Account {
//     // Properties
//     id: number;
//     owner: string;
//     balance: number; // Compilataion error, properties are not initialized -> create a constructor
//     // Also we don't see this in JS

//     // Always returns Account
//     constructor(id: number, owner: string, balance: number){
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount: number): void {
//         if (amount <= 0)
//             throw new Error('Invalid Amount');
//         this.balance += amount;
//     }
// }

// Creating Objects

// class Account {

//     id: number;
//     owner: string;
//     balance: number;

//     constructor(id: number, owner: string, balance: number){
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount: number): void {
//         if (amount <= 0)
//             throw new Error('Invalid Amount');
//         this.balance += amount;
//     }
// }

// let account = new Account(1, 'Harish', 10_00_000);
// console.log(account.balance);
// console.log(typeof account);
// console.log(account instanceof Account);

/*
1000000
function -> Account

1000000
object -> account

true
 */

// Read-only and Optional Properties

// class Account {

//     readonly id: number;
//     owner: string;
//     balance: number;
//     nickname?: string; // Optional

//     constructor(id: number, owner: string, balance: number){
//         this.id = id;
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount: number): void {
//         if (amount <= 0)
//             throw new Error('Invalid Amount');
//         this.balance += amount;
//     }
// }

// let account = new Account(1, 'Harish', 10_00_000);
// console.log(account.balance);
// console.log(typeof account);
// console.log(account instanceof Account);

// We can able to change our idea in our code (Change code)
// We can use read-only modifier, we can only set it using constructor, if we intent to change we get Compilation error

// Access Control Keywords

// class Account {

//     readonly id: number; // Public by-default
//     owner: string;
//     private _balance: number; // Accessible only inside the class, Private -> only for writing robust code
//     nickname?: string; // Optional

//     constructor(id: number, owner: string, balance: number){
//         this.id = id;
//         this.owner = owner;
//         this._balance = balance;
//     }

//     private calculateTax() {
//     }

//     getBalance(): number {
//         return this._balance;
//     }

//     deposit(amount: number): void {
//         if (amount <= 0)
//             throw new Error('Invalid Amount');
//         // Record Transactions 
//         this._balance += amount;
//     }
// }

// let account = new Account(1, 'Harish', 10_00_000);
// // There is problem with this implementation
// // account.balance = -1; // We can directly update and also we don't have the record
// console.log(account.getBalance());
// /* Access Modifiers -> Public, Private and Protected */

// Parameter Properties

// class Account {

//     nickname?: string;

//     constructor(
//         public readonly id: number, 
//         public owner: string, 
//         private _balance: number){ // This tells the compiler to create a property name and initialize at onego
//     } // These are called parameter properties

//     private calculateTax() {
//     }

//     getBalance(): number {
//         return this._balance;
//     }

//     deposit(amount: number): void {
//         if (amount <= 0)
//             throw new Error('Invalid Amount');
//         // Record Transactions 
//         this._balance += amount;
//     }
// }

// let account = new Account(1, 'Harish', 10_00_000);

// Getters and Setters

// class Account {

//     nickname?: string;

//     constructor(
//         public readonly id: number, 
//         public owner: string, 
//         private _balance: number) {
//     }

//     private calculateTax() {
//     }

//     get balance(): number {
//         return this._balance;
//     }

    // set balance(value: number) {
    //     if (value < 0)
    //         throw new Error('Invalid value');
    //     this._balance = value;
    // } We don't want for this case

//     deposit(amount: number): void {
//         if (amount <= 0)
//             throw new Error('Invalid Amount');
//         // Record Transactions 
//         this._balance += amount;
//     }
// }

// let account = new Account(1, 'Harish', 10_00_000);
// console.log(account.balance);
// account.balance = 1;

// Index Signatures

// let person = {};
// person.name = 'a'; TypeScript is very strict on shape of object 

// There will be a situation where we should add properites to an object dynamically -> Index Signatures

class SeatAssignment {
    // A1, A2, ...
    // PoPz, Raghav, ...

    // A1: string;
    // A2: string; What if there are 100s
    // Index Signatures property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Harish';
seats.A2 = 'Raghav';
seats['A3'] = 'PoPz';
// seats.A4 = 2; // Error

// Static Members

class Ride {

    private static _activeRides: number = 0;

    // start() { this.activeRides++ };
    // stop() { this.activeRides-- };

    start() { Ride._activeRides++ };
    stop() { Ride._activeRides-- };

    static get activeRides() {
        return Ride._activeRides;
    }
}

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(ride1.activeRides); // 1
// console.log(ride2.activeRides); // 1

// But we should globally count this, we use static in activeRides

let ride = new Ride();
ride.start();

// console.log(Ride.activeRides);

// Here we have a problem
// Ride.activeRides = 10; I can direclty modify it 
// After defining get it is part of write object and we have acompilation error in the above code (Ride.activeRides = 10;)
// We shouls set as static, Now we have a error saying it is read-only property.
// Now we prevent this from accidently creating bugs

// Inheritance

// class Person {
//     constructor(public firstName: string, public lastName: string) {}

//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }

//     walk() {
//         console.log('Let\'s Walk');
//     }
// }

// class Student extends Person{
//     constructor(public studentId: number, firstName: string, lastName: string) {
//         // We removed public because we already initialized in Person class
//         super(firstName, lastName);
//     }

//     takeTest() {
//         console.log("Test Yep!");
        
//     }
// }

// let student = new Student(1, 'Harish', 'Raghav');
// console.log(student.walk());
// For best practice, we should implement this classes in different files

// Methods Overriding

// class Person {
//     constructor(public firstName: string, public lastName: string) {}

//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }

//     walk() {
//         console.log('Let\'s Walk');
//     }
// }

// class Student extends Person{
//     constructor(public studentId: number, firstName: string, lastName: string) {
//         super(firstName, lastName);
//     }

//     takeTest() {
//         console.log("Test Yep!");
        
//     }
// }

// class Teacher extends Person {

//     override get fullName() { // We can get the output without override method, but it will be disconnected the one defined in the base class (Problem).
//         // NoImplicitOverride
//         // return 'Professor' + this.firstName + ' ' + this.lastName;
//         return 'Professor ' + super.fullName;

//     }
// }

// let teacher = new Teacher('Harish', 'Raghav');
// console.log(teacher.fullName);

// Polymorphism

// class Person {
//     constructor(public firstName: string, public lastName: string) {}

//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }

//     walk() {
//         console.log('Let\'s Walk');
//     }
// }

// class Student extends Person{
//     constructor(public studentId: number, firstName: string, lastName: string) {
//         super(firstName, lastName);
//     }

//     takeTest() {
//         console.log("Test Yep!");
        
//     }
// }

// class Teacher extends Person {

//     override get fullName() {
//         return 'Professor ' + super.fullName;
//     }
// }

// class Principle extends Person {

//     override get fullName() {
//         return 'Principle ' + super.fullName;
//     }
// }

// printNames([
//     new Student(1, 'John', 'Smith'),
//     new Teacher('Harish', 'Raghav'),
//     new Principle('Hello', 'Thani')
// ])

// function printNames(people: Person[]) {
//     for (let person of people) 
//         console.log(person.fullName);
// }

/* 
Open Close Principle
Classes should be open for extension and closed for modification */

// Private vs Protected Members

class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    protected walk() { // We should know when we are using protected, it can cause coupling
        // Just stick to public and private
        console.log('Let\'s Walk');
    }
}

class Student extends Person{
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        this.walk();
        console.log("Test Yep!");
        
    }
}

class Teacher extends Person {

    override get fullName() {
        return 'Professor ' + super.fullName;
    }
}

class Principle extends Person {

    override get fullName() {
        return 'Principle ' + super.fullName;
    }
}

printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Harish', 'Raghav'),
    new Principle('Hello', 'Thani')
])

function printNames(people: Person[]) {
    for (let person of people) 
        console.log(person.fullName);
}

// Abstract classes and Methods

abstract class Shape {
    constructor (public color: string) {}

    // Methods with no implementation
    // abstract render() {} Error: It should not have implementation
    // abstract render(); Error: any type return
    abstract render(): void;
    // Abstract methods only can be defined inside the abstract class
}

class Circle extends Shape {
    constructor(public radius: string, color: string) {
        super(color);
    }
    
    override render(): void {
        console.log('Rndering a Circle');
    }
}

// let shape = new Shape('red');
// shape.render(); // It doesn't make sense to render a shape -> Use Abstract classes and methods
// If you want to stop from being creating an instance of the Shape class, we use Abstract
// We are telling the TS compiler that this class is abstract and an another class should extend it
// Abstract classes is like uncooked meal -> Not ready, another class shoudl extend it.

// Interfaces -> another building block ->to define the shape of objects

// abstract class Calender {
//     constructor(public name: string) {}

//     abstract addEvent(): void;
//     abstract removeEvent(): void; // These methods will not have implementation, it is dependent on type of calender
//     // When we compile our code, in JS there is no abstract, it is purely TS concept
// }

// Using interface, we can say that all of our calenders should have name and methods properties
interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
    // When we compile our code, there will be nothing in JS
}

interface CloudCalender extends Calender {
    sync(): void;
}

class GoogleCalender implements Calender {
    // name: string; Error: Not initialized
    constructor(public name: string) {} // Manually initialize it
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}

/* 
Abstract or Interface
In this Eg, the calender class is not providing any logic or any algo that child classes can reuse  
We only have bunch of methods declarations, In this case, it is better to use interfaces
But if we have a logic that child classes usese, we should go for abstract classes
*/ 


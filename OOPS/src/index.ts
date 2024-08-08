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

class Account {

    readonly id: number; // Public by-default
    owner: string;
    private _balance: number; // Accessible only inside the class, Private -> only for writing robust code
    nickname?: string; // Optional

    constructor(id: number, owner: string, balance: number){
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    private calculateTax() {
    }

    getBalance(): number {
        return this._balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        // Record Transactions 
        this._balance += amount;
    }
}

let account = new Account(1, 'Harish', 10_00_000);
// There is problem with this implementation
// account.balance = -1; // We can directly update and also we don't have the record
console.log(account.getBalance());
/* Access Modifiers -> Public, Private and Protected */
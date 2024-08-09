"use strict";
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Harish';
seats.A2 = 'Raghav';
seats['A3'] = 'PoPz';
class Ride {
    start() { Ride._activeRides++; }
    ;
    stop() { Ride._activeRides--; }
    ;
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride = new Ride();
ride.start();
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Let\'s Walk');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Test Yep!");
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principle extends Person {
    get fullName() {
        return 'Principle ' + super.fullName;
    }
}
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Harish', 'Raghav'),
    new Principle('Hello', 'Thani')
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}

"use strict";
// * In TS classes, you can use getter and setter methods to control the access and modification
// * of class properties. Getter methods allows you to retrieve the value of a property, while
// * Setter methods allows you to set the value of property with addn logic or validation.
// * Te get method doesn't take any parameters, and the set method takes only one parameter
// Private Class
class Info2 {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 100 || age < 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not defined");
        }
        return this._age;
    }
    introParent() {
        return `My name is ${this.name} and my age is ${this._age} and my hobbies are ${this.hobbies.join(",")}`;
    }
}
//   Outside Class
const infos2 = new Info2("Suyog", ["coding", "writing"]);
infos2.age = 22;
console.log(infos2.introParent());
// * Practice
// ? Create bank account
// Create a TS class BankAccount with private property _balance initialized to 0.
// Implement a getter method balance that returns the current balance.
// Implemet a setter method balance that update the balance if the new value is non-negative.
// Instantiate an object of the BankAccount class.
// Use the setter to set the balance to 1000 and use the  getter to display the updated balance.
class BankAccount {
    _balance = 0;
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("Invalid balance");
        }
        this._balance = newBalance;
    }
    get balance() {
        return this._balance;
    }
}
const acc = new BankAccount();
acc.balance = 1000;
console.log(acc.balance);
// ? Tempreature Converter
// Define a TS class Tempreature with a private property _celsius set to 0.
// Implement a getter method celsius that returns the tempreature in Celsius.
// Implement a setter method celsius that set the tempreature in Celsius.
// Implement a getter method fahrenheit that converts Celsius to Fahrenheit.
// Implement a setter method fahrenheit that converts Fahrenheit to Celsius.
// Create an instance of the Tempreature class.
// Use the setter method to set the tempreature in Celsius to 25 and then use the getter method for Fahernheit.
// Use the setter method to set the tempreature in Fahrenheit to 98.6 and then use the getter method for Celsius.
class Tempreature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(newFahren) {
        this._celsius = ((newFahren - 32) * 5) / 9;
    }
}
const temp = new Tempreature();
temp.celsius = 25;
console.log(temp.fahrenheit);
temp.fahrenheit = 98.6;
console.log(temp.celsius);

"use strict";
// * Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
// * It is a mechanism in which one class acquires the property of another class.
// * In TS, super keyword is used in the context of class inheritance. It allows a subclass or
// * derived class to call methods or access properties of its super class or base class.
// * This is particularly useful when you want to extend the behaviour of a parent class
// * while still leveraging its existing functionality.
// Private Class
class Info {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    intro() {
        return `My name is ${this.name} and my age is ${this.age} and my hobbies are ${this.hobbies.join(",")}`;
    }
}
// Child Class
class Students extends Info {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    intro() {
        return `${super.intro()}. Iam in grade ${this.grade}`;
    }
}
// Outside Class
const info1 = new Info("Suyog", 22, ["coding", "reading"]);
const info2 = new Info("Anisha", 21, ["coding", "reading"]);
const students1 = new Students("Samyog", 17, ["coding", "reading"], 12);
console.log(students1.intro());

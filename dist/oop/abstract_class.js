"use strict";
// * Abstract class provide a way to define common properties and method that multiple derived
// * derived classes can share. This provides code reuse and helps to establish a common
// * instance for related classes. It can't be instantised. It focus on class inheritance
// abstract class PersonObj{
//     name: string;
//     age: number;
// }
// class P1: PersonObj ={
//     name: "Suyog",
//     age: 22
// }
// class P2: PersonObj ={
//     name: "Samyog",
//     age: 17
// }
// todo Shape Hierarchy
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
// Circle
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`This is a ${this.color} circle with radius ${this.radius}`);
    };
}
const circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea();
// Rectangle
class Rectangle extends Shape {
    length;
    breadth;
    constructor(color, length, breadth) {
        super(color);
        this.length = length;
        this.breadth = breadth;
    }
    calculateArea() {
        return this.length * this.breadth;
    }
    displayArea = () => {
        console.log(`This is a ${this.color} rectangle with length: ${this.length} & breadth: ${this.breadth}`);
    };
}
const rectangle = new Rectangle("blue", 5, 7);
console.log(rectangle.calculateArea());
rectangle.displayArea();
// Square
class Square extends Shape {
    length;
    constructor(color, length) {
        super(color);
        this.length = length;
    }
    calculateArea() {
        return this.length * this.length;
    }
    displayArea = () => {
        console.log(`This is a ${this.color} square with length: ${this.length} `);
    };
}
const square = new Square("green", 5);
console.log(square.calculateArea());
square.displayArea();

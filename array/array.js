"use strict";
// * Arrays in TS
// * an array is a data type that can store multiple values of different data types sequentially.
// * In TS, you can create and initialize arrays using various apporaches
// a) using square brackets:
const number = [1, 2, 3, 4, 5];
// b) using array constructor:
const number1 = new Array(1, 2, 3, 4, 5);
// c) using array of method:
const names = Array.of("Suyog", "Samyog", "Anisha");
// Operation: Accessing elements using index:
console.log(names[2]);
console.log(names.length);
// TODO
const value1 = [1, 2, 3, 4];
const value2 = "Hello, World";
const value3 = { name: "Suyog", age: 22 };
const value4 = [true, false, true];
const value5 = 40;

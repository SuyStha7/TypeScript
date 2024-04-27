// * Arrays in TS
// * an array is a data type that can store multiple values of different data types sequentially.
// * In TS, you can create and initialize arrays using various apporaches

// a) using square brackets:
const number: number[] = [1, 2, 3, 4, 5];

// b) using array constructor:
const number1: number[] = new Array(1, 2, 3, 4, 5);

// c) using array of method:
const names: string[] = Array.of("Suyog", "Samyog", "Anisha");

// Operation: Accessing elements using index:
console.log(names[2]);

console.log(names.length);

// TODO
const value1: number[] = [1, 2, 3, 4];

const value2: string = "Hello, World";

const value3: {} = { name: "Suyog", age: 22 };

const value4: boolean[] = [true, false, true];

const value5: number = 40;

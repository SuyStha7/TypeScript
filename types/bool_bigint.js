"use strict";
// * Boolean Type
// * In TypeScript, the boolean type represents a value that can be either true or false.
// todo Check Even Number
// ? Write a TypeScript function called isEven that takes a number as a parameter and
// ? return true if the number is even and false otherwise
const isEven = (a) => {
    return a % 2 === 0;
};
// console.log(isEven(5));
// todo Divisble by 4 and 8
// ? Write a TS function called isDivisibleBy4And8 that takes a number as a parameter,
// ? and returns true if the number is divisible by both 4 and 8
const isDivisibleBy4And8 = (s) => {
    return s % 4 === 0 && s % 8 === 0;
};
console.log(isDivisibleBy4And8(32));
// * BigInt Type
// * It is a built-in type that allows you to work with numbers that are larger than the range
// * supported by the regular number type.
// * it is written by appending the 'n' suffix to an integer literal.
// * in JS we can't read the whole numbers beyond 2 raise to power 53
// ! Assignment
let maxNumber = Number.MAX_SAFE_INTEGER;
let bigNumber = 9007199254740991n;
let anotherBigNumber = BigInt("90071992547409914");
let add = bigNumber + anotherBigNumber;
console.log("Add:", add);
let diff = bigNumber - anotherBigNumber;
console.log("Diff:", diff);
let multi = bigNumber * anotherBigNumber;
console.log("Product:", multi);
let division = bigNumber / anotherBigNumber;
console.log("Divide:", division);

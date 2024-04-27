//* Map and Filter method in TS

const num: number[] = [1, 2, 3, 4, 5];

//! Map Method
// The map method creates a new array by applying a provided function to each elements of the
// original array. It transforms each elements and returns a new array with the transformed values.

// * 1) Doubling each number
const doubleNum: number[] = num.map((val: number) => val * 2);
console.log(doubleNum);

// * 2) Coverting numbers to strings
const stringNum: string[] = num.map((val: number) => val.toString());
console.log(stringNum);

//! Filter Method

// * Filtering even numbers
const evenNum: number[] = num.filter((val: number) => val % 2 === 0);
console.log(evenNum);

// * Filtering numbers greater than 3
const greaterNum: number[] = num.filter((val: number) => val > 3);
console.log(greaterNum);

// todo Map method
// ? Given an array of strings representing names, create anew array that contains the uppercase version of each name.
const names1: string[] = ["Suyog", "Samyog"];

const uppercaseName = names1.map((uppercase) => uppercase.toUpperCase());
console.log(uppercaseName);

// ? Given an array of numbers, create a new array that contains the square of each number.
const nums: number[] = [1, 2, 3, 4, 5];

const squareNum = nums.map((square) => square * square);
console.log(squareNum);

// todo Filter method
// ? Given an array of strings, create a new array that contains only the strings with a length greater than 4.
const names2: string[] = ["Suyog", "Samyog"];

const lengthNames: string[] = names2.filter((name: string) => name.length > 4);
console.log(lengthNames);

// ? Given an array of strings, filter out the strings that contain the letter 'a'.
const names3: string[] = ["Suyog", "Samyog"];

const filterNames: string[] = names3.filter((name: string) =>
  name.includes("a")
);
console.log(filterNames);

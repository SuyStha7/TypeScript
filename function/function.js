"use strict";
// ! Function Declaration:
// * You can declare a function using function keyword, followed by the function name,
// * a list of parameters enclosed in parameters, and a return type.
// * The function body contains the code that will be executed when the function is called.
// ! Function Invocation:
// * To execute a function, you simply invoke it by using its name followed by parameters.
// * You can provide arguments (actual values) for the parameters defined in the function declaration
// greeting function
// const greet = (name: string, id: number) => {
//   console.log(`Welcome ${name} and your id is ${id}`);
// };
// function call
// greet("Suyog", 22);
// ! Function return : How do you specify the return type of a function in TS?
// * to specify the return type of a function, you can use the colon (:) followed by the
// * desired type after the function's parameter list
// greeting function
const greet = (name, id) => {
    return `Welcome ${name} and your id is ${id}`;
};
// function call
greet("Suyog", 22);
// TODO Practice
// ? Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
const isPalindrome = (str) => {
    let palin = str.split("").reverse().join("");
    return palin === str;
};
console.log(isPalindrome("racecar"));
// ? Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of the numbers.
const calculateAverage = (numbers) => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
};
const numbers = [5, 10, 15, 20];
console.log(calculateAverage(numbers));
// ? Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
const findMaxValue = (numbers) => {
    return numbers.reduce((acc, curr) => (acc > curr ? acc : curr));
};
console.log(findMaxValue(numbers));

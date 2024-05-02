// * Type Inference in TS refers to the ability of the TS compiler to automatically determine and
// * assign types to variables, expressions, and function return values based on their usage and
// * context in the code

const myName = "John"; // * TS infers that myName is a string
const myAge = 30; // * TS infers that myAge is a number

// todo What are some best practices for using type inference in TS?
// ? use type inference for simple cases where the assigned value clearly indiactes the intended type
// ? when in doubt, provide explicit type annotations to make your intentions clear.
// ? avoid relying too heavily on type inference where assigned value is complex and ambiguous
// ? regularly review and refactor your code to ensure that inferred types align with your intentions.

// todo Declare a variable msg and initilize it with a value "Hello World". Infer the type of msg using inference
let msg = "Hello World";

//? Write a function calculateArea that takes the length and width parameters of type number and
//? returns their product. Infer the type of the return value of the function using inference

const calculateArea = (length: number, width: number) => {
  return length * width;
};

// Example usage
const area = calculateArea(5, 4);
console.log("Area:", area);

"use strict";
// ? Intro to types annotations in TS
// * In TypeScript, type annotation is a way of explicitly specifying the type of variable, function parameter, or function return value.
// * Type annotations are expressed by using a colon (:) followed by the desired type after the variable or function parameter declaration.
// * there can be space after the colon
// let myFavNum: number = 7;
// let myFullName: string = "Suyog Shrestha";
// ! Advantages
// ? it helps the TypeScript compiler to enforce type checking and provide type saftey during development.
// ? what operations could be performed on that variable or value
// * Number Type
// * the number type represents numeric values, including integers and floating point numbers.
// todo Arithmetic Operations:
// ? Number types in TypeScript support arithmetic operations such as
// ? addition (+), subtraction (-), multiplication (*), and divison (/).
// ? the results of these operations on numbers also of type number
// let myFavNum: number = 7;
// let myAge: number = 22;
// let pi: number = 3.14;
// let myNegVal: number = -8;
// * String Type
// * Any value under single of double quotes are treated as string
// todo String Initialization:
// ? Declare a varible message of type string and assign it the value "Hello, TypeScript"
let message = "Hello, TypeScript";
// todo Concatenation
// ? Create a variable firstName and lastName of type string and assign your first name and
// ? last name respectively. Concatenate the two variables and store the results in a
// ? variable  called fullName.
let myFirstName = "Suyog";
let myLastName = "Shrestha";
let myFullName = myFirstName + myLastName;
console.log(myFullName);
// todo String Length
// ? Declare a variable sentence of type string and assign it a sentence of your choice.
// ? Find the length of the string and store it in the variable called sentenceLength.
let sentence = "Hello, It's me Suyog Shrestha";
let sentenceLength = sentence.length;
console.log(sentenceLength);
// todo Uppercase and Lowercase
// ? Declare a variable text of type string and assign it a sentence of your choice
// ? convert the entire sentence to uppercase and store the result in a variable called uppercaseText.
// ? convert the entire sentence to lowercase and store the result in a variable called lowercaseText.
let text = "Hello, It's me Suyog Shrestha";
let uppercaseText = text.toUpperCase();
let lowercaseText = text.toLowerCase();
console.log(uppercaseText);
console.log(lowercaseText);
// todo Substring
// ? Declare a variable longText of type string and assign it a long sentence. Extract the
// ? first 10 characters from longText and store them in a variable called shortText.
let longText = "This is a long sentence that we'll extract the first 10 characters from";
let shortText = longText.substring(0, 10);
console.log(shortText);
// todo String Template
// ? Declare variables product and price of type string and number, respecively.
// ? Create string using templates literals to display the product and its prices in the
// ? format the product {product} is priced at Rs.{price}
let product = "Rubix Cube";
let price = 200;
let productPriced = `The product ${product} is priced at Rs.${price}`;
console.log(productPriced);

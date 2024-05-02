"use strict";
// * In TypeScript, objects are used to represent the data with key-value pairs
// * Each key in the object is a string (or a symbol in ES6) that maps to the value.
const person = {
    name: "Suyog",
    age: 22,
    isStudent: true,
    address: {
        city: "KTM",
        country: "Nepal",
    },
};
// Todo accessing the object data
console.log(person.address.city);
// Todo updating object properties
person.address.country = "India";
console.log(person.address.country);
// ? Define a product with properties for name, price and quantity. Create a product object
// ? with the following data:
// Name: "Lenevo"
// Price: 90000
// Quantity: 2
const laptop = {
    name: "Lenevo",
    price: 90000,
    quantity: 2,
};

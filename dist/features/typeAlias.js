"use strict";
// * In TypeScript, type alias is a way to give a name to a specific type or combn of types.
// * It allow you to create a custom name for a type, making it easier to reuse and refer to the same type,
// * in different part of your code. It provide better reuseability, organization and abstraction of complex type.
const laptop1 = {
    name: "Lenevo",
    price: 90000,
    quantity: 2,
};
const laptop2 = {
    name: "ASUS",
    price: 100000,
    quantity: 5,
};
const laptop3 = {
    name: "HP",
    price: 90000,
    quantity: 1,
};
// ? Write a function called calculatePrice that calculates the total price of a product based on the quantity and price.
const calculatePrice = (product) => {
    return `${product.name} total cost ${product.price * product.quantity}`;
};
console.log(calculatePrice(laptop1));
console.log(calculatePrice(laptop2));
console.log(calculatePrice(laptop3));

"use strict";
// * Interface is a powerful feature that allows you to define a contract for an object's shape.
// * It specifies the properties and their types that an object must have to be considered of that
// * particular interface type. Interface are primarily used for type-checking during development.
// * and don't generate any JS code at runtime
const greets = {
    name: "Suyog",
    age: 22,
};
const products = {
    name: "Lenevo",
    price: 90000,
    quantity: 2,
};
// ? Write a function called calculatePricing that calculates the total price of a product based on the quantity and price.
const calculatePricing = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
console.log(calculatePricing(products));

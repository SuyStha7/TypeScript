"use strict";
// * Tuples are a data structure that allows you to store a fixed size collection of elements
// * of different types. They are similar to arrays, but with a key differences: the types of
// * elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold
// * elements of same type, and their size can vary. In tuple, order matters
const displayPersonInfo = (person) => {
    const [name, age, hasDrivingLicense] = person;
    console.log(`Name: ${name}, Age: ${age}, Driver's license: ${hasDrivingLicense ? "Yes" : "No"} `);
};
const person1 = ["Suyog", 23, true];
const person2 = ["Samyog", 18, false];
displayPersonInfo(person1);
displayPersonInfo(person2);

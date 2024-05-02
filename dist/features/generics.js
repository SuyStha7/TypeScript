"use strict";
// * Generics in TS allows you to create reusable components or functions that can work with multiple data types
const logAndReturn = (value) => {
    return value;
};
const numResult = logAndReturn(5);
const strResult = logAndReturn("hello");
const boolResult = logAndReturn(true);
console.log(numResult);
console.log(strResult);
console.log(boolResult);

"use strict";
// * The function call signature refers to the declaration or definition of a function,
// * which includes the function's name, parameters, and return type. It defines the
// * structure and type information of a function without including the function's body.
const student = {
    name: "Suyog",
    age: 22,
    greet: (country) => `My name is ${student.name}, Iam ${student.age} years old & Iam from ${country}`,
};
console.log(student.greet("Nepal"));

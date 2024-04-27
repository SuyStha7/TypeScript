"use strict";
// * Optional and default parameters
// * TypeScript allows you to define optional parameters in function.
// * It is denoted by appending a ? symbol after the parameter name, and
// * default parameters are specified by providing a default value in the parameter.
// default parameters
const greet1 = (name, id = 1) => {
    return `Welcome, ${name} and your id is ${id}`;
};
// optional parameters
const greet2 = (name, id) => {
    if (id) {
        return `Welcome, ${name} and your id is ${id}`;
    }
    else {
        return `Welcome, ${name}`;
    }
};
// func call
const emp = console.log(greet1("Suyog"));
const emp1 = console.log(greet2("Suyog"));

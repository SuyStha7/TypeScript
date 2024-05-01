"use strict";
// * Union types allows you to specify that a variable can hold values of multiple types
// * The | (pipe) symbol is used to define the union type.
// * In TS, when using a union type, it is essential to ensure that at least one of the types
// * in the union includes all the required properties.
// * Intersection types allows you to combine multiple types into a single type.
// * The & (ampersand) symbol is used to define the intersection type.
const userInput = (input) => {
    if (typeof input === "number") {
        return input * 2;
    }
    else if (typeof input === "string") {
        return input.toUpperCase();
    }
    else {
        throw new Error("Invalid input data");
    }
};
console.log(userInput(10));
console.log(userInput("hello"));
// todo
//? we want to create a function that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add dollar sign and format it with two decimal places.
//? If the input is a string, it should be capitalized.
//? If the input is boolean, it should return "yes" for true and "no" for false
function formatValue(input) {
    if (typeof input === "number") {
        return `$${input.toFixed(2)}`;
    }
    else if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "boolean") {
        return input ? "yes" : "no";
    }
    else {
        return "Unsupported type";
    }
}
console.log(formatValue(10));
console.log(formatValue("hello"));
console.log(formatValue(true));
console.log(formatValue(false));
const employee = {
    name: "Suyog",
    age: 23,
    empId: 100,
};
const employee1 = {
    name: "Suyog",
    age: 23,
    empId: 100,
    department: "IT",
};
const user = {
    name: "Suyog",
    age: 22,
};
const myLocation = {
    city: "KTM",
    country: "Nepal",
};
const createUserProfile = (user, myLocation) => {
    // return `My name is ${user.name} & Iam living in ${myLocation.city}`;
    return { ...user, ...myLocation };
};
const details = createUserProfile(user, myLocation);
console.log(details);
const combineUserAndAccount = (user, account) => {
    return { ...user, ...account };
};
const user3 = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
};
const account = {
    accountId: 123456,
    accountType: "Savings",
    balance: 5000,
};
const combinedInfo = combineUserAndAccount(user3, account);
console.log(combinedInfo);

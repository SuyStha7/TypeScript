// * Union types allows you to specify that a variable can hold values of multiple types
// * The | (pipe) symbol is used to define the union type.
// * In TS, when using a union type, it is essential to ensure that at least one of the types
// * in the union includes all the required properties.

// * Intersection types allows you to combine multiple types into a single type.
// * The & (ampersand) symbol is used to define the intersection type.

const userInput = (input: string | number): string | number => {
  if (typeof input === "number") {
    return input * 2;
  } else if (typeof input === "string") {
    return input.toUpperCase();
  } else {
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

function formatValue(input: number | string | boolean): string {
  if (typeof input === "number") {
    return `$${input.toFixed(2)}`;
  } else if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "boolean") {
    return input ? "yes" : "no";
  } else {
    return "Unsupported type";
  }
}

console.log(formatValue(10));
console.log(formatValue("hello"));
console.log(formatValue(true));
console.log(formatValue(false));

// eg
type People = {
  name: string;
  age: number;
};

type Employee = {
  empId: number;
  department: string;
};

type EmployeeDetails = People | Employee; //include all properties of same types or any of the types
type EmployeeDetails1 = People & Employee; //include all properties of both types

const employee: EmployeeDetails = {
  name: "Suyog",
  age: 23,
  empId: 100,
};

const employee1: EmployeeDetails = {
  name: "Suyog",
  age: 23,
  empId: 100,
  department: "IT",
};

// todo: Create user profile
// ? You are given two TS types: User and MyLocation. The User type represent the basic user information
// ? while, MyLocation type conatins details about the user's location. Create a function called
// ? createUserProfile that takes a User object and MyLocation object as arguments and prints
// ? the user's name and the city they are from

type User = {
  name: string;
  age: number;
};

type MyLocation = {
  city: string;
  country: string;
};

const user: User = {
  name: "Suyog",
  age: 22,
};

const myLocation: MyLocation = {
  city: "KTM",
  country: "Nepal",
};

const createUserProfile = (user: User, myLocation: MyLocation) => {
  // return `My name is ${user.name} & Iam living in ${myLocation.city}`;
  return { ...user, ...myLocation };
};

const details: User & MyLocation = createUserProfile(user, myLocation);

console.log(details);

// todo: Building a user management system
// ? You have two TS types:
// ? User: Represent basic user inforamtion with the following properties:
// ? id(number): The user's unqiue identifiers
// ? name(string): The user's name
// ? email(string): The user's email address

// ? Admin: Conatins details about the user's account, with the following properties:
// ? accountId(number): The account's unqiue identifiers
// ? accountType(string): The type of account(eg: "Savings", "Current")
// ? balance(number): The account's balance

// * the task is to create a function called combineUserAndAccount that takes the User and
// * Account objects as arguments and returns a new object representing the combined
// * user and account information.

type User1 = {
  id: number;
  name: string;
  email: string;
};

type Account = {
  accountId: number;
  accountType: string;
  balance: number;
};

const combineUserAndAccount = (user: User1, account: Account) => {
  return { ...user, ...account };
};

const user3: User1 = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

const account: Account = {
  accountId: 123456,
  accountType: "Savings",
  balance: 5000,
};

const combinedInfo: User1 & Account = combineUserAndAccount(user3, account);
console.log(combinedInfo);

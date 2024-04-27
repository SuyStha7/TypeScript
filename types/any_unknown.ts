// * Any Type
// * The any type is the most flexible type in TypeScript. It essentially turns
// * off all type checking for the variables or expressions it is applied to.
// * you will see any type when you first write the code.

let myNum: any = 5;
myNum = false;

// ! useCases
// * Working with Dynamic Data: When dealing with data from dynamic sources
// * like user inputs, network responses or deserialized JSON objects, the any type can be useful.

// * Migration from JS: When migrating an existing JS to TS, using the any type can be convenient
// * way to quickly annonate variables and functions without immediately specifying thoeir precise way.

// * Unknown Type

// * The unknown type is a safer alternative to any because it still enforces type checking and
// * type saftey.
// * Variables of type unknown can hold values of any type, but you must peform the type checks or
// * type assertions before using them in specific ways.

let num2: unknown;
num2 = 5;
// num2 = true;

if (typeof num2 === "number") {
  console.log(num2 + 5);
} else if (typeof num2 === "boolean") {
  console.log(num2);
}

async function fetchData(): Promise<unknown> {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

async function processData() {
  const response = await fetchData();

  if (typeof response === "object") {

  }
}

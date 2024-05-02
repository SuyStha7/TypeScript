// * Arrays in TS come with bulit-in methods that allows you to perform common operations

const fruits: string[] = ["mango", "grapes", "pine", "avocado"];

// a) Adding elements to an array using push:
const updatedFruits = fruits.push("apple");
console.log(updatedFruits);
console.log(fruits);

// b) Removing elements from an array using pop:
const removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);

// ! Iterating over elements
// * You can iterate over the elements of an array using various looping constructs such as for,
// * for...of, or array method like forEach\

// using loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// using for...of (iterate over values)
for (const fruit of fruits) {
  console.log(fruit);
}

// using for...in (iterate over indices)
for (const fruit in fruits) {
  console.log(fruit);
}

// using forEach method
fruits.forEach((fruit) => {
  console.log(fruit);
});

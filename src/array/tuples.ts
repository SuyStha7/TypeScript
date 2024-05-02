// * Tuples are a data structure that allows you to store a fixed size collection of elements
// * of different types. They are similar to arrays, but with a key differences: the types of
// * elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold
// * elements of same type, and their size can vary. In tuple, order matters

// * eg: Let's us consider a scenario where you want to represent a person's basic info,
// * including their name, age and whether they have a driver's license. Using a tuple can be
//* apporopriate choice because these three elements have specific order and type.

type PersonInfo = readonly [string, number, boolean]; //tuple: instead of defining the value, we define the type

const displayPersonInfo = (person: PersonInfo) => {
  const [name, age, hasDrivingLicense] = person;
  console.log(
    `Name: ${name}, Age: ${age}, Driver's license: ${
      hasDrivingLicense ? "Yes" : "No"
    } `
  );
};

const person1: PersonInfo = ["Suyog", 23, true];
const person2: PersonInfo = ["Samyog", 18, false];

displayPersonInfo(person1);
displayPersonInfo(person2);

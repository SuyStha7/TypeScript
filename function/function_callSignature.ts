// * The function call signature refers to the declaration or definition of a function,
// * which includes the function's name, parameters, and return type. It defines the
// * structure and type information of a function without including the function's body.

// * Call signatures are typically used inside the object type notations to describe
// * the shape of functions within object types.

// todo
type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string; //method call signature
};

const student: Student = {
  name: "Suyog",
  age: 22,
  greet: (country): string =>
    `My name is ${student.name}, Iam ${student.age} years old & Iam from ${country}`,
};

console.log(student.greet("Nepal"));

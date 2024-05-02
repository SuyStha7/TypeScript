// * Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
// * It is a mechanism in which one class acquires the property of another class.

// * In TS, super keyword is used in the context of class inheritance. It allows a subclass or
// * derived class to call methods or access properties of its super class or base class.
// * This is particularly useful when you want to extend the behaviour of a parent class
// * while still leveraging its existing functionality.

// Private Class
class Info {
  constructor(
    public name: string,
    public age: number,
    public hobbies: string[]
  ) {}

  intro(): string {
    return `My name is ${this.name} and my age is ${
      this.age
    } and my hobbies are ${this.hobbies.join(",")}`;
  }
}

// Child Class
class Students extends Info {
  constructor(
    name: string,
    age: number,
    hobbies: string[],
    public grade: number
  ) {
    super(name, age, hobbies);
  }

  intro(): string {
    return `${super.intro()}. Iam in grade ${this.grade}`;
  }
}

// Outside Class
const info1: Info = new Info("Suyog", 22, ["coding", "reading"]);
const info2: Info = new Info("Anisha", 21, ["coding", "reading"]);

const students1: Students = new Students(
  "Samyog",
  17,
  ["coding", "reading"],
  12
);
console.log(students1.intro());

// *             Parent Class  |  Chlid Class |  Outside Class
// * Public        Yes              Yes             Yes
// * Protected     Yes              Yes             No
// * Private       Yes              No              No

// Parent Class
class Info1 {
  constructor(
    public name: string,
    public age: number,
    protected hobbies: string[]
  ) {}

  introParent(): string {
    return `My name is ${this.name} and my age is ${
      this.age
    } and my hobbies are ${this.hobbies.join(",")}`;
  }
}

//   Child Class
class Students1 extends Info1 {
  constructor(
    name: string,
    age: number,
    hobbies: string[],
    public grade: number
  ) {
    super(name, age, hobbies);
  }

  intro(): string[] {
    // return `${super.intro()}. Iam in grade ${this.grade}`;
    return this.hobbies;
  }
}

//   Outside Class
const infos1: Info1 = new Info1("Suyog", 22, ["coding", "writing"]);
console.log(infos1.introParent());

const students2: Students1 = new Students1(
  "Samyog",
  17,
  ["coding", "reading"],
  12
);
console.log(students2.intro());

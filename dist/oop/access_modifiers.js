"use strict";
// *             Parent Class  |  Chlid Class |  Outside Class
// * Public        Yes              Yes             Yes
// * Protected     Yes              Yes             No
// * Private       Yes              No              No
// Parent Class
class Info1 {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introParent() {
        return `My name is ${this.name} and my age is ${this.age} and my hobbies are ${this.hobbies.join(",")}`;
    }
}
//   Child Class
class Students1 extends Info1 {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    intro() {
        // return `${super.intro()}. Iam in grade ${this.grade}`;
        return this.hobbies;
    }
}
//   Outside Class
const infos1 = new Info1("Suyog", 22, ["coding", "writing"]);
console.log(infos1.introParent());
const students2 = new Students1("Samyog", 17, ["coding", "reading"], 12);
console.log(students2.intro());

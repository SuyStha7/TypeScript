// * A class in terms of OOP is a blueprint for creating objects.
// * In TS, there is a conversion to use PascalCase (also know as UpperCamelCase)for class names
// * This means that class names should start with a capital letter and
// * each subseqent word should also start with a capital letter.

class Persons {
  name: string;
  age: number;
  hobbies: string[];
  
  constructor(name: string, age: number, hobbies: string[] ){
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const persons1: Persons = new Persons("Suyog", 22, ["coding", "reading"] );
const persons2: Persons = new Persons("Samyog", 17, ["coding", "reading"] );
const persons3: Persons = new Persons("Anisha", 21, ["coding", "reading"] );
console.log(persons3.name)

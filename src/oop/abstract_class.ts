// * Abstract class provide a way to define common properties and method that multiple derived
// * derived classes can share. This provides code reuse and helps to establish a common
// * instance for related classes. It can't be instantised. It focus on class inheritance

// abstract class PersonObj{
//     name: string;
//     age: number;
// }

// class P1: PersonObj ={
//     name: "Suyog",
//     age: 22
// }

// class P2: PersonObj ={
//     name: "Samyog",
//     age: 17
// }

// todo Shape Hierarchy
abstract class Shape {
  constructor(protected color: string) {}
  abstract calculateArea(): number;
  abstract displayArea: () => void;
}

// Circle
class Circle extends Shape {
  constructor(color: string, protected radius: number) {
    super(color);
  }
  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea = () => {
    console.log(`This is a ${this.color} circle with radius ${this.radius}`);
  };
}

const circle: Circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea();

// Rectangle
class Rectangle extends Shape {
  constructor(
    color: string,
    protected length: number,
    protected breadth: number
  ) {
    super(color);
  }
  public calculateArea(): number {
    return this.length * this.breadth;
  }

  displayArea = () => {
    console.log(
      `This is a ${this.color} rectangle with length: ${this.length} & breadth: ${this.breadth}`
    );
  };
}

const rectangle: Rectangle = new Rectangle("blue", 5, 7);
console.log(rectangle.calculateArea());
rectangle.displayArea();

// Square
class Square extends Shape {
  constructor(color: string, protected length: number) {
    super(color);
  }
  public calculateArea(): number {
    return this.length * this.length;
  }

  displayArea = () => {
    console.log(`This is a ${this.color} square with length: ${this.length} `);
  };
}

const square: Square = new Square("green", 5);
console.log(square.calculateArea());
square.displayArea();

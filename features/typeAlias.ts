// * In TypeScript, type alias is a way to give a name to a specific type or combn of types.
// * It allow you to create a custom name for a type, making it easier to reuse and refer to the same type,
// * in different part of your code. It provide better reuseability, organization and abstraction of complex type.

// * To define a type alias, you use the type keyword followed by the alias name of the type definition.

// ? Define an interface or type representing a product with properties for name, price and quantity. Create a product object
// ? with the following data:
// Name: "Lenevo"
// Price: 90000
// Quantity: 2

// type alias
type Product = {
  name: string;
  price: number;
  quantity: number;
};

const laptop1: Product = {
  name: "Lenevo",
  price: 90000,
  quantity: 2,
};

const laptop2: Product = {
  name: "ASUS",
  price: 100000,
  quantity: 5,
};

const laptop3: Product = {
  name: "HP",
  price: 90000,
  quantity: 1,
};

// ? Write a function called calculatePrice that calculates the total price of a product based on the quantity and price.
const calculatePrice = (product: Product) => {
  return `${product.name} total cost ${product.price * product.quantity}`;
};

console.log(calculatePrice(laptop1));
console.log(calculatePrice(laptop2));
console.log(calculatePrice(laptop3));

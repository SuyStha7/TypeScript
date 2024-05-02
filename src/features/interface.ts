// * Interface is a powerful feature that allows you to define a contract for an object's shape.
// * It specifies the properties and their types that an object must have to be considered of that
// * particular interface type. Interface are primarily used for type-checking during development.
// * and don't generate any JS code at runtime

interface IPerson {
  name: string;
  age: number;
}

const greets: IPerson = {
  name: "Suyog",
  age: 22,
};

// ? Define an interface product with properties for name, price and quantity. Create a product object
// ? with the following data:
// Name: "Lenevo"
// Price: 90000
// Quantity: 2

interface Products {
  name: string;
  price: number;
  quantity: number;
}

const products: Products = {
  name: "Lenevo",
  price: 90000,
  quantity: 2,
};

// ? Write a function called calculatePricing that calculates the total price of a product based on the quantity and price.

const calculatePricing = (product: Products) => {
  const { price, quantity } = product;
  return price * quantity;
};

console.log(calculatePricing(products));

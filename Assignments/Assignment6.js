const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

console.log("-- All Products (forEach) --");

products.forEach((product) => {
  console.log(`Item: ${product.name} - Price: $${product.price}`);
});

const filteredProducts = products.filter((product) => product.price < 50);

console.log("-- Filtered Products (Price < $50) --");
console.log(filteredProducts);

const mappedProducts = products.map(
  (product) => `${product.name.toUpperCase()} costs $${product.price}`,
);

console.log("-- Mapped Product Tags (map) --");
console.log(mappedProducts);

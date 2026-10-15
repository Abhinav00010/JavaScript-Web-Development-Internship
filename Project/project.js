console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

const productNameInput = prompt("Enter product name:");
const priceInput = prompt("Enter product price:");
const productPrice = Number(priceInput);

let newProductAdded = false;

if (
  productNameInput === null ||
  priceInput === null ||
  productNameInput.trim() === "" ||
  priceInput.trim() === "" ||
  !Number.isFinite(productPrice) ||
  productPrice <= 0
) {
  console.log(
    "Invalid or missing product details. Continuing with existing inventory.",
  );
} else {
  inventory.push({
    name: productNameInput.trim(),
    price: productPrice,
  });

  newProductAdded = true;
}

for (const product of inventory) {
  if (
    typeof product.name !== "string" ||
    product.name.trim() === "" ||
    !Number.isFinite(product.price) ||
    product.price <= 0
  ) {
    continue;
  }

  if (product.price < 100) {
    product.category = "Budget";
  } else if (product.price < 500) {
    product.category = "Standard";
  } else {
    product.category = "Premium";
  }

  switch (product.category) {
    case "Budget":
      product.badge = "BUDGET";
      break;
    case "Standard":
      product.badge = "STANDARD";
      break;
    case "Premium":
      product.badge = "PREMIUM";
      break;
    default:
      product.badge = "UNCATEGORIZED";
  }
}

if (newProductAdded) {
  const addedProductName = productNameInput.trim();
  let productFound = false;

  for (const product of inventory) {
    if (product.name === addedProductName) {
      productFound = true;
      break;
    }
  }

  if (!productFound) {
    console.log("The new product could not be found in the inventory.");
  }
}

function calculateTotal(items) {
  let total = 0;

  items.forEach((product) => {
    if (
      typeof product.name === "string" &&
      product.name.trim() !== "" &&
      Number.isFinite(product.price) &&
      product.price > 0
    ) {
      total += product.price;
    }
  });

  return total;
}

const calculateTax = (amount, taxRate = 10) => (amount * taxRate) / 100;
const calculateDiscount = (amount, discountRate = 5) =>
  (amount * discountRate) / 100;

const validInventory = inventory.filter(
  (product) =>
    typeof product.name === "string" &&
    product.name.trim() !== "" &&
    Number.isFinite(product.price) &&
    product.price > 0,
);

const total = calculateTotal(validInventory);
const tax = calculateTax(total);
const discount = calculateDiscount(total);
const finalAmount = total + tax - discount;

const affordableProducts = validInventory.filter(
  (product) => product.price < 200,
);

const report = validInventory.map(
  (product) => `${product.name.toUpperCase()}: $${product.price}`,
);

console.log("--- Processing Inventory Roster (forEach) ---");

validInventory.forEach((product) => {
  console.log(
    `* Item: ${product.name} ($${product.price}) -> Category: ${product.category}`,
  );
});

console.log("--- Financial Analytics ---");
console.log("Total Inventory Value: $" + total);
console.log("Tax (10%): $" + tax);
console.log("Discount (5%): $" + discount);
console.log("Final Amount: $" + finalAmount);
console.log(
  "Filtered Affordable Items (Under $200):",
  JSON.stringify(affordableProducts.map((product) => product.name)),
);
console.log("Formatted Report List:", JSON.stringify(report));

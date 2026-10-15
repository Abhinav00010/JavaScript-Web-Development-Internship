const subtotalInput = prompt("Enter bill amount:");
const tipInput = prompt("Enter tip percentage:");

const subtotal = Number(subtotalInput);
const tipPercentage = Number(tipInput);

if (
  subtotalInput === null ||
  tipInput === null ||
  subtotalInput.trim() === "" ||
  tipInput.trim() === "" ||
  !Number.isFinite(subtotal) ||
  !Number.isFinite(tipPercentage) ||
  subtotal < 0 ||
  tipPercentage < 0
) {
  console.log("Enter valid non-negative numbers.");
} else {
  const tip = (subtotal * tipPercentage) / 100;
  let total = subtotal;
  total += tip;

  console.log("Subtotal: $" + subtotal);
  console.log("Tip Percentage: " + tipPercentage + "%");
  console.log("Calculated Tip: $" + tip);
  console.log("Total Amount to Pay: $" + total);
}

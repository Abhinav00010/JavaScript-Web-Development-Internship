function rectangleArea(length = 5, width = 4) {
  return length * width;
}

const arrowArea = (length = 5, width = 4) => length * width;

console.log("Standard Function Area (Default 5x4):", rectangleArea());
console.log("Arrow Function Area (Custom 10x3):", arrowArea(10, 3));

function scopeDemo() {
  var functionVar = "Function scoped";
  let functionLet = "Local variable";

  if (true) {
    let blockVar = "Block scoped with let";
    const blockConst = "Also block scoped";

    console.log(blockVar);
    console.log(blockConst);
  }

  console.log(functionVar);
  console.log(functionLet);

  try {
    console.log(blockVar);
  } catch (error) {
    console.log(
      "Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)",
    );
  }
}

scopeDemo();

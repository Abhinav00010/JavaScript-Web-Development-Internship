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
    var blockVar = "Accessible outside block";
    let blockLet = "Block scoped";
    console.log(blockLet);
  }

  console.log(functionVar);
  console.log(functionLet);
  console.log(blockVar);
}

scopeDemo();

const scoreInput = prompt("Enter your test score:");
const score = Number(scoreInput);

if (
  scoreInput === null ||
  scoreInput.trim() === "" ||
  !Number.isFinite(score) ||
  score < 0 ||
  score > 100
) {
  console.log("Invalid score");
} else {
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  const status = score >= 60 ? "Passed" : "Failed";

  console.log("Score:", score);

  switch (grade) {
    case "A":
      console.log("Grade: A");
      break;
    case "B":
      console.log("Grade: B");
      break;
    case "C":
      console.log("Grade: C");
      break;
    case "D":
      console.log("Grade: D");
      break;
    default:
      console.log("Grade: F");
  }

  console.log("Status:", status);
}

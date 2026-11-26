function calculateGrade(marks) {
  if (marks < 0 || marks > 100) {
    return "Invalid marks";
  }
  if (marks >= 90) return "A+";
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  if (marks >= 50) return "D";
  return "F";
}

console.log("Student Grade:", calculateGrade(85));
console.log("Student Grade:", calculateGrade(95));
console.log("Student Grade:", calculateGrade(42));

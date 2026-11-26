function getStudentName() {
  return prompt("Enter the student's name:").trim();
}

function getMarks() {
  const marks = [];

  for (let subject = 1; subject <= 3; subject++) {
    const input = prompt(`Enter marks for subject ${subject} (0-100):`);
    const mark = Number(input);

    if (input === null || input.trim() === "" || !Number.isFinite(mark) || mark < 0 || mark > 100) {
      throw new Error(`Subject ${subject} marks must be a number from 0 to 100.`);
    }

    marks.push(mark);
  }

  return marks;
}

function calculateTotal(mark1, mark2, mark3) {
  return mark1 + mark2 + mark3;
}

function calculatePercentage(total) {
  return (total / 300) * 100;
}

function calculateGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
}

function checkResult(marks) {
  return marks.every((mark) => mark >= 40) ? "PASS" : "FAIL";
}

function displayResult(name, marks) {
  const total = calculateTotal(marks[0], marks[1], marks[2]);
  const percentage = calculatePercentage(total);
  const grade = calculateGrade(percentage);
  const result = checkResult(marks);

  console.log("Student Name:", name);
  marks.forEach((mark, index) => console.log(`Subject ${index + 1}:`, mark));
  console.log("Total Marks:", total);
  console.log("Percentage:", `${percentage.toFixed(2)}%`);
  console.log("Grade:", grade);
  console.log("Result:", result);
}

const studentName = getStudentName();
const subjectMarks = getMarks();
displayResult(studentName, subjectMarks);

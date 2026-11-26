const marks = [75, 45, 90, 32, 60];

console.log("Student marks:");
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

const newMarkInput = prompt("Enter the new student's mark:");
if (newMarkInput !== null && newMarkInput.trim() !== "") {
  const newMark = Number(newMarkInput);
  if (Number.isFinite(newMark) && newMark >= 0 && newMark <= 100) {
    marks.push(newMark);
  } else {
    console.log("Invalid mark. Enter a number from 0 to 100.");
  }
}

marks.pop();

let total = 0;
let highest = marks[0];
let lowest = marks[0];
let passedCount = 0;
const passedMarks = [];

for (const mark of marks) {
  total += mark;
  if (mark > highest) highest = mark;
  if (mark < lowest) lowest = mark;
  if (mark >= 40) {
    passedCount++;
    passedMarks.push(mark);
  }
}

console.log("Total marks:", total);
console.log("Average marks:", (total / marks.length).toFixed(2));
console.log("Highest mark:", highest);
console.log("Lowest mark:", lowest);
console.log("Students passed:", passedCount);
console.log("Passing marks:", passedMarks);
console.log("Updated marks:", marks);

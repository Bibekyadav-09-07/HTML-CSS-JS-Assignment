const student = {
  name: "Ram",
  rollNumber: 101,
  section: "A",
  age: 20,
  marks: 75,
  address: "Kathmandu",
};

console.log("Initial student details:", student);

const phoneNumber = prompt("Enter the student's phone number:");
if (phoneNumber !== null && phoneNumber.trim() !== "") {
  student.phoneNumber = phoneNumber.trim();
}

const newAddress = prompt("Enter the student's new address:");
if (newAddress !== null && newAddress.trim() !== "") {
  student.address = newAddress.trim();
}

const marksInput = prompt("Enter the student's updated marks (0-100):");
if (marksInput !== null && marksInput.trim() !== "") {
  const updatedMarks = Number(marksInput);
  if (Number.isFinite(updatedMarks) && updatedMarks >= 0 && updatedMarks <= 100) {
    student.marks = updatedMarks;
  } else {
    console.log("Invalid marks; the previous marks are retained.");
  }
}

console.log(student.marks >= 40 ? "Student Passed" : "Student Failed");
student.college = "ABC College";
delete student.age;

console.log("Has rollNumber:", "rollNumber" in student);
for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

console.log("Final student object:", student);

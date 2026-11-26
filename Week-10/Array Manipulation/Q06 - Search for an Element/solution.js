const students = ["Ram", "Sita", "Hari", "Gita", "Asha", "Nabin", "Mina", "Rita"];
const searchName = prompt("Enter a student name:");

if (students.includes(searchName?.trim())) {
  console.log("Student Found");
} else {
  console.log("Student Not Found");
}

const student = {
  name: "Ram",
  age: 20,
  section: "A",
  address: "Kathmandu",
};

const newAddress = prompt("Enter the student's new address:");
if (newAddress !== null && newAddress.trim() !== "") {
  student.address = newAddress.trim();
}

console.log("Updated student:", student);

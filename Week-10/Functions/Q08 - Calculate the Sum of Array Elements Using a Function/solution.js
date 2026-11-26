function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const numbers = [10, 20, 30, 40, 50];
const result = calculateSum(numbers);
console.log("Total Sum:", result);

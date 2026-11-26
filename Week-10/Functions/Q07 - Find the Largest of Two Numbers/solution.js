function findLargest(first, second) {
  if (first > second) {
    console.log("Largest Number:", first);
  } else if (second > first) {
    console.log("Largest Number:", second);
  } else {
    console.log("Both numbers are equal.");
  }
}

findLargest(25, 40);

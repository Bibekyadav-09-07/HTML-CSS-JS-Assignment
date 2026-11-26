const shoppingCart = {
  laptop: 80000,
  mouse: 1500,
  keyboard: 2500,
  headphones: 3000,
};
let total = 0;

for (const product in shoppingCart) {
  total += shoppingCart[product];
}

console.log("Total Price:", total);

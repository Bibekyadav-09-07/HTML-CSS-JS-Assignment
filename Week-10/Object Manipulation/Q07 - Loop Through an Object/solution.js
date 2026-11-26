const product = {
  name: "Laptop",
  brand: "Dell",
  price: 80000,
  quantity: 5,
};

for (const key in product) {
  console.log(`${key}: ${product[key]}`);
}

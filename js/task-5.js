const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let productsName = [];
  for (let array of arr) {
    if (prop === "name") {
      productsName.push(array.name);
    } else if (prop === "quantity") {
      productsName.push(array.quantity);
    }
    if (array.category) {
      if (prop == "category") {
        productsName.push(array.category);
      }
    }
  }
  return productsName;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

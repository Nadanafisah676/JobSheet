const products = [
  {
    id: 101,
    title: "Acer Aspire",
    price: 950,
    category: "laptops"
  },
  {
    id: 102,
    title: "Lenovo IdeaPad",
    price: 1100,
    category: "laptops"
  },
  {
    id: 103,
    title: "Samsung Galaxy",
    price: 700,
    category: "phones"
  },
  {
    id: 104,
    title: "Xiaomi Redmi",
    price: 450,
    category: "phones"
  },
  {
    id: 105,
    title: "JBL Speaker",
    price: 150,
    category: "audio"
  }
];

function linearSearch(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }

  return -1;
}

const numbers = [15, 25, 35, 45, 55];

console.log("Pencarian angka 35:");
console.log(linearSearch(numbers, 35));

console.log("Pencarian angka 90:");
console.log(linearSearch(numbers, 90));

function findProductById(productList, targetId) {
  for (let index = 0; index < productList.length; index++) {
    if (productList[index].id === targetId) {
      return productList[index];
    }
  }

  return null;
}

console.log("Produk dengan ID 104:");
console.log(findProductById(products, 104));

console.log("Produk dengan ID 200:");
console.log(findProductById(products, 200));
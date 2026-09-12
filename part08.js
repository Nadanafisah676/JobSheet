const numbers = [45, 10, 65, 25, 80, 35];

const smallToLarge = [...numbers].sort((a, b) => a - b);
const largeToSmall = [...numbers].sort((a, b) => b - a);

console.log("Urutan kecil ke besar:");
console.log(smallToLarge);

console.log("Urutan besar ke kecil:");
console.log(largeToSmall);

function bubbleSort(numbers) {
  const data = [...numbers];

  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        const temporary = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temporary;
      }
    }
  }

  return data;
}

console.log("Hasil Bubble Sort:");
console.log(bubbleSort(numbers));

const products = [
  {
    id: 101,
    title: "Acer Aspire",
    price: 950,
    rating: 4.3
  },
  {
    id: 102,
    title: "Lenovo IdeaPad",
    price: 1100,
    rating: 4.6
  },
  {
    id: 103,
    title: "Samsung Galaxy",
    price: 700,
    rating: 4.4
  },
  {
    id: 104,
    title: "Xiaomi Redmi",
    price: 450,
    rating: 4.2
  },
  {
    id: 105,
    title: "JBL Speaker",
    price: 150,
    rating: 4.0
  }
];

function sortProducts(productList, sortBy) {
  const result = [...productList];

  if (sortBy === "price-asc") {
    return result.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-desc") {
    return result.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    return result.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "title") {
    return result.sort((a, b) => a.title.localeCompare(b.title));
  }

  return result;
}

console.log("Produk termurah:");
console.log(sortProducts(products, "price-asc"));

console.log("Produk termahal:");
console.log(sortProducts(products, "price-desc"));

console.log("Rating tertinggi:");
console.log(sortProducts(products, "rating"));

console.log("Judul berdasarkan abjad:");
console.log(sortProducts(products, "title"));
const products = [
  {
    id: 101,
    title: "Acer Aspire",
    price: 950,
    category: "laptops",
    stock: 7,
    rating: 4.3
  },
  {
    id: 102,
    title: "Lenovo IdeaPad",
    price: 1100,
    category: "laptops",
    stock: 6,
    rating: 4.6
  },
  {
    id: 103,
    title: "Samsung Galaxy",
    price: 700,
    category: "phones",
    stock: 12,
    rating: 4.4
  },
  {
    id: 104,
    title: "Xiaomi Redmi",
    price: 450,
    category: "phones",
    stock: 18,
    rating: 4.2
  },
  {
    id: 105,
    title: "JBL Speaker",
    price: 150,
    category: "audio",
    stock: 9,
    rating: 4.0
  }
];

const productNames = products.map(product => product.title);

console.log("Nama Produk:");
console.log(productNames);

const premiumProducts = products.filter(
  product => product.price >= 700
);

console.log("Produk dengan harga minimal 700:");
console.log(premiumProducts);

const stockAmount = products.reduce(
  (total, product) => total + product.stock,
  0
);

console.log("Jumlah seluruh stock:");
console.log(stockAmount);

const laptopPrices = products
  .filter(product => product.category === "laptops")
  .map(product => product.price);

const averageLaptopPrice =
  laptopPrices.reduce((total, price) => total + price, 0) /
  laptopPrices.length;

console.log("Rata-rata harga laptop:");
console.log(averageLaptopPrice);

function getStatistics(products) {
  const prices = products.map(product => product.price);
  const ratings = products.map(product => product.rating);

  const totalProducts = products.length;

  const averagePrice =
    prices.reduce((total, price) => total + price, 0) /
    prices.length;

  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
  );

  const averageRating =
    ratings.reduce((total, rating) => total + rating, 0) /
    ratings.length;

  return {
    totalProducts,
    averagePrice,
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating
  };
}

const statistics = getStatistics(products);

console.log("Statistik:");
console.log(statistics);
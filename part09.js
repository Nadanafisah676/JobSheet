//excercise 1.1
const product = {
    title: "Laptop ASUS",
    price: 10000000,
    discountPercent: 15
};

function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

const finalPrice = calculateDiscountedPrice(
    product.price,
    product.discountPercent
);

console.log("Nama Produk:", product.title);
console.log("Harga Awal: Rp" + product.price);
console.log("Diskon:", product.discountPercent + "%");
console.log("Harga Setelah Diskon: Rp" + finalPrice);


//exercise 1.2

const cart = [
    {
        title: "Laptop ASUS",
        price: 10000000,
        discountPercent: 15
    },
    {
        title: "Mouse Robot",
        price: 300000,
        discountPercent: 10
    },
    {
        title: "Keyboard Mechanical",
        price: 800000,
        discountPercent: 20
    }
];

function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

function applyDiscounts(cart) {
    const result = [];

    for (const product of cart) {
        const finalPrice = calculateDiscountedPrice(
            product.price,
            product.discountPercent
        );

        result.push({
            title: product.title,
            originalPrice: product.price,
            discountPercent: product.discountPercent,
            finalPrice: finalPrice
        });
    }

    return result;
}

const discountedCart = applyDiscounts(cart);

console.log(discountedCart);

const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 4, title: "Tablet", price: 500, category: "tablets", stock: 10 },
    { id: 5, title: "Smartwatch", price: 250, category: "wearables", stock: 7 },
    { id: 6, title: "Keyboard", price: 75, category: "accessories", stock: 20 },
    { id: 7, title: "Mouse", price: 50, category: "accessories", stock: 12 },
    { id: 8, title: "Monitor", price: 300, category: "monitors", stock: 8 },
    { id: 9, title: "Webcam", price: 90, category: "cameras", stock: 6 },
    { id: 10, title: "Speaker", price: 120, category: "audio", stock: 14 },
    { id: 11, title: "Gaming Chair", price: 350, category: "furniture", stock: 4 },
    { id: 12, title: "Microphone", price: 150, category: "audio", stock: 9 },
    { id: 13, title: "Power Bank", price: 60, category: "accessories", stock: 25 },
    { id: 14, title: "USB Cable", price: 20, category: "accessories", stock: 30 },
    { id: 15, title: "External Hard Drive", price: 180, category: "storage", stock: 11 },
    { id: 16, title: "SSD", price: 200, category: "storage", stock: 13 },
    { id: 17, title: "Router", price: 100, category: "network", stock: 16 },
    { id: 18, title: "Printer", price: 220, category: "office", stock: 5 },
    { id: 19, title: "Projector", price: 450, category: "office", stock: 3 },
    { id: 20, title: "Smart TV", price: 700, category: "electronics", stock: 6 },
    { id: 21, title: "Game Console", price: 500, category: "gaming", stock: 8 },
    { id: 22, title: "Controller", price: 70, category: "gaming", stock: 18 },
    { id: 23, title: "VR Headset", price: 400, category: "gaming", stock: 4 },
    { id: 24, title: "Drone", price: 600, category: "cameras", stock: 5 },
    { id: 25, title: "Digital Camera", price: 900, category: "cameras", stock: 7 },
    { id: 26, title: "Earbuds", price: 80, category: "audio", stock: 20 },
    { id: 27, title: "Smartphone Case", price: 25, category: "accessories", stock: 35 },
    { id: 28, title: "Laptop Bag", price: 60, category: "accessories", stock: 15 },
    { id: 29, title: "Desk Lamp", price: 40, category: "furniture", stock: 10 },
    { id: 30, title: "USB Hub", price: 35, category: "accessories", stock: 22 }
];


// Exercise 2.1
function findProductById(products, id) {
    return products.find(product => product.id === id);
}


// Contoh penggunaan
const product = findProductById(products, 31);

console.log(product);

// Exercise 2.2
const lowStockProducts = products.filter(product => product.stock < 10);

console.log(lowStockProducts);

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    }
];

//lat.nested data
//1
const allTags = products.map(product => product.tags);

console.log(allTags);

function findProductsByTag(products, tag) {
    return products.filter(product =>
        product.tags.includes(tag)
    );
}

//2
const result = findProductsByTag(products, "electronics");

console.log(result);


//3
const reviewCounts = products.map(product => {
    return {
        id: product.id,
        title: product.title,
        totalReviews: product.reviews.length
    };
});

console.log(reviewCounts);

//4
const fiveStarReviews = products.flatMap(product =>
    product.reviews.filter(review => review.rating === 5)
);

console.log(fiveStarReviews);

//5
const averageRatings = products.map(product => {
    const totalRating = product.reviews.reduce(
        (total, review) => total + review.rating,
        0
    );

    const averageRating =
        totalRating / product.reviews.length;

    return {
        id: product.id,
        title: product.title,
        averageRating: averageRating
    };
});

console.log(averageRatings);

//6
const productWithMostReviews = products.reduce(
    (most, product) => {
        if (product.reviews.length > most.reviews.length) {
            return product;
        }

        return most;
    }
);

console.log(productWithMostReviews);

//7
const allReviewRatings = products.flatMap(product =>
    product.reviews.map(review => review.rating)
);

console.log(allReviewRatings);

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  },
  {
    id: 3,
    title: "Gaming Mouse",
    price: 60,
    rating: 4.7,
    stock: 25,
    category: "accessories",
    tags: ["gaming", "computer", "electronics"],
    dimensions: { width: 6, height: 4, depth: 12 },
    reviews: [
      { user: "F", rating: 5, comment: "Very responsive" }
    ]
  }
];

//4.1
function getAllTags(products) {
  return products.flatMap(p => p.tags);
}
console.log(getAllTags(products));

//4.2
function getAllComments(products) {
  return products.flatMap(p => p.reviews.map(r => r.comment));
}
console.log(getAllComments(products));

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

const products = [
  {
    id: 101,
    title: "Acer Aspire",
    price: 950
  },
  {
    id: 102,
    title: "Lenovo IdeaPad",
    price: 1100
  },
  {
    id: 103,
    title: "Samsung Galaxy",
    price: 700
  },
  {
    id: 104,
    title: "Xiaomi Redmi",
    price: 450
  },
  {
    id: 105,
    title: "JBL Speaker",
    price: 150
  }
];

function binarySearch(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (numbers[middle] === target) {
      return middle;
    }

    if (numbers[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

const sortedNumbers = [5, 12, 18, 27, 34, 42, 56, 70];

console.log("Pencarian angka 34:");
console.log(binarySearch(sortedNumbers, 34));

console.log("Pencarian angka 100:");
console.log(binarySearch(sortedNumbers, 100));

const sortedProducts = [...products].sort(
  (firstProduct, secondProduct) =>
    firstProduct.price - secondProduct.price
);

function binarySearchByPrice(productList, targetPrice) {
  let start = 0;
  let end = productList.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const currentProduct = productList[middle];

    if (currentProduct.price === targetPrice) {
      return currentProduct;
    }

    if (currentProduct.price < targetPrice) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return null;
}

console.log("Data produk setelah diurutkan:");
console.log(sortedProducts);

console.log("Produk dengan harga 700:");
console.log(binarySearchByPrice(sortedProducts, 700));

console.log("Produk dengan harga 2000:");
console.log(binarySearchByPrice(sortedProducts, 2000));

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
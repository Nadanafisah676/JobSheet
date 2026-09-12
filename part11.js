//11.1
const products = [
  { id: 1, title: "Laptop", category: "laptops", brand: "Asus", tags: ["computer", "electronics", "office"] },
  { id: 2, title: "Smartphone", category: "phones", brand: "Samsung", tags: ["mobile", "electronics"] },
  { id: 3, title: "Gaming Mouse", category: "accessories", brand: "Logitech", tags: ["gaming", "computer", "electronics"] },
  { id: 4, title: "Office Chair", category: "furniture", brand: "Ikea", tags: ["office", "furniture"] }
];

// Unique category
const uniqueCategories = [...new Set(products.map(p => p.category))];

// Unique brand
const uniqueBrands = [...new Set(products.map(p => p.brand))];

// Unique tags (pakai flatMap dulu, karena tags itu array di dalam array)
const uniqueTags = [...new Set(products.flatMap(p => p.tags))];

console.log("Unique categories:", uniqueCategories);
console.log("Unique brands:", uniqueBrands);
console.log("Unique tags:", uniqueTags);


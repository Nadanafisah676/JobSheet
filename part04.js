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
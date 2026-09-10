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


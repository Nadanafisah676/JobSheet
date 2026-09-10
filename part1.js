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
const products = {
    audio: [
        { id: 1, name: "Sony Headphones", price: 2000, image: "https://m.media-amazon.com/images/I/41tp0JPPlmL.jpg", quantity: 0, total: 0 },
        { id: 2, name: "JBL Speaker", price: 3000, image: "https://www.leafstudios.in/cdn/shop/files/Mainupdated_35a234be-57a2-41b6-b8db-79b54b7f5a7f_grande.jpg?v=1690372991", quantity: 0, total: 0 },
    ],
    gaming: [
        { id: 3, name: "Xbox Controller", price: 4000, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=dkp4djAxbnA1NnpYWDIvVklnLzRpUWtuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90T1lYTmlwOFY3ZXdFd0FRY2dWaUc5UlE", quantity: 0, total: 0 },
        { id: 4, name: "PlayStation 5", price: 50000, image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-pro-dualsense-image-block-01-en-16aug24", quantity: 0, total: 0 },
    ],
};

function displayProducts(category = "all") {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    const allProducts = category === "all"
        ? [...products.audio, ...products.gaming]
        : products[category];

    allProducts.map(product => {
        const productCard = `
            <div class="col-md-3">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">₹ <span id="price-${product.id}">${product.price.toFixed(2)}</span></p>
                        <button class="btn btn-dislike" id="dislike-btn-${product.id}">➖</button>
                        <span id="quantity-${product.id}">0</span>
                        <button class="btn btn-like" id="like-btn-${product.id}">➕</button>
                        <p>Total: ₹ <span id="total-${product.id}">0.00</span></p>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });

    attachEventListeners(allProducts);
}

function attachEventListeners(productsList) {
    productsList.forEach(product => {
        const likeBtn = document.getElementById(`like-btn-${product.id}`);
        const dislikeBtn = document.getElementById(`dislike-btn-${product.id}`);
        const quantityEle = document.getElementById(`quantity-${product.id}`);
        const totalEle = document.getElementById(`total-${product.id}`);

        likeBtn.addEventListener("click", event => {
            product.quantity++;
            product.total = product.quantity * product.price;
            quantityEle.textContent = product.quantity;
            totalEle.textContent = product.total.toFixed(2);
            updateGrandTotal();
        });

        dislikeBtn.addEventListener("click", event => {
            if (product.quantity > 0) {
                product.quantity--;
                product.total = product.quantity * product.price;
                quantityEle.textContent = product.quantity;
                totalEle.textContent = product.total.toFixed(2);
                updateGrandTotal();
            }
        });
    });
}

function updateGrandTotal() {
    const grandTotal = Object.values(products).flat().reduce((sum, product) => sum + product.total, 0);
    document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
}

document.getElementById("order-now-btn").addEventListener("click", () => {
    const grandTotal = document.getElementById("grand-total").textContent;
    alert(`Your order has been placed! Grand Total: ₹ ${grandTotal}`);
});
displayProducts("all");
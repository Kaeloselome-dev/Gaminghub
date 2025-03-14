document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutForm = document.getElementById("checkout-form");
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalPriceElement.textContent = "$0.00";
    } else {
        cart.forEach(item => {
            let price = 50; // Placeholder price
            total += price;
            let itemElement = document.createElement("li");
            itemElement.textContent = `${item} - $${price}`;
            cartItemsContainer.appendChild(itemElement);
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }
    
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Payment successful! Your order has been placed.");
        localStorage.removeItem("cart");
        window.location.href = "index.html"; // Redirect to homepage
    });
});

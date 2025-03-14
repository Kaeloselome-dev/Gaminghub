document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p class='text-center'>Your cart is empty.</p>";
    } else {
        cart.forEach((game, index) => {
            let div = document.createElement("div");
            div.classList.add("cart-item", "d-flex", "justify-content-between", "align-items-center", "p-2", "border", "mb-2");
            div.innerHTML = `<span>${game}</span> 
                <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Remove</button>`;
            cartContainer.appendChild(div);
        });
    }

    // Remove item from cart
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        });
    });

    // Clear cart
    document.getElementById("clear-cart").addEventListener("click", function () {
        localStorage.removeItem("cart");
        location.reload();
    });
});

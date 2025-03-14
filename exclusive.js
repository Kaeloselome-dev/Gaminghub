document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const gameTitle = this.closest(".card").querySelector(".card-title").innerText;
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (!cart.includes(gameTitle)) {
                cart.push(gameTitle);
                localStorage.setItem("cart", JSON.stringify(cart));
                alert(`${gameTitle} added to cart!`);
            } else {
                alert(`${gameTitle} is already in the cart.`);
            }
        });
    });
});

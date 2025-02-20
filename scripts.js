 const bar = document.getElementById('bar');
 const close = document.getElementById('close');
 const nav = document.getElementById('navbar');
 if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
     })
 }
 if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
 }
 /*   new */
 document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let product = {
                name: this.dataset.name,
                price: this.dataset.price,
                img: this.dataset.img,
                quantity: 1
            };

            let existingProduct = cart.find(item => item.name === product.name);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Product added to cart!");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartBody = document.getElementById("cart-body");

    function updateCart() {
        cartBody.innerHTML = "";
        cart.forEach((item, index) => {
            let row = `<tr>
                <td><img src="${item.img}" width="50"></td>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button onclick="removeItem(${index})">Remove</button></td>
            </tr>`;
            cartBody.innerHTML += row;
        });
    }

    window.removeItem = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    };

    window.clearCart = function () {
        localStorage.removeItem("cart");
        updateCart();
    };

    updateCart();
});

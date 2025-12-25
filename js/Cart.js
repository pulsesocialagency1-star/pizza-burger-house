let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

function showCart() {
  let box = document.getElementById("cart");
  let total = 0;
  box.innerHTML = "";

  cart.forEach(item => {
    box.innerHTML += `<p>${item.name} - Rs ${item.price}</p>`;
    total += item.price;
  });

  box.innerHTML += `<h3>Total: Rs ${total}</h3>`;
}

function sendOrder() {
  let msg = "Order Details:%0A";
  let total = 0;

  cart.forEach(i => {
    msg += `${i.name} - Rs ${i.price}%0A`;
    total += i.price;
  });

  msg += `%0ATotal: Rs ${total}`;

  window.open("https://wa.me/923001234567?text=" + msg);
}

if (document.getElementById("cart")) {
  showCart();
}

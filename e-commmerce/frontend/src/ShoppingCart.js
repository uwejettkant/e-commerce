import React, { useEffect, useState } from "react";

export default function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8040/shoppingcart")
      .then((res) => res.json())
      .then((data) => setShoppingCart(data));
  }, []);

  return (
    <section>
      {shoppingCart.map((cart) => (
        <ul key={cart._id}>
          <li>
            {cart.product && cart.product.name} {cart.amount}
          </li>
        </ul>
      ))}
    </section>
  );
}

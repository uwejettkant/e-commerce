import React, { useEffect, useState } from "react";

export default function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [amountUpdate, setAmountUpdate] = useState("");

  useEffect(() => {
    fetch("http://localhost:8040/shoppingcart")
      .then((res) => res.json())
      .then((data) => setShoppingCart(data));
  }, []);

  function updateAmount(amountUpdate, cartId) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("amount", amountUpdate);
    urlencoded.append("cartId", cartId);

    const requestOptions = {
      method: "PATCH",
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:8040/shoppingcart", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <header>Shopping Cart</header>
      <main>
        {shoppingCart.map((cart) => (
          <ul key={cart._id}>
            <li>
              {cart.product && cart.product.name}
              <input placeholder={cart.amount} onChange={handleAmountUpdate} />
              <button onClick={() => updateAmount(amountUpdate, cart._id)}>
                update amount
              </button>
              {console.log(amountUpdate)}
            </li>
          </ul>
        ))}
      </main>
    </>
  );

  function handleAmountUpdate(event) {
    setAmountUpdate(event.target.value);
  }
}

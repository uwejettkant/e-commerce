import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState("1");

  useEffect(() => {
    fetch("http://localhost:8040/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addToCart(productId, amount) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("amount", amount);
    urlencoded.append("productId", productId);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:8040/shoppingcart/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <>
    <header>Products</header>
    <main>
      {products.map((product) => (
        <ul key={product._id}>
          <li>{product.name}</li>
          <ul>
            <li>{product.description}</li>
            <li>{product.price} €</li>
          </ul>
          <form>
            <label htmlFor="amount">Amount</label>
            <input onChange={(event) => changeAmount(event)} id="amount" />
          </form>
          <button onClick={() => addToCart(product._id, amount)}>
            Add to Cart
          </button>
        </ul>
      ))}
    </main>
    </>
  );
  function changeAmount(event) {
    setAmount(event.target.value);
  }
}

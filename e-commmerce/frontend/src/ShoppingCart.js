import React, { useEffect, useState } from 'react'

export default function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState([])
  const [newAmount, setNewAmount] = useState(1)

  useEffect(() => {
    fetch('http://localhost:8040/shoppingcart')
      .then((res) => res.json())
      .then((data) => setShoppingCart(data))
  }, [setNewAmount])

  function updateAmount(newAmount, itemId) {
    const urlencoded = new URLSearchParams()
    urlencoded.append('amount', newAmount)
    urlencoded.append('itemId', itemId)

    const requestOptions = {
      method: 'PATCH',
      body: urlencoded,
      redirect: 'follow',
    }

    fetch('http://localhost:8040/shoppingcart', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }

  function deleteProductFromShoppingCart(itemId) {
    const urlencoded = new URLSearchParams()
    urlencoded.append('itemId', itemId)

    const requestOptions = {
      method: 'DELETE',
      body: urlencoded,
      redirect: 'follow',
    }

    fetch('http://localhost:8040/shoppingcart', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }

  return (
    <>
      <header>Shopping Cart</header>
      <main>
        {shoppingCart.map((cart) => (
          <ul key={cart._id}>
            <li>
              {cart.product && cart.product.name}
              <form>
                <label htmlFor="amount">Amount: </label>
                <select
                  onChange={(event) => {
                    setNewAmount(event.target.value)
                  }}
                  value={updateAmount(newAmount, cart._id)}
                  id="amount"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </form>
              {console.log(newAmount)}
              <button onClick={() => deleteProductFromShoppingCart(cart._id)}>
                X
              </button>
            </li>
          </ul>
        ))}
      </main>
    </>
  )
}

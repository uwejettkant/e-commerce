import React, { useEffect, useState } from 'react'

export default function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState([])
  const [newAmount, setNewAmount] = useState(1)

  useEffect(() => {
    fetch('http://localhost:8040/shoppingcart')
      .then((res) => res.json())
      .then((data) => setShoppingCart(data))
  }, [])

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
                  value={updateAmount(newAmount, cart._id)}
                  onChange={(event) => {
                    setNewAmount(event.target.value)
                  }}
                  id="amount"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
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

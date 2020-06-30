import React, { useEffect, useState } from 'react'

export default function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState([])
  const [newAmount, setNewAmount] = useState('')

  useEffect(() => {
    fetch('http://localhost:8040/shoppingcart')
      .then((res) => res.json())
      .then((data) => setShoppingCart(data))
  }, [shoppingCart])

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
              <input placeholder={cart.amount} onChange={handleAmountUpdate} />
              <button onClick={() => updateAmount(newAmount, cart._id)}>
                update amount
              </button>
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

  function handleAmountUpdate(event) {
    setNewAmount(event.target.value)
  }
}

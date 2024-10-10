import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'

const initialCartItems = [
  { id: 1, name: 'Product 1', price: 99.99, quantity: 2, image: 'https://picsum.photos/seed/1/400/300' },
  { id: 2, name: 'Product 2', price: 149.99, quantity: 1, image: 'https://picsum.photos/seed/2/400/300' },
]

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left">Product</th>
                  <th className="px-6 py-3 text-left">Price</th>
                  <th className="px-6 py-3 text-left">Quantity</th>
                  <th className="px-6 py-3 text-left">Total</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="border rounded-md px-2 py-1 w-16 text-center"
                      />
                    </td>
                    <td className="px-6 py-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800">
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold">
              Total: ${total.toFixed(2)}
            </div>
            <Link
              to="/checkout"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
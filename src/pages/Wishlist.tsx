import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, ShoppingCart } from 'lucide-react'

const initialWishlistItems = [
  { id: 1, name: 'Product 1', price: 99.99, image: 'https://picsum.photos/seed/1/400/300' },
  { id: 2, name: 'Product 2', price: 149.99, image: 'https://picsum.photos/seed/2/400/300' },
  { id: 3, name: 'Product 3', price: 199.99, image: 'https://picsum.photos/seed/3/400/300' },
]

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems)

  const removeItem = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id))
  }

  const addToCart = (id: number) => {
    console.log(`Added product ${id} to cart`)
    // Implement actual add to cart logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-600">${item.price.toFixed(2)}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => addToCart(item.id)}
                      className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                      <ShoppingCart size={20} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
import React, { useState } from 'react'
import { ShoppingCart, X } from 'lucide-react'

const initialCompareItems = [
  { id: 1, name: 'Product 1', price: 99.99, rating: 4.5, image: 'https://picsum.photos/seed/1/400/300' },
  { id: 2, name: 'Product 2', price: 149.99, rating: 4.2, image: 'https://picsum.photos/seed/2/400/300' },
  { id: 3, name: 'Product 3', price: 199.99, rating: 4.8, image: 'https://picsum.photos/seed/3/400/300' },
]

const Compare = () => {
  const [compareItems, setCompareItems] = useState(initialCompareItems)

  const removeItem = (id: number) => {
    setCompareItems(compareItems.filter(item => item.id !== id))
  }

  const addToCart = (id: number) => {
    console.log(`Added product ${id} to cart`)
    // Implement actual add to cart logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Compare Products</h1>
      {compareItems.length === 0 ? (
        <p className="text-gray-600">No products to compare.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Rating</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {compareItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{item.rating}/5</td>
                  <td className="px-6 py-4">
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
                        <X size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Compare
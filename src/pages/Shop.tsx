import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, BarChart2, ShoppingCart } from 'lucide-react'

const products = [
  { id: 1, name: 'Product 1', price: 99.99, image: 'https://picsum.photos/seed/1/400/300' },
  { id: 2, name: 'Product 2', price: 149.99, image: 'https://picsum.photos/seed/2/400/300' },
  { id: 3, name: 'Product 3', price: 199.99, image: 'https://picsum.photos/seed/3/400/300' },
  { id: 4, name: 'Product 4', price: 79.99, image: 'https://picsum.photos/seed/4/400/300' },
  { id: 5, name: 'Product 5', price: 129.99, image: 'https://picsum.photos/seed/5/400/300' },
  { id: 6, name: 'Product 6', price: 89.99, image: 'https://picsum.photos/seed/6/400/300' },
]

const Shop = () => {
  const [sortBy, setSortBy] = useState('name')

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    if (sortBy === 'price') return a.price - b.price
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Shop</h1>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <label htmlFor="sort" className="mr-2">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-2 py-1"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <p className="text-gray-600">{products.length} products</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                <div className="flex space-x-2">
                  <button className="text-gray-600 hover:text-indigo-600"><Heart size={20} /></button>
                  <button className="text-gray-600 hover:text-indigo-600"><BarChart2 size={20} /></button>
                  <button className="text-gray-600 hover:text-indigo-600"><ShoppingCart size={20} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, BarChart2, ShoppingCart } from 'lucide-react'

const ProductDetails = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)

  // Mock product data (replace with actual data fetching logic)
  const product = {
    id: parseInt(id as string),
    name: `Product ${id}`,
    price: 99.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: `https://picsum.photos/seed/${id}/400/300`
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name}(s) to cart`)
    // Implement actual add to cart logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-indigo-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border rounded-md px-2 py-1 w-16 text-center"
            />
          </div>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center"
            >
              <ShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300">
              <Heart />
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300">
              <BarChart2 />
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Product Details:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
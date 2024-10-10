import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Heart, BarChart2 } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">EShop</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
            <li><Link to="/shop" className="text-gray-600 hover:text-indigo-600">Shop</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-indigo-600"><ShoppingCart /></Link>
          <Link to="/wishlist" className="text-gray-600 hover:text-indigo-600"><Heart /></Link>
          <Link to="/compare" className="text-gray-600 hover:text-indigo-600"><BarChart2 /></Link>
        </div>
      </div>
    </header>
  )
}

export default Header